# The Arcady at Boon Keng: Image Prompts (GoAhead, 7 ads, 7 different layouts)

Revision 1, written 2026-11-05 by static-designer. The user asked in chat to "run the whole thing for me, go through all the process, I want the end prompt for the design of creative". **These are prompts only.** Nothing has been generated and no paid call has been made.

- **Copy source:** `copy-arcady.md`, Revision 1.
  - Headline A, the subhead, the on-image strings and the layout column are used word for word.
  - Headline B appears as a swap line under each ad.
- **The lead's calls on the copywriter's open picks (the user delegated these):**
  - C3 uses Headline A, "Rare Freehold Condo, 6-Min Walk to Boon Keng MRT". This is the user's own formula, so 9 words are allowed here.
  - C5 is Resort / facilities, not HDB upgrader.
- **Facts source:** `research-arcady.md`, CONFIRMED rows only.
- **Format source:** `amber-house-prompts-v2.md`. The structure is the same, but the palettes are new.
- **Hard rules on every ad:**
  - No price, dollar sign or psf anywhere, fine print included. C4 has no price field.
  - No unit counts.
  - No "% sold" and no scarcity wording.
  - No district codes and no street names.
  - The MRT is always written "Boon Keng MRT", on every badge, chip and diagram label.
  - **Only C1 shows "The Arcady"**, and only as typeset text.
  - C2 to C7 ban any project, developer, building, mall or school name or signage from the imagery. The quoted copy strings are typeset in Canva and are allowed.
  - People are never identifiable. Show them from behind or in soft focus, or show only a hand.
- **Brand constants (everything else changes per ad):**
  1. The red `SINGAPORE HOMEBUYER` eyebrow (#D0021B).
     - On light backgrounds (C3, C4, C6) it is red text.
     - On coloured, dark or photo backgrounds (C1, C2, C5, C7) it is a small solid red tag with white letters, so it stays readable.
  2. The CTA `GET PRICE LIST & E-BROCHURE`. Its shape and colour change per ad. The Meta button should be "Download" (perf S5 precedent).
  3. The image labels:
     - Renders and interiors: `IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY`. TOP is expected in 2028, so no finished building exists to photograph.
     - Lifestyle stock: `IMAGE SAMPLE ONLY`.
     - Diagrams: `Illustrative diagram, not to scale.` This applies to C3 and to the C6 compass and height scale.
- **Copy-required lines:**
  - `Walk/drive times per developer.` on all 7 ads, because every ad shows a walk or drive time.
  - `School admission subject to MOE regulations and balloting.` on C2 and C7, the two school ads.
  - `ILLUSTRATIVE LAYOUT ONLY` on C6, but only if the official plan isn't used.
  - A clear strip of about 60 px above each CTA, kept empty for the CEA particulars (perf S3).
- **Workflow (perf S2, mandatory):**
  - Generate with the **image-only prompt**, which leaves the text zones empty.
  - Set every string in Canva or Figma, and proof each character against `copy-arcady.md`.
  - Draw flat panels, cards, chips, badges, diagrams and buttons as Canva shapes in the exact hex. Treat any generated colour as a placeholder.
  - C6: composite the official floor plan into the reserved zone. The image model never draws a plan for publishing.
  - The "full prompt (with text)" is for a quick layout mock-up only. Never publish its rendered text.
- **9:16 (perf S1):** each ad has an adaptation note. At 1080x1920, keep all text clear of the top 14% (about 270 px) and the bottom 20% (about 385 px). Build C6 9:16-first (perf C6-3).

---

## Design at a glance

| Ad | Angle / hook | Headline A (on image) | Layout | Colours | Type treatment | Photo / visual style | CTA shape | Label |
|---|---|---|---|---|---|---|---|---|
| **C1** | Direct (named). Factual: name + tenure + drive time | The Arcady: Rare Freehold, 11-Min Drive to Orchard | **Split-screen.** Render on the left 55%. Solid panel with 3 big numerals on the right 45% | Deep forest green (#1E3B2F), ivory (#F4EEDF), muted gold hairlines (#C9A86A) | High-contrast Didone serif. Huge ivory numerals "6 MIN / 3 STOPS / 47" | **Official exterior render**, cropped tall. Fallback: an evening interior with city lights in the windows. No AI tower | Ivory **outline (ghost) button** with a thin arrow | IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY |
| **C2** | Family. Emotional question | Looking for a home for your family? | **Big-type question on a colour block.** Question in the top 55%, family photo strip below, round badge on the seam (left side) | Soft teal (#8FCFC7), warm cream (#FAF1E2), deep navy type (#1B2A4A), red badge | Warm, chunky **soft serif** (Recoleta/Cooper style), very large, 3 lines | Golden-hour candid stock with a faded film look: a parent and two kids **from behind** on a riverside park path | Red pill with a white circled arrow at the right end | IMAGE SAMPLE ONLY |
| **C3** | MRT. Hard fact (user's line) | Rare Freehold Condo, 6-Min Walk to Boon Keng MRT | **Giant "6-MIN" over a horizontal train-line strip**: Home, then Boon Keng MRT, then Dhoby Ghaut MRT, then Raffles Place MRT. Amenity icon row below | Off-white (#F7F6F2), charcoal (#2A2D31), one coral accent (#FF6F59) that never touches the rail line | Ultra-heavy condensed numeral (about 270 px) with a solid coral underbar. Rounded transit-style sans for the station labels | **Flat vector diagram.** No photo. No real line colours, logos or station codes | Charcoal **ticket-stub button** with notched ends, a perforation line and an arrow stub | Illustrative diagram, not to scale. |
| **C4** | Real-unit listing card. Concrete spec | 2-Bedroom + Study, 764 sqft, Rare Freehold | **Generic property-portal listing card.** Photo with gallery dots on top, then the title, description and 6 icon spec rows. No price field, no portal branding | Warm stone canvas (#EFECE6), white card, ink slate (#24313D), teal tag (#0E7C74) | Clean UI sans (Inter-style). Small grey all-caps row labels with bold values | **Official 2BR+Study interior render** preferred. Fallback: a bright compact living room with a study nook in morning daylight | Full-width ink-slate rounded rectangle at the card base | IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY. Fallback adds "– not the actual unit" (perf C4-3) |
| **C5** | Resort / facilities. Aspirational "imagine" | Imagine coming home to a resort every evening. | **Full-bleed dusk pool** with a translucent vertical **level-stack strip** (Roof / Sky terrace / Pool deck) down the right 30% | Dusk blue (#1C2C4C to #3E5A8A), lantern gold (#E9B45A), white | Light, airy high-contrast serif. Holiday-brochure feel. Small gold spaced caps on the level cards | **Official facilities render** preferred. Fallback: a cinematic long-exposure dusk infinity pool with palms and cabanas, **no tower** | Lantern-gold pill with dusk-navy text, bottom left | IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY |
| **C6** | Real floor plan. Proof: N/S + 2.85m | Every Home Faces North or South | **Architect's plan sheet.** The plan fills about 55–60% of the frame, with a large N/S compass top-right, a vertical "2.85m" scale on the left edge, a small inset bottom-right and a title-block footer | Warm drafting paper (#F3EBDD) with a faint grid, graphite (#3A3A3A), terracotta (#C0603A) | Condensed technical sans headline. Monospaced technical annotations | **Official floor plan composited in Canva** (reserved zone). Small interior inset with tall windows | Terracotta square-cornered button set inside a ruled **title block** | IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY (inset). Illustrative diagram, not to scale (compass + scale). ILLUSTRATIVE LAYOUT ONLY (only if not official) |
| **C7** | Checklist. Self-scoring | Freehold? Boon Keng MRT? Schools? Tick, Tick, Tick. | **Hand holding a phone with a Notes-style checklist** (6 ticks), centred over a softly blurred tree-lined street | Muted sage-green bokeh (#8FA58A), notes yellow (#FFF3B0), black (#111111), red ticks | System-UI sans on the screen (iOS-Notes-like, unbranded). Bold note title | Photoreal hand and phone with a **blank screen**. The UI is built in Canva. Shallow depth of field. No face | White capsule with black text and a red tick icon | IMAGE SAMPLE ONLY |

How the seven differ:
- **Layout:** split-screen, big-type colour block, giant number on a train strip, app listing card, full-bleed photo with a side strip, architect's plan sheet, phone in hand.
- **Colour:** forest green and ivory, teal and cream, off-white with coral, warm stone with teal, dusk blue with gold, drafting paper with terracotta, sage bokeh with notes yellow.
- **Type:** Didone numerals, soft serif, ultra-heavy condensed numeral, UI sans, light brochure serif, technical sans with monospaced notes, system-UI sans.
- **Visual source:** official exterior render, golden-hour stock, vector diagram, interior render in a UI frame, dusk facilities render, official plan, photoreal hand and phone.
- **CTA:** ghost button, red pill with an arrow, ticket stub, app button, gold pill, title-block button, white capsule with a tick.

None of the Amber House panel or accent colours are reused. The only shared hex is the brand-constant red (#D0021B).

---

## C1. Direct (named): split-screen with a forest-green numeral panel

- **Headline (A):** The Arcady: Rare Freehold, 11-Min Drive to Orchard
- **Subhead:** 6-min walk to Boon Keng MRT, near Bendemeer Mall & Kallang Park Connector.
- **Numerals (copy-approved, they don't repeat the headline):**
  - **6 MIN** / WALK TO BOON KENG MRT
  - **3 STOPS** / TO DHOBY GHAUT MRT
  - **47** / FACILITIES
- **CTA:** GET PRICE LIST & E-BROCHURE (ivory outline button with a thin arrow)
- **Label:** IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY. **Fine print:** Walk/drive times per developer.
- **Visual:**
  - **Preferred:** the official exterior render, if GoAhead has the rights (perf S7). Crop it tall to show the tower against the sky, with any project name or developer logo retouched out.
  - **Fallback:** an evening interior with city lights in the windows (below). Never put an AI-generated tower next to the real name (perf C1-1).
  - "The Arcady" appears only as typeset headline text in the panel, never on a building or object. The developer, JV partners and architect stay in the primary text only (perf C1-1 precedent).
  - The copywriter's layout puts "THE ARCADY" in small caps above the headline. I left it out because Headline A already opens with the name (see Flag 10).

**Full prompt (with text)**

```text
Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo, in a split-screen layout with a hard vertical edge at 55% of the width. LEFT 55% of the frame, full height: a tall photoreal image. If an official render is supplied, use it here; otherwise show a premium condo living room at blue hour, full-height windows looking out at soft out-of-focus city lights, warm brass floor lamp glow, walnut floor, a low bouclé sofa and a marble side table, 24mm interior lens, calm, moody and uncluttered. Bottom-left corner of the left image: small italic white text on a subtle dark translucent strip reading "IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY". RIGHT 45% of the frame, full height: a solid flat deep forest-green panel (approx. #1E3B2F) with 56 px inner margins. At the top of the panel: a small solid red tag (approx. #D0021B) with "SINGAPORE HOMEBUYER" in white bold all-caps sans-serif with wide letter-spacing, about 22 px. Below it, the headline in an elegant ivory (approx. #F4EEDF) high-contrast Didone serif, about 50 px, left-aligned over 4 lines, reading "The Arcady: Rare Freehold, 11-Min Drive to Orchard". Then three stacked fact blocks separated by thin muted-gold hairlines (approx. #C9A86A), each a huge ivory Didone numeral with a small all-caps ivory sans caption beneath: "6 MIN" with caption "WALK TO BOON KENG MRT"; "3 STOPS" with caption "TO DHOBY GHAUT MRT"; "47" with caption "FACILITIES". Below the numerals, the subhead in regular ivory sans-serif, about 22 px, reading "6-min walk to Boon Keng MRT, near Bendemeer Mall & Kallang Park Connector." Then tiny ivory fine print, about 15 px, reading "Walk/drive times per developer." Then a clear empty strip about 60 px tall. Bottom of the panel: an outline (ghost) button, full panel width, with a 2 px ivory border, square corners and a transparent fill, with "GET PRICE LIST & E-BROCHURE" in bold ivory all-caps sans-serif and a thin ivory arrow on the right. Look: quiet, assured, old-money premium, like a private-bank brochure; every string crisp, legible at mobile size and rendered exactly once. Avoid: any AI-generated condo tower or building facade; the project name or any name, signage, lettering or logo on buildings, walls, windows, artwork or objects; developer names or logos; any price, dollar sign, psf, unit count or "% sold"; misspelled, warped, duplicated or extra text beyond the quoted strings; watermarks; district codes or street addresses; MRT/LTA logos, rail line colours or station signage; people; icon rows, QR codes, phone numbers. Genre: Singapore property paid-social static ad.
```

**Image-only prompt (add text in Canva)**

```text
Portrait 4:5 image, 1080x1350 px, with no text of any kind, in a split-screen composition with a hard, perfectly straight vertical edge at 55% of the width. LEFT 55%, full height: a photoreal premium condo living room at blue hour, full-height windows looking out at soft out-of-focus city lights, warm brass floor lamp glow, walnut floor, a low bouclé sofa and a marble side table, 24mm interior lens, calm, moody and uncluttered; keep the bottom-left corner dark and low in detail for a small label. RIGHT 45%, full height: a completely flat, empty, solid deep forest-green colour field (approx. #1E3B2F) with no texture, gradient, objects or marks. RESERVED TEXT ZONES on the green field, all left empty: top 10% for a small tag; 10–34% for a 4-line headline; 34–72% for three stacked numerals with captions; 72–82% for a subhead and fine print; 82–87% clear strip for licence particulars; 87–95% for a full-width button. Look: quiet, assured, premium. Avoid: any text, letters, numbers, logos or watermarks anywhere; any building exterior or tower; signage or lettering in the city lights; people; anything drawn on the colour field.
```

If the official exterior render is cleared, drop it into the left 55% instead of the generated interior and keep the same label.

**B-swap:** use the headline "The Arcady at Boon Keng. Rare Freehold Condo." Set it in 3 lines at about 54 px. The three numerals stay as they are, because none of them repeats B. Nothing else changes.

**9:16:** stack the layout instead of splitting it. The render goes in the top 42% and the green panel in the bottom 58%. Set the three numerals in a horizontal row of three with the captions on 2 lines each. Start the tag below the top 14% (it can sit on the render as a tag) and keep the ghost button above the bottom 20%.

---

## C2. Family (blind): big-type question on a teal/cream colour block

- **Headline (A):** Looking for a home for your family?
- **Subhead:** Rare freehold condo. 6-min walk to Boon Keng MRT, near Kallang Park Connector.
- **Round badge on the seam (copy-approved):** large "7-MIN WALK", with a small second line "TO BENDEMEER PRIMARY"
- **On-image MOE line:** School admission subject to MOE regulations and balloting.
- **CTA:** GET PRICE LIST & E-BROCHURE (red pill with a white circled arrow)
- **Label:** IMAGE SAMPLE ONLY (lifestyle stock, not the project). **Fine print:** Walk/drive times per developer.
- **Visual:**
  - A warm, candid golden-hour photo of a parent and two kids **seen from behind**, walking along a tree-lined riverside park path. One child has a small plain backpack.
  - The tone is slightly faded and film-like, which sets it apart from the Amber House morning shot.
  - No faces. No school building, gate, uniform crest or logo. No park signage, and no names or signs of any kind.

**Full prompt (with text)**

```text
Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo, in a bold big-type layout. TOP 55% of the frame: a flat solid soft-teal colour block (approx. #8FCFC7) with 64 px margins. Top-left of the block: a small solid red tag (approx. #D0021B) with "SINGAPORE HOMEBUYER" in white bold all-caps sans-serif with wide letter-spacing, about 24 px. Below it, filling most of the block, the headline in a very large, warm, chunky soft serif (Recoleta / Cooper style) in deep navy (approx. #1B2A4A), about 104 px, left-aligned over exactly 3 lines, reading "Looking for a home for your family?". BOTTOM 45% of the frame: a warm cream base (approx. #FAF1E2) holding a wide photo strip, full width with 40 px side margins and gently rounded corners: a candid golden-hour photograph with a slightly faded, film-like warmth, showing a parent and two young children seen from behind, walking hand in hand along a wide, tree-lined riverside park path with calm water on the right and low tropical shrubs, long soft shadows, one child carrying a small plain backpack, 50mm lens, shallow depth of field, no faces visible. Bottom-right corner of the photo: small italic white text on a subtle dark translucent strip reading "IMAGE SAMPLE ONLY". Straddling the seam between the teal block and the photo, on the LEFT side: a round solid red badge about 230 px across with a thin cream ring, with "7-MIN WALK" in bold white all-caps sans-serif and a small second line "TO BENDEMEER PRIMARY". Under the photo, on the cream base: the subhead in regular navy sans-serif, about 25 px, reading "Rare freehold condo. 6-min walk to Boon Keng MRT, near Kallang Park Connector." Below it, tiny grey fine print, about 15 px, on two lines, reading "Walk/drive times per developer." and "School admission subject to MOE regulations and balloting." Then a clear empty strip about 60 px tall. Bottom: a red (approx. #D0021B) pill-shaped button, centred, about 74% of the frame width, with "GET PRICE LIST & E-BROCHURE" in bold white all-caps sans-serif and a small white circle holding a red arrow at its right end. Look: warm, hopeful, parent-to-parent, the softest and most approachable ad in the set; every string crisp, legible at mobile size and rendered exactly once. Avoid: identifiable or close-up faces, people facing the camera; any school building, school gate, uniform, crest, school logo or school name in the image; park signage, wayfinding signs or name boards; any project, condo, building, developer, mall or school name or signage; any condo tower or recognisable landmark; any price, dollar sign, psf, unit count or "% sold"; misspelled, warped, duplicated or extra text beyond the quoted strings; logos or watermarks; district codes or street addresses; MRT/LTA logos, rail line colours or signage; icon rows, QR codes, phone numbers. Genre: Singapore property paid-social static ad.
```

**Image-only prompt (add text in Canva)**

```text
Portrait 4:5 image, 1080x1350 px, with no text of any kind. TOP 55% of the frame: a completely flat, empty, solid soft-teal colour field (approx. #8FCFC7) with no texture or objects, reserved for a small tag and a very large 3-line headline. BOTTOM 45%: a warm cream base (approx. #FAF1E2) holding a wide photo strip, full width with 40 px side margins and gently rounded corners, occupying the upper two-thirds of that bottom area: a candid golden-hour photograph with a slightly faded, film-like warmth, showing a parent and two young children seen from behind, walking hand in hand along a wide, tree-lined riverside park path with calm water on the right and low tropical shrubs, long soft shadows, one child carrying a small plain backpack, 50mm lens, shallow depth of field, no faces visible. Keep the LEFT end of the photo's top edge calm and low in detail for a round badge, and the bottom-right corner calm for a label. RESERVED TEXT ZONES on the cream area below the photo, left empty: a subhead line, two fine-print lines, a clear strip for licence particulars, and a centred pill button. Look: warm, natural, hopeful. Avoid: any text, letters, numbers, logos or watermarks; identifiable faces or people facing the camera; school buildings, gates, uniforms or crests; signage, name boards or wayfinding; buildings, towers or landmarks; anything drawn on the teal or cream areas.
```

**B-swap:** use the headline "Primary School, a 7-Min Walk From Home". The school badge would repeat it, so change the badge to "KIDS CLUB" with the small line "& WATER PLAY" (copy-approved). Keep the MOE line, because the headline still names a school. The photo stays the same.

**9:16:** make the teal block taller so the 3-line question starts about 300 px below the top edge. The photo strip, badge and pill CTA go in the middle third. The subhead and two fine-print lines go right under the photo, and the bottom 20% stays plain cream.

---

## C3. MRT (blind): giant "6-MIN" over a horizontal train-line strip

- **Headline (A):** Rare Freehold Condo, 6-Min Walk to Boon Keng MRT (9 words, allowed by the lead)
  - Set it on 3 lines: "RARE FREEHOLD CONDO," (small) / "6-MIN" (giant) / "WALK TO BOON KENG MRT" (medium).
  - "6-MIN" is the single biggest element. It is what separates this ad from our own live "Rare Freehold Condo Near Boon Keng MRT" (copy flag 14).
- **Subhead:** Walk to Bendemeer Market & Food Centre, Bendemeer Mall & Kallang Park Connector.
  - It sits under 3 small amenity icons: a noodle bowl, a shopping bag and a bicycle, matching the subhead's three places in order.
- **Train-line strip (copy-approved labels, set in Canva):** HOME —(**6-MIN WALK**)— BOON KENG MRT —(3 stops)— DHOBY GHAUT MRT —(2 more)— RAFFLES PLACE MRT
  - Home to Boon Keng MRT is a dotted footstep leg.
  - Boon Keng MRT to Dhoby Ghaut MRT is a solid rail line with 2 small unnamed tick marks for the in-between stops, so Dhoby Ghaut MRT is visibly the 3rd stop.
  - Dhoby Ghaut MRT gets an unlabelled double-ring interchange marker, and the line takes a small 45° step there to show the change of line ([ARC]: "change at Dhoby Ghaut MRT").
  - Dhoby Ghaut MRT to Raffles Place MRT has 1 unnamed tick, so Raffles Place MRT is 2 more stops.
  - There is no Orchard node (copy flag 5).
- **CTA:** GET PRICE LIST & E-BROCHURE (charcoal ticket-stub button)
- **Fine print:** Walk/drive times per developer. Illustrative diagram, not to scale.
- **Diagram rules:**
  - Neutral charcoal line only. **No North East Line purple** and no other real line colour (red, green, blue, yellow, orange, brown).
  - No LTA or MRT logos, no station codes (NE9 and so on), and no real map.
  - Coral is used only for the home dot, the walk chip and the underbar under "6-MIN". It never touches the rail line.

**Full prompt (with text)**

```text
Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo, in a bold giant-number infographic layout on a clean off-white background (approx. #F7F6F2) with 64 px margins. TOP 42% of the frame: top-left, a small eyebrow reading "SINGAPORE HOMEBUYER" in bold red (approx. #D0021B) all-caps sans-serif with wide letter-spacing, about 26 px. Below it, the headline stacked on three lines, left-aligned: first line "RARE FREEHOLD CONDO," in bold charcoal (approx. #2A2D31) condensed all-caps sans-serif, about 44 px; second line "6-MIN" in an ultra-heavy charcoal condensed sans-serif about 270 px tall, by far the largest element in the whole ad, with a solid flat coral bar (approx. #FF6F59) about 24 px thick running directly under it; third line "WALK TO BOON KENG MRT" in bold charcoal condensed all-caps, about 58 px. MIDDLE 28% of the frame, full width: a flat vector horizontal train-line diagram. From left to right: a solid coral dot labelled "HOME" below it; a dotted charcoal walking leg made of small footstep marks, with a small coral rounded chip above it reading "6-MIN WALK" in white bold condensed type; a large white station circle with a thick charcoal outline labelled "BOON KENG MRT" above it; a thick solid charcoal rail line with two small unlabelled charcoal tick marks and a small charcoal label "3 stops" above the segment; a white double-ring interchange circle labelled "DHOBY GHAUT MRT" below it, where the line takes a small 45-degree step down; the line continues with one small unlabelled tick and a small label "2 more"; a final white station circle with a thick charcoal outline labelled "RAFFLES PLACE MRT" above it. All station labels in a clean rounded geometric transit-style sans, charcoal, about 24 px. Bottom-right of the diagram area: tiny grey italic text reading "Illustrative diagram, not to scale." BOTTOM 30% of the frame: a row of three small charcoal line icons, evenly spaced: a steaming noodle bowl, a shopping bag, a bicycle. Below the icons, the subhead in regular charcoal sans-serif, about 26 px, centred on two lines, reading "Walk to Bendemeer Market & Food Centre, Bendemeer Mall & Kallang Park Connector."; tiny grey fine print, about 15 px, reading "Walk/drive times per developer."; a clear empty strip about 60 px tall; then a charcoal ticket-stub-shaped button, full width between margins, with semicircular notches cut into both short ends and a dashed white perforation line near the right end separating a small stub holding a white arrow, with "GET PRICE LIST & E-BROCHURE" in bold white all-caps sans-serif. Look: punchy, direct, clever transit infographic, flat vector, no photography, generous off-white space, the giant "6-MIN" hits first; every string crisp, legible at mobile size and rendered exactly once. Avoid: photographs; real maps, street layouts or street names; MRT or LTA logos, station codes, official station symbols or signage; purple, red, green, blue, yellow, orange or brown rail lines, or any colour-coded line; any coral on the rail line; any project, condo, building, developer, mall or school name, logo or signage beyond the quoted strings; building illustrations; any price, dollar sign, psf, unit count or "% sold"; district codes or street addresses; misspelled, warped, duplicated or extra text beyond the quoted strings; extra station names; compass roses, scale bars, legends; logos or watermarks; QR codes, phone numbers. Genre: Singapore property paid-social static ad.
```

**Image-only prompt (add text in Canva)**

```text
Portrait 4:5 image, 1080x1350 px, flat vector, with no text, letters or numbers of any kind, on a clean off-white background (approx. #F7F6F2). TOP 42% of the frame: empty off-white, reserved for a small eyebrow and a three-line headline with a giant number; the only mark allowed there is one solid flat coral bar (approx. #FF6F59), about 600 px wide and 24 px thick, left-aligned at 64 px from the left edge and about 74% of the way down that top area. MIDDLE 28%, full width: a minimal horizontal train-line diagram: from left to right, a solid coral dot; a dotted charcoal (approx. #2A2D31) walking leg of small footstep marks, with an empty small coral rounded chip above it; a large white station circle with a thick charcoal outline; a thick solid charcoal line with two small tick marks; a white double-ring interchange circle where the line takes a small 45-degree step down; the line continues with one small tick mark; a final white station circle with a thick charcoal outline. Leave clear empty space above and below every circle, dot and segment for labels, alternating above and below. BOTTOM 30%: empty off-white, reserved for three small icons, a two-line subhead, fine print, a clear licence strip and a full-width button. Look: crisp, minimal transit infographic, generous negative space. Avoid: any text, letters, numbers or icons; purple, red, green, blue, yellow, orange or brown lines; coral anywhere on the rail line; MRT or LTA logos or station symbols; maps or street layouts; photographs; buildings; anything else drawn in the top and bottom reserved areas.
```

Draw the three amenity icons and the ticket-stub button in Canva so they stay sharp and match the line weight of the diagram.

**B-swap:** use the headline "6-Min Walk to Boon Keng MRT. Rare Freehold." Set "6-MIN" giant on the first line, "WALK TO BOON KENG MRT." medium on the second and "RARE FREEHOLD." small on the third. The diagram, icons and subhead stay the same.

**9:16:** turn the train strip vertical. Put the giant "6-MIN" block below the top 14%, then run the line top to bottom (Home, Boon Keng MRT, Dhoby Ghaut MRT, Raffles Place MRT) down the left third with the labels to the right. The labels then fit at a larger size. Keep the icon row, subhead and ticket button above the bottom 20%.

---

## C4. Real-unit listing card (blind): portal-style card, 2BR + Study

- **Headline (A), set as the listing title:** 2-Bedroom + Study, 764 sqft, Rare Freehold
- **Subhead, set as the one-line description under the title:** 6-min walk to Boon Keng MRT, near Bendemeer Market & Food Centre.
- **Spec rows (copy-approved, none repeats the subhead). Each has an icon, a small grey label and a bold value:**
  - Key icon: TENURE, "Freehold"
  - Floor-area icon: SIZE, "764 sqft"
  - Bed icon: LAYOUT, "2 bedrooms + study"
  - Tap icon: FITTINGS, "Electrolux · Blanco · Toto"
  - Compass icon: FACING, "North or south"
  - Calendar icon: EXPECTED TOP, "2028"
- **Tag on the photo:** AVAILABLE TYPE. Print it **only** if the 2BR+Study is confirmed in stock within 48h of launch (copy flag 7, perf S4). Drop it otherwise.
- **CTA:** GET PRICE LIST & E-BROCHURE (full-width ink-slate rounded rectangle at the base of the card)
- **Label:**
  - Official render: IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY.
  - Generic fallback: IMAGE SAMPLE ONLY – not the actual unit (perf C4-3).
- **Fine print:** Walk/drive times per developer.
- **Portal styling rules:**
  - Generic only. No portal logo, name, wordmark or signature colour.
  - No price field of any kind: no dollar sign, no "price on request", no psf and no mortgage calculator.
  - No agent photo or name, star ratings, listing ID, dates, view counts or heart/share icons.
  - The fitting brands are typeset words only, never logos.
- **Visual:**
  - **Preferred:** the official 2BR+Study interior render, if GoAhead has the rights (perf S7).
  - **Fallback:** a bright, compact living room with a study nook seen through an open sliding door.

**Full prompt (with text)**

```text
Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo, styled like a generic property-portal listing card seen in a phone app, with no portal branding of any kind. Background: a warm stone-coloured app canvas (approx. #EFECE6). Top-left, above the card, a small eyebrow reading "SINGAPORE HOMEBUYER" in bold red (approx. #D0021B) all-caps sans-serif with wide letter-spacing, about 22 px. Below it, a large white card with 24 px rounded corners and a soft drop shadow, 40 px side margins, filling the rest of the frame down to a 36 px bottom margin. TOP 38% of the card: a photoreal interior photo with rounded top corners: a bright, compact premium condo living room in clean morning daylight, light ash timber floor, white walls, a slim grey sofa and a round 4-seat dining table, and through an open sliding door on the right a small study nook with a plain desk, a chair and a shelf, 20mm interior lens, airy, tidy and calm. Bottom centre of the photo: five small white gallery dots, the first one filled. Top-left of the photo: a small rounded teal tag (approx. #0E7C74) reading "AVAILABLE TYPE" in white bold all-caps sans-serif, about 17 px. Bottom-left of the photo: small italic white text on a subtle dark translucent strip reading "IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY". BELOW THE PHOTO, inside the card with 32 px padding: the listing title in bold ink-slate sans-serif (approx. #24313D), about 44 px, left-aligned on 2 lines, reading "2-Bedroom + Study, 764 sqft, Rare Freehold". Under it, a one-line description in regular grey sans-serif, about 22 px, reading "6-min walk to Boon Keng MRT, near Bendemeer Market & Food Centre." Then a thin light-grey divider. Then six compact spec rows, each with a simple ink-slate line icon on the left, a small grey all-caps label and a bold ink-slate value aligned right, rows separated by hairlines: a key icon, "TENURE", "Freehold"; a floor-area icon, "SIZE", "764 sqft"; a bed icon, "LAYOUT", "2 bedrooms + study"; a tap icon, "FITTINGS", "Electrolux · Blanco · Toto"; a compass icon, "FACING", "North or south"; a calendar icon, "EXPECTED TOP", "2028". Below the rows, tiny grey fine print, about 14 px, reading "Walk/drive times per developer." Then a clear empty strip about 50 px tall. At the bottom of the card: a full-width solid ink-slate (approx. #24313D) rounded-rectangle button with "GET PRICE LIST & E-BROCHURE" in bold white all-caps sans-serif. Look: clean, trustworthy, real-listing app screen, crisp UI typography, factual; every string crisp, legible at mobile size and rendered exactly once. Avoid: any price field, price tag, dollar sign, psf, "price on request" or mortgage calculator; any portal logo, wordmark, app name or recognisable portal brand colours; agent photos or names, star ratings, listing IDs, dates, view counts, heart or share icons; phone status bars or app navigation bars; brand logos for the fittings; any project, condo, building, developer, mall or school name or signage; any building exterior or tower; unit counts or "% sold"; district codes or street addresses; misspelled, warped, duplicated or extra text beyond the quoted strings; watermarks; QR codes, phone numbers; people. Genre: Singapore property paid-social static ad.
```

**Image-only prompt (add text in Canva)**

```text
Portrait 4:5 image, 1080x1350 px, with no text of any kind: a photoreal interior photograph only, to be placed into the photo slot of a listing card built in Canva. A bright, compact premium condo living room in clean morning daylight, light ash timber floor, white walls, a slim grey sofa and a round 4-seat dining table, and through an open sliding door on the right a small study nook with a plain desk, a chair and a shelf, 20mm interior lens, eye-level, airy, tidy and calm. Compose it so the living area and the study nook both sit in the middle band, because the image will be cropped to a wide landscape slot of about 1000x500 px; keep the top-left and bottom-left corners calm and low in detail for a small tag and a label. Look: bright, airy, realistic. Avoid: any text, letters, numbers, logos, signage, books with readable spines, artwork with lettering or watermarks; appliance or tap brand logos; building exteriors or towers; people; clutter.
```

Build the stone canvas, the white card, the divider, the six icon rows, the teal tag and the button as Canva shapes. Only the photo is generated, or replaced by the official render. Six rows on a 4:5 card are tight, so set the row height at about 56 px and check them at phone size.

**B-swap:** use the headline "3-Bedroom Premium + Study, 1,281–1,496 sqft, Rare Freehold". Change SIZE to "1,281–1,496 sqft" and LAYOUT to "3 bedrooms + study". Swap the photo for a larger family living and dining room with a 6-seat table. Everything else stays the same. Prefer A, because B is close to SG Property's new "Freehold 3-Bedroom + Study" ad (copy flag 14). B and C6 (3BR Premium) are both 3-bedroom ads, so don't run them in the same ad set.

**9:16:** make the card taller. Give the photo the top 38% of the card, keep all six rows at full size with more spacing, and start the eyebrow below the top 14%. The button must sit above the bottom 20%, so leave stone canvas below the card.

---

## C5. Resort / facilities (blind): full-bleed dusk pool with a level-stack strip

- **Headline (A):** Imagine coming home to a resort every evening.
- **Subhead:** Rare freehold condo, 6-min walk to Boon Keng MRT & a hawker centre.
- **Level-stack strip (copy-approved, top to bottom, no storey numbers):**
  - ROOF: Star-gazing lawn · Farm-to-table planters
  - SKY TERRACE: Sky gym · Sauna · Co-working deck
  - POOL DECK: Infinity pool · Spa pool · Cabanas
- **Footer chip:** 47 FACILITIES · 4 LANDSCAPED LEVELS (drop it with Headline B)
- **CTA:** GET PRICE LIST & E-BROCHURE (lantern-gold pill with dusk-navy text, bottom left)
- **Label:** IMAGE SAMPLE ONLY – not the actual development. **Fine print:** Walk/drive times per developer.
- **Visual:**
  - **Preferred:** the official facilities or pool-deck render, if GoAhead has the rights (perf S7). Retouch out any building name or logo.
  - **Fallback:** a cinematic dusk infinity pool. It is framed on water, palms, cabanas and sky only, with **no tower or facade**, so it never stands in for the real building.
  - The level strip is a set of text cards, not a building cross-section drawing, so it needs no diagram label.
  - Karaoke and the kids club are left out because the sources conflict on their storey (copy flag 9).

**Full prompt (with text)**

```text
Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo, in a full-bleed holiday-brochure layout. The whole frame is a cinematic photoreal dusk photograph of a long resort-style infinity pool seen from a low angle at the water's edge, glassy long-exposure water reflecting a deep blue-to-violet dusk sky (approx. #1C2C4C to #3E5A8A), warm lantern-gold lights glowing along a timber deck, a pair of white cabanas and tall palms on the left, low tropical planting, a soft warm glow on the horizon, 24mm lens, calm and luxurious, no buildings in view. TOP 24% of the frame, left 66%: a small solid red tag (approx. #D0021B) with "SINGAPORE HOMEBUYER" in white bold all-caps sans-serif with wide letter-spacing, about 22 px; below it, the headline in a light, airy, high-contrast white serif, about 64 px, left-aligned over 3 lines, reading "Imagine coming home to a resort every evening."; below it, the subhead in regular white sans-serif, about 23 px, reading "Rare freehold condo, 6-min walk to Boon Keng MRT & a hawker centre." RIGHT 30% of the frame, from about 30% to 76% of the frame height: a translucent frosted dusk-navy vertical strip (about 60% opacity) with rounded corners, holding three stacked cards joined by a thin lantern-gold vertical line with a small gold dot at each card; each card has a small lantern-gold (approx. #E9B45A) spaced all-caps title and white items on separate lines, about 21 px: card 1 title "ROOF", items "Star-gazing lawn", "Farm-to-table planters"; card 2 title "SKY TERRACE", items "Sky gym", "Sauna", "Co-working deck"; card 3 title "POOL DECK", items "Infinity pool", "Spa pool", "Cabanas". BOTTOM 22% of the frame, over a gentle darkening of the photo: on the left, a lantern-gold outline chip reading "47 FACILITIES · 4 LANDSCAPED LEVELS" in small gold all-caps sans-serif; below it, tiny white fine print, about 15 px, reading "Walk/drive times per developer."; a clear empty strip about 60 px tall; then a solid lantern-gold pill button, about 62% of the frame width, left-aligned, with "GET PRICE LIST & E-BROCHURE" in bold dusk-navy all-caps sans-serif. Bottom-right corner: small italic white text on a subtle dark translucent strip reading "IMAGE SAMPLE ONLY – not the actual development". Look: relaxed, sensory, five-star resort brochure at dusk; every string crisp, legible at mobile size and rendered exactly once. Avoid: any condo tower, building facade or high-rise in the background; any project, condo, building, developer, hotel or mall name, logo or signage; people or swimmers; any price, dollar sign, psf, unit count or "% sold"; storey or level numbers; district codes or street addresses; misspelled, warped, duplicated or extra text beyond the quoted strings; watermarks; MRT/LTA logos or signage; QR codes, phone numbers. Genre: Singapore property paid-social static ad.
```

**Image-only prompt (add text in Canva)**

```text
Portrait 4:5 image, 1080x1350 px, with no text of any kind, full-bleed: a cinematic photoreal dusk photograph of a long resort-style infinity pool seen from a low angle at the water's edge, glassy long-exposure water reflecting a deep blue-to-violet dusk sky, warm lantern-gold lights glowing along a timber deck, a pair of white cabanas and tall palms on the LEFT side, low tropical planting, a soft warm glow on the horizon, 24mm lens, calm and luxurious, no buildings in view. RESERVED TEXT ZONES, kept calm and low in detail: the top 24% of the frame across the left two-thirds is open dusk sky for a tag, a 3-line headline and a subhead; the right 30% of the frame from 30% to 76% height is quiet water and sky for a translucent strip of three stacked text cards; the bottom 22% darkens gently into deep blue with low detail for a chip, fine print, a licence strip and a pill button, with a calm bottom-right corner for a label. Look: relaxed, luxurious, sensory. Avoid: any text, letters, numbers, logos or watermarks; any tower, building facade or high-rise; signage; people or swimmers.
```

Build the frosted strip, the three cards, the gold line, the chip and the pill in Canva. If the official render is cleared, swap it in and check that the right 30% and the top band stay calm enough for text. Darken them with a gradient if needed.

**B-swap:** use the headline "47 Facilities Over 4 Landscaped Levels. Rare Freehold." Drop the "47 FACILITIES · 4 LANDSCAPED LEVELS" chip, because it would repeat the headline. The level strip, subhead and photo stay the same.

**9:16:** extend the sky upward and the water downward. Put the tag and headline just below the top 14%. Move the level strip to a full-width horizontal row of three cards in the middle third, and keep the chip, fine print and gold pill above the bottom 20%.

---

## C6. Real floor plan (blind): architect's plan sheet with a N/S compass and a 2.85m scale

> **Needs the official floor plan.** Composite the developer's 3-Bedroom Premium plan (1,087–1,195 sqft) into the reserved plan zone in Canva. First remove the project name, developer logo, unit codes and any stack or storey references (perf C3-1, S7). If the official plan isn't available or cleared, the plan carries **ILLUSTRATIVE LAYOUT ONLY**. Both headlines still hold in that case, because neither claims to show "the real layout" (copy-arcady C6). **Build 9:16-first** (perf C6-3).

- **Headline (A):** Every Home Faces North or South
- **Subhead:** Rare freehold condo. 6-min walk to Boon Keng MRT & Bendemeer Mall.
- **Plan sheet annotations (copy-approved):**
  - A large compass arrow labelled **N** and **S**.
  - A vertical dimension line labelled **2.85m** on the left edge.
  - Chips: "3-BEDROOM PREMIUM" · "[exact sqft of the plan shown]" · "RARE FREEHOLD".
  - "ILLUSTRATIVE LAYOUT ONLY" only if the plan isn't official.
- **Plan:** use the official plan's own room labels only. Add no dimensions or room names that aren't on the official drawing. The sqft chip must match the plan shown exactly (one figure from 1,087 to 1,195). The mock-up below uses a placeholder.
- **CTA:** GET PRICE LIST & E-BROCHURE (terracotta square-cornered button inside a ruled title block)
- **Labels:**
  - Inset: IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY.
  - Compass and height scale: Illustrative diagram, not to scale.
  - Plan: ILLUSTRATIVE LAYOUT ONLY, only if not official. If the official plan has its own developer disclaimer, keep that too.
- **Fine print:** Walk times, orientation and ceiling heights per developer.
- **Phone legibility (perf C3-3):** the plan zone is about 940 px wide. Bump the official room labels in Canva if they read below about 16 px.

**Full prompt (with text, mock-up only. The plan drawn here is a placeholder and must never be published)**

```text
Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo, as an architect's plan sheet. Background: warm off-white drafting paper (approx. #F3EBDD) with a very faint fine graphite grid and subtle paper grain, a thin graphite border inset 28 px from every edge. TOP 17% of the frame, inside the border with 48 px margins: a small eyebrow reading "SINGAPORE HOMEBUYER" in bold red (approx. #D0021B) all-caps sans-serif with wide letter-spacing, about 22 px; below it, the headline in a bold condensed technical sans-serif in graphite (approx. #3A3A3A), about 64 px, left-aligned over 2 lines, reading "Every Home Faces North or South". PLAN ZONE, from about 19% to 74% of the frame height, starting 120 px from the left edge and ending 48 px from the right edge: a clean thin black-line architectural floor plan of a 3-bedroom apartment in top-down orthographic view, with simple wall thickness, door swings and window marks, and small graphite room labels "LIVING / DINING", "KITCHEN", "BEDROOM 1", "BEDROOM 2", "BEDROOM 3", "BATH", "BATH" and "BALCONY", with no dimensions. Bottom-left inside the plan zone: tiny graphite text reading "ILLUSTRATIVE LAYOUT ONLY". Overlapping the top-right corner of the plan zone: a large compass, about 200 px across, a thin graphite circle with a bold terracotta (approx. #C0603A) arrow pointing straight up, a bold letter "N" at the top and "S" at the bottom in graphite technical sans. Along the left edge, beside the plan zone: a tall vertical graphite dimension line with terracotta tick marks at both ends, and the label "2.85m" in bold terracotta monospaced type, about 34 px, beside its midpoint. Just under the compass: tiny grey italic text reading "Illustrative diagram, not to scale." Overlapping the bottom-right corner of the plan zone: a small square inset photo, about 230 x 230 px, with a thin white border and soft shadow, showing a bright condo living room with tall full-height windows and soft daylight; on it, tiny italic white text on a dark translucent strip reading "IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY". Below the plan zone: a row of three graphite-outline chips with square corners and graphite monospaced all-caps text: "3-BEDROOM PREMIUM", "1,087 SQFT", "RARE FREEHOLD". Then the subhead in regular graphite sans-serif, about 24 px, reading "Rare freehold condo. 6-min walk to Boon Keng MRT & Bendemeer Mall."; tiny grey fine print, about 14 px, reading "Walk times, orientation and ceiling heights per developer."; a clear empty strip about 56 px tall; then at the bottom, a ruled architect's title block (a thin graphite rectangle divided into cells) whose main cell holds a solid terracotta rectangular button with square corners, with "GET PRICE LIST & E-BROCHURE" in bold white all-caps sans-serif. Look: precise, architectural, quietly expert, like a real drawing set on a studio desk; every string crisp, legible at mobile size and rendered exactly once. Avoid: any project, condo, building, developer or architect name or logo on the plan, in the title block or anywhere else; unit-type codes, stack or storey numbers; dimensions or area figures on the plan; furniture clutter on the plan; any price, dollar sign, psf, unit count or "% sold"; sun-path or "no west sun" graphics; district codes or street addresses; misspelled, warped, duplicated or extra text beyond the quoted strings; watermarks; building exteriors or towers; people; QR codes, phone numbers. Genre: Singapore property paid-social static ad.
```

**Image-only prompt (add text in Canva, with a reserved plan zone)**

```text
Portrait 4:5 image, 1080x1350 px, with no text, letters, numbers or symbols of any kind. Background: warm off-white drafting paper (approx. #F3EBDD) with a very faint fine graphite grid and subtle paper grain, evenly covering the whole frame, and one thin plain graphite border line inset 28 px from every edge. TOP 17% of the frame: plain paper only, reserved for an eyebrow and a 2-line headline. RESERVED PLAN ZONE, from about 19% to 74% of the frame height, starting 120 px from the left edge and ending 48 px from the right edge: completely plain paper with no lines, grid emphasis or marks, reserved for an official floor plan, a compass in its top-right corner and a vertical dimension line along its left side. Overlapping the bottom-right corner of that zone: a small square photo inset, about 230 x 230 px, with a thin white border and soft shadow, showing a bright, premium condo living room with tall full-height windows and soft daylight, photoreal. BOTTOM 26% of the frame: plain paper only, reserved for three chips, a subhead, fine print, a licence strip and a title-block button. Look: precise, tactile, architectural drawing sheet. Avoid: any text, letters, numbers, logos or watermarks; any floor plan, room lines, compass, arrows, dimension lines or furniture; building exteriors or towers; people; anything drawn in the reserved areas besides the faint grid.
```

Best practice: generate only the paper texture and the inset photo. Draw the compass, the 2.85m dimension line, the chips and the title block as Canva shapes, then drop in the official plan. This keeps the plan zone a guaranteed clean rectangle.

**B-swap:** use the headline "2.85m Ceilings in Living Rooms and Bedrooms". Make the 2.85m dimension line the largest element: extend it to the full height of the plan zone and set "2.85m" at about 72 px. Shrink the compass to about 120 px. The chips, subhead and plan stay the same.

**9:16 (primary format):** make the plan zone about 50% of 1920 px tall so the official plan scales up and its room labels read clearly. Start the headline below the top 14%. Run the 2.85m line the full height of the plan zone and put the compass top-right of the plan. Stack the three chips, subhead, fine print and title block above the bottom 20%.

---

## C7. Checklist (blind): hand holding a phone with a Notes-style checklist

- **Headline (A), set as the note title on the screen:** Freehold? Boon Keng MRT? Schools? Tick, Tick, Tick.
- **Subhead, set as a caption under the phone:** 6-min walk to Boon Keng MRT. City Square Mall 3-min drive.
  - Per perf N3, drop it if the frame gets crowded, because tick 2 already carries the MRT walk.
- **Notes ticks (copy-approved, 6):**
  - ☑ Rare freehold condo
  - ☑ 6-min walk to Boon Keng MRT
  - ☑ 7-min walk to primary school
  - ☑ Hawker centre, 6-min walk
  - ☑ Park connector, 8-min walk
  - ☑ Every home faces north/south
- **On-image MOE line:** School admission subject to MOE regulations and balloting.
- **CTA:** GET PRICE LIST & E-BROCHURE (white capsule with black text and a red tick icon)
- **Label:** IMAGE SAMPLE ONLY (a lifestyle photo of a hand and phone, not the project). **Fine print:** Walk/drive times per developer.
- **Visual:**
  - A photoreal adult hand (wrist and hand only) holding a generic modern phone upright in the centre of the frame.
  - The screen is **blank**. The yellow Notes-style UI, title and ticks are built in Canva.
  - The background is a softly blurred tree-lined residential street with sage-green bokeh.
  - No face, no phone brand or app logos, no status bar, and no readable signs or shopfronts.
- **Production (perf C7-2 precedent):** reject any generation where the hand or phone looks fake. Composite a licensed hand-and-phone photo if needed.

**Full prompt (with text)**

```text
Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo. The whole frame is a photoreal photograph: an adult's hand entering from the lower right, wrist and hand only, holding a generic modern smartphone upright with a thin dark bezel, centred horizontally, the phone filling about 56% of the frame height from about 14% to 70%; background a softly blurred, tree-lined residential street in dappled late-morning sunlight, creamy muted sage-green bokeh (approx. #8FA58A), 50mm lens at f/2, natural and calm. Top-left of the frame: a small solid red tag (approx. #D0021B) with "SINGAPORE HOMEBUYER" in white bold all-caps sans-serif with wide letter-spacing, about 22 px. ON THE PHONE SCREEN: a plain Notes-style note with a soft notes-yellow background (approx. #FFF3B0), no app name, no logo and no status bar; at the top, the note title in bold black (approx. #111111) system-UI sans-serif, about 34 px, over 2 lines, reading "Freehold? Boon Keng MRT? Schools? Tick, Tick, Tick."; below it, six checklist rows, each with a round red (approx. #D0021B) filled checkbox holding a white tick and the item in regular black system-UI sans-serif, about 25 px: "Rare freehold condo"; "6-min walk to Boon Keng MRT"; "7-min walk to primary school"; "Hawker centre, 6-min walk"; "Park connector, 8-min walk"; "Every home faces north/south". Under the checklist on the screen: tiny grey text, about 14 px, reading "School admission subject to MOE regulations and balloting." Small italic white text on a subtle dark translucent strip at the top-right of the frame reading "IMAGE SAMPLE ONLY". BOTTOM 28% of the frame, over a soft dark-green gradient: the caption in regular white sans-serif, about 24 px, centred, reading "6-min walk to Boon Keng MRT. City Square Mall 3-min drive."; tiny white fine print, about 14 px, reading "Walk/drive times per developer."; a clear empty strip about 56 px tall; then a white capsule button, about 80% of the frame width, centred, with a small red round tick icon on the left and "GET PRICE LIST & E-BROCHURE" in bold black all-caps sans-serif. Look: playful, brisk, relatable, like a buyer checking their own shortlist on the go; every string crisp, legible at mobile size and rendered exactly once. Avoid: faces or any identifiable person beyond one hand; phone brand logos, camera branding, real app logos, app names, status bars, notification icons or keyboard; readable street signs, shopfronts, building names, mall, school or project names, logos or signage in the background; any condo tower in focus; any price, dollar sign, psf, unit count or "% sold"; district codes or street addresses; extra ticks, crosses or list items; misspelled, warped, duplicated or extra text beyond the quoted strings; watermarks; MRT/LTA logos; QR codes, phone numbers. Genre: Singapore property paid-social static ad.
```

**Image-only prompt (add text in Canva)**

```text
Portrait 4:5 image, 1080x1350 px, with no text of any kind: a photoreal photograph of an adult's hand entering from the lower right, wrist and hand only, holding a generic modern smartphone upright with a thin dark bezel and no visible brand, centred horizontally, the phone filling about 56% of the frame height from about 14% to 70%, the screen facing the camera perfectly flat and evenly lit, showing a completely blank, uniform light-grey screen with no interface, icons or reflections, ready for screen replacement; background a softly blurred, tree-lined residential street in dappled late-morning sunlight, creamy muted sage-green bokeh, 50mm lens at f/2, natural and calm. RESERVED TEXT ZONES: the top 14% is soft bokeh only, for a small tag and a label; the bottom 28% darkens gently into a soft deep-green gradient with low detail, for a caption, fine print, a licence strip and a capsule button. Look: natural, relatable, clean. Avoid: any text, letters, numbers, logos or watermarks; phone brand logos or camera branding; any interface on the screen; faces or more than one hand; readable signs, shopfronts or buildings in focus.
```

Build the yellow note, the title, the six red-tick rows and the MOE line in Canva as a flat screen layer, then corner-pin it onto the blank screen. Use one tick icon for all six rows so they match.

**B-swap:** use the headline "Your New-Home Checklist, Ticked: Rare Freehold Condo". It already says "rare freehold condo", so drop tick 1 and keep the other five with slightly more spacing (the Amber House C7 precedent, copywriter to confirm). The MOE line stays, because the schools tick stays. Everything else stays the same.

**9:16:** this suits the phone best. Make the phone about 60% of the frame height so the six ticks read at a larger size. Start the tag and phone top below the top 14%. Put the caption, fine print and capsule above the bottom 20%, extending the bokeh gradient below.

---

## Flags

1. **No performance sign-off yet.**
   - `perf-review.md` has no Arcady section. `research-arcady.md` and `copy-arcady.md` are not yet marked Approved.
   - The user chose the shortened flow (researcher, then copywriter, then static-designer, then one performance check at the end), as with Amber House. Performance should review research, copy and these prompts together.
   - There is no `brief.md` and no `creative-spec.md` approval box for this run.
   - Any generation, including tests, needs the user's own approval in chat with the estimated cost shown first. "Run the whole thing" covers writing the prompts, not paid generation.
2. **The lead's picks need the user's visibility.**
   - C3 uses Headline A (9 words, over the ≤8 rule, the user's own formula).
   - C5 is Resort / facilities. The HDB-upgrader alternative is in copy flag 12.
   - The lead made both calls under the user's delegation. Performance should note them in its verdict.
3. **Official assets and rights (perf S7).**
   - `inputs/product-images/` is empty and no images were fetched.
   - The client needs to confirm rights to:
     - C1: the exterior render.
     - C4: the 2BR+Study interior render (B: 3BR Premium+Study).
     - C5: the facilities or pool-deck render.
     - C6: the 3BR Premium plan and the inset.
   - Without them, C1, C4 and C5 fall back to generated images that contain no building. C6 falls back to ILLUSTRATIVE LAYOUT ONLY.
   - Retouch any project name or developer logo out of official renders before use on C2–C7.
4. **C6 plan.**
   - Strip the project name, logo, unit codes and stack or storey references before compositing.
   - The sqft chip must show the exact figure for the plan used.
   - The plan in the full prompt is a placeholder and must never be published.
   - Neither headline claims the plan is real, so C6 can run with an illustrative plan, labelled.
   - The compass and 2.85m scale carry "Illustrative diagram, not to scale."
5. **Stock checks within 48h of launch (perf S4, copy flag 7):**
   - C4 A: 2BR+Study.
   - C4 B: 3BR Premium+Study.
   - C6: 3BR Premium.
   - "AVAILABLE TYPE" on C4 prints only if the stock is confirmed.
6. **C4 fallback label.** If the official interior isn't cleared, the label reads "IMAGE SAMPLE ONLY – not the actual unit" (perf C4-3). QA should confirm that a generic interior under a specific unit title is acceptable.
7. **C3 diagram.**
   - No North East Line purple or other real line colours, no LTA/MRT logos and no station codes.
   - I added the in-between tick marks, the unlabelled interchange ring and the 45° step at Dhoby Ghaut MRT so the strip matches the developer's "3 stops / 5 stops, change at Dhoby Ghaut MRT". These add no new text.
   - "DHOBY GHAUT MRT" and "RAFFLES PLACE MRT" are kept word for word from the copy, without "MRT". The full-name rule's example is Boon Keng MRT. If the lead wants it applied to every node, change them to "DHOBY GHAUT MRT" and "RAFFLES PLACE MRT" (copywriter to proof). The same applies to C1's "TO DHOBY GHAUT MRT".
   - Our own live "Rare Freehold Condo Near Boon Keng MRT" ad is close to C3. Pausing it before launch is the user's call (copy flag 14).
8. **MOE line** on C2 and C7, word for word from the copy's on-image strings. No school is named on C7. Nothing implies P1 priority, and P1 eligibility for a 2028-TOP address is unverified.
9. **C7 subhead vs tick 2.** Both carry the 6-min walk to Boon Keng MRT. The subhead is set as an optional caption, and perf N3 allows dropping it.
10. **C1 deviations and risks.**
    - I left out the copywriter's small-caps "THE ARCADY" kicker, because Headline A already opens with the name. Copywriter to confirm.
    - The developer, JV partners and architect never appear on the image.
    - If GoAhead isn't CEA-authorised to market this project, C1 is Blocked (S3). Three "The Arcady" Facebook pages also compete for name-aware buyers.
11. **Eyebrow style.** C1, C2, C5 and C7 use a red tag with white letters, for legibility on green, teal, dusk and bokeh. C3, C4 and C6 use red text. Change this if the client wants red text everywhere.
12. **Designer-set details for the copywriter to proof:**
    - C4 row labels in caps (TENURE / SIZE / LAYOUT / FITTINGS / FACING / EXPECTED TOP), copied from the copy's "Tenure:" etc.
    - The placement of "Illustrative diagram, not to scale." on C6.
    - Dropping tick 1 in the C7 B-swap.
    - C5's subhead and strip both say "Infinity pool". Both are copy-approved, so this is a mild repeat.
13. **Licensed stock or generation approval** is needed for C2 (family), C7 (hand and phone) and the fallbacks for C1, C4 and C5.
14. **Lead form and links (copy flag 6, perf S5):**
    - The form's first screen must reveal "The Arcady at Boon Keng", because C2–C7 hide it.
    - It needs a budget question with the cut-off band around the 1.9M mark.
    - **Never link `thearcady.com.sg`** (spam). Use `the-arcady.com.sg` only.
    - The Meta button is "Download".
15. **Housing special ad category.** "Family", "commuter" and "resort lover" are messages only. They must never become age, gender or postcode targeting.
16. **"Resort" on C5 is evocative copy, not a claim.** QA should confirm it is acceptable next to the real facility facts (copy flag 15).
