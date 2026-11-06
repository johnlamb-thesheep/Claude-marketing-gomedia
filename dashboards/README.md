# Client ads dashboards (Netlify)

Live at `https://gomedia-ads-dash-26798.netlify.app/c/<secret-code>` — one private link per agent. Built and maintained by the `dashboard` agent; full how-to in `.claude/skills/client-ads-dashboard/SKILL.md`.

Three tabs: **Overview** (KPIs vs previous period, daily CPL/leads/spend chart, rule-based "what happened" + next actions), **Campaigns**, **Creatives** (sorted by leads). Only GoMedia-run campaigns are shown.

## Files
- `public/` — `client.html`, `app.js`, `styles.css`; `_redirects` maps `/c/*` to the page; `data/demo-*.json` is placeholder data (`scripts/make_demo_data.py`)
- `netlify/functions/data.mjs` — `/api/data?c=<code>`, serves stored data (filters it if the filter changed)
- `netlify/functions/refresh.mjs` — wakes hourly: backfills new agents' history, re-pulls the last 3 days once a day after 6am SGT, refreshes creatives daily (kept low to stay inside Netlify's free 300 credits)
- `netlify/lib/meta.mjs` — Meta API calls, campaign filter, rule-based insights
- `netlify/clients.mjs` — **not in git** (public repo). Template: `clients.example.mjs`
- `agent-links.csv`, `account-review.csv` — **not in git**, local link list and account review

## Ad alerts (Slack)
GoMedia's own campaigns in ad account `903306407477320`: **trade marketing** (target CPL $30) and **fulfillment = GoAhead buyer** (target CPL $25). Targets, campaign filters and thresholds: `netlify/alerts.config.mjs`. Rules: `netlify/lib/alerts.mjs`, based on `.claude/skills/ads/references/meta-decision-system.md`.
- `netlify/functions/ad-alerts.mjs` — hourly: re-checks the ads and saves the report. Weekdays at 9am SGT it DMs `ALERT_SLACK_USERS` (no repeats for 7 days unless an ad gets worse; Mondays add a weekly recap).
- `netlify/functions/slack-adreport.mjs` — the `/adreport` slash command (`opps`, `fatigue`, `ctr`, `trade`, `goahead`, `daily`), only for users in `ALERT_SLACK_USERS`.
- What gets flagged: 🟢 **opportunity** = active 3+ days, lifetime spend < 2× target CPL, and a lead at/below target or link CTR at/above the other ads' median · ⚠️ **fatigue** (lifetime spend ≥ 3× target, last-7-day spend ≥ 1× target): frequency > 2.5 / > 4, CTR −20%+, CPM +30%+, 7-day CPL > 1.5× target; the daily DM lists 2+ signals only · 🔻 **low CTR** = 1,000+ impressions this week and link CTR under half the other ads' median.
- Private page `/alerts/<code>` (`public/alerts.html` + `alerts.js`/`alerts.css`, data from `netlify/functions/ad-alerts-data.mjs`): both clients, every flagged ad with Ads Manager link, reason and next step. The code lives in `netlify/alerts-page.mjs` — **not in git**; change it and redeploy to revoke the link. Slack messages link to it.
- Slack app: create from `slack-app-manifest.json`, install it, then add Netlify env vars (Production): `SLACK_BOT_TOKEN` and `SLACK_SIGNING_SECRET` (secret, set by the user), `ALERT_SLACK_USERS` (comma-separated Slack user IDs).

## Setup
- Meta System User token with `ads_read`, added by the user as a secret Netlify env var (`META_ACCESS_TOKEN`, Production).
- Deploy from this folder: `npx -y netlify-cli@17 deploy --prod`.
- Preview the page with placeholder data: `python -m http.server 8787 --directory dashboards/public`, open `http://localhost:8787/client.html?c=demo-7Kq2xP9w`.
