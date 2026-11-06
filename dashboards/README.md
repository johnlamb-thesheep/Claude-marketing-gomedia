# Client ads dashboards (Netlify)

Live at `https://gomedia-ads-dash-26798.netlify.app/c/<secret-code>` — one private link per agent. Built and maintained by the `dashboard` agent; full how-to in `.claude/skills/client-ads-dashboard/SKILL.md`.

Three tabs: **Overview** (KPIs vs previous period, daily CPL/leads/spend chart, rule-based "what happened" + next actions), **Campaigns**, **Creatives** (sorted by leads). Only GoMedia-run campaigns are shown.

## Files
- `public/` — `client.html`, `app.js`, `styles.css`; `_redirects` maps `/c/*` to the page; `data/demo-*.json` is placeholder data (`scripts/make_demo_data.py`)
- `netlify/functions/data.mjs` — `/api/data?c=<code>`, serves stored data (filters it if the filter changed)
- `netlify/functions/refresh.mjs` — every 5 min: sync, backfill history, refresh creatives
- `netlify/lib/meta.mjs` — Meta API calls, campaign filter, rule-based insights
- `netlify/clients.mjs` — **not in git** (public repo). Template: `clients.example.mjs`
- `agent-links.csv`, `account-review.csv` — **not in git**, local link list and account review

## Setup
- Meta System User token with `ads_read`, added by the user as a secret Netlify env var (`META_ACCESS_TOKEN`, Production).
- Deploy from this folder: `npx -y netlify-cli@17 deploy --prod`.
- Preview the page with placeholder data: `python -m http.server 8787 --directory dashboards/public`, open `http://localhost:8787/client.html?c=demo-7Kq2xP9w`.
