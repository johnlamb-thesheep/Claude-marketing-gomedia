# GoAhead: targets and which campaigns count

- **Meta ad account:** `903306407477320` (shared with GoMedia).
- **Campaign filter:** name contains "buyer" AND does NOT contain "r&f", "sky", "jess" or "gomedia". Apply it before attributing any spend or leads to GoAhead.
- **Internal name:** "Fulfillment · GoAhead buyer" (the fulfillment-buyer type; another fulfillment type exists but isn't tracked).
- **Target CPL: $25** (agreed 2026-11-06).

## Slack alerts

Rule-based, run on Netlify (`dashboards/netlify/alerts.config.mjs` + `lib/alerts.mjs`), sent to John Lam on Slack.

- **Opportunity:** active ad with lifetime spend under 2× target CPL **and** an early positive sign (not every under-spent ad).
- **Fatigue / low CTR:** flagged by the rules; the weekly judgement call stays with performance, using `ad-creative-fatigue` as the final verdict.

If a target changes, update it here and in `alerts.config.mjs`.
