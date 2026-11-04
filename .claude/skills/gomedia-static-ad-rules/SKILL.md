---
name: gomedia-static-ad-rules
description: "Visual and copy rules for GoMedia static ad creative, distilled from the client's proven reference ad and from live client feedback across the seller-leads and buyer-leads campaigns (what landed vs. what didn't). Use whenever the static-designer agent is writing a creative-spec.md for gomedia or gomedia-homes, or whenever anyone asks what a GoMedia static ad should look like."
license: MIT
metadata:
  author: gomedia-static-ad-rules
  version: "1.0.0"
---

# GoMedia Static Ad Rules

Read this before writing any `creative-spec.md` for `gomedia` or `gomedia-homes`. It's the distilled output of looking at the client's own winning reference ad plus several rounds of real client feedback — not a generic template. When it conflicts with a generic ad-creative skill's defaults, this file wins for GoMedia work.

## Mandatory on every spec

- **Eyebrow callout, every single ad, no exceptions:** small, bold, red, all-caps, top of frame.
  - Agent-facing ad (selling leads to property agents — the large majority of GoMedia's ads): **"PROPERTY AGENT"**.
  - Homebuyer-facing ad (if GoMedia ever targets homebuyers directly instead of agents): **"SINGAPORE HOMEBUYER"**.
- **Headlines stay short.** The client has said this more than once. If a headline formula produces a full sentence, cut it or split it across two short stacked lines instead.
- **4:5 (1080×1350) is the default aspect ratio.** Don't produce 1:1 or anything else unless explicitly asked.
- **No "free lead replacement" or "WhatsApp automation included" by default.** These were overused boilerplate carried over from the old reference ad without being asked for each time — the client explicitly told us to stop. Only include either claim when (a) the user asks for it in that specific request, or (b) WhatsApp automation is the actual subject/hook of that specific ad (e.g. an "inbound leads + instant auto-follow-up" angle) rather than a disclaimer tacked onto an unrelated ad.
- **Use real, specific numbers over vague placeholders.** A comparison line reads far stronger as "$2,000/month, no guarantee" vs. "$500/month, 10 verified leads" than as an abstract "clicks vs. leads" framing — concrete numbers from the brief or brand.md beat generic claims every time.

## Palette and type, from the reference ad

White background, black primary text, one bold saturated red accent (~#D32B2B) for the eyebrow/stat lines/CTA, light grey for any data/table panel. Clean, bold, confident sans-serif. This is a fixed system — vary the *layout metaphor* per concept (see below), never the palette.

## Layout metaphor: vary it, don't default to the same table every time

The client explicitly asked to break away from reusing the reference ad's straight data-table layout for every new ad. Concepts that have been built and well-received so far, to draw from or riff on:
- Straight data table (the original reference ad's own format — still valid, especially as a "closest to proven" control variant)
- Notebook/checklist (ruled paper, hand-drawn ticks)
- Leaderboard/ranking (numbered ranks, bar-chart-style bars scaled to a real number)
- Listing card stack (mirrors the property-listing cards agents already browse)
- Boarding pass/ticket stub (built-in sense of limited availability)
- Pin map (ties a "new launch" or location angle to a spatial visual)
- Receipt/invoice comparison (literal "pay for this, not that")
- Crossed-out equation ("X ≠ Y" struck through, "Y = Guaranteed" below)
- Split-screen versus (desaturated/uncertain side vs. full-color/guaranteed side)
- Stamped "GUARANTEED" invoice (confidence over comparison)
- Inbox/chat-bubble mockup (for "leads message you" / inbound angles)
- Stopwatch/freshness timer (for speed/automation angles)
- Conveyor/pipeline flow (for volume/"leads arrive automatically" angles)

When asked for multiple variations of one concept, differentiate them by a real mechanic (what's emphasized, which number is the hero, a genuine layout-weight change) — never just reskin the same layout twice with different colors.

## What's tested well vs. what hasn't (client feedback, keep updating this)

- **Scarcity/urgency framing** ("these are this month's live leads, they don't last") — client called this a hit, explicitly asked to keep it as the quality bar for tone/sharpness.
- **Direct value-comparison framing and generic social-proof framing** — both explicitly rejected as "kinda bad" / not landing. Avoid defaulting to either as a first idea; if a value-comparison angle is wanted, anchor it to a real, specific number (see above) rather than a generic "here's what you get" recap.
- **Curiosity/pattern-interrupt openers** (a single surprising real stat before revealing it's an ad) — worked well once sharpened to a short, concrete line ("We have 96 leads in Tampines enquiring on a HDB home valuation right now!").
- **Bold/contrarian claims** ("you don't need more ads") — flagged as needing a brand-voice check before shipping; stronger opinion than the brand's default tone, use deliberately, not by default.

## Format and cost discipline (unchanged from the base static-designer process)

Spec first, approval box, then — and only then — cost estimate and a second go-ahead before any paid image generation. Canva's `create-design` tool is a free alternative when quota allows (check for `quota_exceeded` before assuming it's available); otherwise the paid `generating-image-ads` route or a free HTML/CSS render are the fallbacks. Never spend without both the spec approval and the restated cost confirmation.
