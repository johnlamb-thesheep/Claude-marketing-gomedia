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

**Client copy rules (feedback 2026-11-04) — these override the angle notes above where they conflict:**
- **Only the Direct angle names the project.** Every other angle (Blind, Floor layout, MRT, Price) hides the condo name completely — not in the headline, not in the subhead, not on the image. "Name revealed in subhead" for Blind is retired.
- **Direct leads with price — only when the entry price (cheapest unit) is around the $1.5M mark or below.** Updated 2026-11-06 (replaces the old $1.4M cut-off): ~$1.5M is fine to show, up to ~$1.6M is still acceptable, anything clearly above ~$1.6M → don't mention price anywhere in the ad (no headline, subhead or fine print); lead with the project's hottest USP instead. Check the cheapest unit's price before writing any project.
- **Find the hot USP first.** Before copy, the researcher digs out what is actually hot about the project (what buyers and the developer are excited about, what makes it different) — the copy is built around those real USPs, not a generic checklist.
- **Every ad must look and sound different.** Five ads on one template is a fail. Vary the layout (photo-led, big-type, split-screen, map/route graphic, lifestyle collage, etc.) and the angle voice. Include emotional, need-led hooks like "Looking for a home for your family?" alongside the factual ones.
- **Subheads sell advantages, not addresses.** Minutes to MRT, rare freehold, bedroom mix, price. Never district codes ("D15", "D01"), never street addresses — use the area name only ("East Coast", "Marina South").
- **Freehold → "rare freehold condo".** Say it every time a project is freehold.
- **No unit counts — anywhere.** Never say how many homes/units the project has ("only 105 homes", "boutique 56-unit development"), not in headlines, subheads, badges, fine print or primary text. Re-confirmed by the client 2026-11-06. If you want a size fact, give the sqft range instead (e.g. "635–1,744 sqft").
- **Always use the full MRT station name.** "4-min walk to Tanjong Katong MRT", never just "4-min walk to MRT" — in headlines, subheads, badges and map labels.
- **No "% sold" claims.** Buyers don't care — drop sales-percentage lines ("Over 80% sold") entirely.
- **Always pair MRT minutes with nearby amenities.** Subheads should name the walk time to the MRT *and* the malls/parks/lifestyle spots close by (e.g. "4-min walk to Tanjong Katong MRT, near Parkway Parade & i12 Katong").
- Because the name is hidden on 4 of 5 ads, the lead form / landing page must reveal it after the click.

**Ask before researching (CLAUDE.md hard rule 7):** first check local files and ask the user once whether they have renders/photos, the brochure/price list and key facts. Use what they give and skip the matching web steps below; run the online research only for what is still missing and only after they say "search online".

**Research before writing any of this:** (1) check newlaunches.sg's "Popular Projects This Week" for the current hot-project list, (2) web-search each project's own facts (district, tenure, developer, psf, unit mix, TOP) from PropertyGuru/EdgeProp/SRX/99.co/HomeJourney — sources frequently disagree for pre-launch projects, so note the disagreement and qualify rather than pick one silently, (3) run a Meta Ad Library check on the project name itself for live competitor examples of each angle — this is usually rich (an advertiser running the exact 5-angle split simultaneously on one project is a realistic finding, not a hypothetical).

**Never invent:** price, psf, unit count, or MRT distance that isn't confirmed by research. When a project is genuinely pre-launch with no official figures, reframe the affected angle (see price/PSF above) rather than filling the gap with a guess. Real, sourced differentiators (e.g. "over 60% take-up on launch weekend," "first major Hougang launch since 2018/2019") are good to use as supporting proof — invented urgency/scarcity is not.

**CTA for project ads — a third decision point beyond the base rule above:**
- **"GET PRICE LIST & E-BROCHURE"** — for a project with a real, released price list (matches GoMedia's own live ad titles).
- **"REGISTER YOUR INTEREST"** — for a pre-launch project with no price released yet. Promising a price list that doesn't exist is a broken first touch for the lead; this is the standard SG new-launch VIP-registration mechanic for exactly this situation. Don't default either CTA without checking which stage the project is actually at.

**Real photo rule — pre-launch exception:** the base house rule ("every creative needs a real photo, no exceptions") genuinely cannot be met for a project that hasn't TOP'd — there is no completed building to photograph. For these, substitute a photoreal architectural-render-style image and label it **"*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*"** (distinct from the standard "*IMAGE SAMPLE ONLY*" staged-photo label, which is for a real photo of a different/similar unit — "artist's impression" is for a render standing in for a building that doesn't physically exist yet). Flag this explicitly rather than silently dropping the real-photo requirement, and note that an official developer render should replace the AI one if the client has one.

**Label refinement (performance review, 2026-11-05 — applied to the Arcady, Hougang Central and Coastal Cabana prompts):** "ARTIST'S IMPRESSION" implies the image shows *this* project, so reserve **"IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY"** for an **official developer render or plan** composited into the ad. A generic AI-generated or stock image (building, interior, pool, lifestyle) gets **"IMAGE SAMPLE ONLY – not the actual development"** (or "– not the actual unit" for an interior standing in for a specific unit type). Maps and route diagrams get **"Illustrative map/diagram, not to scale."** Never generate an AI condo tower captioned with the real project name — use a text-led, interior or lifestyle visual instead until the official render is cleared.

## New-launch project chain — how each project is run (user-directed, 2026-11)

For gomedia-homes new-launch **project** ads the user asked (in chat, 2026-11-04) for this chain, one project at a time. It runs inside the CLAUDE.md pipeline — the user's chat request stands in for the brief gate for these projects only; the launch-approval gate and the no-spend rule are unchanged.

1. **Lead** pulls the Meta Ad Library for the project name + a nearby-area keyword (agents have no MCP access) and saves it to `clients/gomedia-homes/inputs/competitors/<project>-meta-ad-library-<date>.md` as raw data.
2. **researcher** → `research-<project>.md`: stage (pre-launch / launched / remaining units), CONFIRMED vs UNCONFIRMED facts with URLs, the price-rule outcome, the CTA, saturated angles vs white space, ranked hot USPs with emotional hooks, unreliable/spam sites.
3. **copywriter** → `copy-<project>.md`: **7 ads**, each a different voice, hook, buyer and suggested layout (the slate the user picked on Amber House: Direct, Family, MRT, real-unit listing card, upgrader or lifestyle, floor plan, checklist/day-in-the-life — adapt to the project's USPs and replace slots that the facts can't support).
4. **static-designer** → `<project>-prompts.md`: a "Design at a glance" table, then per ad: copy bullets, a full prompt (with text), an **image-only prompt** with reserved text zones (recommended route — set all text in Canva/Figma and proof it; image models garble small text), a Headline-B swap line and a 9:16 note. No two ads share a layout or colour scheme; only the red eyebrow tag and CTA wording repeat across projects.
5. **performance** → appends a dated section to `perf-review.md`: per-ad verdicts, rule checks, a read-only account check (apply the gomedia-homes campaign filter), wave 1 / wave 2 / hold ranking, a test plan, and exact old → new text fixes. The lead applies the text fixes and sends the user the final **`.md`** (no `.docx` unless asked).

**Copy lessons from the four projects (Amber House, The Arcady, Hougang Central, Coastal Cabana):**
- **Walk minutes only when a source gives them.** Straight-line distances (map coordinates, "~700m") are written as "near", never converted into minutes. If sources disagree on minutes, use the developer's figure and add fine print "Walk/drive times per developer."
- **Future rail is always hedged.** Write "Cross Island Line … FROM 2030 (TARGET)" (or "targeted for 2030; timeline subject to change"), never as if open. No real MRT/LTA line colours or logos in diagrams.
- **No price in the ad means the lead form does the filtering.** Every form carries a budget band question, a buying-timeline question, unit type, purpose and "Are you a licensed property agent?". The form's first screen reveals the project name (hidden on 6 of 7 ads). Whether the form may show a price line is the user's call.
- **Schools:** name them with "near"/walk time only, never imply admission ("School run: X Primary" → "X Primary nearby"), and carry the MOE line ("School admission subject to MOE regulations and balloting").
- **Pre-launch CTA:** no price list exists → "REGISTER YOUR INTEREST" with Meta's "Sign up" button, and no VIP/preview promise on the thank-you screen. Check our own live ads too — they have promised price lists that didn't exist.
- **"Preview" from the user may not mean pre-launch** — check the stage (Coastal Cabana had launched; "preview" meant the show flat was open). Never write preview/VVIP/launching-soon wording for a launched project.
- **ECs:** "EC eligibility conditions apply." on every ad; eligibility is a lead-form question, never targeting (Housing category); no grant amount unless confirmed on HDB; MOP / Deferred Payment Scheme only as plain facts ("DPS prices differ from normal-scheme prices"); no privatisation or resale-gain claims; use the income ceiling that applies to *that* project.
- **Check the account before assuming a project is new.** Paused campaigns don't show in the Ad Library — performance found 14 months of Hougang history and a full Coastal Cabana history that research had missed. See `learnings.md` for the per-project CPLs.

## Format and cost discipline

Same as the base static-designer process: spec first with an approval box, then — only after approval — a stated cost estimate and a second go-ahead before any paid image generation.
