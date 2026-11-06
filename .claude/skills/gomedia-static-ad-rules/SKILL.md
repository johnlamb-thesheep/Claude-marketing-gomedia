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

## Format "DIRECT" — the proven plain-text ad (added 2026-11-05)

Reference: `clients/gomedia/inputs/winning-ads/2026-seller-plain-direct-REFERENCE.png` + `-NOTES.md`. Source component: `SellerStaticPlain` in `C:/Users/asus/Documents/Claude Video Editing/my-video/src/LeadX/SellerStatics.tsx`. The user calls this type **"Direct"**; Direct framing has won in 3 product lines (learnings.md).

It is the one exception to the house palette/eyebrow rules above — its whole power is looking like a plain Facebook text post, not a designed ad:
- Pure white, Arial/Helvetica, centred, ~5 short lines, emoji allowed (👋 👇 ✅). No eyebrow bar, no logo, no panels, no outlined button.
- Line order: audience call-out (black bold) → offer in **big bold red** → price in a **solid yellow box** ("from $500/month", exact) → specificity line (real SG towns / projects, regular weight) → CTA line pointing down 👇.
- Max 3 visual levels: black, red, yellow box. If you add a 4th element, take one away.
- Variations must keep the "plain post" feel. Vary ONE thing per variant so results are readable: the hook line, the hero number, the specificity line, the CTA, or a lo-fi container (notes app, plain tweet/post, handwritten-style) — never turn it into a designed layout.
- Detailed variation playbook and results: `clients/gomedia/campaigns/2026-11-direct-plain-text/` (research.md, copy.md, creative-spec.md).
- Render source: `C:/Users/asus/Documents/Claude Video Editing/my-video/src/LeadX/DirectStatics.tsx` (Still ids `DirectV1…`, `DirectD1…`, plus `…Story` for 9:16). It lives outside this repo, so only the spec and copy are versioned here.

### Direct variation set built 2026-11-05 (what each one tests)
- **Copy variants (one change each vs. the control):**
  - V1: hook line "Need more seller listings?"
  - V2: giant red "10", towns dropped
  - V3: towns line swapped for "= from $50 a lead"
  - V5: red question "No new listings this month?", towns dropped
  - V12: buyer twin, "New launch agents 👋" + "10 verified project buyer leads a month" + "New launch condos & ECs"
- **Design variants (control copy, look only):**
  - D1: notes-app style
  - D2: plain text-post card. Drop the fake "GoMedia" header; it sits under the real page name.
  - D3: highlighter-marker swipe
  - D4: handwritten font (Ink Free). Weaker at feed size, and the licence is unconfirmed.
  - D5: all black with one red underline
- **Performance's launch pick:** seller V1 + V3 + V2 + D3 next to the control, buyer V12. Hold V5 as the first replacement. Max ~4 new ads per ad set at the current lead volume (~15–17 leads per 90 days), otherwise no result is readable.

### Render QA lessons (apply to every Direct-style still)
- Force line breaks (`<br />`) on 2-line offers so no single word is orphaned (e.g. "10 verified seller leads / a month").
- No line may be wider than the control's yellow box (~896px of a 1080 frame). Shrink a long red line (e.g. the buyer offer at 78px) rather than let it run edge to edge.
- 9:16: keep all ink between y≈270 and y≈1248 so the Reels caption/button area doesn't cover the CTA. For a full-bleed split layout, fill the background full-height and scale the 4:5 layout (~0.72–0.8) into that zone. Never leave white bands.
- Keep "from $500/month" on one line (nowrap), and keep "from" readable, not tiny, next to a big price.

## Format "BEFORE / AFTER" split-screen — buyer leads (added 2026-11-05, user request)

Reference: `clients/gomedia/inputs/ad-references/split-screen-before-after-explee-REFERENCE.webp` + `-NOTES.md` (layout idea only, from a third-party ad). Render source: `my-video/src/LeadX/BeforeAfterStatics.tsx` + `beforeAfterCopy.ts`.
- **Left side, the old way:** "$2,000/month · Agency or DIY ads" with ✕ pains (no guaranteed leads, paying for clicks, learning everything yourself, no follow up, wasting time).
- **Right side, us:** "from $500/month · With us" with ✓ benefits (10 guaranteed buyer leads*, WhatsApp automation & follow up, Replacement available, pay per lead not clicks, 80+ new launch projects) plus named projects.
- In this format the user asked for WhatsApp automation and "Replacement available", so the boilerplate ban doesn't apply here. It still applies everywhere else unless asked.
- **"Guaranteed" always carries "*T&Cs apply".** It can't go live until the client supplies real T&Cs (brand.md §4 TODO).
- Don't call projects "hot this week" unless newlaunches.sg confirms it on the day.
- **Three variants:**
  - BA1: full red/mint split, closest to the reference.
  - BA2: stacked. Headline "Pay per lead, not per click", grey card with $2,000 struck through, then the Direct-style yellow price box.
  - BA3: projects as the hero.
- **Performance pick:** BA2 first, then BA1, next to V12. Hold BA3. Past "Before & After pricing" ads only tied or lost against Direct (learnings.md), so BA2 keeps the plain look.

## Angle idea, not built yet: VOLUME — "40 to 100 verified leads a month" (added 2026-11-06)
- **Brief from the user:** 40–100 verified leads a month, **no pricing on the ad**. The pain is **"not enough leads to work with this month"**.
- **Ideas proposed:**
  - S1 / B1: Direct plain format. "Not enough seller leads this month?" (red) + yellow box "40–100 verified seller/buyer leads a month" + towns/projects + CTA.
  - S2: empty-month calendar, "30 days. 3 leads." → "Or 40–100 verified seller leads a month."
  - B2: a nearly empty "this month's buyer calls" list vs. a long, full list.
- **Rules for this angle:**
  - Write the pain as a question. Never assert the agent's own number.
  - Use "40–100", not "up to 100", because "up to 100" reads like a promise.
  - Before building, confirm the 40–100 tier and its price with the client so sales can answer "how much?". No price on the ad means more price questions and some low-intent leads.

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
