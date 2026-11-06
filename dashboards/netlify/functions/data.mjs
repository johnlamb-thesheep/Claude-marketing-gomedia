// GET /api/data?c=<code>
// Returns the client's stored data (kept fresh by the scheduled refresh job).
// Only if a client has never been synced yet does it pull from Meta on the spot.
import { getStore } from "@netlify/blobs";
import { CLIENTS } from "../clients.mjs";
import { STORE, syncClient, metaToken, filterStored } from "../lib/meta.mjs";

export const config = { path: "/api/data" };

const json = (body, status = 200) =>
  new Response(typeof body === "string" ? body : JSON.stringify(body), {
    status, headers: { "content-type": "application/json", "cache-control": "no-store" },
  });

export default async (req) => {
  const code = new URL(req.url).searchParams.get("c") || "";
  const client = Object.prototype.hasOwnProperty.call(CLIENTS, code) ? CLIENTS[code] : null;
  if (!client) return json({ error: "not_found" }, 404);

  const store = getStore(STORE);
  const stored = await store.get(code, { type: "json" }).catch(() => null);
  if (stored) {
    // campaign filter changed since this was saved: filter now so the page never shows other campaigns
    const filtered = filterStored(stored, client);
    if (filtered) { await store.setJSON(code, filtered).catch(() => {}); return json(filtered); }
    return json(stored);
  }

  const token = metaToken();
  if (!token) return json({ error: "not_configured" }, 503);
  try {
    const data = await syncClient(client, null, token, Date.now() + 18000);
    await store.setJSON(code, data);
    return json(data);
  } catch (e) {
    console.error("first sync failed", client.accountId, e.message);
    return json({ error: "meta_error", message: String(e.message).slice(0, 300) }, 502);
  }
};
