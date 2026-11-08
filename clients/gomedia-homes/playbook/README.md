# GoAhead (gomedia-homes) playbook

Everything specific to this client lives in this folder: copy rules, the design of each ad type, video style, targets and how the work runs. The agents and skills in `.claude/` are shared by every client and only say *how* to do a job. **When a skill and this playbook disagree, the playbook wins.**

Read `../brand.md` (who GoAhead is, voice) and `../learnings.md` (results so far) as well.

## Which file to read

| Job | Read |
|---|---|
| Any copy, static or video | `static-ads.md`: the client copy rules (no unit counts, no % sold, no district codes, full MRT names, "rare freehold condo", price cut-off, CTA by stage, labels) |
| New-launch statics for buyer fulfillment (the 3 ads: Direct / Floor plan / Price + MRT) | `new-launch-3-angle.md`: angles, locked layouts, copy rules. How-to: the `new-launch-image-run` skill |
| Custom List of Homes statics | `static-ads.md` (headline formula, 3-icon row, CTA) + reference set `../inputs/ad-references/new-launch-custom-list/` |
| Videos (property reels, blind or direct) | `video.md`. How-to: the `new-launch-video-ad` skill and `references/video-maker/` |
| How a new-launch project is run, folders, Notion | `workflow.md` |
| CPL target, campaign filter, alerts | `targets.md` |

## Always true for GoAhead

- Brand name in ads: **GoAhead**. Audience: Singapore new-launch condo / EC buyers (not property agents).
- **CEA:** GoAhead is always authorised to market any new-launch project it advertises (user, 2026-11-07). Never raise CEA authorisation as a blocker. Rights to renders/floor plans are still a separate check.
- **Custom List of Homes naming (user, 2026-11-07):** never say "new launch shortlist" (the boss team didn't sign off on it). Use "Custom List of Homes", e.g. "Your custom list of homes in 1 minute", with a bedroom ladder "1-bedder from $X / 2-bedder from $X / 3-bedder from $X / 4-bedder from $X". Prices come from the client with a source; keep "1 minute" honest (short instant form).
- **Ask for materials before researching** (CLAUDE.md hard rule 7): renders/photos, brochure/price list, key facts, blind or direct. Web search only after the user says "search online".
- Deliver prompts and copy as a clean `.md` file. No `.docx` unless asked.

## Reference images

- `../inputs/ad-references/new-launch-3-layouts/`: the 3 locked layouts (A-direct, B-floorplan, C-price-mrt)
- `../inputs/ad-references/new-launch-custom-list/`: the client's Custom List of Homes ad set
- `../inputs/ad-references/overseas-property-formats/`: overseas formats for ideas

## Adding a rule

When the user gives new feedback for GoAhead, add it to the right file here, with the date. Don't put client rules in a skill, an agent file or Claude's memory.
