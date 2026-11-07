# Amber House: Image Prompts v4 (GoAhead, 7 ads, 7 different layouts)

Revision 4, written 2026-11-04 by static-designer. The user picked the new set in chat: "option 1, 5, 2, & 3, now added to the docx for me the prompt for them". **These are prompts only.** Nothing has been generated and no paid call has been made. The filename stays `-v2` because the lead asked for this file to be overwritten.

- **The set is now 7 ads:**
  - C1 Direct and C2 Family are unchanged from v3.
  - C3 MRT is revised to copy Revision 4.
  - C4 to C7 are the user's picks from the copywriter's option list: C4 = O1 real-unit listing card, C5 = O5 HDB upgrader, C6 = O2 real floor-plan hero, C7 = O3 checklist.
  - The old Katong-heritage collage and rooftop magazine-cover ads are dropped.
- **Copy source:** `copy-amber-house.md`, **Revision 4**.
  - C1 to C3 use Headline A and the subhead from the summary table, word for word.
  - C4 to C7 use Headline A, the subhead and the layout column from "C4/C5 idea options (Revision 4)", word for word.
  - Headline B appears as a swap line under each ad.
- **Facts source:** `research-amber-house.md`, CONFIRMED rows only. Claims marked (R2) in the copy have not been reviewed by performance yet.
- **Hard rules on every ad:**
  - No price, "$", "S$" or psf anywhere, including the fine print. C4 has no price field.
  - No "% sold".
  - Only C1 shows "Amber House".
  - No district codes and no street address.
- **The only brand constants (everything else changes per ad):**
  1. A red `SINGAPORE HOMEBUYER` eyebrow. On light backgrounds it is red text. On dark or photo backgrounds (C1, C5, C6) it is a small solid red tag with white letters, so it stays readable.
  2. The CTA `GET PRICE LIST & E-BROCHURE`. Its shape and colour change per layout.
  3. The photo labels:
     - Building renders and interiors: `IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY`.
     - Lifestyle photos: `IMAGE SAMPLE ONLY`.
- **Copy-required lines that are not brand constants:**
  - `Walk/drive times per developer.` on every ad.
  - `Illustrative map, not to scale.` on C3.
  - `School admission subject to MOE regulations and balloting.` on C2 and C7, because schools appear on both.
  - `ILLUSTRATIVE LAYOUT ONLY` on C6, but only if the official plan isn't available.
  - Keep a small clear strip above each CTA for the CEA particulars once the client confirms them (perf S3).
- **Workflow (perf S2, mandatory):**
  - Generate with the **image-only prompt**. It leaves the text zones empty.
  - Set every string in Canva or Figma and proof each character against `copy-amber-house.md`.
  - Draw flat colour panels, cards, chips and buttons as Canva shapes in the exact hex. Treat any generated colour as a placeholder.
  - C6: composite the official floor plan into the reserved plan zone in Canva. Never let the image model draw a plan for publishing.
  - The "full prompt (with text)" is for a quick layout mock-up only. Never publish its rendered text.
- **9:16 (perf S1):** each ad has a one-line adaptation note. For every 9:16 version (1080x1920), keep all text clear of the top 14% (about 270 px) and the bottom 20% (about 385 px).

---

## Design at a glance

| Ad | Angle / hook | Headline A (on image) | Layout | Colours | Type treatment | Photo / visual style | CTA shape | Label |
|---|---|---|---|---|---|---|---|---|
| **C1** | Direct (named). Factual | Amber House: Rare Freehold Condo, Just 105 Homes | **Split-screen.** Render on the left 55%, solid panel of big fact numerals on the right 45% | Deep bronze-amber panel (#7A4A22), cream/white type | Elegant serif. Huge stacked numerals "105 / 4 MIN / FREEHOLD" | **Official developer facade render** (columns at the base). Fallback: a premium interior with full-height windows. No AI tower | Cream rectangular button inside the panel | IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY |
| **C2** | Family. Emotional question | Looking for a home for your family? | **Big-type colour block.** Question fills the top 55%, wide family photo strip below, round badge on the seam | Soft coral (#F4A28C) block, cream (#FFF4E8) base, deep navy type, red badge | Very large rounded bold sans over 3 lines. Friendliest ad in the set | Warm, candid stock photo: parent and kids **from behind** on a leafy path in morning light | Red pill | IMAGE SAMPLE ONLY |
| **C3** | MRT. Hard fact (user's line) | Rare Freehold Condo, 4-Min Walk to MRT | **Giant-number headline over an illustrated route map.** "4-MIN" is the biggest element in the ad. Map pins match the subhead's amenities | Pure white (#FFFFFF), charcoal routes, one highlighter-yellow accent (#FFE14D) | Ultra-heavy condensed sans. "4-MIN" at about 260 px | **Flat vector illustration.** No photo. Generic streets, no rail line colours | Charcoal rectangular button with an arrow | Illustrative map, not to scale. |
| **C4** | Real-unit listing card. Concrete spec | 4-Bedroom Premium, 1,744 sqft, Rare Freehold | **Property-portal-style listing card.** Photo on top, title, then 5 icon spec rows. No portal branding, no price field | Light grey app canvas (#EEF1F4), white card, slate type (#2B3440), deep-green tag (#1E7F4F) | Clean UI sans, like an app screen. Small grey row labels with bold values | Official 4BR interior render preferred. Fallback: a spacious interior with full-height windows. Gallery dots on the photo | Full-width red rounded-rectangle button at the card base | IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY |
| **C5** | HDB upgrader. Self-ID question | Upgrading From HDB? Start With Rare Freehold. | **Full-bleed close-up photo with a torn-paper sticker** slapped across it, carrying the headline | Warm golden photo, white paper, black type, red "NEXT STOP" strip, sunflower-yellow CTA (#FFC629) | Heavy black grotesque sans on the sticker, slightly tilted. Raw and handmade | Candid stock: a hand holding new house keys in golden light, creamy bokeh. No faces | Sunflower-yellow rectangle with black text | IMAGE SAMPLE ONLY |
| **C6** | Real floor plan. "See inside" proof | See the Real 2-Bedroom Layout, 635 sqft | **Full-width floor plan as the hero** on a blueprint frame, small render inset in one corner, 3 spec chips | Blueprint navy (#14325C) with a faint grid, white plan sheet, pale blue chips (#BFD7EA) | Geometric sans in white, technical and precise | **The official floor plan, composited in Canva** (reserved zone). Small interior inset. Without the official plan: ILLUSTRATIVE LAYOUT ONLY | Solid white rectangle with navy text | IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY (inset) + ILLUSTRATIVE LAYOUT ONLY (only if not official) |
| **C7** | Checklist. Self-scoring | Freehold? MRT? Schools? Tick, Tick, Tick. | **Top-down flat-lay of a clipboard checklist** with 6 big red marker ticks and a thin photo strip taped at the bottom | Pale oak desk, cream paper (#FBF6E9), brand-red ticks (#D0021B), charcoal type | Heavy condensed sans headline, bold sans list items, hand-drawn marker ticks | Photoreal desk flat-lay. Taped strip: an official render, or an interior slice as the fallback | Red rectangle with a white tick icon | IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY (strip) |

How the seven differ:
- **Layout:** split-screen, big-type block, giant-number map, app listing card, photo with a sticker, blueprint plan, desk flat-lay.
- **Colour:** bronze, coral, white with yellow, light grey with green, warm gold with yellow, navy blueprint, oak and cream with red.
- **Type:** serif numerals, rounded sans, ultra-heavy condensed numeral, UI sans, tilted grotesque, technical geometric sans, condensed sans with marker ticks.
- **Visual source:** official render, candid stock, vector illustration, interior render in a UI frame, close-up stock, official plan, photoreal flat-lay.
- **CTA:** cream button, red pill, charcoal arrow button, red card button, yellow block, white block, red tick button.

---

## C1. Direct (named): split-screen with a big-number panel

- **Headline (A):** Amber House: Rare Freehold Condo, Just 105 Homes
- **Subhead:** By Far East Organization. 4-min walk to MRT, near Katong V & Parkway Parade.
- **Numerals (from the copywriter's layout):** 105 HOMES · 4 MIN TO MRT · FREEHOLD
- **CTA:** GET PRICE LIST & E-BROCHURE (cream rectangular button)
- **Label:** IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY. **Fine print:** Walk/drive times per developer.
- **Visual:**
  - **Preferred:** the official developer facade render, if GoAhead has the rights (perf S7). Crop it tall to show the columns at the base.
  - **Fallback:** a premium interior with full-height windows. Per perf C1-1, never put an AI tower next to the real name.
  - Only this ad shows "Amber House", and only as typeset text in the panel. The name never appears on the building.

**Full prompt (with text)**

```text
Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo, in a split-screen layout with a hard vertical edge. LEFT 55% of the frame, full height: a tall photoreal architectural image. If an official render is supplied, use it here; otherwise show a premium, light-filled condo living room with full-height windows, warm oak floor, a linen sofa and soft afternoon light from camera-left, 24mm interior lens, calm and uncluttered. Bottom-left corner of the left image: small italic white text on a subtle dark translucent strip reading "IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY". RIGHT 45% of the frame, full height: a solid flat deep bronze-amber panel (approx. #7A4A22) with 56 px inner margins. At the top of the panel: a small solid red tag (approx. #D0021B) with "SINGAPORE HOMEBUYER" in white bold all-caps sans-serif with wide letter-spacing, about 24 px. Below it, the headline in an elegant cream serif, about 52 px, left-aligned, up to 4 lines, reading "Amber House: Rare Freehold Condo, Just 105 Homes". Then three stacked fact blocks separated by thin cream hairlines, each a huge white serif numeral or word with a small all-caps sans caption beneath: "105" with caption "HOMES"; "4 MIN" with caption "TO MRT"; "FREEHOLD" with no caption. Below the numerals, the subhead in regular cream sans-serif, about 22 px, reading "By Far East Organization. 4-min walk to MRT, near Katong V & Parkway Parade." Near the bottom of the panel: tiny cream fine print, about 16 px, reading "Walk/drive times per developer." Bottom of the panel: a cream rectangular button with slightly rounded corners, full panel width, with "GET PRICE LIST & E-BROCHURE" in bold dark bronze all-caps sans-serif. Look: quiet, premium, understated luxury, like a boutique hotel brochure; every string crisp, legible at mobile size and rendered exactly once. Avoid: any AI-generated condo tower or building facade; any name, signage, lettering or logo on buildings, walls, artwork or objects; any price, dollar sign, psf or "% sold"; misspelled, warped, duplicated or extra text beyond the quoted strings; watermarks or developer logos; district codes or street addresses; MRT/LTA logos, line colours or signage; people; icon rows, QR codes, phone numbers. Genre: Singapore property paid-social static ad.
```

**Image-only prompt (add text in Canva)**

```text
Portrait 4:5 image, 1080x1350 px, with no text of any kind, in a split-screen composition with a hard, perfectly straight vertical edge at 55% of the width. LEFT 55%, full height: a photoreal, premium, light-filled condo living room with full-height windows, warm oak floor, a linen sofa and soft afternoon light from camera-left, 24mm interior lens, calm and uncluttered; keep the bottom-left corner calm and low in detail for a small label. RIGHT 45%, full height: a completely flat, empty, solid deep bronze-amber colour field (approx. #7A4A22) with no texture, gradient, objects or marks, reserved for a headline, three large numerals, a subhead, fine print and a button. Look: quiet, premium, understated luxury. Avoid: any text, letters, numbers, logos or watermarks anywhere; any building exterior or tower; signage; people; anything drawn on the colour field.
```

**B-swap:** use the headline "Only 105 Homes. Rare Freehold Condo. Amber House." and drop the "105 HOMES" numeral so it isn't repeated. Use **4 MIN TO MRT** and **FREEHOLD** at a larger size. Nothing else changes.

**9:16:** stack the layout instead of splitting it. The render goes in the top 45% and the bronze panel in the bottom 55%, set the numerals in a horizontal row of three, and keep the CTA above the bottom 20%.

---

## C2. Family (blind): big-type question on a coral/cream colour block

- **Headline (A):** Looking for a home for your family?
- **Subhead:** Rare freehold condo. 6-min walk to Tanjong Katong Primary, 4-min walk to MRT.
- **Badge (from the copywriter's layout):** large "6-MIN WALK", with a small second line "TO TANJONG KATONG PRIMARY"
- **CTA:** GET PRICE LIST & E-BROCHURE (red pill)
- **Label:** IMAGE SAMPLE ONLY (lifestyle stock, not the project)
- **Fine print:** Walk/drive times per developer. Recommended extra line (copy flag 5, needs sign-off): "School admission subject to MOE regulations and balloting."
- **Visual:**
  - A warm, candid photo of a parent and two kids **seen from behind**, walking hand in hand along a shaded, leafy footpath. One child has a school backpack.
  - No faces, no school building, gate, uniform crest or logo, and no names or signage of any kind.

**Full prompt (with text)**

```text
Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo, in a bold big-type layout. TOP 55% of the frame: a flat solid soft-coral colour block (approx. #F4A28C) with 64 px margins. Top-left of the block: a small eyebrow reading "SINGAPORE HOMEBUYER" in bold red (approx. #D0021B) all-caps sans-serif with wide letter-spacing, about 26 px. Below it, filling most of the block, the headline in a very large, friendly, rounded heavy sans-serif in deep navy (approx. #1F2A44), about 110 px, left-aligned over exactly 3 lines, reading "Looking for a home for your family?". BOTTOM 45% of the frame: a cream base (approx. #FFF4E8) holding a wide photo strip, full width with 40 px side margins and gently rounded corners: a warm, candid, natural-light photograph of a parent and two young children seen from behind, walking hand in hand along a shaded, leafy tropical footpath under rain trees in soft early-morning light, one child wearing a plain school backpack, 35mm lens, shallow depth of field, no faces visible. Bottom-left corner of the photo: small italic white text on a subtle dark translucent strip reading "IMAGE SAMPLE ONLY". Straddling the seam between the coral block and the photo, on the right side: a round solid red badge about 230 px across with a thin cream ring, with "6-MIN WALK" in bold white all-caps sans-serif and a small second line "TO TANJONG KATONG PRIMARY". Under the photo, on the cream base: the subhead in regular navy sans-serif, about 26 px, reading "Rare freehold condo. 6-min walk to Tanjong Katong Primary, 4-min walk to MRT." Below it, tiny grey fine print, about 16 px, reading "Walk/drive times per developer. School admission subject to MOE regulations and balloting." Bottom: a red pill-shaped button, centred, about 70% of the frame width, with "GET PRICE LIST & E-BROCHURE" in bold white all-caps sans-serif. Look: warm, friendly, parent-to-parent, the softest and most approachable ad in a set; every string crisp, legible at mobile size and rendered exactly once. Avoid: close-up or identifiable faces, people facing the camera; any school building, school gate, uniform crest, school logo or school name in the image; any project, condo, building, developer or mall name or signage; any condo tower; any price, dollar sign, psf or "% sold"; misspelled, warped, duplicated or extra text beyond the quoted strings; logos or watermarks; district codes or street addresses; MRT/LTA logos, line colours or signage; icon rows, QR codes, phone numbers. Genre: Singapore property paid-social static ad.
```

**Image-only prompt (add text in Canva)**

```text
Portrait 4:5 image, 1080x1350 px, with no text of any kind. TOP 55% of the frame: a completely flat, empty, solid soft-coral colour field (approx. #F4A28C) with no texture or objects, reserved for a very large headline. BOTTOM 45%: a cream base (approx. #FFF4E8) holding a wide photo strip, full width with 40 px side margins and gently rounded corners, occupying the upper two-thirds of that bottom area: a warm, candid, natural-light photograph of a parent and two young children seen from behind, walking hand in hand along a shaded, leafy tropical footpath under rain trees in soft early-morning light, one child wearing a plain school backpack, 35mm lens, shallow depth of field, no faces visible; keep the bottom-left corner of the photo and the right end of its top edge calm for a label and a round badge. The cream area below the photo stays empty for a subhead, fine print and a button. Look: warm, friendly, natural. Avoid: any text, letters, numbers, logos or watermarks; identifiable faces or people facing the camera; school buildings, gates, uniforms with crests; signage; buildings or towers; anything drawn on the coral or cream areas.
```

**B-swap:** use the headline "Primary school, a 6-min walk from home". The badge then repeats the headline, so change it to "4-MIN WALK" with the small line "TO MRT". The photo stays the same.

**9:16:** make the coral block taller so the 3-line question sits about 300 px below the top edge. The photo strip, badge and pill CTA go in the middle third, and the bottom 20% stays plain cream.

---

## C3. MRT (blind): giant "4-MIN" over an illustrated route map

- **Headline (A):** Rare Freehold Condo, 4-Min Walk to MRT
  - Set it on 3 lines: "RARE FREEHOLD CONDO," (small) / "4-MIN" (giant) / "WALK TO MRT" (medium).
  - "4-MIN" is the single dominant element. Per copy flag 12, this is what separates us from Home Haven Hub's "Rare Freehold Near MRT".
- **Subhead:** Near Katong V, i12 Katong, Parkway Parade, East Coast Park & Katong food.
- **Map labels (set in Canva). The pins match the subhead's five amenities exactly:**
  - Unnamed home pin: "Home".
  - Thick walking route: chip "4 MIN" to "Tanjong Katong MRT".
  - Thinner walking route: chip "7 MIN" to "Marine Parade MRT".
  - Shopping-bag pins: "Katong V · 6-min walk", "i12 Katong · 9-min walk", "Parkway Parade · 9-min walk".
  - Car pin near the coast: "East Coast Park · 4-min drive".
  - Noodle-bowl pin: "Katong food". There is no minute figure, because the source only says "a few minutes' walk or cycle".
- **CTA:** GET PRICE LIST & E-BROCHURE (charcoal rectangular button with an arrow)
- **Fine print:** Walk/drive times per developer. Illustrative map, not to scale.
- **Map rules:**
  - Generic and stylised: no real street grid and no street names.
  - No LTA or MRT logos and no station symbols.
  - No rail line colours. The routes are neutral charcoal, and the yellow accent is only a marker swash and chip fill, never a line.
  - The only place names are the copy strings above, set in Canva and never generated.

**Full prompt (with text)**

```text
Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo, in a bold giant-number infographic layout on a clean pure white background (#FFFFFF) with 64 px margins. TOP 38% of the frame: top-left, a small eyebrow reading "SINGAPORE HOMEBUYER" in bold red (approx. #D0021B) all-caps sans-serif with wide letter-spacing, about 26 px. Below it, the headline stacked on three lines, left-aligned: first line "RARE FREEHOLD CONDO," in bold black condensed all-caps sans-serif, about 44 px; second line "4-MIN" in an ultra-heavy black condensed sans-serif about 260 px tall, by far the largest element in the whole ad, with a loose hand-painted highlighter-yellow marker swash (approx. #FFE14D) sitting behind its lower half; third line "WALK TO MRT" in bold black condensed all-caps, about 64 px. MIDDLE 42% of the frame, full width: a flat vector, friendly, minimal illustrated neighbourhood map on white: very light grey (#ECECEC) generic street blocks with no names, a few rounded sage-green park shapes, simple tree dots, and a soft pale-blue sea band along the bottom-right edge. Near the centre, a red map pin with a small white house icon and a tiny label "Home". From it, a thick charcoal dotted walking route with small footstep marks curves to a plain charcoal circle labelled "Tanjong Katong MRT", with a small yellow chip on the route reading "4 MIN" in black condensed type. A second, thinner charcoal dotted route runs the other way to a smaller plain charcoal circle labelled "Marine Parade MRT", with a smaller yellow chip reading "7 MIN". Five small charcoal pins, each with a simple white line icon and a short charcoal label: a shopping bag "Katong V · 6-min walk"; a shopping bag "i12 Katong · 9-min walk"; a shopping bag "Parkway Parade · 9-min walk"; a small car, placed by the sea band, "East Coast Park · 4-min drive"; a steaming noodle bowl "Katong food". Bottom-right corner of the map: tiny grey italic text reading "Illustrative map, not to scale." BOTTOM 20% of the frame: the subhead in regular charcoal sans-serif, about 26 px, reading "Near Katong V, i12 Katong, Parkway Parade, East Coast Park & Katong food."; tiny grey fine print, about 16 px, reading "Walk/drive times per developer."; then a solid charcoal rectangular button with square corners, full width between margins, with "GET PRICE LIST & E-BROCHURE" in bold white all-caps sans-serif and a white arrow on the right. Look: punchy, direct, clever infographic, flat vector, no photography, lots of white space, the giant "4-MIN" hits first; every string crisp, legible at mobile size and rendered exactly once. Avoid: photographs; real street layouts, real street names or any place names beyond the quoted labels; MRT or LTA logos, official station symbols, colour-coded rail lines, or brown, red, green, purple, blue or orange route lines; any project, condo, building or developer name; building illustrations; any price, dollar sign, psf or "% sold"; district codes or street addresses; misspelled, warped, duplicated or extra text beyond the quoted strings; compass roses with lettering, scale bars, legends; logos or watermarks; QR codes, phone numbers. Genre: Singapore property paid-social static ad.
```

**Image-only prompt (add text in Canva)**

```text
Portrait 4:5 image, 1080x1350 px, flat vector illustration, with no text, letters or numbers of any kind, on a clean pure white background (#FFFFFF). TOP 38% of the frame: empty white, reserved for a giant headline number; the only mark allowed there is one loose hand-painted highlighter-yellow marker swash (approx. #FFE14D), about 560 px wide and 110 px tall, placed left-aligned roughly 60% of the way down that top area. BOTTOM 20%: empty white, reserved for a subhead and a button. MIDDLE 42%, full width: a friendly, minimal flat illustrated neighbourhood map: very light grey (#ECECEC) generic street blocks with no names, a few rounded sage-green park shapes, simple tree dots and a soft pale-blue sea band along the bottom-right edge. Near the centre, a red map pin with a small white house icon. From it, a thick charcoal dotted walking route with small footstep marks curves to a plain charcoal circle, with an empty small yellow rounded chip on the route. A second, thinner charcoal dotted route runs the other way to a smaller plain charcoal circle, with a smaller empty yellow chip. Five small plain charcoal map pins scattered around, one of them sitting beside the sea band. Leave clear empty white beside every pin, circle and chip for labels to be added later, and a calm empty corner at bottom-right. Look: punchy, clean infographic, flat vector, generous negative space. Avoid: any text, letters, numbers, icons inside pins or symbols; real street layouts; MRT or LTA logos or station symbols; colour-coded rail lines or coloured route lines; photographs; buildings; compass roses, scale bars or legends; anything else drawn in the top and bottom reserved areas.
```

Add the five pin icons (shopping bag x3, car, noodle bowl) in Canva as simple white line icons, so they stay consistent and sharp.

**B-swap:** use the headline "Rare Freehold Condo Between Two MRT Stations". Move the giant numeral out of the headline and set the headline in two even lines at about 96 px. On the map, put the home pin exactly between the two stations and give both routes the same thickness, with equal "4 MIN" and "7 MIN" chips. The two-station route becomes the hero. If the alt subhead ("Walk to Katong V, i12 Katong & Parkway Parade. East Coast Park 4-min drive.") is used, remove the "Katong food" pin so the pins still match the subhead.

**9:16:** keep the giant "4-MIN" headline block in the upper part, starting below the top 14%. Make the map taller so the five amenity pins spread out with more room, and keep the subhead and button above the bottom 20%.

---

## C4. Real-unit listing card (blind): property-portal-style card with spec rows

- **Headline (A), set as the listing title:** 4-Bedroom Premium, 1,744 sqft, Rare Freehold
- **Subhead, set as the listing's one-line description under the title:** 4-min walk to MRT. Walk to Katong V, i12 Katong & Parkway Parade.
- **Spec rows (icon, small grey label, bold value). These are the lead's five requested rows:**
  - Bed icon: BEDROOMS, "4"
  - Floor-area icon: SIZE, "1,744 sqft"
  - Key icon: TENURE, "Freehold"
  - Walking-person icon: MRT, "4-min walk"
  - Shopping-bag icon: NEARBY, "Katong V, i12 Katong, Parkway Parade"
- **Tag on the photo (from the copywriter's layout):** AVAILABLE TYPE. This is a stock claim, so print it only if the 4BR Premium is confirmed available within 48h of launch (perf S4). Drop it otherwise.
- **CTA:** GET PRICE LIST & E-BROCHURE (full-width red rounded-rectangle button at the base of the card, where a portal would put its "enquire" button)
- **Label:** IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY. **Fine print:** Walk/drive times per developer.
- **Portal styling rules:**
  - The card looks like a generic property-portal listing. No portal logo, name, wordmark or signature brand colour.
  - No price field of any kind: no "S$", no "Price on request", no psf, no mortgage calculator.
  - No agent photo, agent name, star rating, listing ID, "posted X days ago", or heart/share counts.
- **Visual:**
  - **Preferred:** the official 4BR Premium interior render, if GoAhead has the rights (perf S7).
  - **Fallback:** a generic spacious interior with full-height windows, labelled as an artist's impression. Because the title names a specific unit type, QA should confirm the fallback is acceptable (same risk family as perf C1-1).
  - The private lift stays off the image, because which units have one is unconfirmed (copy flag 6).

**Full prompt (with text)**

```text
Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo, styled like a generic property-portal listing card seen on a phone app, with no portal branding of any kind. Background: a soft light-grey app canvas (approx. #EEF1F4). Top-left, above the card, a small eyebrow reading "SINGAPORE HOMEBUYER" in bold red (approx. #D0021B) all-caps sans-serif with wide letter-spacing, about 24 px. Below it, a large white card with 28 px rounded corners and a soft drop shadow, 40 px side margins, filling the rest of the frame down to a 40 px bottom margin. TOP 44% of the card: a photoreal interior photo with rounded top corners: a spacious, light-filled premium condo living and dining room with full-height windows, a long dining table for six, warm oak floor, a large L-shaped sofa and soft afternoon light, 24mm interior lens, calm and uncluttered. Bottom centre of the photo: five small white gallery dots, the first one filled, like a swipeable listing gallery. Top-left of the photo: a small rounded deep-green tag (approx. #1E7F4F) reading "AVAILABLE TYPE" in white bold all-caps sans-serif, about 18 px. Bottom-left of the photo: small italic white text on a subtle dark translucent strip reading "IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY". BELOW THE PHOTO, inside the card with 36 px padding: the listing title in bold slate sans-serif (approx. #2B3440), about 46 px, left-aligned on 2 lines, reading "4-Bedroom Premium, 1,744 sqft, Rare Freehold". Under it, a one-line description in regular grey sans-serif, about 23 px, reading "4-min walk to MRT. Walk to Katong V, i12 Katong & Parkway Parade." Then a thin light-grey divider. Then five spec rows, each with a simple slate line icon on the left, a small grey all-caps label and a bold slate value on the right side of the row, rows separated by hairlines: a bed icon, "BEDROOMS", "4"; a floor-area icon, "SIZE", "1,744 sqft"; a key icon, "TENURE", "Freehold"; a walking-person icon, "MRT", "4-min walk"; a shopping-bag icon, "NEARBY", "Katong V, i12 Katong, Parkway Parade". Below the rows, tiny grey fine print, about 15 px, reading "Walk/drive times per developer." At the bottom of the card: a full-width solid red (approx. #D0021B) rounded-rectangle button with "GET PRICE LIST & E-BROCHURE" in bold white all-caps sans-serif. Look: clean, trustworthy, real-listing app screen, crisp UI typography, factual; every string crisp, legible at mobile size and rendered exactly once. Avoid: any price field, price tag, dollar sign, "S$", psf, "price on request" or mortgage calculator; any portal logo, wordmark, app name or recognisable portal brand colours; agent photos, agent names, star ratings, listing IDs, dates, view counts, heart or share counts; phone status bars or app navigation bars; any project, condo, building or developer name; any building exterior or tower; private lift imagery; "% sold"; district codes or street addresses; misspelled, warped, duplicated or extra text beyond the quoted strings; watermarks; QR codes, phone numbers; people. Genre: Singapore property paid-social static ad.
```

**Image-only prompt (add text in Canva)**

```text
Portrait 4:5 image, 1080x1350 px, with no text of any kind: a photoreal interior photograph only, to be placed into the photo slot of a listing card built in Canva. A spacious, light-filled premium condo living and dining room with full-height windows along one side, a long dining table for six, warm oak floor, a large L-shaped sofa, a few restrained decor pieces and soft afternoon light from camera-left, 24mm interior lens, eye-level, calm and uncluttered. Compose it so the key view sits in the middle band, because the image will be cropped to a wide landscape slot of about 1000x590 px; keep the top-left corner and bottom-left corner calm and low in detail for a small tag and a label. Look: bright, airy, premium, realistic. Avoid: any text, letters, numbers, logos, signage, artwork with lettering or watermarks; building exteriors or towers; lift doors or lift lobbies; people; clutter.
```

Build the grey canvas, the white card, the divider, the five icon rows, the green tag and the red button as Canva shapes. Only the photo is generated (or replaced by the official render).

**B-swap:** use the headline "2-Bedroom, 635 sqft, Rare Freehold Condo". Change the rows to BEDROOMS "2" and SIZE "635 sqft". Swap the photo to a compact, bright 2-bedroom living room with a 4-seat dining table. Everything else stays the same. Don't run this while C6 is on its 2BR Headline A, or the two unit-led ads will show the same unit (see Flag 9).

**9:16:** make the card taller. Give the photo the top 40% of the card with the gallery dots, keep the five rows at full size, and start the eyebrow below the top 14%. The button must sit above the bottom 20%, so leave grey canvas below the card.

---

## C5. HDB upgrader (blind): key close-up with a torn-paper "NEXT STOP" sticker

- **Headline (A), set on the sticker:** Upgrading From HDB? Start With Rare Freehold.
- **Sticker label (from the copywriter's layout):** NEXT STOP
- **Subhead:** 2- to 4-bedroom homes. 4-min walk to MRT, near Parkway Parade.
- **CTA:** GET PRICE LIST & E-BROCHURE (sunflower-yellow rectangle with black text)
- **Label:** IMAGE SAMPLE ONLY (lifestyle stock, not the project). **Fine print:** Walk/drive times per developer.
- **Visual:**
  - A close-up of a hand holding a set of new house keys in warm golden light, against a soft creamy bokeh background.
  - No faces, no keychain branding or tag text, no HDB logo, block numbers, flats or void decks, and no developer branding.
- **Lead form (must fix before this ad runs):** the form must ask for **budget**. The entry price is above what most HDB upgraders can spend, and no ad shows a price. Without a budget band on the form, this ad will pull leads that fail perf's qualified-lead test (copy flag 1, perf S5). See Flag 6.

**Full prompt (with text)**

```text
Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo, in a raw, handmade photo-and-sticker layout. The whole frame is a full-bleed photoreal close-up photograph: an adult's hand raised in the lower-right of the frame, holding a set of shiny new brass and silver house keys on a plain metal ring with no tag or keychain, warm golden late-afternoon light catching the metal, background a softly blurred bright doorway with warm creamy bokeh, 85mm lens at f/1.8, very shallow depth of field. Top-left: a small solid red tag (approx. #D0021B) with "SINGAPORE HOMEBUYER" in white bold all-caps sans-serif with wide letter-spacing, about 22 px. Across the upper-left 60% of the frame, tilted about 4 degrees anticlockwise: a large piece of white paper with rough torn edges and a soft realistic drop shadow, as if slapped on like a sticker. At the top of the paper, a short solid red strip reading "NEXT STOP" in white heavy all-caps sans-serif, about 28 px. Below it, on the paper, the headline in a heavy black grotesque sans-serif, about 88 px, left-aligned over 4 lines, reading "Upgrading From HDB? Start With Rare Freehold." BOTTOM 24% of the frame: the photo darkens into a soft warm-brown gradient, holding the subhead in regular white sans-serif, about 26 px, left-aligned, reading "2- to 4-bedroom homes. 4-min walk to MRT, near Parkway Parade."; tiny white fine print, about 15 px, reading "Walk/drive times per developer."; and a solid sunflower-yellow (approx. #FFC629) rectangular button with square corners, full width between 56 px margins, with "GET PRICE LIST & E-BROCHURE" in bold black all-caps sans-serif. Just above the gradient, on the right: small italic white text on a subtle dark translucent strip reading "IMAGE SAMPLE ONLY". Look: bold, direct, a little scrappy and human, like a note stuck on a fridge, warm and hopeful; every string crisp, legible at mobile size and rendered exactly once. Avoid: faces or full people; keychains, key tags or fobs with any text or logo; HDB logos, HDB blocks, block numbers, void decks or flats; any project, condo, building, developer or mall name; buildings or towers; any price, dollar sign, psf or "% sold"; district codes or street addresses; misspelled, warped, duplicated or extra text beyond the quoted strings; watermarks; MRT/LTA logos or signage; QR codes, phone numbers. Genre: Singapore property paid-social static ad.
```

**Image-only prompt (add text in Canva)**

```text
Portrait 4:5 image, 1080x1350 px, with no text of any kind, full-bleed: a photoreal close-up photograph of an adult's hand raised in the lower-right of the frame, holding a set of shiny new brass and silver house keys on a plain metal ring with no tag or keychain, warm golden late-afternoon light catching the metal, background a softly blurred bright doorway with warm creamy bokeh, 85mm lens at f/1.8, very shallow depth of field. Across the upper-left 60% of the frame, tilted about 4 degrees anticlockwise: a large blank piece of plain white paper with rough torn edges and a soft realistic drop shadow, as if stuck on like a sticker, completely empty. The bottom 24% of the frame darkens smoothly into a soft warm-brown tone with low detail, reserved for a subhead and a button. Look: warm, hopeful, human, tactile. Avoid: any text, letters, numbers, logos or watermarks anywhere, including on the paper; faces or full people; keychains, tags or fobs; HDB blocks or buildings; signage.
```

If the generated paper looks fake, generate the photo without it and use a torn-paper texture asset in Canva instead.

**B-swap:** use the headline "Your Next Home After HDB: Rare Freehold Condo". It already says "next", so change the red strip from "NEXT STOP" to "UPGRADE" or drop it (copywriter to confirm the word). Everything else stays the same.

**9:16:** extend the bokeh upward and the gradient downward. Put the sticker's top edge just below the top 14%, keep the hand and keys in the middle third, and set the subhead and yellow button above the bottom 20%.

---

## C6. Real floor plan (blind): full-width plan hero on a blueprint frame

> **Needs the official floor plan.** Composite the developer's 2BR (635 sqft) plan into the reserved plan zone in Canva, with the project name, logo and unit codes removed (perf C3-1, S7). If the official plan isn't available or cleared, the plan must be labelled **ILLUSTRATIVE LAYOUT ONLY**, and Headline A ("See the Real...") **cannot run**. In that case the copywriter has to supply a replacement headline. See Flag 4.

- **Headline (A):** See the Real 2-Bedroom Layout, 635 sqft
- **Subhead:** Rare freehold condo. 4-min walk to MRT, near i12 Katong & Parkway Parade.
- **Spec chips (from the copywriter's layout):** 635 SQFT · 2 BEDROOMS · FREEHOLD
- **Plan:** the official plan's own room labels only. Add no dimensions or room names that aren't on the official drawing.
- **CTA:** GET PRICE LIST & E-BROCHURE (solid white rectangle with navy text)
- **Labels:**
  - Render inset: IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY.
  - Plan: ILLUSTRATIVE LAYOUT ONLY, but only if it isn't the official plan. If the official plan carries its own developer disclaimer, keep that line too.
- **Fine print:** Walk/drive times per developer.
- **Phone legibility (perf C3-3):** the plan is the full width of the frame, about 1000 px. Bump the official room labels in Canva if they read below about 16 px.

**Full prompt (with text, mock-up only. The plan drawn here is a placeholder and must never be published)**

```text
Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo, in a technical blueprint layout. Background: a deep blueprint-navy field (approx. #14325C) with a faint fine white grid at low opacity. Top-left: a small solid red tag (approx. #D0021B) with "SINGAPORE HOMEBUYER" in white bold all-caps sans-serif with wide letter-spacing, about 22 px. Below it, the headline in a bold white geometric sans-serif, about 60 px, left-aligned over 2 lines, reading "See the Real 2-Bedroom Layout, 635 sqft". HERO, about 52% of the frame height: a large flat white sheet, full width with 40 px side margins and a soft shadow, holding a clean black-line architectural floor plan of a compact 2-bedroom apartment in top-down orthographic view, with simple wall thickness, door swings and window marks, and small grey room labels "LIVING / DINING", "KITCHEN", "BEDROOM", "BEDROOM", "BATH" and "BALCONY", with no dimensions. Bottom-right of the sheet: tiny grey text reading "ILLUSTRATIVE LAYOUT ONLY". Overlapping the top-right corner of the sheet: a small rounded-square inset photo, about 260 x 260 px, with a thin white border, showing a bright condo living room with full-height windows, and on it tiny italic white text on a dark translucent strip reading "IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY". Below the sheet: a row of three pale-blue (approx. #BFD7EA) rounded chips with navy bold all-caps text: "635 SQFT", "2 BEDROOMS", "FREEHOLD". Then the subhead in regular white sans-serif, about 25 px, reading "Rare freehold condo. 4-min walk to MRT, near i12 Katong & Parkway Parade."; tiny light-blue fine print, about 15 px, reading "Walk/drive times per developer."; then a solid white rectangular button with square corners, full width between margins, with "GET PRICE LIST & E-BROCHURE" in bold navy all-caps sans-serif. Look: precise, technical, architect's drawing board, credible and useful; every string crisp, legible at mobile size and rendered exactly once. Avoid: any project, condo, building or developer name or logo on the plan or anywhere else; unit-type codes; dimensions or area figures on the plan; furniture clutter on the plan; any price, dollar sign, psf or "% sold"; district codes or street addresses; misspelled, warped, duplicated or extra text beyond the quoted strings; watermarks; building exteriors or towers; people; QR codes, phone numbers. Genre: Singapore property paid-social static ad.
```

**Image-only prompt (add text in Canva, with a reserved plan zone)**

```text
Portrait 4:5 image, 1080x1350 px, with no text, letters or numbers of any kind. Background: a deep blueprint-navy field (approx. #14325C) with a faint fine white grid at low opacity, evenly covering the whole frame. TOP 20% of the frame: plain navy grid only, reserved for a headline. RESERVED PLAN ZONE, from about 22% to 74% of the frame height, full width with 40 px side margins: one completely flat, empty, solid white rectangle with a soft drop shadow and nothing drawn inside it, reserved for an official floor plan to be placed later. Overlapping the top-right corner of that white rectangle: a small rounded-square photo inset, about 260 x 260 px, with a thin white border, showing a bright, premium condo living room with full-height windows and soft daylight, photoreal. BOTTOM 26% of the frame: plain navy grid only, reserved for spec chips, a subhead and a button. Look: precise, technical, architectural drawing board. Avoid: any text, letters, numbers, logos or watermarks; any floor plan, lines, furniture or marks inside the white rectangle; building exteriors or towers; people; anything drawn in the reserved navy areas besides the grid.
```

Best practice is to draw the white plan sheet as a Canva shape too, and generate only the navy grid texture and the inset photo. Then the reserved zone is a guaranteed clean rectangle for the official plan.

**B-swap:** use the headline "Every Square Foot Planned: 4-Bedroom, 1,744 sqft" with the official 4BR Premium plan and the chips "1,744 SQFT", "4 BEDROOMS", "FREEHOLD". The 4BR plan is far more detailed, so crop to the main living, dining and bedroom wing if the full plan's labels would read below 16 px. This headline rests on the (R2) claim "consciously planned to maximise space", which performance hasn't reviewed. Don't run it while C4 is on its 4BR Headline A (see Flag 9).

**9:16:** this format suits the plan best. Make the plan zone taller (about 50% of 1920) so the plan scales up, start the headline below the top 14%, and stack the three chips, subhead and button above the bottom 20%.

---

## C7. Checklist (blind): clipboard flat-lay with big red ticks

- **Headline (A):** Freehold? MRT? Schools? Tick, Tick, Tick.
- **Subhead:** Rare freehold condo. 4-min walk to MRT, near Katong V & Parkway Parade.
- **Checklist (6 ticks, from the copywriter's layout):**
  - Rare freehold
  - 4-min walk to MRT
  - Walk to Katong V & Parkway Parade
  - 6-min walk to a primary school
  - East Coast Park, 4-min drive
  - Only 105 homes
- **CTA:** GET PRICE LIST & E-BROCHURE (red rectangle with a white tick icon on the left)
- **Label:** IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY (on the taped photo strip).
- **Fine print:** Walk/drive times per developer. School admission subject to MOE regulations and balloting.
  - The MOE line goes on the image because schools appear in the headline and in tick 4 (lead's instruction, copy flag 5).
  - No school is named, and no P1 priority is implied.
- **Visual:**
  - A top-down desk flat-lay with a clipboard, a cream paper sheet, a red marker and a thin photo strip taped near the bottom of the sheet.
  - **Strip, preferred:** a slice of the official facade render.
  - **Strip, fallback:** a wide interior slice with full-height windows. Never use an AI tower.

**Full prompt (with text)**

```text
Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo, as a photoreal top-down desk flat-lay. A light birch clipboard with a brushed-steel clip at the top centre lies on a pale oak desk, filling about 92% of the frame, holding a sheet of plain unlined cream paper (approx. #FBF6E9). A red marker pen with its cap off lies diagonally across the desk at the bottom-right edge, partly out of frame. Soft daylight from the top-left, gentle realistic shadows. On the paper, with 56 px margins: top-left, a small eyebrow reading "SINGAPORE HOMEBUYER" in bold red (approx. #D0021B) all-caps sans-serif with wide letter-spacing, about 22 px. Below it, the headline in a heavy black condensed sans-serif, about 76 px, left-aligned over 2 lines, reading "Freehold? MRT? Schools? Tick, Tick, Tick." Below it, a checklist of six lines, each with a thin charcoal square box on the left and a big, confident hand-drawn red marker tick overflowing the box, and the item in bold charcoal sans-serif, about 34 px: "Rare freehold"; "4-min walk to MRT"; "Walk to Katong V & Parkway Parade"; "6-min walk to a primary school"; "East Coast Park, 4-min drive"; "Only 105 homes". Below the list: a wide thin photo strip, about 150 px tall and the full width of the text column, stuck to the paper with two short strips of translucent washi tape at its ends, showing a wide slice of a bright premium condo living room with full-height windows; on its bottom-left, tiny italic white text on a dark translucent strip reading "IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY". Under the strip, the subhead in regular charcoal sans-serif, about 24 px, reading "Rare freehold condo. 4-min walk to MRT, near Katong V & Parkway Parade."; tiny grey fine print, about 14 px, reading "Walk/drive times per developer. School admission subject to MOE regulations and balloting."; then at the bottom of the paper a solid red rectangular button with slightly rounded corners, full text-column width, with a small white tick icon on the left and "GET PRICE LIST & E-BROCHURE" in bold white all-caps sans-serif. Look: tactile, organised, satisfying, like a buyer's own shortlist being ticked off; every string crisp, legible at mobile size and rendered exactly once. Avoid: handwriting for the list items (only the ticks are hand-drawn); ruled lines or grid on the paper; any project, condo, building, developer, school or mall name or logo beyond the quoted strings; building exteriors or towers in the strip; brand names on the pen or clipboard; any price, dollar sign, psf or "% sold"; district codes or street addresses; misspelled, warped, duplicated or extra text beyond the quoted strings; extra ticks or crosses; watermarks; MRT/LTA logos; QR codes, phone numbers; people or hands. Genre: Singapore property paid-social static ad.
```

**Image-only prompt (add text in Canva)**

```text
Portrait 4:5 image, 1080x1350 px, with no text, letters, numbers or marks of any kind, as a photoreal top-down desk flat-lay. A light birch clipboard with a plain brushed-steel clip at the top centre lies on a pale oak desk, filling about 92% of the frame, holding a sheet of completely blank, plain unlined cream paper (approx. #FBF6E9). A red marker pen with its cap off lies diagonally across the desk at the bottom-right edge, partly out of frame. On the paper, at about 70% of the frame height, a wide thin photo strip about 150 px tall, spanning the width of the paper minus 56 px margins, stuck on with two short strips of translucent washi tape at its ends, showing a wide slice of a bright premium condo living room with full-height windows and soft daylight; keep its bottom-left corner calm for a small label. Everything else on the paper stays completely empty, reserved for a headline, a checklist, a subhead and a button. Soft daylight from the top-left, gentle realistic shadows. Look: tactile, clean, organised. Avoid: any text, letters, numbers, ticks, boxes, lines or marks on the paper; brand names or logos on the pen or clipboard; building exteriors or towers; people or hands; clutter on the desk.
```

Draw the six check boxes in Canva and use one hand-drawn red marker tick asset for all six, so the ticks match. If the official facade render is cleared, replace the strip photo with a wide slice of it.

**B-swap:** use the headline "Your New-Home Checklist, Ticked: Rare Freehold Condo". It already says "rare freehold condo", so drop tick 1 ("Rare freehold") and keep the other five ticks with slightly more spacing. The MOE line stays because the schools tick stays. Everything else stays the same.

**9:16:** keep the clipboard filling the frame vertically. Start the headline below the top 14%, give the six ticks more spacing, and end the button above the bottom 20%. Extend the oak desk below the clipboard for the safe zone.

---

## Flags

1. **Performance hasn't reviewed copy rev 4 or these prompts yet.**
   - `perf-review.md` still carries the round-1 verdict (Revise). Research round 2 (the R2 claims) is also unreviewed.
   - There is no `creative-spec.md` approval box for this run.
   - Any generation, including test options, needs the user's own approval in chat with the estimated cost shown first.
2. **C4 to C7 copy is not fully written yet.** The copywriter's option table gives the headlines, subheads and layouts used here. The primary text and descriptions still have to be written (copy rev 4, item 2).
   - The designer-added strings also need the copywriter's proof before they are set: the C3 pin label format (for example "Katong V · 6-min walk"), the C4 row labels (BEDROOMS / SIZE / TENURE / MRT / NEARBY), and the C5 B-swap strip word.
3. **Official assets (perf S7).** The client needs to confirm the rights to:
   - C1: the facade render.
   - C4: the 4BR interior render.
   - C6: the 2BR and 4BR floor plans and the inset render.
   - C7: a strip slice of the facade render.

   Without them, C1, C4 and C7 fall back to generic interiors labelled as artist's impressions. C4's fallback sits under a specific unit-type title, so QA should confirm it is acceptable.
4. **C6 needs the official plan. Otherwise it gets the ILLUSTRATIVE LAYOUT ONLY label and a new headline.**
   - Strip the project name, logo and unit codes from the official plan before compositing (perf C3-1).
   - With an illustrative plan, Headline A ("See the Real 2-Bedroom Layout") would be false. B ("Every Square Foot Planned") also implies the real plan and rests on R2. The copywriter needs to write a headline that doesn't claim to show the real layout.
   - The plan drawn in the full prompt is a mock-up placeholder only and must never be published.
5. **Stock (perf S4).** Before launch, confirm within 48 hours that these unit types are available, or the ads change:
   - C4: the 4BR Premium (B-swap: the 2BR).
   - C6: the 2BR (B-swap: the 4BR).
   - C5: "2- to 4-bedroom homes".

   C4's "AVAILABLE TYPE" tag is printed only if the 4BR Premium is confirmed available. Otherwise drop it.
6. **C5 (HDB upgrader): the lead form must ask for budget.** No ad shows a price, and the entry price is above most HDB upgraders' budgets. This ad shouldn't go live until the form has a budget-band question (copy flag 1, perf S5). "HDB upgrader" is a message only. It must not become age, income or postcode targeting (Housing special ad category, copy flag 11).
7. **MOE line on C2 and C7.** "School admission subject to MOE regulations and balloting." comes from copy flag 5, where it is a recommendation. The copywriter or the user needs to confirm the wording before it is set. No school is named on C7, and no P1 priority is implied anywhere.
8. **C4 portal look.** C4 must not imitate any specific portal: no logo, app name, signature colour or UI chrome. QA should check that it doesn't read as a real portal listing. The subhead and the MRT/NEARBY rows repeat each other, because the lead asked for both. If the card feels crowded on a phone, the copywriter can decide whether to shorten the description line.
9. **C4 and C6 are both unit-led.** They are kept apart by unit type: C4 shows the 4BR and C6 the 2BR. If either B-swap is used, flip both together so they never show the same unit at the same time (copy options note b).
10. **C3 map.**
    - The labels name real stations and malls. They are set in Canva and never generated.
    - The pin positions are not real geography, which is why "Illustrative map, not to scale." is required.
    - The giant "4-MIN" separates us from Home Haven Hub's similar "Rare Freehold Near MRT" (copy flag 12).
    - "Katong food" rests on R2 sources.
11. **Eyebrow style.** C1 (bronze), C5 (photo) and C6 (navy) use a red tag with white letters, because red text would be unreadable on those backgrounds. C2, C3, C4 and C7 use red text. Change this if the client wants red text everywhere.
12. **Licensed stock.** C2 (family), C5 (keys), C7 (desk flat-lay) and the fallback interiors need licensed stock or client-owned photos, or the user's approval to generate them. No images were fetched.
13. **Still open, owned by others:**
    - CEA particulars and authorisation (S3, could Block C1). Each layout keeps a strip above the CTA for them.
    - The lead form must reveal "Amber House" on the first screen, because C2 to C7 hide it (copy flag 1, S5).
    - Lead-quality tagging (S6).
