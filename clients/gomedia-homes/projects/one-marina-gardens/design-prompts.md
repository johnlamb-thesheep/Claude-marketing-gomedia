# One Marina Gardens: Image Prompts (GoAhead, 5 ads, 5 different layouts)

> **Revision 1 (2026-11-07), performance fixes applied:** OMG2: the O3 fallback plan tiles show the bedroom type only (`2-BEDROOM` · `3-BEDROOM` · `3-BEDROOM DUAL-KEY` · `3-BEDROOM PREMIUM` · `4-BEDROOM PREMIUM`), no sqft; the size range stays in the headline, and the sized titles return only with the official plans. OMG1 is a primary-text fix in `copy-brief.md` (no on-image string changed).

Revision 1, written 2026-11-07 by static-designer. **Prompts only.** Nothing has been generated, no paid API has been called, nothing was downloaded or uploaded.

- **Copy source:** `copy-brief.md` Revision 1 (O1–O5). Headline A, subhead, on-image strings, CTA, fine print and labels are used word for word. Headline B is a swap line under each ad. Strings I had to add or re-split are listed in Flags for the copywriter to proof.
- **Facts source:** `research.md` CONFIRMED rows only.
- **Format model:** `coastal-cabana/design-prompts.md` Revision 2 (one paste-ready prompt per ad, then a 9:16 line), plus an image-only "photo plate" prompt per ad for the recommended Canva route.
- **Supersedes:** the older One Marina Gardens prompts in `campaigns/2026-11-new-launch-projects/` (they led on "from $1.876M" and "D01"). Ignore those.
- **Process:** shortened project flow. No `perf-review.md` exists for this project yet. Performance reviews research + copy + these prompts together. Nothing here is the user's approval.
- `inputs/product-images/` is empty. No official render or plan is cleared (copy Flag 6), so every ad has a generic, labelled fallback. Finished images go in `one-marina-gardens/images/`.

**Rules baked into every prompt (from the copy brief, the client rules and earlier perf reviews):**
- **No price anywhere.** Entry $1.876M is over the ~$1.6M line. No "$", psf, monthly figure or discount, fine print included.
- **Marina South MRT never appears.** Not drawn, not labelled, not implied ("at your doorstep", "next door", "directly linked"). The O4 map has no unnamed station dot where it would be, and the two lines do not meet at a shared station.
- Only O1 shows "One Marina Gardens". O2–O5 carry no name, developer or address on the image. The developer (Kingsford Group) is in O1's primary text only, never on an image.
- No unit counts, % sold, "D01", street names ("Marina Gardens Lane"), schools, 1-bedroom, "investment", "growth", "potential", "popular this week", showflat location, walk minutes or metre figures.
- Views are always "from selected units".
- **No identifiable landmarks on any ad, O1 included:** no Marina Bay Sands, no Supertrees, no Flower Dome / Cloud Forest domes, no Singapore Flyer, Merlion, Marina Barrage or recognisable CBD skyline. Water and gardens are generic.
- **No AI condo tower** captioned or implied as this project. O1 and O5 use generic photos; O2 a generic interior; O3 and O4 are drawings.
- No real MRT line colours (North-South red, Thomson-East Coast brown, and the green, purple, orange/yellow, blue and lime lines), no LTA/MRT logos, station codes (NS28, TE22) or real map tiles.
- People are never identifiable (from behind, soft focus, distant).
- **Brand constants:** the red `SINGAPORE HOMEBUYER` eyebrow (#D0021B, solid tag with white letters on photo/dark backgrounds, red text on light ones) and the CTA `GET PRICE LIST & E-BROCHURE` (Meta button: **Download**). Everything else changes per ad.
- **Image labels:** generic/stock/generated images get `IMAGE SAMPLE ONLY – not the actual development` (as the copy specifies, including O2's interior). `IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY` only when an official developer render or plan is swapped in. Maps: `Illustrative map, not to scale.` Fallback plans: `ILLUSTRATIVE LAYOUT ONLY, not to scale`.
- A clear empty strip about 60 px tall above every CTA for the CEA particulars.
- Fine print is the copy's exact wording. In the final Canva typeset, set fine print at **18 px or more** on 4:5 (perf note, Coastal Cabana 2026-11-07).
- 9:16: keep all text out of the top 14% (about 270 px) and the bottom 20% (about 385 px).

## Generator, route and cost

- **Recommended route (perf S2 precedent): photo plate + live text.** Generate only the image with the "photo plate" prompt (no text), then set every string in Canva or Figma and proof each character against `copy-brief.md`. Draw panels, tiles, chips, icons, map lines, plan drawings and buttons as Canva shapes in the exact hex. Image models garble small text.
- The full prompt (with text) is for a quick layout mock-up or a free draft for the client's approval board. Never publish its rendered text without proofing; rebuild any wrong string in Canva.
- **Generators:** ChatGPT image (best at on-image text, use it for the full-prompt mock-ups) or Gemini image (good, fast photo plates and edits). In the consumer apps this costs S$0 (it counts against plan limits).
- **If a paid API is ever used (needs the user's go-ahead first, with this estimate shown):**
  - Gemini 2.5 Flash Image: about US$0.04 per image (about S$0.05).
  - OpenAI gpt-image-1: about US$0.04 per image at medium, about US$0.17–0.25 at high quality portrait (about S$0.22–0.33).
  - Prices are approximate as at 2026-11; check the current price list before any spend.
- **This project's generation scope:** O1 (waterfront photo), O2 (interior with window view) and O5 (pool photo) need a photo plate. O3 and O4 are Canva builds (no generation needed). 3 plates x 2 ratios (4:5 + 9:16) x up to 3 attempts = up to 18 images: **about S$1 on Gemini API, up to about S$6 on gpt-image-1 high.**

---

## Design at a glance

| Ad | Angle | Layout | Palette | Type | Visual | CTA shape | Label |
|---|---|---|---|---|---|---|---|
| **O1** | Direct (named, no price) | **Magazine cover:** full-bleed photo, serif masthead across the top, 3 cover-line tiles bottom-left, CTA bar at the base | Midnight navy #14213D, antique gold #B89A5E, ivory #FAF6EE | High-contrast Didone serif masthead (Bodoni / Playfair Display style), small spaced caps | Generic tropical garden edge along calm bay water at dusk, promenade, no buildings, no landmarks | Full-width navy bar with a thin gold keyline | IMAGE SAMPLE ONLY – not the actual development |
| **O2** | Blind, emotional question | **Window-frame view:** interior shot, big window filling two-thirds, question on the wall above, light band below | Warm linen wall #EDE3D6, olive #5B6B3A, deep brown ink #2B2420 | Soft humanist serif (Lora / Tiempos style), sentence case | Bright living room from inside, window onto greenery and calm water, no towers or landmarks | Olive rounded rectangle with ivory text | IMAGE SAMPLE ONLY – not the actual development |
| **O3** | Floor layout (size ladder) | **Size-ladder plan sheet:** 5 plan tiles growing in size (2 + 3 grid), on a pale grid | Mint graph paper #EAF4EF, forest ink #1D4436, terracotta #C8553D | Grotesk (Space Grotesk style) + monospaced tile titles | No photo. Generic line plans with no text inside | Forest-ink bar with a terracotta arrow tab | ILLUSTRATIVE LAYOUT ONLY, not to scale |
| **O4** | MRT (two working stations) | **Two-line route diagram:** dark-mode vector strip, two neutral rail lines, unnamed HOME pin, green and water shapes | Deep slate #1A1D21, off-white lines #F5F1E8, sage park #7E9A7A, steel water #4A6378, amber pin #F2A541 | Compact bold sans caps (Inter Tight / Söhne Breit style) | Flat vector diagram only, no tiles | Off-white pill with slate text | Illustrative map, not to scale. |
| **O5** | Facilities (replaces Price) | **Big-numeral brochure page:** pool photo top half, giant "50+" across the seam, 4-icon row on white | White #FFFFFF, plum #5A2A4A, blush #F6E3E7 | Extended wide grotesk numeral (Druk Wide / Archivo Expanded style) + light sans | Generic garden lap pool under trees, no tower, no skyline | Blush ticket with plum outline | IMAGE SAMPLE ONLY – not the actual development |

How they differ: photo cover vs interior view vs pale plan sheet vs dark vector diagram vs half-photo brochure; navy/gold vs linen/olive vs mint/terracotta vs slate/off-white vs white/plum; Didone serif vs humanist serif vs grotesk + mono vs compact caps vs extended numeral. None of the earlier projects' hex values are reused; only #D0021B repeats.

---

## O1. Direct (named, no price): magazine cover

- **Headline (A), set as a masthead:** `One Marina Gardens: 2–4 Bedrooms in Marina South`
  - Name on its own layer in large serif caps: `ONE MARINA GARDENS:`; the tail `2–4 Bedrooms in Marina South` on the line below in gold italic serif. Together they read as Headline A.
- **Subhead:** `Next to Gardens by the Bay, near Marina South Pier MRT. 646–1,647 sqft.`
- **3 cover-line tiles:** `2 TO 4 BEDROOMS` / `646–1,647 SQFT` · `GARDENS BY THE BAY MRT` / `THOMSON-EAST COAST LINE` · `3 POOLS` / `INCL. 50M LAP POOL`
- **CTA:** `GET PRICE LIST & E-BROCHURE`
- **Fine print:** `99-year leasehold. Distances approx., straight-line. Views from selected units only.`
- **Label:** `IMAGE SAMPLE ONLY – not the actual development`
- **Swap-in:** once rights to the official exterior render are confirmed (copy Flag 6), it replaces the photo; retouch out any logo or wordmark and change the label to `IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY`.

**Prompt (4:5, paste as one block)**

```text
Create a portrait 4:5 social media ad, exactly 1080x1350 px, for a Singapore condominium, styled as a premium property-magazine cover. FULL-BLEED photoreal photograph filling the whole frame: a generic lush tropical garden edge beside calm bay water at dusk, a broad paved waterfront promenade curving away, palms and layered planting on the left, soft lantern-like path lights, a calm deep-blue sky with a warm band of afterglow at the horizon, gentle reflections on the water. No buildings, towers, skyline, domes, tree sculptures, Ferris wheel, bridges or any recognisable landmark anywhere. A soft midnight-navy (#14213D) gradient darkens the top 32% and the bottom 38% for legibility. TOP, with 56 px margins: a small solid red tag (#D0021B) with "SINGAPORE HOMEBUYER" in white bold all-caps sans-serif, wide letter-spacing, about 18 px. Below it, the masthead in a high-contrast Didone serif (Bodoni / Playfair Display style), ivory (#FAF6EE), all caps, about 92 px, tight tracking, on two lines: "ONE MARINA" and "GARDENS:". Directly below, the headline tail in the same serif, italic, antique gold (#B89A5E), about 46 px, on one line: "2–4 Bedrooms in Marina South". Then a thin gold hairline. BOTTOM-LEFT, from about 56% of the frame height, stacked like magazine cover lines, three tiles left-aligned at 56 px, each with a 3 px gold bar on its left and no fill: a bold ivory all-caps line, about 26 px, with a small gold all-caps caption beneath, about 15 px: tile 1 "2 TO 4 BEDROOMS" / "646–1,647 SQFT"; tile 2 "GARDENS BY THE BAY MRT" / "THOMSON-EAST COAST LINE"; tile 3 "3 POOLS" / "INCL. 50M LAP POOL". Below the tiles, the subhead in regular ivory serif, about 24 px, on two lines: "Next to Gardens by the Bay, near Marina South Pier MRT. 646–1,647 sqft." Then tiny ivory fine print, about 15 px, on one or two lines: "99-year leasehold. Distances approx., straight-line. Views from selected units only." Then a clear empty strip about 60 px tall (reserved for licence details, leave it blank). Then a full-width midnight-navy (#14213D) rectangular bar, about 84 px tall, with a thin antique-gold inner keyline, and "GET PRICE LIST & E-BROCHURE" in bold ivory all-caps sans-serif, about 21 px, centred. Small italic ivory text at the bottom-right just above the bar, about 14 px: "IMAGE SAMPLE ONLY – not the actual development". If small text is unreadable, leave the fine-print area blank. Render every quoted string exactly once, spelled exactly as quoted, and add no other text. Look: calm, premium, editorial, "here's the project". Avoid: any condo tower, apartment block, facade, skyline, construction site or architectural render; Marina Bay Sands, Supertrees, glass domes, Singapore Flyer, Merlion, barrage or any recognisable Singapore landmark; people facing camera; developer names or logos; any price, dollar sign, psf, discount, unit count or "% sold"; "freehold", "preview", "VVIP", "investment" or "potential"; walk minutes or metre figures; district codes or street names; schools; MRT or LTA logos, station codes or real rail line colours (red, brown, green, purple, orange, yellow, blue, lime); misspelled, warped, duplicated or extra text; watermarks, QR codes, phone numbers.
```

**Photo plate (image-only, for Canva):**

```text
Portrait 4:5 image, 1080x1350 px, with no text of any kind. A full-bleed photoreal photograph: a generic lush tropical garden edge beside calm bay water at dusk, a broad paved waterfront promenade curving away, palms and layered planting on the left, soft path lights, calm deep-blue sky with a warm afterglow band at the horizon, gentle reflections. Keep the top 32% calm sky for a masthead, and the bottom-left 45% calm darker promenade and water for stacked text and a button. Avoid: any text, letters, numbers, logos or watermarks; any building, tower, skyline, dome, tree sculpture, Ferris wheel, bridge or recognisable landmark; people.
```

**9:16 (paste in the same chat after the 4:5 result):** `Now recompose this exact ad as a 9:16 portrait, 1080x1920 px, with identical text, colours and fonts: extend the dusk garden-and-water photo to full height; start the red tag and masthead below the top 14% (masthead about 110 px); place the three cover-line tiles, subhead, fine print, a blank 60 px strip, the navy bar and the image label all between 50% and 80% of the height; keep the bottom 20% as calm dark water with no text. If small text is unreadable, leave the fine-print area blank.`

**B-swap:** masthead tail becomes `Marina South's First New Homes` (Headline B: `One Marina Gardens: Marina South's First New Homes`). Tile 1 stays (B has no bedroom info). Never write "only".

---

## O2. Blind, emotional: window-frame view

- **Headline (A):** `Looking for a City Home Near the Water?`
- **Subhead:** `New 2 to 4-bedroom condo in Marina South, next to Gardens by the Bay.`
- **Small line under the subhead:** `Near Gardens by the Bay MRT & Marina South Pier MRT`
- **CTA:** `GET PRICE LIST & E-BROCHURE`
- **Fine print:** `99-year leasehold. Distances approx., straight-line.`
- **Label:** `IMAGE SAMPLE ONLY – not the actual development`
- **Visual:** a bright, generic living room shot from inside. The window shows lush greenery and calm water only; nothing outside could be read as Gardens by the Bay, Marina Bay or a specific tower. No people.

**Prompt (4:5, paste as one block)**

```text
Create a portrait 4:5 social media ad, exactly 1080x1350 px, for a Singapore condominium, framed as a view from inside a home. TOP 24% of the frame: a plain warm linen-coloured wall (#EDE3D6) with a faint plaster texture. On the wall, 56 px margins: red text "SINGAPORE HOMEBUYER" in bold all-caps sans-serif (#D0021B), wide letter-spacing, about 20 px; below it the headline in a soft humanist serif (Lora / Tiempos style), deep brown ink (#2B2420), about 70 px, sentence case, left-aligned on two lines: "Looking for a City Home" / "Near the Water?". MIDDLE, from about 24% to 68% of the height: a large floor-to-ceiling window with slim warm-grey frames filling most of the width, seen from inside a bright, calm living room; through the glass, a soft-focus view of lush tropical greenery in the foreground and wide calm silvery-green water beyond under a pale morning sky; inside, the edge of a linen sofa, a low oak side table with a ceramic cup and a trailing plant, warm daylight on a pale timber floor. No buildings, towers, skyline, domes or tree sculptures outside the window. Small italic brown text at the window's bottom-right corner, about 14 px: "IMAGE SAMPLE ONLY – not the actual development". BOTTOM 32%: a flat light linen band (#F6F0E7) with 56 px margins: the subhead in regular deep-brown humanist serif, about 27 px, on two lines: "New 2 to 4-bedroom condo in Marina South, next to Gardens by the Bay."; below it a small olive (#5B6B3A) all-caps sans line with a tiny train-front line icon at its left, about 18 px: "Near Gardens by the Bay MRT & Marina South Pier MRT"; tiny brown-grey fine print, about 15 px: "99-year leasehold. Distances approx., straight-line."; a clear empty strip about 60 px tall (reserved for licence details, leave it blank); then an olive (#5B6B3A) rounded-rectangle button, 14 px corners, about 80% of the width, centred, about 80 px tall, with "GET PRICE LIST & E-BROCHURE" in bold ivory (#FAF6EE) all-caps sans-serif, about 21 px. If small text is unreadable, leave the fine-print area blank. Render every quoted string exactly once, spelled exactly as quoted, and add no other text. Look: warm, quiet, homely, morning light, a feeling of space near water. Avoid: any condo tower, apartment block, skyline, Marina Bay Sands, Supertrees, glass domes, Ferris wheel or any recognisable landmark through the window; people or faces; brand logos on furniture; project or developer names; any price, dollar sign, psf, unit count or "% sold"; "freehold", "preview", "VVIP"; walk minutes or metre figures; district codes or street names; schools; MRT or LTA logos, station codes or rail line colours; misspelled, warped, duplicated or extra text; watermarks, QR codes, phone numbers.
```

**Photo plate (image-only, for Canva):**

```text
Portrait 4:5 image, 1080x1350 px, with no text of any kind. Top 24%: a plain warm linen wall with faint plaster texture, completely empty. From 24% to 68%: a large floor-to-ceiling window with slim warm-grey frames seen from inside a bright calm living room; through the glass, soft-focus lush tropical greenery and wide calm silvery-green water under a pale morning sky; inside, the edge of a linen sofa, a low oak side table with a ceramic cup and a trailing plant, warm daylight on a pale timber floor. Bottom 32%: plain light linen floor-level band, empty. Avoid: any text, logos or watermarks; buildings, towers, skyline, domes, tree sculptures or recognisable landmarks outside; people.
```

**9:16:** `Now recompose this exact ad as a 9:16 portrait, 1080x1920 px, with identical text, colours and fonts: wall with eyebrow and headline (about 80 px) from 14% to 30% of the height; the window view from 30% to 62%; the linen band with subhead, MRT line, fine print, a blank 60 px strip and the olive button ending above 80%; plain linen below with no text. If small text is unreadable, leave the fine-print area blank.`

**B-swap:** headline `Gardens by the Bay as Your Neighbourhood Park`; subhead becomes `New 2 to 4-bedroom condo in Marina South, near Marina Bay & two MRT lines.` Keep the MRT small line. The window view still shows generic greenery, never the real gardens.

---

## O3. Floor layout: size-ladder plan sheet

> **Fallback build (no official plans cleared).** Headline B (`3-Bedroom Premium Layouts With Curved Master Windows`) is **official plan only** and is not prompted. If official plans are cleared, composite them into the 5 tiles in Canva and switch the label to `IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY`.

- **Headline (A):** `Marina South Condo Layouts, 646 to 1,647 sqft`
- **Subhead:** `Near Marina South Pier MRT, Gardens by the Bay & Marina Bay.`
- **5 tile titles (small to large), fallback build (perf OMG2):** `2-BEDROOM` · `3-BEDROOM` · `3-BEDROOM DUAL-KEY` · `3-BEDROOM PREMIUM` · `4-BEDROOM PREMIUM`. No sqft on illustrative plans; the size range stays in the headline. With the official plans, restore the copy's sized titles (`2-BEDROOM · 646–732 SQFT` · `3-BEDROOM · 904–1,012 SQFT` · `3-BEDROOM DUAL-KEY · 969 SQFT` · `3-BEDROOM PREMIUM · 1,066–1,238 SQFT` · `4-BEDROOM PREMIUM · 1,647 SQFT`).
- **Chip:** `SMEG & KOHLER FITTINGS` (brand names as plain text only, no logos)
- **Plan label:** `ILLUSTRATIVE LAYOUT ONLY, not to scale`
- **Fine print:** `Sizes approx., per developer. Availability subject to change. 99-year leasehold.`
- **CTA:** `GET PRICE LIST & E-BROCHURE`
- **Plans:** generic top-down line drawings with **no text, numbers or dimensions inside them**; bedroom counts must match each title (2, 3, 3 with a second entrance for the dual-key, 3, 4). No curved windows drawn (that detail belongs to the official-plan Headline B). Best drawn in Canva or Figma; if the model draws them, reject any with a wrong bedroom count, stray text or doors into walls.
- **Building image:** the skill pairs a plan with a building photo. None is cleared and an AI tower is banned, so this ad has no building image (same accepted deviation as Coastal Cabana R2-B). An official render inset goes in the top-right corner once cleared.

**Prompt (4:5, paste as one block)**

```text
Create a portrait 4:5 social media ad, exactly 1080x1350 px, for a Singapore condominium, styled as an architect's size-comparison sheet. No photographs. Background: pale mint graph paper (#EAF4EF) with a fine square grid in thin forest-green lines at low opacity. TOP, 48 px margins: red text "SINGAPORE HOMEBUYER" in bold all-caps sans-serif (#D0021B), wide letter-spacing, about 18 px; below it the headline in a bold grotesk (Space Grotesk Bold style), forest ink (#1D4436), about 60 px, on two lines: "Marina South Condo Layouts," / "646 to 1,647 sqft". PLAN GRID from about 20% to 70% of the height: five white tiles with thin forest-ink borders arranged as a row of two smaller tiles on top and a row of three on the bottom, tiles visibly growing in size from smallest (top-left) to largest (bottom-right). Each tile holds one simple, clean, top-down generic apartment floor plan in forest-ink linework only (thick outer walls, thin inner walls, quarter-circle door swings, thin triple-line windows, simple bed rectangles), with no text, numbers or dimensions inside the plan, and a small monospaced forest-ink all-caps title above the plan, about 15 px: tile 1 (2 bedrooms) "2-BEDROOM"; tile 2 (3 bedrooms) "3-BEDROOM"; tile 3 (3 bedrooms with a second front door) "3-BEDROOM DUAL-KEY"; tile 4 (3 bedrooms, roomier) "3-BEDROOM PREMIUM"; tile 5 (4 bedrooms, the largest tile) "4-BEDROOM PREMIUM". No sqft figures on any tile. Under the grid, left: a small terracotta (#C8553D) rounded chip with white bold all-caps text, about 17 px: "SMEG & KOHLER FITTINGS"; right: small italic forest-ink text, about 15 px: "ILLUSTRATIVE LAYOUT ONLY, not to scale". BOTTOM, 48 px margins: the subhead in regular forest-ink grotesk, about 26 px, on two lines: "Near Marina South Pier MRT, Gardens by the Bay & Marina Bay."; tiny forest-ink fine print, about 15 px: "Sizes approx., per developer. Availability subject to change. 99-year leasehold."; a clear empty strip about 60 px tall (reserved for licence details, leave it blank); then a full-width forest-ink (#1D4436) bar, about 82 px tall, 8 px corners, with a small terracotta arrow tab at its right end, and "GET PRICE LIST & E-BROCHURE" in bold white all-caps grotesk, about 21 px. If small text is unreadable, leave the fine-print area blank. Render every quoted string exactly once, spelled exactly as quoted, and add no other text. Look: practical, precise, easy to compare at a glance. Avoid: any text, room names, numbers or dimension lines inside the plans; sqft figures on the tiles; a wrong number of bedrooms in any tile; curved feature windows; site plans, pools or balconies drawn as features; any photograph, building, tower or render; brand logos; project or developer names; any price, dollar sign or psf; unit counts or "% sold"; "freehold", "preview", "VVIP"; walk minutes or metre figures; district codes or street names; MRT or LTA logos or rail line colours; misspelled, warped, duplicated or extra text; watermarks, QR codes, phone numbers.
```

**Background plate (optional):** pale mint graph paper (#EAF4EF) with a fine forest-green grid, 1080x1350, no text. In practice build the whole ad in Canva: five tile frames, plans drawn with Canva line tools, titles typeset.

**9:16 (build this first, per copy):** `Now recompose this exact ad as a 9:16 portrait, 1080x1920 px, with identical text, colours and fonts: eyebrow and headline (about 70 px) start below the top 14%; stack the five plan tiles vertically in one column, smallest at top to largest at bottom, keeping the same bedroom-type titles with no sqft, each full width so the plans read at phone size, from about 22% to 68% of the height; then the chip and plan label, subhead, fine print, a blank 60 px strip and the bar, all ending above 80%; plain graph paper below. If small text is unreadable, leave the fine-print area blank.`

---

## O4. MRT (two working stations): two-line route diagram

- **Headline (A):** `Thomson-East Coast Line & North-South Line, Both Nearby`
- **Subhead:** `Near Gardens by the Bay MRT, Marina South Pier MRT & Marina Bay.`
- **Map labels (full names only):** `HOME` · `GARDENS BY THE BAY MRT` / `THOMSON-EAST COAST LINE` · `MARINA SOUTH PIER MRT` / `NORTH-SOUTH LINE` · `GARDENS BY THE BAY` · `MARINA BAY`
- **Fine print (includes the map label):** `Distances approx., straight-line. Illustrative map, not to scale. 99-year leasehold.`
- **CTA:** `GET PRICE LIST & E-BROCHURE`
- **Diagram rules:** two lines in **off-white only**, told apart by style (one solid thick line, one double line with a hairline centre), never in real line colours. Each line has exactly one station node, the labelled one. **No third station dot, no unlabelled dot, no interchange where the lines meet**; the lines pass on either side of the HOME pin and do not join. No distance or minute labels. Water and garden are soft abstract shapes, not real coastline.

**Prompt (4:5, paste as one block)**

```text
Create a portrait 4:5 social media ad, exactly 1080x1350 px, for a Singapore condominium, as a clean dark-mode transit diagram. Background: flat deep slate (#1A1D21). TOP, 56 px margins: a small solid red tag (#D0021B) with "SINGAPORE HOMEBUYER" in white bold all-caps sans-serif, wide letter-spacing, about 18 px; below it the headline in a compact bold sans-serif (Inter Tight Bold style), off-white (#F5F1E8), about 56 px, on three lines: "Thomson-East Coast Line" / "& North-South Line," / "Both Nearby". DIAGRAM from about 28% to 70% of the height, flat vector: a soft abstract steel-blue (#4A6378) water shape along the lower-right edge labelled in small off-white all-caps, about 16 px, "MARINA BAY"; a soft abstract sage (#7E9A7A) garden shape on the right labelled "GARDENS BY THE BAY"; in the centre a large amber (#F2A541) map pin with a small house glyph and the label "HOME" in bold slate on the pin's base. Line 1: a solid thick off-white line entering from the top-right and ending at a single round station node to the right of the pin, labelled in bold off-white all-caps, about 20 px, "GARDENS BY THE BAY MRT" with a smaller caption beneath, about 15 px, "THOMSON-EAST COAST LINE". Line 2: an off-white double line with a thin dark hairline down its centre, entering from the left and ending at a single round station node below-left of the pin, labelled "MARINA SOUTH PIER MRT" with the caption "NORTH-SOUTH LINE". The two lines never touch, never cross and share no station; each line has exactly one station node; there are no other dots, stations or labels on the map. BOTTOM, 56 px margins: the subhead in regular off-white sans-serif, about 25 px, on two lines: "Near Gardens by the Bay MRT, Marina South Pier MRT & Marina Bay."; tiny warm-grey fine print, about 15 px: "Distances approx., straight-line. Illustrative map, not to scale. 99-year leasehold."; a clear empty strip about 60 px tall (reserved for licence details, leave it blank); then a full-width off-white (#F5F1E8) pill button, about 80 px tall, with "GET PRICE LIST & E-BROCHURE" in bold slate (#1A1D21) all-caps sans-serif, about 21 px. If small text is unreadable, leave the fine-print area blank. Render every quoted string exactly once, spelled exactly as quoted, and add no other text. Look: crisp, honest, map-reader, calm dark mode. Avoid: red, brown, green, purple, orange, yellow, blue or lime rail lines; any third station, unlabelled dot, interchange symbol or station between the two named stations; MRT or LTA logos, station codes or real map tiles; distance, minute or walk labels; real coastline outlines; buildings, towers, domes or landmarks; photographs; project or developer names; any price, dollar sign or psf; unit counts or "% sold"; "freehold", "preview", "VVIP"; district codes or street names; misspelled, warped, duplicated or extra text; watermarks, QR codes, phone numbers.
```

**Plate:** none needed. Build entirely in Canva (slate background, two line shapes, two circles, pin, two soft shapes, typeset labels at 20 px or more).

**9:16:** `Now recompose this exact ad as a 9:16 portrait, 1080x1920 px, with identical text, colours and fonts: headline (about 64 px) starts below the top 14%; enlarge the diagram to fill from about 30% to 64% of the height with labels at about 24 px; then the subhead, fine print, a blank 60 px strip and the pill, ending above 80%; plain slate below with no text. If small text is unreadable, leave the fine-print area blank.`

**B-swap:** headline `Commute on Two MRT Lines From Marina South`. Map, subhead and fine print unchanged.

---

## O5. Facilities (replaces Price): big-numeral brochure page

- **Headline (A):** `3 Pools & 50+ Facilities in Marina South`
- **Subhead:** `Near Gardens by the Bay MRT & Marina Bay. Bay views from selected units.`
- **Giant numeral:** `50+` / `FACILITIES ACROSS 6 LEVELS` · small line `per published review`
- **Icon row (4):** `50M LAP POOL` · `2 GYMS` · `SKY DECKS` · `CLUBHOUSE`
- **Fine print:** `Facilities per published review. Views from selected units only. 99-year leasehold.`
- **Label:** `IMAGE SAMPLE ONLY – not the actual development`
- **CTA:** `GET PRICE LIST & E-BROCHURE`
- **Visual:** a generic garden lap pool at ground level, framed by planting and sky. **No tower, block, balcony, skyline or rooftop-infinity-pool-over-a-city look** (that reads as Marina Bay Sands).

**Prompt (4:5, paste as one block)**

```text
Create a portrait 4:5 social media ad, exactly 1080x1350 px, for a Singapore condominium, styled as a calm resort-brochure page. TOP 50% of the frame: a photoreal photograph of a long generic outdoor lap pool at ground level in soft late-morning light, clear water with lane-line tiles visible on the pool floor, a timber deck edge with two white loungers, tall palms and dense tropical planting on both sides, a pale blue sky; no buildings of any kind, no skyline. A soft darkening gradient in the top 22% for legibility. Top-left over the photo, 56 px margins: a small solid red tag (#D0021B) with "SINGAPORE HOMEBUYER" in white bold all-caps sans-serif, wide letter-spacing, about 18 px; below it the headline in a light clean sans-serif (Manrope SemiBold style), white with a soft shadow, about 58 px, on two lines: "3 Pools & 50+ Facilities" / "in Marina South". Bottom-right of the photo, just above the seam: small italic white text on a subtle dark strip, about 14 px: "IMAGE SAMPLE ONLY – not the actual development". BOTTOM 50%: a clean white panel (#FFFFFF). STRADDLING THE SEAM at left, from about 41% to 60% of the height: a giant extended wide grotesk numeral (Druk Wide / Archivo Expanded Black style) reading "50+" in plum (#5A2A4A), about 260 px tall, with a thin white outline where it overlaps the photo; to its right on the white panel, "FACILITIES ACROSS 6 LEVELS" in bold plum all-caps light sans, about 26 px, on two lines, with a small italic line beneath, about 16 px: "per published review". From about 63% to 74%: a row of four equal cells, each a blush (#F6E3E7) rounded square holding a thin plum line icon above a small bold plum all-caps label, about 16 px: "50M LAP POOL" (wave lines), "2 GYMS" (a dumbbell), "SKY DECKS" (a deck chair under an open sky), "CLUBHOUSE" (a simple pavilion). Below, the subhead in regular plum-grey sans-serif, about 23 px, on two lines: "Near Gardens by the Bay MRT & Marina Bay. Bay views from selected units."; tiny grey fine print, about 15 px: "Facilities per published review. Views from selected units only. 99-year leasehold."; a clear empty strip about 60 px tall (reserved for licence details, leave it blank); then a blush (#F6E3E7) ticket-shaped button with a 2 px plum outline and semicircular notches on both short ends, about 84% of the width, centred, about 80 px tall, with "GET PRICE LIST & E-BROCHURE" in bold plum all-caps sans-serif, about 21 px. If small text is unreadable, leave the fine-print area blank. Render every quoted string exactly once, spelled exactly as quoted, and add no other text. Look: airy, upbeat, premium resort brochure; the giant number hits first. Avoid: any condo tower, apartment block, balcony, hotel or building around the pool; a rooftop infinity pool over a city skyline; Marina Bay Sands or any landmark; water slides; identifiable people; resort, hotel, project or developer names or logos; any price, dollar sign, psf, unit count or "% sold"; "freehold", "preview", "VVIP"; walk minutes or metre figures; district codes or street names; MRT or LTA logos or rail line colours; misspelled, warped, duplicated or extra text; watermarks, QR codes, phone numbers.
```

**Photo plate (image-only, for Canva):** generate the top half only, 1080x675 landscape.

```text
Landscape image, 1080x675 px, with no text of any kind: a photoreal long generic outdoor lap pool at ground level in soft late-morning light, clear water with lane-line tiles on the pool floor, a timber deck edge with two white loungers, tall palms and dense tropical planting on both sides, pale blue sky; keep the top-left 45% calm sky and planting for a headline, and the bottom-left quarter calm for a numeral overlap. Avoid: any text, logos or watermarks; any building, tower, balcony, hotel or skyline; infinity edge over a city; water slides; people.
```

**9:16:** `Now recompose this exact ad as a 9:16 portrait, 1080x1920 px, with identical text, colours and fonts: the pool photo fills the top 42% (red tag and headline below the top 14%); the "50+" numeral straddles the seam at about 38–50%; the four icon cells become a 2x2 grid; then subhead, fine print, a blank 60 px strip and the ticket button, ending above 80%; plain white below with no text. If small text is unreadable, leave the fine-print area blank.`

**B-swap:** headline `Come Home to a 50m Lap Pool`; swap the `50M LAP POOL` cell for `3 POOLS` (three wave lines icon).

---

## Before you generate (One Marina Gardens)

- [ ] **Marina South MRT status** re-checked: still not operating, no LTA date. If a date is announced, the copy is revisited first; the prompts stay as they are until then.
- [ ] **Stock within 48h of launch:** the 646 sqft 2BR and the 1,647 sqft 4BR Premium are still available (they set every "646–1,647" range), plus the 969 sqft 3BR dual-key (single size, O3 tile 3). If any sells out, the copywriter updates the ranges and O3's tile titles before you build.
- [ ] **CEA authorisation (S3):** if GoAhead isn't authorised to market One Marina Gardens, O1 is Blocked.
- [ ] **Rights (S7):** official render (O1 swap-in) and official plans (O3; Headline B needs the official 3BR Premium plan). Also confirm GoAhead may send the developer's e-brochure, or the CTA promise breaks.
- [ ] **Performance review** of research + copy + these prompts (no `perf-review.md` yet), and an account pull with the gomedia-homes filter (copy Flag 7: One Marina Gardens ads may have run before).
- [ ] Any paid generation: state the cost (above) and get the user's go-ahead in chat. Free consumer tools still need QA and the user's pre-launch approval before anything publishes.

## Flags (designer)

1. **Designer-set strings for the copywriter to proof:** O1's masthead split (`ONE MARINA` / `GARDENS:` + gold tail) reads as Headline A; O4's headline is split over 3 lines. No words added.
2. **O1 tile 1 repeats the headline's bedroom range.** The copy keeps tile 1 with both headlines; kept as written. If the copywriter prefers, tile 1 could become `NEXT TO` / `GARDENS BY THE BAY` with Headline A.
3. **O2 interior label:** the copy specifies `– not the actual development` (not "– not the actual unit"). Kept word for word.
4. **O3 has no building image** (no cleared render, no AI tower allowed). Same deviation the user accepted for Coastal Cabana R2-B; needs the user's OK again for this project.
5. **Image-model risks, reject on sight:** a landmark in O1/O2 (MBS, Supertrees, domes, Flyer), a tower behind the O5 pool or a city-skyline infinity edge, a third station dot or joined lines on O4, wrong bedroom counts or text inside O3's plans.
6. **Layout reuse across projects:** O5's big-numeral brochure page follows the copy's layout note and echoes Coastal Cabana C5 in structure; palette, type and icon set are all new.
