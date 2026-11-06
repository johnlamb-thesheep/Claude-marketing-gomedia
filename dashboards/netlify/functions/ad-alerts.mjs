// Scheduled job: every hour, re-check GoMedia's own campaigns and save the alert report
// (read by /adreport). Once a day (weekdays, 9am Singapore) it DMs the report to ALERT_SLACK_USERS,
// leaving out ads already flagged in the last 7 days unless they got worse. Mondays add a weekly recap.
import { getStore } from "@netlify/blobs";
import { ALERTS } from "../alerts.config.mjs";
import { metaToken } from "../lib/meta.mjs";
import { fetchAlertData, computeAlerts, formatSlack, alertKey, alertsPageUrl } from "../lib/alerts.mjs";
import { ALERTS_PAGE_CODE } from "../alerts-page.mjs";
import { postMessage, alertUsers } from "../lib/slack.mjs";

export const config = { schedule: "5 * * * *" };
const ALERT_STORE = { name: "ad-alerts", consistency: "strong" };

const local = (d) => {
  const p = Object.fromEntries(new Intl.DateTimeFormat("en-CA", {
    timeZone: ALERTS.timezone, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", hourCycle: "h23", weekday: "short",
  }).formatToParts(d).map((x) => [x.type, x.value]));
  return { date: `${p.year}-${p.month}-${p.day}`, hour: Number(p.hour), weekday: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(p.weekday) };
};

export default async () => {
  const token = metaToken();
  if (!token) { console.error("Meta token env var not set"); return; }
  const store = getStore(ALERT_STORE);
  const now = new Date();

  const report = computeAlerts(await fetchAlertData(token, now));
  await store.setJSON("latest", report);
  const counts = report.groups.map((g) => `${g.key}: ${g.opportunities.length} opp, ${g.fatigue.length} fatigue, ${g.lowCtr.length} low CTR`).join(" | ");
  console.log("ad alerts computed:", counts);

  // daily DM: first run at/after the daily hour (retries for 3 hours if a run fails)
  const t = local(now);
  const users = alertUsers();
  const state = (await store.get("state", { type: "json" }).catch(() => null)) || { sent: {}, lastDaily: null };
  const due = ALERTS.dailyDays.includes(t.weekday) && t.hour >= ALERTS.dailyHour && t.hour < ALERTS.dailyHour + 3 && state.lastDaily !== t.date;
  if (!due || !users.length) return;
  if (!process.env.SLACK_BOT_TOKEN) { console.error("SLACK_BOT_TOKEN not set, daily DM skipped"); return; }

  const repeatMs = ALERTS.repeatAfterDays * 86400000;
  const skip = (item) => {
    const prev = state.sent[alertKey(item)];
    return prev && now - Date.parse(prev.at) < repeatMs && item.severity <= prev.severity;
  };
  const monday = t.weekday === 1;
  const { text, shown } = formatSlack(report, {
    title: monday ? "📊 Ad alerts + weekly recap" : "📊 Ad alerts", minFatigue: 2, recap: monday, skip, pageUrl: alertsPageUrl(ALERTS_PAGE_CODE),
  });

  let delivered = 0;
  for (const u of users) {
    try { await postMessage(u, text); delivered++; } catch (e) { console.error("Slack DM failed", u, e.message); }
  }
  if (!delivered) return; // try again next hour
  for (const i of shown) state.sent[alertKey(i)] = { at: now.toISOString(), severity: i.severity };
  for (const [k, v] of Object.entries(state.sent)) if (now - Date.parse(v.at) > 4 * repeatMs) delete state.sent[k];
  state.lastDaily = t.date;
  await store.setJSON("state", state);
  console.log(`daily DM sent to ${delivered} user(s), ${shown.length} items`);
};
