// POST /api/slack/adreport: the `/adreport` Slack slash command.
// Replies (only visible to the person who asked) with the latest alert report saved by the hourly job.
//   /adreport            everything, incl. "watch" fatigue + last-week recap
//   /adreport opps       opportunities only      /adreport fatigue   fatigue only
//   /adreport ctr        low CTR only            /adreport trade | goahead   one client group
//   /adreport daily      preview of the next daily message (no de-duplication)
import { getStore } from "@netlify/blobs";
import { formatSlack, alertsPageUrl } from "../lib/alerts.mjs";
import { ALERTS_PAGE_CODE } from "../alerts-page.mjs";
import { verifySlack, alertUsers } from "../lib/slack.mjs";

export const config = { path: "/api/slack/adreport" };

const reply = (text) => new Response(JSON.stringify({ response_type: "ephemeral", text }), { headers: { "content-type": "application/json" } });
const HELP = "Usage: `/adreport` (everything) · `/adreport opps` · `/adreport fatigue` · `/adreport ctr` · `/adreport trade` · `/adreport goahead` · `/adreport daily`";

export default async (req) => {
  if (req.method !== "POST") return new Response("Not found", { status: 404 });
  const raw = await req.text();
  if (!verifySlack(req, raw)) return new Response("Unauthorized", { status: 401 });
  const form = new URLSearchParams(raw);
  if (!alertUsers().includes(form.get("user_id")))
    return reply(`Sorry, you're not on the ad-alerts list. Ask the admin to add your Slack ID: \`${form.get("user_id")}\` (workspace: ${form.get("team_domain") || form.get("team_id")}).`);

  const args = String(form.get("text") || "").toLowerCase().split(/\s+/).filter(Boolean);
  if (args.includes("help")) return reply(HELP);
  const report = await getStore({ name: "ad-alerts", consistency: "strong" }).get("latest", { type: "json" }).catch(() => null);
  if (!report) return reply("No report yet. It refreshes every hour, try again shortly.");

  const sections = [args.some((a) => a.startsWith("opp")) && "opp", args.includes("fatigue") && "fatigue", args.includes("ctr") && "lowctr"].filter(Boolean);
  const groups = [args.includes("trade") && "trade", args.some((a) => ["goahead", "fulfil", "fulfillment", "fulfilment", "buyer"].includes(a)) && "fulfil"].filter(Boolean);
  const daily = args.includes("daily");
  const ageMin = Math.round((Date.now() - Date.parse(report.generatedAt)) / 60000);
  const { text } = formatSlack(report, {
    title: daily ? "📊 Preview of the next daily message" : "📊 Ad report",
    sections: sections.length ? sections : undefined, groups: groups.length ? groups : undefined,
    minFatigue: daily ? 2 : 1, recap: !daily, max: daily ? undefined : 10, pageUrl: alertsPageUrl(ALERTS_PAGE_CODE),
  });
  return reply(`${text}\n_Checked ${ageMin < 60 ? `${ageMin} min` : `${Math.round(ageMin / 60)} h`} ago. ${HELP}_`);
};
