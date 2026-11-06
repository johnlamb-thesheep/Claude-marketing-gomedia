// Ad Alerts page: renders the latest report from /api/ad-alerts?k=<code>.
(() => {
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const money = (n) => (n == null ? "–" : "$" + (n >= 100 || Number.isInteger(n) ? n.toFixed(0) : n.toFixed(2)));
  const pct = (n) => (n == null ? "–" : (n * 100).toFixed(2) + "%");
  const ctr = (m) => (m && m.impr ? m.clicks / m.impr : null);
  const cpl = (m) => (m && m.leads ? m.spend / m.leads : null);
  const SECTIONS = [
    { kind: "opp", key: "opportunities", title: "🟢 Opportunities", hint: "Under-spent ads with an early positive sign" },
    { kind: "fatigue", key: "fatigue", title: "⚠️ Creative fatigue", hint: "Spending ads showing wear-out signs" },
    { kind: "lowctr", key: "lowCtr", title: "🔻 Low CTR", hint: "Seen a lot, clicked little" },
  ];
  const SEV = { 1: ["b1", "WATCH"], 2: ["b2", "LIKELY"], 3: ["b3", "WORN OUT"] };

  let report = null;
  const state = { group: "all", kind: (location.hash || "#all").slice(1) };

  function itemHtml(it, acc) {
    const a = it.ad;
    const url = `https://adsmanager.facebook.com/adsmanager/manage/ads?act=${acc}&selected_ad_ids=${encodeURIComponent(a.id)}`;
    const badge = it.kind === "fatigue" ? `<span class="badge ${SEV[it.severity][0]}">${SEV[it.severity][1]}</span>` : "";
    const mini = it.kind === "opp"
      ? [["Lifetime spend", money(a.life.spend)], ["Leads", a.life.leads], ["CPL", money(cpl(a.life))], ["Link CTR", pct(ctr(a.life))]]
      : [["Spend 7d", money(a.cur.spend)], ["Leads 7d", a.cur.leads], ["CPL 7d", money(cpl(a.cur))], ["CTR 7d", pct(ctr(a.cur))]];
    return `<article class="card item ${it.kind} s${it.severity}">
      <div>${badge}<a class="name" href="${url}" target="_blank" rel="noopener">${esc(a.name)}</a></div>
      <div class="where">${esc(a.campaign)} › ${esc(a.adset)}</div>
      <div class="mini">${mini.map(([l, v]) => `<div>${l}<b>${v}</b></div>`).join("")}</div>
      <div class="line">${esc(it.line)}</div>
      <div class="todo"><b>${esc(it.why)}</b> ${esc(it.todo)}</div>
    </article>`;
  }

  function stat(label, value, sub, cls = "") {
    return `<div class="card stat"><div class="label">${label}</div><div class="value ${cls}">${value}</div>${sub ? `<div class="sub">${sub}</div>` : ""}</div>`;
  }

  function render() {
    const groups = report.groups.filter((g) => state.group === "all" || g.key === state.group);
    for (const s of SECTIONS) $("n-" + s.kind).textContent = groups.reduce((n, g) => n + g[s.key].length, 0);
    document.querySelectorAll(".tabs a").forEach((a) => a.classList.toggle("active", a.dataset.kind === state.kind));

    $("groups").innerHTML = groups.map((g) => {
      const c = g.week.cur, p = g.week.prev, cc = cpl(c), pc = cpl(p);
      const head = `<div class="group-head"><h2>${esc(g.label)}</h2><span class="target">Target CPL ${money(g.targetCpl)} · ${g.activeAds} active ads</span></div>
        <div class="summary">
          ${stat("Spend, last 7 days", money(c.spend), `Week before ${money(p.spend)}`)}
          ${stat("Leads, last 7 days", c.leads, `Week before ${p.leads}`)}
          ${stat("CPL, last 7 days", money(cc), `Week before ${money(pc)}`, cc == null ? "" : cc <= g.targetCpl ? "good" : "bad")}
          ${stat("Alerts", g.opportunities.length + g.fatigue.length + g.lowCtr.length, `${g.opportunities.length} opp · ${g.fatigue.length} fatigue · ${g.lowCtr.length} CTR`)}
        </div>`;
      const body = SECTIONS.filter((s) => state.kind === "all" || s.kind === state.kind).map((s) => {
        const list = g[s.key];
        return `<div class="section-title">${s.title} <span class="muted">${s.hint}</span></div>` +
          (list.length ? `<div class="items">${list.map((it) => itemHtml(it, report.accountId)).join("")}</div>` : `<div class="none">Nothing to flag.</div>`) +
          (s.kind === "opp" && g.starved ? `<div class="starved">⚪ ${g.starved} more ad${g.starved > 1 ? "s" : ""} running 7+ days that Meta is barely spending on, with no positive sign. Refresh the hook/visual or let them go.</div>` : "");
      }).join("");
      return `<section class="group">${head}${body}</section>`;
    }).join("");
  }

  function renderRules(r, groups) {
    const t = groups.map((g) => `${esc(g.label)} ${money(g.targetCpl)}`).join(", ");
    $("rules").innerHTML = `<ul>
      <li>Every rule is a multiple of the target CPL (${t}). Only complete days count (up to yesterday).</li>
      <li><b>Opportunity:</b> active ${r.opportunity.minAgeDays}+ days, lifetime spend under ${r.opportunity.spendMultiple}× target, and an early positive sign: a lead at or below target CPL, or link CTR at or above the median of the other ads (${r.opportunity.minImpressionsForCtr}+ impressions).</li>
      <li><b>Fatigue</b> (lifetime spend ${r.fatigue.minLifetimeMultiple}× target or more, and ${r.fatigue.minWeekMultiple}× target in the last 7 days): frequency over ${r.fatigue.frequencyWarn} (over ${r.fatigue.frequencyCritical} is critical), CTR down ${r.fatigue.ctrDrop * 100}%+ vs the week before, CPM up ${r.fatigue.cpmRise * 100}%+, or 7-day CPL over ${r.fatigue.cplMultiple}× target. One sign = watch, two = likely, critical + another = worn out.</li>
      <li><b>Low CTR:</b> ${r.lowCtr.minImpressions.toLocaleString()}+ impressions in the last 7 days and link CTR under ${r.lowCtr.ratio * 100}% of the other ads' median.</li>
      <li>Rule-based and read-only: nothing is changed in the ad account. Fatigue calls are confirmed in the Monday review.</li>
    </ul>`;
  }

  function fail(msg) { $("error").hidden = false; $("error").textContent = msg; document.querySelector("main").hidden = true; document.querySelector(".tabs").hidden = true; document.querySelector(".controls").hidden = true; }

  async function load() {
    const code = location.pathname.split("/").filter(Boolean)[1] || new URLSearchParams(location.search).get("k") || "";
    if (!code) return fail("Please use the link from the Slack alert.");
    try {
      const res = await fetch(`/api/ad-alerts?k=${encodeURIComponent(code)}`, { cache: "no-store" });
      if (res.status === 404) return fail("This link isn't valid. Please use the link from the Slack alert.");
      if (res.status === 503) return fail("The first check hasn't run yet. It runs every hour, so try again shortly.");
      if (!res.ok) throw new Error("HTTP " + res.status);
      report = await res.json();
    } catch (e) { return fail("Couldn't load the alerts. Please refresh in a minute."); }

    const g = $("group");
    report.groups.forEach((x) => g.insertAdjacentHTML("beforeend", `<option value="${esc(x.key)}">${esc(x.label)}</option>`));
    g.addEventListener("change", () => { state.group = g.value; render(); });
    window.addEventListener("hashchange", () => { state.kind = (location.hash || "#all").slice(1); render(); });
    const when = new Date(report.generatedAt);
    $("meta").textContent = `Checked ${when.toLocaleString("en-SG", { timeZone: "Asia/Singapore", dateStyle: "medium", timeStyle: "short" })} · data up to ${report.windows.cur.until} · refreshes every hour`;
    renderRules(report.rules, report.groups);
    render();
  }
  load();
})();
