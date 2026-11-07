# Dunearn House: Image Prompts (GoAhead, 5 ads, 5 different layouts)

> **Revision 1 (2026-11-07), performance fixes applied:** DH3: the D4 subhead now reads `Near the Rail Corridor. Turf City MRT (Cross Island Line) planned, 2032 target.`, and the `GREEN CORRIDOR (UNDER CONSTRUCTION)` label is removed from the map in both 4:5 and 9:16 (the primary-text sentence and its fine print stay in `copy-brief.md`). DH1, DH2 and DH4 are primary-text fixes in `copy-brief.md`; none of those strings appears on an image, so no prompt changed for them.

Revision 1, written 2026-11-07 by static-designer. **Prompts only.** Nothing has been generated, no paid API has been called, nothing was downloaded or uploaded.

- **Copy source:** `copy-brief.md` Revision 1 (D1–D5). Headline A, subhead, on-image strings, CTA, fine print and labels are used word for word. Headline B is a swap line under each ad. Strings I had to add, move or re-split are listed in Flags.
- **Facts source:** `research.md` CONFIRMED rows only.
- **Format model:** `coastal-cabana/design-prompts.md` Revision 2, plus a photo-plate prompt per ad for the Canva route.
- **Process:** shortened project flow. No `perf-review.md` exists for this project yet. Performance reviews research + copy + these prompts together. Nothing here is the user's approval.
- `inputs/product-images/` is empty. No official render or plan is cleared (copy Flag 8). Finished images go in `dunearn-house/images/`.

**Rules baked into every prompt:**
- **No price in any running ad.** D1 is prompted in its **no-price** version. The price-led D1 swap (`Dunearn House: 2-Bedroom From $1.538M*`) is **held** until the developer's price list confirms it (copy Flag 2); its strings are recorded under D1 for a later Canva layer, and nothing in these prompts prints a "$".
- **2-bedroom and 4-bedroom only.** No 3-bedroom anywhere: no plan, tile, chip or "3-bedder". Never conquest the 3BR sell-out.
- Only D1 shows "Dunearn House". "Dunearn" appears nowhere else. D2–D5 carry no name, developer or address. Frasers Property, CSC Land Group and Sekisui House stay in D1's primary text only; no developer logos on any image.
- **MRT:** Sixth Avenue MRT as "near"; no walk minutes. Turf City MRT (Cross Island Line) only with `FROM 2032 (TARGET)` / "2032 target" and the timeline fine print. No real line colours (Downtown Line blue, Cross Island Line lime) or LTA logos.
- No "under $2M", "first mover", "first in 33 years", growth/potential, availability or "% sold" talk, unit counts, "D11", street names (Dunearn Road), Bukit V mall or the old Turf City mall, Green Corridor as complete, preview/launching-soon wording.
- **Schools:** only "top Bukit Timah schools" / "BUKIT TIMAH SCHOOLS NEARBY" on D2, with the MOE line. No single school on any image, no school building, uniform, crest or badge.
- **No identifiable landmarks:** no Bukit Timah summit marker, no Rail Corridor truss bridge, rail tracks or old station, no Turf City / racecourse imagery, no recognisable mall facades.
- No AI condo tower captioned or implied as this project. People never identifiable.
- **Brand constants:** red `SINGAPORE HOMEBUYER` eyebrow (#D0021B) and CTA `GET PRICE LIST & E-BROCHURE` (Meta button: **Download**).
- **Image labels:** generic images get `IMAGE SAMPLE ONLY – not the actual development`. `IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY` only on an official render or plan. Fallback plans: `ILLUSTRATIVE LAYOUT ONLY, not to scale`. Map: `Illustrative map, not to scale.`
- A clear ~60 px strip above every CTA for the CEA particulars. Final fine print 18 px or more on 4:5. 9:16 safe zones: no text in the top 14% or bottom 20%.

## Generator, route and cost

- **Recommended route: photo plate + live text.** Generate the image only, set every string in Canva or Figma, proof against `copy-brief.md`. Use the full prompt for mock-ups and free drafts only.
- **Generators:** ChatGPT image for full-prompt mock-ups (best on-image text); Gemini image for photo plates. Consumer apps: S$0 (plan limits).
- **Paid API, only after the user's go-ahead:** Gemini 2.5 Flash Image about US$0.04/image (~S$0.05); OpenAI gpt-image-1 about US$0.04 medium, about US$0.17–0.25 high portrait (~S$0.22–0.33). Approximate, 2026-11; check before any spend.
- **This project's scope:** photo plates for D1 (forest canopy), D2 (school-run path, full bleed) and D5 (three collage photos). D3 and D4 are Canva builds. 5 plates x 2 ratios x up to 3 attempts = up to 30 images: **about S$1.50 on Gemini API, up to about S$10 on gpt-image-1 high.**

---

## Design at a glance

| Ad | Angle | Layout | Palette | Type | Visual | CTA shape | Label |
|---|---|---|---|---|---|---|---|
| **D1** | Direct (named, no price) | **Split name card, mirrored:** deep-green panel left 45%, photo right 55% | Bukit green #0F3D2E, brass #B8925A, porcelain #F5F2EA | Classic high-contrast serif lockup (Canela / Cormorant style) + small caps | Generic dense rainforest canopy from below, morning light, no buildings | Brass-outline rectangle with porcelain text | IMAGE SAMPLE ONLY – not the actual development |
| **D2** | Blind, family question | **Morning school-run photo + 3 tiles:** full-bleed photo top 66%, white band with 3 tiles | Photo-led greens; tiles soft sky #DCEBF7, navy #1D3557, white | Friendly heavy sans (Nunito ExtraBold style) | Parent and child from behind on a leafy footpath, early light | Navy pill with white text | IMAGE SAMPLE ONLY – not the actual development |
| **D3** | Floor layout, 2BR vs 4BR | **Two plans side by side** at relative scale, thin divider, chips across the bottom | Off-white #FAFAF7, ink #202020, teal-grey #4F7C82 | Swiss grotesk (Helvetica / Akzidenz style) with thin rules | No photo. Two generic plans, no text inside | Ink rectangle with a teal-grey left block | ILLUSTRATIVE LAYOUT ONLY, not to scale |
| **D4** | MRT map | **Illustrated neighbourhood map:** solid and dashed neutral lines, big HOME pin, green bands | Parchment #F4EFE3, olive #8A9A5B, forest #5E7D4F, charcoal #2B2B2B, sienna pin #C4622D | Heavy grotesk (Libre Franklin Black style) + compact caps | Flat vector map only | Charcoal pill with a sienna pin icon | Illustrative map, not to scale. |
| **D5** | Green resort living (replaces Price) | **3-photo green collage:** tall photo left, two stacked right, white gutters, headline across the top | White #FFFFFF, near-black #151515, fern #6A994E | Elegant italic serif headline (Fraunces Italic style) + clean sans captions | Pool under trees, raised forest walkway, bright clubhouse lounge | Fern full-width bar | IMAGE SAMPLE ONLY – not the actual development |

How they differ: dark panel + photo vs full-bleed lifestyle photo vs white technical sheet vs vector map vs photo collage; green/brass vs sky/navy vs off-white/teal-grey vs parchment/olive/sienna vs white/fern; classic serif vs friendly heavy sans vs Swiss grotesk vs heavy grotesk vs italic serif. No earlier project's hex values are reused; only #D0021B repeats.

---

## D1. Direct (named, no price): split name card, mirrored

- **Headline (A):** `Dunearn House: 2 & 4-Bedroom Homes, Bukit Timah`
  - Name layer `DUNEARN HOUSE:` in large serif caps; tail `2 & 4-Bedroom Homes, Bukit Timah` below in brass. Together they read as Headline A.
- **Small line with the lockup:** `BUKIT TIMAH · TURF CITY`
- **Subhead:** `Near Sixth Avenue MRT, the Rail Corridor & Bukit Timah Nature Reserve.`
- **3 tiles (Headline A set, per copy):** `TURF CITY` / `FIRST NEW CONDO` · `SIXTH AVENUE MRT` / `DOWNTOWN LINE` · `TWO CLUBHOUSES` / `50M LAP POOL`
- **Fine print:** `99-year leasehold. Distances approx., straight-line. Availability subject to change.` + label
- **Label:** `IMAGE SAMPLE ONLY – not the actual development` (official render swap-in: `IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY`)
- **CTA:** `GET PRICE LIST & E-BROCHURE`
- **HELD price layer (do not build until copy Flag 2 clears):** headline `Dunearn House: 2-Bedroom From $1.538M*`; price block `2-BEDROOM FROM` / **`$1.538M*`** / `527 SQFT`; fine print `*Based on developer price list as at [DATE]. 2-bedroom, 527 sqft, selected unit. Subject to availability and change. Excludes stamp duties.` In Canva, keep a reserved zone between the lockup and the tiles (about 210 px) and build the price block as one removable group, so the ad switches without a redesign. In the no-price version the subhead fills that space.
- Mirrored on purpose (panel left, photo right) so it doesn't share a layout with The Sen S1 or Coastal Cabana R2-A.

**Prompt (4:5, paste as one block)**

```text
Create a portrait 4:5 social media ad, exactly 1080x1350 px, for a Singapore condominium, designed as a split-screen name card with the panel on the left. RIGHT 55% of the frame, full height down to the bottom band: a photoreal photograph looking up into a dense tropical rainforest canopy in soft morning light, tall straight trunks, layered leaves, gentle sun flare through a gap, deep fresh greens. No buildings, no summit markers, no signs, no bridges, no people. Near the bottom-right of the photo, small italic white text on a subtle dark translucent strip, about 14 px: "IMAGE SAMPLE ONLY – not the actual development". LEFT 45% of the frame: a solid deep Bukit green panel (#0F3D2E) with 38 px inner padding and a crisp vertical edge. Inside the panel, top to bottom, left-aligned: (1) a small solid red tag (#D0021B) with "SINGAPORE HOMEBUYER" in white bold all-caps sans-serif, wide letter-spacing, about 18 px. (2) A small brass (#B8925A) all-caps line with wide tracking, about 15 px: "BUKIT TIMAH · TURF CITY". (3) The name in a classic high-contrast serif (Canela / Cormorant Bold style), porcelain (#F5F2EA), all caps, about 66 px, on two lines: "DUNEARN" / "HOUSE:". (4) The headline tail in the same serif, italic, brass, about 36 px, on two lines: "2 & 4-Bedroom Homes," / "Bukit Timah". (5) A thin brass hairline. (6) The subhead in regular porcelain serif, about 22 px, on three lines: "Near Sixth Avenue MRT, the Rail Corridor & Bukit Timah Nature Reserve." (7) Three stacked full-width tiles, about 410 x 78 px each with 10 px gaps, no fill, a 1 px brass outline; each tile has a bold porcelain all-caps sans line, about 21 px, with a small brass all-caps caption under it, about 13 px: tile 1 "TURF CITY" / "FIRST NEW CONDO"; tile 2 "SIXTH AVENUE MRT" / "DOWNTOWN LINE"; tile 3 "TWO CLUBHOUSES" / "50M LAP POOL". (8) A clear empty strip about 60 px tall (reserved for licence details, leave it blank). (9) A rectangular button the full panel width, about 76 px tall, transparent with a 2 px brass outline, and "GET PRICE LIST & E-BROCHURE" in bold porcelain all-caps sans-serif, about 19 px. BOTTOM BAND, full width across both halves, the bottom 8% of the frame: a flat porcelain (#F5F2EA) band with tiny Bukit-green fine print, about 15 px, left-aligned with 40 px margins, on one line: "99-year leasehold. Distances approx., straight-line. Availability subject to change." If small text is unreadable, leave the fine-print area blank. Render every quoted string exactly once, spelled exactly as quoted, and add no other text. Look: calm, established, quietly premium, trustworthy. Avoid: any condo tower, apartment block, facade, skyline or architectural render; summit markers, truss bridges, rail tracks, racecourse or mall imagery; people; developer names or logos; any price, dollar sign, psf, "under $2M", discount, unit count, availability badge or "% sold"; any 3-bedroom mention; "freehold", "preview", "VVIP", "first mover"; walk minutes or metre figures; district codes or street names; schools; MRT or LTA logos, station codes or real rail line colours; misspelled, warped, duplicated or extra text; watermarks, QR codes, phone numbers.
```

**Photo plate:** `Portrait image, 594x1350 px, with no text: a photoreal view looking up into a dense tropical rainforest canopy in soft morning light, tall straight trunks, layered leaves, gentle sun flare through a gap, deep fresh greens; keep the bottom-right calm for a small label. Avoid: text, logos, buildings, signs, bridges, summit markers, people.` Build the panel, lockup, tiles, button and band in Canva.

**9:16:** `Now recompose this exact ad as a 9:16 portrait, 1080x1920 px, with identical text, colours and fonts: the canopy photo fills the top 38% at full width (label at its bottom-right); the green panel fills everything below; red tag, small line, name (about 80 px) and brass tail start just below the photo; put the three tiles side by side in one row (about 320 x 120 px each); then subhead, a blank 60 px strip, the brass-outline button and the fine-print line (now porcelain on green), all ending above 80% of the height; keep the bottom 20% plain green with no text. If small text is unreadable, leave the fine-print area blank.`

**B-swap:** tail becomes `First New Condo in Turf City` (Headline B: `Dunearn House: First New Condo in Turf City`); tile 1 becomes `2 & 4 BEDROOMS` / `527–1,378 SQFT` (the copy's default tile 1, since B has no bedroom info).

---

## D2. Blind, family (emotional): morning school-run photo + 3 tiles

- **Headline (A):** `Looking for a family home in Bukit Timah?`
- **Subhead:** `4-bedroom homes from 1,302 sqft, near Sixth Avenue MRT & top Bukit Timah schools.`
- **3 tiles:** `4 BEDROOMS` / `1,302–1,378 SQFT` · `SIXTH AVENUE MRT` / `DOWNTOWN LINE` · `BUKIT TIMAH SCHOOLS` / `NEARBY`
- **MOE line:** rendered once, as the first sentence of the fine print (copy lists it as a tiny line and in the fine print; Flag 2).
- **Fine print:** `School admission subject to MOE regulations and balloting. 99-year leasehold. Distances approx., straight-line.` + label
- **Label:** `IMAGE SAMPLE ONLY – not the actual development`
- **CTA:** `GET PRICE LIST & E-BROCHURE`
- **Photo:** a parent and child seen from behind, hand in hand, on a leafy footpath in early light. Plain casual clothes and a plain unbranded backpack; **no uniform, crest, badge, school gate or school building.**

**Prompt (4:5, paste as one block)**

```text
Create a portrait 4:5 social media ad, exactly 1080x1350 px, for a Singapore condominium. TOP 66% of the frame, full width: a photoreal photograph of a quiet leafy footpath under tall tropical trees in soft early-morning light, light haze, a parent and a young child seen from behind walking hand in hand away from camera at mid-distance, the child with a plain unbranded backpack, both in plain casual clothes, small in the frame and slightly soft; warm, gentle, fresh greens; no faces, no buildings, no school, no signs. The upper 30% of the photo is soft bright canopy and haze for text. Top-left over the photo, 56 px margins: a small solid red tag (#D0021B) with "SINGAPORE HOMEBUYER" in white bold all-caps sans-serif, wide letter-spacing, about 18 px; below it the headline in a friendly heavy sans-serif (Nunito ExtraBold style), white with a soft shadow, about 70 px, left-aligned on three lines: "Looking for a" / "family home in" / "Bukit Timah?". Bottom-right of the photo: small italic white text on a subtle dark strip, about 14 px: "IMAGE SAMPLE ONLY – not the actual development". BOTTOM 34%: a flat white (#FFFFFF) band, 48 px margins. First, a row of three equal tiles, each a soft sky (#DCEBF7) rounded rectangle with 14 px corners, each with a bold navy (#1D3557) all-caps line, about 19 px, and a navy all-caps caption under it, about 13 px: tile 1 "4 BEDROOMS" / "1,302–1,378 SQFT"; tile 2 "SIXTH AVENUE MRT" / "DOWNTOWN LINE"; tile 3 "BUKIT TIMAH SCHOOLS" / "NEARBY". Then the subhead in regular navy sans-serif, about 22 px, on two lines: "4-bedroom homes from 1,302 sqft, near Sixth Avenue MRT & top Bukit Timah schools."; tiny grey fine print, about 15 px, on two lines: "School admission subject to MOE regulations and balloting." / "99-year leasehold. Distances approx., straight-line."; a clear empty strip about 50 px tall (reserved for licence details, leave it blank); then a navy (#1D3557) pill button, about 84% of the width, centred, about 74 px tall, with "GET PRICE LIST & E-BROCHURE" in bold white all-caps sans-serif, about 20 px. If small text is unreadable, leave the fine-print area blank. Render every quoted string exactly once, spelled exactly as quoted, and add no other text. Look: warm, gentle, parent-to-parent, an ordinary good morning. Avoid: faces or people facing the camera; school uniforms, crests, badges, name tags, school gates, school buildings or school buses; branded backpacks or clothing; condo towers, apartment blocks or buildings; signs or landmarks; project or developer names or logos; any single school name; any price, dollar sign, psf, unit count, availability badge or "% sold"; any 3-bedroom mention; "freehold", "preview", "VVIP"; walk minutes, metre figures or "within 1km"; district codes or street names; MRT or LTA logos or rail line colours; misspelled, warped, duplicated or extra text; watermarks, QR codes, phone numbers.
```

**Photo plate:** `Landscape-ish image, 1080x890 px, with no text: a photoreal quiet leafy footpath under tall tropical trees in soft early-morning light and light haze, a parent and young child seen from behind walking hand in hand away from camera at mid-distance, plain casual clothes, plain unbranded backpack, small in the frame; keep the upper-left 45% soft bright canopy for a headline. Avoid: text, logos, faces, uniforms, crests, school buildings, signs, buildings.` Regenerate as a tall scene for 9:16.

**9:16:** `Now recompose this exact ad as a 9:16 portrait, 1080x1920 px, with identical text, colours and fonts, regenerating the photo as a tall scene: photo fills the top 60% (red tag and headline at about 80 px placed below the top 14%, label bottom-right); white band below with the three tiles stacked as three full-width rows, subhead, fine print, a blank 50 px strip and the navy pill, ending above 80%; plain white below with no text. If small text is unreadable, leave the fine-print area blank.`

**B-swap:** headline `4-Bedroom Family Homes in Bukit Timah`; subhead `From 1,302 sqft, near Sixth Avenue MRT & top Bukit Timah schools.` Tiles and MOE line unchanged.

---

## D3. Floor layout: 2BR and 4BR side by side

> **Fallback build (no official plans cleared).** The copy's titles `2-BEDROOM · 527 SQFT` and `4-BEDROOM PREMIUM · 1,302 SQFT` belong to the official plans. With generic plans, titles are `2-BEDROOM LAYOUT` and `4-BEDROOM LAYOUT`, and the sizes stay in the headline (Flag 3). Headline B (`See How a 2-Bedroom Fits in 527 sqft`) is **official 527 sqft plan only** and is not prompted. With official plans: restore the copy's titles, switch the label to `IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY`, add a small official-render inset top-right.

- **Headline (A):** `2 & 4-Bedroom Layouts, 527 to 1,378 sqft`
- **Subhead:** `Most homes have a kitchen or bathroom window. 2.875m ceilings.`
- **Plan titles (fallback):** `2-BEDROOM LAYOUT` · `4-BEDROOM LAYOUT`
- **Chips:** `ENCLOSED KITCHENS` · `2.875M CEILINGS` · `SMEG & HANSGROHE` (brand names as plain text, no logos)
- **Fine print:** `Sizes per published review. Availability subject to change. 99-year leasehold.` + `ILLUSTRATIVE LAYOUT ONLY, not to scale`
- **CTA:** `GET PRICE LIST & E-BROCHURE`
- **Plans:** generic, top-down, **no text, numbers or dimensions inside**. 2BR drawn about 40% of the 4BR's area (527 vs 1,302 sqft). Both kitchens enclosed (walls + a door), each kitchen or a bathroom with a window. **No 3-bedroom plan.** No building image (Flag 4).

**Prompt (4:5, paste as one block)**

```text
Create a portrait 4:5 social media ad, exactly 1080x1350 px, for a Singapore condominium, styled as a crisp Swiss-design comparison sheet. No photographs. Background: flat off-white (#FAFAF7) with thin ink hairline rules. TOP, 52 px margins: red text "SINGAPORE HOMEBUYER" in bold all-caps sans-serif (#D0021B), wide letter-spacing, about 18 px; below it the headline in a bold Swiss grotesk (Helvetica / Akzidenz Bold style), ink (#202020), about 62 px, tight leading, on two lines: "2 & 4-Bedroom Layouts," / "527 to 1,378 sqft"; a full-width 1 px ink rule under it. PLANS, from about 22% to 66% of the height, two columns separated by a thin vertical teal-grey (#4F7C82) divider: left column, about 38% of the width, a small teal-grey all-caps title, about 17 px, "2-BEDROOM LAYOUT", above one clean top-down generic two-bedroom apartment floor plan in ink linework, drawn smaller; right column, about 58% of the width, the title "4-BEDROOM LAYOUT" above one clean top-down generic four-bedroom apartment floor plan in the same linework, drawn about two and a half times the area of the left plan. Both plans: thick outer walls, thin inner walls, quarter-circle door swings, thin triple-line windows, simple bed rectangles in each bedroom, an enclosed kitchen with its own walls and door and a window on an outer wall, bathrooms with windows; no text, room names, numbers or dimensions anywhere inside either plan. Under the plans, small italic ink text, about 15 px: "ILLUSTRATIVE LAYOUT ONLY, not to scale". Then a row of three chips with 1 px teal-grey outlines and square corners, teal-grey all-caps text, about 16 px: "ENCLOSED KITCHENS"; "2.875M CEILINGS"; "SMEG & HANSGROHE". BOTTOM, 52 px margins: the subhead in regular ink grotesk, about 25 px, on two lines: "Most homes have a kitchen or bathroom window. 2.875m ceilings."; tiny grey fine print, about 15 px: "Sizes per published review. Availability subject to change. 99-year leasehold."; a clear empty strip about 60 px tall (reserved for licence details, leave it blank); then a full-width ink (#202020) rectangular button, about 80 px tall, with a solid teal-grey square block at its left end, and "GET PRICE LIST & E-BROCHURE" in bold white all-caps grotesk, about 21 px. If small text is unreadable, leave the fine-print area blank. Render every quoted string exactly once, spelled exactly as quoted, and add no other text. Look: precise, clean, side-by-side, easy to compare. Avoid: any third plan or a 3-bedroom plan; text, room names, numbers or dimension lines inside the plans; open-plan kitchens; balconies, pools or site plans; brand logos; any photograph, building, tower or render; project or developer names; any price, dollar sign, psf, "under $2M", unit count, availability badge or "% sold"; "freehold", "preview", "VVIP"; walk minutes or metre figures; district codes or street names; MRT or LTA logos or rail line colours; misspelled, warped, duplicated or extra text; watermarks, QR codes, phone numbers.
```

**Plate:** none needed; build in Canva (two plan groups at relative scale, so either can be swapped for the official plan).

**9:16:** `Now recompose this exact ad as a 9:16 portrait, 1080x1920 px, with identical text, colours and fonts: headline (about 70 px) starts below the top 14%; stack the two plans top and bottom at full width, the 2-bedroom plan smaller on top and the 4-bedroom plan larger below, with a thin horizontal teal-grey divider, from about 22% to 66% of the height; then the label, chips, subhead, fine print, a blank 60 px strip and the ink button, ending above 80%; plain off-white below with no text. If small text is unreadable, leave the fine-print area blank.`

---

## D4. MRT: illustrated neighbourhood map

- **Headline (A):** `Near Sixth Avenue MRT on the Downtown Line`
- **Subhead:** `Near the Rail Corridor. Turf City MRT (Cross Island Line) planned, 2032 target.`
- **Map labels:** `HOME` (unnamed) · `SIXTH AVENUE MRT` / `DOWNTOWN LINE` · `TURF CITY MRT` / `CROSS ISLAND LINE · FROM 2032 (TARGET)` (dashed) · `RAIL CORRIDOR` · `BUKIT TIMAH NATURE RESERVE` (perf DH3: no Green Corridor label on the image)
- **Fine print (includes the map label):** `Cross Island Line targeted for 2032; timeline subject to change. Distances approx., straight-line. Illustrative map, not to scale.`
- **CTA:** `GET PRICE LIST & E-BROCHURE`
- **Map rules:** no Green Corridor ribbon or label (perf DH3). Downtown Line = solid charcoal line; Cross Island Line = dashed charcoal line, and its station is a hollow ring (not yet open). Each line has only its one labelled station. No minutes, no street names, no roads labelled, no Bukit V or old Turf City mall, no real tiles.

**Prompt (4:5, paste as one block)**

```text
Create a portrait 4:5 social media ad, exactly 1080x1350 px, for a Singapore condominium, as a flat illustrated neighbourhood map. Background: warm parchment (#F4EFE3). TOP 20%, 52 px margins: red text "SINGAPORE HOMEBUYER" in bold all-caps sans-serif (#D0021B), wide letter-spacing, about 18 px; below it the headline in a heavy grotesk (Libre Franklin Black style), charcoal (#2B2B2B), about 58 px, on two lines: "Near Sixth Avenue MRT" / "on the Downtown Line". MAP, from about 21% to 68% of the height, full width with 40 px margins, flat vector, no real map tiles: a wide soft forest-green (#5E7D4F) organic patch at the upper-left labelled in compact bold parchment all-caps, about 16 px, "BUKIT TIMAH NATURE RESERVE"; a long olive (#8A9A5B) ribbon running top to bottom on the left side labelled along its length "RAIL CORRIDOR". In the centre-right, a large sienna (#C4622D) map pin with a small white house glyph and the label "HOME" in bold charcoal beside it. A solid thick charcoal line crossing the upper part of the map with one filled round station node close to the pin, labelled in bold charcoal all-caps, about 20 px, "SIXTH AVENUE MRT" with a smaller caption beneath, about 14 px, "DOWNTOWN LINE". A dashed charcoal line crossing the lower part of the map with one hollow ring station node a little further from the pin, labelled "TURF CITY MRT" with the caption "CROSS ISLAND LINE · FROM 2032 (TARGET)". Each line has exactly one station node; there are no other stations, dots, roads, street names, buildings or distance labels. BOTTOM, 52 px margins: the subhead in regular charcoal sans, about 24 px, on two lines: "Near the Rail Corridor. Turf City MRT (Cross Island Line) planned, 2032 target."; tiny charcoal-grey fine print, about 15 px, on two lines: "Cross Island Line targeted for 2032; timeline subject to change." / "Distances approx., straight-line. Illustrative map, not to scale."; a clear empty strip about 50 px tall (reserved for licence details, leave it blank); then a full-width charcoal (#2B2B2B) pill button, about 76 px tall, with a small sienna location-pin icon at its left and "GET PRICE LIST & E-BROCHURE" in bold parchment all-caps sans, about 20 px. If small text is unreadable, leave the fine-print area blank. Render every quoted string exactly once, spelled exactly as quoted, and add no other text. Look: crisp, factual, friendly map-reader. Avoid: blue, lime, green, red, purple, orange, yellow or brown rail lines (lines are charcoal only); MRT or LTA logos, station codes or real map tiles; any third station or extra dot; roads, street names or the word "Dunearn"; any Green Corridor or construction label; malls, racecourse or landmarks; minute, walk or distance labels; buildings, towers or renders; photographs; project or developer names; any price, dollar sign, psf, unit count or "% sold"; any 3-bedroom mention; "freehold", "preview", "VVIP"; schools; district codes; misspelled, warped, duplicated or extra text; watermarks, QR codes, phone numbers.
```

**Plate:** none needed. Build in Canva; keep labels at 20 px or more on 4:5. The Green Corridor label is removed from both sizes (perf DH3).

**9:16:** `Now recompose this exact ad as a 9:16 portrait, 1080x1920 px, with identical text, colours and fonts: headline (about 66 px) starts below the top 14%; enlarge the map to fill from about 26% to 64% of the height with labels at about 24 px; then subhead, fine print, a blank 50 px strip and the charcoal pill, ending above 80%; plain parchment below with no text. If small text is unreadable, leave the fine-print area blank.`

**B-swap:** headline `Sixth Avenue MRT Nearby, Turf City MRT Planned`; subhead `Bukit Timah condo near the Rail Corridor & Bukit Timah Nature Reserve.` Map and fine print unchanged.

---

## D5. Green resort living (replaces Price): 3-photo green collage

- **Headline (A):** `Two Clubhouses, a 50m Pool, a Canopy Trail`
- **Subhead:** `New Bukit Timah condo near Sixth Avenue MRT & the Rail Corridor.`
- **Photo captions:** `50M LAP POOL` · `CANOPY TRAIL` · `TWO CLUBHOUSES`
- **Small line:** `About a third of the site is greenery.`
- **Fine print:** `Facilities per published review. 99-year leasehold.` + label
- **Label:** `IMAGE SAMPLE ONLY – not the actual development` (once, across the collage)
- **CTA:** `GET PRICE LIST & E-BROCHURE`
- **Photos (generic):** (1) a lap pool under tall trees, no tower behind; (2) a raised timber forest walkway among tree crowns, no suspension bridge, no signage; (3) a bright clubhouse lounge with timber, plants and a long work table, no people, no logos.

**Prompt (4:5, paste as one block)**

```text
Create a portrait 4:5 social media ad, exactly 1080x1350 px, for a Singapore condominium, as an airy three-photo collage. Background: white (#FFFFFF). TOP 20%, 48 px margins: red text "SINGAPORE HOMEBUYER" in bold all-caps sans-serif (#D0021B), wide letter-spacing, about 18 px; below it the headline in an elegant italic serif (Fraunces Italic SemiBold style), near-black (#151515), about 54 px, on two lines: "Two Clubhouses, a 50m Pool," / "a Canopy Trail". COLLAGE, from about 21% to 69% of the height, 48 px side margins, 12 px white gutters: LEFT, one tall photo about 55% of the collage width and its full height: a photoreal long outdoor lap pool shaded by tall tropical trees, dappled light on clear water, lush planting, no buildings anywhere; RIGHT TOP: a photoreal raised timber walkway winding through tree crowns in soft morning light, railings of plain timber, dense green foliage, no suspension bridge, no signs, no people; RIGHT BOTTOM: a photoreal bright clubhouse lounge with warm timber, large windows onto greenery, potted plants and a long shared work table with chairs, no people, no screens with text, no logos. Each photo has a small caption in the bottom-left corner on a white rectangular tab, bold near-black all-caps sans-serif, about 16 px: left photo "50M LAP POOL"; right top "CANOPY TRAIL"; right bottom "TWO CLUBHOUSES". Small italic grey text centred just below the collage, about 14 px: "IMAGE SAMPLE ONLY – not the actual development". BOTTOM, 48 px margins: a small fern (#6A994E) line with a tiny leaf icon at its left, about 18 px: "About a third of the site is greenery."; the subhead in regular near-black sans-serif, about 24 px, on two lines: "New Bukit Timah condo near Sixth Avenue MRT & the Rail Corridor."; tiny grey fine print, about 15 px: "Facilities per published review. 99-year leasehold."; a clear empty strip about 50 px tall (reserved for licence details, leave it blank); then a full-width fern (#6A994E) bar with 6 px corners, about 78 px tall, with "GET PRICE LIST & E-BROCHURE" in bold white all-caps sans-serif, about 21 px. If small text is unreadable, leave the fine-print area blank. Render every quoted string exactly once, spelled exactly as quoted, and add no other text. Look: fresh, green, aspirational everyday life; lots of white space. Avoid: any condo tower, apartment block, balcony or building behind the pool or through the windows; suspension bridges or recognisable park walkways; signs, logos or screens with text; people or faces; resort, project or developer names; any price, dollar sign, psf, unit count, availability badge or "% sold"; any 3-bedroom mention; "freehold", "preview", "VVIP"; walk minutes or metre figures; district codes or street names; MRT or LTA logos or rail line colours; misspelled, warped, duplicated or extra text; watermarks, QR codes, phone numbers.
```

**Photo plates (three, no text):**
- `Portrait image, 540x650 px, no text: photoreal long outdoor lap pool shaded by tall tropical trees, dappled light on clear water, lush planting; no buildings, people, signs or logos.`
- `Landscape image, 430x320 px, no text: photoreal raised timber walkway winding through tree crowns in soft morning light, plain timber railings, dense foliage; no suspension bridge, signs or people.`
- `Landscape image, 430x320 px, no text: photoreal bright clubhouse lounge, warm timber, large windows onto greenery, potted plants, long shared work table with chairs; no people, screens, signs or logos.`

**9:16:** `Now recompose this exact ad as a 9:16 portrait, 1080x1920 px, with identical text, colours and fonts: headline (about 64 px) starts below the top 14%; the collage becomes three photos stacked full width (pool, walkway, lounge) from about 24% to 66% of the height, each with its caption tab; then the label, greenery line, subhead, fine print, a blank 50 px strip and the fern bar, ending above 80%; plain white below with no text. If small text is unreadable, leave the fine-print area blank.`

**B-swap:** headline `Two Clubhouses, With Work Pods, in Bukit Timah`; the third caption becomes `WORK PODS` (same lounge photo, framed on the work table).

---

## Before you generate (Dunearn House)

- [ ] **Price stays held (copy Flag 2).** Build D1 without the price. The held layer goes in only after the developer's price list confirms a 2BR at ≤$1,538,000 that is the 527 sqft type, with [DATE] filled and a weekly re-check. If those units sell out, the next 2BR is $1.848M and the price never goes in. Even when confirmed, the price stays on D1 only.
- [ ] **Stock within 48h:** the 527 sqft 2BR (9 left) sets the bottom of every "527" range. If it sells out, "527" becomes "614" everywhere (D3 headline, D1 B-swap tile) and D3's Headline B is dropped. 3BR must still show as sold out; no 3BR content anywhere.
- [ ] **Schools:** "top Bukit Timah schools" / "nearby" only; MOE line on D2; no single school on any image.
- [ ] **CEA authorisation (S3):** if GoAhead isn't authorised to market Dunearn House, D1 is Blocked.
- [ ] **Rights (S7):** official render (D1 swap-in) and the official 527 sqft 2BR and 1,302 sqft 4BR plans (D3 official version). Confirm GoAhead may send the developer's e-brochure.
- [x] **D2 primary-text line**: "keeps through traffic out" was cut to "there's a residents-only entrance road" (DH2). Doesn't touch the image.
- [ ] **Performance review** of research + copy + these prompts (no `perf-review.md` yet).
- [ ] Any paid generation: state the cost above and get the user's go-ahead in chat.

## Flags (designer)

1. **D1 tile set:** with Headline A the copy swaps tile 1 to `TURF CITY` / `FIRST NEW CONDO`; prompted that way. "First new condo" stays a sourced plain fact, never "first mover".
2. **D2 MOE line** rendered once (fine print, first line) instead of twice.
3. **D3 fallback plan titles** `2-BEDROOM LAYOUT` / `4-BEDROOM LAYOUT` replace the copy's sized titles, which belong to the official plans.
4. **D3 has no building image** (no cleared render, no AI tower). Same deviation as Coastal Cabana R2-B; needs the user's OK for this project.
5. **D4 density:** resolved by DH3 (Green Corridor label removed from both sizes). 5 labels + 2 lines + pin; keep labels at 20 px or more.
6. **D1 is mirrored** (panel left) to separate it from The Sen S1 and Coastal Cabana R2-A, which use the same split-card idea.
7. **Image-model risks:** a summit marker, truss bridge or rail tracks in D1/D5, a tower behind the D5 pool or outside the lounge, a uniform or crest in D2, a third plan or open kitchen in D3, coloured rail lines or an extra station dot in D4.
