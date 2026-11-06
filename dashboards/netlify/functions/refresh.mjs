// Scheduled job: wakes hourly and keeps every client's stored data up to date
// (full history backfill after setup, then the last 3 days once a day after 6am Singapore).
// Most hourly wake-ups find nothing due and stop in about a second. Client pages only read
// what this job saved.
import { getStore } from "@netlify/blobs";
import { CLIENTS } from "../clients.mjs";
import { STORE, syncClient, metaToken } from "../lib/meta.mjs";

export const config = { schedule: "20 * * * *" };

const PARALLEL = 4;

export default async () => {
  const token = metaToken();
  if (!token) { console.error("Meta token env var not set"); return; }
  const store = getStore(STORE);
  const deadline = Date.now() + 25000; // scheduled functions get ~30s

  // stalest clients first, so nobody is starved while big accounts backfill
  const entries = await Promise.all(Object.entries(CLIENTS).map(async ([code, client]) => {
    const cur = await store.get(code, { type: "json" }).catch(() => null);
    return { code, client, cur, ts: cur?.updatedAt ? Date.parse(cur.updatedAt) : 0 };
  }));
  entries.sort((a, b) => a.ts - b.ts);

  let i = 0;
  const worker = async () => {
    while (i < entries.length && Date.now() < deadline - 5000) {
      const { code, client, cur } = entries[i++];
      try {
        const next = await syncClient(client, cur, token, deadline);
        if (next) {
          await store.setJSON(code, next);
          console.log(client.name, `synced, history from ${next.sync.oldest}${next.sync.complete ? " (complete)" : ""}`);
        }
      } catch (e) {
        console.error(client.name, "sync failed:", e.message);
        if (cur) await store.setJSON(code, { ...cur, sync: { ...cur.sync, lastError: String(e.message).slice(0, 200), lastErrorAt: new Date().toISOString() } }).catch(() => {});
      }
    }
  };
  await Promise.all(Array.from({ length: PARALLEL }, worker));
};
