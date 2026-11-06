// Ad alerts: pull GoMedia's own campaigns from Meta, apply the rules in alerts.config.mjs,
// and format the result for Slack. Read-only on the ad account.
import { ALERTS } from "../alerts.config.mjs";
import { graphAll, action, ymd, addDays } from "./meta.mjs";

const LEAD_TYPES = ["lead", "onsite_conversion.lead_grouped"];
const num = (v) => Number(v) || 0;

export function groupOf(campaignName, cfg = ALERTS) {
  const n = String(campaignName || "").toLowerCase();
  return cfg.groups.find((g) => g.include.every((s) => n.includes(s)) && !g.exclude.some((s) => n.includes(s))) || null;
}

// ---------- fetch ----------
export async function fetchAlertData(token, now = new Date(), cfg = ALERTS) {
  const acc = `act_${cfg.accountId}`;
  const today = ymd(now), until = addDays(today, -1); // complete days only
  const cur = { since: addDays(until, -6), until };
  const prev = { since: addDays(until, -13), until: addDays(until, -7) };
  const active = [{ field: "ad.effective_status", operator: "IN", value: ["ACTIVE"] }];
  const adFields = "ad_id,spend,impressions,reach,frequency,inline_link_clicks,actions";
  const insights = (extra) => graphAll(`${acc}/insights`, { level: "ad", fields: adFields, filtering: active, limit: "500", ...extra }, token);
  const campIns = (range) => graphAll(`${acc}/insights`, {
    level: "campaign", fields: "campaign_id,campaign_name,spend,impressions,inline_link_clicks,actions", time_range: range, limit: "500",
  }, token);

  const [ads, life, w1, w0, wr, c1, c0] = await Promise.all([
    graphAll(`${acc}/ads`, {
      fields: "id,name,created_time,adset_id,adset{name},campaign{id,name}",
      filtering: [{ field: "effective_status", operator: "IN", value: ["ACTIVE"] }], limit: "500",
    }, token),
    insights({ date_preset: "maximum" }),
    insights({ time_range: cur }),
    insights({ time_range: prev }),
    insights({ time_range: { since: addDays(today, -6), until: today } }), // incl. today, for ad-set spend share
    campIns(cur),
    campIns(prev),
  ]);

  const metric = (r) => r ? {
    spend: num(r.spend), impr: num(r.impressions), reach: num(r.reach), freq: num(r.frequency),
    clicks: num(r.inline_link_clicks), leads: action(r.actions, ...LEAD_TYPES),
  } : { spend: 0, impr: 0, reach: 0, freq: 0, clicks: 0, leads: 0 };
  const byAd = (rows) => new Map(rows.map((r) => [r.ad_id, r]));
  const L = byAd(life), C = byAd(w1), P = byAd(w0), RC = byAd(wr);

  const out = [];
  for (const a of ads) {
    const g = groupOf(a.campaign?.name, cfg);
    if (!g) continue;
    out.push({
      id: a.id, name: a.name, created: a.created_time, group: g.key,
      campaignId: a.campaign?.id, campaign: a.campaign?.name, adsetId: a.adset_id, adset: a.adset?.name || "",
      life: metric(L.get(a.id)), cur: metric(C.get(a.id)), prev: metric(P.get(a.id)), recentSpend: num(RC.get(a.id)?.spend),
    });
  }
  const camps = (rows) => rows.filter((r) => groupOf(r.campaign_name, cfg)).map((r) => ({
    group: groupOf(r.campaign_name, cfg).key, spend: num(r.spend), leads: action(r.actions, ...LEAD_TYPES),
  }));
  return { generatedAt: now.toISOString(), today, windows: { cur, prev }, ads: out, campaigns: { cur: camps(c1), prev: camps(c0) } };
}

// ---------- rules ----------
const ctr = (m) => (m.impr ? m.clicks / m.impr : null);
const median = (xs) => {
  const s = xs.filter((x) => x != null).sort((a, b) => a - b);
  if (!s.length) return null;
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};
const $ = (n) => "$" + (n >= 100 || Number.isInteger(n) ? n.toFixed(0) : n.toFixed(2));
const pct = (x, d = 1) => (x * 100).toFixed(d) + "%";
const daysBetween = (iso, today) => Math.floor((Date.parse(today + "T00:00:00+08:00") - Date.parse(iso)) / 86400000);

export function computeAlerts(data, cfg = ALERTS) {
  const R = cfg.rules;
  const groups = [];
  for (const g of cfg.groups) {
    const T = g.targetCpl;
    const ads = data.ads.filter((a) => a.group === g.key);
    // benchmark = median link CTR of the OTHER ads (campaign if it has 2+, else the whole group)
    const lifeOk = ads.filter((a) => a.life.impr >= R.opportunity.minImpressionsForCtr);
    const lifeMedian = (ad) => {
      const camp = lifeOk.filter((a) => a.id !== ad.id && a.campaignId === ad.campaignId);
      const pool = camp.length >= 2 ? camp : lifeOk.filter((a) => a.id !== ad.id);
      return pool.length >= 2 ? { v: median(pool.map((a) => ctr(a.life))), scope: camp.length >= 2 ? "campaign" : "other ads" } : null;
    };
    const curOk = ads.filter((a) => a.cur.impr >= R.lowCtr.minImpressions);
    const curMedian = (ad) => {
      const camp = curOk.filter((a) => a.id !== ad.id && a.campaignId === ad.campaignId);
      const pool = camp.length >= 2 ? camp : curOk.filter((a) => a.id !== ad.id);
      return pool.length >= 2 ? { v: median(pool.map((a) => ctr(a.cur))), scope: camp.length >= 2 ? "campaign" : "other ads" } : null;
    };
    const adsetSpend = (adsetId) => ads.filter((a) => a.adsetId === adsetId);

    const opportunities = [], fatigue = [], lowCtr = [];
    let starved = 0;

    for (const a of ads) {
      const age = daysBetween(a.created, data.today);
      const lifeCpl = a.life.leads ? a.life.spend / a.life.leads : null;
      const lifeCtr = ctr(a.life), curCtr = ctr(a.cur), prevCtr = ctr(a.prev);

      // --- opportunity / starved ---
      if (a.life.spend < R.opportunity.spendMultiple * T) {
        const bench = lifeMedian(a), campMed = bench?.v;
        const signs = [];
        if (lifeCpl != null && lifeCpl <= T) signs.push(`${a.life.leads} lead${a.life.leads > 1 ? "s" : ""} at ${$(lifeCpl)} each (target ${$(T)})`);
        if (a.life.impr >= R.opportunity.minImpressionsForCtr && campMed != null && lifeCtr >= campMed)
          signs.push(`link CTR ${pct(lifeCtr, 2)} vs ${pct(campMed, 2)} ${bench.scope} median`);
        if (age >= R.opportunity.minAgeDays && signs.length) {
          const mates = adsetSpend(a.adsetId);
          const setSpend = mates.reduce((s, x) => s + x.recentSpend, 0);
          const top = mates.filter((x) => x.id !== a.id).sort((x, y) => y.recentSpend - x.recentSpend)[0];
          const share = setSpend ? a.recentSpend / setSpend : 0;
          const topShare = top && setSpend ? top.recentSpend / setSpend : 0;
          const todo = top && topShare >= 0.5
            ? `Meta is putting ${pct(topShare, 0)} of the ad set's spend on "${top.name}". Duplicate this ad into its own ad set (or the testing campaign) at ~${$(T)}/day until it reaches ${$(3 * T)} spend for a fair read.`
            : `Give it budget: raise the ad set or duplicate it into its own ad set at ~${$(T)}/day until it reaches ${$(3 * T)} spend.`;
          opportunities.push({
            kind: "opp", severity: 1, ad: a, age,
            line: `${$(a.life.spend)} spent in ${age} days · ${signs.join(" · ")}`,
            why: mates.length > 1 && setSpend ? `Gets ${pct(share, 0)} of its ad set's spend (last 7 days).` : "Only ad in its ad set, so the ad set budget is the limit.",
            todo, score: (lifeCpl != null ? T / lifeCpl : 0) + (campMed && lifeCtr ? lifeCtr / campMed : 0),
          });
        } else if (age >= R.starvedAgeDays && !signs.length) starved++;
        continue; // not enough spend to judge fatigue or CTR
      }

      // --- fatigue ---
      const F = R.fatigue;
      let isFatigue = false;
      if (a.life.spend >= F.minLifetimeMultiple * T && a.cur.spend >= F.minWeekMultiple * T) {
        const sig = [];
        let critical = false;
        if (a.cur.freq > F.frequencyCritical) { sig.push(`frequency ${a.cur.freq.toFixed(1)} (critical > ${F.frequencyCritical})`); critical = true; }
        else if (a.cur.freq > F.frequencyWarn) sig.push(`frequency ${a.cur.freq.toFixed(1)}`);
        const comparable = a.cur.impr >= F.minImpressions && a.prev.impr >= F.minImpressions;
        if (comparable && prevCtr && curCtr != null) {
          const drop = (prevCtr - curCtr) / prevCtr;
          if (drop >= F.ctrDrop) sig.push(`CTR ${pct(prevCtr, 2)} → ${pct(curCtr, 2)} (−${pct(drop, 0)})`);
          if (drop >= F.ctrDropRetire) critical = true;
        }
        if (comparable && a.prev.spend) {
          const cpm0 = (a.prev.spend / a.prev.impr) * 1000, cpm1 = (a.cur.spend / a.cur.impr) * 1000;
          if (cpm0 && (cpm1 - cpm0) / cpm0 >= F.cpmRise) sig.push(`CPM ${$(cpm0)} → ${$(cpm1)}`);
        }
        if (a.cur.leads ? a.cur.spend / a.cur.leads > F.cplMultiple * T : a.cur.spend >= F.cplMultiple * T)
          sig.push(a.cur.leads ? `7-day CPL ${$(a.cur.spend / a.cur.leads)} (target ${$(T)})` : `${$(a.cur.spend)} this week, 0 leads`);
        if (sig.length) {
          const severity = critical ? (sig.length >= 2 ? 3 : 2) : sig.length >= 2 ? 2 : 1;
          isFatigue = severity >= 2;
          fatigue.push({
            kind: "fatigue", severity, ad: a,
            line: sig.join(" · "),
            why: severity === 3 ? "Concept looks worn out." : severity === 2 ? "Likely fatigue." : "One warning sign, watch it.",
            todo: severity === 3 ? "Retire it once a replacement is live, and launch a fresh concept instead of iterating."
              : severity === 2 ? "Start 2 new versions of this concept (new hook first). Keep this ad live until they run."
              : "No action yet, check again in a few days.",
            score: severity * 1000 + a.cur.spend,
          });
        }
      }

      // --- low CTR ---
      const med = curMedian(a)?.v;
      if (!isFatigue && a.cur.impr >= R.lowCtr.minImpressions && med && curCtr < R.lowCtr.ratio * med) {
        lowCtr.push({
          kind: "lowctr", severity: 1, ad: a,
          line: `link CTR ${pct(curCtr, 2)} vs ${pct(med, 2)} median · ${a.cur.impr.toLocaleString("en-SG")} impressions this week`,
          why: "People see it but don't click.",
          todo: "Test a new hook or first frame. If it is also short on leads, move its budget to the better ads.",
          score: a.cur.spend,
        });
      }
    }

    const sum = (rows) => rows.filter((r) => r.group === g.key).reduce((t, r) => ({ spend: t.spend + r.spend, leads: t.leads + r.leads }), { spend: 0, leads: 0 });
    const sort = (xs) => xs.sort((x, y) => y.score - x.score);
    groups.push({
      key: g.key, label: g.label, targetCpl: T, activeAds: ads.length, starved,
      opportunities: sort(opportunities), fatigue: sort(fatigue), lowCtr: sort(lowCtr),
      week: { cur: sum(data.campaigns.cur), prev: sum(data.campaigns.prev) },
    });
  }
  return { generatedAt: data.generatedAt, today: data.today, windows: data.windows, accountId: cfg.accountId, groups };
}

// ---------- Slack formatting ----------
const esc = (s) => String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const adLink = (acc, a) => `<https://adsmanager.facebook.com/adsmanager/manage/ads?act=${acc}&selected_ad_ids=${a.id}|${esc(a.name)}>`;
export const alertKey = (item) => `${item.kind}:${item.ad.id}`;
export const alertsPageUrl = (code) => (code ? `${process.env.URL || "https://gomedia-ads-dash-26798.netlify.app"}/alerts/${code}` : null);

/**
 * opts.sections: subset of ["opp","fatigue","lowctr"]; opts.groups: subset of group keys
 * opts.minFatigue: lowest fatigue severity to list (daily DM: 2, on-request: 1)
 * opts.skip(item) -> true to leave an item out (de-duplication)
 * opts.recap: include last-week recap; opts.max: items per section; opts.title
 */
export function formatSlack(report, opts = {}) {
  const sections = opts.sections || ["opp", "fatigue", "lowctr"];
  const max = opts.max || ALERTS.maxPerSection;
  const skip = opts.skip || (() => false);
  const lines = [`*${opts.title || "📊 Ad alerts"}* · data to ${report.windows.cur.until}${opts.pageUrl ? ` · <${opts.pageUrl}|Open full alerts page>` : ""}`];
  const shown = [];
  let skipped = 0;

  for (const g of report.groups) {
    if (opts.groups && !opts.groups.includes(g.key)) continue;
    lines.push("", `*${esc(g.label)}* · target CPL $${g.targetCpl} · ${g.activeAds} active ads`);
    if (opts.recap) {
      const c = g.week.cur, p = g.week.prev, cpl = (t) => (t.leads ? $(t.spend / t.leads) : "–");
      lines.push(`Last 7 days: ${$(c.spend)} · ${c.leads} leads · CPL ${cpl(c)} (week before: ${$(p.spend)} · ${p.leads} leads · CPL ${cpl(p)})`);
    }
    const block = (key, icon, title, items) => {
      if (!sections.includes(key)) return;
      const fresh = items.filter((i) => { const s = skip(i); if (s) skipped++; return !s; });
      if (!fresh.length) return;
      lines.push(`${icon} *${title}* (${fresh.length})`);
      for (const i of fresh.slice(0, max)) {
        lines.push(`• ${adLink(report.accountId, i.ad)}: ${esc(i.line)}`, `   _${esc(i.why)}_ → ${esc(i.todo)}`);
        shown.push(i);
      }
      if (fresh.length > max) lines.push(`   …and ${fresh.length - max} more (type \`/adreport\` for the full list)`);
    };
    block("opp", "🟢", "Opportunities (under-spent, early positive sign)", g.opportunities);
    block("fatigue", "⚠️", "Creative fatigue", g.fatigue.filter((i) => i.severity >= (opts.minFatigue || 1)));
    block("lowctr", "🔻", "Low CTR", g.lowCtr);
    if (sections.includes("opp") && g.starved) lines.push(`⚪ ${g.starved} more ad${g.starved > 1 ? "s" : ""} running 7+ days that Meta is barely spending on, with no positive sign. Refresh the hook/visual or let them go.`);
  }
  if (!shown.length) lines.push("", skipped ? `All clear ✅ Nothing new since the last message (${skipped} still open, type \`/adreport\` to see them).` : "All clear ✅ Nothing to flag.");
  lines.push("", "_Rule-based check. Fatigue calls are confirmed in the Monday review._");
  return { text: lines.join("\n"), shown };
}
