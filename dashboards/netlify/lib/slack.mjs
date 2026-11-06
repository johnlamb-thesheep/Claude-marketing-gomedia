// Minimal Slack helpers. Secrets come from Netlify env vars only:
//   SLACK_BOT_TOKEN       bot token of the "GoMedia Ad Alerts" Slack app (scope: chat:write, commands)
//   SLACK_SIGNING_SECRET  the app's signing secret (verifies /adreport requests)
//   ALERT_SLACK_USERS     comma-separated Slack user IDs that get the daily DM and may use /adreport
import { createHmac, timingSafeEqual } from "node:crypto";

export const alertUsers = () => String(process.env.ALERT_SLACK_USERS || "").split(",").map((s) => s.trim()).filter(Boolean);

export async function postMessage(channel, text) {
  const token = process.env.SLACK_BOT_TOKEN;
  if (!token) throw new Error("SLACK_BOT_TOKEN not set");
  const res = await fetch("https://slack.com/api/chat.postMessage", {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8", authorization: `Bearer ${token}` },
    body: JSON.stringify({ channel, text, unfurl_links: false, unfurl_media: false }),
    signal: AbortSignal.timeout(10000),
  });
  const body = await res.json().catch(() => ({}));
  if (!body.ok) throw new Error(`Slack: ${body.error || res.status}`);
  return body;
}

/** True when the request really comes from Slack (signed within the last 5 minutes). */
export function verifySlack(req, rawBody) {
  const secret = process.env.SLACK_SIGNING_SECRET;
  const ts = req.headers.get("x-slack-request-timestamp");
  const sig = req.headers.get("x-slack-signature") || "";
  if (!secret || !ts || Math.abs(Date.now() / 1000 - Number(ts)) > 300) return false;
  const mine = "v0=" + createHmac("sha256", secret).update(`v0:${ts}:${rawBody}`).digest("hex");
  return mine.length === sig.length && timingSafeEqual(Buffer.from(mine), Buffer.from(sig));
}
