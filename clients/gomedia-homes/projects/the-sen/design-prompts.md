# The Sen: Image Prompts (GoAhead, 5 ads, 5 different layouts)

> **Revision 1 (2026-11-07), performance ruling applied:** `design-prompts.md` was Approved. Ruling 1: S1 keeps `2-BEDROOM HOMES FROM` with Headline A (the panel reads as Headline A and matches the Meta headline); `2-BEDROOM FROM` is used only with Headline B. SEN1 is a primary-text fix in `copy-brief.md` (no on-image string changed). Optional, not applied: S2 note `Nature park next door` → `Nature park across the road`, only if the copywriter adopts it.

Revision 1, written 2026-11-07 by static-designer. **Prompts only.** Nothing has been generated, no paid API has been called, nothing was downloaded or uploaded.

- **Copy source:** `copy-brief.md` Revision 1 (S1–S5). Headline A, subhead, on-image strings, CTA, fine print and labels are used word for word. Headline B is a swap line under each ad. Strings I had to add or re-split are listed in Flags.
- **Facts source:** `research.md` CONFIRMED rows only.
- **Format model:** `coastal-cabana/design-prompts.md` Revision 2, plus a photo-plate prompt per ad for the Canva route.
- **Process:** shortened project flow. No `perf-review.md` exists for this project yet. Performance reviews research + copy + these prompts together. Nothing here is the user's approval.
- `inputs/product-images/` is empty. No official render or plan is cleared (copy Flag 9), so every ad has a generic, labelled fallback. Finished images go in `the-sen/images/`.

**Rules baked into every prompt:**
- **Price is shown (entry $1.546M is under the ~$1.6M line) on S1, S5, and nowhere else.** Always the exact `$1.546M*`, always with its unit (`678 SQFT` / `678 sqft`) right next to it, always with the price fine print: `*Based on developer price list as at [DATE]. 2-bedroom, 678 sqft, selected unit. Subject to availability and change. Excludes stamp duties.` `[DATE]` is printed literally and filled in on build day. No "cheapest", "lowest", "deal", "below market" or discount wording.
- **S3 fallback drops the price tag:** the copy allows the tag only when the plan shown is the official 678 sqft 2BR. The fallback plan is illustrative, so no tag.
- Only S1 shows "The Sen". S2–S5 carry no name, developer or address. Sustained Land stays in S1's primary text only.
- **No MRT walk.** Hume MRT and Beauty World MRT appear only as "buses outside to…". No shuttle bus, no bus with a real operator livery, no bus-stop sign.
- No TOP date, "award-winning", 1-bedroom, unit counts, % sold, "D21", street names (Jalan Jurong Kechil, Old Jurong Road), land price, sales rankings, "within 1km" of a school, P1 implication.
- **No identifiable landmarks:** no Bukit Batok quarry lake / granite cliff ("Little Guilin"), no park signage, no Beauty World Centre facade. Greenery is generic secondary rainforest.
- No AI condo tower captioned or implied as this project. No real MRT line colours or logos.
- People never identifiable (from behind, soft focus).
- **Brand constants:** red `SINGAPORE HOMEBUYER` eyebrow (#D0021B) and the CTA `GET PRICE LIST & E-BROCHURE` (Meta button: **Download**).
- **Image labels:** generic images get `IMAGE SAMPLE ONLY – not the actual development`; S5's interior gets `IMAGE SAMPLE ONLY – not the actual unit` (per copy). `IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY` only on an official render or plan. Fallback plan: `ILLUSTRATIVE LAYOUT ONLY, not to scale`.
- A clear ~60 px strip above every CTA for the CEA particulars. Final fine print 18 px or more on 4:5. 9:16 safe zones: no text in the top 14% or bottom 20%.

## Generator, route and cost

- **Recommended route: photo plate + live text.** Generate the image only, set every string (especially `$1.546M*`) in Canva or Figma, and proof against `copy-brief.md`. Use the full prompt for mock-ups and free drafts only.
- **Generators:** ChatGPT image for the full-prompt mock-ups (best on-image text); Gemini image for photo plates. Consumer apps: S$0 (plan limits).
- **Paid API, only after the user's go-ahead:** Gemini 2.5 Flash Image about US$0.04/image (~S$0.05); OpenAI gpt-image-1 about US$0.04 medium, about US$0.17–0.25 high portrait (~S$0.22–0.33). Approximate, 2026-11; check before any spend.
- **This project's scope:** photo plates for S1 (forest edge), S2 (three small pinned photos), S4 (forest path, full bleed, regenerate for 9:16) and S5 (living room). S3 is a Canva build. About 6 plates x 2 ratios x up to 3 attempts = up to 36 images: **about S$2 on Gemini API, up to about S$12 on gpt-image-1 high.**

---

## Design at a glance

| Ad | Angle | Layout | Palette | Type | Visual | CTA shape | Label |
|---|---|---|---|---|---|---|---|
| **S1** | Direct (named, price-led) | **Split name card:** photo left 55%, moss panel right 45% with the price as the biggest type | Deep moss #2E4A33, apricot #F4A259 (price), oat #F3EFE2 | Rounded geometric sans (Manrope / Gilroy ExtraBold style) | Generic rainforest edge in morning mist, no buildings | Oat capsule with a small leaf glyph | IMAGE SAMPLE ONLY – not the actual development |
| **S2** | Blind, family question | **Corkboard collage:** 3 pinned photos, 3 notes, question across the top | Cork #B98B5E, note cream #FFFDF5 and peach #FCE8C8, pins teal #2A9D8F and mustard #E9C46A, text #2B2118 | Chunky rounded display (Fredoka Bold style) + handwriting (Kalam style) | 3 small photos: roomy living room, park path, family from behind | Teal push-pin button with a pin glyph | IMAGE SAMPLE ONLY – not the actual development |
| **S3** | Floor layout + ceilings | **Chalkboard blueprint with an elevation:** plan on a dark drafting board, slim side elevation showing 3.9m vs 2.85m | Graphite board #26292E, chalk white #F2F2EE, marigold #F7B32B | Narrow grotesk (Archivo Narrow Bold style) + IBM Plex Mono | No photo. Generic 2BR plan, no text inside | Marigold square bar with graphite text | ILLUSTRATIVE LAYOUT ONLY, not to scale |
| **S4** | Nature + bus (replaces MRT) | **Full-bleed nature photo, minimal type:** headline in the canopy gap, solid forest band with 3 chips at the base | Photo-led greens and gold light; band #193326; chip outlines sage #A9C5A0 | Light display serif (Cormorant Garamond style) + thin sans | Early-morning forest path, sun rays, no people or signs | Sage outline pill on the dark band | IMAGE SAMPLE ONLY – not the actual development |
| **S5** | Price (blind) | **Listing card:** white card on a soft sage field, one interior photo, 6 spec rows | Sage field #DDE8D5, white card, charcoal #222826, leaf green #3C7A3F | Neutral UI sans (Inter style), tabular figures | Generic bright 2-bedroom living room | Full-width leaf-green bar, 10 px corners | IMAGE SAMPLE ONLY – not the actual unit |

How they differ: split photo card vs corkboard vs dark chalk drawing vs full-bleed photo vs white UI card; moss/apricot vs cork/teal vs graphite/marigold vs forest photo vs sage/leaf; rounded geometric vs rounded display + handwriting vs narrow grotesk + mono vs display serif vs UI sans. No earlier project's hex values are reused; only #D0021B repeats.

---

## S1. Direct (named, price-led): split name card

- **Headline (A):** `The Sen: 2-Bedroom Homes From $1.546M*`, set as the name lockup + price block:
  - `THE SEN:` (name layer) · `2-BEDROOM HOMES FROM` · **`$1.546M*`** (largest type) · `678 SQFT`
  - `2-BEDROOM HOMES FROM` with Headline A, so the panel reads as Headline A word for word (performance ruling 1, 2026-11-07). `2-BEDROOM FROM` only with Headline B.
- **Subhead:** `2 to 4 bedrooms, 678 to 1,453 sqft, next to Bukit Batok Nature Park.`
- **3 tiles:** `NEXT TO` / `BUKIT BATOK NATURE PARK` · `50M LAP POOL` / `WELLNESS DECK` · `UPPER BUKIT TIMAH` / `99-YEAR LEASEHOLD`
- **CTA:** `GET PRICE LIST & E-BROCHURE`
- **Fine print:** `*Based on developer price list as at [DATE]. 2-bedroom, 678 sqft, selected unit. Subject to availability and change. Excludes stamp duties. 99-year leasehold.`
- **Label:** `IMAGE SAMPLE ONLY – not the actual development` (swap-in official render: `IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY`)

**Prompt (4:5, paste as one block)**

```text
Create a portrait 4:5 social media ad, exactly 1080x1350 px, for a Singapore condominium, designed as a split-screen name card. LEFT 55% of the frame, full height down to the bottom band: a photoreal photograph of a generic tropical rainforest edge in soft early-morning mist, tall slender trees with buttress roots, layered ferns and understorey, sun rays filtering through the canopy, fresh greens and soft gold light. No buildings, no signs, no lake, no cliffs or rock faces, no people. Near the bottom-left of the photo, small italic white text on a subtle dark translucent strip, about 14 px: "IMAGE SAMPLE ONLY – not the actual development". RIGHT 45%: a solid deep moss panel (#2E4A33) with 36 px inner padding and a crisp vertical edge. Inside the panel, top to bottom, left-aligned: (1) a small solid red tag (#D0021B) with "SINGAPORE HOMEBUYER" in white bold all-caps sans-serif, wide letter-spacing, about 18 px. (2) The name in a rounded geometric sans-serif (Manrope ExtraBold / Gilroy style), oat (#F3EFE2), about 78 px: "THE SEN:". (3) The price block: a small oat all-caps line, about 20 px: "2-BEDROOM HOMES FROM"; under it the price, the largest text in the ad, heavy rounded geometric sans, apricot (#F4A259), about 112 px: "$1.546M*"; under it a small oat all-caps line, about 20 px: "678 SQFT". (4) The subhead in regular oat sans-serif, about 21 px, on three lines: "2 to 4 bedrooms, 678 to 1,453 sqft, next to Bukit Batok Nature Park." (5) Three stacked full-width tiles, each about 414 x 80 px with 10 px gaps, a slightly lighter moss fill with 10 px rounded corners; each tile has a bold oat all-caps line, about 22 px, with a small apricot all-caps caption under it, about 14 px: tile 1 "NEXT TO" / "BUKIT BATOK NATURE PARK"; tile 2 "50M LAP POOL" / "WELLNESS DECK"; tile 3 "UPPER BUKIT TIMAH" / "99-YEAR LEASEHOLD". (6) A clear empty strip about 60 px tall (reserved for licence details, leave it blank). (7) An oat (#F3EFE2) capsule button the full panel width, about 76 px tall, fully rounded, with a small moss leaf glyph at the left and "GET PRICE LIST & E-BROCHURE" in bold moss all-caps sans-serif, about 19 px. BOTTOM BAND, full width across both halves, the bottom 10% of the frame: a flat oat (#F3EFE2) band with tiny moss fine print, about 15 px, left-aligned with 40 px margins, on two lines: "*Based on developer price list as at [DATE]. 2-bedroom, 678 sqft, selected unit." / "Subject to availability and change. Excludes stamp duties. 99-year leasehold." Print "[DATE]" literally, with the square brackets. If small text is unreadable, leave the fine-print area blank. Render every quoted string exactly once, spelled exactly as quoted, and add no other text. Look: fresh, calm, confident; the price reads first, then the name, then the park. Avoid: any condo tower, apartment block, facade, skyline or architectural render; quarry lakes, granite cliffs or rock faces; park signs, boardwalk signs or landmarks; people; developer names or logos; any other price, psf, discount, "cheapest", "lowest" or "deal" wording; unit counts or "% sold"; "freehold", "preview", "VVIP", "award"; walk minutes or metre figures; district codes or street names; MRT or LTA logos, station codes or real rail line colours; misspelled, warped, duplicated or extra text; watermarks, QR codes, phone numbers.
```

**Photo plate:** generate the left photo only, 594x1350 portrait: `Portrait image, 594x1350 px, with no text: a photoreal generic tropical rainforest edge in soft early-morning mist, tall slender trees with buttress roots, layered ferns, sun rays through the canopy, fresh greens and soft gold light; keep the bottom-left calm for a small label. Avoid: any text, logos, watermarks, buildings, signs, lakes, cliffs, rock faces or people.` Build the panel, price block, tiles, capsule and band in Canva.

**9:16:** `Now recompose this exact ad as a 9:16 portrait, 1080x1920 px, with identical text, colours and fonts: the forest photo fills the top 38% at full width (label at its bottom-left); the moss panel fills everything below; red tag, name (about 90 px) and price (about 150 px) start just below the photo; put the three tiles side by side in one row (about 320 x 120 px each); then subhead, a blank 60 px strip, the capsule and the two fine-print lines (now oat on moss), all ending above 80% of the height; keep the bottom 20% plain moss with no text. If small text is unreadable, leave the fine-print area blank.`

**B-swap:** Headline B `The Sen, Upper Bukit Timah: 2-Bedroom From $1.546M*`: name layer `THE SEN,` with a small line `UPPER BUKIT TIMAH:` under it, price line `2-BEDROOM FROM`. Swap tile 3 for `2 TO 4 BEDROOMS` / `678–1,453 SQFT`, and use the B subhead `Next to Bukit Batok Nature Park, with buses outside to Hume MRT.`

---

## S2. Blind, family (emotional): corkboard collage

- **Headline (A):** `Need More Room for Your Growing Family?`
- **Subhead:** `Upper Bukit Timah condo with 3 & 4-bedroom homes, near Bukit Timah Primary School.`
- **3 handwritten notes:** `Up to 1,453 sqft` · `Nature park across the road` · `Bukit Timah Primary nearby`
- **MOE line:** the copy lists it as a tiny line and again in the fine print. It is rendered **once**, as the first sentence of the fine print, directly under the school note (Flag 2).
- **Fine print:** `School admission subject to MOE regulations and balloting. 99-year leasehold. Distances approx., straight-line.`
- **Label:** `IMAGE SAMPLE ONLY – not the actual development`
- **CTA:** `GET PRICE LIST & E-BROCHURE`
- **Photos (3, generic):** a roomy bright living room with no people; a shaded park footpath; a family of 4 seen from behind walking on a path. No faces, no school building, uniform, crest or badge.

**Prompt (4:5, paste as one block)**

```text
Create a portrait 4:5 social media ad, exactly 1080x1350 px, for a Singapore condominium, styled as a family's cork pinboard. Background: a natural cork board (#B98B5E) texture filling the frame, soft overhead light, a thin light-wood frame edge visible at the very top and bottom. TOP 24%, 56 px margins: a small solid red tag (#D0021B) with "SINGAPORE HOMEBUYER" in white bold all-caps sans-serif, wide letter-spacing, about 18 px, pinned like a label; below it, on a long torn strip of cream paper (#FFFDF5) pinned at both ends, the headline in a chunky rounded display sans (Fredoka Bold style), dark brown (#2B2118), about 66 px, on two lines: "Need More Room for" / "Your Growing Family?". MIDDLE, from about 26% to 66% of the height: three printed photographs with thin white borders, each slightly tilted and held by a round push pin, pins in teal (#2A9D8F) and mustard (#E9C46A): photo 1, upper-left, about 430 x 320 px: a roomy bright living and dining room, pale wood floor, a long sofa, daylight, no people; photo 2, right, about 360 x 460 px, portrait: a shaded green park footpath under tall tropical trees in morning light; photo 3, lower-left, about 400 x 300 px: a family of four seen from behind, small in the frame, walking hand in hand along a leafy path, soft focus, no faces visible. Three handwritten paper notes pinned between the photos, each about 230 x 120 px, slightly tilted, with dark brown handwriting (Kalam style), about 30 px: a peach note (#FCE8C8) "Up to 1,453 sqft"; a cream note (#FFFDF5) "Nature park across the road"; a peach note "Bukit Timah Primary nearby". Small italic dark-brown text under photo 3, about 14 px: "IMAGE SAMPLE ONLY – not the actual development". BOTTOM 32%: a pinned cream card (#FFFDF5), full width between 40 px margins, slightly lifted with a soft shadow, holding: the subhead in regular dark-brown sans-serif, about 25 px, on two lines: "Upper Bukit Timah condo with 3 & 4-bedroom homes, near Bukit Timah Primary School."; tiny brown-grey fine print, about 15 px, on two lines: "School admission subject to MOE regulations and balloting." / "99-year leasehold. Distances approx., straight-line."; a clear empty strip about 60 px tall (reserved for licence details, leave it blank); then a teal (#2A9D8F) rounded button, about 80% of the card width, centred, about 78 px tall, with a small white push-pin glyph at the left and "GET PRICE LIST & E-BROCHURE" in bold white all-caps rounded sans-serif, about 20 px. If small text is unreadable, leave the fine-print area blank. Render every quoted string exactly once, spelled exactly as quoted, and add no other text. Look: warm, homely, parent-to-parent, a family planning its next move. Avoid: faces or people facing the camera; school buildings, gates, uniforms, crests, badges or school bags with logos; condo towers, apartment blocks or anything that could be the actual development; brand logos; project or developer names; any price, dollar sign, psf, unit count or "% sold"; "freehold", "preview", "VVIP"; walk minutes, metre figures or "within 1km"; district codes or street names; MRT or LTA logos or rail line colours; misspelled, warped, duplicated or extra text; watermarks, QR codes, phone numbers.
```

**Photo plates:** generate the three photos separately (no text, no faces, no buildings outside windows), then pin them on a Canva cork background with Canva notes and handwriting. This avoids garbled handwriting.

**9:16:** `Now recompose this exact ad as a 9:16 portrait, 1080x1920 px, with identical text, colours and fonts: the headline strip starts below the top 14% (about 76 px); the three photos stack in a loose column with larger sizes, with the three notes pinned between them, from about 26% to 62% of the height; the cream card with subhead, fine print, a blank 60 px strip and the teal button ends above 80%; plain cork below with no text. If small text is unreadable, leave the fine-print area blank.`

**B-swap:** headline `3 & 4-Bedroom Family Homes, Upper Bukit Timah`; subhead `Up to 1,453 sqft, near Bukit Timah Primary School & Bukit Batok Nature Park.` Notes and MOE line unchanged.

---

## S3. Floor layout: chalkboard blueprint with a ceiling elevation

> **Fallback build (no official plan cleared).** The copy's plan title `2-BEDROOM · 678 SQFT` and the price tag `2-BEDROOM FROM $1.546M*` are for the **official 678 sqft 2BR plan only**. The fallback uses a generic plan, so the title becomes `2-BEDROOM LAYOUT · ILLUSTRATIVE, NOT TO SCALE` (Coastal Cabana R2-B precedent) and there's no price tag (Flag 3). The official-plan headline `See How a 2-Bedroom Fits in 678 sqft` is not prompted.

- **Headline (A):** `2 to 4-Bedroom Layouts, 678 to 1,453 sqft`
- **Subhead:** `Most homes have windowed bathrooms. 3.9m ceilings on the 1st & 10th floors.`
- **Plan title (fallback):** `2-BEDROOM LAYOUT · ILLUSTRATIVE, NOT TO SCALE`
- **Elevation callouts:** `3.9M CEILINGS · 1ST & 10TH FLOORS` vs `2.85M · OTHER FLOORS`
- **Fine print:** `Sizes and ceiling heights per published review. 99-year leasehold.` + `ILLUSTRATIVE LAYOUT ONLY, not to scale`
- **CTA:** `GET PRICE LIST & E-BROCHURE`
- **Plan:** generic 2-bedroom, top-down, chalk linework, **no text, numbers or dimensions inside**. Both bathrooms drawn with a window on an outer wall (matches "windowed bathrooms"). No building image (no cleared render, no AI tower; Flag 4).

**Prompt (4:5, paste as one block)**

```text
Create a portrait 4:5 social media ad, exactly 1080x1350 px, for a Singapore condominium, styled as an architect's drawing chalked on a dark drafting board. No photographs. Background: matte graphite (#26292E) board with a very faint chalk-dust texture and a fine square grid in chalk white at about 8% opacity. TOP, 48 px margins: a small solid red tag (#D0021B) with "SINGAPORE HOMEBUYER" in white bold all-caps sans-serif, wide letter-spacing, about 18 px; below it the headline in a narrow bold grotesk (Archivo Narrow Bold style), chalk white (#F2F2EE), about 64 px, on two lines: "2 to 4-Bedroom Layouts," / "678 to 1,453 sqft". At about 21% of the height: a small marigold (#F7B32B) rectangular chip with graphite monospaced all-caps text (IBM Plex Mono style), about 16 px: "2-BEDROOM LAYOUT · ILLUSTRATIVE, NOT TO SCALE". PLAN, left 66% of the width, from about 25% to 66% of the height: one clean top-down generic two-bedroom apartment floor plan in crisp chalk-white linework only: thick outer walls, thin inner walls, quarter-circle door swings, windows as thin triple lines, two bedrooms with simple bed rectangles, an open living and dining area, a compact kitchen along one wall, two bathrooms each with a window on an outer wall; no text, room names, numbers or dimensions anywhere inside the plan. ELEVATION, right 30% of the width, same height band: a slim side-section diagram in chalk lines showing two stacked floor slabs: a taller storey marked with a marigold vertical dimension arrow and the marigold monospaced label, about 16 px, on two lines "3.9M CEILINGS" / "1ST & 10TH FLOORS"; beside it a shorter storey marked with a thin chalk arrow and the chalk label "2.85M" / "OTHER FLOORS"; a tiny simple standing figure silhouette for scale, no face. BOTTOM, 48 px margins: the subhead in regular chalk-white narrow grotesk, about 26 px, on two lines: "Most homes have windowed bathrooms. 3.9m ceilings on the 1st & 10th floors."; tiny chalk-grey fine print, about 15 px, on two lines: "Sizes and ceiling heights per published review. 99-year leasehold." / "ILLUSTRATIVE LAYOUT ONLY, not to scale"; a clear empty strip about 60 px tall (reserved for licence details, leave it blank); then a full-width marigold (#F7B32B) square-cornered bar, about 82 px tall, with "GET PRICE LIST & E-BROCHURE" in bold graphite all-caps narrow grotesk, about 22 px. If small text is unreadable, leave the fine-print area blank. Render every quoted string exactly once, spelled exactly as quoted, and add no other text. Look: practical, precise, a little dramatic; the tall-ceiling diagram is the second thing the eye hits. Avoid: text, room names, numbers or dimension lines inside the plan; a third bedroom; balconies, pools or site plans; any price, dollar sign or psf; any photograph, building, tower or render; project or developer names or logos; unit counts or "% sold"; "freehold", "preview", "VVIP"; walk minutes or metre figures; district codes or street names; MRT or LTA logos or rail line colours; misspelled, warped, duplicated or extra text; watermarks, QR codes, phone numbers.
```

**Plate:** none needed; build in Canva (graphite background, line-drawn plan, section diagram). If the official 678 sqft plan is cleared later: composite it, restore the copy's title `2-BEDROOM · 678 SQFT`, add the tag `2-BEDROOM FROM $1.546M*`, add the price fine print, switch the label to `IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY`, and add a small official-render inset top-right.

**9:16 (build first, per copy):** `Now recompose this exact ad as a 9:16 portrait, 1080x1920 px, with identical text, colours and fonts: headline (about 72 px) starts below the top 14%; the plan fills the full width from about 24% to 52% of the height; the elevation diagram sits below it, full width, from 53% to 64%; then subhead, fine print, a blank 60 px strip and the marigold bar, ending above 80%; plain graphite below with no text. If small text is unreadable, leave the fine-print area blank.`

**B-swap:** headline `2-Bedroom Layouts From 678 sqft, Upper Bukit Timah`. Everything else unchanged.

---

## S4. Nature + bus to the Downtown Line: full-bleed nature photo

- **Headline (A):** `Wake Up Next to Bukit Batok Nature Park`
- **Subhead:** `Upper Bukit Timah condo, with buses outside to Hume MRT & Beauty World MRT.`
- **3 chips:** `BUS STOP OUTSIDE` / `TO HUME MRT & BEAUTY WORLD MRT` · `BEAUTY WORLD` / `A SHORT DRIVE` · `2 TO 4 BEDROOMS` / `678–1,453 SQFT`
- **Fine print:** `Views from selected units only. 99-year leasehold.` + label `IMAGE SAMPLE ONLY – not the actual development`
- The copy's optional tiny line `Park views from selected units only.` is not added: the photo is a forest path, not a view from a unit, and the fine print already covers views.
- **CTA:** `GET PRICE LIST & E-BROCHURE`

**Prompt (4:5, paste as one block)**

```text
Create a portrait 4:5 social media ad, exactly 1080x1350 px, for a Singapore condominium. FULL-BLEED photoreal photograph filling the frame: an early-morning tropical forest path, a narrow earth-and-gravel trail curving gently into the distance between tall slender trees and layered ferns, a clear gap in the canopy in the upper third with soft gold sun rays and light mist, dewy greens, calm and quiet; no people, no signs, no railings with signage, no lake, no cliffs or rock faces, no buildings. Top-left, 60 px margins: a small solid red tag (#D0021B) with "SINGAPORE HOMEBUYER" in white bold all-caps sans-serif, wide letter-spacing, about 18 px. In the canopy gap, from about 8% to 30% of the height: the headline in a light high-contrast display serif (Cormorant Garamond Medium style), white with a very soft shadow, about 82 px, left-aligned on three lines: "Wake Up Next to" / "Bukit Batok" / "Nature Park". Directly below, the subhead in a thin white sans-serif (Jost Light style), about 24 px, on two lines: "Upper Bukit Timah condo, with buses outside to Hume MRT & Beauty World MRT." Top-right, small italic white text, about 14 px: "IMAGE SAMPLE ONLY – not the actual development". BOTTOM 30%: a solid deep forest-green band (#193326), full width, with a soft feathered top edge into the photo. Inside the band, 48 px margins: a row of three equal chips, each with a 1.5 px sage (#A9C5A0) outline and 12 px corners, no fill, each with a bold white all-caps line, about 18 px, and a sage all-caps caption under it, about 13 px: chip 1 "BUS STOP OUTSIDE" / "TO HUME MRT & BEAUTY WORLD MRT"; chip 2 "BEAUTY WORLD" / "A SHORT DRIVE"; chip 3 "2 TO 4 BEDROOMS" / "678–1,453 SQFT". Then tiny sage fine print, about 15 px: "Views from selected units only. 99-year leasehold."; a clear empty strip about 60 px tall (reserved for licence details, leave it blank); then a sage-outline (#A9C5A0) pill button, full width between margins, about 78 px tall, transparent fill, with "GET PRICE LIST & E-BROCHURE" in bold white all-caps sans-serif, about 20 px. If small text is unreadable, leave the fine-print area blank. Render every quoted string exactly once, spelled exactly as quoted, and add no other text. Look: calm, sensory, unhurried morning; a big quiet photo with very little type. Avoid: people or faces; buses, bus stops, bus livery or road signs; park signs, boardwalk signs, quarry lakes, granite cliffs or any recognisable landmark; buildings, towers or rooftops through the trees; project or developer names or logos; any price, dollar sign, psf, unit count or "% sold"; "freehold", "preview", "VVIP"; walk minutes or metre figures; district codes or street names; MRT or LTA logos, station codes or rail line colours; misspelled, warped, duplicated or extra text; watermarks, QR codes, phone numbers.
```

**Photo plate (image-only):** `Portrait 4:5 image, 1080x1350 px, with no text: a photoreal early-morning tropical forest path curving into the distance between tall slender trees and layered ferns, a clear canopy gap in the upper third with soft gold sun rays and light mist, dewy greens. Keep the top 35% open canopy-and-light for a headline and the bottom 30% darker undergrowth for a band. Avoid: any text, logos, signs, people, buildings, lakes, cliffs, rock faces.` Regenerate as a 9:16 scene for the vertical, not a crop.

**9:16:** `Now recompose this exact ad as a 9:16 portrait, 1080x1920 px, with identical text, colours and fonts, regenerating the forest path as a tall scene: headline (about 92 px) and subhead in the canopy gap from 14% to 36% of the height; the path in the middle; the forest band from about 56%, with the three chips stacked as three full-width rows, fine print, a blank 60 px strip and the pill, ending above 80%; plain dark band below with no text. If small text is unreadable, leave the fine-print area blank.`

**B-swap:** headline `Bukit Batok Nature Park Is Your Neighbour` (two lines). Everything else unchanged.

---

## S5. Price (blind): listing card

- **Headline (A):** `Upper Bukit Timah 2-Bedroom From $1.546M*`
- **Subhead:** `678 sqft, next to Bukit Batok Nature Park, a short drive to Beauty World.`
- **6 rows:** `TYPE` 2-bedroom · `SIZE` 678 sqft · `FROM` $1.546M* · `NEXT TO` Bukit Batok Nature Park · `TRANSPORT` Bus stop outside to Hume MRT · `TENURE` 99-year leasehold. No "available" badge.
- **Fine print:** `*Based on developer price list as at [DATE]. 2-bedroom, 678 sqft, selected unit. Subject to availability and change. Excludes stamp duties.` + label `IMAGE SAMPLE ONLY – not the actual unit`
- **CTA:** `GET PRICE LIST & E-BROCHURE`
- **Look:** a clean generic listing card. **No real portal's branding, colours, logo, heart/save icons, agent photo or "listed by" line.**

**Prompt (4:5, paste as one block)**

```text
Create a portrait 4:5 social media ad, exactly 1080x1350 px, for a Singapore condominium, designed as a clean, generic property listing card. Background: flat soft sage (#DDE8D5). TOP, 56 px margins: red text "SINGAPORE HOMEBUYER" in bold all-caps sans-serif (#D0021B), wide letter-spacing, about 18 px; below it the headline in a bold neutral UI sans-serif (Inter Bold style), charcoal (#222826), about 58 px, on two lines: "Upper Bukit Timah" / "2-Bedroom From $1.546M*". CARD, centred, about 92% of the width, from about 18% to 78% of the height: a white (#FFFFFF) card with 18 px corners and a soft shadow. Card top 45%: a photoreal photograph of a generic bright, compact two-bedroom condo living and dining room, pale oak floor, a light grey sofa, a small round dining table, sheer curtains on a wide window showing only soft green trees, warm daylight, no people; small italic white text on a subtle dark strip at the photo's bottom-left, about 14 px: "IMAGE SAMPLE ONLY – not the actual unit". Card bottom 55%: six spec rows separated by thin light-grey hairlines, 32 px side padding, each row with a small grey all-caps label on the left, about 15 px, and a charcoal value on the right, about 24 px, tabular figures: "TYPE" / "2-bedroom"; "SIZE" / "678 sqft"; "FROM" / "$1.546M*" (this value in bold leaf green #3C7A3F, about 30 px); "NEXT TO" / "Bukit Batok Nature Park"; "TRANSPORT" / "Bus stop outside to Hume MRT"; "TENURE" / "99-year leasehold". BELOW THE CARD, 56 px margins: the subhead in regular charcoal sans-serif, about 23 px, on two lines: "678 sqft, next to Bukit Batok Nature Park, a short drive to Beauty World."; tiny grey fine print, about 15 px, on two lines: "*Based on developer price list as at [DATE]. 2-bedroom, 678 sqft, selected unit." / "Subject to availability and change. Excludes stamp duties." Print "[DATE]" literally, with the square brackets. A clear empty strip about 50 px tall (reserved for licence details, leave it blank); then a full-width leaf-green (#3C7A3F) button with 10 px corners, about 78 px tall, with "GET PRICE LIST & E-BROCHURE" in bold white all-caps sans-serif, about 21 px. If small text is unreadable, leave the fine-print area blank. Render every quoted string exactly once, spelled exactly as quoted, and add no other text. Look: plain, numbers-first, trustworthy, like a tidy listing. Avoid: any real property-portal logo, brand colours or interface (no heart or save icons, no agent photo, no "listed by", no star ratings); "available", "hot", "sale", "deal", "cheapest" or "lowest" badges; buildings, towers or skyline through the window; people; project or developer names or logos; any other price, psf or discount; unit counts or "% sold"; "freehold", "preview", "VVIP"; walk minutes or metre figures; district codes or street names; MRT or LTA logos or rail line colours; misspelled, warped, duplicated or extra text; watermarks, QR codes, phone numbers.
```

**Photo plate:** `Landscape image, 1000x620 px, with no text: a photoreal generic bright compact two-bedroom condo living and dining room, pale oak floor, light grey sofa, small round dining table, sheer curtains on a wide window showing only soft green trees, warm daylight, no people. Avoid: text, logos, buildings or skyline outside, people.` Build the card and rows in Canva with a real table so the values align.

**9:16:** `Now recompose this exact ad as a 9:16 portrait, 1080x1920 px, with identical text, colours and fonts: headline (about 66 px) starts below the top 14%; the card runs from about 24% to 70% of the height with the photo taller and the six rows at about 28 px; subhead, fine print, a blank 50 px strip and the green button end above 80%; plain sage below with no text. If small text is unreadable, leave the fine-print area blank.`

**B-swap:** headline `A 678 sqft 2-Bedroom From $1.546M*`; subhead `Upper Bukit Timah, next to Bukit Batok Nature Park, buses outside to Hume MRT.` Rows unchanged.

---

## Before you generate (The Sen)

- [ ] **Price, on build day:** confirm on the developer's current price list that a 2-bedroom is available at ≤$1,546,000 and that it is the 678 sqft type (only one current source: newlaunches.sg 06-Nov). If the figure differs, the copywriter replaces every `$1.546M*`. If the entry rises clearly above ~$1.6M, S1 drops the price and S5 is pulled. Fill `[DATE]`.
- [ ] **Cheapest 2BR is a ground-floor unit:** fine print says "selected unit"; no image implies a high floor or a view at that price (S5's window shows trees only).
- [ ] **Stock within 48h:** the 678 sqft 2BR carries the price; the 1,453 sqft 4BR+Study sets the top of every range.
- [ ] **CEA authorisation (S3):** if GoAhead isn't authorised to market The Sen, S1 is Blocked.
- [ ] **Rights (S7):** official render (S1 swap-in) and the official 678 sqft 2BR plan (S3 official version with price tag). Confirm GoAhead may send the developer's e-brochure.
- [ ] **Performance review** (no `perf-review.md` yet) and an account check for any past The Sen spend; the lead re-pulls the Ad Library with wider terms (copy Flag 10).
- [ ] Any paid generation: state the cost above and get the user's go-ahead in chat.

## Flags (designer)

1. **S1 price-block line:** resolved by performance ruling 1 (2026-11-07): `2-BEDROOM HOMES FROM` with Headline A, `2-BEDROOM FROM` with Headline B.
2. **S2 MOE line** rendered once (fine print, first line) instead of twice (tiny line + fine print).
3. **S3 fallback plan title** `2-BEDROOM LAYOUT · ILLUSTRATIVE, NOT TO SCALE` replaces `2-BEDROOM · 678 SQFT`, and the price tag is dropped, because the copy gates both on the official 678 sqft plan.
4. **S3 has no building image** (no cleared render, no AI tower). Same deviation as Coastal Cabana R2-B; needs the user's OK for this project.
5. **Price legibility:** `$1.546M*` must read exactly (models drop the asterisk or swap digits). Reject or retype.
6. **Image-model risks:** a lake, cliff or sign in S1/S4 (reads as the real park), a bus or bus stop in S4, a tower outside the S5 window, a third bedroom or text in the S3 plan, faces in S2.
