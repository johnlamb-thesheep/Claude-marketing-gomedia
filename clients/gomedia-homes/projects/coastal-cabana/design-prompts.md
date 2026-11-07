# Coastal Cabana EC: Image Prompts (GoAhead, 7 ads, 7 different layouts)

> **2026-11-07:** see **"Revision 2 — 3-angle set (2026-11-07)"** at the bottom of this file: one ready-to-paste prompt per ad (4:5 + 9:16) for R2-A Direct (price-led), R2-B Floor plan (illustrative) and R2-C Price + near MRT. Revision 1 below is kept unchanged as the record.

Revision 1, written 2026-11-05 by static-designer. The user asked in chat for the same full chain used on the other three projects. **These are prompts only.** Nothing has been generated and no paid call has been made.

- **Copy source:** `copy-coastal-cabana.md`, Revision 1.
  - Headline A, the subhead, the on-image strings and the layout column are used word for word.
  - Headline B appears as a swap line under each ad.
  - The few strings I had to add, combine or reorder are listed in Flag 4 for the copywriter to proof.
- **Facts source:** `research-coastal-cabana.md`, CONFIRMED rows and the §8 EC compliance notes only.
- **Format source:** `hougang-central-prompts.md`. The structure is the same. Every palette is new.
- **This project is launched and under construction. Its building does not exist yet:**
  - No ad shows an AI-generated condo tower, facade or anything that could pass for the project (perf C1-1).
  - Official developer renders and plans exist on coastalcabana.com.sg, but **who runs that site and whether GoAhead has rights to its assets are both unconfirmed** (copy Flag 6, perf S7). Every slot that would use an official asset has a fallback.
  - `inputs/product-images/` is empty. No images were fetched.
- **Hard rules on every ad (fine print included):**
  - No price, dollar sign, psf, monthly figure, discount or grant amount.
  - No unit counts, block counts, "% sold", "last units" or any scarcity.
  - No district code, no street names and no "Loyang". The area is "Pasir Ris".
  - "EC" or "executive condominium" only. Never "freehold", "condo" alone or "private condo".
  - **No preview, VVIP, "launching soon" or "be the first" wording.** The stage is "show flat open for viewing".
  - **No walk minutes and no metre figures.** Locations are "near/nearby", plus "opposite Downtown East" (copy Flag 9).
  - **Full MRT names on every label:** Pasir Ris MRT, Pasir Ris East MRT.
  - **The Cross Island Line is always labelled `FROM 2030 (TARGET)`** wherever it is labelled on an image (C7).
  - No real MRT line colours (East-West Line green, Cross Island Line lime, and the red, purple, orange/yellow, blue and brown lines). No LTA or MRT logos, no station codes, no real map tiles.
  - **Only C1 shows "Coastal Cabana".** The developers stay in C1's primary text and never appear on an image.
  - C2–C7 ban every project, developer, mall, school, Downtown East, theme-park, water-park and resort name, logo and sign from the imagery. The quoted copy strings ("Downtown East", "White Sands", "Casuarina Primary School" and so on) are typeset in Canva, and that is allowed.
  - **No identifiable real landmarks on any ad, C1 included.** That means no theme-park rides, water slides, roller coasters, Ferris wheels, recognisable jetties or park sculptures, and no offshore islands (this keeps Coney Island out).
  - People are never identifiable. Show them from behind, in soft focus or as distant silhouettes. Drawn figures have no facial features.
- **Brand constants (everything else changes per ad):**
  1. The red `SINGAPORE HOMEBUYER` eyebrow (#D0021B).
     - It is a small solid red tag with white letters on the photo, dark and blueprint backgrounds (C1, C3, C5, C6).
     - It is red text on the light backgrounds (C2, C4, C7).
  2. The CTA `GET PRICE LIST & E-BROCHURE` on all 7. Its shape and colour change per ad. The Meta button is **"Download"**, not GET_QUOTE (copy rule, perf S5).
  3. Image labels:
     - `IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY` is used **only** where an official developer render or plan is composited: the C1 swap-in render, the C5 swap-in render, and the C6 plan and inset.
     - Every generic, stock, generated or illustrated image gets `IMAGE SAMPLE ONLY – not the actual development` (C1 fallback, C2, C3, C5 fallback).
     - The C7 map gets `Illustrative map, not to scale.`
     - The C6 fallback plan gets the copy's `ILLUSTRATIVE LAYOUT ONLY, not to scale`.
     - C4 has no image and needs no image label.
- **Fine print (copy-approved base strings, combined per ad):**
  - Every ad's fine print starts with `EC eligibility conditions apply.`
  - Base on all 7: `EC eligibility conditions apply. 99-year leasehold. Distances approx., straight-line.`
  - C2 adds the MOE line: `School admission subject to MOE regulations and balloting.`
  - C3 adds `Sea views from selected units only.`
  - C4 uses its own copy string, followed by the base lines.
  - C5 adds `Facilities per developer and published reviews; subject to final design.`
  - C6 adds `Sizes approx., per developer; subject to final survey.`
  - C7 adds `Cross Island Line targeted for 2030; timeline subject to change.`
  - A clear strip of about 60 px above each CTA, kept empty for the CEA particulars (perf S3).
- **Workflow (perf S2, mandatory):**
  - Generate with the **image-only prompt**, which leaves the text zones empty.
  - Set every string in Canva or Figma, and proof each character against `copy-coastal-cabana.md`.
  - Draw panels, tiles, tables, chips, badges, icons, pins, lines and buttons as Canva shapes in the exact hex. Treat any generated colour as a placeholder.
  - **C4 and C7 can be built entirely in Canva with no generation at all.** C6 is a Canva build around the official plan. Their image-only prompts are optional backgrounds.
  - The "full prompt (with text)" is for a quick layout mock-up only. Never publish its rendered text.
- **9:16 (perf S1):** each ad has an adaptation note. At 1080x1920, keep all text clear of the top 14% (about 270 px) and the bottom 20% (about 385 px).

---

## Design at a glance

| Ad | Angle / hook | Headline A (on image) | Layout | Colours | Type treatment | Photo / visual style | CTA shape | Label |
|---|---|---|---|---|---|---|---|---|
| **C1** | Direct (named). Factual: name + beach and Downtown East | Coastal Cabana EC: Beach & Downtown East Nearby | **Split-screen name card.** Left 55% coastal image, right 45% solid panel with the name lockup and 3 stacked fact tiles | Deep sea-blue (#0B4F6C), sand-white (#F8F1E7), sun coral (#F07C5A) | **Wide geometric sans** (Montserrat ExtraBold / Gotham Black style), widely tracked caps for the name | **Calm, empty east-coast shoreline** at soft morning light, casuarina trees, no buildings. Official exterior render only as a swap-in | **Sand-white capsule** inside the panel with a small sea-blue wave glyph | IMAGE SAMPLE ONLY – not the actual development. Swap-in render: IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY |
| **C2** | Family. Emotional question | Looking for a home for your family? | **Fridge-door board.** Child's crayon drawing held by 2 magnets, 3 sticky notes, a round magnet badge | Fridge white (#F4F5F2), graphite (#30363B), crayon blue (#2F6FDB), sunflower (#FFD43B), grass (#57B947); notes in lemon (#FFF27A), mint (#BFF0D4) and bubblegum (#FFB9D3) | **Chunky rounded sans** (Baloo 2 ExtraBold style) headline plus **handwriting** (Caveat style) on the notes | **Child's wax-crayon drawing** on paper: house, sun, sea, faceless stick family | **Crayon-blue fridge-magnet button**: thick, rounded, with a magnet's drop shadow | IMAGE SAMPLE ONLY – not the actual development |
| **C3** | Beach / Downtown East lifestyle. Emotional promise | Weekends at the beach. Every weekend. | **Full-bleed beach photo, minimal type.** Headline in the sky, frosted "SAT / SUN" planner strip at the base | Photo-led sunrise grade (peach, gold, soft aqua); warm white type (#FFFDF8); driftwood (#3E322B) on frosted glass | **Large high-contrast display serif** (Canela / Playfair Display style) headline, **thin geometric sans** (Jost Light style) on the chips | **Photoreal sunrise shoreline**, a family walking away from camera, casuarinas, golden haze | **Frosted-glass pill**, translucent white with a hairline white border, driftwood text | IMAGE SAMPLE ONLY – not the actual development |
| **C4** | Earlier EC rules (Price slot). Factual comparison | Comparing ECs? This One Has a 5-Year MOP. | **Two-column rules table** on a document card. 2 rows only, boxed footnote | Cool paper (#F2F4F3), slate ink (#1E2B33), lagoon blue (#1B7FA6), pale lagoon tint (#D9EEF4) | **Editorial text serif** (Source Serif Semibold style) headline, **plain grotesk** (IBM Plex Sans style) table | **No photo.** Pure document UI. No ticks, crosses, arrows, money or charts | **Slate-ink square-cornered "form submit" bar** with a thin lagoon underline | None (no image) |
| **C5** | Facilities / resort living. Aspirational | Resort-Style Weekends, Right at Home | **Big-numeral brochure page.** Pool photo top half, giant "65+" straddling the seam, 2x3 icon grid below | Pool turquoise (#13B2C2), clean white (#FCFEFE), mango numeral (#FF9F1C), deep lagoon icons (#075E73) | **Ultra-condensed poster numeral** (Anton / Bebas Neue style), **friendly geometric sans** (Poppins style) labels | **Bright midday resort-pool photo**, palms and loungers, no tower behind it. Official facilities render only as a swap-in | **Mango ticket-stub button** with a perforated edge and notched ends | IMAGE SAMPLE ONLY – not the actual development. Swap-in render: IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY |
| **C6** | 3-bedroom floor plan. "See the space" | See How 3 Bedrooms Fit in 872 sqft (official plan only) | **Blueprint hero.** Reserved full-width plan zone on a cyanotype grid, round render inset, masking-tape chip | Cyanotype blue (#123E7C), pale grid (#E4EEF8), drafting white (#F9FBFD), masking-tape cream (#F1E3B8) | **Technical condensed sans** (Barlow Condensed / DIN Condensed style) headline, **monospaced** dimension callouts | **The official 3BR plan, composited in Canva.** The background is a flat drafting grid only | **Cyanotype "drawing title-block" button** with a thin double border | IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY (official plan). Fallback: ILLUSTRATIVE LAYOUT ONLY, not to scale |
| **C7** | Location + MRT as a map. Factual, forward-looking | Near Pasir Ris MRT. Cross Island Line Coming. | **Illustrated neighbourhood map.** Coastline at the top, solid East-West Line, dashed Cross Island Line, a big "HOME" pin and 6 labelled pins | Lagoon-jade sea (#5DBFA8), dune-sand land (#F0E4C8), slate-graphite solid line (#2F3A3F), berry dashed line (#B8327A), soft park green (#A6CF98) | **Bold slab serif** (Zilla Slab Bold style) headline, **compact bold sans caps** for pin labels | **Flat vector map.** No real tiles, no line colours, no islands | **Berry map-legend pill** with a white location-pin icon at its left end | Illustrative map, not to scale. |

How the seven differ:
- **Layout:** split-screen card, fridge door, full-bleed photo, document table, brochure page with a giant numeral, blueprint sheet, vector map.
- **Colour:** sea-blue with coral, fridge white with crayon primaries, sunrise photo with frosted white, paper with slate and lagoon, turquoise with mango, cyanotype with tape cream, jade and sand with graphite and berry.
- **Type:** wide geometric caps, chunky rounded with handwriting, display serif with thin sans, text serif with grotesk, poster numerals with geometric sans, technical condensed with mono, slab serif with compact caps.
- **Visual source:** empty shoreline photo, crayon drawing, lifestyle beach photo, none, resort-pool photo, official plan, vector.
- **CTA:** sand capsule, fridge magnet, frosted pill, form-submit bar, ticket stub, title-block, map-legend pill.

None of the Amber House, Arcady or Hougang hex values are reused. The only shared hex is the brand-constant red (#D0021B). The palette is coastal, but each ad has its own hue family. Where the copywriter's palette column would have doubled up inside this set (coral on C1, C5 and C7) or echoed an earlier set (charcoal and teal), I changed the colours and kept the layout. See Flag 5.

---

## C1. Direct (named): split-screen name card

- **Headline (A):** Coastal Cabana EC: Beach & Downtown East Nearby
  - Set it as two parts in the right panel. The name is in big caps over 2 lines ("COASTAL" / "CABANA EC:"). The tail "Beach & Downtown East Nearby" is in sun coral.
  - **The name and "EC:" sit on their own text layer.** The colon stays so Headline A reads word for word (Hougang C1 precedent).
- **Descriptor line (copy-approved, small, directly above the name):** EXECUTIVE CONDOMINIUM · PASIR RIS
  - The copy puts this line under the name. I moved it above so the headline reads in one unbroken run (Flag 4).
- **Subhead:** 3-bedroom EC homes from 872 sqft, near Pasir Ris MRT & White Sands.
- **3 stacked fact tiles (copy-approved, none repeats Headline A):**
  - **3-BEDROOM** / FROM 872 SQFT
  - **65+ FACILITIES** / PER DEVELOPER
  - **SHOW FLAT** / OPEN FOR VIEWING
- **CTA:** GET PRICE LIST & E-BROCHURE (sand-white capsule with a small sea-blue wave glyph)
- **Fine print:** EC eligibility conditions apply. 99-year leasehold. Distances approx., straight-line.
- **Label:** IMAGE SAMPLE ONLY – not the actual development (bottom-left of the photo half)
- **Visual:**
  - **Fallback, used until rights are confirmed:** a calm, empty Singapore-style east-coast shoreline in soft morning light. There are casuarina trees on the left, pale sand, a flat calm sea and a hazy horizon, perhaps with one or two tiny distant cargo ships.
  - **No buildings of any kind**, no people, no jetty, boardwalk, sculpture, shelter sign or offshore island. It must not look like a specific, recognisable beach spot.
  - **Never an AI tower** captioned or implied as Coastal Cabana (perf C1-1).
  - The developers (Qingjian Realty, Forsea Holdings) stay in the primary text only.
  - **Swap-in, once rights to the official exterior render are confirmed (perf S7, copy Flag 6):** it replaces the shoreline in the left 55%, cropped tall. Retouch out any logo or project wordmark, and change the label to `IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY`.

**Full prompt (with text)**

```text
Portrait 4:5 social media ad, 1080x1350 px, for a Singapore executive condominium, as a split-screen name card. LEFT 55% of the frame (full height, 594 px wide): a photoreal photograph of a calm, empty Singapore-style east-coast shoreline in soft early-morning light, a row of feathery casuarina trees on the left edge, pale sand in the foreground, a flat calm sea and a hazy horizon with one or two tiny distant cargo ships, gentle cool-blue and sand tones, no buildings anywhere. Bottom-left of the photo: small italic white text on a subtle dark translucent strip reading "IMAGE SAMPLE ONLY – not the actual development". RIGHT 45% of the frame (486 px wide): a solid deep sea-blue panel (approx. #0B4F6C) with 40 px inner padding and a crisp vertical edge against the photo. Inside the panel, from the top: a small solid red tag (approx. #D0021B) with "SINGAPORE HOMEBUYER" in white bold all-caps sans-serif with wide letter-spacing, about 20 px; below it, a small sand-white (approx. #F8F1E7) all-caps line with wide tracking, about 16 px: "EXECUTIVE CONDOMINIUM · PASIR RIS"; below it, the project name in a wide, heavy geometric sans-serif (Montserrat ExtraBold / Gotham Black style), sand-white, about 64 px, widely tracked, left-aligned on exactly two lines: "COASTAL" and "CABANA EC:"; directly below, the headline tail in the same geometric sans, bold, sun coral (approx. #F07C5A), about 38 px, on two lines: "Beach & Downtown East Nearby". Then three stacked full-width tiles, about 406 x 104 px each with 14 px gaps, each a slightly lighter translucent sea-blue fill with a 4 px sun-coral bar on its left edge; each tile holds a bold sand-white all-caps figure, about 30 px, with a small sand-white all-caps caption beneath, about 15 px: tile 1 "3-BEDROOM" with caption "FROM 872 SQFT"; tile 2 "65+ FACILITIES" with caption "PER DEVELOPER"; tile 3 "SHOW FLAT" with caption "OPEN FOR VIEWING". Below the tiles, the subhead in regular sand-white sans-serif, about 21 px, left-aligned on three lines: "3-bedroom EC homes from 872 sqft, near Pasir Ris MRT & White Sands."; then tiny pale sea-blue-grey fine print, about 13 px, on two lines: "EC eligibility conditions apply. 99-year leasehold. Distances approx., straight-line."; then a clear empty strip about 60 px tall; then a sand-white (approx. #F8F1E7) capsule button spanning the panel width, about 84 px tall, fully rounded ends, with a small sea-blue wave glyph on the left and "GET PRICE LIST & E-BROCHURE" in bold sea-blue all-caps geometric sans-serif, about 20 px. Look: calm, confident, airy coastal, "here's the project"; every string crisp, legible at mobile size and rendered exactly once. Avoid: any condo tower, apartment block, building facade, skyline, construction site or architectural render; people; jetties, boardwalks, sculptures, shelters, signs or offshore islands; theme-park rides, water slides, Ferris wheels or resort signage; developer names or logos; any price, dollar sign, psf, unit count or "% sold"; "freehold", "preview" or "VVIP"; walk or drive minutes, metre figures; district codes or street addresses; MRT/LTA logos, station codes or rail line colours (green, lime, red, purple, orange, yellow, blue, brown); misspelled, warped, duplicated or extra text beyond the quoted strings; watermarks; QR codes, phone numbers. Genre: Singapore property paid-social static ad.
```

**Image-only prompt (add text in Canva)**

```text
Portrait 4:5 image, 1080x1350 px, with no text of any kind. LEFT 55% of the frame, full height: a photoreal photograph of a calm, empty Singapore-style east-coast shoreline in soft early-morning light, a row of feathery casuarina trees on the left edge, pale sand in the foreground, a flat calm sea and a hazy horizon with one or two tiny distant cargo ships, gentle cool-blue and sand tones, no buildings anywhere; keep the bottom-left corner calm for a small label. RIGHT 45% of the frame: a completely flat, solid deep sea-blue panel (approx. #0B4F6C) with a crisp vertical edge. RESERVED TEXT ZONES, all inside the plain panel: 0–8% for a small tag and a descriptor line; 8–30% for a two-line name and a two-line headline tail; 31–56% for three stacked tiles; 57–69% for a three-line subhead and fine print; 69–74% clear strip for licence particulars; 75–82% for a capsule button; below 82% plain panel. Look: calm, airy, coastal. Avoid: any text, letters, numbers, logos or watermarks; any building, tower, skyline or render; people; jetties, boardwalks, sculptures, signs, rides or islands; anything drawn on the panel.
```

The panel is a flat colour, so in practice generate only the left photo (594 x 1350 px, tall crop) and build the panel, tiles and capsule in Canva.

**B-swap:** use the headline "Coastal Cabana: 3-Bedroom Family EC in Pasir Ris". The name layer becomes "COASTAL" / "CABANA:" and the coral tail becomes "3-Bedroom Family EC in Pasir Ris". The headline already says 3-bedroom, so swap tile 1 for **OPPOSITE** / DOWNTOWN EAST, and use the copy-approved B-swap subhead "Near Pasir Ris MRT, Pasir Ris Beach & Downtown East." Tiles 2 and 3 stay the same.

**9:16:** stack the layout. The photo (or swap-in render) fills the top 44% at full width, and the sea-blue panel fills the rest. Start the tag inside the panel (the photo covers the top 14%, which holds no text). Set the name at about 92 px on 2 lines, put the three tiles in one row at about 316 x 150 px, and keep the subhead, fine print, CEA strip and capsule above the bottom 20%, with plain sea-blue below.

---

## C2. Family (blind): fridge-door board

- **Headline (A):** Looking for a home for your family?
- **Subhead:** Pasir Ris EC near Casuarina Primary School, Hai Sing Catholic School & Downtown East.
- **Sticky notes (handwritten style, copy-approved):** "Casuarina Primary nearby" · "Weekends: the beach" · "Downtown East, just opposite"
- **Round magnet badge (copy-approved):** **2 SCHOOLS** / NEARBY
  - Directly under it, in small print, the MOE line: School admission subject to MOE regulations and balloting.
- **CTA:** GET PRICE LIST & E-BROCHURE (crayon-blue fridge-magnet button)
- **Label:** IMAGE SAMPLE ONLY – not the actual development (one small line under the drawing)
- **Fine print:** EC eligibility conditions apply. 99-year leasehold. Distances approx., straight-line.
- **Visual:**
  - A plain white fridge-door texture fills the frame, with a soft vertical sheen and a hint of the door edge at the right.
  - **Centre:** a child's wax-crayon drawing on slightly creased cartridge paper. It shows a simple house with a triangle roof, a big yellow sun, blue wavy sea, a strip of sand, one casuarina-style tree and a stick-figure family of 4 holding hands.
  - **The stick figures have no facial features** (round heads with no eyes or mouths), and the drawing has **no letters, words or numbers** (children often write "HOME", which must not appear).
  - The house is plainly a child's house. It must not look like an apartment block or the project.
  - It is held by 2 plain round magnets in crayon blue and grass green, with no logos.
  - Drawn or generated, it carries the IMAGE SAMPLE ONLY label.
  - **No** school building, uniform, crest, real logo, appliance brand badge, family photo, or Downtown East, mall or theme-park imagery.

**Full prompt (with text)**

```text
Portrait 4:5 social media ad, 1080x1350 px, for a Singapore executive condominium, styled as a family fridge door. Background: a plain glossy fridge-white door (approx. #F4F5F2) filling the frame, with a soft vertical light sheen and a hint of the rounded door edge at the far right, 60 px margins, no brand badge or handle logo. TOP 30% of the frame: top-left, a small eyebrow reading "SINGAPORE HOMEBUYER" in bold red (approx. #D0021B) all-caps sans-serif with wide letter-spacing, about 22 px; below it, the headline in a big chunky rounded sans-serif (Baloo 2 ExtraBold style) in graphite (approx. #30363B), about 88 px, left-aligned on exactly three lines: "Looking for a home for your family?". MIDDLE, from about 31% to 70% of the frame height: a child's wax-crayon drawing on slightly creased off-white cartridge paper, about 600 x 480 px, tilted about -2 degrees, held at its two top corners by two plain round fridge magnets, one crayon blue (approx. #2F6FDB) and one grass green (approx. #57B947), with soft realistic shadows. The drawing shows, in bold uneven crayon strokes: a simple house with a triangle roof and a square window, a big sunflower-yellow (approx. #FFD43B) sun with rays in the top corner, wavy blue sea along the bottom with a strip of sand, one tall feathery tree, and a stick-figure family of four holding hands, with plain round heads and no facial features; the drawing contains no letters, words or numbers. Directly under the drawing, small italic graphite text, about 14 px: "IMAGE SAMPLE ONLY – not the actual development". Around the drawing, three square sticky notes, each about 200 px, slightly tilted, with soft curled-corner shadows, each with a handwritten line in graphite handwriting (Caveat style), about 28 px: a lemon note (approx. #FFF27A) at upper-left reading "Casuarina Primary nearby"; a mint note (approx. #BFF0D4) at lower-left reading "Weekends: the beach"; a bubblegum-pink note (approx. #FFB9D3) at lower-right reading "Downtown East, just opposite". At upper-right, overlapping the drawing's corner: a round sunflower-yellow (approx. #FFD43B) magnet badge about 190 px across with a thick graphite ring and a glossy highlight, reading "2 SCHOOLS" in bold graphite all-caps rounded sans with "NEARBY" smaller beneath; directly under the badge, tiny graphite text, about 13 px, on two centred lines: "School admission subject to MOE regulations and balloting." BOTTOM 28% of the frame: the subhead in regular graphite sans-serif, about 24 px, left-aligned on two lines: "Pasir Ris EC near Casuarina Primary School, Hai Sing Catholic School & Downtown East."; tiny grey fine print, about 14 px: "EC eligibility conditions apply. 99-year leasehold. Distances approx., straight-line."; a clear empty strip about 60 px tall; then a thick crayon-blue (approx. #2F6FDB) rounded-rectangle button styled like a big fridge magnet, about 80% of the frame width, centred, with a visible magnet thickness on its lower edge and a soft drop shadow, and "GET PRICE LIST & E-BROCHURE" in bold white all-caps rounded sans-serif. Look: warm, homely, parent-to-parent, playful; every string crisp, legible at mobile size and rendered exactly once. Avoid: faces or facial features on the figures; photographs of people or children; letters or words inside the crayon drawing; apartment blocks, towers or anything that could be the actual development; school buildings, gates, uniforms or crests; appliance brand badges, logos on magnets or notes; theme-park rides, water slides or mall imagery; any project, developer, mall, school or Downtown East logo or signage; any price, dollar sign, psf, unit count or "% sold"; "freehold", "preview" or "VVIP"; walk or drive minutes, metre figures; district codes or street addresses; MRT/LTA logos or rail line colours; misspelled, warped, duplicated or extra text beyond the quoted strings; watermarks; QR codes, phone numbers. Genre: Singapore property paid-social static ad.
```

**Image-only prompt (add text in Canva)**

```text
Portrait 4:5 image, 1080x1350 px, with no text of any kind. Background: a plain glossy fridge-white door (approx. #F4F5F2) filling the frame, a soft vertical light sheen, a hint of the rounded door edge at the far right, no brand badge or handle logo. TOP 30%: plain door only, reserved for an eyebrow and a three-line headline. MIDDLE, from about 31% to 70% of the frame height: a child's wax-crayon drawing on slightly creased off-white cartridge paper, about 600 x 480 px, tilted about -2 degrees, held at its top corners by two plain round fridge magnets, one blue and one green, with soft realistic shadows. The drawing shows, in bold uneven crayon strokes, a simple house with a triangle roof and a square window, a big yellow sun with rays, wavy blue sea with a strip of sand, one tall feathery tree, and a stick-figure family of four holding hands with plain round heads and no facial features. Leave clear plain door around the drawing at upper-left, lower-left, lower-right and upper-right for three sticky notes and a round badge. BOTTOM 30%: plain door only, reserved for a label line, a subhead, fine print, a licence strip and a button. Look: warm, homely, playful. Avoid: any text, letters, numbers, logos or watermarks, including inside the drawing; faces or facial features; photographs; apartment blocks or towers; sticky notes or badges (these are added later); appliance branding.
```

Draw the sticky notes, badge, handwriting and magnet button in Canva. The crayon drawing can also be made in Canva with a crayon-brush tool, which removes any risk of letters or faces.

**B-swap:** use the headline "A 3-Bedroom EC With Schools Nearby" (3 lines at about 84 px). It names no single school (perf Hougang C2-B note). The badge and MOE line stay, because the headline still speaks about schools. The notes, drawing and subhead stay the same.
- **Hai Sing fallback (copy Flag 11):** if Hai Sing Catholic School's new campus isn't confirmed open, use the copy-approved subhead "Pasir Ris EC near Casuarina Primary School, Pasir Ris Park & Downtown East." and change the badge to **1 PRIMARY SCHOOL** / NEARBY, or drop it. This applies under either headline.

**9:16:** make the drawing larger (about 760 x 620 px) and centre it at about 48% of the frame height. Put two sticky notes above it, to the left and right, and one note plus the badge below it. Start the eyebrow below the top 14%, and keep the subhead, fine print, CEA strip and magnet button above the bottom 20%, with plain fridge door below.

---

## C3. Beach / Downtown East lifestyle (blind): full-bleed sunrise beach

- **Headline (A):** Weekends at the beach. Every weekend.
  - Set it on 2 lines in the sky: "Weekends at the beach." then "Every weekend." in the same serif, italic.
- **Subhead:** New Pasir Ris EC near the beach, Pasir Ris Park & Downtown East.
- **Weekend-planner strip (copy-approved chips):**
  - **SAT** / Beach, then Downtown East
  - **SUN** / Pasir Ris Park
  - Optional third chip: **MON–FRI** / Pasir Ris MRT nearby. Use it in the 9:16 only, where there is room.
- **Tiny line (sea is shown):** Sea views from selected units only.
- **CTA:** GET PRICE LIST & E-BROCHURE (frosted-glass pill)
- **Label:** IMAGE SAMPLE ONLY – not the actual development (top-right, small)
- **Fine print:** EC eligibility conditions apply. 99-year leasehold. Distances approx., straight-line. Sea views from selected units only.
- **Visual:**
  - The photo fills 100% of the frame. It shows an early-morning shoreline at sunrise with a peach and gold sky, soft grey-green water and a wide wet-sand foreground that reflects the light.
  - A family of three, or a couple, walks **away from camera** along the waterline at mid-distance. They are small in the frame and soft-edged. No faces.
  - There are feathery casuarina trees on one side, and the horizon is hazy.
  - **No** buildings, high-rises, resort huts, signage, lifeguard towers, jetties, sculptures or rides, and no water slides or theme-park shapes on the skyline. No offshore islands.
  - The upper 35% of the frame is open sky for the headline. The lower 25% is calm sand for the strip and CTA.

**Full prompt (with text)**

```text
Portrait 4:5 social media ad, 1080x1350 px, for a Singapore executive condominium. FULL-BLEED photoreal photograph filling the entire frame: an early-morning tropical shoreline at sunrise, a soft peach and gold sky with gentle haze filling the upper third, the sun low near the horizon on the right, calm soft grey-green water with small lapping waves, a wide wet-sand foreground reflecting the warm light, feathery casuarina trees along the left edge, and a family of three seen from behind walking away from camera along the waterline at mid-distance, small in the frame and slightly soft, holding hands; warm, natural film-like grade, no buildings anywhere. Top-right corner: small italic warm-white text, about 14 px: "IMAGE SAMPLE ONLY – not the actual development". Top-left, with 64 px margins: a small solid red tag (approx. #D0021B) with "SINGAPORE HOMEBUYER" in white bold all-caps sans-serif with wide letter-spacing, about 22 px. Over the sky, from about 9% to 30% of the frame height: the headline in a large high-contrast display serif (Canela / Playfair Display style), warm white (approx. #FFFDF8), with a very soft shadow, left-aligned on two lines: "Weekends at the beach." at about 84 px, and "Every weekend." at about 84 px in italic. Directly below, the subhead in a thin geometric sans-serif (Jost Light style), warm white, about 25 px, on two lines: "New Pasir Ris EC near the beach, Pasir Ris Park & Downtown East." BOTTOM of the frame, over a gentle darkening gradient on the sand: at about 67% to 76% of the frame height, a frosted-glass strip spanning the width between margins, translucent white with a hairline white border and 18 px rounded corners, divided into two equal chips; each chip has a bold driftwood (approx. #3E322B) all-caps day label, about 22 px, with a thin driftwood sans line beneath, about 20 px: chip 1 "SAT" / "Beach, then Downtown East"; chip 2 "SUN" / "Pasir Ris Park". Below the strip, tiny warm-white fine print, about 13 px, on two lines: "EC eligibility conditions apply. 99-year leasehold. Distances approx., straight-line. Sea views from selected units only."; a clear empty strip about 60 px tall; then a frosted-glass pill button, full width between margins, translucent white with a hairline white border, and "GET PRICE LIST & E-BROCHURE" in bold driftwood all-caps sans-serif. Look: light, sunny, aspirational, unhurried weekend calm, a big quiet photo with very little type; every string crisp, legible at mobile size and rendered exactly once. Avoid: identifiable faces or people facing the camera; any buildings, high-rises, condo towers, resort huts or chalets; signage, lifeguard towers, jetties, piers, boardwalks or sculptures; offshore islands; theme-park rides, water slides, roller coasters or Ferris wheels on the skyline; any project, developer, mall, resort or Downtown East name, logo or signage in the photo; any price, dollar sign, psf, unit count or "% sold"; "freehold", "preview" or "VVIP"; walk or drive minutes, metre figures; district codes or street addresses; MRT/LTA logos or rail line colours; icons or tiles; misspelled, warped, duplicated or extra text beyond the quoted strings; watermarks; QR codes, phone numbers. Genre: Singapore property paid-social static ad.
```

**Image-only prompt (add text in Canva)**

```text
Portrait 4:5 image, 1080x1350 px, with no text of any kind. A full-bleed photoreal photograph filling the entire frame: an early-morning tropical shoreline at sunrise, a soft peach and gold sky with gentle haze filling the upper third, the sun low near the horizon on the right, calm soft grey-green water with small lapping waves, a wide wet-sand foreground reflecting the warm light, feathery casuarina trees along the left edge, and a family of three seen from behind walking away from camera along the waterline at mid-distance, small in the frame and slightly soft, holding hands; warm, natural film-like grade. RESERVED TEXT ZONES: the top 35% must be open, evenly lit sky with nothing in it, for an eyebrow, a two-line headline and a subhead; the top-right corner calm for a small label; the bottom 33% must be smooth, slightly darker wet sand with no footprints, objects or people, for a two-chip strip, fine print, a licence strip and a pill button. Keep the family in the band between 40% and 62% of the frame height. Look: light, sunny, aspirational. Avoid: any text, letters, numbers, logos or watermarks; identifiable faces; buildings, high-rises, resort huts or chalets; signage, lifeguard towers, jetties, piers, boardwalks or sculptures; offshore islands; rides, water slides or Ferris wheels.
```

Build the frosted strip and pill in Canva (white at about 30% opacity with a background blur).

**B-swap:** use the headline "Beach Mornings. Water Park Afternoons. Home for Dinner." on three lines at about 66 px, one sentence per line, with the last line in italic. "Water park" is copy only: **the photo still shows no water park, slide or ride.** The strip, subhead and fine print stay the same.

**9:16:** regenerate as a 9:16 scene, not a crop. Keep open sky from 14% to 40% for the headline and subhead, the family at about 50%, and smooth sand from 58% down. Use all three chips (SAT, SUN, MON–FRI) stacked as three rows of the frosted strip, and keep the strip, fine print and pill above the bottom 20%.

---

## C4. Earlier EC rules (blind, Price slot): two-column rules table

> **Conditionally Blocked** (copy Flag 8). Every EC-rule fact rests on Stacked Homes reporting MND. QA must confirm the rules on hdb.gov.sg or in the Eligibility Booklet before this ad runs.

- **Headline (A), set as the card title:** Comparing ECs? This One Has a 5-Year MOP.
- **Table header (copy-approved):**
  - Left column: `NEW-RULE ECs`, with the small line `land tender closing from 8 May 2026`
  - Right column (tinted): `THIS EC`, with the small line `earlier rules`
- **Table rows (2 only, copy-approved):**
  - **MOP**: `10 years` / `5 years`
  - **DEFERRED PAYMENT SCHEME**: `Not offered` / `Available`
  - **No third row.** No privatisation, resale, timeline-to-sell or price rows.
- **Subhead (under the card):** Under earlier EC rules, near Pasir Ris MRT, Downtown East & the beach.
- **Fine print (boxed footnote):** EC eligibility conditions apply. MOP counted from key collection. DPS prices differ from normal-scheme prices; terms per developer. Rules per MND, 8 May 2026. 99-year leasehold. Distances approx., straight-line.
- **CTA:** GET PRICE LIST & E-BROCHURE (slate-ink square-cornered "form submit" bar with a thin lagoon underline)
- **Label:** none (no image).
- **Visual rules:**
  - **No photo.** It is a plain document card on a plain field.
  - **No gain imagery:** no arrows (up or any other direction), charts, graphs, coins, notes, piggy banks, dollar signs or calculators.
  - **No ticks, crosses, stars or "winner" badges.** The two columns are plain text, and the only emphasis is the pale tint on "THIS EC". This keeps it a statement of rules, not an advantage claim.
  - No HDB or MND logos, no government crest, no flag, no official-looking seal or watermark.

**Full prompt (with text)**

```text
Portrait 4:5 social media ad, 1080x1350 px, for a Singapore executive condominium, as a plain, serious document-style information card with no photograph. Background: a flat cool paper field (approx. #F2F4F3) with a barely visible fine paper grain, 64 px margins. Top-left: a small eyebrow reading "SINGAPORE HOMEBUYER" in bold red (approx. #D0021B) all-caps sans-serif with wide letter-spacing, about 22 px. CENTRED, from about 9% to 62% of the frame height, about 90% of the frame width: a white document card with 6 px corners, a 1 px light slate border and a very soft shadow, 48 px inner padding. Inside the card, top: the title in an editorial text serif (Source Serif Semibold style), slate ink (approx. #1E2B33), about 58 px, left-aligned on two lines: "Comparing ECs? This One Has a 5-Year MOP."; a thin slate hairline. Below it, a plain table with a label column on the left and two value columns: the right-hand value column is filled with a pale lagoon tint (approx. #D9EEF4) and edged by a 2 px lagoon-blue line (approx. #1B7FA6). Header row, in a plain grotesk sans-serif (IBM Plex Sans style): middle column "NEW-RULE ECs" in bold slate all-caps, about 24 px, with a small regular line beneath, about 15 px, "land tender closing from 8 May 2026"; right column "THIS EC" in bold lagoon-blue all-caps, about 24 px, with a small regular line beneath, "earlier rules". Then exactly two body rows separated by hairlines, each row about 120 px tall: row 1, left label "MOP" in semibold slate all-caps, about 22 px, middle value "10 years", right value "5 years", values in regular slate grotesk about 34 px; row 2, left label "DEFERRED PAYMENT SCHEME" in semibold slate all-caps on two lines, middle value "Not offered", right value "Available". BELOW THE CARD, on the paper field: the subhead in regular slate grotesk, about 25 px, left-aligned on two lines: "Under earlier EC rules, near Pasir Ris MRT, Downtown East & the beach."; then a boxed footnote with a 1 px slate border and 16 px padding, containing tiny slate fine print, about 14 px, on three lines: "EC eligibility conditions apply. MOP counted from key collection. DPS prices differ from normal-scheme prices; terms per developer. Rules per MND, 8 May 2026. 99-year leasehold. Distances approx., straight-line."; a clear empty strip about 60 px tall; then a full-width slate-ink (approx. #1E2B33) rectangular button with square corners, about 92 px tall, styled like a form's submit bar, with a thin 4 px lagoon-blue underline along its bottom edge, and "GET PRICE LIST & E-BROCHURE" in bold white all-caps grotesk. Look: plain, explanatory, trustworthy, "know the rules", like a well-designed public information sheet; every string crisp, legible at mobile size and rendered exactly once. Avoid: any photograph or illustration; arrows of any kind, charts, graphs, trend lines; coins, banknotes, piggy banks, calculators, dollar signs or any price; tick marks, crosses, stars, medals or badges; government crests, HDB or MND logos, flags, seals or official watermarks; any condo tower or building; any project, developer, mall or Downtown East name or logo beyond the quoted strings; unit counts or "% sold"; "freehold", "preview" or "VVIP"; walk or drive minutes, metre figures; district codes or street addresses; MRT/LTA logos or rail line colours; a third table row; misspelled, warped, duplicated or extra text beyond the quoted strings; QR codes, phone numbers. Genre: Singapore property paid-social static ad.
```

**Image-only prompt (optional background, add text and table in Canva)**

```text
Portrait 4:5 image, 1080x1350 px, with no text of any kind: a flat cool paper field (approx. #F2F4F3) with a barely visible fine paper grain, and a single empty white document card with 6 px corners, a 1 px light slate border and a very soft shadow, about 90% of the frame width, from about 9% to 62% of the frame height. The card is completely blank. RESERVED TEXT ZONES: the top 9% of the field for an eyebrow; the whole card interior for a two-line title and a two-row, three-column table; the field below the card for a subhead, a boxed footnote, a licence strip and a full-width button. Look: plain, clean, document-like. Avoid: any text, letters, numbers, lines, tables, icons or arrows; photographs; buildings; logos, seals or watermarks; any colour other than the paper, white and a faint slate border.
```

Best practice: build this ad entirely in Canva. Use a real table element so the two rows line up exactly, and proof "8 May 2026", "10 years" and "5 years" against the copy.

**B-swap:** use the headline "EC Rules Changed in May. This One Didn't." as the card title (2 lines at about 58 px). **QA must check that it doesn't read as a loophole or advantage claim** (copy Flag 8). Headline A is the recommended one. The table, subhead and footnote stay the same.
- **Tighter QA fallback (copy Flag 8):** drop the "NEW-RULE ECs" column and show one tinted panel: "THIS EC: 5-year MOP · Deferred Payment Scheme available".

**9:16:** make the card taller (about 15% to 62% of 1920 px) and increase each row to about 180 px, with the values at about 44 px, so the table reads first. Keep the eyebrow below the top 14%, and the subhead, footnote, CEA strip and submit bar above the bottom 20%, with plain paper below.

---

## C5. Facilities / resort living (blind): big-numeral brochure page

- **Headline (A), over the photo:** Resort-Style Weekends, Right at Home
- **Subhead (in the panel, under the grid):** Over 65 facilities & 4 pools, near Pasir Ris MRT & Downtown East.
- **Giant numeral (copy-approved):** **65+** / RESORT-STYLE FACILITIES, with the small line `per developer`
- **Icon grid, 2x3 (copy-approved):** 4 POOLS · 2-STOREY CLUBHOUSE · 50M LAP POOLS · KIDS' ADVENTURE PARK · BBQ COURTYARDS · GYM & YOGA STUDIO
  - Thin single-colour line icons in deep lagoon: wave lines, a two-level pavilion, lane ropes, a slide-and-climbing frame, a grill, a dumbbell with a mat.
- **CTA:** GET PRICE LIST & E-BROCHURE (mango ticket-stub button)
- **Label:** IMAGE SAMPLE ONLY – not the actual development (bottom-right of the photo, above the seam)
- **Fine print:** EC eligibility conditions apply. 99-year leasehold. Distances approx., straight-line. Facilities per developer and published reviews; subject to final design.
- **Visual:**
  - **Fallback, used until rights are confirmed:** a bright midday resort-style pool. It has clear turquoise water, a long straight pool edge running into the distance, white sun loungers with folded towels, tall palms and lush planting.
  - **No tower, block, balcony or building of any kind behind it** (perf T10c). The background is planting and sky only.
  - Nobody in the pool, or one soft-focus swimmer from behind in the far distance. No faces.
  - **No** water slides, flumes or water-park features (these would read as Downtown East's water park), no resort or hotel signage, and no branded towels or umbrellas.
  - **Swap-in, once rights to the official facilities render are confirmed:** it replaces the top-half photo. Retouch out any logo or wordmark, and change the label to `IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY`. If the official render shows the towers, it is still allowed, because it is the developer's own artist's impression and is labelled as one.

**Full prompt (with text)**

```text
Portrait 4:5 social media ad, 1080x1350 px, for a Singapore executive condominium, styled as a holiday-brochure page. TOP 50% of the frame: a photoreal photograph of a bright midday resort-style swimming pool, clear pool-turquoise water (approx. #13B2C2) with sparkling caustics, a long straight pool edge running into the distance, a row of white sun loungers with folded white towels, tall coconut palms and lush tropical planting behind, a clear blue sky, no buildings of any kind; a soft darkening gradient in the top 20% for legibility. Top-left over the photo, with 56 px margins: a small solid red tag (approx. #D0021B) with "SINGAPORE HOMEBUYER" in white bold all-caps sans-serif with wide letter-spacing, about 22 px; below it, the headline in a friendly bold geometric sans-serif (Poppins ExtraBold style), white with a soft shadow, about 64 px, left-aligned on two lines: "Resort-Style Weekends, Right at Home". Bottom-right of the photo, just above the seam: small italic white text on a subtle dark translucent strip reading "IMAGE SAMPLE ONLY – not the actual development". BOTTOM 50% of the frame: a clean white panel (approx. #FCFEFE). STRADDLING THE SEAM on the left, from about 40% to 62% of the frame height: a giant ultra-condensed poster numeral (Anton / Bebas Neue style) reading "65+" in mango (approx. #FF9F1C), about 300 px tall, with a thin white outline where it overlaps the photo; to its right, on the white panel, "RESORT-STYLE FACILITIES" in bold deep-lagoon (approx. #075E73) all-caps geometric sans, about 30 px, on two lines, with a small italic line beneath, about 16 px: "per developer". From about 64% to 80% of the frame height: a 2x3 grid of six cells, each with a thin single-colour deep-lagoon line icon above a small bold deep-lagoon all-caps label, about 17 px: "4 POOLS" (wave lines), "2-STOREY CLUBHOUSE" (a two-level pavilion), "50M LAP POOLS" (lane ropes), "KIDS' ADVENTURE PARK" (a slide and climbing frame), "BBQ COURTYARDS" (a grill), "GYM & YOGA STUDIO" (a dumbbell with a mat). Below the grid, the subhead in regular deep-lagoon sans-serif, about 23 px, left-aligned on two lines: "Over 65 facilities & 4 pools, near Pasir Ris MRT & Downtown East."; tiny grey fine print, about 13 px, on two lines: "EC eligibility conditions apply. 99-year leasehold. Distances approx., straight-line. Facilities per developer and published reviews; subject to final design."; a clear empty strip about 60 px tall; then a mango (approx. #FF9F1C) ticket-stub button, about 84% of the frame width, centred, with semicircular notches cut into both short ends and a dotted perforation line near the right end separating a small stub, and "GET PRICE LIST & E-BROCHURE" in bold deep-lagoon all-caps geometric sans-serif. Look: upbeat, sunny, holiday-brochure, the giant number hits first; every string crisp, legible at mobile size and rendered exactly once. Avoid: any condo tower, apartment block, balcony, hotel or building behind or around the pool; water slides, flumes, lazy rivers or water-park features; theme-park rides; resort, hotel, project, developer, mall or Downtown East names, logos or signage; branded towels or umbrellas; identifiable people or faces; any price, dollar sign, psf, unit count or "% sold"; "freehold", "preview" or "VVIP"; walk or drive minutes, metre figures; district codes or street addresses; MRT/LTA logos or rail line colours; misspelled, warped, duplicated or extra text beyond the quoted strings; watermarks; QR codes, phone numbers. Genre: Singapore property paid-social static ad.
```

**Image-only prompt (add text in Canva)**

```text
Portrait 4:5 image, 1080x1350 px, with no text of any kind. TOP 50% of the frame: a photoreal photograph of a bright midday resort-style swimming pool, clear turquoise water with sparkling caustics, a long straight pool edge running into the distance, a row of white sun loungers with folded white towels, tall coconut palms and lush tropical planting behind, a clear blue sky, absolutely no buildings; keep the top-left 40% of the photo calm (open sky and soft planting) for an eyebrow and a two-line headline, and the bottom-left quarter of the photo calm for a giant numeral overlapping the seam. BOTTOM 50% of the frame: a completely flat, clean white panel (approx. #FCFEFE), empty, reserved for a numeral caption, a 2x3 icon grid, a subhead, fine print, a licence strip and a ticket button. Look: bright, upbeat, holiday. Avoid: any text, letters, numbers, logos or watermarks; any tower, apartment block, balcony, hotel or building; water slides, flumes or water-park features; signage; branded towels or umbrellas; identifiable people.
```

Generate only the top half (1080 x 675 px, landscape) and build the numeral, icons, panel and ticket in Canva. Use one line-icon set so all six icons match.

**B-swap:** use the headline "4 Pools, 65+ Facilities, One Home" over the photo (2 lines at about 64 px). With B, swap the "4 POOLS" cell for **TENNIS COURT** (a racket icon), and use the copy-approved B-swap subhead "A 2-storey clubhouse, near Pasir Ris MRT, Downtown East & the beach." The "65+" numeral stays, even though the headline repeats it, because it is copy-approved (Flag 4).

**9:16:** give the photo the top 42%, with the headline in its upper part below the top 14%. Put the "65+" numeral across the seam at about 40–52%. Set the grid as 3x2 (three rows of two) with larger icons, and keep the subhead, fine print, CEA strip and ticket above the bottom 20%, with plain white below.

---

## C6. 3-bedroom floor plan (blind): blueprint hero

> **Depends on the official plan.** Composite it in Canva into the reserved zone. Rights to it are unconfirmed (copy Flag 6, perf S7). With no cleared plan, use the fallback headline and fallback label below.

- **Headline (A), official plan only:** See How 3 Bedrooms Fit in 872 sqft
  - **Fallback headline, if there's no official plan:** 3-Bedroom EC Layouts From 872 sqft
- **Subhead:** 2.8m ceilings, near Pasir Ris MRT, White Sands & Pasir Ris Park.
- **Plan callouts (copy-approved):**
  - Plan title: `3-BEDROOM DELUXE · 872 SQFT` (or the Premium plan, whichever is official and in stock)
  - Room labels and dimension callouts from the **official plan only**. Don't invent any.
  - A small chip: `2.8M CEILINGS`
- **Plan label (right under the plan):**
  - Official plan composited: `IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY`
  - **Fallback**, an illustrative plan: `ILLUSTRATIVE LAYOUT ONLY, not to scale`
- **Round render inset (top-right corner of the plan zone):** the official exterior render, with the caption `IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY`. **If there's no official render, there's no inset** (copy Flag 14). Don't fill the circle with a generated building.
- **CTA:** GET PRICE LIST & E-BROCHURE (cyanotype "drawing title-block" button)
- **Fine print:** EC eligibility conditions apply. 99-year leasehold. Distances approx., straight-line. Sizes approx., per developer; subject to final survey.
- **Plan rules:**
  - **The official 3BR plan only**, with the project name, unit codes, stack numbers, the developer's logo and any price removed.
  - **Never a 4BR or 5BR plan.**
  - Recolour the plan's linework to cyanotype blue in Canva (or place it on a white card) so it reads on the grid.
  - The generated image is the blueprint background only. **No image model draws the floor plan**, not even as a placeholder.

**Full prompt (with text, layout mock-up only; the plan zone stays empty)**

```text
Portrait 4:5 social media ad, 1080x1350 px, for a Singapore executive condominium, styled as an architect's blueprint sheet. TOP 17% of the frame: a solid drafting-white band (approx. #F9FBFD) with 56 px margins: top-left, a small solid red tag (approx. #D0021B) with "SINGAPORE HOMEBUYER" in white bold all-caps sans-serif with wide letter-spacing, about 20 px; below it, the headline in a bold technical condensed sans-serif (Barlow Condensed / DIN Condensed Bold style), cyanotype blue (approx. #123E7C), about 70 px, left-aligned on one line: "See How 3 Bedrooms Fit in 872 sqft". BELOW THE BAND, the rest of the frame is a pale blueprint field (approx. #E4EEF8) with a fine square drafting grid in thin cyanotype-blue lines at low opacity, plus a heavier line every fifth square, and faint registration marks in the corners. PLAN ZONE, from about 22% to 72% of the frame height, full width between 40 px margins: a large white rectangle with a thin dashed cyanotype border, completely empty inside, reserved for a floor plan added later. Above the plan zone, left-aligned: a small cyanotype-blue rectangular title chip with white monospaced all-caps text, about 18 px: "3-BEDROOM DELUXE · 872 SQFT". Overlapping the top-right corner of the plan zone: an empty circle about 190 px across with a thick white ring, reserved for a render inset, with tiny italic cyanotype text beneath it, about 12 px: "IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY". At the bottom-left inside the plan zone: a short strip of masking tape (approx. #F1E3B8), slightly tilted, with "2.8M CEILINGS" in bold cyanotype monospaced all-caps, about 18 px. Directly under the plan zone, tiny italic cyanotype text, about 14 px: "IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY". BOTTOM 26% of the frame, on the blueprint field: the subhead in regular cyanotype-blue condensed sans, about 25 px, left-aligned on two lines: "2.8m ceilings, near Pasir Ris MRT, White Sands & Pasir Ris Park."; tiny cyanotype fine print, about 13 px, on two lines: "EC eligibility conditions apply. 99-year leasehold. Distances approx., straight-line. Sizes approx., per developer; subject to final survey."; a clear empty strip about 60 px tall; then a full-width cyanotype-blue (approx. #123E7C) rectangular button styled like an architectural drawing title-block, square corners, a thin white double-line inner border and one small divided cell at the right end, with "GET PRICE LIST & E-BROCHURE" in bold white all-caps condensed sans-serif. Look: practical, precise, architect's drafting table, generous white space around the plan; every string crisp, legible at mobile size and rendered exactly once. Avoid: drawing any floor plan, room shapes, walls, doors, furniture or dimension lines inside the plan zone; any building, tower or render inside the circle; project, developer, mall or school names or logos beyond the quoted strings; unit codes or stack numbers; any price, dollar sign, psf, unit count or "% sold"; "freehold", "preview" or "VVIP"; 4-bedroom or 5-bedroom labels; walk or drive minutes, metre figures; district codes or street addresses; MRT/LTA logos or rail line colours; misspelled, warped, duplicated or extra text beyond the quoted strings; watermarks; QR codes, phone numbers. Genre: Singapore property paid-social static ad.
```

**Image-only prompt (blueprint background, add plan and text in Canva)**

```text
Portrait 4:5 image, 1080x1350 px, with no text, letters or numbers of any kind. TOP 17%: a completely flat drafting-white band (approx. #F9FBFD), empty, reserved for an eyebrow and a one-line headline. BELOW IT, the rest of the frame: a pale blueprint field (approx. #E4EEF8) with a fine square drafting grid in thin cyanotype-blue (approx. #123E7C) lines at low opacity, a slightly heavier line every fifth square, faint registration crosshairs in the four corners, and a subtle paper texture. RESERVED ZONES: 20–22% for a small title chip; 22–72%, full width between 40 px margins, a clear area for a floor plan composited later, with a circle about 190 px across at its top-right corner for a render inset; 72–75% for a label line; 75–100% for a subhead, fine print, a licence strip and a full-width button. Keep the grid even and uninterrupted across the plan zone so the composited plan sits on it cleanly. Look: precise, technical, calm. Avoid: any text, letters, numbers or dimension marks; any floor plan, room shapes, walls, doors, furniture or architectural drawing; any building, tower or render; logos or watermarks; any colour other than drafting white, pale blue and cyanotype blue.
```

Best practice: build this ad in Canva. The grid can be a Canva pattern, so generation is optional. Composite the official plan as the hero at the full width of the zone, and check that every room label and dimension matches the official plan exactly.

**B-swap:** use the headline "3-Bedroom EC Homes From 872 to 915 sqft" (1 line at about 62 px, or 2 lines in 9:16). Headline B states the size range, so it does not depend on the official plan. With B, the plan title may name either the Deluxe (872 sqft) or the Premium (915 sqft) plan. Everything else stays the same.
- **No-official-plan fallback:** headline "3-Bedroom EC Layouts From 872 sqft". The plan zone holds a clearly generic, simplified 3-bedroom line plan drawn in Canva (not generated), labelled `ILLUSTRATIVE LAYOUT ONLY, not to scale`. Drop the plan title's "DELUXE" so it reads `3-BEDROOM · ILLUSTRATIVE`, and drop the inset. Performance should confirm this fallback is acceptable before it runs (perf Amber C3-1 precedent, Flag 3).

**9:16 (build this first, perf Amber C6-3):** the plan zone becomes 18% to 72% of 1920 px (about 1,040 px tall), so the plan reads at real size on a phone. The headline sits on 2 lines in the white band, which starts below the top 14%. The inset moves to the top-right of the plan zone at about 220 px. Keep the subhead, fine print, CEA strip and title-block button above the bottom 20%.

---

## C7. Location + MRT (blind): illustrated neighbourhood map

- **Headline (A):** Near Pasir Ris MRT. Cross Island Line Coming.
- **Subhead:** Near upcoming Pasir Ris East MRT (Cross Island Line, 2030 target) & Downtown East.
- **Map pins (copy-approved labels, all set in Canva):**
  - `HOME`: a large unnamed pin
  - `PASIR RIS MRT`
  - `PASIR RIS EAST MRT`, with the tag `CROSS ISLAND LINE · FROM 2030 (TARGET)`
  - `DOWNTOWN EAST`
  - `PASIR RIS BEACH`
  - `PASIR RIS PARK`
  - `WHITE SANDS`
  - **No offshore islands, no schools, no street names, no distance or minutes labels.**
- **Line labels:**
  - Solid line: `EAST-WEST LINE`
  - Dashed line: `CROSS ISLAND LINE · FROM 2030 (TARGET)`. The copy's string is "CROSS ISLAND LINE (2030 TARGET)". I reordered it to meet the user's label rule (Flag 4).
  - Footer: `Illustrative map, not to scale.`
- **CTA:** GET PRICE LIST & E-BROCHURE (berry map-legend pill with a white location-pin icon at its left end)
- **Fine print:** EC eligibility conditions apply. 99-year leasehold. Distances approx., straight-line. Cross Island Line targeted for 2030; timeline subject to change.
- **Label:** Illustrative map, not to scale.
- **Map geometry (schematic, roughly right in direction, nothing to scale):**
  - The sea runs across the top as a soft, gently curving coastline. **No islands.**
  - Pasir Ris Beach is a sand strip along the coast, directly north of HOME.
  - Pasir Ris Park is a green patch along the coast to the north-west.
  - Downtown East is a plain soft-cornered block immediately west of HOME.
  - Pasir Ris MRT and White Sands sit side by side to the south-west.
  - Pasir Ris East MRT is to the south-south-east.
  - The **solid East-West Line** comes in from the lower-left and ends at Pasir Ris MRT. It is the line's terminus.
  - The **dashed Cross Island Line** enters from the lower-right, passes through Pasir Ris East MRT, runs to Pasir Ris MRT (an interchange ring), and exits to the left.
  - HOME sits between Downtown East and the two stations, slightly nearer the coast.
- **Map rules:**
  - Slate graphite and berry are generic colours. **No East-West Line green and no Cross Island Line lime**, and none of the red, purple, orange, yellow, blue or brown line colours.
  - No LTA or MRT logos, no station codes (EW1, CR4, CR5), no real map tiles, no street grid, no road names.
  - Downtown East, White Sands, the beach and the park are flat shapes with typeset labels. **No logos, rides, slides or building drawings.**

**Full prompt (with text)**

```text
Portrait 4:5 social media ad, 1080x1350 px, for a Singapore executive condominium, as a clean flat-vector illustrated neighbourhood map. Background: dune-sand land (approx. #F0E4C8), 56 px margins. TOP 19% of the frame: top-left, a small eyebrow reading "SINGAPORE HOMEBUYER" in bold red (approx. #D0021B) all-caps sans-serif with wide letter-spacing, about 22 px; below it, the headline in a bold slab serif (Zilla Slab Bold style) in slate graphite (approx. #2F3A3F), about 62 px, left-aligned on two lines: "Near Pasir Ris MRT." and "Cross Island Line Coming.". MAP ZONE, from about 20% to 74% of the frame height, full width: across the top of the map zone, a lagoon-jade sea (approx. #5DBFA8) with a soft, gently curving coastline and a few faint wave strokes, no islands; along the shore directly above the centre, a thin pale sand strip labelled "PASIR RIS BEACH"; along the shore to the upper-left, a soft park-green (approx. #A6CF98) patch with simple round tree dots, labelled "PASIR RIS PARK". In the centre, slightly nearer the coast: a large slate-graphite teardrop pin about 120 px tall with a white house glyph inside and a bold label beneath it, "HOME". Immediately left of HOME: a plain soft-cornered pale block with a thin graphite outline, labelled "DOWNTOWN EAST". Lower-left: a white station circle with a thick graphite outline drawn as a double-ring interchange, labelled "PASIR RIS MRT", and beside it a small plain soft-cornered block labelled "WHITE SANDS". A thick SOLID slate-graphite line (approx. #2F3A3F) enters from the bottom-left edge and ends at the "PASIR RIS MRT" circle, with small graphite all-caps text along it: "EAST-WEST LINE". A thick DASHED berry line (approx. #B8327A) enters from the bottom-right edge, passes through a white station circle with a berry outline labelled "PASIR RIS EAST MRT" at the lower-right of HOME, continues to the "PASIR RIS MRT" circle, and exits at the left edge; a berry pill tag next to the "PASIR RIS EAST MRT" label reads "CROSS ISLAND LINE · FROM 2030 (TARGET)" in white bold all-caps, about 15 px, and small berry all-caps text along the dashed line near the left edge reads "CROSS ISLAND LINE · FROM 2030 (TARGET)". All pin and place labels in a compact bold sans-serif in all caps, slate graphite, about 20 px. Bottom-right of the map zone: tiny italic graphite text, about 13 px: "Illustrative map, not to scale." BOTTOM 26% of the frame: the subhead in regular slate-graphite sans-serif, about 24 px, left-aligned on two lines: "Near upcoming Pasir Ris East MRT (Cross Island Line, 2030 target) & Downtown East."; tiny graphite fine print, about 13 px, on two lines: "EC eligibility conditions apply. 99-year leasehold. Distances approx., straight-line. Cross Island Line targeted for 2030; timeline subject to change."; a clear empty strip about 60 px tall; then a berry (approx. #B8327A) pill button, full width between margins, styled like a map-legend key, with a small white location-pin icon at its left end and "GET PRICE LIST & E-BROCHURE" in bold white all-caps sans-serif. Look: crisp, informative, friendly map-reader, the HOME pin hits first; every string crisp, legible at mobile size and rendered exactly once. Avoid: photographs; real map tiles, street grids, road names or satellite textures; islands of any kind; MRT or LTA logos, station codes or official station symbols; green, lime, red, purple, orange, yellow, blue or brown rail lines; trains; building drawings, towers, theme-park rides, water slides or Ferris wheels; any project, developer, mall, school or Downtown East logo; school pins; distance labels, walk or drive minutes, metre figures, scale bars or compass roses; any price, dollar sign, psf, unit count or "% sold"; "freehold", "preview" or "VVIP"; district codes or street addresses; extra place names beyond the quoted strings; misspelled, warped, duplicated or extra text beyond the quoted strings; watermarks; QR codes, phone numbers. Genre: Singapore property paid-social static ad.
```

**Image-only prompt (optional base map, add pins, lines and text in Canva)**

```text
Portrait 4:5 image, 1080x1350 px, flat vector, with no text, letters, numbers, icons or pins of any kind. Background: dune-sand land (approx. #F0E4C8). TOP 19%: plain sand, empty, reserved for an eyebrow and a two-line headline. MAP ZONE, 20–74% of the frame height: across the top of the zone, a lagoon-jade sea (approx. #5DBFA8) with a soft, gently curving coastline and a few faint wave strokes, no islands; a thin pale sand strip along the shore above the centre; a soft park-green (approx. #A6CF98) patch with simple round tree dots along the shore to the upper-left; the rest of the zone plain sand, with clear empty space in the centre for a large pin, to its left for a block, at the lower-left for a station and a block, and at the lower-right for a station, plus room for a solid line from the bottom-left and a dashed line from the bottom-right. BOTTOM 26%: plain sand, empty, reserved for a subhead, fine print, a licence strip and a pill button. Look: crisp, friendly, minimal. Avoid: any text, letters, numbers, pins, lines, roads or icons; islands; real map tiles or street grids; buildings, rides or trains; any rail-line colours.
```

Best practice: build the whole map in Canva, with the coast, patches, blocks, pins, rings, lines and pills as shapes. Image models scatter extra labels and invent islands.

**B-swap:** use the headline "Cross Island Line to Pasir Ris: 2030 Target" on two lines at about 62 px, with "2030 Target" in berry to match the dashed line. The map, tags, subhead and CTA stay the same.

**9:16:** extend the map zone to 18% to 74% of 1920 px, and let the coastline run along the top of it with more sea. Spread the pins further apart so each label reads at about 26 px, and keep the Pasir Ris East MRT tag on one line. Start the headline below the top 14%, and keep the subhead, fine print, CEA strip and pill above the bottom 20%.

---

## Flags

1. **No performance sign-off yet.**
   - `perf-review.md` has no Coastal Cabana section. `research-coastal-cabana.md` and `copy-coastal-cabana.md` are not marked Approved.
   - This follows the shortened flow the user chose for Amber House, Arcady and Hougang: researcher, then copywriter, then static-designer, then one performance check at the end. **Performance should review research, copy and these prompts together.**
   - There is no `brief.md` and no `creative-spec.md` approval box for this run.
   - Any generation, including tests, needs the user's own approval in chat with the estimated cost shown first. A request for "the full chain" covers writing the prompts, not paid generation.
2. **Stage wording (copy Flag 2).** The user said "preview", but the project launched on 17 Jan 2026. No image says "preview", "VVIP", "launching soon" or "be the first". C1's tile reads `SHOW FLAT / OPEN FOR VIEWING`. The user should confirm that "preview" meant the show flat.
3. **Official assets and rights (copy Flags 6 and 14, perf S7).**
   - `inputs/product-images/` is empty, and nothing was fetched.
   - Renders and plans exist on coastalcabana.com.sg, but who runs that site is unconfirmed, and so are GoAhead's rights to its assets.
   - Swap-in points, once the client confirms rights:
     - **C1:** the exterior render replaces the shoreline photo.
     - **C5:** the facilities render replaces the pool photo.
     - **C6:** the 3BR plan goes in the reserved zone, plus the round exterior inset.
     - All of them get `IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY`, with logos, names and unit codes retouched out.
   - Until then: C1 and C5 run on their generic fallbacks with `IMAGE SAMPLE ONLY – not the actual development`. **C6 can't run as specified.** It needs either the official plan or the user's OK on the illustrative fallback (fallback headline, `ILLUSTRATIVE LAYOUT ONLY, not to scale`, no inset). The fallback without a building image is a known gap against SKILL.md, which asks for a plan and a building image together.
   - C2, C3, C4 and C7 never take a render.
4. **Designer-set strings for the copywriter to proof:**
   - **C1:** the descriptor line `EXECUTIVE CONDOMINIUM · PASIR RIS` moved from under the name to above it, so Headline A reads in one run. The name layer reads "COASTAL" / "CABANA EC:", keeping the colon.
   - **C1 B-swap:** the name layer becomes "COASTAL" / "CABANA:".
   - **C3:** Headline A is split over 2 lines, with "Every weekend." in italic.
   - **C4:** the fine print combines the copy's C4 string with `99-year leasehold. Distances approx., straight-line.` The subhead names places, so the distance line is needed.
   - **C5:** the fine print adds the copy's primary-text string `Facilities per developer and published reviews; subject to final design.` With B, the "65+" numeral repeats the headline's "65+". It's a copy-approved string, so I kept it.
   - **C6:** the fine print adds `Sizes approx., per developer; subject to final survey.` from the primary text. The fallback plan title `3-BEDROOM · ILLUSTRATIVE` is a new designer string.
   - **C7:** the dashed-line label changed from "CROSS ISLAND LINE (2030 TARGET)" to `CROSS ISLAND LINE · FROM 2030 (TARGET)`, to meet the user's rule. The pin tag already used that form.
   - **C7 B-swap:** "2030 Target" is set in berry.
   - **Fine-print lines** on each ad are combinations of the copy's base strings, as set out in the intro.
5. **Palette changes from the copywriter's layout column.** All seven layouts follow the column exactly. Only the colours changed:
   - The column had coral on C1 (tiles), C5 (numeral) and C7 (dashed line). C1 keeps sun coral. C5's numeral became mango, and C7's dashed line became berry.
   - C7's "charcoal" solid line became slate graphite with a new hex (Arcady used #2A2D31). C7's "sea-green" water became lagoon jade, a different hex from Arcady's aqua.
   - C4's "navy and teal" became slate ink and lagoon blue. Amber House, Arcady and Hougang all used a navy or teal.
   - C6's "navy linework" became cyanotype blue, with a masking-tape cream accent.
   - C3 is graded by its photo. Its only set colours are a warm white and driftwood on frosted glass.
6. **Rail and MRT rules.**
   - No walk minutes or metre figures appear anywhere.
   - Every station label uses its full "… MRT" name: Pasir Ris MRT and Pasir Ris East MRT.
   - The Cross Island Line is labelled `FROM 2030 (TARGET)` on C7, both on the pin tag and on the line label. The C7 subhead's "(Cross Island Line, 2030 target)" is the copy-approved string, and C7's fine print carries the timeline line. The CRL appears on no other image.
   - The C7 lines are slate graphite and berry. No real line colours, no LTA or MRT marks, no station codes.
7. **Image-model risks (Amber C4-1 precedent).**
   - **C5 pool:** the model may add a tower or hotel block behind it, or a water slide. Reject any output with either.
   - **C3 beach:** the model may add a jetty, lifeguard tower, chalet, island or ride on the skyline. Reject any of these.
   - **C1 shoreline:** the same risk applies, plus a stray building on the horizon. Reject it.
   - **C2:** a generated crayon drawing may sprout letters ("HOME", "MUM") or faces. Reject it, or draw it in Canva.
   - **C6:** the model may draw a fake plan inside the reserved zone. Never use one. Clear the zone and composite the official plan.
8. **C4 is conditionally Blocked** (copy Flag 8) until QA confirms the EC rules on HDB or in the Eligibility Booklet. The image is plain facts only: no arrows, money, ticks, crosses or charts, and no resale, privatisation or "last" wording.
9. **MOE line** is on C2, under the badge, using the copy's on-image string. No school building, uniform or crest appears in any image. Nothing implies P1 priority. **Hai Sing Catholic School's new campus must be confirmed** (copy Flag 11). If it isn't, C2 uses the B-swap subhead and the badge changes.
10. **"Opposite" and "near" wording (copy Flag 9, QA call).** The C2 sticky note "Downtown East across the road" and C1's B-swap tile `OPPOSITE / DOWNTOWN EAST` are the only on-image positional words stronger than "near". If QA wants everything strictly "near", the note becomes "Downtown East nearby" and the tile becomes `NEAR / DOWNTOWN EAST` (copywriter to confirm).
11. **Downtown East and landmark imagery.** "Downtown East", "White Sands" and the beach and park appear only as typeset copy strings or flat map shapes. No ad shows a ride, slide, mall facade, logo or recognisable Pasir Ris landmark, and no offshore island. Coney Island is never shown or named.
12. **People.** Nobody is identifiable on any ad. C3 shows a family from behind at mid-distance, C5 shows nobody (or one distant swimmer from behind), and C2's crayon figures have no faces. C1, C4, C6 and C7 have no people. Reject any generation with a visible face.
13. **Stock-dependent strings (copy Flag 12, perf S4). Check these within 48h of launch:**
    - If the 3BR Deluxe (872 sqft) sells out, every "from 872 sqft" becomes "from 915 sqft". That affects C1 (subhead and tile 1), C6 (headline A, the fallback headline and the plan title) and the B-swap subheads.
    - No ad mentions 4-bedroom or 5-bedroom, and the C6 plan is never a 4BR or 5BR plan.
14. **CEA authorisation (copy Flag 7, perf S3).** If GoAhead isn't authorised to market Coastal Cabana, C1 is Blocked, and the blind ads should be checked too. The CEA strip is reserved on all 7.
15. **Lead form (copy Flag 3, perf S5).** C2–C7 hide the name, so the form intro must reveal "Coastal Cabana EC in Pasir Ris". It carries the EC-eligibility, budget and timeline questions, has no 4-bedroom option, and shows no price unless the user OKs one in chat (perf N2). The Meta button is "Download".
16. **House photo rule.** SKILL.md's "real interior photos only, never illustration" applies to the custom-list format. This project has no completed building or interiors to photograph. So this set uses a document (C4), a blueprint (C6), a vector map (C7) and a crayon drawing (C2) on purpose, and uses generic photos with the IMAGE SAMPLE ONLY label for C1, C3 and C5.
17. **Eyebrow style.** C1, C3, C5 and C6 use a red tag with white letters, for legibility on the sea-blue, photo and blueprint-band backgrounds. C2, C4 and C7 use red text. Change this if the client wants one treatment everywhere.
18. **Generation scope, for when the user approves a spend:**
    - C4 and C7 need no generation. They are Canva builds.
    - C6 is a Canva build around the official plan. The grid background is optional.
    - C1 (1 tall shoreline photo), C3 (1 full-bleed beach photo, plus a 9:16 version), C5 (1 landscape pool photo) and optionally C2 (1 crayon drawing) need licensed stock or generation.
    - Show the user an estimated cost per batch and get a go-ahead before generating anything.


---

## Revision 2 — 3-angle set (2026-11-07)

Static-designer, 2026-11-07. Revision 1 above stays as the record. This section covers **only** the 3 ads in `copy-brief.md` "Revision 2 — 3-angle set (2026-11-07)", Rev 2.1: **R2-A** Direct (named, price-led), **R2-B** Floor plan (blind, illustrative fallback), **R2-C** Price + near MRT (blind). **Prompts only.** Nothing has been generated and no API call has been made.

**What this section is for:** one ready-to-paste prompt per ad for a free consumer image generator (ChatGPT image or Gemini). Each block is self-contained: layout, palette, type, every on-image string in quotes exactly as in the copy, the image subject and the 4:5 size (1080x1350). Under each block is a **9:16 line** to paste into the same chat after the 4:5 result comes back.

**Status and gates (read before pasting):**
- Copy Rev 2.1 has the performance swaps applied ($1.542M* exact, beach "nearby"). Performance has not yet re-reviewed Rev 2.1 or these prompts in `perf-review.md`.
- **R2-A is Blocked if GoAhead isn't CEA-authorised for Coastal Cabana (S3).**
- **R2-B runs on the illustrative fallback** (the user's standing 3-ad rule). Performance ruling 3 (2026-11-07) asks for the user's OK in chat on running it without a building image. The plan has no price, no unit name and no size on the sheet.
- S4 stock (the 872 sqft Deluxe), the price check at [DATE], S7 e-brochure rights and E1 (no MOP/DPS strings) are unchanged.
- Free consumer tools cost nothing, but the published ad still goes through QA and the user's pre-launch approval. Any paid generation needs a cost estimate and the user's go-ahead first.

**Revision 1 perf fixes, applied where they touch these 3 ads:**
- **CC2:** no `5-YEAR MOP` tile and no MOP/DPS string anywhere. R2-A tile 1 is `65+ FACILITIES / PER DEVELOPER`.
- **CC3:** no school is named on any of the 3 ads.
- **CC4:** only "opposite Downtown East" is used. "Across the road" appears nowhere.
- **CC6:** any water in R2-A and R2-C is **soft grey-green**, never aqua or turquoise.

**Rules baked into every prompt:**
- No AI image of the actual building. R2-A and R2-C use generic coastal or park photos labelled `IMAGE SAMPLE ONLY – not the actual development`. R2-B has no photo, and its plan title says it's illustrative.
- No buildings, towers, skylines, landmarks, rides, slides, jetties, offshore islands or identifiable faces. No real MRT line colours, LTA or MRT logos, or station codes.
- No unit counts, % sold, psf, discounts, "freehold", "preview", walk minutes or metre figures.
- `[DATE]` is a placeholder. The model should print it literally as "[DATE]" (or leave the fine print blank), and the real date is typeset before launch.
- **Fine print is the copy's exact wording, split into short lines.** Every prompt says "If small text is unreadable, leave the fine-print area blank", so it can be typeset in Canva afterwards. Proof every rendered character against `copy-brief.md` before use. If any headline, price or CTA string comes out wrong, rebuild that text in Canva over the image.

### Design at a glance (Revision 2)

| Ad | Layout | Palette | Type | Visual | CTA |
|---|---|---|---|---|---|
| **R2-A** Direct, price-led | **Split-screen name card:** photo left 55%, solid panel right 45%, full-width fine-print band at the base | Deep sea-blue #0B4F6C, sand-white #F8F1E7, sun coral #F07C5A (price) | Wide geometric sans caps (Montserrat ExtraBold style) | Empty east-coast shoreline at dawn, casuarinas, grey-green sea, no buildings | Sand-white capsule with a small wave glyph |
| **R2-B** Floor plan | **Blueprint sheet:** white header band, large illustrative 3-bed plan on a drafting grid, masking-tape chips | Drafting white #F9FBFD, pale grid blue #E4EEF8, cyanotype ink #123E7C, tape cream #F1E3B8 | Technical condensed sans (Barlow Condensed style) + monospaced labels | No photo. Flat generic line plan, room labels only | Cyanotype title-block bar, double inner border |
| **R2-C** Price + near MRT | **Price-tag hero:** park photo top 46%, a yellow swing-tag price card overlapping the photo edge, 2x2 "nearby" chips below | Casuarina green #1F4D3A, warm cream #FFF8EC, sunshine yellow #FFC93C, ink #1B1B1B | Soft heavy serif (Recoleta / Fraunces Black style) + clean sans (DM Sans style) | Shaded seaside park path under casuarinas, grey-green sea glimpse, no buildings | Full-width casuarina-green rounded bar with yellow text |

How they differ: dark photo-plus-panel vs pale technical sheet vs warm green-and-yellow tag; sea-blue/coral vs cyanotype/cream vs green/yellow; wide sans caps vs condensed technical vs soft serif. Only the red `SINGAPORE HOMEBUYER` tag (#D0021B) and the CTA wording repeat.

---

### R2-A. Direct (named, price-led): split-screen name card

- **On-image strings:** `SINGAPORE HOMEBUYER` · `EXECUTIVE CONDOMINIUM · PASIR RIS` · `COASTAL CABANA EC:` · `3-BEDROOM FROM` · `$1.542M*` · `DELUXE · 872 SQFT` · subhead `Near Pasir Ris MRT, opposite Downtown East, with Pasir Ris Beach nearby.` · tiles `65+ FACILITIES / PER DEVELOPER`, `PASIR RIS EAST MRT / CROSS ISLAND LINE, 2030 TARGET`, `SHOW FLAT / OPEN FOR VIEWING` · CTA `GET PRICE LIST & E-BROCHURE` · label `IMAGE SAMPLE ONLY – not the actual development` · fine print as in the copy.
- The name lockup plus the price block make Headline A ("Coastal Cabana EC: 3-Bedroom From $1.542M*"). The price is the largest type on the panel, and `DELUXE · 872 SQFT` sits directly under it.
- **Swap-in:** once S7 clears the official exterior render, it replaces the shoreline and the label becomes `IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY`.

**Prompt (4:5, paste as one block)**

```text
Create a portrait 4:5 social media ad, exactly 1080x1350 px, for a Singapore executive condominium, designed as a split-screen name card. LEFT 55% of the frame (full height down to the bottom band): a photoreal photograph of a calm, empty east-coast shoreline in soft early-morning light, a row of feathery casuarina trees on the left edge, pale sand in the foreground, flat calm soft grey-green water with small lapping waves, a hazy pale horizon, gentle cool tones. No buildings anywhere. Near the bottom-left of the photo, small italic white text on a subtle dark translucent strip: "IMAGE SAMPLE ONLY – not the actual development". RIGHT 45% of the frame: a solid deep sea-blue panel (#0B4F6C) with 36 px inner padding and a crisp vertical edge against the photo. Inside the panel, top to bottom, all left-aligned: (1) a small solid red tag (#D0021B) with "SINGAPORE HOMEBUYER" in white bold all-caps sans-serif, wide letter-spacing, about 18 px. (2) A small sand-white (#F8F1E7) all-caps line, wide tracking, about 15 px: "EXECUTIVE CONDOMINIUM · PASIR RIS". (3) The project name in a wide heavy geometric sans-serif (Montserrat ExtraBold style), sand-white, about 52 px, on two lines: "COASTAL" and "CABANA EC:". (4) The price block: a small sand-white all-caps line, about 20 px: "3-BEDROOM FROM"; under it the price, the largest text on the panel, heavy geometric sans, sun coral (#F07C5A), about 88 px: "$1.542M*"; under it a small sand-white all-caps line, about 18 px: "DELUXE · 872 SQFT". (5) The subhead in regular sand-white sans-serif, about 21 px, on three lines: "Near Pasir Ris MRT, opposite Downtown East, with Pasir Ris Beach nearby." (6) Three stacked full-width tiles, each about 414 x 82 px with 10 px gaps, a slightly lighter translucent sea-blue fill and a 4 px sun-coral bar on the left edge; each tile has a bold sand-white all-caps line, about 24 px, with a small sand-white all-caps caption under it, about 14 px: tile 1 "65+ FACILITIES" / "PER DEVELOPER"; tile 2 "PASIR RIS EAST MRT" / "CROSS ISLAND LINE, 2030 TARGET"; tile 3 "SHOW FLAT" / "OPEN FOR VIEWING". (7) A clear empty strip about 60 px tall (reserved for licence details, leave it blank). (8) A sand-white (#F8F1E7) capsule button the full panel width, about 76 px tall, fully rounded ends, with a small sea-blue wave glyph at the left and "GET PRICE LIST & E-BROCHURE" in bold sea-blue all-caps geometric sans-serif, about 19 px. BOTTOM BAND, full width across both halves, the bottom 12% of the frame: a flat sand-white (#F8F1E7) band with tiny sea-blue fine print, about 14 px, left-aligned with 40 px margins, on exactly three lines: "EC eligibility conditions apply. *Based on developer price list as at [DATE]. Subject to availability and change." / "Excludes stamp duties. 99-year leasehold. Distances approx., straight-line." / "Cross Island Line targeted for 2030; timeline subject to change." Print "[DATE]" literally, with the square brackets. If small text is unreadable, leave the fine-print area blank. Render every quoted string exactly once, spelled exactly as quoted, and add no other text. Look: calm, confident, airy coastal; premium but plain; the price reads first, then the name. Avoid: any condo tower, apartment block, facade, skyline, construction site or architectural render; people; jetties, boardwalks, piers, sculptures, shelters, signs, lifeguard towers or offshore islands; theme-park rides, water slides, Ferris wheels or resort signage; turquoise or tropical-aqua water; developer names or logos; any other price, psf, discount, unit count or "% sold"; the words "freehold", "preview", "VVIP" or "MOP"; walk minutes or metre figures; district codes or street names; MRT or LTA logos, station codes or real rail line colours (green, lime, red, purple, orange, yellow, blue, brown); misspelled, warped, duplicated or extra text; watermarks, QR codes, phone numbers.
```

**9:16 (paste in the same chat after the 4:5 result):** `Now recompose this exact ad as a 9:16 portrait, 1080x1920 px, with identical text, colours and fonts: the shoreline photo fills the top 40% at full width (label at its bottom-left), the sea-blue panel fills everything below; set the name at about 76 px and the price at about 120 px, put the three tiles side by side in one row (about 320 x 130 px each), and place the subhead, tiles, blank 60 px strip, capsule button and the three fine-print lines (now in sea-blue-grey on the panel) all between 40% and 80% of the height; keep the bottom 20% plain sea-blue with no text. If small text is unreadable, leave the fine-print area blank.`

---

### R2-B. Floor plan (blind, illustrative fallback): blueprint sheet

- **On-image strings:** `SINGAPORE HOMEBUYER` · headline `3-Bedroom EC Layouts From 872 sqft` · plan title `3-BEDROOM LAYOUT · ILLUSTRATIVE, NOT TO SCALE` · room labels `BEDROOM` (x3), `LIVING / DINING`, `KITCHEN`, `BATH` (x2) · chips `2.8M CEILINGS`, `NO STACK FACES DIRECT WEST SUN` · subhead `EC with 2.8m ceilings, near Pasir Ris MRT & opposite Downtown East.` · CTA `GET PRICE LIST & E-BROCHURE` · fine print as in the copy.
- **No price on the image.** The plan sheet shows no unit name (no "Deluxe" or "Premium"), no sqft, no dimensions and no unit code. It never shows 4 or 5 bedrooms. There's no render inset (no official render, Flag 14 gap).
- The plan is a generic schematic. Unlike Revision 1 C6, the model may draw it here, because the copy only needs an illustrative layout. If the drawing comes out implausible (doors into walls, a 4th bedroom, stray numbers), clear the plan card and redraw it in Canva with the same labels.
- **Headline B swap:** `3-Bedroom EC Layouts, 872 to 915 sqft` (one line at about 56 px).

**Prompt (4:5, paste as one block)**

```text
Create a portrait 4:5 social media ad, exactly 1080x1350 px, for a Singapore executive condominium, styled as an architect's blueprint sheet. No photographs. TOP 17% of the frame: a flat drafting-white band (#F9FBFD) with 56 px side margins. Top-left in the band: a small solid red tag (#D0021B) with "SINGAPORE HOMEBUYER" in white bold all-caps sans-serif, wide letter-spacing, about 18 px. Below it, the headline in a bold technical condensed sans-serif (Barlow Condensed Bold style), cyanotype blue (#123E7C), about 62 px, on one line: "3-Bedroom EC Layouts From 872 sqft". BELOW THE BAND, the rest of the frame is a pale blueprint field (#E4EEF8) with a fine square drafting grid in thin cyanotype-blue lines at low opacity, a slightly heavier line every fifth square, faint registration crosshairs in the corners and a subtle paper texture. At about 19% of the height, left-aligned at the 40 px margin: a small cyanotype-blue (#123E7C) rectangular title chip with white monospaced all-caps text, about 17 px: "3-BEDROOM LAYOUT · ILLUSTRATIVE, NOT TO SCALE". PLAN CARD, from about 23% to 66% of the height, full width between 40 px margins: a white card with a thin dashed cyanotype border holding a simple, clean, top-down architectural floor plan of ONE generic apartment, drawn in cyanotype-blue linework only: thick outer walls, thinner inner walls, door swings as quarter-circle arcs, windows as thin triple lines in the outer walls. The plan has exactly three bedrooms (one slightly larger, each with a simple bed rectangle), an open living and dining area with a simple sofa and table outline, a compact kitchen along one wall, and two small bathrooms. Room labels in small cyanotype monospaced all-caps, about 15 px, centred in each room, and no other text in the plan: "BEDROOM" in each of the three bedrooms, "LIVING / DINING", "KITCHEN", and "BATH" in each of the two bathrooms. No dimensions, numbers, sqft figures, unit codes, compass or scale bar anywhere on the plan. Overlapping the bottom edge of the plan card: two short strips of masking tape (#F1E3B8), each slightly tilted, with bold cyanotype monospaced all-caps text, about 17 px: the left strip "2.8M CEILINGS", the right strip "NO STACK FACES DIRECT WEST SUN". BOTTOM PART of the frame, on the blueprint field, 40 px margins: the subhead in regular cyanotype condensed sans-serif, about 26 px, on two lines: "EC with 2.8m ceilings, near Pasir Ris MRT & opposite Downtown East."; then tiny cyanotype fine print, about 14 px, on exactly two lines: "EC eligibility conditions apply. Illustrative layout only, not to scale." / "Sizes approx., per developer; subject to final survey. 99-year leasehold. Distances approx., straight-line." If small text is unreadable, leave the fine-print area blank. Then a clear empty strip about 60 px tall (reserved for licence details, leave it blank). Then a full-width cyanotype-blue (#123E7C) rectangular button styled like an architectural drawing title-block, about 84 px tall, square corners, a thin white double-line inner border and one small divided cell at the right end, with "GET PRICE LIST & E-BROCHURE" in bold white all-caps condensed sans-serif, about 22 px. Leave about 40 px of plain blueprint field below the button. Render every quoted string exactly once, spelled exactly as quoted, and add no other text. Look: practical, precise, architect's drafting table, generous white space, calm and trustworthy. Avoid: any price, dollar sign or psf; the words "Deluxe", "Premium" or any unit name; a fourth or fifth bedroom; balconies, pools or site plans; dimension lines or numbers; any photograph, building, tower, facade, skyline or render; people; project, developer, mall or school names or logos; unit counts or "% sold"; "freehold", "preview", "VVIP" or "MOP"; walk minutes or metre figures; district codes or street names; MRT or LTA logos or real rail line colours; misspelled, warped, duplicated or extra text; watermarks, QR codes, phone numbers.
```

**9:16 (paste in the same chat after the 4:5 result):** `Now recompose this exact ad as a 9:16 portrait, 1080x1920 px, with identical text, colours, fonts and the same three-bedroom plan: start the white header band below the top 14% and set the headline on two lines at about 72 px; make the plan card much larger, from about 25% to 66% of the height, so the plan reads at phone size; put the two tape chips on its bottom edge, then the subhead, the two fine-print lines, a blank 60 px strip and the title-block button, all ending above 80% of the height; keep the bottom 20% plain blueprint grid with no text. If small text is unreadable, leave the fine-print area blank.`

---

### R2-C. Price + near MRT (blind): price-tag hero with "nearby" chips

- **On-image strings:** `SINGAPORE HOMEBUYER` · price card `3-BEDROOM EC FROM` / `$1.542M*` / `DELUXE · 872 SQFT` · headline `3-Bedroom EC From $1.542M*, Near Pasir Ris MRT` · chips `PASIR RIS BEACH / NEARBY`, `PASIR RIS PARK / NEARBY`, `WHITE SANDS / NEXT TO PASIR RIS MRT`, `65+ FACILITIES / PER DEVELOPER` · subhead `Opposite Downtown East. Pasir Ris East MRT (Cross Island Line) from 2030 (target).` · CTA `GET PRICE LIST & E-BROCHURE` · label `IMAGE SAMPLE ONLY – not the actual development` · fine print as in the copy.
- New layout, not used in Revision 1 or R2-A/B. No project name, developer or address anywhere.
- **Headline B swap:** headline `New Pasir Ris EC: 3-Bedroom From $1.542M*`, subhead `Near Pasir Ris MRT, opposite Downtown East. Cross Island Line from 2030 (target).`, and the `WHITE SANDS` chip becomes `PASIR RIS EAST MRT / CROSS ISLAND LINE, 2030 TARGET`.

**Prompt (4:5, paste as one block)**

```text
Create a portrait 4:5 social media ad, exactly 1080x1350 px, for a Singapore executive condominium, designed around a big price swing-tag. TOP 46% of the frame, full width: a photoreal photograph of a quiet seaside park in warm early-morning light: a curving paved footpath through green lawn, shaded by tall feathery casuarina trees, with a glimpse of calm soft grey-green sea and a hazy horizon in the background, dappled sunlight, fresh and green. No buildings anywhere, no people. Top-left over the photo: a small solid red tag (#D0021B) with "SINGAPORE HOMEBUYER" in white bold all-caps sans-serif, wide letter-spacing, about 18 px. Bottom-right of the photo: small italic white text on a subtle dark translucent strip: "IMAGE SAMPLE ONLY – not the actual development". BELOW THE PHOTO, the rest of the frame is a flat warm cream background (#FFF8EC). PRICE TAG: a sunshine-yellow (#FFC93C) swing-tag card about 560 x 290 px with rounded corners and a small punched hole with a short casuarina-green string at its top-left, tilted about 3 degrees, left-aligned at 48 px from the edge and overlapping the bottom edge of the photo (roughly from 36% to 57% of the height), with a soft drop shadow. On the tag, in casuarina green (#1F4D3A), left-aligned: a bold all-caps line in a clean sans-serif (DM Sans Bold style), about 22 px: "3-BEDROOM EC FROM"; under it the price, the largest text in the ad, in a soft heavy serif (Recoleta Black / Fraunces Black style), about 120 px: "$1.542M*"; under it a bold all-caps line, about 20 px: "DELUXE · 872 SQFT". BELOW THE TAG, on cream, with 48 px margins: the headline in the same soft heavy serif, ink (#1B1B1B), about 44 px, on two lines: "3-Bedroom EC From $1.542M*, Near Pasir Ris MRT". Then a 2x2 grid of four chips, each about 480 x 74 px, rounded corners, white fill with a thin casuarina-green border and a small simple line icon at the left (wave, tree, shopping bag, star); each chip has a bold casuarina-green all-caps line, about 20 px, with a small ink all-caps caption under it, about 14 px: chip 1 "PASIR RIS BEACH" / "NEARBY"; chip 2 "PASIR RIS PARK" / "NEARBY"; chip 3 "WHITE SANDS" / "NEXT TO PASIR RIS MRT"; chip 4 "65+ FACILITIES" / "PER DEVELOPER". Then the subhead in regular ink sans-serif, about 22 px, on two lines: "Opposite Downtown East. Pasir Ris East MRT (Cross Island Line) from 2030 (target)." Then tiny grey-green fine print, about 13 px, on exactly three lines: "EC eligibility conditions apply. *Based on developer price list as at [DATE]. Subject to availability and change." / "Excludes stamp duties. 99-year leasehold. Distances approx., straight-line." / "Cross Island Line targeted for 2030; timeline subject to change." Print "[DATE]" literally, with the square brackets. If small text is unreadable, leave the fine-print area blank. Then a clear empty strip about 50 px tall (reserved for licence details, leave it blank). Then a full-width casuarina-green (#1F4D3A) button with 16 px rounded corners, about 76 px tall, with "GET PRICE LIST & E-BROCHURE" in bold sunshine-yellow (#FFC93C) all-caps sans-serif, about 21 px. Leave a thin cream margin below the button. Render every quoted string exactly once, spelled exactly as quoted, and add no other text. Look: warm, bright, friendly and plain-spoken; the yellow price tag is the first thing the eye hits. Avoid: any condo tower, apartment block, house, facade, skyline, construction site or architectural render; people or faces; jetties, piers, boardwalks, sculptures, shelters, signs, playgrounds, lifeguard towers or offshore islands; theme-park rides, water slides, Ferris wheels, malls or resort signage; turquoise or tropical-aqua water; project or developer names or logos; any other price, psf, discount, "sale" or "deal" wording, unit count or "% sold"; the words "freehold", "preview", "VVIP" or "MOP"; walk minutes or metre figures; district codes or street names; maps, MRT or LTA logos, station codes or real rail line colours (green, lime, red, purple, orange, blue, brown); misspelled, warped, duplicated or extra text; watermarks, QR codes, phone numbers.
```

**9:16 (paste in the same chat after the 4:5 result):** `Now recompose this exact ad as a 9:16 portrait, 1080x1920 px, with identical text, colours and fonts: the park photo fills the top 40% at full width (red tag placed below the top 14%, label at its bottom-right), the yellow price tag overlaps the photo's bottom edge at about 640 x 330 px, and below it on cream the headline, the four chips as a 2x2 grid, the subhead, the three fine-print lines, a blank 50 px strip and the green button all end above 80% of the height; keep the bottom 20% plain cream with no text. If small text is unreadable, leave the fine-print area blank.`

---

### Flags (Revision 2)

1. **Designer-set strings for the copywriter to proof:**
   - **Fine print split into lines** on all 3. The words are the copy's, unchanged. Only the line breaks are new.
   - **R2-A:** the name lockup is set as `COASTAL` / `CABANA EC:` (colon kept so the panel reads as Headline A). The tile order puts 65+ FACILITIES first and the Cross Island Line second, so the future-rail tile sits under the price.
   - **R2-B:** the room labels `BEDROOM`, `LIVING / DINING`, `KITCHEN`, `BATH` are the copy's generic labels in caps. Two baths is the plan's illustrative choice, not a claim; the fine print covers it ("Illustrative layout only").
   - **R2-C:** the chip icons (wave, tree, shopping bag, star) carry no text.
2. **Price legibility.** `$1.542M*` must read exactly. Models sometimes drop the asterisk or the "2". Reject or retype any output where it doesn't match.
3. **Image-model risks:** a stray building on the horizon (R2-A, R2-C), a jetty or island (R2-A), a playground or shelter (R2-C), aqua water (CC6), or a 4th bedroom or numbers in the plan (R2-B). Reject and regenerate, or fix in Canva.
4. **Stock-dependent strings (S4).** If the 872 sqft Deluxe sells out, every `$1.542M*`, `DELUXE · 872 SQFT` and R2-B's headline change, and the set goes back to the copywriter.
5. **9:16 safe zones.** All three 9:16 lines keep text out of the top 14% (about 270 px) and the bottom 20% (about 385 px).
