// GET /api/ad-alerts?k=<code>: the latest ad alert report for the private Ad Alerts page.
import { getStore } from "@netlify/blobs";
import { timingSafeEqual } from "node:crypto";
import { ALERTS_PAGE_CODE } from "../alerts-page.mjs";
import { ALERTS } from "../alerts.config.mjs";

export const config = { path: "/api/ad-alerts" };

const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status, headers: { "content-type": "application/json", "cache-control": "no-store", "x-robots-tag": "noindex" },
});
const same = (a, b) => a.length === b.length && timingSafeEqual(Buffer.from(a), Buffer.from(b));

export default async (req) => {
  const k = new URL(req.url).searchParams.get("k") || "";
  if (!ALERTS_PAGE_CODE || !same(k, ALERTS_PAGE_CODE)) return json({ error: "not_found" }, 404);
  const report = await getStore({ name: "ad-alerts", consistency: "strong" }).get("latest", { type: "json" }).catch(() => null);
  if (!report) return json({ error: "not_ready" }, 503);
  return json({ ...report, rules: ALERTS.rules });
};
