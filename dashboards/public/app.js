/* Client ads dashboard. Reads one client's data file and renders 3 pages.
   Data shape: see dashboards/scripts/make_demo_data.py */
(function () {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const state = { data: null, range: "7", campaign: "all", start: null, end: null, charts: {} };

  // ---------- helpers ----------
  const DAY = 86400000;
  const toDate = (s) => new Date(s + "T00:00:00");
  const iso = (d) => {
    const z = new Date(d.getTime() - d.getTimezoneOffset() * 60000);
    return z.toISOString().slice(0, 10);
  };
  const addDays = (d, n) => new Date(d.getTime() + n * DAY);
  const fmtDate = (d) => d.toLocaleDateString("en-SG", { day: "numeric", month: "short", year: "numeric" });
  const money = (n) => (n == null || !isFinite(n) ? "–" : n.toLocaleString("en-SG", { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
  const int = (n) => (n == null || !isFinite(n) ? "–" : Math.round(n).toLocaleString("en-SG"));
  const pct = (n) => (n == null || !isFinite(n) ? "–" : (n * 100).toFixed(2) + "%");
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function sum(rows) {
    const t = { spend: 0, impressions: 0, reach: 0, clicks: 0, linkClicks: 0, leads: 0, forms: 0, chats: 0 };
    for (const r of rows) for (const k in t) t[k] += r[k] || 0;
    t.cpl = t.leads ? t.spend / t.leads : null;
    t.ctr = t.impressions ? t.clicks / t.impressions : null;
    t.cpm = t.impressions ? (t.spend / t.impressions) * 1000 : null;
    t.cpc = t.linkClicks ? t.spend / t.linkClicks : null;
    return t;
  }
  const change = (cur, prev) => (prev == null || cur == null || prev === 0 ? null : (cur - prev) / prev);

  // ---------- date range ----------
  function currentRange() {
    const max = toDate(state.data.maxDate);
    let start, end = max;
    if (state.range === "custom" && state.start && state.end) {
      start = toDate(state.start); end = toDate(state.end);
      if (start > end) [start, end] = [end, start];
    } else if (state.range === "month") {
      start = new Date(max.getFullYear(), max.getMonth(), 1);
    } else if (state.range === "lastmonth") {
      start = new Date(max.getFullYear(), max.getMonth() - 1, 1);
      end = new Date(max.getFullYear(), max.getMonth(), 0);
    } else if (state.range === "year") {
      start = new Date(max.getFullYear(), 0, 1);
    } else if (state.range === "lastyear") {
      start = new Date(max.getFullYear() - 1, 0, 1);
      end = new Date(max.getFullYear() - 1, 11, 31);
    } else if (state.range === "all") {
      start = toDate(state.data.minDate || state.data.maxDate);
    } else {
      start = addDays(max, -(Number(state.range) - 1));
    }
    const days = Math.round((end - start) / DAY) + 1;
    return { start, end, days, prevStart: addDays(start, -days), prevEnd: addDays(start, -1) };
  }

  function rowsBetween(start, end) {
    const s = iso(start), e = iso(end);
    const adCampaign = state.data.adCampaign;
    return state.data.daily.filter((r) =>
      r.date >= s && r.date <= e && (state.campaign === "all" || adCampaign[r.adId] === state.campaign));
  }

  // ---------- page 1: overview ----------
  function renderKpis(cur, prev) {
    const budget = state.data.client.monthlyBudget;
    const cards = [
      { title: "Total number of leads", label: state.data.client.countChats !== false ? `Forms ${int(cur.forms)} · Chats ${int(cur.chats)}` : "Form leads",
        v: int(cur.leads), d: change(cur.leads, prev.leads), up: "good" },
      { title: "Total CPL", label: "CPL (cost per lead)", v: money(cur.cpl), d: change(cur.cpl, prev.cpl), up: "bad" },
      { title: "Total spend", label: "Amount spent (" + state.data.client.currency + ")", v: money(cur.spend), d: change(cur.spend, prev.spend), up: "neutral" },
      { title: "Total impressions", label: "Impressions", v: int(cur.impressions), d: change(cur.impressions, prev.impressions), up: "good" },
      { title: "Total CTR", label: "CTR (all)", v: pct(cur.ctr), d: change(cur.ctr, prev.ctr), up: "good" },
    ];
    let html = cards.map((c) => {
      let delta = '<div class="delta neutral">no previous data</div>';
      if (c.d != null) {
        const arrow = c.d >= 0 ? "▲" : "▼";
        let cls = "neutral";
        if (c.up !== "neutral" && Math.abs(c.d) >= 0.005) cls = (c.d > 0) === (c.up === "good") ? "good" : "bad";
        delta = `<div class="delta ${cls}">${arrow} ${(c.d * 100).toFixed(1)}% <span class="muted">vs previous</span></div>`;
      }
      return `<div class="card kpi"><p class="title">${c.title}</p><div class="label">${c.label}</div>
        <div class="value">${c.v}</div>${delta}</div>`;
    }).join("");

    if (budget) {
      const max = toDate(state.data.maxDate);
      const monthStart = iso(new Date(max.getFullYear(), max.getMonth(), 1));
      const mtd = state.data.daily.filter((r) => r.date >= monthStart).reduce((a, r) => a + r.spend, 0);
      const used = Math.min(mtd / budget, 1);
      html += `<div class="card kpi"><p class="title">Monthly budget</p><div class="label">Spent this month / budget</div>
        <div class="value">${money(mtd)}</div><div class="delta neutral">of ${money(budget)} · ${(used * 100).toFixed(0)}% used</div>
        <div class="budget-bar"><span style="width:${used * 100}%"></span></div></div>`;
    }
    $("kpis").innerHTML = html;
  }

  function renderDailyChart(r) {
    const labels = [], leads = [], cpl = [], spend = [];
    const unit = r.days > 400 ? "month" : r.days > 92 ? "week" : "day";
    $("dailyTitle").textContent = `CPL, leads & spend per ${unit}`;
    const rows = rowsBetween(r.start, r.end);
    const buckets = new Map();
    const keyOf = (s) => {
      if (unit === "day") return s;
      if (unit === "month") return s.slice(0, 7) + "-01";
      const d = toDate(s); const dow = (d.getDay() + 6) % 7; // Monday start
      return iso(addDays(d, -dow));
    };
    for (let d = r.start; d <= r.end; d = addDays(d, 1)) { const k = keyOf(iso(d)); if (!buckets.has(k)) buckets.set(k, []); }
    for (const row of rows) buckets.get(keyOf(row.date))?.push(row);
    for (const [k, list] of buckets) {
      const t = sum(list), d = toDate(k);
      labels.push(unit === "month" ? d.toLocaleDateString("en-SG", { month: "short", year: "numeric" })
        : d.toLocaleDateString("en-SG", { day: "numeric", month: "short" }));
      leads.push(t.leads); cpl.push(t.cpl ? +t.cpl.toFixed(2) : null); spend.push(+t.spend.toFixed(2));
    }
    const showLabels = labels.length <= 31;
    state.charts.daily?.destroy();
    state.charts.daily = new Chart($("dailyChart"), {
      data: {
        labels,
        datasets: [
          { type: "line", label: "Leads", data: leads, yAxisID: "y", borderColor: "#111", backgroundColor: "#111", pointRadius: 4, tension: 0, order: 0,
            datalabels: { display: showLabels, align: "top", color: "#111", font: { weight: 600 } } },
          { type: "bar", label: "CPL (cost per lead)", data: cpl, yAxisID: "y1", backgroundColor: "#f44336", borderRadius: 2, order: 1,
            datalabels: { display: showLabels && labels.length <= 14, anchor: "end", align: "start", color: "#fff", font: { weight: 600 } } },
          { type: "line", label: "Spend", data: spend, yAxisID: "y2", borderColor: "#9ca3af", borderDash: [5, 4], pointRadius: 0, borderWidth: 1.5, order: 2,
            datalabels: { display: false } },
        ],
      },
      options: {
        maintainAspectRatio: false, interaction: { mode: "index", intersect: false },
        plugins: { legend: { position: "top", align: "start" } },
        scales: {
          y: { position: "left", beginAtZero: true, title: { display: true, text: "Leads" }, ticks: { precision: 0 } },
          y1: { position: "right", beginAtZero: true, grid: { drawOnChartArea: false }, title: { display: true, text: "CPL (" + state.data.client.currency + ")" } },
          y2: { display: false, beginAtZero: true },
        },
      },
    });
  }

  function renderInsights() {
    const ai = state.data.insights;
    if (!ai) { $("insights").hidden = true; return; }
    const kind = { rules: "Auto summary", ai: "AI summary", placeholder: "AI summary (sample)" }[ai.kind] || "AI summary";
    document.querySelector(".ai-tag").firstChild.textContent = kind + " · ";
    $("aiPeriod").textContent = `${ai.period} · updated ${fmtDate(new Date(ai.generatedAt))}`;
    $("aiSummary").textContent = ai.summary;
    $("aiCampaigns").innerHTML = ai.byCampaign.map((c) => `<li><strong>${esc(c.name)}</strong> — ${esc(c.text)}</li>`).join("");
    $("aiActions").innerHTML = ai.actions.map((a) => `<li>${esc(a)}</li>`).join("");
  }

  // ---------- page 2: campaigns ----------
  function renderCampaigns(r) {
    const cur = rowsBetween(r.start, r.end), prev = rowsBetween(r.prevStart, r.prevEnd);
    const adCampaign = state.data.adCampaign;
    const rows = state.data.campaigns
      .filter((c) => state.campaign === "all" || c.id === state.campaign)
      .map((c) => {
        const t = sum(cur.filter((x) => adCampaign[x.adId] === c.id));
        const p = sum(prev.filter((x) => adCampaign[x.adId] === c.id));
        return { c, t, dl: change(t.leads, p.leads) };
      }).sort((a, b) => b.t.leads - a.t.leads || b.t.spend - a.t.spend);

    $("campaignTable").innerHTML = `<thead><tr><th>Campaign</th><th class="num">Spend</th><th class="num">Leads</th>
      <th class="num">Forms</th><th class="num">Chats</th><th class="num">Leads vs prev.</th><th class="num">CPL</th><th class="num">Impressions</th><th class="num">CTR</th><th class="num">CPM</th><th class="num">Link CPC</th></tr></thead><tbody>` +
      rows.map(({ c, t, dl }) => `<tr><td>${esc(c.name)}</td><td class="num">${money(t.spend)}</td><td class="num">${int(t.leads)}</td>
        <td class="num">${int(t.forms)}</td><td class="num">${int(t.chats)}</td>
        <td class="num">${dl == null ? "–" : (dl >= 0 ? "▲ " : "▼ ") + (dl * 100).toFixed(0) + "%"}</td>
        <td class="num">${money(t.cpl)}</td><td class="num">${int(t.impressions)}</td><td class="num">${pct(t.ctr)}</td>
        <td class="num">${money(t.cpm)}</td><td class="num">${money(t.cpc)}</td></tr>`).join("") + "</tbody>";

    state.charts.campaign?.destroy();
    state.charts.campaign = new Chart($("campaignChart"), {
      data: {
        labels: rows.map((x) => x.c.name),
        datasets: [
          { type: "bar", label: "Spend", data: rows.map((x) => +x.t.spend.toFixed(2)), backgroundColor: "#b388ff", yAxisID: "y1" },
          { type: "bar", label: "Leads", data: rows.map((x) => x.t.leads), backgroundColor: "#4285f4", yAxisID: "y" },
        ],
      },
      options: {
        maintainAspectRatio: false,
        plugins: { legend: { position: "top", align: "start" }, datalabels: { anchor: "end", align: "end", color: "#374151" } },
        scales: {
          y: { beginAtZero: true, position: "left", title: { display: true, text: "Leads" }, ticks: { precision: 0 } },
          y1: { beginAtZero: true, position: "right", grid: { drawOnChartArea: false }, title: { display: true, text: "Spend (" + state.data.client.currency + ")" } },
        },
      },
    });
  }

  // ---------- page 3: creatives ----------
  function placeholderThumb(ad) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="360" height="360" viewBox="0 0 360 360">
      <rect width="360" height="360" fill="${ad.color || "#555"}"/>
      <rect x="24" y="24" width="312" height="312" fill="none" stroke="rgba(255,255,255,.35)" stroke-width="2" stroke-dasharray="8 6"/>
      <text x="180" y="165" fill="#fff" font-family="Arial" font-size="30" font-weight="700" text-anchor="middle">${esc(ad.label || "Creative")}</text>
      <text x="180" y="205" fill="rgba(255,255,255,.8)" font-family="Arial" font-size="18" text-anchor="middle">Placeholder creative ${ad.placeholderNo || ""}</text></svg>`;
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }

  function renderCreatives(r) {
    const cur = rowsBetween(r.start, r.end);
    const campName = Object.fromEntries(state.data.campaigns.map((c) => [c.id, c.name]));
    const rows = state.data.ads
      .filter((a) => state.campaign === "all" || a.campaignId === state.campaign)
      .map((a) => ({ a, t: sum(cur.filter((x) => x.adId === a.id)) }))
      .filter((x) => x.t.spend > 0)
      .sort((x, y) => y.t.leads - x.t.leads || (x.t.cpl ?? 1e9) - (y.t.cpl ?? 1e9));

    const max = (k) => Math.max(1e-9, ...rows.map((x) => x.t[k] || 0));
    const mL = max("leads"), mC = max("cpl"), mS = max("spend"), mT = max("ctr");
    const bar = (val, m, color, text) =>
      `<div class="barcell"><span class="n">${text}</span><span class="b" style="width:${Math.max(2, ((val || 0) / m) * 120)}px;background:${color}"></span></div>`;

    $("creativeTable").innerHTML = `<thead><tr><th>Ad thumbnail</th><th>Ad URL</th><th>Campaign</th><th>Ad title</th><th>Ad primary text</th>
      <th>Leads ▾</th><th>CPL (cost per lead)</th><th>Amount spent</th><th>CTR (all)</th></tr></thead><tbody>` +
      (rows.length ? rows.map(({ a, t }) => {
        const thumb = a.thumbnailUrl || placeholderThumb(a);
        const link = a.postUrl && a.postUrl !== "#" ? `<a href="${esc(a.postUrl)}" target="_blank" rel="noopener">View post ↗</a>` : '<span class="muted">Post link (placeholder)</span>';
        return `<tr>
          <td class="thumb"><img src="${esc(thumb)}" data-fallback="${placeholderThumb(a)}" alt="${esc(a.title)}" loading="lazy"></td>
          <td>${link}</td>
          <td>${esc(campName[a.campaignId])}</td>
          <td>${esc(a.title)}</td>
          <td class="text"><div class="clamp">${esc(a.primaryText)}</div></td>
          <td>${bar(t.leads, mL, "var(--blue)", int(t.leads))}${t.chats ? `<div class="muted" style="font-size:12px;margin-top:4px">Forms ${int(t.forms)} · Chats ${int(t.chats)}</div>` : ""}</td>
          <td>${bar(t.cpl, mC, "var(--orange)", money(t.cpl))}</td>
          <td>${bar(t.spend, mS, "var(--purple)", money(t.spend))}</td>
          <td>${bar(t.ctr, mT, "var(--lime)", pct(t.ctr))}</td></tr>`;
      }).join("") : '<tr><td colspan="9" class="muted">No ads spent in this period.</td></tr>') + "</tbody>";
    $("creativeTable").querySelectorAll("img[data-fallback]").forEach((img) => {
      img.addEventListener("error", () => { if (img.src !== img.dataset.fallback) img.src = img.dataset.fallback; }, { once: true });
    });
  }

  // ---------- render + routing ----------
  function render() {
    const r = currentRange();
    const cur = sum(rowsBetween(r.start, r.end)), prev = sum(rowsBetween(r.prevStart, r.prevEnd));
    const upd = new Date(state.data.updatedAt);
    const updText = upd.toLocaleString("en-SG", { day: "numeric", month: "short", hour: "numeric", minute: "2-digit" });
    const hist = state.data.sync && !state.data.sync.complete ? " · older history still loading" : "";
    const cmp = state.range === "all" ? "" : ` · compared with ${fmtDate(r.prevStart)} – ${fmtDate(r.prevEnd)}`;
    $("meta").textContent = `${state.data.client.name} · ${fmtDate(r.start)} – ${fmtDate(r.end)}${cmp} · updated ${updText}${hist}`;
    renderKpis(cur, prev);
    renderDailyChart(r);
    renderInsights();
    renderCampaigns(r);
    renderCreatives(r);
  }

  function showPage() {
    const page = (location.hash || "#overview").slice(1);
    const valid = ["overview", "campaigns", "creatives"].includes(page) ? page : "overview";
    document.querySelectorAll(".page").forEach((p) => (p.hidden = p.id !== "page-" + valid));
    document.querySelectorAll(".tabs a").forEach((a) => a.classList.toggle("active", a.dataset.page === valid));
    Object.values(state.charts).forEach((c) => c?.resize());
  }

  function fail(msg) {
    document.querySelector("main").hidden = true;
    $("error").hidden = false;
    $("error").textContent = msg;
  }

  async function init() {
    if (window.ChartDataLabels) Chart.register(ChartDataLabels);
    Chart.defaults.font.family = "Raleway, system-ui, sans-serif";
    Chart.defaults.plugins.datalabels = Object.assign(Chart.defaults.plugins.datalabels || {}, { display: false });

    const m = location.pathname.match(/\/c\/([A-Za-z0-9_-]+)/);
    const slug = m ? m[1] : new URLSearchParams(location.search).get("c");
    if (!slug) return fail("This dashboard link is incomplete. Please use the link your account manager sent you.");

    let data;
    try {
      let res = await fetch(`/api/data?c=${encodeURIComponent(slug)}`, { cache: "no-store" });
      if (res.status === 404) res = await fetch(`/data/${slug}.json`, { cache: "no-store" }); // sample dashboards
      if (res.status === 503) return fail("This dashboard's data connection isn't set up yet. Please check back soon.");
      if (!res.ok) throw new Error(res.status);
      data = await res.json();
    } catch (e) {
      return fail("We couldn't load this dashboard. Please check the link with your account manager, or try again in a few minutes.");
    }
    // Leads = form leads + chats started (unless this client counts forms only)
    const countChats = data.client.countChats !== false;
    data.daily.forEach((r) => { r.forms = r.leads || 0; r.chats = r.messages || 0; r.leads = r.forms + (countChats ? r.chats : 0); });
    data.adCampaign = Object.fromEntries(data.ads.map((a) => [a.id, a.campaignId]));
    data.maxDate = data.until || data.daily.reduce((m, r) => (r.date > m ? r.date : m), "");
    data.minDate = data.sync?.oldest || data.daily.reduce((m, r) => (!m || r.date < m ? r.date : m), "");
    $("start").min = $("end").min = data.minDate;
    $("start").max = $("end").max = data.maxDate;
    state.data = data;

    document.title = `${data.client.name} · Ads Dashboard`;
    $("logo").textContent = data.client.logoText || data.client.name;
    $("tagline").textContent = data.client.tagline || data.client.accountName;
    $("placeholderBanner").hidden = !data.placeholder;
    $("campaign").innerHTML = '<option value="all">All campaigns</option>' +
      data.campaigns.map((c) => `<option value="${esc(c.id)}">${esc(c.name)}</option>`).join("");
    $("end").value = data.maxDate;
    $("start").value = iso(addDays(toDate(data.maxDate), -6));

    $("campaign").onchange = (e) => { state.campaign = e.target.value; render(); };
    $("range").onchange = (e) => {
      state.range = e.target.value;
      $("customBox").hidden = state.range !== "custom";
      if (state.range === "custom") { state.start = $("start").value; state.end = $("end").value; }
      render();
    };
    $("start").onchange = $("end").onchange = () => { state.start = $("start").value; state.end = $("end").value; render(); };
    window.addEventListener("hashchange", showPage);

    render();
    showPage();
  }

  init();
})();
