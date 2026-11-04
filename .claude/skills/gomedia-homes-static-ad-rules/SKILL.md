---
name: gomedia-homes-static-ad-rules
description: "Visual and copy rules for GoMedia Homes (brand name used in ads: 'GoAhead') buyer-facing static ads — new launch condo/EC listings sold directly to Singapore homebuyers, not property agents. Distilled from the client's own 'New Launch Custom List of Home' reference ad set. Use whenever the static-designer agent is writing a creative-spec.md for gomedia-homes, or when anyone asks what a GoMedia Homes / GoAhead buyer-facing ad should look like. Do not confuse with gomedia-static-ad-rules, which is for the separate agent-facing (property agent lead-gen) brand."
license: MIT
metadata:
  author: gomedia-homes-static-ad-rules
  version: "1.0.0"
---

# GoMedia Homes (GoAhead) Static Ad Rules

Read this before writing any `creative-spec.md` for `gomedia-homes`. This client is **different from `gomedia`**: GoMedia Homes sells buyer consultation on new-launch Singapore condos/ECs directly to homebuyers and investors (brand name in ads: "GoAhead"), not leads to property agents. Don't apply `gomedia-static-ad-rules` here — the two brands share a market (Singapore property) but not an audience or a visual system.

Source material: 6 reference ads in `clients/gomedia-homes/inputs/ad-references/new-launch-custom-list/` (index in that folder's `index.md`; images are local-only, not in git — see the repo README's data-connections section).

## Headline formula

State the unit type (bedroom count) plus a hook. Two proven variants:
- **Lifestyle hook:** "[N] Bedder Smart Living in Singapore" — black headline, red (or theme-color) second line for "Smart Living."
- **Price-anchor hook:** "[N]-Bedroom Homes From $[price]" — strips out the benefit-icon row and trust footer entirely in exchange for a punchier, price-led single column. Use this version when the brief's angle is specifically about affordability/price, not lifestyle.

Keep the "in Singapore" / "Explore available [N]-bedroom property listings" line as a short, literal subhead — this client's copy stays plain and direct, not clever.

## The fixed 3-icon benefit row

Every lifestyle-hook ad carries the same three benefits, same order, same icon family (simple line icons — pin, train, building):
1. **Prime Location(s)** — location pin icon
2. **Great Connectivity** — train icon
3. **Modern Facilities** (or "Everything Within Reach" in the blue variant) — building icon

Don't invent new benefit categories or reorder these — treat this trio as a fixed brand asset, like a logo lockup.

## Bottom trust footer (when present)

A second, separate 3-item row, usually at the very bottom of the frame: **Handpicked homes that fit you** · **Expert advice you can trust** · **Hassle-free home buying**. Icon style for this row varies more than the benefit row does (plain line icons in some variants, cute illustrated icons on a pastel gradient in others) — the wording is the fixed part, the icon style is not. Price-anchor variants typically drop this row to stay punchy.

## Photography

Real interior photos only — living room, bedroom, kitchen — arranged as a multi-image collage/grid, never a single hero shot alone and never illustration. Favor light, staged-looking interiors (marble, warm wood, floor-to-ceiling windows, city views) consistent with a premium-but-attainable new-launch positioning.

**Compliance:** if a photo is a staged/sample unit rather than the actual listed unit, mark it explicitly — "*IMAGE SAMPLE ONLY*" — as seen in the condo-list reference ad. This lines up with the CEA advertising-guideline caution already flagged in `clients/gomedia-homes/brand.md`.

## Color

Red is the dominant house color (matches the reference set's majority), but **not rigidly fixed** — one reference ad runs an all-blue theme instead, likely an A/B variant. Default to red unless the brief specifically calls for a blue (or other) variant to be tested against it. White background either way; black for primary text.

## CTA — check what the offer actually is before defaulting to "GET QUOTE"

**Don't assume "GET QUOTE" by default.** The reference ad set's CTA split (GET QUOTE vs. DOWNLOAD LIST, below) describes two different ad *formats* seen in the wild — it does not mean every new brief defaults to GET QUOTE unless told otherwise. A real campaign (2-bedder from $1.2M, 2026-11) was first-drafted with GET QUOTE across the board and had to be corrected after the fact once the client clarified the actual offer was a custom/handpicked **list** request, not a consultation booking — the CTA on all 10 creatives, including the lifestyle/comparison/discovery concepts that normally read as GET QUOTE-style, had to change to list-request phrasing. **Always confirm from the brief what the reader actually does next — books a consult, or gets/downloads a list — before picking a CTA family, rather than pattern-matching to whichever concept visually resembles the lifestyle vs. list-ad examples below.**

- **"GET QUOTE"** (pill-shaped button, arrow icon) — consultation funnel. Use only when the brief's offer is actually a consultation/advisory booking.
- **"DOWNLOAD LIST" / "GET MY LIST"** — list-request funnel. Use when the offer is a list of homes (handpicked/curated, or a specific bedroom-count/price-segment list like "List of 4 Bedder Condo, $2.3M price under"). This can apply even to lifestyle- or comparison-framed concepts, not just the dedicated list-ad format below — the *visual concept* (lifestyle hook, comparison, map, etc.) and the *CTA/offer type* are independent choices, pick each from the brief separately. The dedicated list-ad format (full-bleed photo + dark overlay + trust chips + price-under badge, or a locked/teaser card stack) is one specific visual treatment for a list offer, not the only one a list offer can use.

## Competitive landscape — read this before brainstorming new angles

From a Meta Ad Library check (2026-11-04, SG housing ads; full writeup with snapshot links in `clients/gomedia-homes/inputs/competitors/2026-11-bedroom-price-list-format.md`). Treat this as a living section — update it when a fresh competitor check is run, don't let it go stale.

**The bedroom-count + price-anchor format is saturated — it is not a differentiator on its own.** At least 8 competitors are running near-identical structural ads concurrently right now:
- **Before You Buy** is the closest direct competitor — running 3 simultaneous bedroom-tier + price + MRT-proximity variants at once, clearly systematically testing this exact formula.
- **Lex Lim Property** is running an ad ("Brand-New 1-Bedders From $1.1M") with near-identical price point and phrasing to our own `ref-05` ad — worth monitoring, not just noting once.
- **SG Undervalued Developments**, **KJ Heng Real Estate**, **Judy's Property Page** all run the same bedroom+price mechanic, sometimes with urgency stacked on ("LAST CHANCE... below $2.3M!").
- The **"DOWNLOAD LIST" lead-magnet variant** (our `ref-06` format) is equally common — Homes with Charissa, Singjia Property, Hot Properties Of SG, Vincent Chan all run close equivalents. "Hot Properties Of SG"'s ad title ("Click To Get Discounts | E-brochure | Price Lists | Floor Plans") is near-identical phrasing to our own live ad titles.

**What this means for new concepts/variations:** don't default to "just another bedroom+price headline" when asked to brainstorm — that's the most crowded part of the market, not a wedge. When generating variations, deliberately include at least one angle that isn't a reskin of the bedroom/price formula. Two specific openings worth testing, pulled from this research:

1. **Comparison framing — identified white space.** Only 2 competitors found doing this (Jackson B & Associates: "Same layout, $173,000 apart"; Chris Yan Property: "Side by side") vs. 8+ doing bedroom+price. A comparison mechanic (two units/prices/projects side by side) is a genuinely different structure from what's saturating the feed right now.
2. **Evergreen "deal discovery" framing has staying power, not just urgency.** SGProperty's "Discover Top Below Market Condo Deals" ad has been relaunched repeatedly over roughly a year — that's a signal an advertiser keeps betting on, not a one-off test. Urgency framing (KJ Heng's "LAST CHANCE") is the more common lever in this market; a calmer "ongoing discovery" angle is the less-tested alternative worth a real test, not an assumption it works.

**Caveat:** this read is from ad titles/page names/timing only — Facebook's ad snapshot pages blocked automated visual inspection (403). It tells you what headlines/hooks are saturated, not whether competitors' actual visual execution (photo collage, benefit icons, trust footer) also converges on GoMedia's look. Don't assume visual saturation from this alone.

## New-launch PROJECT ads — the 5-angle format (distinct from the custom-list format above)

Separate ad type from the headline-formula/benefit-row format above: this is for promoting **one specific named new-launch project** (e.g. "One Marina Gardens," "Bagnall Haus"), not a generic bedroom-count/custom-list offer. Built and validated across 8 real projects, 2026-11.

**The 5 required angles per project** (run all 5 per project; a 6th "curiosity/story" angle is optional and higher-risk — see below):
1. **Direct** — project name front and center in the headline.
2. **Blind** — need-led or area-led (e.g. "New Launch Condo in Marina South," "Looking for a brand-new family home?"), **not cryptic/curiosity-gap wording**, project name revealed in the subhead, not the headline. (A separate, riskier "curiosity/story" mechanic exists — e.g. "This Corner of the City Is Changing Fast" — keep it optional and clearly labeled higher-risk, never conflate it with "blind.")
3. **Floor layout** — an actual floor-plan line-drawing graphic as the visual hero, paired with a real building photo (both required, not either/or). This is relative white space: most competitors bundle "floor plan" as a download afterthought, not a hero visual — lean into it.
4. **MRT distance** — use only a confirmed walk-time/station fact. If none is confirmed for this project, fall back to general area/location framing ("heart of Marina South") instead of inventing a distance. When a strong confirmed fact exists (e.g. "500m / 5-min walk to Boon Keng MRT"), state it directly with no hedging.
5. **Price/PSF** — use only confirmed figures, with "approx."/"from" qualifiers whenever sources disagree. For a pre-launch project with no released price, reframe this angle entirely as "Price Coming Soon / Be first to know" rather than guessing a number, and if any estimate exists, label it explicitly as an analyst estimate, never as a confirmed launch price.

**Research before writing any of this:** (1) check newlaunches.sg's "Popular Projects This Week" for the current hot-project list, (2) web-search each project's own facts (district, tenure, developer, psf, unit mix, TOP) from PropertyGuru/EdgeProp/SRX/99.co/HomeJourney — sources frequently disagree for pre-launch projects, so note the disagreement and qualify rather than pick one silently, (3) run a Meta Ad Library check on the project name itself for live competitor examples of each angle — this is usually rich (an advertiser running the exact 5-angle split simultaneously on one project is a realistic finding, not a hypothetical).

**Never invent:** price, psf, unit count, or MRT distance that isn't confirmed by research. When a project is genuinely pre-launch with no official figures, reframe the affected angle (see price/PSF above) rather than filling the gap with a guess. Real, sourced differentiators (e.g. "over 60% take-up on launch weekend," "first major Hougang launch since 2018/2019") are good to use as supporting proof — invented urgency/scarcity is not.

**CTA for project ads — a third decision point beyond the base rule above:**
- **"GET PRICE LIST & E-BROCHURE"** — for a project with a real, released price list (matches GoMedia's own live ad titles).
- **"REGISTER YOUR INTEREST"** — for a pre-launch project with no price released yet. Promising a price list that doesn't exist is a broken first touch for the lead; this is the standard SG new-launch VIP-registration mechanic for exactly this situation. Don't default either CTA without checking which stage the project is actually at.

**Real photo rule — pre-launch exception:** the base house rule ("every creative needs a real photo, no exceptions") genuinely cannot be met for a project that hasn't TOP'd — there is no completed building to photograph. For these, substitute a photoreal architectural-render-style image and label it **"*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*"** (distinct from the standard "*IMAGE SAMPLE ONLY*" staged-photo label, which is for a real photo of a different/similar unit — "artist's impression" is for a render standing in for a building that doesn't physically exist yet). Flag this explicitly rather than silently dropping the real-photo requirement, and note that an official developer render should replace the AI one if the client has one.

## Format and cost discipline

Same as the base static-designer process: spec first with an approval box, then — only after approval — a stated cost estimate and a second go-ahead before any paid image generation.
