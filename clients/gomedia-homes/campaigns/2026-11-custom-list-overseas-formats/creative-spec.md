# Creative Spec — New Launch Custom List x Overseas Formats (2026-11)

Source: [copy.md](./copy.md) (rev. 1, performance re-review **Approved** 2026-11-07) · Brief: [brief.md](./brief.md) rev. 2 · Test plan: [test-plan.md](./test-plan.md) rev. 2
Client: gomedia-homes (ads run as **GoAhead**) · Author: static-designer · Date: 2026-11-07
Paste-ready prompts: [custom-list-prompts.md](./custom-list-prompts.md)

Read before writing: CLAUDE.md, `brand.md`, `learnings.md`, brief.md, test-plan.md, copy.md, perf-review.md, `gomedia-homes-static-ad-rules`, `inputs/ad-references/overseas-property-formats/index.md` (+ all 6 .webp viewed), `inputs/ad-references/new-launch-custom-list/index.md`, `campaigns/2026-11-new-launch-projects/arcady-prompts.md` (house prompt style).

**Status: prompts only.** Nothing has been generated, and no paid or API call was made. C0 (control) isn't in this spec (copy.md leaves it to brief item 7).

## Rules applied to all 9 ads

- **No price is real yet.** Every figure stays a visible placeholder (`$[PRICE]`, `$[CEILING]`, `$[MONTHLY]`, `$[UNIT PRICE]`, `[STAGE]`, `[TENURE]`, `[RATE]`, `[LTV]`, `[DATE]`, `[N]`, `[MONTH]`, `[CEA LINE]`). The user swaps them before generating. Per the brief, nothing with a price goes to design for real until the client fills brief items 1–4 and 6. The swap table is at the top of the prompts file.
- **Product images:** `clients/gomedia-homes/inputs/product-images/` doesn't exist. This is a multi-project list with no project names, so every visual is a **generic AI sample** in Singapore new-launch style: no real project, no recognisable landmark, no logo or signage, and no identifiable faces. People appear from behind or in soft focus.
- **Image labels (copy.md):**
  - Interiors and lifestyle: `IMAGE SAMPLE ONLY – not the actual unit`
  - Skyline (C2-A only): `IMAGE SAMPLE ONLY – not the actual development`
  - C1-B card 1 has no photo, so it carries no image label (see Flags).
- **Fine print:**
  - Every ad with a price carries the standard price line.
  - Every C3 ad carries the full C3 disclaimer on the image. If space runs out, cut a tick, never the disclaimer.
  - Every ad has a `[CEA LINE]` slot. Delete it if the client says no CEA line is required.
- **Offer name:** "custom list" only. **CTAs:** GET MY CUSTOM LIST (Meta button "Sign up") or DOWNLOAD LIST (Meta button "Download"), as set per ad in copy.md. Never GET QUOTE.
- **Safe zones:**
  - **9:16 (1080x1920):** no text or key graphic in the top 14% (~270 px, profile bar) or the bottom 20% (~385 px, CTA and caption). The on-image CTA sits just above the bottom safe line.
  - **4:5 (1080x1350):** 56 px outer margin. Nothing important in the bottom 60 px.
- **Logo:** none is generated. If the user wants a GoAhead logo, it's placed in Canva in a reserved corner (noted per ad). Logos are never drawn by the model.
- **Workflow (house rule from the Arcady/Amber House prompts):**
  - The **full prompt (with text)** is for layout mock-ups and quick tests.
  - For anything that ships, use the **image-only prompt**, then set every string, chip, box and button in Canva/Figma in the exact hex and proof each character against copy.md. Image models garble small text, and fine print is always small.
- **Generator:** `gpt-image-2` (text-forward designed layouts, per `generating-image-ads` step 7). See the cost note at the end of the prompts file.

## How the 9 differ (no shared template)

| Ad | Reference layout | Palette | Light | Image subject | Type style | CTA shape |
|---|---|---|---|---|---|---|
| C1-A | ref-04 story: headline, chips, tab, tilted cards | **Blue variant:** sky gradient #EAF6FD to #BFE3F7, tab #1FA2E1, black chips | Day | Interiors on 4 tilted cards | Heavy condensed grotesk, all caps, black | White rounded pill with black text and a blue link-arrow icon |
| C1-B | ref-06 carousel (5 cards) | **GoAhead red** #D0021B solid (card 1). White cards with red accents (cards 2–5) | Day | Card 1 **no photo**. Cards 2–5: 2-photo interior collage per tier | Geometric sans (Montserrat/Poppins Black) | Red full-width bar on white cards, white bar on the red card |
| C1-C | ref-02 cream info card + round seal + ribbon | Cream card #FBF5E9, espresso type #2B2420, gold highlight #C9962B, red seal #D0021B | Soft morning | Interior collage with garden views | Warm soft serif headline (Fraunces/Recoleta) + humanist sans body | Red pill with a white circled arrow, inside the card |
| C2-A | ref-05 dual anchor | **Blue variant, night:** navy #0A1A3F to #132C6B, accent #2FA8FF, solid box #1F8FE0 | Night | Generic tropical waterfront skyline | White heavy sans caps, ceiling in electric blue | White capsule with navy text |
| C2-B | ref-01 giant number | Warm golden-hour photo, espresso #3B1F14 type, giant number in deep red #B3001B | Golden hour | Interior with city view, full bleed | High-contrast Didone serif numerals (~260 px) + wide light serif headline | Red text link with arrow on a cream band |
| C2-C | ref-03 price box + checklist | Charcoal panel #1E1F22, coral-red accent #FF4B3E, white type | Dusk | Interior (top 40–42%) + small bedroom inset = 2-photo collage | Heavy grotesk (Archivo Black / Inter Black) | Full-width solid coral-red rectangle |
| C3-A | ref-03, light version | White + blush #FDEDEE, GoAhead red #D0021B | Bright day | Kitchen interior (left 45% 4:5, top 35% 9:16) + small dining-nook inset = 2-photo collage | Rounded friendly sans (Nunito Black / Quicksand Bold) | Red pill with white text |
| C3-B | ref-01 giant number, centred | White frosted card, red #D0021B number, ink navy #1B2A4A text + CTA | Bright day | **Family lifestyle**: parents + child from behind, sunny living room | Chunky soft serif number (Cooper/Recoleta Black) + clean sans headline | Ink-navy pill |
| C3-C | ref-04 story, red version | **Deep red gradient** #B0001A to #E2353F, white type, white tab with red figure | Evening | 3 fanned interior cards (living / bedroom / kitchen) | Ultra-condensed sans (Bebas/Anton style), white | White pill with red text |

Within each angle:
- **C1:** light-blue tilted cards / solid red text-led carousel / cream brochure card with seal.
- **C2:** night skyline / golden-hour serif giant number / charcoal panel with a coral box.
- **C3:** blush split panel / family photo with a centred number / red gradient fan of cards.

---

## Concept C1-A · `GA_CL_C1_ANG-1mincustomlist_FMT-story_{9x16,4x5}_V01`
- **Copy ID used:** C1-A (copy.md, "Speed promise · ref-04 story layout")
- **Angle:** Your custom list of homes in 1 minute (promise first, ladder as small support)
- **Format:** static · **Aspect ratios:** 9:16 + 4:5
- **Visual direction:** ref-04 Dubai story structure in the **blue variant**: airy sky-blue gradient, all-caps condensed headline top-left, 2 black pill chips, a solid blue tab holding the 4-line ladder (small type), tilted rounded-corner photo cards with a soft drop shadow, each with a small white tier tag.
- **Hierarchy:** 1 headline, 2 tilted cards, 3 chips, 4 ladder tab (smaller than the headline, never the biggest element), 5 CTA, 6 fine print.
- **Image subject:** daylight interiors, one per card:
  - 1-bedder: compact living with a bed nook
  - 2-bedder: living room with balcony
  - 3-bedder: family dining
  - 4-bedder: large living with a double-height window
- **Product images used:** none (AI sample).
- **Text on image (9:16):**
  - Headline: "YOUR CUSTOM LIST OF HOMES IN 1 MINUTE"
  - Subhead: "Singapore new launch condos that fit your budget and bedrooms"
  - Chips: "Free custom list" · "Developer price lists"
  - Ladder (4 lines): "1-bedder from $[PRICE]" / "2-bedder from $[PRICE]" / "3-bedder from $[PRICE]" / "4-bedder from $[PRICE]"
  - Card tags: "1-bedder" · "2-bedder" · "3-bedder" · "4-bedder"
  - Process line: "3 questions, about 1 minute. Your list is sent on WhatsApp."
  - CTA: "GET MY CUSTOM LIST"
  - Fine print: price line + "IMAGE SAMPLE ONLY – not the actual unit" + "[CEA LINE]"
- **9:16:** headline starts below 270 px. Chips at ~24%, tab at ~31–43%, 4 cards at ~46–70%, process line ~71%, fine print ~74–76%, CTA ~77–79%. Bottom 385 px is gradient only.
- **4:5:**
  - 3 cards (2-, 3-, 4-bedder). The ladder keeps all 4 lines. No process line.
  - Subhead: "Singapore new launches that fit your budget".
  - Optional Canva logo zone: top-right 120x120.
- **Generator + estimated cost:** gpt-image-2, 2 images (see the cost note)

## Concept C1-B · `GA_CL_C1_ANG-1mincustomlist_FMT-carousel_{9x16,4x5}_V01`
- **Copy ID used:** C1-B (copy.md, "Identity call-out · ref-06 carousel")
- **Angle:** C1, HDB-upgrader call-out
- **Format:** carousel, 5 cards: a **feed set of 4:5** and a **story set of 9:16** (10 images)
- **Visual direction:**
  - **Card 1:** no photo. Full-bleed GoAhead red, white geometric sans headline, 2 white outline chips, and a white rounded strip at the bottom with the ladder.
  - **Cards 2–5:** white card with a 2-photo interior collage (one tall photo + one square, 12 px white gutter). From the top: thin red promise line, tier headline (largest, black), "from" price (red, about 45% of the headline size), red CTA bar. Same grid on all 4, so the swipe reads as one set.
- **Hierarchy (cards 2–5, fixed by copy.md):** promise line, then tier headline (largest), then price (secondary, smaller), then CTA.
- **Image subject per tier:**
  - 1-bedder: compact living + bed nook
  - 2-bedder: living + study/second bedroom
  - 3-bedder: family dining + kids' bedroom
  - 4-bedder: spacious living + master suite
- **Product images used:** none (AI sample).
- **Text on image:**
  - **Card 1, 9:16:** "FOR HDB UPGRADERS: YOUR CUSTOM LIST OF HOMES IN 1 MINUTE" / "Only the new launches that fit your budget and bedrooms" / chips "Free custom list" · "Sent on WhatsApp" / ladder (4 lines) / "DOWNLOAD LIST" / price line + "[CEA LINE]".
  - **Card 1, 4:5:** headline "HDB UPGRADERS: CUSTOM LIST OF HOMES IN 1 MINUTE", and the ladder trimmed to 2 lines (1- and 2-bedder).
  - **Cards 2–5:** "CUSTOM LIST OF HOMES IN 1 MINUTE" / "[N]-BEDDER NEW LAUNCHES" / "from $[PRICE]" / "DOWNLOAD LIST" / price line + "IMAGE SAMPLE ONLY – not the actual unit" + "[CEA LINE]".
- **9:16:** the promise line sits just below 270 px. The collage fills ~22–55%, tier headline ~58%, price ~64%, fine print ~72%, CTA bar ~76–79%.
- **4:5:** promise line at the top margin, collage ~10–55%, headline/price/CTA in the lower half.
- **If the price cap drops the 4-bedder:** skip card 5 and the ladder's 4th line.
- **Generator + estimated cost:** gpt-image-2, 10 images

## Concept C1-C · `GA_CL_C1_ANG-1mincustomlist_FMT-infocard_{9x16,4x5}_V01`
- **Copy ID used:** C1-C (copy.md, "Pain · ref-02 cream info card + round seal")
- **Angle:** C1, pain hook ("too many launches")
- **Format:** static · **Aspect ratios:** 9:16 + 4:5
- **Visual direction:**
  - ref-02 brochure card, warmer and softer than C1-A/B: a gold ribbon tag across the top-left.
  - A cream rounded card with the soft serif headline, with "1 minute" highlighted in gold.
  - Inside the card: 3 small line-icon bullets, the ladder with each bedroom count in bold red, and a red pill CTA.
  - A red round seal overlapping the card's top-right corner.
  - Behind it all: a morning interior collage with lush garden views through the windows.
- **Hierarchy:** 1 headline, 2 seal, 3 ribbon, 4 ladder, 5 bullets, 6 CTA.
- **Image subject:** soft-morning interiors looking onto tropical greenery: living room + balcony (4:5 full-bleed right side). In 9:16, a collage above and below the card (living room top, bedroom with garden view bottom).
- **Product images used:** none (AI sample).
- **Text on image:**
  - Ribbon: "TOO MANY LAUNCHES TO CHECK"
  - Headline: "Get your custom list of homes in 1 minute"
  - Subhead (9:16): "Only the new launches that fit your budget, not every launch on the market". Subhead (4:5): "Only the new launches in your budget".
  - Bullets (9:16): "3 questions: bedrooms, budget, agent or not" / "Sent to you on WhatsApp" / "Developer price lists and floor plans". The 4:5 drops the 3rd bullet.
  - Ladder: 4 lines
  - Seal: "FREE CUSTOM LIST"
  - CTA: "GET MY CUSTOM LIST"
  - Fine print: price line + unit label + "[CEA LINE]"
- **9:16:** card centred, full width minus 64 px margins, ~22–76%. Ribbon just under 270 px. Seal on the card's top-right corner. Photos above and below the card. Bottom 385 px is photo only.
- **4:5:** card on the left ~55% width, photo full-bleed behind and visible on the right, as in ref-02.
- **Generator + estimated cost:** gpt-image-2, 2 images

## Concept C2-A · `GA_CL_C2_ANG-budgetrange_FMT-dualanchor_{9x16,4x5}_V01`
- **Copy ID used:** C2-A (copy.md, "Price ceiling + floor · ref-05 dual anchor")
- **Angle:** Know the real range first (price is the hero)
- **Format:** static · **Aspect ratios:** 9:16 + 4:5
- **Visual direction:**
  - ref-05 in the **blue night variant**: a deep navy sky and a generic tropical-city waterfront skyline at night. Lit residential towers, palms along a promenade, reflections on water, no recognisable landmark.
  - White heavy caps headline with the ceiling line in electric blue, one plain subline, and a solid blue box holding the floor.
  - No chips.
- **Hierarchy:** 1 ceiling ("UNDER $[CEILING]"), 2 box "FROM $[PRICE]", 3 rest of the headline, 4 subline, 5 CTA.
- **Image subject:** generic skyline at night.
- **Product images used:** none (AI sample).
- **Text on image:**
  - Headline: "NEW LAUNCH 3-BEDDERS UNDER $[CEILING]", with "UNDER $[CEILING]" in #2FA8FF
  - Subline: "Singapore new launch condos, from developer price lists"
  - Box: "FROM $[PRICE]"
  - CTA: "DOWNLOAD LIST"
  - Fine print: price line + "IMAGE SAMPLE ONLY – not the actual development" + "[CEA LINE]"
- **9:16:** headline in 3 lines at ~26–42%, subline ~45%, box centred-left ~52–62%, skyline across ~45–80%, fine print + CTA ~72–79%.
- **4:5:** headline 2 lines top-left, box bottom-left, skyline on the right.
- **Generator + estimated cost:** gpt-image-2, 2 images

## Concept C2-B · `GA_CL_C2_ANG-budgetrange_FMT-giantnum_{9x16,4x5}_V01`
- **Copy ID used:** C2-B (copy.md, "Giant entry number · ref-01 giant number")
- **Angle:** C2, entry-price fact
- **Format:** static · **Aspect ratios:** 9:16 + 4:5
- **Visual direction:**
  - ref-01 warmth: a full-bleed golden-hour living room with floor-to-ceiling windows onto a soft, hazy, generic city.
  - Headline in a wide light serif, espresso, top-left.
  - One giant Didone number in deep red, bottom-left, with a soft cream gradient behind the lower third so it reads.
  - The CTA is a red text link with an arrow, not a button.
- **Hierarchy:** 1 giant number, 2 headline, 3 unit-type line, 4 support line (9:16), 5 CTA.
- **Image subject:** interior with city view (no building exterior).
- **Product images used:** none (AI sample).
- **Text on image:**
  - Headline: "New launch condos in Singapore start from"
  - Giant number: "$[PRICE]"
  - Unit-type line: "[N]-bedder entry price, [MONTH] 2026"
  - Support line (9:16 only): "Custom list goes up to $[CEILING] for 4-bedders"
  - CTA: "DOWNLOAD LIST"
  - Fine print: price line + unit label + "[CEA LINE]"
- **9:16:** headline top-left just below 270 px. Giant number ~55–65%, unit line ~67%, support line + CTA side by side ~70–74%, fine print ~76–79%.
- **4:5:** no support line. Headline top-left, giant number bottom-left, CTA bottom-right.
- **Generator + estimated cost:** gpt-image-2, 2 images

## Concept C2-C · `GA_CL_C2_ANG-budgetrange_FMT-pricebox_{9x16,4x5}_V01`
- **Copy ID used:** C2-C (copy.md, "Range + tick checklist · ref-03 price box + checklist")
- **Angle:** C2, pre-showflat check
- **Format:** static · **Aspect ratios:** 9:16 + 4:5
- **Visual direction:**
  - ref-03 structure: a dusk living room with city lights at the top.
  - A hard edge into a charcoal panel holding a white grotesk headline.
  - A coral-red outlined price box (two lines, with the figures in coral-red), then 3 ticks in coral-red circles.
  - A solid coral-red CTA rectangle.
- **Hierarchy:** 1 price box, 2 headline, 3 ticks, 4 CTA.
- **Image subject:** dusk living room plus a small inset of a dusk bedroom (6 px charcoal border) overlapping the photo's bottom-right corner. Together they make a 2-photo collage, so this ad is on the house collage rule.
- **Product images used:** none (AI sample).
- **Text on image:**
  - Headline: "Know the real price range before you visit a showflat"
  - Box: "2-BEDDERS FROM $[PRICE]" / "UNDER $[CEILING]"
  - Ticks: "Developer price lists, no guesswork" / "Matched to your budget and bedroom count" / "Floor plans included"
  - CTA: "DOWNLOAD LIST"
  - Fine print: price line + unit label + "[CEA LINE]"
- **9:16:** photo 0–40% (its top 14% is image only), panel 40–100%. Headline ~43–50%, box ~52–60%, ticks ~62–70%, fine print ~72–74%, CTA ~75–79%.
- **4:5:** photo top 42%, same 3 ticks, headline in 2 lines.
- **Generator + estimated cost:** gpt-image-2, 2 images

## Concept C3-A · `GA_CL_C3_ANG-monthly_FMT-pricebox_{9x16,4x5}_V01`
- **Copy ID used:** C3-A (copy.md, "Explainer · ref-03 price box + checklist")
- **Angle:** Pay as it's built (one monthly figure)
- **Format:** static · **Aspect ratios:** 9:16 + 4:5
- **Visual direction:**
  - ref-03 inverted to a **light** look: white and blush panel, GoAhead red rounded sans headline.
  - A red outlined box with the monthly figure, red rounded ticks, and the full disclaimer in a small grey block under the box.
  - Bright daylight kitchen/dining photo.
  - Deliberately the opposite of C2-C (light vs charcoal, side photo vs top photo in 4:5).
- **Hierarchy:** 1 monthly box, 2 "PAY AS IT'S BUILT", 3 subhead, 4 ticks, 5 disclaimer (legible, min. ~18 px at 1080 wide), 6 CTA.
- **Image subject:** bright kitchen, plus a small inset of a dining nook by a balcony (6 px white border) overlapping the photo. Together they make a 2-photo collage, so this ad is on the house collage rule.
- **Product images used:** none (AI sample).
- **Text on image:**
  - Headline: "PAY AS IT'S BUILT"
  - Subhead: "Singapore new launch condos with progressive payment"
  - Box: "FROM $[MONTHLY]/MONTH*"
  - Ticks (9:16, 4): "You pay in stages as construction progresses" / "Developer price lists, no guesswork" / "Floor plans included" / "Expert advice you can trust". The 4:5 drops the 4th.
  - CTA: "DOWNLOAD LIST"
  - Fine print: full C3 disclaimer + unit label + "[CEA LINE]"
- **9:16:** photo 0–35%. Panel: headline ~37%, subhead ~42%, box ~46–53%, ticks ~55–65%, disclaimer ~66–73%, CTA ~75–79%.
- **4:5:** photo left 45%, panel right 55%. Headline ~66 px, box ~50 px, 3 ticks at ~24 px, disclaimer **at least 18 px**. If it doesn't fit, drop the 3rd tick, never the disclaimer.
- **Generator + estimated cost:** gpt-image-2, 2 images

## Concept C3-B · `GA_CL_C3_ANG-monthly_FMT-giantnum_{9x16,4x5}_V01`
- **Copy ID used:** C3-B (copy.md, "Surprise number · ref-01 giant number")
- **Angle:** C3, surprise number
- **Format:** static · **Aspect ratios:** 9:16 + 4:5
- **Visual direction:**
  - Full-bleed **family lifestyle**: a sunlit, bright living room, with two parents and a young child seen from behind on a sofa, looking out of big windows at greenery.
  - Headline centred on top.
  - A centred frosted-white rounded card holding a giant red soft-serif monthly figure and the stage line.
  - The disclaimer on a white strip at the bottom of the content area, and an ink-navy pill CTA.
- **Hierarchy:** 1 giant monthly figure, 2 headline, 3 stage line, 4 disclaimer, 5 CTA.
- **Image subject:** family lifestyle (no identifiable faces).
- **Product images used:** none (AI sample).
- **Text on image:**
  - Headline (9:16): "What a new launch condo can cost per month during construction". Headline (4:5): "A new launch condo per month, during construction".
  - Giant figure: "$[MONTHLY]/month*"
  - Stage line: "at the [STAGE] progressive payment stage"
  - CTA: "GET MY CUSTOM LIST"
  - Fine print: full C3 disclaimer + unit label + "[CEA LINE]"
- **9:16:** headline 3 lines ~15–26%, number card ~38–55%, disclaimer strip ~64–73%, CTA ~75–79%.
- **4:5:** number ~125 px (about 25% smaller than 9:16) so the full disclaimer fits at **at least 18 px**.
- **Generator + estimated cost:** gpt-image-2, 2 images

## Concept C3-C · `GA_CL_C3_ANG-monthly_FMT-story_{9x16,4x5}_V01`
- **Copy ID used:** C3-C (copy.md, "Budget-first · ref-04 story layout with a monthly tab")
- **Angle:** C3, budget-first
- **Format:** static · **Aspect ratios:** 9:16 + 4:5
- **Visual direction:**
  - ref-04 in the **red version**, inverted from C1-A: a deep red gradient with white ultra-condensed caps, 2 white pill chips with red dots, and a white tab with the red monthly figure.
  - 3 evening-lit interior cards fanned like a hand of playing cards (strong rotation, overlapping). This differs from C1-A's flat row of slight tilts.
- **Hierarchy:** 1 headline, 2 monthly tab, 3 fanned cards, 4 chips, 5 disclaimer, 6 CTA.
- **Image subject:** evening interiors (living / bedroom / kitchen), no text on the cards.
- **Product images used:** none (AI sample).
- **Text on image:**
  - Headline: "START WITH WHAT YOU CAN PAY EACH MONTH"
  - Subhead (9:16): "Get the custom list of new launches that fits your monthly budget". Subhead (4:5): "Get the custom list that fits your monthly budget".
  - Chips: "Free custom list" · "Progressive payment"
  - Tab: "From $[MONTHLY]/month*"
  - CTA: "GET MY CUSTOM LIST"
  - Fine print: full C3 disclaimer + unit label + "[CEA LINE]"
- **9:16:** headline ~15–27%, subhead ~29%, chips ~33%, tab ~37–44%, cards ~46–64%, disclaimer ~65–73%, CTA ~75–79%.
- **4:5:** 2 fanned cards (living + bedroom). Headline ~88 px, tab ~54 px, disclaimer in full at **at least 18 px**.
- **Generator + estimated cost:** gpt-image-2, 2 images

---

## Flags for the user / performance
1. **Placeholders are on the image.** The prompts can't produce a shippable ad until the client fills prices, the monthly basis, [DATE], [N]/[MONTH] and the CEA decision (brief items 1–4, 6). Mock-ups with placeholders are fine for layout review only.
2. **C1-B card 1 has no image label (performance ruling, 2026-11-07).** This applies only while card 1 stays a plain colour-and-text card with no photo, render or photoreal texture. If any image is added, the "IMAGE SAMPLE ONLY – not the actual unit" label comes back. The price fine print and `[CEA LINE]` stay on card 1.
3. **Price cap (brief item 6):** if it applies, drop the 4-bedder ladder line everywhere, drop C1-B card 5, and drop the C2-B support line, or swap it to the highest allowed tier. Designs leave room for a 3-line ladder.
4. **Blue variant used twice (C1-A day, C2-A night).** Brief and skill allow it as the Dubai format nod. The other 7 are red-led or neutral with a red/coral accent. If the user wants red-only, C1-A swaps the tab to #D0021B and the gradient to #FFF1F1 to #FFD9DC.
5. **Small type:**
   - Every fine-print line, including the C3 disclaimer, is now **at least 18 px** at 1080 wide in all 4:5 prompts (perf issue 2).
   - The lines are long, so set them in Canva from the image-only prompts. Never publish generated fine print.
6. **Deliberate deviation from the house photo rule, for the user to approve.** The rule is "real interior photo collage feel, never a single hero shot alone".
   - **C2-A** (night skyline), **C2-B** (golden-hour interior) and **C3-B** (family living room) each use one full-bleed photo.
   - That's on purpose: they copy the overseas reference layouts under test (ref-05 dual anchor, ref-01 giant number), and those only work with one photo.
   - Ticking the approval box approves this deviation.
   - Fallback if the user wants them on-rule: add a small 2-photo inset collage, as on C2-C and C3-A.
   - **C2-C and C3-A are on-rule by default** (small 2-photo inset collage).

---
## Approval

- [ ] Approved to generate on [date]
- Notes: Ticking this box also approves the single-photo deviation in Flag 6 (C2-A, C2-B, C3-B). Hard gate. No image generation (paid or free API) until the user ticks this box in chat **and** confirms the cost estimate in `custom-list-prompts.md` for the specific batch. Prices must be swapped in first.
