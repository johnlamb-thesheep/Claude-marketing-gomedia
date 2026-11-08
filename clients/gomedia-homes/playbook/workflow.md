# GoAhead: how the work runs

## One folder per new-launch project (user, 2026-11-07)

Every project gets `clients/gomedia-homes/projects/<slug>/` with:

- `research.md`
- `ad-library-<date>.md` (raw Meta Ad Library pull)
- `copy-brief.md`
- `design-prompts.md`
- `perf-review.md`
- `images/` for finished images, `images/source/` for real project images (log every URL in `SOURCES.md`)
- `old/` for superseded versions

Use this folder instead of `campaigns/<YYYY-MM-name>/` for project ads. The first 8-project batch from 2026-11-04 stays archived in `campaigns/2026-11-new-launch-projects/`. Other campaigns (e.g. Custom List) still use `campaigns/`.

## The chain for every project (user, 2026-11-04)

One project at a time. Never write copy or prompts solo.

1. **researcher:** research the project and check the Meta Ad Library for how advertisers run that exact project (angles, hooks, CTAs, offers, visuals). If the agents lack Meta access, the lead pulls the raw Ad Library data first.
2. **copywriter:** decide what to highlight, then write the copy following `static-ads.md` and `new-launch-3-angle.md`.
3. **static-designer:** write the design prompts from that copy. Prompts only, no paid generation.
4. **performance:** review and give a verdict.

The full research and stage notes are in `static-ads.md` ("New-launch project chain"). The current standard is the **3 ads** in `new-launch-3-angle.md`; the older 5-angle / 7-ad slates are history.

## Building and filing the 3 ads (user, 2026-11-07)

- **Real project images, not AI scenery.** Check `projects/<slug>/` and `inputs/product-images/` first, then Google Images (standing OK from the user, 2026-11-07: Google is fine, GoAhead may use them). A different image per angle.
- **Canva first** (Canva MCP); the user's free ChatGPT, then free Gemini (through Claude in Chrome) only as a fallback. Step by step: the `new-launch-image-run` skill.
- **Notion:** one page per project in the Master Content Tracker (data source `collection://32875351-3e23-805b-8dfd-000b2f4afc82`). Properties:
  - Databased: Fulfillment Marketing
  - Vertical: Real Estate
  - Campaign type: Ful - New launches
  - Format: Picture
  - Lead Conversion: Lead Form
  - Status: Terri approval needed
  - Canva route: the Direct ad's Canva link in **Final Ads**, **Creative Done** = today, all 3 Canva links on the page.

## Delivery

Send the final copy / prompts as a clean `.md` file. No `.docx` unless asked (user, 2026-11-05).
