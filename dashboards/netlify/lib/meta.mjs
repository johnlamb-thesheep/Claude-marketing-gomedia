// Shared Meta sync logic used by the scheduled refresh job and the data endpoint.
// Data per client is stored in Netlify Blobs under the client's secret code.

const API = `https://graph.facebook.com/${process.env.META_API_VERSION || "v23.0"}`;
const TZ = "Asia/Singapore";
const MAX_HISTORY_DAYS = 1100; // Meta keeps ~37 months of insights; stay safely inside it
const CHUNK_DAYS = 30;
const FIRST_DAYS = 14; // first run: just enough for the default views, the rest backfills in the background
const RECENT_DAYS = 3; // Meta keeps adjusting recent days, so re-fetch them each refresh
const DAILY_HOUR_SGT = 6; // recent days re-pulled once a day, on the first run after 6am Singapore
const SGT_MS = 8 * 60 * 60 * 1000;

/** The most recent 6am Singapore time at or before `now`. */
function lastDailyCutoff(now) {
  const sg = new Date(now.getTime() + SGT_MS);
  let cut = Date.UTC(sg.getUTCFullYear(), sg.getUTCMonth(), sg.getUTCDate(), DAILY_HOUR_SGT) - SGT_MS;
  if (cut > now.getTime()) cut -= 24 * 60 * 60 * 1000;
  return cut;
}
const ADS_REFRESH_MS = 20 * 60 * 60 * 1000; // thumbnails expire, refresh ad details daily

export const STORE = { name: "dashboards", consistency: "strong" };
export const metaToken = () => process.env.META_ACCESS_TOKEN || process.env.Meta_access_token || process.env.meta_access_token || "";

// ---------- dates ----------
export const ymd = (d) =>
  new Intl.DateTimeFormat("en-CA", { timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit" }).format(d);
export const addDays = (s, n) => new Date(Date.parse(s + "T00:00:00Z") + n * 86400000).toISOString().slice(0, 10);
const maxStr = (a, b) => (a > b ? a : b);

// ---------- Graph API ----------
export async function graph(path, params, token) {
  const url = new URL(`${API}/${path}`);
  for (const [k, v] of Object.entries(params || {})) url.searchParams.set(k, typeof v === "string" ? v : JSON.stringify(v));
  url.searchParams.set("access_token", token);
  const res = await fetch(url, { signal: AbortSignal.timeout(15000) });
  const body = await res.json().catch(() => ({}));
  if (!res.ok || body.error) throw new Error(body.error?.message || `HTTP ${res.status}`);
  return body;
}

export async function graphAll(path, params, token, maxPages = 40) {
  let page = await graph(path, params, token);
  const out = [...(page.data || [])];
  for (let n = 0; page.paging?.next && n < maxPages; n++) {
    const res = await fetch(page.paging.next, { signal: AbortSignal.timeout(15000) });
    page = await res.json();
    if (page.error) throw new Error(page.error.message);
    out.push(...(page.data || []));
  }
  return out;
}

export const action = (actions, ...types) => {
  for (const t of types) {
    const a = (actions || []).find((x) => x.action_type === t);
    if (a) return Number(a.value) || 0;
  }
  return 0;
};

// ---------- data building ----------
function clientInfo(client) {
  return {
    name: client.name, accountName: client.accountName || client.name, currency: "SGD",
    monthlyBudget: client.monthlyBudget || null, logoText: "GOAHEAD", tagline: `Ads dashboard · ${client.name}`,
    countChats: client.countChats !== false,
  };
}
const accountsOf = (client) => client.accountIds || [client.accountId];
// total leads = form leads + chats started (unless the client is set to forms only)
const leadsOf = (r, countChats) => (r.leads || 0) + (countChats ? r.messages || 0 : 0);

// Only campaigns run by GoMedia are shown. In agents' own ad accounts GoMedia names its campaigns
// "GoAhead ...", older ones "GoGo Media: ..." / "GoMedia: ...". Agents inside the GoMedia account
// use their own campaignFilter (their name) instead.
export const GOMEDIA_NAMES = ["goahead", "go ahead", "gogo media", "gomedia", "go media"];
const filtersOf = (client) => (client.campaignFilter || GOMEDIA_NAMES).map((s) => s.toLowerCase());
function campaignKeeper(client) {
  const filters = filtersOf(client);
  return (name) => filters.some((f) => String(name).toLowerCase().includes(f));
}

// When the filter changes, drop stored campaigns/ads/rows that no longer match (keeps backfill progress).
function applyFilter(d, client) {
  const key = filtersOf(client).join("|");
  if (d.sync.filterKey === key) return false;
  const keep = campaignKeeper(client);
  d.campaigns = d.campaigns.filter((c) => keep(c.name));
  const camps = new Set(d.campaigns.map((c) => c.id));
  d.ads = d.ads.filter((a) => camps.has(a.campaignId));
  const ads = new Set(d.ads.map((a) => a.id));
  d.daily = d.daily.filter((r) => ads.has(r.adId));
  d.sync.filterKey = key;
  return true;
}

/** Stored data with the current campaign filter applied (for serving before the next refresh). */
export function filterStored(d, client) {
  if (!d?.sync || !applyFilter(d, client)) return null;
  d.client = clientInfo(client);
  d.ads.forEach((a, i) => (a.placeholderNo = i + 1));
  d.insights = ruleInsights(d);
  return d;
}

function emptyData(client) {
  return {
    placeholder: false, client: clientInfo(client), updatedAt: null, until: null,
    campaigns: [], ads: [], daily: [], insights: null,
    sync: { start: null, oldest: null, complete: false, lastIncremental: null, adsRefreshedAt: null },
  };
}

async function mergeRange(d, client, since, until, token) {
  const t0 = Date.now();
  const rows = [], errors = [];
  for (const acc of accountsOf(client)) {
    try {
      const part = await graphAll(`act_${acc}/insights`, {
        level: "ad", time_increment: "1", time_range: { since, until }, limit: "500",
        fields: "ad_id,ad_name,campaign_id,campaign_name,spend,impressions,reach,clicks,inline_link_clicks,actions",
      }, token);
      part.forEach((r) => (r._acc = acc));
      rows.push(...part);
    } catch (e) { errors.push(`${acc}: ${e.message}`); }
  }
  if (errors.length === accountsOf(client).length) throw new Error(errors.join(" | "));
  d.sync.accountErrors = errors.length ? errors.map((e) => e.slice(0, 160)) : undefined;

  const keep = campaignKeeper(client);
  const campaigns = new Map(d.campaigns.map((c) => [c.id, c]));
  const ads = new Map(d.ads.map((a) => [a.id, a]));

  const fresh = [];
  for (const r of rows) {
    if (!keep(r.campaign_name) || !(Number(r.spend) > 0)) continue;
    campaigns.set(r.campaign_id, { id: r.campaign_id, name: r.campaign_name });
    if (!ads.has(r.ad_id)) ads.set(r.ad_id, { id: r.ad_id, accountId: r._acc, campaignId: r.campaign_id, title: r.ad_name, primaryText: "", thumbnailUrl: null, postUrl: "#", label: "Ad" });
    fresh.push({
      date: r.date_start, adId: r.ad_id,
      spend: Number(r.spend) || 0, impressions: Number(r.impressions) || 0, reach: Number(r.reach) || 0,
      clicks: Number(r.clicks) || 0, linkClicks: Number(r.inline_link_clicks) || 0,
      leads: action(r.actions, "lead", "onsite_conversion.lead_grouped"),
      messages: action(r.actions, "onsite_conversion.messaging_conversation_started_7d"),
    });
  }
  d.daily = d.daily.filter((r) => r.date < since || r.date > until).concat(fresh)
    .sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));
  d.campaigns = [...campaigns.values()];
  d.ads = [...ads.values()];
  console.log(`insights ${since}..${until}: ${rows.length} rows, ${fresh.length} kept, ${Date.now() - t0}ms`);
}

async function refreshAdDetails(d, client, ids, token, deadline) {
  const byId = new Map(d.ads.map((a) => [a.id, a]));
  const done = [];
  const groups = new Map();
  for (const id of ids) {
    const acc = byId.get(id)?.accountId || accountsOf(client)[0];
    if (!groups.has(acc)) groups.set(acc, []);
    groups.get(acc).push(id);
  }
  const work = [];
  for (const [acc, list] of groups) for (let i = 0; i < list.length; i += 25) work.push([acc, list.slice(i, i + 25)]);
  for (const [acc, batch] of work) {
    if (Date.now() > deadline - 4000) break;
    const res = await graph(`act_${acc}/ads`, {
      filtering: [{ field: "id", operator: "IN", value: batch }],
      limit: "50",
      fields: "id,name,creative{title,body,image_url,thumbnail_url,effective_object_story_id,object_story_spec,asset_feed_spec}",
    }, token).catch((e) => { console.error("ad details", e.message); d.sync.adDetailsError = String(e.message).slice(0, 200); return null; });
    if (!res) break;
    delete d.sync.adDetailsError;
    for (const ad of res.data || []) {
      const id = ad.id, a = byId.get(id); if (!a) continue;
      const c = ad.creative || {}, spec = c.object_story_spec || {}, feed = c.asset_feed_spec || {};
      const link = spec.link_data || {}, video = spec.video_data || {};
      const [pageId, postId] = String(c.effective_object_story_id || "").split("_");
      a.title = c.title || link.name || video.title || feed.titles?.[0]?.text || ad.name || a.title;
      a.primaryText = c.body || link.message || video.message || feed.bodies?.[0]?.text || a.primaryText || "";
      a.thumbnailUrl = c.image_url || link.picture || video.image_url || c.thumbnail_url || a.thumbnailUrl;
      a.postUrl = pageId && postId ? `https://www.facebook.com/${pageId}/posts/${postId}` : a.postUrl || "#";
    }
    done.push(...batch);
  }
  return done;
}

async function historyStart(client, token, today) {
  const limit = addDays(today, -MAX_HISTORY_DAYS);
  let earliest = null;
  for (const acc of accountsOf(client)) {
    try {
      const a = await graph(`act_${acc}`, { fields: "created_time" }, token);
      const c = ymd(new Date(a.created_time));
      if (!earliest || c < earliest) earliest = c;
    } catch { /* unreadable account: fall back to the limit */ }
  }
  return maxStr(earliest || limit, limit);
}

// Months (YYYY-MM) that had any spend, so the backfill can skip empty stretches without calling Meta.
async function spendMonths(client, since, until, token) {
  const months = new Set();
  for (const acc of accountsOf(client)) {
    try {
      const rows = await graphAll(`act_${acc}/insights`, {
        level: "account", time_increment: "monthly", time_range: { since, until }, fields: "spend", limit: "100",
      }, token);
      rows.filter((r) => Number(r.spend) > 0).forEach((r) => months.add(r.date_start.slice(0, 7)));
    } catch (e) { console.error("month scan", acc, e.message); return null; } // unknown: backfill everything
  }
  return [...months].sort();
}

/** Bring one client's stored data up to date. Returns the new data, or null if nothing changed. */
export async function syncClient(client, current, token, deadline) {
  const now = new Date(), today = ymd(now);
  const d = current?.sync ? current : emptyData(client);
  d.client = clientInfo(client);
  let changed = applyFilter(d, client);

  // 1) recent days: first run takes 14 days so the page works immediately, then the last 3 days
  //    once a day, on the first run after 6am Singapore (saves Netlify credits)
  const due = !d.sync.lastIncremental || Date.parse(d.sync.lastIncremental) < lastDailyCutoff(now);
  if (due) {
    const first = !d.sync.oldest;
    const since = addDays(today, first ? -(FIRST_DAYS - 1) : -(RECENT_DAYS - 1));
    await mergeRange(d, client, since, today, token);
    d.sync.lastIncremental = now.toISOString();
    if (first) d.sync.oldest = since;
    changed = true;
  }

  // 2) history backfill, 30 days at a time (skipping months with no spend), while time is left
  if (!d.sync.complete && Date.now() < deadline - 12000) {
    if (!d.sync.start) { d.sync.start = await historyStart(client, token, today); changed = true; }
    if (d.sync.months === undefined && Date.now() < deadline - 12000) {
      d.sync.months = await spendMonths(client, d.sync.start, addDays(d.sync.oldest, -1), token);
      changed = true;
    }
    while (d.sync.oldest > d.sync.start && Date.now() < deadline - 12000) {
      const until = addDays(d.sync.oldest, -1);
      const since = maxStr(addDays(until, -(CHUNK_DAYS - 1)), d.sync.start);
      const m = d.sync.months;
      const hasSpend = !m || m.some((x) => x >= since.slice(0, 7) && x <= until.slice(0, 7));
      if (hasSpend) await mergeRange(d, client, since, until, token);
      d.sync.oldest = since;
      changed = true;
    }
    if (d.sync.oldest <= d.sync.start) d.sync.complete = true;
  }

  // 3) ad details (title, text, thumbnail, post link): new ads now, all ads once a day
  const missing = d.ads.filter((a) => !a.detailsLoaded).map((a) => a.id);
  const dueAll = !d.sync.adsRefreshedAt || now - Date.parse(d.sync.adsRefreshedAt) > ADS_REFRESH_MS;
  const ids = dueAll ? d.ads.map((a) => a.id) : missing;
  if (ids.length && Date.now() < deadline - 4000) {
    const done = await refreshAdDetails(d, client, ids, token, deadline);
    done.forEach((id) => { const a = d.ads.find((x) => x.id === id); if (a) a.detailsLoaded = true; });
    if (dueAll && done.length === ids.length) d.sync.adsRefreshedAt = now.toISOString();
    if (done.length) changed = true;
  }

  if (!changed) return null;
  d.until = today;
  d.updatedAt = now.toISOString();
  d.ads.forEach((a, i) => (a.placeholderNo = i + 1));
  d.insights = ruleInsights(d);
  return d;
}

// ---------- summary (rule-based until an AI key is added) ----------
export function ruleInsights(data) {
  const day = (n) => addDays(data.until, -n);
  const cur = [day(6), day(0)], prev = [day(13), day(7)];
  const inRange = (r, [a, b]) => r.date >= a && r.date <= b;
  const chats = data.client?.countChats !== false;
  const tot = (rows) => {
    const t = rows.reduce((a, r) => ({ spend: a.spend + r.spend, leads: a.leads + leadsOf(r, chats), imp: a.imp + r.impressions, clk: a.clk + r.clicks }), { spend: 0, leads: 0, imp: 0, clk: 0 });
    t.cpl = t.leads ? t.spend / t.leads : null; t.ctr = t.imp ? t.clk / t.imp : null; return t;
  };
  const c = tot(data.daily.filter((r) => inRange(r, cur))), p = tot(data.daily.filter((r) => inRange(r, prev)));
  const m = (n) => "$" + n.toFixed(2);
  const ch = (a, b) => (b ? ((a - b) / b) * 100 : null);
  const say = (v, up, down) => (Math.abs(v) < 3 ? "about the same as" : `${v > 0 ? up : down} ${Math.abs(v).toFixed(0)}% vs`);

  let summary;
  if (!c.spend) summary = "No ads spent in the last 7 days. The campaigns may be paused.";
  else {
    const parts = [`In the last 7 days the ads spent ${m(c.spend)} and generated ${c.leads} lead${c.leads === 1 ? "" : "s"}${c.cpl != null ? ` at ${m(c.cpl)} per lead` : ""}.`];
    if (p.spend) {
      const lv = ch(c.leads, p.leads), cv = c.cpl != null && p.cpl != null ? ch(c.cpl, p.cpl) : null;
      if (lv != null) parts.push(`Lead volume is ${say(lv, "up", "down")} the previous 7 days (${p.leads}).`);
      if (cv != null) parts.push(`Cost per lead is ${say(cv, "up", "down")} the previous 7 days (${m(p.cpl)}).`);
      const tv = c.ctr != null && p.ctr != null ? ch(c.ctr, p.ctr) : null;
      if (tv != null && Math.abs(tv) >= 10) parts.push(`Click-through rate is ${tv > 0 ? "up" : "down"} ${Math.abs(tv).toFixed(0)}%${tv < 0 ? ", an early sign the creatives may be wearing out" : ""}.`);
    }
    summary = parts.join(" ");
  }

  const byCamp = data.campaigns.map((cp) => {
    const adsOf = new Set(data.ads.filter((a) => a.campaignId === cp.id).map((a) => a.id));
    return { name: cp.name, t: tot(data.daily.filter((r) => adsOf.has(r.adId) && inRange(r, cur))) };
  }).filter((x) => x.t.spend > 0).sort((a, b) => b.t.leads - a.t.leads || b.t.spend - a.t.spend);

  const byCampaign = byCamp.slice(0, 5).map(({ name, t }) => ({
    name, text: t.leads ? `${t.leads} lead${t.leads === 1 ? "" : "s"} at ${m(t.cpl)} per lead, ${m(t.spend)} spent.` : `${m(t.spend)} spent with no leads yet.`,
  }));

  const actions = [];
  const best = byCamp.find((x) => x.t.leads > 0);
  if (best && byCamp.length > 1) actions.push(`Keep budget on ${best.name}, the top lead source this week.`);
  byCamp.filter((x) => !x.t.leads && x.t.spend >= 30).forEach((x) => actions.push(`Review ${x.name}: ${m(x.t.spend)} spent this week with no leads.`));
  if (c.cpl) byCamp.filter((x) => x.t.leads && x.t.cpl > c.cpl * 1.5).forEach((x) => actions.push(`Refresh creatives in ${x.name}: cost per lead is well above the account average.`));
  if (!actions.length) actions.push(c.spend ? "Performance is steady. Keep current budgets and check again next week." : "Restart a campaign or add a new project to resume lead flow.");

  return { kind: "rules", generatedAt: new Date().toISOString(), period: "Last 7 days vs previous 7 days", summary, byCampaign, actions };
}
