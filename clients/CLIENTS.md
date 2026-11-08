# This workspace: GoMedia (full-time job)

This folder is **GoMedia Marketing Assistance**: the GoMedia and GoAhead client work. Its shared agents, skills, templates, references and `CLAUDE.md` come from the core repo `../Claude-Marketing-agent-john-lam` (say "update my agents"). Everything in this file, `clients/`, `dashboards/`, `docs/` and the GoMedia-only skills below belongs to this workspace only and never goes to core or to the freelance folder.

## Clients

- **gomedia** — B2B, Singapore. Audience: property agents. Products: LeadX buyer leads, LeadX seller leads, telemarketer/ISA system, CRM. Ad data: Meta ad account `903306407477320`, campaigns whose name contains "trade marketing".
- **gomedia-homes** — B2C, Singapore. Brand name used in ads: "GoAhead". Audience: new launch condo/EC buyers. Ad data: same Meta ad account `903306407477320`, campaigns whose name contains "buyer" AND does NOT contain "r&f", "sky", "jess", or "gomedia".

Both clients share one Meta ad account. Every performance or tracking read against this account MUST apply the campaign-name filter above before attributing spend, leads, or results to either client — pulling the account's full campaign list without that filter will mix the two clients' data.

gomedia-homes new-launch project ads use one folder per condo/EC: `clients/gomedia-homes/projects/<project>/` (`research.md`, `ad-library-<date>.md`, `copy-brief.md`, `design-prompts.md`, `perf-review.md`, `images/`). Handoff for project ads goes through these files.

## GoMedia-only routing (on top of the core routing table)

| Job | Agent | Primary skill | Notes |
|---|---|---|---|
| New-launch 3-angle statics (Direct / Floor plan / Price + MRT) with real Google images, Canva, filed in Notion | lead + copywriter + static-designer + performance | `new-launch-image-run` | One project at a time in `clients/gomedia-homes/projects/<slug>/`. Angles, layouts and copy rules: `clients/gomedia-homes/playbook/new-launch-3-angle.md`. Also covers rewriting pasted primary text for a project |
| LeadX statics / videos (Remotion, `my-video` project) | static-designer / video-designer | `leadx-static-ad`, `leadx-video-ad` | Rules: `clients/gomedia/playbook/` |
| New-launch property videos | video-designer | `new-launch-video-ad` | Rules: `clients/gomedia-homes/playbook/video.md` |
| Client ads dashboards (Netlify) | dashboard | `client-ads-dashboard` | Outside the campaign pipeline. Never handles tokens; link lists stay out of git |
| Slack ad alerts (opportunity / fatigue / low CTR) | dashboard | `dashboards/netlify/alerts.config.mjs` + `lib/alerts.mjs` | Rule-based, runs on Netlify (no Claude tokens). Targets: trade marketing $30, GoAhead buyer $25. Weekly judgement calls stay with performance (`ad-creative-fatigue`) |

GoMedia-only agent: `dashboard` (`.claude/agents/dashboard.md`). GoMedia-only skills: `new-launch-image-run`, `leadx-static-ad`, `leadx-video-ad`, `new-launch-video-ad`, `client-ads-dashboard`, `setup-marketing-team`, plus the pointer skills `gomedia-static-ad-rules` / `gomedia-homes-static-ad-rules`. `static-ads` is kept for reference only (never run). The core update never touches these.

## New users and setup (GoMedia team)

- If a teammate pastes this repo's GitHub link or says "set this up", "download it", "continue setup" or "I'm stuck", follow `setup-marketing-team` and its plain-language rules.
- When greeting, introduce yourself as **GoMedia Marketing Assistance** and point to the Notion page *Gomedia Marketing Assistance* for more. Example prompts: ad copy for LeadX, a new launch video, last 7 days results for an agent.

## Never

- Never copy anything from this workspace (client data, playbooks, learnings, account IDs, dashboards) into the core repo `../Claude-Marketing-agent-john-lam` or the freelance folder `../Claude-Marketing-agent-freelance`. New *generic* skills and agents are made in core, then pulled here.
