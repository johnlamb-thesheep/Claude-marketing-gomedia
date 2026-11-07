# Hougang Central Residences (working name): Image Prompts (GoAhead, 7 ads, 7 different layouts)

Revision 1, written 2026-11-05 by static-designer. The user asked in chat to "do the same process full for hougang". **These are prompts only.** Nothing has been generated and no paid call has been made.

- **Copy source:** `copy-hougang-central.md`, Revision 1.
  - Headline A, the subhead, the on-image strings and the layout column are used word for word.
  - Headline B appears as a swap line under each ad.
  - The few strings I had to add or reorder are listed in Flag 4 for the copywriter to proof.
- **Facts source:** `research-hougang-central.md`, CONFIRMED rows only.
- **Format source:** `arcady-prompts.md`. The structure is the same. Every palette is new.
- **This project is pre-launch, and no building exists:**
  - No ad shows a condo tower, facade or anything that could pass for the project.
  - No official developer render, plan or photo exists yet, and `inputs/product-images/` is empty.
  - No images were fetched.
- **Hard rules on every ad (fine print included):**
  - No price, "$" or psf.
  - No unit counts, no "mega", no "% sold" and no scarcity.
  - No "D19" or any district code, and no street names.
  - No "freehold". The project is 99-year leasehold.
  - **No walk-minute or drive-time numbers anywhere.** MRT copy is "above Hougang MRT" plus stop counts.
  - **Full MRT names on every label:** Hougang MRT, Serangoon MRT, Dhoby Ghaut MRT, Ang Mo Kio MRT, Pasir Ris MRT, Bright Hill MRT.
  - **The Cross Island Line always carries "FROM 2030 (TARGET)"** wherever it is labelled on an image.
  - No real MRT line colours (North East Line purple, Cross Island Line lime, Circle Line orange/yellow, and the red, green, blue and brown lines). No LTA or MRT logos, no station codes, no real maps.
  - **Only C1 shows the name.** It sits on its own swappable text layer, with a `WORKING NAME – OFFICIAL NAME TBC` chip.
  - C2–C7 ban every project, developer, mall, school or shop name, logo and sign from the imagery. The quoted copy strings ("Hougang Mall", "Montfort Junior School" and so on) are typeset in Canva, and that is allowed.
  - People are never identifiable. Show them from behind, in soft focus, as distant silhouettes or as hands only. Illustrated figures have no facial features.
- **Brand constants (everything else changes per ad):**
  1. The red `SINGAPORE HOMEBUYER` eyebrow (#D0021B).
     - It is red text on the light backgrounds (C3, C5, C7).
     - It is a small solid red tag with white letters on the colour, dark or photo backgrounds (C1, C2, C4, C6).
  2. The CTA `REGISTER YOUR INTEREST`. Its shape and colour change per ad. The Meta button is **"Sign up"**, not GET_QUOTE or Download (copy rule).
  3. Image labels:
     - Every generic, stock, generated or illustrated image gets `IMAGE SAMPLE ONLY – not the actual development` (perf T10 precedent).
     - `IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY` is used **only** on an official developer render of this project. None exists yet, so this label appears only in the swap-in notes for C1 and C4.
     - The C3 route diagram gets `Illustrative diagram, not to scale.`
     - C1 and C6 use no photo and need no image label.
- **Fine print (copy-approved base strings, combined per ad):**
  - On all 7: `Planned components and Cross Island Line timeline (2030 target) subject to change.`
  - On all 7, because every subhead names a mall, park or school: `Distances approx., straight-line.`
  - On C1 and C3: `Stop counts from MRT line maps.`
  - On C2 and C7: `School admission subject to MOE regulations and balloting.` This is the copy's on-image MOE string, set in small print.
  - A clear strip of about 60 px above each CTA, kept empty for the CEA particulars (perf S3).
- **Workflow (perf S2, mandatory):**
  - Generate with the **image-only prompt**, which leaves the text zones empty.
  - Set every string in Canva or Figma, and proof each character against `copy-hougang-central.md`.
  - Draw cards, chips, badges, tiles, diagrams, toggles and buttons as Canva shapes in the exact hex. Treat any generated colour as a placeholder.
  - **C1, C3 and C6 can be built entirely in Canva with no generation at all.** Their image-only prompts are optional backgrounds.
  - The "full prompt (with text)" is for a quick layout mock-up only. Never publish its rendered text.
- **9:16 (perf S1):** each ad has an adaptation note. At 1080x1920, keep all text clear of the top 14% (about 270 px) and the bottom 20% (about 385 px).

---

## Design at a glance

| Ad | Angle / hook | Headline A (on image) | Layout | Colours | Type treatment | Photo / visual style | CTA shape | Label |
|---|---|---|---|---|---|---|---|---|
| **C1** | Direct (named). Factual: name + rail stop | Hougang Central Residences: 2 Stops to Serangoon MRT | **Typographic announcement card.** Name huge over 2 lines, "WORKING NAME" chip, brass headline tail, row of 3 square fact tiles | Ink navy (#0D1B3A), lighter navy tiles (#16264A), brass (#D9A441), chalk white (#F6F4EE) | **Heavy black grotesk** (Neue Haas / Helvetica Black style), tight tracking, all caps for the name | **No photo.** Faint concentric contour-line pattern, lower right. Official render only as a future swap-in | Full-width **solid brass bar**, square corners, navy chevron | None (no image). Swap-in render: IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY |
| **C2** | Family. Emotional question | Looking for a home for your family? | **Photo-album collage.** Question in the top 36%, 3 tilted polaroids with washi tape, red pin-badge on the seam | Blush album board (#F2D8CF), deep plum (#4A2240), marigold tape (#F4A82E), polaroid white (#FDFCF8), red badge | **Big rounded sans** (Nunito Black / SF Rounded style) plus **felt-tip marker print** captions | Bright, true-colour daytime **snapshots** in white polaroid frames. Families from behind | **Plum rounded rectangle with a marigold washi-tape strip** across its left end | IMAGE SAMPLE ONLY – not the actual development |
| **C3** | MRT. Question answered with stop counts | How Many Train Changes Is Your Commute? | **Two-line route diagram.** A solid diagonal and a dashed horizontal cross at a big ringed "HOME" node, with stop-count bubbles | Pale cool grey (#F1F3F6), deep teal solid line (#0F5E63), hot-pink dashed line (#FF4F9A), ink (#1B2230) | **Bold geometric sans** (Futura / Avenir style) headline. **Heavy condensed tabular numerals** in the bubbles | **Flat vector diagram.** No photo, no real map | **Hot-pink pill with a white "terminus dot"** at its left end | Illustrative diagram, not to scale. |
| **C4** | Mall at your doorstep. Playful "what if" | What If the Mall Was Your Lobby? | **2x2 lifestyle mosaic** with a dark **backlit mall-directory panel** over the centre, solid espresso base band | Espresso (#1C1512), warm white (#FFF8EE), copper (#D9824B), warm evening photo grade | **DIN-style wayfinding signage sans**, wide-tracked caps for the list, simple white pictograms | **Warm evening lifestyle photos**: café table from above, plain shopping bags, dusk plaza, motion-blurred bus | **Copper square-cornered directory plaque** with a wayfinding arrow | IMAGE SAMPLE ONLY – not the actual development |
| **C5** | Stay-in-Hougang upgrader. Local self-ID | Love Hougang? Upgrade Without Moving Away. | **Tilted postcard.** Photo on the left half, handwritten message on the right, "HOUGANG" stamp and "STAY IN HOUGANG" postmark | Eucalyptus backdrop (#CFE3D3), kraft card (#D8C29B), leaf green (#3E8E48), fountain-pen blue (#23408E) | **Flowing brush-pen script** headline. Clean sans message. **Letterpress slab caps** on the stamp | **Sun-soft morning park path** under rain trees, printed-photo look, no buildings | **Airmail-border button**: white with red and blue diagonal stripes | IMAGE SAMPLE ONLY – not the actual development |
| **C6** | Be first to know (Price slot). Honest "not out yet" | Prices Aren't Out Yet. Want to Be First? | **Status-tracker app card**: 3 "NOT ANNOUNCED YET" rows and a big "NOTIFY ME" toggle | Electric periwinkle field (#5B6CFF), near-white card (#FDFDFF), slate (#2E3445), grey pills (#E4E6EC), toggle green (#22C55E) | **Rounded UI sans** (Manrope / SF Rounded style) with **small monospaced status pills** | **Pure UI.** No photo, no "$", no fake numbers | **Slate rounded app button with a white bell icon** | None (no image) |
| **C7** | Day in the life. Story sequence | Morning Train, School Run, Park, Mall. One Address. | **4-panel storyboard** in a 2x2 comic grid with thick ink borders and caption boxes | Warm white (#FFFBF4), with panels in peach (#FFCFAE), sky (#A9DCF3), dusky rose (#E591A8) and lilac (#BBA7E6); ink (#1A1A2E) | **Comic-book hand-lettered caps** in the caption boxes. Bold condensed sans headline with "One Address." set large | **Soft flat illustration**, faceless figures, a morning-to-night colour sequence | **Ink-black comic caption-box button** with an offset lilac shadow and a play triangle | IMAGE SAMPLE ONLY – not the actual development |

How the seven differ:
- **Layout:** type-only card, polaroid collage, route diagram, photo mosaic with a sign panel, postcard, app card, comic storyboard.
- **Colour:** navy with brass, blush with plum, cool grey with teal and pink, espresso with copper, eucalyptus with kraft, periwinkle with green, a four-colour pastel sequence.
- **Type:** black grotesk, rounded sans with marker, geometric sans with condensed numerals, wayfinding DIN, brush script with slab stamp, rounded UI with mono pills, comic lettering.
- **Visual source:** none (pattern only), daytime snapshots, vector, evening lifestyle photos, morning park print, UI only, flat illustration.
- **CTA:** brass bar, taped album label, terminus pill, directory plaque, airmail button, app button with a bell, comic caption box.

None of the Amber House or Arcady hex values are reused. The only shared hex is the brand-constant red (#D0021B). Where the copywriter's palette column would have echoed an earlier set (C2 teal and cream, C3 charcoal and coral), I changed the colours and kept the layout. See Flag 5.

---

## C1. Direct (named): typographic announcement card

- **Headline (A):** Hougang Central Residences: 2 Stops to Serangoon MRT
  - Set it as two parts. The name is huge, in caps, over 2 lines ("HOUGANG CENTRAL" / "RESIDENCES:"). The tail "2 Stops to Serangoon MRT" is in brass.
  - **The name and colon sit on their own text layer**, so a different official name can be dropped in on the day it is announced.
- **Name chip (directly under the name):** WORKING NAME – OFFICIAL NAME TBC
- **Subhead:** Above Hougang MRT, near Hougang Mall, with a new mall planned on site.
- **3 fact tiles (copy-approved, none repeats Headline A):**
  - **8 STOPS** / TO DHOBY GHAUT MRT
  - **FROM 2030 (TARGET)** / CROSS ISLAND LINE. I reordered the copy's "2030 / CROSS ISLAND LINE (TARGET)" so the label reads "FROM 2030 (TARGET)" as the user requires (Flag 4).
  - **TOWN PLAZA** / & NEW BUS INTERCHANGE PLANNED
- **CTA:** REGISTER YOUR INTEREST (full-width solid brass bar, square corners, navy chevron)
- **Fine print:** Planned components and Cross Island Line timeline (2030 target) subject to change. Distances approx., straight-line. Stop counts from MRT line maps.
- **Label:** none, because there is no image.
- **Visual:**
  - **No photo and no building.** A faint concentric contour-line pattern sits in the lower right, like ripples. It is not a map, a grid, rail lines or a skyline.
  - The developers (UOL, CapitaLand) stay in the primary text only. They never appear on the image.
  - **Swap-in, when an official render is released and cleared (perf S7):** it replaces the contour pattern as a full-width band between the headline tail and the tiles (about 26% of the frame height). Retouch out any logo, label it `IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY` on the band, and shrink the name to about 96 px to make room. **Until then, no tower of any kind.**

**Full prompt (with text)**

```text
Portrait 4:5 social media ad, 1080x1350 px, for a Singapore pre-launch condo, as a purely typographic announcement card with no photograph. The whole frame is a flat, solid deep ink-navy field (approx. #0D1B3A) with 72 px margins. In the lower-right third only, a very subtle abstract pattern of fine concentric contour lines in a slightly lighter navy (approx. #1A2C55), low contrast, like ripples on water, fading out toward the centre of the frame; no grid, no map, no rail lines, no skyline. Top-left: a small solid red tag (approx. #D0021B) with "SINGAPORE HOMEBUYER" in white bold all-caps sans-serif with wide letter-spacing, about 22 px. 40 px below it, the project name in a heavy black grotesk sans-serif (Neue Haas Grotesk Black / Helvetica Black style), chalk white (approx. #F6F4EE), about 118 px, tight tracking, left-aligned on exactly two lines: "HOUGANG CENTRAL" and "RESIDENCES:". Directly under the name: a small outline chip with a 2 px brass border (approx. #D9A441), 6 px rounded corners and transparent fill, reading "WORKING NAME – OFFICIAL NAME TBC" in brass all-caps sans-serif, about 18 px. Below the chip, the headline tail in the same grotesk, bold, brass (approx. #D9A441), about 60 px, on one line: "2 Stops to Serangoon MRT". Below it, a row of three equal square tiles, about 300 x 300 px each with 24 px gaps, each filled with a slightly lighter navy (approx. #16264A) and topped by a thin 3 px brass rule; each tile holds a large chalk-white grotesk figure with a small brass all-caps caption beneath: tile 1 "8 STOPS" with caption "TO DHOBY GHAUT MRT"; tile 2 "FROM 2030" with a small "(TARGET)" right after it, and caption "CROSS ISLAND LINE"; tile 3 "TOWN PLAZA" with caption "& NEW BUS INTERCHANGE PLANNED". Below the tiles, the subhead in regular chalk-white sans-serif, about 26 px, left-aligned on two lines: "Above Hougang MRT, near Hougang Mall, with a new mall planned on site." Then tiny pale grey-blue fine print, about 14 px, on two lines: "Planned components and Cross Island Line timeline (2030 target) subject to change. Distances approx., straight-line. Stop counts from MRT line maps." Then a clear empty strip about 60 px tall. Bottom: a full-width solid brass bar (approx. #D9A441), square corners, about 96 px tall, with "REGISTER YOUR INTEREST" in bold ink-navy all-caps sans-serif and a small navy chevron on the right. Look: calm, factual, news-like announcement, confident and premium, like a launch notice in a financial paper; every string crisp, legible at mobile size and rendered exactly once. Avoid: any photograph; any condo tower, building facade, skyline, construction site or architectural render; developer names or logos; any price, dollar sign, psf, unit count, "mega" or "% sold"; walk or drive minutes; "freehold"; district codes or street addresses; MRT/LTA logos, station codes or rail line colours (purple, lime, orange, yellow, red, green, blue, brown); maps; misspelled, warped, duplicated or extra text beyond the quoted strings; watermarks; icons; people; QR codes, phone numbers. Genre: Singapore property paid-social static ad.
```

**Image-only prompt (add text in Canva)**

```text
Portrait 4:5 image, 1080x1350 px, with no text of any kind: a completely flat, solid deep ink-navy field (approx. #0D1B3A). In the lower-right third only, a very subtle abstract pattern of fine concentric contour lines in a slightly lighter navy (approx. #1A2C55), thin and low contrast, like ripples on water, fading out before the centre of the frame. RESERVED TEXT ZONES, all left as plain navy: 0–9% for a small tag; 9–30% for a two-line name in very large type; 30–34% for a small chip; 34–40% for a one-line headline tail; 40–63% for a row of three square tiles; 63–75% for a two-line subhead and fine print; 75–80% clear strip for licence particulars; 80–88% for a full-width button. Look: minimal, premium, calm. Avoid: any text, letters, numbers, logos or watermarks; any building, tower, skyline or map; rail lines or grids; gradients, glows, objects or texture outside the faint contour pattern.
```

This ad can be built entirely in Canva: a navy rectangle plus a contour-line element. Skip generation unless the pattern is wanted.

**B-swap:** use the headline "Hougang Central Residences. Two MRT Lines From 2030." Keep the name layer and chip, and set the tail "Two MRT Lines From 2030." in brass. Swap tile 2 for **2 STOPS** / TO SERANGOON MRT (copy-approved). Tile 2 no longer carries the Cross Island Line label, so add a small brass line under the tail reading `CROSS ISLAND LINE · FROM 2030 (TARGET)` (designer string, Flag 4).

**9:16:** keep the single column. Start the tag just below the top 14%. Set the name at about 130 px over 2 lines. Keep the three tiles in a row at about 316 px square. Add about 40 px more breathing room between blocks, and keep the brass bar above the bottom 20%, with plain navy below it.

---

## C2. Family (blind): photo-album collage with three polaroids

- **Headline (A):** Looking for a home for your family?
- **Subhead:** Above Hougang MRT, near Montfort Junior School, Punggol Park & Hougang Mall.
- **Round red pin-badge (copy-approved):** **3 PRIMARY SCHOOLS** / NEARBY
  - Directly under it, in small print: School admission subject to MOE regulations and balloting.
- **Polaroid captions (felt-tip marker print, copy-approved):** "School run" · "Weekends at the park" · "Errands nearby"
- **CTA:** REGISTER YOUR INTEREST (plum rounded rectangle with a marigold washi-tape strip across its left end)
- **Label:** IMAGE SAMPLE ONLY – not the actual development (one line under the polaroid cluster, covering all three photos)
- **Fine print:** Planned components and Cross Island Line timeline (2030 target) subject to change. Distances approx., straight-line.
- **Visual:**
  - **Polaroid 1, "School run":** a parent and child **from behind**, walking hand in hand along a sunny, tree-shaded covered walkway. The child has a small plain backpack.
  - **Polaroid 2, "Weekends at the park":** a family on a picnic mat on grass under a big rain tree, seen from behind at mid-distance, in soft focus.
  - **Polaroid 3, "Errands nearby":** a parent and child from behind, waist-up, carrying plain unbranded paper shopping bags along a bright open walkway.
  - **No** school building, gate, uniform, crest, park sign, shopfront, logo, HDB block number or tower. No faces.
  - The look is bright, true-colour daytime snapshots. It is not the faded film look of Arcady C2.

**Full prompt (with text)**

```text
Portrait 4:5 social media ad, 1080x1350 px, for a Singapore pre-launch condo, styled as a family photo-album page. Background: a soft blush album board (approx. #F2D8CF) with a faint linen paper texture, 64 px margins. TOP 36% of the frame: top-left, a small solid red tag (approx. #D0021B) with "SINGAPORE HOMEBUYER" in white bold all-caps sans-serif with wide letter-spacing, about 22 px; below it, the headline in a very large, friendly, heavy rounded sans-serif (Nunito Black / SF Rounded Heavy style) in deep plum (approx. #4A2240), about 96 px, left-aligned on exactly three lines: "Looking for a home for your family?". On the right side of the frame, straddling the bottom of this top zone: a round solid red (approx. #D0021B) pin-back badge about 210 px across with a thin white ring and a soft drop shadow, reading "3 PRIMARY SCHOOLS" in bold white all-caps sans-serif with "NEARBY" smaller beneath; directly under the badge, tiny plum text, about 13 px, on two centred lines: "School admission subject to MOE regulations and balloting." MIDDLE, from about 36% to 74% of the frame height: three overlapping instant-film polaroid prints with off-white frames (approx. #FDFCF8) and a thicker bottom border, tilted at about -6, +4 and -3 degrees, each held by a short strip of marigold washi tape (approx. #F4A82E) on one corner, with soft realistic shadows on the board. Polaroid 1 (left): a bright, true-colour daytime snapshot of a parent and a young child seen from behind, walking hand in hand along a sunny, tree-shaded covered walkway, the child wearing a small plain backpack; its bottom border carries the handwritten caption "School run" in plum felt-tip marker print. Polaroid 2 (centre, slightly higher): a family sitting on a picnic mat on grass under a big spreading rain tree, seen from behind at mid-distance, in soft focus; caption "Weekends at the park". Polaroid 3 (right, lower): a parent and child seen from behind, waist-up, carrying plain unbranded paper shopping bags along a bright, open covered walkway; caption "Errands nearby". Directly under the cluster, right-aligned, small italic plum text, about 15 px: "IMAGE SAMPLE ONLY – not the actual development". BOTTOM 26%: the subhead in regular plum sans-serif, about 25 px, left-aligned on two lines: "Above Hougang MRT, near Montfort Junior School, Punggol Park & Hougang Mall."; tiny plum fine print, about 14 px, on two lines: "Planned components and Cross Island Line timeline (2030 target) subject to change. Distances approx., straight-line."; a clear empty strip about 60 px tall; then a deep plum (approx. #4A2240) rounded-rectangle button, about 78% of the frame width, centred, with a short strip of marigold washi tape laid diagonally across its left end, and "REGISTER YOUR INTEREST" in bold white all-caps rounded sans-serif. Look: warm, personal, parent-to-parent, like a page from a family's own album; every string crisp, legible at mobile size and rendered exactly once. Avoid: identifiable or close-up faces, people facing the camera; school buildings, school gates, uniforms, crests or school logos; park signs, name boards or wayfinding; shopfronts, brand logos or printed bags; any project, condo, developer, mall or school name or signage in the photos; any condo tower, HDB block number or recognisable landmark; any price, dollar sign, psf, unit count or "% sold"; walk or drive minutes; district codes or street addresses; MRT/LTA logos or rail line colours; misspelled, warped, duplicated or extra text beyond the quoted strings; watermarks; QR codes, phone numbers. Genre: Singapore property paid-social static ad.
```

**Image-only prompt (add text in Canva)**

```text
Portrait 4:5 image, 1080x1350 px, with no text of any kind. Background: a soft blush album board (approx. #F2D8CF) with a faint linen paper texture covering the whole frame. TOP 36%: plain board only, reserved for a small tag and a very large three-line headline; keep the right 25% of the band near its bottom edge clear for a round badge and two tiny lines. MIDDLE, from about 36% to 74% of the frame height: three overlapping instant-film polaroid prints with off-white frames and a thicker, completely blank bottom border, tilted at about -6, +4 and -3 degrees, each held by a short strip of marigold washi tape on one corner, with soft realistic shadows. Photo 1 (left): a bright, true-colour daytime snapshot of a parent and a young child seen from behind, walking hand in hand along a sunny, tree-shaded covered walkway, the child wearing a small plain backpack. Photo 2 (centre, slightly higher): a family on a picnic mat on grass under a big spreading rain tree, seen from behind at mid-distance, soft focus. Photo 3 (right, lower): a parent and child seen from behind, waist-up, carrying plain unbranded paper shopping bags along a bright open covered walkway. BOTTOM 26%: plain board only, reserved for a label line, a two-line subhead, fine print, a licence strip and a button. Look: warm, bright, personal. Avoid: any text, letters, numbers, logos or watermarks, including on the polaroid borders and bags; identifiable faces or people facing the camera; school buildings, gates, uniforms or crests; signage, shopfronts or name boards; condo towers, HDB blocks or landmarks; anything drawn on the board.
```

For more control, generate the three photos separately (square, same prompt text per photo) and build the polaroid frames, tape and tilt in Canva.

**B-swap:** use the headline "A New Home Near Montfort Junior School" (2 lines at about 96 px). B already names Montfort, so swap the subhead to the copy-approved "Above Hougang MRT, near CHIJ Our Lady of the Nativity & Punggol Park." The badge and MOE line stay, because the headline still names a school. The polaroids stay the same.

**9:16:** stack the three polaroids in a looser vertical zigzag (larger, about 420 px wide each) in the middle 50%. Start the tag and question below the top 14%, with the badge pinned to the top-right polaroid. Keep the subhead, fine print and the taped button above the bottom 20%, with plain blush board below.

---

## C3. MRT (blind): two-line route diagram crossing at a ringed "HOME" node

- **Headline (A):** How Many Train Changes Is Your Commute?
- **Subhead:** Above Hougang MRT, near Hougang Mall, with a new bus interchange planned.
- **Diagram (copy-approved labels, all set in Canva):**
  - **Ringed centre node:** `HOME: ABOVE HOUGANG MRT`
  - **Solid deep-teal diagonal running to the bottom-left (North East Line):** HOME —(**2 stops**)— **SERANGOON MRT** with a small "CIRCLE LINE" sub-label and a double-ring interchange marker, then —(**8 stops from home**)— **DHOBY GHAUT MRT**
    - 1 unlabelled tick between Hougang and Serangoon, and 5 between Serangoon and Dhoby Ghaut, so the counts are visible.
  - **Dashed hot-pink horizontal (Cross Island Line)**, tagged with a pill reading `FROM 2030 (TARGET)`:
    - Right: HOME —(**3 stops**)— **PASIR RIS MRT**, with 2 ticks.
    - Left: HOME —(**3 stops**)— **ANG MO KIO MRT**, with 2 ticks, —(**5 stops from home**)— **BRIGHT HILL MRT**, with 1 tick.
  - **Line-name labels** (designer strings, Flag 4): `NORTH EAST LINE` in small teal caps along the diagonal, and `CROSS ISLAND LINE` in small pink caps at the left end of the dashed line.
  - The centre node isn't labelled "HOUGANG MRT" a second time, because the ring label already says it.
  - Footer: `Illustrative diagram, not to scale.`
- **CTA:** REGISTER YOUR INTEREST (hot-pink pill with a white "terminus dot" at the left end)
- **Fine print:** Planned components and Cross Island Line timeline (2030 target) subject to change. Distances approx., straight-line. Stop counts from MRT line maps.
- **Diagram rules:**
  - Teal and hot pink are generic brand colours. **No North East Line purple, no Cross Island Line lime**, and none of the red, green, blue, brown, orange or yellow line colours.
  - No LTA or MRT logos, no station codes (NE14, CR8 and so on), no real map, no street layout.
  - The geometry is schematic. The real directions are roughly right (Dhoby Ghaut south-west, Pasir Ris east, Ang Mo Kio west), but nothing is to scale.

**Full prompt (with text)**

```text
Portrait 4:5 social media ad, 1080x1350 px, for a Singapore pre-launch condo, as a clean flat-vector transit route diagram on a pale cool-grey background (approx. #F1F3F6) with 64 px margins. TOP 22% of the frame: top-left, a small eyebrow reading "SINGAPORE HOMEBUYER" in bold red (approx. #D0021B) all-caps sans-serif with wide letter-spacing, about 24 px; below it, the headline in a bold geometric sans-serif (Futura / Avenir Heavy style) in ink (approx. #1B2230), about 70 px, left-aligned on two lines: "How Many Train Changes Is Your Commute?". DIAGRAM ZONE, from about 24% to 74% of the frame height: a thick DASHED hot-pink line (approx. #FF4F9A) runs horizontally across the full width at about 38% of the frame height; a thick SOLID deep-teal line (approx. #0F5E63) runs diagonally from the crossing point down to the bottom-left at 45 degrees. Where they cross, at about 60% of the frame width, a large white double-ring node with a thick ink outline, about 110 px across, with an ink rounded label above it reading "HOME: ABOVE HOUGANG MRT" in white bold all-caps. On the dashed line to the RIGHT: two small pink tick marks, then a white station circle with a pink outline labelled "PASIR RIS MRT" above it, a small pink pill tag near the right end reading "FROM 2030 (TARGET)" in white bold all-caps, and a white rounded stop bubble with a pink outline below the segment reading "3 stops". On the dashed line to the LEFT: two small ticks, a white station circle labelled "ANG MO KIO MRT" above it with a stop bubble below the segment reading "3 stops", then one tick and a white end circle labelled "BRIGHT HILL MRT" above it with a stop bubble reading "5 stops from home"; small pink all-caps text "CROSS ISLAND LINE" along the line's far-left end. On the solid teal diagonal: one small tick, then a white double-ring interchange circle labelled "SERANGOON MRT" with a small second line "CIRCLE LINE", a white stop bubble with a teal outline on the segment reading "2 stops"; then five small ticks and a white end circle near the bottom-left labelled "DHOBY GHAUT MRT", with a stop bubble reading "8 stops from home"; small teal all-caps text "NORTH EAST LINE" running along the diagonal. Station labels in bold ink geometric sans, about 22 px; stop-bubble figures in heavy condensed tabular numerals. Bottom-right of the diagram zone: tiny grey italic text reading "Illustrative diagram, not to scale." BOTTOM 26% of the frame: the subhead in regular ink sans-serif, about 25 px, left-aligned on two lines: "Above Hougang MRT, near Hougang Mall, with a new bus interchange planned."; tiny grey fine print, about 14 px, on two lines: "Planned components and Cross Island Line timeline (2030 target) subject to change. Distances approx., straight-line. Stop counts from MRT line maps."; a clear empty strip about 60 px tall; then a hot-pink (approx. #FF4F9A) pill button, full width between margins, with a solid white circle like a line terminus dot at its left end, and "REGISTER YOUR INTEREST" in bold white all-caps sans-serif. Look: smart, punchy, practical commuter infographic, flat vector, generous space, the crossing node hits first; every string crisp, legible at mobile size and rendered exactly once. Avoid: photographs; real maps, street grids, rivers or coastlines; MRT or LTA logos, station codes or official station symbols; purple, lime, red, green, blue, brown, orange or yellow rail lines; any extra station names; trains or building illustrations; any condo tower; any project, condo, developer, mall or school name or logo beyond the quoted strings; any price, dollar sign, psf, unit count or "% sold"; walk or drive minutes; district codes or street addresses; legends, compass roses, scale bars; misspelled, warped, duplicated or extra text beyond the quoted strings; watermarks; QR codes, phone numbers. Genre: Singapore property paid-social static ad.
```

**Image-only prompt (optional background shapes, add text in Canva)**

```text
Portrait 4:5 image, 1080x1350 px, flat vector, with no text, letters or numbers of any kind, on a pale cool-grey background (approx. #F1F3F6). TOP 22%: empty, reserved for an eyebrow and a two-line headline. DIAGRAM ZONE, 24–74% of the frame height: a thick dashed hot-pink line (approx. #FF4F9A) running horizontally across the full width at about 38% of the frame height, and a thick solid deep-teal line (approx. #0F5E63) running from a crossing point at about 60% of the width diagonally down to the bottom-left at 45 degrees; a large white double-ring node with a thick dark outline at the crossing; on the dashed line, two small ticks and a white end circle to the right, and to the left two ticks, a white station circle, one tick and a white end circle; on the teal diagonal, one tick, a white double-ring circle, five ticks and a white end circle. Leave clear empty space above and below every circle and beside every segment for labels and rounded stop bubbles. BOTTOM 26%: empty, reserved for a subhead, fine print, a licence strip and a full-width pill button. Look: crisp, minimal, schematic. Avoid: any text, letters, numbers or icons; purple, lime, red, green, blue, brown, orange or yellow lines; MRT or LTA symbols; maps or streets; photographs; buildings or trains.
```

Best practice: build the whole diagram in Canva, with lines, dashes, ticks, rings, bubbles and pills as shapes. The tick counts must match the stop counts exactly, and image models miscount ticks.

**B-swap:** use the headline "North East Line Now. Cross Island Line From 2030." on two lines, with "North East Line Now." in teal and "Cross Island Line From 2030." in hot pink, so each matches its line in the diagram. The `FROM 2030 (TARGET)` tag stays on the dashed line, which supplies the "(target)". The diagram, subhead and CTA stay the same.

**9:16:** turn the dashed Cross Island Line vertical (Pasir Ris MRT at the top, Bright Hill MRT at the bottom) and run the teal diagonal off to the lower-left. That makes the diagram about 60% of the frame tall, so the labels read at about 28 px. Start the headline below the top 14%. Keep the subhead, fine print and pill above the bottom 20%.

---

## C4. Mall at your doorstep (blind): lifestyle mosaic with a backlit mall-directory panel

- **Headline (A), set inside the directory panel:** What If the Mall Was Your Lobby?
- **Subhead (under the panel, on the espresso base band):** Above Hougang MRT, near Hougang Mall, with a town plaza planned.
- **Directory panel (copy-approved):**
  - Header `PLANNED ON SITE`, then three rows, each with a simple white pictogram: a shopping bag for NEW MALL, a tree for TOWN PLAZA, a bus for BUS INTERCHANGE.
  - Bottom row, after a hairline, with a down-arrow pictogram: `BELOW: HOUGANG MRT`
  - **No level or floor numbers**, and no train pictogram (it would read as an MRT logo).
- **CTA:** REGISTER YOUR INTEREST (copper square-cornered directory plaque with a wayfinding arrow)
- **Label:** IMAGE SAMPLE ONLY – not the actual development (bottom-right photo tile)
- **Fine print:** Planned components and Cross Island Line timeline (2030 target) subject to change. Distances approx., straight-line.
- **Visual (2x2 mosaic, warm evening grade):**
  - **Top-left:** a café table from above with two iced coffees in plain glasses, a pastry and two hands. No cup branding.
  - **Top-right:** a person **from behind**, waist-down, carrying plain unbranded paper shopping bags in a bright, generic walkway. The background is soft blur with no readable shopfronts.
  - **Bottom-left:** an open paved plaza at dusk with trees, warm string lights and a low canopy. People are small soft silhouettes. **No high-rise, tower or mall facade.**
  - **Bottom-right:** a commuter from behind at a covered bus stop at blue hour, with a **plain silver-white, motion-blurred bus** passing. No route number, livery, logo or signage.
  - None of the tiles shows the planned mall. It isn't designed yet, so these are generic lifestyle moments only.
- **Swap-in, when an official retail or plaza render is released and cleared:** it may replace the bottom-left tile only. Retouch out names and logos, and label **that tile** `IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY`. The other three tiles keep the IMAGE SAMPLE ONLY label.

**Full prompt (with text)**

```text
Portrait 4:5 social media ad, 1080x1350 px, for a Singapore pre-launch condo. TOP 72% of the frame: a 2x2 photo mosaic with 8 px warm-white gutters (approx. #FFF8EE), four photoreal photographs with a warm, golden evening grade. Top-left tile: a café table seen from directly above, two iced coffees in plain glasses, a flaky pastry on a plate, two hands resting on the table, warm side light. Top-right tile: a person seen from behind, waist-down, carrying two plain unbranded kraft paper shopping bags along a bright, generic indoor walkway, the background in soft blur with no readable shopfronts. Bottom-left tile: an open paved town plaza at dusk with trees, warm string lights and a low timber canopy, people as small soft silhouettes in the distance, no high-rise or tower in view. Bottom-right tile: a commuter seen from behind standing at a simple covered bus stop at blue hour, a plain silver-white bus passing in motion blur, no route number, livery or logos. Bottom-right corner of that tile: small italic white text on a subtle dark translucent strip reading "IMAGE SAMPLE ONLY – not the actual development". Top-left of the frame, over the top-left tile: a small solid red tag (approx. #D0021B) with "SINGAPORE HOMEBUYER" in white bold all-caps sans-serif with wide letter-spacing, about 22 px. CENTRED over the mosaic, from about 20% to 66% of the frame height and about 74% of the frame width: a dark espresso (approx. #1C1512) mall-directory panel with 10 px rounded corners, a subtle backlit glow around its edge and a thin copper (approx. #D9824B) inner border. Inside the panel, with 44 px padding: the headline in a bold DIN-style signage sans-serif, warm white (approx. #FFF8EE), about 60 px, left-aligned on two lines: "What If the Mall Was Your Lobby?"; a thin copper hairline; the header "PLANNED ON SITE" in small copper all-caps with wide letter-spacing, about 20 px; then three directory rows, each with a simple white line pictogram on the left and warm-white all-caps text, about 30 px, separated by faint hairlines: a shopping-bag pictogram and "NEW MALL"; a tree pictogram and "TOWN PLAZA"; a bus pictogram and "BUS INTERCHANGE"; then a copper hairline and a final row with a downward-arrow pictogram and "BELOW: HOUGANG MRT". BOTTOM 28% of the frame: a solid espresso band (approx. #1C1512) with 64 px margins: the subhead in regular warm-white sans-serif, about 25 px, left-aligned on two lines: "Above Hougang MRT, near Hougang Mall, with a town plaza planned."; tiny warm-grey fine print, about 14 px, on two lines: "Planned components and Cross Island Line timeline (2030 target) subject to change. Distances approx., straight-line."; a clear empty strip about 60 px tall; then a solid copper (approx. #D9824B) rectangular plaque button with square corners, about 70% of the frame width, left-aligned, with "REGISTER YOUR INTEREST" in bold espresso all-caps DIN-style sans-serif and a bold wayfinding arrow pointing right. Look: playful, curious, warm city evening, the directory sign reads like a real mall wayfinding panel; every string crisp, legible at mobile size and rendered exactly once. Avoid: any condo tower, high-rise, mall facade or building exterior; real mall interiors; shop signage, shopfronts with names, brand logos, branded bags or cups; level or floor numbers, lift or escalator icons; train pictograms, MRT/LTA logos, station signage or rail line colours; bus route numbers or operator livery; identifiable faces; any project, condo, developer, mall or school name in the photos; any price, dollar sign, psf, unit count or "% sold"; walk or drive minutes; district codes or street addresses; misspelled, warped, duplicated or extra text beyond the quoted strings; watermarks; QR codes, phone numbers. Genre: Singapore property paid-social static ad.
```

**Image-only prompt (add text in Canva)**

```text
Portrait 4:5 image, 1080x1350 px, with no text of any kind. TOP 72% of the frame: a 2x2 mosaic of four photoreal photographs with a warm golden evening grade, separated by 8 px warm-white gutters (approx. #FFF8EE). Top-left: a café table from directly above, two iced coffees in plain glasses, a flaky pastry, two hands resting on the table, warm side light. Top-right: a person from behind, waist-down, carrying two plain unbranded kraft paper shopping bags along a bright, generic indoor walkway, background in soft blur. Bottom-left: an open paved town plaza at dusk with trees, warm string lights and a low timber canopy, people as small distant soft silhouettes, no high-rise in view. Bottom-right: a commuter from behind at a simple covered bus stop at blue hour, a plain silver-white bus passing in motion blur. The CENTRE of the mosaic, from about 20% to 66% of the frame height and the middle 74% of its width, will be covered by a dark panel, so keep the key subjects toward the outer corners of each tile; keep the top-left corner of the frame calm for a small tag and the bottom-right corner calm for a label. BOTTOM 28%: a completely flat, solid espresso band (approx. #1C1512), empty, reserved for a subhead, fine print, a licence strip and a plaque button. Look: warm, lively, convenient city evening. Avoid: any text, letters, numbers, logos or watermarks; shop signage, branded bags or cups; bus route numbers, livery or logos; MRT signage; towers, high-rises, mall facades or building exteriors; identifiable faces.
```

Build the directory panel, pictograms, hairlines and plaque in Canva. Generate the four tiles as one image or as four separate squares. Separate squares make it easier to reject one tile that shows signage.

**B-swap:** use the headline "A New Mall Planned Right at Your Doorstep" (2 lines at about 56 px in the panel). The panel header "PLANNED ON SITE" now echoes "Planned" in the headline. It's a mild repeat of copy-approved strings, so keep it unless the copywriter wants it shortened to "ON SITE". Everything else stays the same.

**9:16:** stack the mosaic as a 2x2 in the top 60% (taller tiles), with the directory panel over its lower half so the panel's centre sits at about 48% of the frame. Start the tag below the top 14%. Extend the espresso band, and keep the subhead, fine print and plaque above the bottom 20%.

---

## C5. Stay-in-Hougang upgrader (blind): tilted postcard

> **Hold from wave 1** (copy flag 10). This ad has the worst budget fit. It's included so the set is complete.

- **Headline (A), handwritten on the message side:** Love Hougang? Upgrade Without Moving Away.
- **Subhead, set as the printed message:** A new condo above Hougang MRT, near Hougang Mall & Punggol Park.
- **Stamp and postmark (copy-approved):**
  - Stamp `HOUGANG`: leaf green, perforated, with a simple rain-tree line drawing.
  - Postmark ring `STAY IN HOUGANG`, with wavy cancel lines over the stamp's corner.
- **Optional handwritten PS:** PS. Same neighbourhood, brand-new home.
- **CTA:** REGISTER YOUR INTEREST (white airmail-border button with red and blue diagonal stripes)
- **Label:** IMAGE SAMPLE ONLY – not the actual development (on the photo)
- **Fine print:** Planned components and Cross Island Line timeline (2030 target) subject to change. Distances approx., straight-line.
- **Visual:**
  - A sun-soft morning park path under big rain trees, with lush heartland greenery, an empty bench and dappled light. It has a printed-photo look with slightly lifted blacks.
  - **No buildings at all.** No HDB blocks, block numbers, town-council logos, signs or real addresses. No condo.
  - At most one tiny figure from behind, far away, or none.
  - It must not look like a recognisable spot in Punggol Park (no named pond pavilion or signage). It is a generic green path.
- **Message only, never targeting** (Housing special ad category).

**Full prompt (with text)**

```text
Portrait 4:5 social media ad, 1080x1350 px, for a Singapore pre-launch condo, styled as a picture postcard. Background: a soft eucalyptus-green backdrop (approx. #CFE3D3) with a faint paper texture. Top-left: a small eyebrow reading "SINGAPORE HOMEBUYER" in bold red (approx. #D0021B) all-caps sans-serif with wide letter-spacing, about 22 px. FROM about 11% to 74% of the frame height: a kraft-paper postcard (approx. #D8C29B), about 90% of the frame width, tilted about -3 degrees, with slightly rounded corners and a soft realistic shadow. LEFT HALF of the postcard: a photo with a thin white border, a sun-soft morning view along a curving park path under big spreading rain trees, lush tropical greenery, an empty wooden bench, dappled light on the path, slightly lifted blacks like a printed photo, no buildings anywhere; bottom-left of the photo, small italic white text on a subtle dark translucent strip reading "IMAGE SAMPLE ONLY – not the actual development". A thin vertical printed divider line down the middle of the card. RIGHT HALF of the postcard: top-right, a perforated leaf-green (approx. #3E8E48) postage stamp about 150 px wide showing a simple white rain-tree line drawing and the word "HOUGANG" in white letterpress slab-serif capitals; overlapping its lower-left corner, a circular fountain-pen-blue (approx. #23408E) postmark ring with the words "STAY IN HOUGANG" around it and three wavy cancel lines trailing left. Below the stamp, the headline handwritten in a flowing brush-pen script in fountain-pen blue, about 62 px, left-aligned on three lines: "Love Hougang? Upgrade Without Moving Away."; below it, the subhead as the printed message in a clean sans-serif, fountain-pen blue, about 21 px, on three lines: "A new condo above Hougang MRT, near Hougang Mall & Punggol Park."; below it, a short handwritten line in the same script, about 26 px: "PS. Same neighbourhood, brand-new home." BELOW THE POSTCARD, on the backdrop with 64 px margins: tiny dark-green fine print, about 14 px, on two lines: "Planned components and Cross Island Line timeline (2030 target) subject to change. Distances approx., straight-line."; a clear empty strip about 60 px tall; then a white rectangular button, about 78% of the frame width, centred, with a classic airmail border of alternating red (approx. #D0021B) and fountain-pen-blue diagonal stripes, and "REGISTER YOUR INTEREST" in bold fountain-pen-blue all-caps sans-serif. Look: neighbourly, nostalgic, local pride, a note from home; every string crisp, legible at mobile size and rendered exactly once. Avoid: any building, HDB block, block number, condo tower or skyline; town-council logos, park signs, name boards or real addresses; identifiable people; any project, condo, developer, mall or school name or signage in the photo; real postal-service logos or real stamp designs; any price, dollar sign, psf, unit count or "% sold"; walk or drive minutes; district codes or street addresses; MRT/LTA logos or rail line colours; misspelled, warped, duplicated or extra text beyond the quoted strings; watermarks; QR codes, phone numbers. Genre: Singapore property paid-social static ad.
```

**Image-only prompt (add text in Canva)**

```text
Portrait 4:5 image, 1080x1350 px, with no text of any kind. Background: a soft eucalyptus-green backdrop (approx. #CFE3D3) with a faint paper texture. From about 11% to 74% of the frame height: a blank kraft-paper postcard (approx. #D8C29B), about 90% of the frame width, tilted about -3 degrees, slightly rounded corners, soft realistic shadow. LEFT HALF of the card: a photo with a thin white border, a sun-soft morning view along a curving park path under big spreading rain trees, lush tropical greenery, an empty wooden bench, dappled light, slightly lifted blacks like a printed photo, no buildings anywhere; keep its bottom-left corner calm for a small label. A thin vertical divider line down the middle of the card. RIGHT HALF of the card: completely blank kraft paper, reserved for a stamp top-right, a postmark, a three-line handwritten headline, a printed message and a PS line. TOP 11% of the frame and BOTTOM 26%: plain backdrop, reserved for an eyebrow, fine print, a licence strip and a button. Look: nostalgic, warm, local. Avoid: any text, letters, numbers, stamps, postmarks, logos or watermarks; buildings, HDB blocks, towers or skylines; signage; people; anything drawn on the right half of the card.
```

Build the stamp, postmark, handwriting, message and airmail button in Canva. Use a real brush-script font, not generated lettering.

**B-swap:** use the headline "Upgrading From HDB or Condo? Stay in Hougang." The postmark's "STAY IN HOUGANG" would then repeat the headline word for word. Drop the postmark ring text and keep just the wavy cancel lines over the stamp (copywriter to confirm). The stamp, message, PS and photo stay the same.

**9:16:** turn the postcard 90° into a portrait card: photo on top, message below the printed divider, stamp at the top-right of the message area. Start the eyebrow below the top 14%, and keep the fine print and airmail button above the bottom 20%.

---

## C6. Be first to know (Price slot): status-tracker app card

- **Headline (A), set as the card title:** Prices Aren't Out Yet. Want to Be First?
- **Subhead (under the card):** Above Hougang MRT, near Hougang Mall, Punggol Park & a planned town plaza.
- **Status rows (copy-approved):**
  - PRICES — `NOT ANNOUNCED YET`
  - LAYOUTS — `NOT ANNOUNCED YET`
  - PREVIEW DATES — `NOT ANNOUNCED YET`
- **Toggle:** `NOTIFY ME`, shown ON (green track, knob to the right)
- **Tiny line in the card:** As at [date]. Fill in the real date within 48h of launch (copy flag 11).
- **CTA:** REGISTER YOUR INTEREST (slate rounded app button with a white bell icon)
- **Label:** none (pure UI).
- **Fine print:** Planned components and Cross Island Line timeline (2030 target) subject to change. Distances approx., straight-line.
- **UI rules:**
  - **No "$" glyph, no blurred price sheet, no fake numbers, no "coming soon" countdown digits.**
  - No real app branding: no app icon, no status bar, no notification from a real app, no phone frame.

**Full prompt (with text)**

```text
Portrait 4:5 social media ad, 1080x1350 px, for a Singapore pre-launch condo, as a clean app-interface graphic with no photograph. Background: a flat electric-periwinkle field (approx. #5B6CFF) with a very soft lighter radial glow behind the card. Top-left, with 64 px margins: a small solid red tag (approx. #D0021B) with "SINGAPORE HOMEBUYER" in white bold all-caps sans-serif with wide letter-spacing, about 22 px. CENTRED, from about 11% to 68% of the frame height, about 86% of the frame width: a near-white (approx. #FDFDFF) app card with 32 px rounded corners and a soft, deep drop shadow, 48 px inner padding. Inside the card, top: the title in a bold rounded UI sans-serif (Manrope / SF Rounded style) in slate (approx. #2E3445), about 54 px, left-aligned on two lines: "Prices Aren't Out Yet. Want to Be First?". A thin light-grey divider. Then three status rows separated by hairlines, each with a semibold slate all-caps label on the left, about 24 px, and on the right a light-grey pill (approx. #E4E6EC) holding a small grey clock dot and grey monospaced all-caps text, about 16 px, reading "NOT ANNOUNCED YET": row 1 "PRICES"; row 2 "LAYOUTS"; row 3 "PREVIEW DATES". Below the rows, a taller highlighted row: "NOTIFY ME" in bold slate all-caps, about 30 px, on the left, and on the right a large toggle switch about 120 px wide with a bright green track (approx. #22C55E) and a white round knob to the right, in the ON position. Bottom-left inside the card: tiny grey text, about 14 px, reading "As at [date]." BELOW THE CARD, on the periwinkle field with 64 px margins: the subhead in regular white sans-serif, about 25 px, left-aligned on two lines: "Above Hougang MRT, near Hougang Mall, Punggol Park & a planned town plaza."; tiny pale-lilac-white fine print, about 14 px, on two lines: "Planned components and Cross Island Line timeline (2030 target) subject to change. Distances approx., straight-line."; a clear empty strip about 60 px tall; then a full-width slate (approx. #2E3445) rounded-rectangle app button, 20 px corner radius, with a small white bell icon on the left and "REGISTER YOUR INTEREST" in bold white all-caps rounded sans-serif. Look: honest, straight-talking, crisp and modern, like a real notification setting; every string crisp, legible at mobile size and rendered exactly once. Avoid: any dollar sign, price, psf, figures, blurred price sheets, tables of numbers or countdown digits; any photograph; any condo tower or building; real app names, app icons, logos, phone frames, status bars or notification banners; any project, condo, developer, mall or school name or logo beyond the quoted strings; unit counts or "% sold"; walk or drive minutes; district codes or street addresses; MRT/LTA logos or rail line colours; misspelled, warped, duplicated or extra text beyond the quoted strings; watermarks; QR codes, phone numbers. Genre: Singapore property paid-social static ad.
```

**Image-only prompt (optional background, add text and UI in Canva)**

```text
Portrait 4:5 image, 1080x1350 px, with no text of any kind: a flat electric-periwinkle field (approx. #5B6CFF) with a very soft, lighter radial glow centred at about 40% of the frame height, and a single empty near-white (approx. #FDFDFF) rounded rectangle, 32 px corner radius, about 86% of the frame width, from about 11% to 68% of the frame height, with a soft, deep drop shadow. The card is completely blank. RESERVED TEXT ZONES: the top 11% of the field for a small tag; the whole card interior for a title, three status rows, a toggle row and a tiny date line; the field below the card for a subhead, fine print, a licence strip and a full-width button. Look: clean, modern, app-like. Avoid: any text, letters, numbers, icons, toggles or UI elements; photographs; buildings; logos or watermarks; any texture or pattern.
```

Best practice: build this ad entirely in Canva. Use one pill component for all three rows so they match exactly, and set the toggle as a shape, not an emoji or icon-font glyph.

**B-swap:** use the headline "Be First to Know When Prices Are Out" as the card title (2 lines at about 54 px). The rows, toggle, date line and subhead stay the same.

**9:16:** make the card taller (about 14% to 66% of 1920 px) and increase the row height so the three pills and the toggle read at a larger size. Keep the tag below the top 14% and the subhead, fine print and button above the bottom 20%.

---

## C7. Day in the life (blind): 4-panel comic storyboard

- **Headline (A):** Morning Train, School Run, Park, Mall. One Address.
  - Set it on 2 lines: "Morning Train, School Run, Park, Mall." (about 46 px), then "One Address." (about 84 px, the largest type in the ad).
- **Subhead:** Above Hougang MRT, near Punggol Park, with a new mall planned on site.
- **Panel captions (copy-approved; the bold word is the time of day):**
  - **MORNING** / Train from Hougang MRT, right below
  - **SCHOOL RUN** / Primary schools nearby
  - **EVENING** / Punggol Park nearby
  - **WEEKEND** / New mall & town plaza planned
- **MOE line (small print, under the grid):** School admission subject to MOE regulations and balloting.
- **CTA:** REGISTER YOUR INTEREST (ink-black comic caption-box button with an offset lilac shadow and a play triangle)
- **Label:** IMAGE SAMPLE ONLY – not the actual development (under the grid). The copy's "Illustrations only" stays in the primary text (Flag 4).
- **Fine print:** Planned components and Cross Island Line timeline (2030 target) subject to change. Distances approx., straight-line.
- **Visual (soft flat illustration; figures have no facial features and are mostly shown from behind):**
  - **MORNING (peach):** a commuter from behind riding an escalator down into a bright, generic underground station concourse in sunrise light. A neutral silver-grey train is glimpsed below, **with no coloured stripe**, no signage and no logo.
  - **SCHOOL RUN (sky):** a parent and child from behind on a tree-shaded covered walkway. The child has a plain backpack. **No school building, gate, uniform or crest.**
  - **EVENING (dusky rose):** a small family as silhouettes from behind, strolling on a park path beside a pond at sunset, with rain trees.
  - **WEEKEND (lilac):** a family from behind with plain shopping bags in a bright, airy, generic mall atrium with skylights. The shopfronts are blank simple shapes.
  - **No building exteriors and no towers in any panel.** The "home" is never drawn.
- **Fallback:** 4 licensed stock photos with the same subjects and the same label. Illustration is preferred, because it is consistent and can't be mistaken for the project.

**Full prompt (with text)**

```text
Portrait 4:5 social media ad, 1080x1350 px, for a Singapore pre-launch condo, styled as a four-panel comic storyboard. Background: warm white (approx. #FFFBF4), 56 px margins. TOP 17% of the frame: top-left, a small eyebrow reading "SINGAPORE HOMEBUYER" in bold red (approx. #D0021B) all-caps sans-serif with wide letter-spacing, about 22 px; below it, the headline in a bold condensed sans-serif in ink (approx. #1A1A2E), left-aligned on two lines: first line "Morning Train, School Run, Park, Mall." at about 46 px, second line "One Address." at about 84 px, the largest type in the ad. MIDDLE, from about 18% to 75% of the frame height: a 2x2 grid of comic panels with 4 px ink-black borders and 16 px warm-white gutters, each panel a soft flat vector illustration with gentle grain, simple shapes and faceless figures with no facial features. Each panel has a warm-white caption box with a thin ink border in its top-left corner, containing comic-book hand-lettered all-caps text in ink, the time of day in bold, about 22 px, and the line below in regular, about 18 px. Panel 1 (top-left, peach background approx. #FFCFAE): a commuter seen from behind riding an escalator down into a bright, generic underground station concourse in soft sunrise light, a neutral silver-grey train glimpsed below with no coloured stripe; caption "MORNING" / "Train from Hougang MRT, right below". Panel 2 (top-right, sky background approx. #A9DCF3): a parent and a child seen from behind walking hand in hand along a tree-shaded covered walkway, the child with a plain backpack; caption "SCHOOL RUN" / "Primary schools nearby". Panel 3 (bottom-left, dusky-rose background approx. #E591A8): a small family as silhouettes from behind, strolling on a park path beside a pond at sunset under rain trees; caption "EVENING" / "Punggol Park nearby". Panel 4 (bottom-right, lilac background approx. #BBA7E6): a family seen from behind carrying plain shopping bags through a bright, airy, generic mall atrium with skylights and blank shopfront shapes; caption "WEEKEND" / "New mall & town plaza planned". Directly under the grid, two tiny ink lines, about 13 px: "School admission subject to MOE regulations and balloting." and, right-aligned in italic, "IMAGE SAMPLE ONLY – not the actual development". BOTTOM 22%: the subhead in regular ink sans-serif, about 24 px, left-aligned on two lines: "Above Hougang MRT, near Punggol Park, with a new mall planned on site."; tiny grey fine print, about 14 px, on two lines: "Planned components and Cross Island Line timeline (2030 target) subject to change. Distances approx., straight-line."; a clear empty strip about 60 px tall; then an ink-black (approx. #1A1A2E) rectangular comic caption-box button with square corners, about 76% of the frame width, centred, with a solid lilac offset shadow 8 px down and right, a small white play triangle on the right, and "REGISTER YOUR INTEREST" in bold white comic hand-lettered all-caps. Look: cinematic but gentle, warm storytelling, a whole weekday in one glance, morning-to-night colour sequence; every string crisp, legible at mobile size and rendered exactly once. Avoid: facial features or identifiable people; any building exterior, condo tower, HDB block or skyline; school buildings, gates, uniforms or crests; station signage, MRT/LTA logos or coloured train stripes (purple, lime, red, green, blue, brown, orange, yellow); shop signs, brand names or logos; park signs or name boards; any project, condo, developer, mall or school name in the illustrations; any price, dollar sign, psf, unit count or "% sold"; walk or drive minutes, clocks showing times; district codes or street addresses; speech bubbles or extra captions; misspelled, warped, duplicated or extra text beyond the quoted strings; watermarks; QR codes, phone numbers. Genre: Singapore property paid-social static ad.
```

**Image-only prompt (add text in Canva)**

```text
Portrait 4:5 image, 1080x1350 px, with no text of any kind, on a warm white background (approx. #FFFBF4). TOP 17%: plain background, reserved for an eyebrow and a two-line headline. MIDDLE, from about 18% to 75% of the frame height: a 2x2 grid of comic panels with 4 px ink-black borders and 16 px warm-white gutters, each a soft flat vector illustration with gentle grain, simple shapes and faceless figures with no facial features. Panel 1 (top-left, peach background approx. #FFCFAE): a commuter from behind riding an escalator down into a bright, generic underground station concourse in sunrise light, a neutral silver-grey train glimpsed below with no coloured stripe. Panel 2 (top-right, sky background approx. #A9DCF3): a parent and child from behind walking hand in hand along a tree-shaded covered walkway, the child with a plain backpack. Panel 3 (bottom-left, dusky-rose background approx. #E591A8): a small family as silhouettes from behind on a park path beside a pond at sunset, rain trees. Panel 4 (bottom-right, lilac background approx. #BBA7E6): a family from behind with plain shopping bags in a bright, airy, generic mall atrium with skylights and blank shopfront shapes. Keep the top-left corner of every panel calm and plain for a caption box. BOTTOM 25%: plain background, reserved for two tiny lines, a subhead, fine print, a licence strip and a button. Look: warm, gentle, storybook. Avoid: any text, letters, numbers, signs, logos or watermarks; facial features; building exteriors, towers or skylines; school buildings, gates or uniforms; coloured train stripes or MRT symbols; shop signage.
```

Generating all four panels in one image keeps the style consistent. If one panel shows lettering or a coloured train stripe, regenerate that panel alone with the same style words and composite it.

**B-swap:** use the headline "What Would Your Weekday Look Like Here?" on two lines at about 70 px, with no size split. The panels, captions, MOE line and subhead stay the same.

**9:16:** stack the four panels vertically as a single column (each about 960 x 300 px, landscape crops), in the middle 62% of the frame, per the copy layout. Start the headline below the top 14%, and keep the two tiny lines, subhead, fine print and button above the bottom 20%. Regenerate the panels as wide landscape scenes, rather than cropping the 4:5 squares.

---

## Flags

1. **No performance sign-off yet.**
   - `perf-review.md` has no Hougang section. `research-hougang-central.md` and `copy-hougang-central.md` are not marked Approved.
   - This follows the shortened flow the user chose for Amber House and Arcady: researcher, then copywriter, then static-designer, then one performance check at the end. **Performance should review research, copy and these prompts together.**
   - There is no `brief.md` and no `creative-spec.md` approval box for this run.
   - Any generation, including tests, needs the user's own approval in chat with the estimated cost shown first. "Do the same process full" covers writing the prompts, not paid generation.
2. **The project name is unconfirmed (copy flag 2).**
   - C1 alone shows "Hougang Central Residences", on a swappable text layer with the `WORKING NAME – OFFICIAL NAME TBC` chip.
   - If the developer announces another name, change the C1 name layer, the chip and the form intro on the same day. Retire the chip once the name is official.
   - The phrase "Hougang Central" appears on no other ad.
3. **No official assets exist yet (perf S7).**
   - `inputs/product-images/` is empty. No render, plan or photo of this project has been released, and none was fetched.
   - Swap-in points, once something is released **and** the client has rights:
     - **C1:** a render band replaces the contour pattern.
     - **C4:** a render replaces the bottom-left tile only.
     - Both get `IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY` on the render itself.
   - C2, C3, C5, C6 and C7 never take a render.
   - Retouch the project name and developer logos out of any render used on C4.
   - The floor-plan slot stays skipped until official plans exist (copy note).
4. **Designer-set strings for the copywriter to proof:**
   - **C1 tile 2** reordered from "2030 / CROSS ISLAND LINE (TARGET)" to "**FROM 2030 (TARGET)** / CROSS ISLAND LINE", to meet the user's label rule.
   - **C1 B-swap:** a new small line, `CROSS ISLAND LINE · FROM 2030 (TARGET)`. Swapping tile 2 out would otherwise leave no "(TARGET)" on the image.
   - **C3 line labels** `NORTH EAST LINE` and `CROSS ISLAND LINE` added so viewers can tell the two lines apart. The centre node isn't separately labelled "HOUGANG MRT", because the ring says "HOME: ABOVE HOUGANG MRT".
   - **C3 tick marks:** 1 + 5 on the North East Line, and 2 / 2 + 1 on the Cross Island Line, matching the copy's stop counts. They are unlabelled. Performance should confirm the counts (copy flag 7).
   - **C5 B-swap:** drop the "STAY IN HOUGANG" postmark text, which would repeat the headline.
   - **C7 label:** the image uses the user's `IMAGE SAMPLE ONLY – not the actual development` string. The copy's "Illustrations only" stays in the primary text. Copywriter to confirm both can stand.
   - **Fine-print lines** on each ad are combinations of the copy's base strings, as set out in the intro.
   - **C1 colon:** "RESIDENCES:" keeps the colon so Headline A stays word for word. The chip sits between the name and the tail.
5. **Palette changes from the copywriter's layout column.** All seven layouts follow the column exactly. Only the colours changed, so nothing repeats Amber House or Arcady:
   - C2: teal, cream and coral became blush, plum and marigold. Arcady C2 was teal and cream.
   - C3: charcoal and coral on white became deep teal and hot pink on cool grey. Arcady C3 was exactly charcoal and coral on off-white.
   - C4: charcoal and amber became espresso and copper.
   - C5: the sky-blue backdrop became eucalyptus, which keeps sky for C7.
   - C6: the off-white field became periwinkle, for a stronger thumb-stop.
   - C7: "sunset" became dusky rose, which avoids Arcady's coral.
   - C1 keeps navy and gold, with new hex values and a brass tone.
6. **Rail and MRT rules.**
   - No walk minutes appear anywhere. MRT copy is "above Hougang MRT" plus stop counts.
   - Every station label uses its full "… MRT" name.
   - The Cross Island Line carries `FROM 2030 (TARGET)` on C1 (tile 2) and C3 (pill tag), and "(2030 target)" in the fine print on all 7.
   - The C3 lines are teal and hot pink. None of the real line colours is used, and there are no LTA or MRT marks or station codes.
   - The C7 train and C4 bus are plain silver with no livery.
7. **Image-model risks (Amber C4-1 precedent).**
   - The C4 commuter tile, the C7 morning panel and the C2 walkway shot are the frames most likely to come back with invented signage, coloured train stripes, school gates or route numbers. Reject any output with lettering or anything that looks like a real place.
   - The C4 plaza tile and the C5 park path can sprout high-rises in the background. Reject any with a tower.
8. **MOE line** is on C2 (under the badge) and C7 (under the grid), using the copy's on-image string. No school appears in any image. Nothing implies P1 priority, and P1 eligibility for an uncompleted address is unverified.
9. **"Near" wording (copy flag 6, QA call).** Hougang Green (~1.0km) and Punggol Park (~950m) sit at the edge of "near". The C4 and C7 subheads name Hougang Green. If QA tightens this, C4 uses the copy's alternative, "Above Hougang MRT, near Hougang Mall, with a town plaza planned."
10. **People.** Nobody is identifiable on any ad: backs, soft focus, distant silhouettes or hands only. C7's figures are faceless illustrations. Reject any generation with a visible face.
11. **C5 is held from wave 1** (copy flag 10, worst budget fit). "HDB upgrader" is message only and must never become location, postcode, age or interest targeting (Housing special ad category).
12. **C6 date.** Fill in "As at [date]." within 48h of launch, after re-checking that prices, layouts and preview dates are still unannounced. When prices are released, C6 retires and the CTA on every ad becomes "GET PRICE LIST & E-BROCHURE" (copy flag 11).
13. **Eyebrow style.** C1, C2, C4 and C6 use a red tag with white letters, for legibility on navy, blush, photo and periwinkle. C3, C5 and C7 use red text. Change this if the client wants one treatment everywhere.
14. **Our two live "Download Full Price List and E-brochure" ads** promise a price list that doesn't exist (copy flag 3). Pausing or replacing them is the user's call. The Meta button for this set is "Sign up".
15. **CEA authorisation (perf S3).** If GoAhead isn't authorised to market this project, C1 is Blocked, and the blind ads should be checked too. The CEA strip is reserved on all 7.
16. **Lead form (copy flag 5, perf S5).** C2–C7 hide the name, so the form intro must say "The new condo planned above Hougang MRT at Hougang Central (official name TBC)". It carries the required budget and timeline questions, and no price or estimate anywhere.
17. **House photo rule.** SKILL.md's "real interior photos only, never illustration" applies to the custom-list format. Pre-launch project ads have no building or interiors to photograph, so this set uses UI, vector and illustration on purpose (C1, C3, C6, C7). C7 has a stock-photo fallback if the client wants photos.
18. **Generation scope, for when the user approves a spend:**
    - C1, C3 and C6 need no generation. They are Canva builds.
    - C2 (3 photos), C4 (4 tiles), C5 (1 photo) and C7 (4 panels) need licensed stock or generation.
    - Show the user an estimated cost per batch and get a go-ahead before generating anything.
