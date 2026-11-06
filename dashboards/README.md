# Client ads dashboards (Netlify)

One page per client at `/c/<secret-code>`. Three tabs: **Overview** (KPIs vs previous period, daily CPL/leads/spend chart, AI summary + next actions), **Campaigns**, **Creatives** (creative directory sorted by leads).

## Status
- **Placeholder data only.** `public/data/demo-7Kq2xP9w.json` comes from `scripts/make_demo_data.py`. No real client numbers.
- Next: an hourly Netlify scheduled function pulls Meta Marketing API data with the System User token (`META_ACCESS_TOKEN`, stored only as a Netlify environment variable) and writes the same JSON shape. Real client data must then move out of `public/` and be served by a function, so it is never a public static file.
- AI summary ("What happened" / "Recommended next action") is a placeholder field `insights` in the JSON; it will be generated from the last 7 days vs the previous 7 days.

## Files
- `public/client.html`, `public/app.js`, `public/styles.css` — the dashboard
- `public/_redirects` — maps `/c/<code>` to `client.html`
- `public/index.html` — no client list on purpose
- `scripts/make_demo_data.py` — sample data generator

## Run locally
`python -m http.server 8787 --directory dashboards/public`, then open `http://localhost:8787/client.html?c=demo-7Kq2xP9w`.

## Deploy
From `dashboards/`: `npx netlify-cli deploy --prod` (after `npx netlify-cli login`).
