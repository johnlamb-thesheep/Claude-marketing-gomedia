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

## CTA — two distinct funnel types, don't conflate them

- **"GET QUOTE"** (pill-shaped button, arrow icon) — consultation funnel, used on the standard lifestyle/price listing ads.
- **"DOWNLOAD LIST"** — a completely different format: lead-magnet ad for a specific bedroom-count/price-segment list (e.g. "List of 4 Bedder Condo, $2.3M price under"). This format drops the benefit-icon row and trust footer in favor of 3 trust *chips* specific to the list itself (No Duplicate · Real-Time Listing · No Fake Listing) and a price-under badge directly on the photo. Use this format only when the brief's offer is literally a downloadable list, not a general consultation.

## Format and cost discipline

Same as the base static-designer process: spec first with an approval box, then — only after approval — a stated cost estimate and a second go-ahead before any paid image generation.
