# Amberwood at Holland: Image Prompts (GoAhead, 5 ads, 5 different layouts)

> **Revision 1 (2026-11-07), performance fixes applied:** AW2: the A1, A4 and A5 subheads drop "near King Albert Park MRT" (A1 `Beside the Rail Corridor, near Bukit Timah Nature Reserve. 872 to 1,572 sqft.`, A4 `New Holland condo near Bukit Timah Nature Reserve, among landed homes.`, A5 `New low-rise Holland condo, beside the Rail Corridor.`). AW3: the `KING ALBERT PARK MRT` chip is removed from A4 (4:5 and 9:16). King Albert Park MRT now appears on no image. AW1 is a primary-text fix in `copy-brief.md`.

Revision 1, written 2026-11-07 by static-designer. **Prompts only.** Nothing has been generated, no paid API has been called, nothing was downloaded or uploaded.

- **Copy source:** `copy-brief.md` Revision 1 (A1–A5). Headline A, subhead, on-image strings, CTA, fine print and labels are used word for word. Headline B is a swap line under each ad. Strings I had to add, move or re-split are listed in Flags.
- **Facts source:** `research.md` CONFIRMED rows only.
- **Format model:** `coastal-cabana/design-prompts.md` Revision 2, plus a photo-plate prompt per ad for the Canva route.
- **Process:** shortened project flow. No `perf-review.md` exists for this project yet. Performance reviews research + copy + these prompts together. Nothing here is the user's approval.
- `inputs/product-images/` is empty. No official render or plan is cleared (copy Flag 8). Finished images go in `amberwood-at-holland/images/`.

**Rules baked into every prompt:**
- **No price anywhere** (entry $2.542M is far over the ~$1.6M line). No "$", psf, monthly figure or discount.
- Only A1 shows "Amberwood at Holland". A2–A5 carry no name, developer or address. Sim Lian Group stays in A1's primary text only.
- **MRT:** King Albert Park MRT appears on no image (perf AW2, AW3). No walk minutes. The Cross Island Line is never on an image (it's in A4's primary text only, hedged).
- No "first in Singapore", "first-mover", growth, potential, "boutique", unit counts, % sold, "D10", street names (Holland Link), the columbarium, Green Mark, childcare centre, private lift on images, or the Vietnamese page's "4.9 / 5.0 stars".
- **Schools:** Methodist Girls' School only as "nearby" on A2, with the MOE line. No school building, uniform, crest or badge.
- **No identifiable landmarks:** no Rail Corridor truss bridge, no old railway station, no rail tracks or sleepers, no Bukit Timah summit marker, no Holland Village signage. Greenery is generic.
- No AI condo tower captioned or implied as this project. A4's block silhouettes are flat generic shapes in a labelled diagram.
- No real MRT line colours or logos. People never identifiable.
- **Brand constants:** red `SINGAPORE HOMEBUYER` eyebrow (#D0021B) and CTA `GET PRICE LIST & E-BROCHURE` (Meta button: **Download**).
- **Image labels:** generic images get `IMAGE SAMPLE ONLY – not the actual development`. `IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY` only on an official render or plan. Fallback plan: `ILLUSTRATIVE LAYOUT ONLY, not to scale`. Diagram: `Illustrative diagram, not to scale.`
- A clear ~60 px strip above every CTA for the CEA particulars. Final fine print 18 px or more on 4:5. 9:16 safe zones: no text in the top 14% or bottom 20%.

## Generator, route and cost

- **Recommended route: photo plate + live text.** Generate the image only, set every string in Canva or Figma, proof against `copy-brief.md`. Use the full prompt for mock-ups and free drafts only.
- **Generators:** ChatGPT image for full-prompt mock-ups (best on-image text); Gemini image for photo plates. Consumer apps: S$0 (plan limits).
- **Paid API, only after the user's go-ahead:** Gemini 2.5 Flash Image about US$0.04/image (~S$0.05); OpenAI gpt-image-1 about US$0.04 medium, about US$0.17–0.25 high portrait (~S$0.22–0.33). Approximate, 2026-11; check before any spend.
- **This project's scope:** photo plates for A1 (green trail, landscape), A2 (notebook on a table, no writing), A4 (green trail/treeline) and A5 (pool, top half). A3 is a Canva build. 4 plates x 2 ratios x up to 3 attempts = up to 24 images: **about S$1.20 on Gemini API, up to about S$8 on gpt-image-1 high.**

---

## Design at a glance

| Ad | Angle | Layout | Palette | Type | Visual | CTA shape | Label |
|---|---|---|---|---|---|---|---|
| **A1** | Direct (named, no price) | **Postcard name card:** landscape photo in the top 60% inside a white postcard border, Nordic name lockup, 3 tiles in a row | Sage #A3B18A, warm oak #C08A5B, white #FFFFFF, ink #2F3337 | Clean geometric Nordic sans (Futura PT / Josefin Sans style), spaced caps | Generic wide green trail between trees, soft overcast light, no buildings | Oak rectangle with a small stamp-style corner | IMAGE SAMPLE ONLY – not the actual development |
| **A2** | Blind, family question | **Wishlist notebook:** open lined notebook on a kitchen table, handwritten title, 4 ticked lines, band below | Notebook cream #FBF7EE, ballpoint blue #2C3E7A, dusty rose band #D8A7A0, text #3B2F2F | Neat handwriting (Patrick Hand style) + soft sans | Notebook, pencil, mug on a pale wood table (writing added in Canva) | Ballpoint-blue rounded button | IMAGE SAMPLE ONLY – not the actual development |
| **A3** | Floor layout + 3.18m ceilings | **Plan + cross-section:** plan on the left two-thirds of warm paper, slim section on the right | Warm drafting paper #F2E8D5, sepia ink #5A3E2B, ochre #D4A017 | Grotesk (Archivo SemiBold style) + JetBrains Mono labels | No photo. Generic 3BR plan, no text inside | Sepia bar with an ochre underline | ILLUSTRATIVE LAYOUT ONLY, not to scale |
| **A4** | Low-rise green living (replaces MRT) | **Skyline strip over a green photo:** photo top two-thirds, a low-rise vs tower silhouette strip along its bottom edge, text on white | Fog grey #D9DCD6, deep pine #24453A, mid-grey #8C918C dashed outline, white | Large neo-grotesk (Neue Haas / Helvetica Now style), tight | Generic tree-lined green trail at golden hour, no buildings | Pine full-width bar, square corners | IMAGE SAMPLE ONLY – not the actual development + Illustrative diagram, not to scale. |
| **A5** | Wellness facilities (replaces Price) | **Weekend planner card:** pool photo top half, a paper planner card overlapping it with 3 rows | Butter #FFF4D6, lavender tabs #B8A9D9, ink #3A3355 | Rounded friendly sans (Quicksand Bold style) + light sans | Generic garden lap pool, no tower | Lavender tab-shaped button | IMAGE SAMPLE ONLY – not the actual development |

How they differ: postcard vs notebook still-life vs drafting sheet vs photo-with-silhouette strip vs planner card; sage/oak vs cream/ballpoint/rose vs paper/sepia/ochre vs fog/pine vs butter/lavender; geometric Nordic vs handwriting vs grotesk + mono vs neo-grotesk vs rounded. No earlier project's hex values are reused; only #D0021B repeats.

---

## A1. Direct (named, no price): postcard name card

- **Headline (A):** `Amberwood at Holland: Low-Rise 3 to 5-Bedroom Homes`
  - Name layer `AMBERWOOD AT HOLLAND:` in spaced caps; tail `Low-Rise 3 to 5-Bedroom Homes` below in oak. Together they read as Headline A.
- **Subhead:** `Beside the Rail Corridor, near Bukit Timah Nature Reserve. 872 to 1,572 sqft.`
- **3 tiles:** `4 TO 6 STOREYS` / `LOW-RISE BLOCKS` · `3.18M CEILINGS` / `FAMILY LAYOUTS` · `50M LAP POOL` / `WELLNESS FACILITIES`
- **Fine print:** `99-year leasehold. Distances approx., straight-line.` + label
- **Label:** `IMAGE SAMPLE ONLY – not the actual development` (official render swap-in: `IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY`)
- **CTA:** `GET PRICE LIST & E-BROCHURE`

**Prompt (4:5, paste as one block)**

```text
Create a portrait 4:5 social media ad, exactly 1080x1350 px, for a Singapore condominium, styled as a calm Scandinavian postcard. Background: flat white (#FFFFFF). TOP 58% of the frame: a landscape photo inset with a 32 px white border on the top and sides like a postcard, square corners: a photoreal photograph of a generic wide, grassy green trail running straight into the distance between rows of tall tropical trees, soft overcast daylight, muted natural greens, a cyclist-free, people-free, peaceful scene; no buildings, no bridges, no rail tracks or sleepers, no signs. Bottom-left of the photo: small italic white text on a subtle dark translucent strip, about 14 px: "IMAGE SAMPLE ONLY – not the actual development". Top-left of the photo, 24 px in: a small solid red tag (#D0021B) with "SINGAPORE HOMEBUYER" in white bold all-caps sans-serif, wide letter-spacing, about 18 px. Top-right of the photo: a small sage (#A3B18A) postage-stamp-style square with a perforated edge and a simple single-line leaf drawing inside, no text. BELOW THE PHOTO, 56 px margins, left-aligned: the name in a clean geometric Nordic sans-serif (Futura PT / Josefin Sans Bold style), ink (#2F3337), all caps, widely tracked, about 50 px, on one line: "AMBERWOOD AT HOLLAND:"; directly below, the headline tail in the same sans, regular weight, warm oak (#C08A5B), about 40 px: "Low-Rise 3 to 5-Bedroom Homes". Then a row of three equal tiles across the width, each with a 1 px sage outline and 6 px corners, no fill, each with a bold ink all-caps line, about 20 px, and a sage all-caps caption under it, about 13 px: tile 1 "4 TO 6 STOREYS" / "LOW-RISE BLOCKS"; tile 2 "3.18M CEILINGS" / "FAMILY LAYOUTS"; tile 3 "50M LAP POOL" / "WELLNESS FACILITIES". Then the subhead in regular ink sans-serif, about 23 px, on two lines: "Beside the Rail Corridor, near Bukit Timah Nature Reserve. 872 to 1,572 sqft."; tiny grey fine print, about 15 px: "99-year leasehold. Distances approx., straight-line."; a clear empty strip about 60 px tall (reserved for licence details, leave it blank); then a full-width warm-oak (#C08A5B) rectangular button, about 80 px tall, with "GET PRICE LIST & E-BROCHURE" in bold white all-caps geometric sans, about 21 px, widely tracked. If small text is unreadable, leave the fine-print area blank. Render every quoted string exactly once, spelled exactly as quoted, and add no other text. Look: quiet, airy, Nordic-minimal, family-calm. Avoid: any condo tower, apartment block, facade, skyline or architectural render; truss bridges, railway stations, rail tracks or sleepers; summit markers, park signs or any landmark; people; developer names or logos; any price, dollar sign, psf, unit count, "boutique" or "% sold"; "freehold", "preview", "VVIP", "first-mover"; walk minutes or metre figures; district codes or street names; schools; MRT or LTA logos, station codes or rail line colours; misspelled, warped, duplicated or extra text; watermarks, QR codes, phone numbers.
```

**Photo plate:** `Landscape image, 1016x760 px, with no text: a photoreal generic wide grassy green trail running straight into the distance between rows of tall tropical trees, soft overcast daylight, muted natural greens, peaceful, no people. Keep the top-left and bottom-left corners calm for small labels. Avoid: any text, logos, buildings, bridges, rail tracks, sleepers, signs or people.`

**9:16:** `Now recompose this exact ad as a 9:16 portrait, 1080x1920 px, with identical text, colours and fonts: the postcard photo sits from 14% to 50% of the height (red tag inside its top-left, label bottom-left); below, the name (about 56 px), the oak tail, the three tiles stacked as three full-width rows, subhead, fine print, a blank 60 px strip and the oak button, all ending above 80%; plain white below with no text. If small text is unreadable, leave the fine-print area blank.`

**B-swap:** tail becomes `First Condo in Holland Plain` (Headline B: `Amberwood at Holland: First Condo in Holland Plain`); swap tile 1 for `3 TO 5 BEDROOMS` / `872–1,572 SQFT`. No "first-mover" or growth framing anywhere.

---

## A2. Blind, family (emotional): wishlist notebook

- **Headline (A), handwritten title:** `Looking for a bigger home for your family?`
- **Subhead:** `New low-rise condo in Holland, 3 to 5 bedrooms, near Methodist Girls' School.`
- **4 ticked lines (handwritten):** `3 to 5 bedrooms` · `Ceilings 3.18m high` · `Methodist Girls' School nearby` · `Walks on the Rail Corridor`
- **MOE line:** rendered once, as the first sentence of the fine print (the copy lists it as a tiny line and in the fine print; Flag 2).
- **Fine print:** `School admission subject to MOE regulations and balloting. 99-year leasehold. Distances approx., straight-line.` + label
- **Label:** `IMAGE SAMPLE ONLY – not the actual development`
- **CTA:** `GET PRICE LIST & E-BROCHURE`
- **Build note:** generate the notebook still-life **with blank pages**, then write the title and lines in Canva with a handwriting font. Image models garble handwriting.

**Prompt (4:5, paste as one block)**

```text
Create a portrait 4:5 social media ad, exactly 1080x1350 px, for a Singapore condominium, styled as a family's wishlist notebook. TOP 70% of the frame: a photoreal overhead photograph of an open lined notebook with cream pages (#FBF7EE) lying on a pale wood kitchen table in soft morning window light; a yellow pencil lying diagonally at the lower-right of the notebook, a white ceramic mug of tea at the top-right corner of the frame, a small sprig of greenery at the left edge; warm, homely, no people, no hands. Top-left, on the table above the notebook, 48 px margins: red text "SINGAPORE HOMEBUYER" in bold all-caps sans-serif (#D0021B), wide letter-spacing, about 18 px. On the notebook's right-hand page, written in neat ballpoint-blue (#2C3E7A) handwriting (Patrick Hand style), following the ruled lines: the title, about 48 px, on three lines: "Looking for a bigger" / "home for your" / "family?"; under it four lines, about 32 px each, each starting with a hand-drawn blue tick in a small hand-drawn box: "3 to 5 bedrooms"; "Ceilings 3.18m high"; "Methodist Girls' School nearby"; "Walks on the Rail Corridor". On the left-hand page, a simple hand-drawn blue-ink doodle of a low house with a tree beside it, no text, no numbers. Small italic dark-brown text at the bottom-left of the photo, about 14 px: "IMAGE SAMPLE ONLY – not the actual development". BOTTOM 30%: a flat dusty-rose band (#D8A7A0), 48 px margins: the subhead in regular deep brown (#3B2F2F) soft sans-serif, about 25 px, on two lines: "New low-rise condo in Holland, 3 to 5 bedrooms, near Methodist Girls' School."; tiny deep-brown fine print, about 15 px, on two lines: "School admission subject to MOE regulations and balloting." / "99-year leasehold. Distances approx., straight-line."; a clear empty strip about 60 px tall (reserved for licence details, leave it blank); then a ballpoint-blue (#2C3E7A) rounded button, 16 px corners, about 82% of the width, centred, about 78 px tall, with "GET PRICE LIST & E-BROCHURE" in bold white all-caps sans-serif, about 20 px. If small text is unreadable, leave the fine-print area blank. Render every quoted string exactly once, spelled exactly as quoted, and add no other text. Look: warm, personal, parent-to-parent, a real family making a list. Avoid: hands or people; any other writing on the pages; school buildings, uniforms, crests, badges or logos; condo towers or apartment blocks (the doodle is a simple low house); brand logos on the mug or notebook; project or developer names; any price, dollar sign, psf, unit count or "% sold"; "freehold", "preview", "VVIP"; walk minutes, metre figures or "within 1km"; district codes or street names; MRT or LTA logos or rail line colours; misspelled, warped, duplicated or extra text; watermarks, QR codes, phone numbers.
```

**Photo plate:** `Portrait image, 1080x945 px, with no text or writing of any kind: a photoreal overhead photograph of an open lined notebook with blank cream pages on a pale wood kitchen table in soft morning window light, a yellow pencil diagonally at the lower-right, a white ceramic mug at the top-right corner, a sprig of greenery at the left edge; no people, no hands, no logos. Keep both pages completely blank.` Add the title, ticks, lines and doodle in Canva.

**9:16:** `Now recompose this exact ad as a 9:16 portrait, 1080x1920 px, with identical text, colours and fonts: the notebook photo fills from 14% to 64% of the height, rotated so one page fills most of the width, with the title and four ticked lines larger (title about 56 px); the dusty-rose band holds the subhead, fine print, a blank 60 px strip and the blue button, ending above 80%; plain rose below with no text. If small text is unreadable, leave the fine-print area blank.`

**B-swap:** title `3 to 5-Bedroom Family Homes in Holland`; subhead `New low-rise Holland condo near Methodist Girls' School & the Rail Corridor.` Ticked lines and MOE line unchanged.

---

## A3. Floor layout: plan + ceiling-height cross-section

> **Fallback build (no official plan cleared).** The copy's plan titles (e.g. `3-BEDROOM FLEXI · 958 SQFT`) come from the official plan used, so the fallback title is `3-BEDROOM LAYOUT · ILLUSTRATIVE, NOT TO SCALE` (Coastal Cabana R2-B precedent; Flag 3). With an official plan: restore the copy's title for that plan, switch the label to `IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY`, and add a small official-render inset top-right.

- **Headline (A):** `3 to 5 Bedrooms With 3.18m Ceilings`
- **Subhead:** `Flexi and Study layouts in a low-rise Holland condo, beside the Rail Corridor.`
- **Plan title (fallback):** `3-BEDROOM LAYOUT · ILLUSTRATIVE, NOT TO SCALE`
- **Cross-section:** `3.18M` ceiling line vs a dotted `2.8M TYPICAL` line
- **Chip:** `FLEXI & STUDY OPTIONS`
- **Fine print:** `Sizes and ceiling heights per published review. 99-year leasehold.` + `ILLUSTRATIVE LAYOUT ONLY, not to scale`
- **CTA:** `GET PRICE LIST & E-BROCHURE`
- **Plan:** generic 3-bedroom, **no text, numbers or dimensions inside**. No private lift or lift lobby drawn (perf Amber condition c). No building image (Flag 4).

**Prompt (4:5, paste as one block)**

```text
Create a portrait 4:5 social media ad, exactly 1080x1350 px, for a Singapore condominium, styled as a warm architect's drawing sheet. No photographs. Background: warm drafting paper (#F2E8D5) with a subtle paper grain and a thin sepia border rule 24 px in from the edges. TOP, 52 px margins: red text "SINGAPORE HOMEBUYER" in bold all-caps sans-serif (#D0021B), wide letter-spacing, about 18 px; below it the headline in a semibold grotesk (Archivo SemiBold style), sepia ink (#5A3E2B), about 64 px, on two lines: "3 to 5 Bedrooms With" / "3.18m Ceilings". At about 20% of the height: a small sepia rectangular title strip with paper-coloured monospaced all-caps text (JetBrains Mono style), about 16 px: "3-BEDROOM LAYOUT · ILLUSTRATIVE, NOT TO SCALE". PLAN, left two-thirds of the width, from about 24% to 66% of the height: one clean top-down generic three-bedroom apartment floor plan in fine sepia linework only: thick outer walls, thin inner walls, quarter-circle door swings, thin triple-line windows, three bedrooms with simple bed rectangles (one larger), an open living and dining area with a sofa outline, a compact kitchen, two bathrooms, and one small extra room drawn with a dashed partition to suggest a flexible study; no text, room names, numbers or dimensions anywhere inside the plan; no lift. CROSS-SECTION, right third, same height band: a slim side-section of one storey: floor slab at the bottom, ceiling slab at the top; a solid ochre (#D4A017) horizontal line at ceiling height with an ochre vertical dimension arrow and the bold ochre monospaced label "3.18M"; a lower dotted sepia horizontal line with the sepia monospaced label "2.8M TYPICAL"; a tiny simple standing adult silhouette for scale, no face. Under the plan, left: a small ochre rounded chip with sepia bold all-caps text, about 16 px: "FLEXI & STUDY OPTIONS". BOTTOM, 52 px margins: the subhead in regular sepia grotesk, about 25 px, on two lines: "Flexi and Study layouts in a low-rise Holland condo, beside the Rail Corridor."; tiny sepia fine print, about 15 px, on two lines: "Sizes and ceiling heights per published review. 99-year leasehold." / "ILLUSTRATIVE LAYOUT ONLY, not to scale"; a clear empty strip about 60 px tall (reserved for licence details, leave it blank); then a full-width sepia (#5A3E2B) rectangular bar, about 82 px tall, with a 4 px ochre underline and "GET PRICE LIST & E-BROCHURE" in bold paper-coloured all-caps grotesk, about 21 px. If small text is unreadable, leave the fine-print area blank. Render every quoted string exactly once, spelled exactly as quoted, and add no other text. Look: practical, precise, warm and calm; the tall ceiling line is the second thing the eye hits. Avoid: text, room names, numbers or dimension lines inside the plan; a fourth or fifth bedroom; lifts, lift lobbies or private-lift symbols; balconies, pools or site plans; any photograph, building, tower or render; project or developer names or logos; any price, dollar sign or psf; unit counts or "% sold"; "freehold", "preview", "VVIP"; walk minutes or metre figures; district codes or street names; MRT or LTA logos or rail line colours; misspelled, warped, duplicated or extra text; watermarks, QR codes, phone numbers.
```

**Plate:** none needed; build in Canva (paper texture, line-drawn plan, section). Keep the plan as one Canva group so it can be swapped for the official plan.

**9:16 (build first, per copy):** `Now recompose this exact ad as a 9:16 portrait, 1080x1920 px, with identical text, colours and fonts: headline (about 72 px) starts below the top 14%; the plan fills the full width from about 24% to 52% of the height; the cross-section sits below it at full width from 53% to 63%, drawn horizontally wider; then the chip, subhead, fine print, a blank 60 px strip and the sepia bar, ending above 80%; plain paper below with no text. If small text is unreadable, leave the fine-print area blank.`

**B-swap:** headline `Family Layouts From 872 to 1,572 sqft`. Everything else unchanged.

---

## A4. Low-rise green living (replaces MRT): skyline strip over a green photo

- **Headline (A):** `A Low-Rise Home Beside the Rail Corridor`
- **Subhead:** `New Holland condo near Bukit Timah Nature Reserve, among landed homes.`
- **Skyline strip:** a row of short block silhouettes labelled `4–6 STOREYS` beside a tall dashed tower outline labelled `TYPICAL CONDO TOWER` (generic flat shapes, no windows detail, no real buildings).
- **Place labels (perf AW3: `KING ALBERT PARK MRT` removed):** `RAIL CORRIDOR` · `BUKIT TIMAH NATURE RESERVE`. The copy puts these "on the photo". I set them as a row of small pin chips under the strip instead, so a generic photo isn't captioned as the real Rail Corridor (Flag 5).
- **Fine print:** `Distances approx., straight-line. Illustrative diagram, not to scale. 99-year leasehold.` + `IMAGE SAMPLE ONLY – not the actual development`
- **CTA:** `GET PRICE LIST & E-BROCHURE`

**Prompt (4:5, paste as one block)**

```text
Create a portrait 4:5 social media ad, exactly 1080x1350 px, for a Singapore condominium. TOP 60% of the frame, full width: a photoreal photograph of a generic tree-lined green trail at golden hour, a broad grassy path flanked by tall rain trees and dense tropical greenery, warm low sunlight through the leaves, peaceful, no people; no buildings, no bridges, no rail tracks or sleepers, no signs. Top-left over the photo, 52 px margins: a small solid red tag (#D0021B) with "SINGAPORE HOMEBUYER" in white bold all-caps sans-serif, wide letter-spacing, about 18 px. Top-right of the photo: small italic white text on a subtle dark strip, about 14 px: "IMAGE SAMPLE ONLY – not the actual development". SKYLINE STRIP, overlapping the bottom edge of the photo, from about 52% to 64% of the height, full width: a flat fog-grey (#D9DCD6) band; on its left half, a row of five short, plain flat block silhouettes in deep pine (#24453A) of slightly varied heights, with a small pine bracket over them and the bold pine all-caps label, about 18 px: "4–6 STOREYS"; on its right, one tall slim tower drawn only as a dashed mid-grey (#8C918C) outline, rising well above the band into the photo, with the grey all-caps label beside it, about 16 px: "TYPICAL CONDO TOWER". Silhouettes are flat shapes with no windows, balconies or details. Under the strip, a row of two small white chips with pine outlines, each with a tiny pine location-pin icon and pine all-caps text, about 15 px: "RAIL CORRIDOR"; "BUKIT TIMAH NATURE RESERVE". BOTTOM, on white (#FFFFFF), 52 px margins: the headline in a large tight neo-grotesk (Neue Haas / Helvetica Now Display Bold style), deep pine, about 60 px, on two lines: "A Low-Rise Home Beside" / "the Rail Corridor"; the subhead in regular pine-grey sans, about 23 px, on two lines: "New Holland condo near Bukit Timah Nature Reserve, among landed homes."; tiny grey fine print, about 15 px: "Distances approx., straight-line. Illustrative diagram, not to scale. 99-year leasehold."; a clear empty strip about 50 px tall (reserved for licence details, leave it blank); then a full-width deep-pine (#24453A) square-cornered bar, about 78 px tall, with "GET PRICE LIST & E-BROCHURE" in bold white all-caps sans-serif, about 21 px. If small text is unreadable, leave the fine-print area blank. Render every quoted string exactly once, spelled exactly as quoted, and add no other text. Look: calm, unhurried, green; the low-versus-tall silhouette makes the point at a glance. Avoid: any realistic building, condo tower, facade or render (the silhouettes stay flat and plain); truss bridges, railway stations, rail tracks or sleepers; summit markers, signs or landmarks; people; project or developer names or logos; any price, dollar sign, psf, unit count, "boutique" or "% sold"; "freehold", "preview", "VVIP"; walk minutes or metre figures; any MRT station name; the Cross Island Line or any year; district codes or street names; schools; MRT or LTA logos, station codes or rail line colours; misspelled, warped, duplicated or extra text; watermarks, QR codes, phone numbers.
```

**Photo plate:** `Landscape image, 1080x810 px, with no text: a photoreal generic tree-lined green trail at golden hour, broad grassy path flanked by tall rain trees and dense tropical greenery, warm low sunlight through the leaves, no people. Keep the top-left calm for a tag and the bottom 15% plain grass for an overlapping strip. Avoid: text, logos, buildings, bridges, rail tracks, sleepers, signs, people.` Draw the silhouettes, strip and chips in Canva.

**9:16:** `Now recompose this exact ad as a 9:16 portrait, 1080x1920 px, with identical text, colours and fonts: the trail photo fills from the top to about 52% (red tag and label below the top 14%); the skyline strip overlaps its bottom edge at about 46–56%; the two place chips sit side by side below it; then headline (about 68 px), subhead, fine print, a blank 50 px strip and the pine bar, ending above 80%; plain white below with no text. If small text is unreadable, leave the fine-print area blank.`

**B-swap:** headline `Low-Rise Blocks of 4 to 6 Storeys`. Strip, chips and subhead unchanged.

---

## A5. Wellness facilities (replaces Price): weekend planner card

- **Headline (A):** `50m Lap Pool, Thermal Bath, Kids' Discovery Pool`
- **Subhead:** `New low-rise Holland condo, beside the Rail Corridor.`
- **Planner rows:** `SAT AM` / `Laps in the 50m Hilltop pool` · `SAT PM` / `Kids in the Discovery Pool` · `SUN` / `Thermal bath, then the Rail Corridor`
- **Fine print:** `Facilities per published review. 99-year leasehold.` + label
- **Label:** `IMAGE SAMPLE ONLY – not the actual development`
- **CTA:** `GET PRICE LIST & E-BROCHURE`
- **Visual:** a generic garden lap pool. **No tower, block or balcony behind it**, no hill-top city view, no slides.

**Prompt (4:5, paste as one block)**

```text
Create a portrait 4:5 social media ad, exactly 1080x1350 px, for a Singapore condominium, styled as a family weekend planner. TOP 48% of the frame: a photoreal photograph of a long generic outdoor lap pool surrounded by lush tropical garden planting and tall trees, soft bright morning light, calm clear water, a pale stone edge, a couple of white loungers; no buildings of any kind, no people. A soft darkening gradient in the top 25%. Top-left over the photo, 52 px margins: a small solid red tag (#D0021B) with "SINGAPORE HOMEBUYER" in white bold all-caps sans-serif, wide letter-spacing, about 18 px; below it the headline in a rounded friendly sans-serif (Quicksand Bold style), white with a soft shadow, about 52 px, on three lines: "50m Lap Pool," / "Thermal Bath," / "Kids' Discovery Pool". Bottom-right of the photo: small italic white text on a subtle dark strip, about 14 px: "IMAGE SAMPLE ONLY – not the actual development". PLANNER CARD, overlapping the bottom of the photo, from about 42% to 76% of the height, about 88% of the width, centred: a butter-yellow (#FFF4D6) paper card with 16 px corners, a soft shadow and a row of small binder holes along its top edge. On the card, three rows separated by thin dashed ink lines; each row has a lavender (#B8A9D9) rounded tab on the left holding a bold ink (#3A3355) all-caps day label, about 20 px, and to its right a regular ink line, about 26 px: row 1 "SAT AM" / "Laps in the 50m Hilltop pool"; row 2 "SAT PM" / "Kids in the Discovery Pool"; row 3 "SUN" / "Thermal bath, then the Rail Corridor". BELOW THE CARD, on a flat white background, 52 px margins: the subhead in regular ink sans, about 23 px, on two lines: "New low-rise Holland condo, beside the Rail Corridor."; tiny grey fine print, about 15 px: "Facilities per published review. 99-year leasehold."; a clear empty strip about 50 px tall (reserved for licence details, leave it blank); then a lavender (#B8A9D9) button shaped like a wide planner tab, rounded top corners and square bottom corners, about 84% of the width, centred, about 76 px tall, with "GET PRICE LIST & E-BROCHURE" in bold ink all-caps rounded sans-serif, about 20 px. If small text is unreadable, leave the fine-print area blank. Render every quoted string exactly once, spelled exactly as quoted, and add no other text. Look: light, playful, family weekend, easy to read. Avoid: any condo tower, apartment block, balcony or building around the pool; city views; water slides or water-park features; people or faces; red-light or medical equipment imagery; resort, project or developer names or logos; any price, dollar sign, psf, unit count or "% sold"; "freehold", "preview", "VVIP", "first in Singapore"; walk minutes or metre figures; district codes or street names; MRT or LTA logos or rail line colours; misspelled, warped, duplicated or extra text; watermarks, QR codes, phone numbers.
```

**Photo plate:** `Landscape image, 1080x650 px, with no text: a photoreal long generic outdoor lap pool surrounded by lush tropical garden planting and tall trees, soft bright morning light, calm clear water, a pale stone edge, two white loungers; no buildings, no people. Keep the top-left 50% calm for a three-line headline and the bottom 20% calm for an overlapping card. Avoid: text, logos, buildings, balconies, city views, slides, people.`

**9:16:** `Now recompose this exact ad as a 9:16 portrait, 1080x1920 px, with identical text, colours and fonts: the pool photo fills the top 44% (red tag and headline below the top 14%); the planner card overlaps it from about 40% to 66% with larger rows; then subhead, fine print, a blank 50 px strip and the lavender tab button, ending above 80%; plain white below with no text. If small text is unreadable, leave the fine-print area blank.`

**B-swap:** headline `A Thermal Bath Downstairs, in Holland`; the SUN row becomes `SUN` / `Red light therapy room, then the Rail Corridor`. Never add "first in Singapore".

---

## Before you generate (Amberwood at Holland)

- [ ] **MRT wording (copy Flag 3): resolved** by performance AW2/AW3 (2026-11-07). No image names King Albert Park MRT. Proof that the copywriter's `copy-brief.md` subheads match these prompts.
- [ ] **Stock within 48h:** the 872 sqft 3BR (5 of 8 left on 07-Nov). If it sells out, every "872" becomes "893" (A1, A3 B-swap, A1 B-swap tile).
- [ ] **Methodist Girls' School** stays "nearby" only (~770–780m); the MOE line is on A2.
- [ ] **CEA authorisation (S3):** if GoAhead isn't authorised to market Amberwood at Holland, A1 is Blocked.
- [ ] **Rights (S7):** official render (A1 swap-in) and official plans (A3). Confirm GoAhead may send the developer's e-brochure.
- [ ] **Budget expectation:** copy Flag 2 expects a high CPL (Amber House-like, ~S$68). Performance sets the stop-loss before any test.
- [ ] **Performance review** of research + copy + these prompts (no `perf-review.md` yet).
- [ ] Any paid generation: state the cost above and get the user's go-ahead in chat.

## Flags (designer)

1. **A1 lockup** reads as Headline A: name layer + oak tail. No words added.
2. **A2 MOE line** rendered once (fine print, first line) instead of twice.
3. **A3 fallback plan title** `3-BEDROOM LAYOUT · ILLUSTRATIVE, NOT TO SCALE`: the copy's titles belong to official plans.
4. **A3 has no building image** (no cleared render, no AI tower). Same deviation as Coastal Cabana R2-B; needs the user's OK for this project.
5. **A4 place labels moved off the photo** into a chip row (two chips after AW3), so a generic trail isn't captioned as the real Rail Corridor or nature reserve.
6. **A4 silhouettes:** five flat block shapes are a generic diagram, not a depiction of the actual blocks (and not a block count). Covered by `Illustrative diagram, not to scale.`
7. **Image-model risks:** a truss bridge, rail tracks or old station on A1/A4 (reads as the real Rail Corridor), a tower behind the A5 pool, garbled handwriting on A2 (write it in Canva), a lift or 4th bedroom in A3's plan.
