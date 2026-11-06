# Creative Spec — GoMedia Homes (GoAhead) New Launch Project Ads, 2026-11

Source: `copy.md` (approved copy, 41 IDs: 8 projects × 5 angles + optional OMG-6). Rulebook: `.claude/skills/gomedia-homes-static-ad-rules/SKILL.md` ("New-launch PROJECT ads — the 5-angle format").

**Status: SPEC / PROMPTS ONLY. No images generated, no paid API called, nothing uploaded.** Paste-ready copies of every prompt: `prompts.txt` in this folder.

## How to use these prompts
- Each prompt below is self-contained. A generator works from that paragraph alone.
- Recommended generator: **gpt-image-2** (the `generating-image-ads` skill routes text-forward layouts with drawn headlines/CTAs to it). Fallback for the photo plate only: nano-banana-pro.
- **Recommended production route (lower text risk):** generate the image zone as a clean photo plate, then set the eyebrow, headline, subhead, CTA and label as live text in Figma/Canva. Subheads run 10–20 words. Image models often misspell or warp text that long, especially figures like "$1.876M" or "538-1,744 sqft". The full-text prompts below still work as one-shot ads. Check every rendered string against copy.md before QA.
- All headline/subhead/CTA strings are copied verbatim from copy.md. Nothing has been added.

## Base style block (shared — repeated inside every prompt)
- **Format:** static, portrait 4:5, 1080×1350 px. One image per ID. No carousel.
- **Background / palette:** pure white background · black primary text · one red accent (approx. #D0021B; exact house red not yet in brand.md, see Flags). No blue variant in this batch.
- **Layout zones (top to bottom, 64 px side margins):**
  1. **Eyebrow** (top-left): "SINGAPORE HOMEBUYER", bold red all-caps sans-serif, wide letter-spacing, ~28 px.
  2. **Headline:** heavy black geometric sans-serif, ~72–80 px, max 3 lines, left-aligned. One key phrase (project name, area, figure) in red.
  3. **Subhead:** regular charcoal sans-serif, ~1/3 of headline size, max 3 lines.
  4. **Image zone:** ~50% of frame height, full width inside margins. Photoreal scene. For floor-layout angles: floor-plan line drawing hero (~60% width) + building image (~40%), both required.
  5. **Label** (bottom-left corner of the image): small italic white ~18 px text on a subtle dark translucent strip.
  6. **CTA banner:** full-width solid red bar ~120 px tall, bold white all-caps CTA centred + small white chevron icon, thin white margin below.
- **Labels:**
  - `*IMAGE SAMPLE ONLY*` for launched projects: One Marina Gardens, Amber House, The Arcady at Boon Keng, Bagnall Haus, The Collective at One Sophia.
  - `*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*` for pre-launch projects: Keppel Bay Plot 6 (KB), One Leonie Residences (OL), Hougang Central Residences (HC).
- **CTA:** "GET PRICE LIST & E-BROCHURE" (OMG, AH, AR, BH, CS) · "REGISTER YOUR INTEREST" (KB, OL, HC).
- **Not used in this format:** the custom-list 3-icon benefit row and the trust footer. Those belong to the bedroom-count/custom-list ad format, not the project format.
- **Avoid (every prompt):** misspelled, warped or extra text · logos, watermarks, fake brand marks · developer logos or branding (developer names only where they are in the quoted copy) · invented prices, numbers, sizes, percentages or distances · real MRT/LTA logos, line colours or station signage · identifiable real landmark buildings · people in focus · icon rows, footers, QR codes, phone numbers.

## Per-ID special rules honoured
| Rule (copy.md) | Where applied |
|---|---|
| No station name / walk time | OMG-4, AH-4, OL-4, HC-4, CS-4 (no-transport scene + avoid line) |
| No digit / $ / PSF | KB-5. Only the numerals inside the approved subhead are allowed. See Flags. |
| No price / PSF / unit count | All OL-1…OL-5 (none in copy; explicit ban added to OL-3, OL-4, OL-5) |
| "ANALYST ESTIMATE" badge beside $2,500+ PSF | HC-5 |
| Condo + generic unbranded MRT entrance in frame | AR-4 (also BH-4, to state "2 min walk" with confidence) |
| Small red "60%+ SOLD" badge | BH-1 |
| Floor-plan line drawing hero + building image | OMG-3, AH-3, KB-3, OL-3, HC-3, AR-3, CS-3. BH-3 is a frame for real assets. |
| Studio plan | CS-3 |
| Real assets composited, not AI | BH-3 (layout frame only, flagged) |

## One Marina Gardens (OMG)
Label on every image: `*IMAGE SAMPLE ONLY*` · CTA: `GET PRICE LIST & E-BROCHURE`

### OMG-1 — Direct
- **Copy ID used:** OMG-1
- **Angle:** Direct
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Golden-hour waterfront skyline evoking Marina South / Marina Bay.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "Own a Home at One Marina Gardens" (red: "One Marina Gardens") · subhead "D01, Marina South. 99-year leasehold, 2-4 bedroom homes from $1.876M." · CTA "GET PRICE LIST & E-BROCHURE" · label "*IMAGE SAMPLE ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "Own a Home at One Marina Gardens" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "One Marina Gardens" in red. Under it, subhead "D01, Marina South. 99-year leasehold, 2-4 bedroom homes from $1.876M." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a photoreal golden-hour view across a calm bay towards a contemporary waterfront city skyline evoking Marina South, Singapore - slender glass residential and office towers, a landscaped waterfront promenade and lush tropical trees in the foreground, single warm low sun from camera-right, 35mm lens at eye level, deep focus. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "GET PRICE LIST & E-BROCHURE" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers. Genre: Singapore property paid-social static ad.

### OMG-2 — Blind
- **Copy ID used:** OMG-2
- **Angle:** Blind
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Waterfront district promenade with a new unnamed tower behind.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "New Launch Condo in Marina South" (red: "Marina South") · subhead "Meet One Marina Gardens — 99-year leasehold, 2-4 bedroom homes from $1.876M." · CTA "GET PRICE LIST & E-BROCHURE" · label "*IMAGE SAMPLE ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "New Launch Condo in Marina South" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "Marina South" in red. Under it, subhead "Meet One Marina Gardens — 99-year leasehold, 2-4 bedroom homes from $1.876M." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a photoreal sunlit landscaped waterfront promenade in a new downtown district evoking Marina South, Singapore - a timber boardwalk along the bay, palms and rain trees, a sleek unnamed residential tower rising behind, soft morning light from camera-left, 28mm lens. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "GET PRICE LIST & E-BROCHURE" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers. Genre: Singapore property paid-social static ad.

### OMG-3 — Floor layout
- **Copy ID used:** OMG-3
- **Angle:** Floor layout
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Floor-plan line drawing hero (left) + waterfront tower image (right).
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "See Every Layout at One Marina Gardens" (red: "One Marina Gardens") · subhead "2, 3 and 4-bedroom floor plans — from $1.876M. See the actual layout before you decide." · CTA "GET PRICE LIST & E-BROCHURE" · label "*IMAGE SAMPLE ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "See Every Layout at One Marina Gardens" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "One Marina Gardens" in red. Under it, subhead "2, 3 and 4-bedroom floor plans — from $1.876M. See the actual layout before you decide." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a two-part image: on the left, about 60% of the width, the hero is a clean architectural floor-plan line drawing of a generic 3-bedroom apartment with balcony, in crisp thin black and grey lines on white - walls, door swings, windows, kitchen and bathroom fixtures, light furniture outlines - with absolutely no text, numbers, dimensions, room names or compass inside the plan; on the right, about 40% of the width, in a rounded-corner frame, a photoreal representative image of an unnamed modern glass residential tower beside a bay in clear daylight. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "GET PRICE LIST & E-BROCHURE" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers. Genre: Singapore property paid-social static ad.

### OMG-4 — MRT (area framing, no station)
- **Copy ID used:** OMG-4
- **Angle:** MRT (area framing, no station)
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Blue-hour city-centre skyline across the water. No station, no walk time.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "A New Launch in the Heart of Marina South" (red: "Heart of Marina South") · subhead "City-centre living at One Marina Gardens — 99-year leasehold, from $1.876M." · CTA "GET PRICE LIST & E-BROCHURE" · label "*IMAGE SAMPLE ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "A New Launch in the Heart of Marina South" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "Heart of Marina South" in red. Under it, subhead "City-centre living at One Marina Gardens — 99-year leasehold, from $1.876M." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a photoreal blue-hour city-centre skyline seen from across the water - dense contemporary towers with warm lit windows, reflections on the bay, tropical trees along the shoreline, soft cool ambient light, 35mm lens; no trains, rail lines, stations or transport signage anywhere in the scene. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "GET PRICE LIST & E-BROCHURE" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers; no station names, no walking times, no transport icons. Genre: Singapore property paid-social static ad.

### OMG-5 — Price/PSF
- **Copy ID used:** OMG-5
- **Angle:** Price/PSF
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Elevated dusk view over waterfront downtown evoking Marina South.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "One Marina Gardens, From $2,781 PSF" (red: "From $2,781 PSF") · subhead "2-4 bedroom homes from $1.876M. D01, Marina South, 99-year leasehold." · CTA "GET PRICE LIST & E-BROCHURE" · label "*IMAGE SAMPLE ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "One Marina Gardens, From $2,781 PSF" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "From $2,781 PSF" in red. Under it, subhead "2-4 bedroom homes from $1.876M. D01, Marina South, 99-year leasehold." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a photoreal elevated dusk view over a modern waterfront downtown evoking Marina South, Singapore - glass towers glowing warm, calm bay water in the foreground, single soft sunset key light from camera-right, 50mm lens. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "GET PRICE LIST & E-BROCHURE" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers. Genre: Singapore property paid-social static ad.

### OMG-6 — Curiosity/story (OPTIONAL, higher risk)
- **Copy ID used:** OMG-6
- **Angle:** Curiosity/story (OPTIONAL, higher risk)
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Waterfront district under construction - tower cranes, partly built towers.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "This Corner of the City Is Changing Fast" (red: "Changing Fast") · subhead "One Marina Gardens — 99-year leasehold, 2-4 bedroom homes from $1.876M, D01 Marina South." · CTA "GET PRICE LIST & E-BROCHURE" · label "*IMAGE SAMPLE ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)
- **Note:** Optional 6th angle - higher-risk curiosity mechanic, not a "blind" ad. Run only if the client opts in.

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "This Corner of the City Is Changing Fast" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "Changing Fast" in red. Under it, subhead "One Marina Gardens — 99-year leasehold, 2-4 bedroom homes from $1.876M, D01 Marina South." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a photoreal bright daytime view of a waterfront downtown district under active development - several tall tower cranes against a clear sky, partly built residential towers beside finished glass towers, bay water and young trees in the foreground, documentary and optimistic, single hard sun from camera-left, 35mm lens. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "GET PRICE LIST & E-BROCHURE" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers; no company names, logos or safety-signage lettering on cranes, hoardings or buildings. Genre: Singapore property paid-social static ad.

## Amber House (AH)
Label on every image: `*IMAGE SAMPLE ONLY*` · CTA: `GET PRICE LIST & E-BROCHURE`

### AH-1 — Direct
- **Copy ID used:** AH-1
- **Angle:** Direct
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Slender boutique tower above leafy low-rise East Coast neighbourhood.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "Own a Freehold Home at Amber House" (red: "Amber House") · subhead "D15, East Coast. Freehold, 2-4 bedroom homes, from approx. $2,950 psf." · CTA "GET PRICE LIST & E-BROCHURE" · label "*IMAGE SAMPLE ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "Own a Freehold Home at Amber House" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "Amber House" in red. Under it, subhead "D15, East Coast. Freehold, 2-4 bedroom homes, from approx. $2,950 psf." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a photoreal representative image of an elegant, unnamed slender boutique residential tower of about 16 storeys with a warm-toned facade and deep balconies, rising above a leafy low-rise East Coast, Singapore neighbourhood of landed homes and mature trees, late-afternoon sun from camera-left, 35mm lens. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "GET PRICE LIST & E-BROCHURE" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers. Genre: Singapore property paid-social static ad.

### AH-2 — Blind
- **Copy ID used:** AH-2
- **Angle:** Blind
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Leafy East Coast residential street, boutique tower in background.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "Freehold New Launch in East Coast" (red: "East Coast") · subhead "Meet Amber House — D15, 2-4 bedroom homes, from approx. $2,950 psf." · CTA "GET PRICE LIST & E-BROCHURE" · label "*IMAGE SAMPLE ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "Freehold New Launch in East Coast" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "East Coast" in red. Under it, subhead "Meet Amber House — D15, 2-4 bedroom homes, from approx. $2,950 psf." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a photoreal leafy residential street in East Coast, Singapore - low-rise landed houses, mature rain trees and bougainvillea, a modern unnamed boutique condo tower in the background, soft morning light from camera-right, 28mm lens at eye level. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "GET PRICE LIST & E-BROCHURE" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers. Genre: Singapore property paid-social static ad.

### AH-3 — Floor layout
- **Copy ID used:** AH-3
- **Angle:** Floor layout
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Floor-plan line drawing hero + boutique tower image.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "See Every Layout at Amber House" (red: "Amber House") · subhead "2, 3 and 4-bedroom floor plans, 538-1,744 sqft. See the actual layout before you decide." · CTA "GET PRICE LIST & E-BROCHURE" · label "*IMAGE SAMPLE ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "See Every Layout at Amber House" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "Amber House" in red. Under it, subhead "2, 3 and 4-bedroom floor plans, 538-1,744 sqft. See the actual layout before you decide." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a two-part image: on the left, about 60% of the width, the hero is a clean architectural floor-plan line drawing of a generic 2-bedroom apartment with balcony, in crisp thin black and grey lines on white - walls, door swings, windows, kitchen and bathroom fixtures, light furniture outlines - with absolutely no text, numbers, dimensions, room names or compass inside the plan; on the right, about 40% of the width, in a rounded-corner frame, a photoreal representative image of an unnamed slender boutique residential tower among mature trees in clear daylight. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "GET PRICE LIST & E-BROCHURE" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers. Genre: Singapore property paid-social static ad.

### AH-4 — MRT (area framing, no station)
- **Copy ID used:** AH-4
- **Angle:** MRT (area framing, no station)
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Palm-lined East Coast seafront at sunrise, tower inland. No station.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "A Freehold Address in the Heart of East Coast" (red: "Heart of East Coast") · subhead "Amber House — D15, Marine Parade. Freehold, 2-4 bedroom homes from approx. $2,950 psf." · CTA "GET PRICE LIST & E-BROCHURE" · label "*IMAGE SAMPLE ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "A Freehold Address in the Heart of East Coast" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "Heart of East Coast" in red. Under it, subhead "Amber House — D15, Marine Parade. Freehold, 2-4 bedroom homes from approx. $2,950 psf." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a photoreal sunrise over a palm-lined coastal park promenade evoking East Coast, Singapore - calm sea, cycling path, a modern unnamed residential tower visible inland above the treeline, soft golden sunrise light from camera-right, 28mm lens; no trains, stations or transport signage anywhere. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "GET PRICE LIST & E-BROCHURE" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers; no station names, no walking times, no transport icons. Genre: Singapore property paid-social static ad.

### AH-5 — Price/PSF
- **Copy ID used:** AH-5
- **Angle:** Price/PSF
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Premium staged living room, floor-to-ceiling windows, leafy view.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "Amber House, From Approx. $2,950 PSF" (red: "From Approx. $2,950 PSF") · subhead "Freehold, 2-4 bedroom homes, 538-1,744 sqft. D15, East Coast." · CTA "GET PRICE LIST & E-BROCHURE" · label "*IMAGE SAMPLE ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "Amber House, From Approx. $2,950 PSF" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "From Approx. $2,950 PSF" in red. Under it, subhead "Freehold, 2-4 bedroom homes, 538-1,744 sqft. D15, East Coast." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a photoreal premium staged living room interior of a new condo - warm oak floors, marble feature wall, linen sofa, floor-to-ceiling windows framing a leafy low-rise neighbourhood view, soft daylight from the windows at camera-left, 24mm interior lens. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "GET PRICE LIST & E-BROCHURE" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers. Genre: Singapore property paid-social static ad.

## Keppel Bay Plot 6 (KB)
Label on every image: `*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*` · CTA: `REGISTER YOUR INTEREST`

### KB-1 — Direct
- **Copy ID used:** KB-1
- **Angle:** Direct
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Render: luxury waterfront residence on a marina, yachts, green hills.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "Own a Home at Keppel Bay Plot 6" (red: "Keppel Bay Plot 6") · subhead "D04, Keppel Bay Drive (Keppel Island). 99-year leasehold by Keppel Land, near HarbourFront MRT." · CTA "REGISTER YOUR INTEREST" · label "*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "Own a Home at Keppel Bay Plot 6" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "Keppel Bay Plot 6" in red. Under it, subhead "D04, Keppel Bay Drive (Keppel Island). 99-year leasehold by Keppel Land, near HarbourFront MRT." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a photoreal architectural-render-style artist's impression of an unnamed low-to-mid-rise luxury waterfront residential building on a marina - white and timber facade, landscaped terraces, yachts moored on calm water in the foreground, green hills behind, golden-hour light from camera-right, 35mm lens. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "REGISTER YOUR INTEREST" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers. Genre: Singapore property paid-social static ad.

### KB-2 — Blind
- **Copy ID used:** KB-2
- **Angle:** Blind
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Render: aerial of a tranquil marina district, waterfront residences.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "New Launch Condo Near HarbourFront" (red: "Near HarbourFront") · subhead "Meet Keppel Bay Plot 6 (Keppel Island) — 99-year leasehold by Keppel Land, TOP ~2027." · CTA "REGISTER YOUR INTEREST" · label "*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "New Launch Condo Near HarbourFront" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "Near HarbourFront" in red. Under it, subhead "Meet Keppel Bay Plot 6 (Keppel Island) — 99-year leasehold by Keppel Land, TOP ~2027." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a photoreal architectural-render-style artist's impression, high aerial view of a tranquil marina district beside a harbourfront - low-rise waterfront residences, moored yachts, lush hillside greenery, calm sea, soft midday light, wide lens. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "REGISTER YOUR INTEREST" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers. Genre: Singapore property paid-social static ad.

### KB-3 — Floor layout
- **Copy ID used:** KB-3
- **Angle:** Floor layout
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Floor-plan line drawing hero + waterfront residence render.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "See Every Layout at Keppel Bay Plot 6" (red: "Keppel Bay Plot 6") · subhead "Keppel Island's newest address — see the actual floor plan before you decide." · CTA "REGISTER YOUR INTEREST" · label "*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "See Every Layout at Keppel Bay Plot 6" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "Keppel Bay Plot 6" in red. Under it, subhead "Keppel Island's newest address — see the actual floor plan before you decide." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a two-part image: on the left, about 60% of the width, the hero is a clean architectural floor-plan line drawing of a generic 3-bedroom waterfront apartment with a wide balcony, in crisp thin black and grey lines on white - walls, door swings, windows, kitchen and bathroom fixtures, light furniture outlines - with absolutely no text, numbers, dimensions, room names or compass inside the plan; on the right, about 40% of the width, in a rounded-corner frame, a photoreal architectural-render-style artist's impression of an unnamed luxury waterfront residence beside a marina in clear daylight. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "REGISTER YOUR INTEREST" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers. Genre: Singapore property paid-social static ad.

### KB-4 — MRT
- **Copy ID used:** KB-4
- **Angle:** MRT
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Render: waterfront residence + shaded path toward a generic covered walkway. No signage.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "Minutes from HarbourFront MRT" (red: "HarbourFront MRT") · subhead "Keppel Bay Plot 6 (Keppel Island) — 99-year leasehold, D04, by Keppel Land." · CTA "REGISTER YOUR INTEREST" · label "*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "Minutes from HarbourFront MRT" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "HarbourFront MRT" in red. Under it, subhead "Keppel Bay Plot 6 (Keppel Island) — 99-year leasehold, D04, by Keppel Land." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a photoreal architectural-render-style artist's impression of an unnamed luxury waterfront residence beside a marina, with a shaded tree-lined pedestrian path leading from it toward a generic, unbranded covered walkway in the mid-distance, bright clear daylight from camera-left, 35mm lens; no station building, signs, logos or lettering. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "REGISTER YOUR INTEREST" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers; no invented distance or walking time, no MRT/LTA logos or line colours. Genre: Singapore property paid-social static ad.

### KB-5 — Price (coming soon)
- **Copy ID used:** KB-5
- **Angle:** Price (coming soon)
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Render: dusk waterfront residence, lit windows, sense of anticipation. ZERO price elements.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "Price Not Yet Released" (red: "Not Yet Released") · subhead "Be the first to know when Keppel Bay Plot 6 (Keppel Island) opens pricing — D04, 99-year leasehold by Keppel Land." · CTA "REGISTER YOUR INTEREST" · label "*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)
- **Note:** copy.md says "no digit anywhere", but the approved subhead itself contains "Plot 6", "D04" and "99-year". Prompt renders the subhead verbatim and bans every other numeral / $ / PSF. See Flags for a digit-free alternative.

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "Price Not Yet Released" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "Not Yet Released" in red. Under it, subhead "Be the first to know when Keppel Bay Plot 6 (Keppel Island) opens pricing — D04, 99-year leasehold by Keppel Land." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a photoreal architectural-render-style artist's impression at dusk of an unnamed luxury waterfront residence with warm lit windows over a calm marina, deep blue sky, a quiet sense of anticipation, single soft sunset glow from camera-right, 35mm lens. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "REGISTER YOUR INTEREST" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers; absolutely no dollar signs, no "PSF", no price figures, no price tags, and no numerals anywhere except those inside the quoted subhead. Genre: Singapore property paid-social static ad.

## One Leonie Residences (OL)
Label on every image: `*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*` · CTA: `REGISTER YOUR INTEREST`

### OL-1 — Direct
- **Copy ID used:** OL-1
- **Angle:** Direct
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Render: boutique freehold tower on a lush green hillside enclave.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "Own a Freehold Home at One Leonie Residences" (red: "One Leonie Residences") · subhead "D9, Leonie Hill. Freehold, by Far East Organization. TOP ~2028." · CTA "REGISTER YOUR INTEREST" · label "*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "Own a Freehold Home at One Leonie Residences" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "One Leonie Residences" in red. Under it, subhead "D9, Leonie Hill. Freehold, by Far East Organization. TOP ~2028." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a photoreal architectural-render-style artist's impression of an unnamed elegant boutique residential tower on a lush green hillside in a quiet prime city enclave - stone-and-glass facade, mature tropical trees, a private landscaped driveway, soft late-afternoon light from camera-left, 35mm lens. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "REGISTER YOUR INTEREST" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers. Genre: Singapore property paid-social static ad.

### OL-2 — Blind
- **Copy ID used:** OL-2
- **Angle:** Blind
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Render: tree-covered hill beside a prime shopping district, city soft behind.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "A Freehold New Launch in Orchard" (red: "Orchard") · subhead "Meet One Leonie Residences — D9, Leonie Hill, by Far East Organization." · CTA "REGISTER YOUR INTEREST" · label "*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "A Freehold New Launch in Orchard" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "Orchard" in red. Under it, subhead "Meet One Leonie Residences — D9, Leonie Hill, by Far East Organization." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a photoreal architectural-render-style artist's impression of a tranquil tree-covered hill just off a prime city shopping district - boutique residences among greenery in the foreground, distant city towers softly out of focus, fresh morning light from camera-right, 50mm lens. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "REGISTER YOUR INTEREST" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers. Genre: Singapore property paid-social static ad.

### OL-3 — Floor layout
- **Copy ID used:** OL-3
- **Angle:** Floor layout
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Floor-plan line drawing hero + hillside boutique tower render.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "See the Layouts at One Leonie Residences" (red: "One Leonie Residences") · subhead "A range of layouts, D9 Leonie Hill, freehold. See the actual floor plan before you decide." · CTA "REGISTER YOUR INTEREST" · label "*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "See the Layouts at One Leonie Residences" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "One Leonie Residences" in red. Under it, subhead "A range of layouts, D9 Leonie Hill, freehold. See the actual floor plan before you decide." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a two-part image: on the left, about 60% of the width, the hero is a clean architectural floor-plan line drawing of a generic apartment layout with balcony, in crisp thin black and grey lines on white - walls, door swings, windows, kitchen and bathroom fixtures, light furniture outlines - with absolutely no text, numbers, dimensions, room names or compass inside the plan; on the right, about 40% of the width, in a rounded-corner frame, a photoreal architectural-render-style artist's impression of an unnamed boutique residential tower on a green hillside in clear daylight. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "REGISTER YOUR INTEREST" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers; no price, no PSF, no dollar signs, no unit counts, no sizes or sqft. Genre: Singapore property paid-social static ad.

### OL-4 — MRT (area framing, no station)
- **Copy ID used:** OL-4
- **Angle:** MRT (area framing, no station)
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Render: elevated golden-hour view over leafy prime enclave, city behind. No station.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "A New Launch in the Heart of Orchard" (red: "Heart of Orchard") · subhead "One Leonie Residences — D9, Leonie Hill, freehold, by Far East Organization." · CTA "REGISTER YOUR INTEREST" · label "*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "A New Launch in the Heart of Orchard" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "Heart of Orchard" in red. Under it, subhead "One Leonie Residences — D9, Leonie Hill, freehold, by Far East Organization." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a photoreal architectural-render-style artist's impression, elevated golden-hour view over a leafy prime residential enclave with the towers of a city shopping district rising behind, warm low sun from camera-left, 35mm lens; no trains, stations or transport signage anywhere. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "REGISTER YOUR INTEREST" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers; no station names, no walking times, no transport icons, no price, no unit counts. Genre: Singapore property paid-social static ad.

### OL-5 — Price (coming soon)
- **Copy ID used:** OL-5
- **Angle:** Price (coming soon)
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Render: dusk boutique residence on green hillside, quiet exclusivity. ZERO price elements.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "One Leonie Residences — Price Coming Soon" (red: "Price Coming Soon") · subhead "Freehold living on Leonie Hill, in the heart of Orchard's freehold enclave. Be first to know when prices release." · CTA "REGISTER YOUR INTEREST" · label "*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "One Leonie Residences — Price Coming Soon" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "Price Coming Soon" in red. Under it, subhead "Freehold living on Leonie Hill, in the heart of Orchard's freehold enclave. Be first to know when prices release." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a photoreal architectural-render-style artist's impression at dusk of an unnamed boutique freehold residence on a green hillside, warm lit windows, deep blue sky, a calm sense of exclusivity, soft ambient twilight, 50mm lens. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "REGISTER YOUR INTEREST" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers; absolutely no price, no PSF, no dollar signs, no price tags, no unit counts, no numerals of any kind. Genre: Singapore property paid-social static ad.

## Hougang Central Residences (HC)
Label on every image: `*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*` · CTA: `REGISTER YOUR INTEREST`

### HC-1 — Direct
- **Copy ID used:** HC-1
- **Angle:** Direct
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Render: new high-rise in a mature heartland town hub.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "Own a Home at Hougang Central Residences" (red: "Hougang Central Residences") · subhead "D19, Hougang. 99-year leasehold, TOP ~2030 — Hougang's first major new launch since 2018/2019." · CTA "REGISTER YOUR INTEREST" · label "*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "Own a Home at Hougang Central Residences" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "Hougang Central Residences" in red. Under it, subhead "D19, Hougang. 99-year leasehold, TOP ~2030 — Hougang's first major new launch since 2018/2019." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a photoreal architectural-render-style artist's impression of an unnamed modern high-rise residential development in a mature Singapore heartland town - contemporary facade with greenery on the balconies, a lively neighbourhood hub, surrounding public-housing blocks and mature trees, warm late-afternoon light from camera-left, 35mm lens. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "REGISTER YOUR INTEREST" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers. Genre: Singapore property paid-social static ad.

### HC-2 — Blind
- **Copy ID used:** HC-2
- **Angle:** Blind
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Render: family-friendly heartland street, new condo rising behind.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "New Launch Condo in Hougang" (red: "Hougang") · subhead "Meet Hougang Central Residences — 99-year leasehold, D19, the area's first major launch since 2018/2019." · CTA "REGISTER YOUR INTEREST" · label "*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "New Launch Condo in Hougang" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "Hougang" in red. Under it, subhead "Meet Hougang Central Residences — 99-year leasehold, D19, the area's first major launch since 2018/2019." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a photoreal architectural-render-style artist's impression, eye-level view of a family-friendly Singapore heartland street - tree-lined road, public-housing blocks, a park connector with cyclists far off and out of focus, a new unnamed condo tower rising behind, soft morning light from camera-right, 28mm lens. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "REGISTER YOUR INTEREST" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers. Genre: Singapore property paid-social static ad.

### HC-3 — Floor layout
- **Copy ID used:** HC-3
- **Angle:** Floor layout
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Floor-plan line drawing hero + heartland tower render.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "See Every Layout at Hougang Central Residences" (red: "Hougang Central Residences") · subhead "99-year leasehold homes in D19, Hougang — see the actual floor plan before you decide." · CTA "REGISTER YOUR INTEREST" · label "*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "See Every Layout at Hougang Central Residences" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "Hougang Central Residences" in red. Under it, subhead "99-year leasehold homes in D19, Hougang — see the actual floor plan before you decide." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a two-part image: on the left, about 60% of the width, the hero is a clean architectural floor-plan line drawing of a generic 3-bedroom family apartment with balcony, in crisp thin black and grey lines on white - walls, door swings, windows, kitchen and bathroom fixtures, light furniture outlines - with absolutely no text, numbers, dimensions, room names or compass inside the plan; on the right, about 40% of the width, in a rounded-corner frame, a photoreal architectural-render-style artist's impression of an unnamed modern residential tower in a green heartland town in clear daylight. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "REGISTER YOUR INTEREST" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers. Genre: Singapore property paid-social static ad.

### HC-4 — MRT (area framing, no station)
- **Copy ID used:** HC-4
- **Angle:** MRT (area framing, no station)
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Render: elevated golden-hour heartland town centre. No station.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "A New Launch in the Heart of Hougang" (red: "Heart of Hougang") · subhead "Hougang Central Residences — 99-year leasehold, D19, TOP ~2030." · CTA "REGISTER YOUR INTEREST" · label "*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "A New Launch in the Heart of Hougang" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "Heart of Hougang" in red. Under it, subhead "Hougang Central Residences — 99-year leasehold, D19, TOP ~2030." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a photoreal architectural-render-style artist's impression, elevated golden-hour view over a mature heartland town centre - a new unnamed residential tower beside a busy neighbourhood hub, parks and public-housing estates spreading out, warm low sun from camera-right, 35mm lens; no trains, stations or transport signage anywhere. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "REGISTER YOUR INTEREST" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers; no station names, no walking times, no transport icons. Genre: Singapore property paid-social static ad.

### HC-5 — Price (analyst estimate)
- **Copy ID used:** HC-5
- **Angle:** Price (analyst estimate)
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Render: dusk heartland tower. "ANALYST ESTIMATE" badge beside the PSF figure.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "Hougang Central Residences — Analysts Expect From Around $2,500+ PSF" (red: "$2,500+ PSF") · subhead "D19, 99-year leasehold, TOP ~2030. Price not yet officially launched — register for the confirmed price list." · CTA "REGISTER YOUR INTEREST" · label "*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*" · badge "ANALYST ESTIMATE"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "Hougang Central Residences — Analysts Expect From Around $2,500+ PSF" in heavy black geometric sans-serif, the largest text (about 60-64 px, up to 4 lines, because it is long), with "$2,500+ PSF" in red. Under it, subhead "D19, 99-year leasehold, TOP ~2030. Price not yet officially launched — register for the confirmed price list." in regular charcoal sans-serif, about one third of headline size. Immediately beside the "$2,500+ PSF" words, place a small rounded badge with a red outline and the bold red all-caps text "ANALYST ESTIMATE" (about 22 px); the badge must sit visibly next to the figure, never detached from it. Middle of the frame, about 50% of the height, full width: a photoreal architectural-render-style artist's impression at dusk of an unnamed modern residential tower in a heartland town, warm lit windows, deep blue sky, soft ambient twilight, 35mm lens. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "REGISTER YOUR INTEREST" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers; the figure must never appear without the "ANALYST ESTIMATE" badge; no other prices or figures. Genre: Singapore property paid-social static ad.

## The Arcady at Boon Keng (AR)
Label on every image: `*IMAGE SAMPLE ONLY*` · CTA: `GET PRICE LIST & E-BROCHURE`

### AR-1 — Direct
- **Copy ID used:** AR-1
- **Angle:** Direct
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Contemporary mid-rise condo on a shophouse-lined city-fringe road.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "Own a Freehold Home at The Arcady at Boon Keng" (red: "The Arcady at Boon Keng") · subhead "D12, Serangoon Road. Freehold, 172 units, from $1.33M." · CTA "GET PRICE LIST & E-BROCHURE" · label "*IMAGE SAMPLE ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "Own a Freehold Home at The Arcady at Boon Keng" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "The Arcady at Boon Keng" in red. Under it, subhead "D12, Serangoon Road. Freehold, 172 units, from $1.33M." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a photoreal representative image of an unnamed contemporary mid-rise freehold condominium on a city-fringe road in Singapore lined with traditional two-storey shophouses and mature trees, late-afternoon light from camera-left, 35mm lens at eye level. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "GET PRICE LIST & E-BROCHURE" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers; no shop signage or lettering on the shophouses. Genre: Singapore property paid-social static ad.

### AR-2 — Blind
- **Copy ID used:** AR-2
- **Angle:** Blind
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** City-fringe neighbourhood, modern condo, generic covered walkway.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "New Freehold Launch Near Boon Keng MRT" (red: "Near Boon Keng MRT") · subhead "Meet The Arcady at Boon Keng — Freehold, 172 units, from $1.33M." · CTA "GET PRICE LIST & E-BROCHURE" · label "*IMAGE SAMPLE ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "New Freehold Launch Near Boon Keng MRT" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "Near Boon Keng MRT" in red. Under it, subhead "Meet The Arcady at Boon Keng — Freehold, 172 units, from $1.33M." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a photoreal city-fringe Singapore neighbourhood - shophouse-lined road, a modern unnamed condo, a generic unbranded covered pedestrian walkway in the mid-distance, bright morning light from camera-right, 28mm lens. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "GET PRICE LIST & E-BROCHURE" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers; no shop signage or lettering, no station signage. Genre: Singapore property paid-social static ad.

### AR-3 — Floor layout
- **Copy ID used:** AR-3
- **Angle:** Floor layout
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Floor-plan line drawing hero + mid-rise condo image.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "See Every Layout at The Arcady at Boon Keng" (red: "The Arcady at Boon Keng") · subhead "1 to 4-bedroom freehold floor plans — from $1.33M. See the actual layout before you decide." · CTA "GET PRICE LIST & E-BROCHURE" · label "*IMAGE SAMPLE ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "See Every Layout at The Arcady at Boon Keng" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "The Arcady at Boon Keng" in red. Under it, subhead "1 to 4-bedroom freehold floor plans — from $1.33M. See the actual layout before you decide." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a two-part image: on the left, about 60% of the width, the hero is a clean architectural floor-plan line drawing of a generic 2-bedroom apartment with balcony, in crisp thin black and grey lines on white - walls, door swings, windows, kitchen and bathroom fixtures, light furniture outlines - with absolutely no text, numbers, dimensions, room names or compass inside the plan; on the right, about 40% of the width, in a rounded-corner frame, a photoreal representative image of an unnamed contemporary mid-rise condominium on a tree-lined city-fringe road in clear daylight. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "GET PRICE LIST & E-BROCHURE" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers. Genre: Singapore property paid-social static ad.

### AR-4 — MRT (confirmed)
- **Copy ID used:** AR-4
- **Angle:** MRT (confirmed)
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Condo + generic unbranded MRT entrance in the same frame, confident.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "500m From Boon Keng MRT. Freehold." (red: "500m From Boon Keng MRT.") · subhead "The Arcady at Boon Keng — a 5-minute walk to the station, from $1.33M." · CTA "GET PRICE LIST & E-BROCHURE" · label "*IMAGE SAMPLE ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "500m From Boon Keng MRT. Freehold." in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "500m From Boon Keng MRT." in red. Under it, subhead "The Arcady at Boon Keng — a 5-minute walk to the station, from $1.33M." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a photoreal confident eye-level street scene: in the right foreground, a generic, unbranded underground metro station entrance - a modern glass-and-steel canopy over an escalator going down, with no signs, no logos, no line colours and no lettering of any kind; a short shaded tree-lined footpath leads from it to an unnamed contemporary freehold condominium in the left mid-ground, clearly close by, bright clean midday light from camera-left, 28mm lens. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "GET PRICE LIST & E-BROCHURE" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers; no MRT/LTA logos, no station name boards, no line-colour bands, no wayfinding signs. Genre: Singapore property paid-social static ad.

### AR-5 — Price/PSF
- **Copy ID used:** AR-5
- **Angle:** Price/PSF
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Premium staged living room with city-fringe view; exact by-type psf in subhead.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "The Arcady at Boon Keng, From $2,390 PSF" (red: "From $2,390 PSF") · subhead "Freehold 3-bedroom homes from $2,390 psf, 2-bedroom from $2,500 psf — entry from $1.33M." · CTA "GET PRICE LIST & E-BROCHURE" · label "*IMAGE SAMPLE ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "The Arcady at Boon Keng, From $2,390 PSF" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "From $2,390 PSF" in red. Under it, subhead "Freehold 3-bedroom homes from $2,390 psf, 2-bedroom from $2,500 psf — entry from $1.33M." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a photoreal premium staged living room interior of a new condo - light oak floors, warm neutral furnishings, large windows with a city-fringe rooftop view, soft daylight from the windows at camera-left, 24mm interior lens. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "GET PRICE LIST & E-BROCHURE" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers; render every figure exactly as quoted; no other prices. Genre: Singapore property paid-social static ad.

## Bagnall Haus (BH)
Label on every image: `*IMAGE SAMPLE ONLY*` · CTA: `GET PRICE LIST & E-BROCHURE`

### BH-1 — Direct
- **Copy ID used:** BH-1
- **Angle:** Direct
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Contemporary freehold condo in leafy east-side suburb + small red "60%+ SOLD" badge.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "Own a Home at Bagnall Haus" (red: "Bagnall Haus") · subhead "D16, Bedok. Freehold, from $1.235M. Over 60% of units taken up on launch weekend." · CTA "GET PRICE LIST & E-BROCHURE" · label "*IMAGE SAMPLE ONLY*" · badge "60%+ SOLD"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "Own a Home at Bagnall Haus" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "Bagnall Haus" in red. Under it, subhead "D16, Bedok. Freehold, from $1.235M. Over 60% of units taken up on launch weekend." in regular charcoal sans-serif, about one third of headline size. In the top-right corner of the image area, a small solid red rounded badge with bold white all-caps text "60%+ SOLD" (about 26 px), small and tidy, not dominating the image. Middle of the frame, about 50% of the height, full width: a photoreal representative image of an unnamed contemporary freehold condominium in a leafy east-side Singapore suburb - clean white and grey facade, balconies with planters, a landscaped pool deck, warm late-afternoon light from camera-left, 35mm lens. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "GET PRICE LIST & E-BROCHURE" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers. Genre: Singapore property paid-social static ad.

### BH-2 — Blind
- **Copy ID used:** BH-2
- **Angle:** Blind
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Leafy east-side street, low-rise homes, modern condo, park connector.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "Freehold New Launch in Bedok" (red: "Bedok") · subhead "Meet Bagnall Haus — Freehold homes from $1.235M, 2 minutes from Sungei Bedok MRT." · CTA "GET PRICE LIST & E-BROCHURE" · label "*IMAGE SAMPLE ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "Freehold New Launch in Bedok" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "Bedok" in red. Under it, subhead "Meet Bagnall Haus — Freehold homes from $1.235M, 2 minutes from Sungei Bedok MRT." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a photoreal leafy east-side suburban street in Singapore - low-rise landed homes, a modern unnamed condo, a canal-side park connector lined with trees, soft morning light from camera-right, 28mm lens. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "GET PRICE LIST & E-BROCHURE" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers. Genre: Singapore property paid-social static ad.

### BH-3 — Floor layout (NEEDS REAL ASSETS)
- **Copy ID used:** BH-3
- **Angle:** Floor layout (NEEDS REAL ASSETS)
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** LAYOUT FRAME ONLY - two empty placeholder panels for the real floor plan + real photo, composited in post.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "See Every Layout at Bagnall Haus" (red: "Bagnall Haus") · subhead "Freehold homes from $1.235M, D16 Bedok. See the actual floor plan before you decide." · CTA "GET PRICE LIST & E-BROCHURE" · label "*IMAGE SAMPLE ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)
- **Note:** NEEDS REAL ASSETS in clients/gomedia-homes/inputs/product-images/ before use. copy.md requires the real Bagnall Haus floor plan + real photo composited in post (Figma/Canva), not AI. This prompt only produces the text/layout frame. Label: keep "*IMAGE SAMPLE ONLY*" if the photo is a staged/similar unit; confirm with client if the photo is of the actual project.

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "See Every Layout at Bagnall Haus" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "Bagnall Haus" in red. Under it, subhead "Freehold homes from $1.235M, D16 Bedok. See the actual floor plan before you decide." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a layout frame for compositing: two clean empty rounded-corner placeholder panels in very light grey (#EEEEEE) with nothing inside them - left panel about 60% of the width reserved for a floor plan, right panel about 40% reserved for a building photo - no drawing, photo, pattern or text inside either panel. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "GET PRICE LIST & E-BROCHURE" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers; no invented floor plan, no invented building, nothing inside the placeholder panels. Genre: Singapore property paid-social static ad.

### BH-4 — MRT (confirmed)
- **Copy ID used:** BH-4
- **Angle:** MRT (confirmed)
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Condo + generic unbranded metro entrance steps away, confident.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "2 Minutes From Sungei Bedok MRT" (red: "2 Minutes") · subhead "Bagnall Haus — Freehold homes from $1.235M, D16 Bedok." · CTA "GET PRICE LIST & E-BROCHURE" · label "*IMAGE SAMPLE ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "2 Minutes From Sungei Bedok MRT" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "2 Minutes" in red. Under it, subhead "Bagnall Haus — Freehold homes from $1.235M, D16 Bedok." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a photoreal confident eye-level suburban street scene: in the right foreground, a generic, unbranded underground metro station entrance - a modern glass-and-steel canopy over an escalator going down, with no signs, no logos, no line colours and no lettering of any kind; a few steps along a shaded footpath stands an unnamed contemporary freehold condominium in the left mid-ground, bright clean midday light from camera-left, 28mm lens. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "GET PRICE LIST & E-BROCHURE" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers; no MRT/LTA logos, no station name boards, no line-colour bands, no wayfinding signs. Genre: Singapore property paid-social static ad.

### BH-5 — Price/PSF + proof
- **Copy ID used:** BH-5
- **Angle:** Price/PSF + proof
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Premium staged living room interior; proof line in subhead.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "Bagnall Haus, From $1.235M" (red: "From $1.235M") · subhead "Freehold, D16 Bedok. Launch average $2,450 psf — sold units averaging $2,490 psf on over 60% launch-weekend take-up." · CTA "GET PRICE LIST & E-BROCHURE" · label "*IMAGE SAMPLE ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "Bagnall Haus, From $1.235M" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "From $1.235M" in red. Under it, subhead "Freehold, D16 Bedok. Launch average $2,450 psf — sold units averaging $2,490 psf on over 60% launch-weekend take-up." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a photoreal premium staged living room interior of a new freehold condo - pale oak floors, soft grey sofa, sheer curtains, large windows onto tropical greenery, soft daylight from camera-left, 24mm interior lens. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "GET PRICE LIST & E-BROCHURE" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers; render every figure exactly as quoted; no other prices or percentages. Genre: Singapore property paid-social static ad.

## The Collective at One Sophia (CS)
Label on every image: `*IMAGE SAMPLE ONLY*` · CTA: `GET PRICE LIST & E-BROCHURE`

### CS-1 — Direct
- **Copy ID used:** CS-1
- **Angle:** Direct
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Two slender towers on a gentle green hill at the city-centre edge.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "Own a Home at The Collective at One Sophia" (red: "The Collective at One Sophia") · subhead "D9, 1 Sophia Road. 99-year leasehold, studio to 3-bedroom homes from approx. $1.212M." · CTA "GET PRICE LIST & E-BROCHURE" · label "*IMAGE SAMPLE ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "Own a Home at The Collective at One Sophia" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "The Collective at One Sophia" in red. Under it, subhead "D9, 1 Sophia Road. 99-year leasehold, studio to 3-bedroom homes from approx. $1.212M." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a photoreal representative image of two unnamed slender contemporary residential towers on a gentle green hill at the edge of a city centre - tropical trees, a low heritage-style building at the foot of the hill, golden-hour light from camera-right, 35mm lens. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "GET PRICE LIST & E-BROCHURE" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers. Genre: Singapore property paid-social static ad.

### CS-2 — Blind
- **Copy ID used:** CS-2
- **Angle:** Blind
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Prime tree-lined city-centre district, twin towers.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "New Launch Condo in District 9, Orchard" (red: "District 9, Orchard") · subhead "Meet The Collective at One Sophia — 99-year leasehold, studio to 3-bedroom homes from approx. $1.212M." · CTA "GET PRICE LIST & E-BROCHURE" · label "*IMAGE SAMPLE ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "New Launch Condo in District 9, Orchard" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "District 9, Orchard" in red. Under it, subhead "Meet The Collective at One Sophia — 99-year leasehold, studio to 3-bedroom homes from approx. $1.212M." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a photoreal prime city-centre residential district - a tree-lined boulevard, modern twin residential towers, upscale shopping-district towers soft in the background, fresh morning light from camera-left, 35mm lens. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "GET PRICE LIST & E-BROCHURE" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers; no shop signage or lettering on buildings. Genre: Singapore property paid-social static ad.

### CS-3 — Floor layout (studio)
- **Copy ID used:** CS-3
- **Angle:** Floor layout (studio)
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** STUDIO floor-plan line drawing hero + twin-tower exterior render.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "Your First Home at One Sophia, From 431 Sqft" (red: "From 431 Sqft") · subhead "Studio layouts at The Collective at One Sophia — from approx. $1.212M. See the actual floor plan before you decide." · CTA "GET PRICE LIST & E-BROCHURE" · label "*IMAGE SAMPLE ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "Your First Home at One Sophia, From 431 Sqft" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "From 431 Sqft" in red. Under it, subhead "Studio layouts at The Collective at One Sophia — from approx. $1.212M. See the actual floor plan before you decide." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a two-part image: on the left, about 60% of the width, the hero is a clean architectural floor-plan line drawing of a compact STUDIO apartment - one open living and sleeping area with a bed outline and small sofa, a kitchenette along one wall, one bathroom and a small balcony; no separate bedrooms, in crisp thin black and grey lines on white - walls, door swings, windows, kitchen and bathroom fixtures, light furniture outlines - with absolutely no text, numbers, dimensions, room names or compass inside the plan; on the right, about 40% of the width, in a rounded-corner frame, a photoreal exterior render of two unnamed slender contemporary residential towers among tropical trees in clear daylight. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "GET PRICE LIST & E-BROCHURE" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers. Genre: Singapore property paid-social static ad.

### CS-4 — MRT (area framing, no station)
- **Copy ID used:** CS-4
- **Angle:** MRT (area framing, no station)
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Golden-hour prestige shopping boulevard, twin towers nearby. No station.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "A New Launch Steps From Orchard" (red: "Steps From Orchard") · subhead "The Collective at One Sophia — D9, 99-year leasehold, from approx. $1.212M." · CTA "GET PRICE LIST & E-BROCHURE" · label "*IMAGE SAMPLE ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "A New Launch Steps From Orchard" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "Steps From Orchard" in red. Under it, subhead "The Collective at One Sophia — D9, 99-year leasehold, from approx. $1.212M." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a photoreal golden-hour prestige shopping boulevard lined with mature rain trees, elegant shopfronts with no legible signage, twin residential towers in the near distance, warm low sun from camera-left, 35mm lens; no trains, stations or transport signage anywhere. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "GET PRICE LIST & E-BROCHURE" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers; no station names, no walking times, no transport icons, no shop brand names. Genre: Singapore property paid-social static ad.

### CS-5 — Price/PSF
- **Copy ID used:** CS-5
- **Angle:** Price/PSF
- **Format / ratio:** static, 4:5 (1080x1350)
- **Visual direction:** Compact premium staged living space with city-centre view.
- **Product images used:** none on file (`clients/gomedia-homes/inputs/product-images/` is empty) — AI image, labelled `*IMAGE SAMPLE ONLY*`
- **Text on image:** eyebrow "SINGAPORE HOMEBUYER" · headline "The Collective at One Sophia, From Approx. $2,740 PSF" (red: "From Approx. $2,740 PSF") · subhead "Studio to 3-bedroom homes from approx. $1.212M. D9, 99-year leasehold." · CTA "GET PRICE LIST & E-BROCHURE" · label "*IMAGE SAMPLE ONLY*"
- **Generator + est. cost:** gpt-image-2 (text-forward layout), 1k — est. US$0.05–0.25 (unverified, see Cost note)

**Prompt:**

> Portrait 4:5 social media ad, 1080x1350 px, for a Singapore new-launch condo: clean editorial layout, pure white background, black text, one strong red accent (approx. #D0021B), 64 px margins. Top-left: small eyebrow "SINGAPORE HOMEBUYER" in bold red all-caps sans-serif, wide letter-spacing, about 28 px. Below, left-aligned headline "The Collective at One Sophia, From Approx. $2,740 PSF" in heavy black geometric sans-serif, the largest text (about 72-80 px, max 3 lines), with "From Approx. $2,740 PSF" in red. Under it, subhead "Studio to 3-bedroom homes from approx. $1.212M. D9, 99-year leasehold." in regular charcoal sans-serif, about one third of headline size. Middle of the frame, about 50% of the height, full width: a photoreal compact premium staged living space of a new city-centre condo - warm walnut joinery, soft neutral upholstery, a floor-to-ceiling window onto green treetops and city towers, soft daylight from camera-left, 24mm interior lens. Bottom-left corner of the image: small italic white text on a subtle dark translucent strip, "*IMAGE SAMPLE ONLY*". Bottom: full-width solid red CTA banner about 120 px tall, "GET PRICE LIST & E-BROCHURE" centred in bold white all-caps sans-serif with a small white chevron icon, thin white margin below. Look: photoreal, sharp, premium-but-attainable, trustworthy; generous white space; every string crisp, legible at mobile size and rendered exactly once. Avoid: misspelled, warped, duplicated or extra text beyond the quoted strings; logos, watermarks, fake brand marks or developer branding; invented prices, numbers, sizes or distances; real MRT/LTA logos, line colours or station signage; identifiable real landmarks; people in focus; icon rows, footers, QR codes, phone numbers. Genre: Singapore property paid-social static ad.

---

## Flags / needs client confirmation
1. **Keppel Bay Plot 6 name.** The project name is not fully confirmed. Copy uses "Keppel Bay Plot 6" as the main name and "(Keppel Island)" as the secondary one. Confirm before any KB image is made, because the name is rendered into every KB headline/subhead.
2. **Keppel Bay Plot 6 CTA.** "REGISTER YOUR INTEREST" is the copywriter's recommendation and the client has not confirmed it. Also check the stage: copy.md lists TOP ~2027 but no price released. If a price list exists, the CTA and KB-5 both change.
3. **One Leonie Residences CTA.** "REGISTER YOUR INTEREST" is likewise the copywriter's recommendation and not yet client-confirmed.
4. **No real photos or renders on file for any of the 8 projects.** `inputs/product-images/` is empty. Every image will be AI-generated and generic. Official developer renders, floor plans and photos should replace the AI images wherever the client has rights to them (skill: pre-launch exception).
5. **BH-3 is blocked** until the real Bagnall Haus floor plan and a real photo are placed in `clients/gomedia-homes/inputs/product-images/`. The BH-3 prompt only builds the text/layout frame with empty placeholders. Assets are composited in post.
6. **Floor-layout angles with AI plans (OMG-3, AH-3, KB-3, OL-3, HC-3, AR-3, CS-3).** The approved subhead says "See the actual layout/floor plan before you decide", but an AI line drawing is not the actual layout. The sample label softens this but may not fully cover it. Recommendation: use the developer's real floor plans here as for BH-3, or have QA confirm the label is enough.
7. **Label wording vs. building stage.** copy.md assigns "IMAGE SAMPLE ONLY" to OMG, AH, AR, BH and CS. None of those buildings has TOP'd (TOPs 2028–2029). The skill defines "IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY" as the label for a render of a building that does not physically exist yet. The prompts follow copy.md as approved. Recommend the client/QA decide whether every frame showing a building exterior of these 5 projects should switch to the artist's-impression label.
8. **KB-5 "no digit anywhere" vs. approved subhead.** The approved subhead contains "Plot 6", "D04" and "99-year", so a fully digit-free image is impossible with the copy verbatim. The prompt renders the subhead verbatim and bans every other numeral, "$" and "PSF". *Flagged option only, not applied:* a digit-free on-image subhead such as "Be the first to know when pricing opens at Keppel Island." The copywriter/client would have to approve it.
9. **Text-rendering risk on long lines.** Highest risk: HC-5 headline (11 words incl. "$2,500+ PSF" plus the badge), BH-5 subhead (3 figures + %), AR-5 subhead (3 figures), AH-3/AH-5 ("538-1,744 sqft"), KB-5/OL-5 subheads (~20 words). *Flagged option only, not applied:* a shorter on-image HC-5 headline, "Hougang Central Residences — From Around $2,500+ PSF", with the "ANALYST ESTIMATE" badge carrying the "analysts expect" meaning. It would need copywriter/client approval. Preferred fix that leaves the copy alone: live-text overlay in post (see "How to use").
10. **Price disclaimers.** brand.md says "every price/monthly figure needs its assumption disclaimer". copy.md has no disclaimer line, and none was added here, to avoid putting non-approved text on the images. QA should decide whether a "Prices subject to change / from developer price list" line is needed, and the copywriter should supply it.
11. **CEA licence / registration details.** brand.md still has this as a TODO. None is rendered. Confirm before launch.
12. **House colours / logo.** brand.md §7 Visual tokens is still TODO, so the red (#D0021B) is approximate. No GoAhead logo is on file, so none is rendered. Add in post if the client supplies one.
13. **Real-place skylines.** OMG/CS/OL scenes "evoke" Marina South, Orchard etc. but ban identifiable landmarks and other developers' buildings. If the client wants the real Marina Bay skyline, use a licensed photo, not AI.
14. **OMG-6** is the optional higher-risk curiosity angle. It should only run if the client opts in.

## Cost note (ESTIMATE ONLY — not a quote, nothing has been spent)
- Rough per-image estimate at 1k resolution: **~US$0.05–0.25 per image**, depending on model (gpt-image-2 vs nano-banana-pro) and quality tier. This is unverified. Confirm real pricing via `list_image_models` / the provider before any spend.
- One pass of all 41: **~US$2–10**. 40 without OMG-6. BH-3 frame only.
- Text-heavy ads often need 2–3 attempts. Realistic budget: **~US$6–30** for the full set.
- Each generation batch still needs its own stated cost and a go-ahead from the user in chat (CLAUDE.md rule 3), even after this spec is approved.

## Approval
- [ ] Spec approved by user — generation NOT authorised until a separate cost-approved go-ahead.
- Notes:
