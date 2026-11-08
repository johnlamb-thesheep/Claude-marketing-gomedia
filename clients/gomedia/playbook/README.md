# GoMedia (LeadX) playbook

Everything specific to this client lives in this folder: offer facts, the design of each ad type, video style and targets. The agents and skills in `.claude/` are shared by every client and only say *how* to do a job. **When a skill and this playbook disagree, the playbook wins.**

Read `../brand.md` (positioning, voice, products) and `../learnings.md` (results so far) as well.

## Which file to read

| Job | Read |
|---|---|
| Any static (Direct plain-text, Before/After, Volume idea, layouts that worked) | `static-ads.md`. How-to for Remotion stills: the `leadx-static-ad` skill |
| Videos (LeadX buyer/seller VO ads) | `video.md`. How-to: the `leadx-video-ad` skill and `references/video-maker/` |
| CPL target, campaign filter, alerts | `targets.md` |

## Always true for GoMedia

- Audience: Singapore **property agents** (B2B). Products: LeadX buyer leads, LeadX seller leads, telemarketer/ISA system, CRM.
- Price wording: always **"from $500/month"** for 10 verified leads a month (never "$500/month", never "$650"). Per lead: "from $50 / lead".
- "Replacement available", not "Bad lead? We replace it."
- Any "guaranteed" claim must match the LeadX T&C.
- **"Direct"** = the user's proven plain white Facebook-text-post style ad (5 lines: "Property agents 👋" / red offer / yellow "from $500/month" box / towns / "Message us to start 👇"). It won across buyer, seller and ISA lines (learnings 2026-11-03). Details in `static-ads.md`.
- LeadX videos and statics need no project images, so don't ask for renders.

## Adding a rule

When the user gives new feedback for GoMedia, add it to the right file here, with the date. Don't put client rules in a skill, an agent file or Claude's memory.
