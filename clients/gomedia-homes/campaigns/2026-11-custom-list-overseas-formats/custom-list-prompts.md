# GoAhead Custom List of Homes: Image Prompts (9 ads, 9 different looks)

Written 2026-11-07 by static-designer from `copy.md` (rev. 1, Approved) and `creative-spec.md`. **Prompts only.** Nothing has been generated and no paid or API call was made.

## Before you paste: swap the placeholders

Every prompt keeps the price placeholders visible on purpose. Replace them with the client's confirmed figures (brief items 1–4, 6) **before** you generate. Never ship an image with brackets in it.

| Placeholder | What goes in | Used in |
|---|---|---|
| `$[PRICE]` | Cheapest "from" price for that bedroom count (developer price list). Same figure in C1 and C2 | C1-A, C1-B, C1-C, C2-A (3-bed), C2-C (2-bed) |
| `$[PRICE]` (C2-B) | The overall cheapest new-launch entry price this month | C2-B |
| `$[CEILING]` | The "under $X" top of the range the custom list covers | C2-A (3-bed), C2-B (4-bed), C2-C (2-bed) |
| `$[MONTHLY]` | Monthly figure, with its basis confirmed | C3-A, C3-B, C3-C |
| `$[UNIT PRICE]`, `[STAGE]`, `[TENURE]`, `[RATE]`, `[LTV]` | The monthly figure's basis (C3 disclaimer) | C3-A, C3-B, C3-C |
| `[DATE]` | Date of the price lists | Every ad with a price |
| `[N]`, `[MONTH]` | Bedroom count of the cheapest unit, and the month | C2-B |
| `[CEA LINE]` | CEA licence/registration line. **Delete the quoted string** if the client says it isn't required | Every ad |

If the ~$1.6M price cap applies to this list: delete the 4-bedder ladder line everywhere, skip C1-B card 5, and drop the C2-B support line.

## Deviation for you to approve: single-photo ads

The house rule is "real interior photo collage feel, never a single hero shot alone". **C2-A (night skyline), C2-B (golden-hour interior) and C3-B (family living room) break it on purpose.** Each copies an overseas reference layout under test (ref-05 dual anchor, ref-01 giant number), and those layouts only work with one full-bleed photo. Approve this when you tick the box in `creative-spec.md`. If you'd rather stay on-rule, say so and I'll add a small 2-photo inset collage to these three as well. **C2-C and C3-A are now on-rule:** each has a small 2-photo inset collage.

**C1-B card 1** has no photo, so it carries no image label (performance ruling). This holds only while it stays a plain colour-and-text card. If any photo, render or photoreal texture is added, the "IMAGE SAMPLE ONLY – not the actual unit" label comes back. Its price fine print and `[CEA LINE]` stay.

## How to use these prompts
- **Generator:** `gpt-image-2`. It handles designed, text-heavy layouts best.
- **Full prompt (with text):** use it for layout mock-ups and quick looks. Image models misspell small text, so never publish fine print rendered by the model.
- **Image-only prompt (recommended for the final files):** it generates the photo and background with empty text zones. Then set every quoted string in Canva/Figma in the listed hex, and proof each character against `copy.md`.
- **Sizes:**
  - 9:16 = 1080x1920. The top 270 px and bottom 385 px stay free of text (Meta Story/Reels UI).
  - 4:5 = 1080x1350.
- **Imagery:** every image is a generic AI sample. No real project, no landmark, no logo, no faces.
- **Logo:** if you want a GoAhead logo, add it in Canva. Never ask the model to draw it.

## Design at a glance

| Ad | Angle · hook | Reference layout | Palette | Image | Type | CTA |
|---|---|---|---|---|---|---|
| **C1-A** | 1-min custom list · speed | ref-04 story, tilted cards | Sky-blue gradient, blue tab, black chips (blue variant) | 4 daylight interiors on tilted cards | Heavy condensed caps | White pill, blue arrow icon |
| **C1-B** | 1-min custom list · HDB upgraders | ref-06 carousel, 5 cards | Solid GoAhead red card 1; white tier cards with red | Card 1 no photo; 2-photo interior collage per tier | Geometric sans black | Red / white full-width bar |
| **C1-C** | 1-min custom list · pain | ref-02 cream card + seal + ribbon | Cream, espresso, gold highlight, red seal | Morning interiors with garden views | Soft serif headline | Red pill with circled arrow |
| **C2-A** | Price range · ceiling + floor | ref-05 dual anchor | Navy night, electric-blue accent (blue variant) | Generic waterfront skyline at night | White heavy caps | White capsule |
| **C2-B** | Price range · entry price | ref-01 giant number | Golden hour, espresso, deep red number | Living room with city view | Didone serif numerals | Red text link + arrow |
| **C2-C** | Price range · before the showflat | ref-03 price box + ticks | Charcoal + coral-red | Dusk living room + small bedroom inset (2-photo), top 40% | Heavy grotesk | Solid coral rectangle |
| **C3-A** | Monthly · explainer | ref-03, light version | White + blush + GoAhead red | Bright kitchen + small dining-nook inset (2-photo) | Rounded sans | Red pill |
| **C3-B** | Monthly · surprise number | ref-01 giant number, centred | Sunny photo, white card, red number, navy | Family from behind, sunny living room | Soft serif number | Navy pill |
| **C3-C** | Monthly · budget-first | ref-04 story, red version | Deep red gradient, white type | 3 fanned evening interiors | Ultra-condensed caps | White pill, red text |

---

# C1 — "Your custom list of homes in 1 minute"

## C1-A · Speed promise · ref-04 story layout (blue variant, day)
- **Hook:** "YOUR CUSTOM LIST OF HOMES IN 1 MINUTE"
- **Look:** airy sky-blue gradient, black condensed caps, black chips, a blue tab with a small 4-line ladder, daylight interior cards in a gently tilted row.
- **Meta button:** Sign up

### C1-A · 9:16 full prompt
```text
Vertical 9:16 Instagram/Facebook Story ad, 1080x1920 px, for a Singapore new-launch condo buyer service. Background: a smooth, airy vertical gradient from very pale sky blue (#EAF6FD) at the top to soft sky blue (#BFE3F7) at the bottom, clean, no texture.
Story safe zones: the top 14% (0–270 px) and the bottom 20% (1535–1920 px) hold no text, chips, boxes or buttons, only the gradient.
Headline, left-aligned at 64 px margin, starting just below 270 px, heavy condensed grotesk sans, black (#111111), all caps, 2 lines, about 92 px: "YOUR CUSTOM LIST OF HOMES IN 1 MINUTE".
Subhead below it, regular sans, dark grey (#2B2B2B), about 34 px: "Singapore new launch condos that fit your budget and bedrooms".
Two black (#0E0E0E) pill chips side by side, white medium sans text about 28 px, each with a small sky-blue dot on the left: "Free custom list" and "Developer price lists".
Below the chips, a solid blue (#1FA2E1) rectangular tab with one clipped top-right corner, left-aligned, about 60% of the width, holding a 4-line list in white medium sans about 30 px, clearly smaller than the headline: "1-bedder from $[PRICE]" / "2-bedder from $[PRICE]" / "3-bedder from $[PRICE]" / "4-bedder from $[PRICE]".
Middle-lower area (about 46–70% of height): four portrait photo cards with 24 px rounded corners and soft drop shadows, in a gently tilted row (outer cards rotated about 6 degrees outward, inner cards upright and slightly larger), each a photoreal, bright daylight Singapore new-launch condo interior: 1) a compact living room with a bed nook behind a slatted screen, 2) a living room opening onto a balcony with tropical greenery, 3) a family dining table under a pendant light, 4) a spacious living room with a double-height window. Each card has a small white rounded tag at its bottom-left with black text: "1-bedder", "2-bedder", "3-bedder", "4-bedder".
Under the cards, small dark grey sans about 26 px, centred: "3 questions, about 1 minute. Your list is sent on WhatsApp."
Then fine print in small grey italic sans about 18 px, centred, 3 short lines: "*Prices from developer price lists as at [DATE]. Subject to availability and change. Excludes stamp duties." / "IMAGE SAMPLE ONLY – not the actual unit" / "[CEA LINE]".
CTA just above the bottom safe line, centred: a white rounded pill with a soft shadow, a small blue chain-link arrow icon on the left and bold black sans text about 34 px: "GET MY CUSTOM LIST".
Look: clean, bright, optimistic, premium-but-attainable, like a modern property catalogue. Every quoted string crisp, legible on a phone and rendered exactly once.
Avoid: any project, developer or brand name, logo, signage or lettering on buildings, walls or objects; recognisable landmarks; people or faces; any text beyond the quoted strings; misspelled, warped or duplicated text; savings, discount, gift or "sold" badges; unit counts, district codes, street names; watermarks, QR codes, phone numbers.
```

### C1-A · 4:5 full prompt
```text
Portrait 4:5 Facebook/Instagram feed ad, 1080x1350 px, for a Singapore new-launch condo buyer service. Background: a smooth vertical gradient from very pale sky blue (#EAF6FD) to soft sky blue (#BFE3F7), clean. 56 px outer margins; keep the top-right 120x120 px corner empty.
Top-left: headline in heavy condensed grotesk sans, black (#111111), all caps, 2 lines, about 76 px: "YOUR CUSTOM LIST OF HOMES IN 1 MINUTE".
Below: regular sans, dark grey, about 30 px: "Singapore new launches that fit your budget".
Two black pill chips with a small sky-blue dot and white text about 24 px: "Free custom list" and "Developer price lists".
Left side, below the chips: a solid blue (#1FA2E1) tab with one clipped corner, about 48% of the width, holding 4 lines in white medium sans about 26 px, smaller than the headline: "1-bedder from $[PRICE]" / "2-bedder from $[PRICE]" / "3-bedder from $[PRICE]" / "4-bedder from $[PRICE]".
Lower half: three portrait photo cards with 22 px rounded corners and soft shadows, gently tilted (left card -6 degrees, centre upright and larger, right card +6 degrees), photoreal bright daylight Singapore new-launch condo interiors: a living room opening onto a green balcony, a family dining table under a pendant light, a spacious living room with a double-height window. Small white rounded tags on the cards: "2-bedder", "3-bedder", "4-bedder".
Bottom-left: fine print, small grey italic sans at least 18 px: "*Prices from developer price lists as at [DATE]. Subject to availability and change. Excludes stamp duties." / "IMAGE SAMPLE ONLY – not the actual unit" / "[CEA LINE]".
Bottom-right: a white rounded pill with a small blue chain-link arrow icon and bold black text about 30 px: "GET MY CUSTOM LIST".
Look: clean, bright, modern property catalogue. Every quoted string crisp and rendered exactly once.
Avoid: any project, developer or brand name, logo, signage or lettering; recognisable landmarks; people or faces; any text beyond the quoted strings; misspelled, warped or duplicated text; savings, discount, gift or "sold" badges; unit counts, district codes, street names; watermarks, QR codes, phone numbers.
```

### C1-A · Image-only (both sizes)
```text
[9:16, 1080x1920 | or 4:5, 1080x1350] Image with no text of any kind. Smooth vertical gradient from very pale sky blue (#EAF6FD) to soft sky blue (#BFE3F7). The upper half is completely empty gradient, kept clear for a headline, chips and a price tab. In the lower-middle (9:16: 46–70% of height; 4:5: 50–85%), a gently tilted row of [9:16: four | 4:5: three] portrait photo cards with 24 px rounded corners and soft drop shadows, each a photoreal bright daylight Singapore new-launch condo interior (compact living room with bed nook / living room onto a green balcony / family dining table / spacious double-height living room). The rest of the frame is empty gradient. No people, no logos, no signage, no lettering anywhere.
```

---

## C1-B · Identity call-out · ref-06 carousel (GoAhead red, 5 cards)
- **Hook:** "FOR HDB UPGRADERS: YOUR CUSTOM LIST OF HOMES IN 1 MINUTE"
- **Look:**
  - Card 1 has no photo: a solid red, text-led card.
  - Cards 2–5 are white with a 2-photo interior collage. Type order from the top: promise line, tier headline (largest), price (smaller), CTA. The same grid on every card, so the swipe reads as one set.
- **Meta button:** Download
- **Upload as:** two carousels, a feed set (4:5) and a story set (9:16).

### C1-B · Card 1 · 9:16 (story set)
```text
Vertical 9:16 Story carousel card, 1080x1920 px. Full-bleed solid GoAhead red (#D0021B) with a very subtle darker red radial vignette at the edges. No photo.
Story safe zones: 0–270 px and 1535–1920 px hold no text or graphics, only red.
Starting just below 270 px, left-aligned at 72 px margin, a headline in geometric sans (Montserrat Black style), white, about 88 px, 4–5 lines: "FOR HDB UPGRADERS: YOUR CUSTOM LIST OF HOMES IN 1 MINUTE".
Below, white regular geometric sans about 36 px: "Only the new launches that fit your budget and bedrooms".
Two white-outline pill chips (2 px white border, transparent fill, white text about 28 px): "Free custom list" and "Sent on WhatsApp".
Lower area (about 56–70% of height): a white rounded rectangle strip, full width minus margins, holding 4 lines in dark charcoal (#1A1A1A) medium sans about 30 px, with the bedroom part in bold red: "1-bedder from $[PRICE]" / "2-bedder from $[PRICE]" / "3-bedder from $[PRICE]" / "4-bedder from $[PRICE]".
Below the strip: tiny white sans fine print about 18 px: "*Prices from developer price lists as at [DATE]. Subject to availability and change. Excludes stamp duties." / "[CEA LINE]".
Just above the bottom safe line: a full-width white rectangular bar with 12 px rounded corners and bold red (#D0021B) text about 36 px: "DOWNLOAD LIST", with a small red right arrow.
A small white swipe hint arrow at the right edge, mid-height.
Look: bold, confident, plain and direct, a poster you can't scroll past. Every quoted string crisp, rendered exactly once.
Avoid: photos, people, buildings; any brand, developer or project name or logo; any text beyond the quoted strings; misspelled, warped or duplicated text; savings or discount badges; unit counts, district codes; watermarks, QR codes, phone numbers.
```

### C1-B · Card 1 · 4:5 (feed set)
```text
Portrait 4:5 feed carousel card, 1080x1350 px. Full-bleed solid GoAhead red (#D0021B) with a subtle darker red vignette. No photo. 64 px margins.
Top-left headline in geometric sans (Montserrat Black style), white, about 80 px, 4 lines: "HDB UPGRADERS: CUSTOM LIST OF HOMES IN 1 MINUTE".
Below, white regular sans about 32 px: "Only the new launches that fit your budget and bedrooms".
Two white-outline pill chips with white text about 26 px: "Free custom list" and "Sent on WhatsApp".
A white rounded strip holding 2 lines in charcoal medium sans about 28 px, bedroom part in bold red: "1-bedder from $[PRICE]" / "2-bedder from $[PRICE]".
Tiny white fine print at least 18 px: "*Prices from developer price lists as at [DATE]. Subject to availability and change. Excludes stamp duties." / "[CEA LINE]".
Bottom: a full-width white bar with rounded corners and bold red text about 34 px: "DOWNLOAD LIST" with a small red arrow. A small white swipe arrow at the right edge.
Look: bold, plain, poster-like. Every quoted string rendered exactly once.
Avoid: photos, people, buildings; any brand, developer or project name or logo; extra, misspelled or duplicated text; savings or discount badges; unit counts; watermarks, QR codes, phone numbers.
```

### C1-B · Cards 2–5 · 9:16 (story set)
Each prompt below is complete. Only the tier, the price line and the photos change.

**Card 2 (1-bedder)**
```text
Vertical 9:16 Story carousel card, 1080x1920 px. White (#FFFFFF) background. Story safe zones: 0–270 px and 1535–1920 px hold no text or graphics.
Just below 270 px: a thin red line of text, geometric sans semibold, GoAhead red (#D0021B), all caps, wide letter-spacing, about 30 px, with a short red rule under it: "CUSTOM LIST OF HOMES IN 1 MINUTE".
From about 22% to 55% of height: a 2-photo collage with a 12 px white gutter and 20 px rounded corners: a tall photo on the left (60% width) and a square photo on the right, both photoreal bright daylight Singapore new-launch condo interiors for a 1-bedroom home: a compact, cosy living room with a sofa and a bed nook behind a slatted timber screen, and a small modern kitchen with a breakfast counter.
Below the collage, the largest text on the card, geometric sans black (Montserrat Black style), black (#111111), about 92 px, 2 lines: "1-BEDDER NEW LAUNCHES".
Under it, clearly smaller (about 44 px), medium sans in GoAhead red: "from $[PRICE]".
Fine print, small grey italic sans about 18 px: "*Prices from developer price lists as at [DATE]. Subject to availability and change. Excludes stamp duties." / "IMAGE SAMPLE ONLY – not the actual unit" / "[CEA LINE]".
Just above the bottom safe line: a full-width GoAhead red (#D0021B) bar with 12 px rounded corners and bold white text about 36 px: "DOWNLOAD LIST" with a small white arrow.
Look: clean, airy, catalogue-like. Every quoted string crisp, rendered exactly once.
Avoid: people or faces; any project, developer or brand name, logo or signage; recognisable landmarks; any text beyond the quoted strings; misspelled, warped or duplicated text; savings, discount or "sold" badges; unit counts, district codes; watermarks, QR codes, phone numbers.
```

**Card 3 (2-bedder)**
```text
Vertical 9:16 Story carousel card, 1080x1920 px. White background. Story safe zones: 0–270 px and 1535–1920 px hold no text or graphics.
Just below 270 px: thin red geometric sans semibold, GoAhead red (#D0021B), all caps, wide letter-spacing, about 30 px, with a short red rule under it: "CUSTOM LIST OF HOMES IN 1 MINUTE".
From about 22% to 55% of height: a 2-photo collage with a 12 px white gutter and 20 px rounded corners: tall photo left, square photo right, both photoreal bright daylight Singapore new-launch condo interiors for a 2-bedroom home: a living room opening onto a balcony with tropical plants, and a second bedroom set up as a calm study with a desk by the window.
Below, the largest text, geometric sans black, black (#111111), about 92 px, 2 lines: "2-BEDDER NEW LAUNCHES".
Under it, smaller (about 44 px), medium sans in GoAhead red: "from $[PRICE]".
Fine print, small grey italic sans about 18 px: "*Prices from developer price lists as at [DATE]. Subject to availability and change. Excludes stamp duties." / "IMAGE SAMPLE ONLY – not the actual unit" / "[CEA LINE]".
Just above the bottom safe line: a full-width GoAhead red bar with rounded corners and bold white text about 36 px: "DOWNLOAD LIST" with a small white arrow.
Look: clean, airy, catalogue-like. Every quoted string rendered exactly once.
Avoid: people or faces; any project, developer or brand name, logo or signage; landmarks; extra, misspelled or duplicated text; savings, discount or "sold" badges; unit counts, district codes; watermarks, QR codes, phone numbers.
```

**Card 4 (3-bedder)**
```text
Vertical 9:16 Story carousel card, 1080x1920 px. White background. Story safe zones: 0–270 px and 1535–1920 px hold no text or graphics.
Just below 270 px: thin red geometric sans semibold, GoAhead red (#D0021B), all caps, wide letter-spacing, about 30 px, with a short red rule under it: "CUSTOM LIST OF HOMES IN 1 MINUTE".
From about 22% to 55% of height: a 2-photo collage with a 12 px white gutter and 20 px rounded corners: tall photo left, square photo right, both photoreal bright daylight Singapore new-launch condo interiors for a 3-bedroom family home: a family dining area with a six-seat timber table under a pendant light, and a cheerful children's bedroom with a single bed and a reading corner.
Below, the largest text, geometric sans black, black, about 92 px, 2 lines: "3-BEDDER NEW LAUNCHES".
Under it, smaller (about 44 px), medium sans in GoAhead red: "from $[PRICE]".
Fine print, small grey italic sans about 18 px: "*Prices from developer price lists as at [DATE]. Subject to availability and change. Excludes stamp duties." / "IMAGE SAMPLE ONLY – not the actual unit" / "[CEA LINE]".
Just above the bottom safe line: a full-width GoAhead red bar with rounded corners and bold white text about 36 px: "DOWNLOAD LIST" with a small white arrow.
Look: clean, airy, catalogue-like. Every quoted string rendered exactly once.
Avoid: people or faces; any project, developer or brand name, logo or signage; landmarks; extra, misspelled or duplicated text; savings, discount or "sold" badges; unit counts, district codes; watermarks, QR codes, phone numbers.
```

**Card 5 (4-bedder, skip if the price cap applies)**
```text
Vertical 9:16 Story carousel card, 1080x1920 px. White background. Story safe zones: 0–270 px and 1535–1920 px hold no text or graphics.
Just below 270 px: thin red geometric sans semibold, GoAhead red (#D0021B), all caps, wide letter-spacing, about 30 px, with a short red rule under it: "CUSTOM LIST OF HOMES IN 1 MINUTE".
From about 22% to 55% of height: a 2-photo collage with a 12 px white gutter and 20 px rounded corners: tall photo left, square photo right, both photoreal bright daylight Singapore new-launch condo interiors for a large 4-bedroom home: a spacious living room with a long sectional sofa and floor-to-ceiling windows onto greenery, and a serene master bedroom with a king bed and a walk-in wardrobe glimpse.
Below, the largest text, geometric sans black, black, about 92 px, 2 lines: "4-BEDDER NEW LAUNCHES".
Under it, smaller (about 44 px), medium sans in GoAhead red: "from $[PRICE]".
Fine print, small grey italic sans about 18 px: "*Prices from developer price lists as at [DATE]. Subject to availability and change. Excludes stamp duties." / "IMAGE SAMPLE ONLY – not the actual unit" / "[CEA LINE]".
Just above the bottom safe line: a full-width GoAhead red bar with rounded corners and bold white text about 36 px: "DOWNLOAD LIST" with a small white arrow.
Look: clean, airy, catalogue-like. Every quoted string rendered exactly once.
Avoid: people or faces; any project, developer or brand name, logo or signage; landmarks; extra, misspelled or duplicated text; savings, discount or "sold" badges; unit counts, district codes; watermarks, QR codes, phone numbers.
```

### C1-B · Cards 2–5 · 4:5 (feed set)

**Card 2 (1-bedder)**
```text
Portrait 4:5 feed carousel card, 1080x1350 px. White background, 56 px margins.
Top: thin red geometric sans semibold, GoAhead red (#D0021B), all caps, wide letter-spacing, about 28 px, with a short red rule under it: "CUSTOM LIST OF HOMES IN 1 MINUTE".
From about 9% to 55% of height: a 2-photo collage with a 12 px white gutter and 20 px rounded corners, tall photo left and square photo right, photoreal bright daylight Singapore new-launch condo interiors for a 1-bedroom home: a cosy living room with a bed nook behind a slatted timber screen, and a small modern kitchen with a breakfast counter.
Below, the largest text, geometric sans black, black (#111111), about 80 px, 2 lines: "1-BEDDER NEW LAUNCHES".
Under it, smaller (about 40 px), medium sans in GoAhead red: "from $[PRICE]".
Fine print, small grey italic sans at least 18 px: "*Prices from developer price lists as at [DATE]. Subject to availability and change. Excludes stamp duties." / "IMAGE SAMPLE ONLY – not the actual unit" / "[CEA LINE]".
Bottom: a full-width GoAhead red bar with rounded corners and bold white text about 32 px: "DOWNLOAD LIST" with a small white arrow.
Every quoted string rendered exactly once.
Avoid: people or faces; any project, developer or brand name, logo or signage; landmarks; extra, misspelled or duplicated text; savings, discount or "sold" badges; unit counts, district codes; watermarks, QR codes, phone numbers.
```

**Card 3 (2-bedder)**
```text
Portrait 4:5 feed carousel card, 1080x1350 px. White background, 56 px margins.
Top: thin red geometric sans semibold, GoAhead red (#D0021B), all caps, wide letter-spacing, about 28 px, with a short red rule under it: "CUSTOM LIST OF HOMES IN 1 MINUTE".
From about 9% to 55% of height: a 2-photo collage with a 12 px white gutter and 20 px rounded corners, tall photo left and square photo right, photoreal bright daylight Singapore new-launch condo interiors for a 2-bedroom home: a living room opening onto a balcony with tropical plants, and a second bedroom set up as a calm study.
Below, the largest text, geometric sans black, black, about 80 px, 2 lines: "2-BEDDER NEW LAUNCHES".
Under it, smaller (about 40 px), medium sans in GoAhead red: "from $[PRICE]".
Fine print, small grey italic sans at least 18 px: "*Prices from developer price lists as at [DATE]. Subject to availability and change. Excludes stamp duties." / "IMAGE SAMPLE ONLY – not the actual unit" / "[CEA LINE]".
Bottom: a full-width GoAhead red bar with rounded corners and bold white text about 32 px: "DOWNLOAD LIST" with a small white arrow.
Every quoted string rendered exactly once.
Avoid: people or faces; any project, developer or brand name, logo or signage; landmarks; extra, misspelled or duplicated text; savings, discount or "sold" badges; unit counts, district codes; watermarks, QR codes, phone numbers.
```

**Card 4 (3-bedder)**
```text
Portrait 4:5 feed carousel card, 1080x1350 px. White background, 56 px margins.
Top: thin red geometric sans semibold, GoAhead red (#D0021B), all caps, wide letter-spacing, about 28 px, with a short red rule under it: "CUSTOM LIST OF HOMES IN 1 MINUTE".
From about 9% to 55% of height: a 2-photo collage with a 12 px white gutter and 20 px rounded corners, tall photo left and square photo right, photoreal bright daylight Singapore new-launch condo interiors for a 3-bedroom family home: a family dining area with a six-seat timber table under a pendant light, and a cheerful children's bedroom with a reading corner.
Below, the largest text, geometric sans black, black, about 80 px, 2 lines: "3-BEDDER NEW LAUNCHES".
Under it, smaller (about 40 px), medium sans in GoAhead red: "from $[PRICE]".
Fine print, small grey italic sans at least 18 px: "*Prices from developer price lists as at [DATE]. Subject to availability and change. Excludes stamp duties." / "IMAGE SAMPLE ONLY – not the actual unit" / "[CEA LINE]".
Bottom: a full-width GoAhead red bar with rounded corners and bold white text about 32 px: "DOWNLOAD LIST" with a small white arrow.
Every quoted string rendered exactly once.
Avoid: people or faces; any project, developer or brand name, logo or signage; landmarks; extra, misspelled or duplicated text; savings, discount or "sold" badges; unit counts, district codes; watermarks, QR codes, phone numbers.
```

**Card 5 (4-bedder, skip if the price cap applies)**
```text
Portrait 4:5 feed carousel card, 1080x1350 px. White background, 56 px margins.
Top: thin red geometric sans semibold, GoAhead red (#D0021B), all caps, wide letter-spacing, about 28 px, with a short red rule under it: "CUSTOM LIST OF HOMES IN 1 MINUTE".
From about 9% to 55% of height: a 2-photo collage with a 12 px white gutter and 20 px rounded corners, tall photo left and square photo right, photoreal bright daylight Singapore new-launch condo interiors for a large 4-bedroom home: a spacious living room with a long sectional sofa and floor-to-ceiling windows onto greenery, and a serene master bedroom with a king bed.
Below, the largest text, geometric sans black, black, about 80 px, 2 lines: "4-BEDDER NEW LAUNCHES".
Under it, smaller (about 40 px), medium sans in GoAhead red: "from $[PRICE]".
Fine print, small grey italic sans at least 18 px: "*Prices from developer price lists as at [DATE]. Subject to availability and change. Excludes stamp duties." / "IMAGE SAMPLE ONLY – not the actual unit" / "[CEA LINE]".
Bottom: a full-width GoAhead red bar with rounded corners and bold white text about 32 px: "DOWNLOAD LIST" with a small white arrow.
Every quoted string rendered exactly once.
Avoid: people or faces; any project, developer or brand name, logo or signage; landmarks; extra, misspelled or duplicated text; savings, discount or "sold" badges; unit counts, district codes; watermarks, QR codes, phone numbers.
```

### C1-B · Image-only
- Card 1 needs no generation. Build it in Canva: solid #D0021B, then add the text, chips, strip and bar.
- For cards 2–5, generate just the two collage photos per tier with the prompt below, then assemble each card in Canva on white.
```text
[Tall photo: 3:4 | square photo: 1:1] Photoreal bright daylight interior of a Singapore new-launch condo, no text, no people, no logos or signage. [1-bedder: cosy living room with a bed nook behind a slatted timber screen | small modern kitchen with breakfast counter] [2-bedder: living room onto a balcony with tropical plants | second bedroom as a calm study] [3-bedder: family dining with six-seat timber table under a pendant | children's bedroom with reading corner] [4-bedder: spacious living room with long sectional and floor-to-ceiling windows onto greenery | serene master bedroom with king bed]. Soft natural light, light oak and warm white palette, 24mm interior lens, staged and uncluttered.
```

---

## C1-C · Pain · ref-02 cream info card + seal (warm morning)
- **Hook:** "TOO MANY LAUNCHES TO CHECK" (ribbon), then "Get your custom list of homes in 1 minute"
- **Look:** a soft brochure feel. Cream rounded card, warm soft serif, "1 minute" in gold, red round seal, gold ribbon, morning interiors looking onto tropical greenery.
- **Meta button:** Sign up

### C1-C · 9:16 full prompt
```text
Vertical 9:16 Story ad, 1080x1920 px, for a Singapore new-launch condo buyer service. Background: a two-photo collage of photoreal soft-morning Singapore new-launch condo interiors: the top third is a bright living room with sheer curtains and floor-to-ceiling windows onto lush tropical trees; the bottom third is a calm bedroom with a garden view. Warm, soft, natural light.
Story safe zones: 0–270 px and 1535–1920 px contain photo only, no text, ribbons, seals or buttons.
Just below 270 px at the left edge: a gold ribbon banner (#E2C27A) with a notched right end, dark espresso (#2B2420) bold all-caps sans about 30 px: "TOO MANY LAUNCHES TO CHECK".
Centred, from about 22% to 76% of height, full width minus 64 px margins: a cream (#FBF5E9) card with 28 px rounded corners and a soft shadow. At its top-right corner, overlapping the edge, a round GoAhead red (#D0021B) seal about 210 px wide with a thin inner gold ring and white bold all-caps text in 3 lines: "FREE CUSTOM LIST".
Inside the card, top-left: headline in a warm soft serif (Fraunces/Recoleta style), espresso (#2B2420), about 70 px, 3 lines: "Get your custom list of homes in 1 minute", with the words "1 minute" in gold (#C9962B).
Below, humanist sans about 30 px, espresso: "Only the new launches that fit your budget, not every launch on the market".
A thin dotted gold divider, then three bullet rows, each with a small gold line icon (question bubble, chat bubble, document), sans about 28 px: "3 questions: bedrooms, budget, agent or not" / "Sent to you on WhatsApp" / "Developer price lists and floor plans".
Another dotted divider, then 4 lines in sans about 28 px with the bedroom count in bold red (#D0021B): "1-bedder from $[PRICE]" / "2-bedder from $[PRICE]" / "3-bedder from $[PRICE]" / "4-bedder from $[PRICE]".
Inside the bottom of the card: a GoAhead red pill button with a white circled arrow on the left and bold white all-caps text about 32 px: "GET MY CUSTOM LIST".
Under the card, on a soft white translucent strip, tiny grey italic sans about 18 px: "*Prices from developer price lists as at [DATE]. Subject to availability and change. Excludes stamp duties." / "IMAGE SAMPLE ONLY – not the actual unit" / "[CEA LINE]".
Look: calm, warm, reassuring, like a premium brochure page. Every quoted string crisp and rendered exactly once.
Avoid: people or faces; any project, developer or brand name, logo, signage or lettering on objects; recognisable landmarks; any text beyond the quoted strings; misspelled, warped or duplicated text; savings, stamp-duty, discount, gift or "sold" seals or badges; unit counts, district codes, street names; watermarks, QR codes, phone numbers.
```

### C1-C · 4:5 full prompt
```text
Portrait 4:5 feed ad, 1080x1350 px. Full-bleed photoreal soft-morning Singapore new-launch condo living room with floor-to-ceiling windows onto lush tropical trees and a balcony with plants, light oak floor, linen sofa, warm natural light; the right 45% of the frame shows the photo clearly.
Top-left edge: a gold ribbon banner (#E2C27A) with a notched end, espresso (#2B2420) bold all-caps sans about 28 px: "TOO MANY LAUNCHES TO CHECK".
Left side, about 55% of the width, from about 12% to 92% of height: a cream (#FBF5E9) card with 26 px rounded corners and a soft shadow. A round GoAhead red (#D0021B) seal about 180 px wide with a thin gold inner ring overlaps the card's top-right corner, white bold all-caps text: "FREE CUSTOM LIST".
Inside the card: headline in warm soft serif (Fraunces/Recoleta style), espresso, about 58 px: "Get your custom list of homes in 1 minute", with "1 minute" in gold (#C9962B).
Humanist sans about 26 px: "Only the new launches in your budget".
Two bullet rows with small gold line icons, sans about 24 px: "3 questions: bedrooms, budget, agent or not" / "Sent to you on WhatsApp".
A dotted gold divider, then 4 lines, sans about 24 px, bedroom count in bold red: "1-bedder from $[PRICE]" / "2-bedder from $[PRICE]" / "3-bedder from $[PRICE]" / "4-bedder from $[PRICE]".
A GoAhead red pill with a white circled arrow and bold white text about 28 px: "GET MY CUSTOM LIST".
Inside the card bottom, tiny grey italic sans at least 18 px: "*Prices from developer price lists as at [DATE]. Subject to availability and change. Excludes stamp duties." / "IMAGE SAMPLE ONLY – not the actual unit" / "[CEA LINE]".
Look: calm, warm, premium brochure. Every quoted string rendered exactly once.
Avoid: people or faces; any project, developer or brand name, logo or signage; landmarks; extra, misspelled or duplicated text; savings, stamp-duty, discount or "sold" seals; unit counts, district codes, street names; watermarks, QR codes, phone numbers.
```

### C1-C · Image-only (both sizes)
```text
[9:16, 1080x1920 | 4:5, 1080x1350] Photoreal soft-morning Singapore new-launch condo interiors, no text of any kind, no people, no logos. [9:16: a living room with sheer curtains and floor-to-ceiling windows onto lush tropical trees fills the top 35%, a calm bedroom with a garden view fills the bottom 35%; the middle band 22–76% is a soft, low-detail blurred continuation of the room, kept clear for a large card.] [4:5: one full-bleed living room onto a green balcony, with the left 55% softly defocused and low in detail for a card overlay; the right 45% sharp.] Warm natural light, light oak, linen and cream tones.
```

---

# C2 — "Know the real range first"

## C2-A · Price ceiling + floor · ref-05 dual anchor (blue variant, night)
- **Hook:** "NEW LAUNCH 3-BEDDERS UNDER $[CEILING]"
- **Look:** deep navy night sky over a generic tropical waterfront skyline. White heavy caps with the ceiling in electric blue, a solid blue floor box, no chips.
- **Meta button:** Download

### C2-A · 9:16 full prompt
```text
Vertical 9:16 Story ad, 1080x1920 px. Background: a photoreal deep navy night scene (#0A1A3F at the top to #132C6B), with a generic modern tropical-city waterfront skyline across the lower-middle: slim lit residential towers with balconies, a few palms along a promenade, warm and cool window lights reflected on calm water, a faint flowing blue light wave in the foreground. No recognisable landmark, no famous building, no signage.
Story safe zones: 0–270 px and 1535–1920 px hold no text, boxes or buttons, only the scene.
Left-aligned at 64 px margin, from about 26% to 42% of height: a headline in heavy sans, all caps, 3 lines, about 96 px: "NEW LAUNCH 3-BEDDERS UNDER $[CEILING]", with "NEW LAUNCH 3-BEDDERS" in white and "UNDER $[CEILING]" in bright electric blue (#2FA8FF).
Below, white medium sans about 34 px, 2 lines: "Singapore new launch condos, from developer price lists".
From about 52% to 62% of height, left-aligned: a solid blue (#1F8FE0) rectangle holding white bold text about 80 px, with a small white "FROM" above the figure: "FROM $[PRICE]".
Lower area, over the water reflection on a soft dark gradient: tiny white sans fine print about 18 px: "*Prices from developer price lists as at [DATE]. Subject to availability and change. Excludes stamp duties." / "IMAGE SAMPLE ONLY – not the actual development" / "[CEA LINE]".
Just above the bottom safe line, centred: a white rounded capsule button, bold navy (#0A1A3F) text about 34 px: "DOWNLOAD LIST".
Look: premium, cinematic, confident, high contrast. Every quoted string crisp and rendered exactly once.
Avoid: recognisable landmarks or famous towers; any project, developer or brand name, logo or signage on buildings; people; any text beyond the quoted strings; misspelled, warped or duplicated text; "investment", rental or savings claims; unit counts, district codes; watermarks, QR codes, phone numbers.
```

### C2-A · 4:5 full prompt
```text
Portrait 4:5 feed ad, 1080x1350 px. Photoreal deep navy night scene (#0A1A3F to #132C6B) with a generic modern tropical-city waterfront skyline filling the right 55% and lower third: slim lit residential towers, palms on a promenade, lights reflected on calm water, a faint blue light wave in the foreground. No recognisable landmark, no signage. 56 px margins.
Top-left, 2 lines, heavy sans all caps about 78 px: "NEW LAUNCH 3-BEDDERS UNDER $[CEILING]", with "NEW LAUNCH 3-BEDDERS" in white and "UNDER $[CEILING]" in electric blue (#2FA8FF).
Below, white medium sans about 30 px: "Singapore new launch condos, from developer price lists".
Bottom-left: a solid blue (#1F8FE0) box with white bold text about 70 px: "FROM $[PRICE]".
Under the box, tiny white sans at least 18 px: "*Prices from developer price lists as at [DATE]. Subject to availability and change. Excludes stamp duties." / "IMAGE SAMPLE ONLY – not the actual development" / "[CEA LINE]".
Bottom-right: a white capsule button, bold navy text about 30 px: "DOWNLOAD LIST".
Look: premium, cinematic, high contrast. Every quoted string rendered exactly once.
Avoid: recognisable landmarks; any name, logo or signage on buildings; people; extra, misspelled or duplicated text; investment, rental or savings claims; unit counts, district codes; watermarks, QR codes, phone numbers.
```

### C2-A · Image-only (both sizes)
```text
[9:16, 1080x1920 | 4:5, 1080x1350] Photoreal night scene with no text of any kind: deep navy sky (#0A1A3F to #132C6B) over a generic modern tropical-city waterfront skyline of slim lit residential towers, palms on a promenade, lights reflected on calm water, a faint flowing blue light wave in the foreground. No recognisable landmark, no logos, no signage, no people. [9:16: skyline across 45–80% of height; the upper-left 25–62% is calm dark sky for a headline and a box.] [4:5: skyline in the right 55% and lower third; the upper-left and lower-left are calm dark areas for text and a box.]
```

---

## C2-B · Giant entry number · ref-01 giant number (golden hour)
- **Hook:** "New launch condos in Singapore start from" with a giant "$[PRICE]"
- **Look:** warm golden-hour living room looking out at a hazy city. A wide light serif headline, and one huge Didone red number bottom-left. The CTA is a text link, not a button.
- **Meta button:** Download

### C2-B · 9:16 full prompt
```text
Vertical 9:16 Story ad, 1080x1920 px. Full-bleed photoreal golden-hour living room in a Singapore new-launch condo: floor-to-ceiling windows onto a soft, hazy, generic city and tropical trees, warm sun flare, light timber floor, a low cream sofa, a brass floor lamp, warm amber and honey tones. A soft cream gradient (#F6EBDD, about 70% opacity) rises over the lower 45% of the frame so the text reads.
Story safe zones: 0–270 px and 1535–1920 px contain no text or buttons, only the image.
Top-left, starting just below 270 px, 64 px margin: headline in a wide, elegant light serif, espresso (#3B1F14), about 64 px, 2 lines: "New launch condos in Singapore start from".
From about 55% to 65% of height, bottom-left: one giant number in a high-contrast Didone serif, deep red (#B3001B), about 260 px, tight letter-spacing: "$[PRICE]".
Directly under it, espresso small-caps sans about 32 px: "[N]-bedder entry price, [MONTH] 2026".
At about 70–74% of height: on the left, espresso sans about 26 px: "Custom list goes up to $[CEILING] for 4-bedders"; on the right, a red (#B3001B) bold all-caps text link about 32 px with a 2 px underline and a right arrow: "DOWNLOAD LIST".
At about 76–79%, tiny espresso italic sans about 17 px: "*Prices from developer price lists as at [DATE]. Subject to availability and change. Excludes stamp duties." / "IMAGE SAMPLE ONLY – not the actual unit" / "[CEA LINE]".
Look: warm, aspirational, editorial, like a magazine cover. Every quoted string crisp and rendered exactly once.
Avoid: building exteriors; recognisable landmarks; people; any project, developer or brand name, logo or signage; any text beyond the quoted strings; misspelled, warped or duplicated text; "save", discount or gift badges; unit counts, district codes; watermarks, QR codes, phone numbers.
```

### C2-B · 4:5 full prompt
```text
Portrait 4:5 feed ad, 1080x1350 px. Full-bleed photoreal golden-hour living room in a Singapore new-launch condo: floor-to-ceiling windows onto a soft, hazy, generic city and tropical trees, warm sun flare, light timber floor, cream sofa, brass lamp, honey tones. A soft cream gradient (#F6EBDD) over the lower 40%. 56 px margins.
Top-left: wide elegant light serif, espresso (#3B1F14), about 56 px, 2 lines: "New launch condos in Singapore start from".
Bottom-left: a giant high-contrast Didone serif number, deep red (#B3001B), about 220 px: "$[PRICE]".
Under it, espresso small-caps sans about 28 px: "[N]-bedder entry price, [MONTH] 2026".
Bottom-right, level with that line: a red bold all-caps text link about 30 px with an underline and arrow: "DOWNLOAD LIST".
Very bottom, tiny espresso italic sans at least 18 px: "*Prices from developer price lists as at [DATE]. Subject to availability and change. Excludes stamp duties." / "IMAGE SAMPLE ONLY – not the actual unit" / "[CEA LINE]".
Look: warm, editorial, magazine-cover. Every quoted string rendered exactly once.
Avoid: building exteriors; landmarks; people; any name, logo or signage; extra, misspelled or duplicated text; savings or discount badges; unit counts, district codes; watermarks, QR codes, phone numbers.
```

### C2-B · Image-only (both sizes)
```text
[9:16, 1080x1920 | 4:5, 1080x1350] Photoreal golden-hour living room in a Singapore new-launch condo, no text of any kind: floor-to-ceiling windows onto a soft hazy generic city and tropical trees, warm sun flare, light timber floor, low cream sofa, brass floor lamp, amber and honey tones. The top-left quarter is calm, bright window light, low in detail, for a headline. The lower 45% fades into a soft cream haze (#F6EBDD) with no objects, for a giant number. No people, no logos, no signage, no building exteriors.
```

---

## C2-C · Range + tick checklist · ref-03 price box (charcoal, dusk)
- **Hook:** "Know the real price range before you visit a showflat"
- **Look:** a dusk interior on top with a hard edge into a charcoal panel. White grotesk, a coral-red outlined box, coral ticks, and a solid coral CTA.
- **Meta button:** Download

### C2-C · 9:16 full prompt
```text
Vertical 9:16 Story ad, 1080x1920 px. Top 40% of the frame: a photoreal dusk living room in a Singapore new-launch condo, floor-to-ceiling windows with a deep blue sky and soft city lights, recessed ceiling lights, grey sectional sofa, walnut coffee table, warm lamp glow. Overlapping the bottom-right corner of the photo area (about 26–44% of height, right 34% of the width): a small inset photo with 16 px rounded corners and a 6 px charcoal border, showing a photoreal dusk bedroom in the same condo with a warm bedside lamp and city lights in the window, so the top reads as a 2-photo collage. A hard straight horizontal edge at 40%. Bottom 60%: a flat solid charcoal panel (#1E1F22).
Story safe zones: 0–270 px is photo only, and 1535–1920 px is plain charcoal with no text or buttons.
On the panel, 64 px margins, at about 43–50% of height: white heavy grotesk sans (Archivo Black / Inter Black style), about 62 px, centred, 2–3 lines: "Know the real price range before you visit a showflat".
At about 52–60%: a rounded rectangle outlined with a 3 px coral-red (#FF4B3E) border and transparent fill, holding two centred lines: the first in coral-red heavy sans about 64 px: "2-BEDDERS FROM $[PRICE]"; the second in white heavy sans about 44 px: "UNDER $[CEILING]".
At about 62–70%: three rows, each with a filled coral-red circle holding a white tick, white regular sans about 32 px: "Developer price lists, no guesswork" / "Matched to your budget and bedroom count" / "Floor plans included".
At about 72–74%: tiny grey (#9A9A9A) italic sans about 18 px: "*Prices from developer price lists as at [DATE]. Subject to availability and change. Excludes stamp duties." / "IMAGE SAMPLE ONLY – not the actual unit" / "[CEA LINE]".
At about 75–79%: a full-width solid coral-red (#FF4B3E) rectangle with 8 px corners and bold white all-caps text about 36 px: "DOWNLOAD LIST".
Look: sharp, factual, high contrast, no-nonsense. Every quoted string crisp and rendered exactly once.
Avoid: people; any project, developer or brand name, logo or signage; landmarks; any text beyond the quoted strings; misspelled, warped or duplicated text; rental, returns or savings lines; unit counts, district codes; watermarks, QR codes, phone numbers.
```

### C2-C · 4:5 full prompt
```text
Portrait 4:5 feed ad, 1080x1350 px. Top 42%: a photoreal dusk living room in a Singapore new-launch condo, floor-to-ceiling windows with a deep blue sky and soft city lights, grey sectional, walnut table, warm lamp glow. Overlapping the bottom-right corner of the photo (about 26–46% of height, right 32% of the width): a small inset photo with 14 px rounded corners and a 6 px charcoal border, showing a photoreal dusk bedroom with a warm bedside lamp and city lights, so the top reads as a 2-photo collage. A hard horizontal edge at 42%. Bottom 58%: flat solid charcoal (#1E1F22). 56 px margins.
On the panel: white heavy grotesk sans about 54 px, centred, 2 lines: "Know the real price range before you visit a showflat".
A rounded rectangle with a 3 px coral-red (#FF4B3E) outline: "2-BEDDERS FROM $[PRICE]" in coral-red heavy sans about 56 px, and "UNDER $[CEILING]" under it in white heavy sans about 38 px.
Three rows with coral-red tick circles, white sans about 28 px: "Developer price lists, no guesswork" / "Matched to your budget and bedroom count" / "Floor plans included".
Tiny grey italic sans at least 18 px: "*Prices from developer price lists as at [DATE]. Subject to availability and change. Excludes stamp duties." / "IMAGE SAMPLE ONLY – not the actual unit" / "[CEA LINE]".
Bottom: a full-width solid coral-red rectangle, bold white text about 32 px: "DOWNLOAD LIST".
Look: sharp, factual, high contrast. Every quoted string rendered exactly once.
Avoid: people; any name, logo or signage; landmarks; extra, misspelled or duplicated text; rental, returns or savings lines; unit counts, district codes; watermarks, QR codes, phone numbers.
```

### C2-C · Image-only (both sizes)
```text
[9:16, 1080x1920: photo top 40% | 4:5, 1080x1350: photo top 42%] No text of any kind. Top: photoreal dusk living room in a Singapore new-launch condo, floor-to-ceiling windows with a deep blue sky and soft city lights, recessed lights, grey sectional sofa, walnut coffee table, warm lamp glow, plus a small inset photo with rounded corners and a 6 px charcoal border overlapping the photo's bottom-right corner, showing a dusk bedroom with a warm bedside lamp (2-photo collage). A perfectly straight horizontal edge, then a completely flat, empty, solid charcoal (#1E1F22) field to the bottom with no texture, objects or marks. No people, no logos, no signage.
```

---

# C3 — "Pay as it's built"

## C3-A · Explainer · ref-03 light version (blush, bright day)
- **Hook:** "PAY AS IT'S BUILT"
- **Look:** a white and blush panel, GoAhead red rounded sans, a red outlined monthly box, red ticks and a bright daylight kitchen. It's the light opposite of C2-C, with the photo at the side in 4:5.
- **Meta button:** Download

### C3-A · 9:16 full prompt
```text
Vertical 9:16 Story ad, 1080x1920 px. Top 35%: a photoreal bright daylight kitchen and dining area in a Singapore new-launch condo, white quartz island, light oak cabinets, a bowl of fruit, sunlight through a large window onto greenery. Overlapping the bottom-right of the photo (about 22–36% of height, right 32% of the width): a small inset photo with 18 px rounded corners and a 6 px white border, showing a bright daylight dining nook by a balcony with plants, so the top reads as a 2-photo collage. Below it, a gentle curved edge into a soft blush panel (#FDEDEE) fading to white (#FFFFFF) at the bottom.
Story safe zones: 0–270 px is photo only, and 1535–1920 px is plain panel with no text or buttons.
On the panel, 64 px margins: at about 37%, a headline in a rounded heavy sans (Nunito Black style), GoAhead red (#D0021B), about 92 px: "PAY AS IT'S BUILT".
At about 42%, dark grey (#333333) rounded sans about 34 px: "Singapore new launch condos with progressive payment".
At about 46–53%: a white rounded rectangle with a 3 px red outline holding red heavy rounded sans about 72 px: "FROM $[MONTHLY]/MONTH*".
At about 55–65%: four rows, each with a small filled red rounded tick, dark grey sans about 30 px: "You pay in stages as construction progresses" / "Developer price lists, no guesswork" / "Floor plans included" / "Expert advice you can trust".
At about 66–73%: a light grey (#F3F3F3) rounded block with dark grey italic sans about 19 px, fully legible: "*Illustration only. Based on a $[UNIT PRICE] unit at the [STAGE] progressive payment stage, [TENURE]-yr loan at [RATE]% interest, [LTV]% loan-to-value. Monthly instalments increase as construction progresses. Excludes stamp duties and fees. Not a loan offer." / "IMAGE SAMPLE ONLY – not the actual unit" / "[CEA LINE]".
At about 75–79%, centred: a GoAhead red pill, bold white all-caps rounded sans about 36 px: "DOWNLOAD LIST".
Look: friendly, clear, reassuring, like a helpful explainer. Every quoted string crisp and rendered exactly once.
Avoid: people; any project, developer, bank or brand name, logo or signage; landmarks; any text beyond the quoted strings; misspelled, warped or duplicated text; returns, gains, rental or savings claims; unit counts, district codes; watermarks, QR codes, phone numbers.
```

### C3-A · 4:5 full prompt
```text
Portrait 4:5 feed ad, 1080x1350 px. Left 45%, full height: a photoreal bright daylight kitchen and dining area in a Singapore new-launch condo, white quartz island, light oak cabinets, sunlight through a big window onto greenery. Overlapping the lower part of this photo (about 64–90% of height, inset 32 px from the left): a small inset photo with 16 px rounded corners and a 6 px white border, showing a bright daylight dining nook by a balcony with plants, so the left side reads as a 2-photo collage. A clean vertical edge, then the right 55%: a soft blush (#FDEDEE) panel with 48 px inner margins.
On the panel: rounded heavy sans (Nunito Black style), GoAhead red (#D0021B), about 66 px: "PAY AS IT'S BUILT".
Dark grey rounded sans about 28 px: "Singapore new launch condos with progressive payment".
A white rounded box with a 3 px red outline, red heavy rounded sans about 50 px: "FROM $[MONTHLY]/MONTH*".
Three rows with small red ticks, dark grey sans about 24 px (if space runs short, drop the third row, never the disclaimer): "You pay in stages as construction progresses" / "Developer price lists, no guesswork" / "Floor plans included".
A light grey rounded block, dark grey italic sans at least 18 px, fully legible: "*Illustration only. Based on a $[UNIT PRICE] unit at the [STAGE] progressive payment stage, [TENURE]-yr loan at [RATE]% interest, [LTV]% loan-to-value. Monthly instalments increase as construction progresses. Excludes stamp duties and fees. Not a loan offer." / "IMAGE SAMPLE ONLY – not the actual unit" / "[CEA LINE]".
A GoAhead red pill, bold white text about 30 px: "DOWNLOAD LIST".
Look: friendly, clear explainer. Every quoted string rendered exactly once.
Avoid: people; any name, logo or signage; landmarks; extra, misspelled or duplicated text; returns, gains, rental or savings claims; unit counts, district codes; watermarks, QR codes, phone numbers.
```

### C3-A · Image-only (both sizes)
```text
[9:16, 1080x1920: photo top 35%, curved edge | 4:5, 1080x1350: photo left 45%, straight vertical edge] No text of any kind. Photoreal bright daylight kitchen and dining area in a Singapore new-launch condo, white quartz island, light oak cabinets, a bowl of fruit, sunlight through a large window onto greenery, plus a small inset photo with rounded corners and a 6 px white border overlapping the photo's lower edge, showing a bright dining nook by a balcony with plants (2-photo collage). The rest of the frame is a completely flat, empty soft blush (#FDEDEE) field fading to white, with no objects or marks. No people, no logos, no signage.
```

---

## C3-B · Surprise number · ref-01 giant number, centred (family, sunny day)
- **Hook:** "What a new launch condo can cost per month during construction" with a giant "$[MONTHLY]/month*"
- **Look:** a full-bleed sunny living room with a family seen from behind. A centred frosted-white card holds the red soft-serif number, with a navy pill CTA.
- **Meta button:** Sign up

### C3-B · 9:16 full prompt
```text
Vertical 9:16 Story ad, 1080x1920 px. Full-bleed photoreal sunny family scene in a bright Singapore new-launch condo living room: two parents and a young child seen from behind, sitting close together on a light sofa, looking out of large windows at tropical greenery and blue sky; faces not visible; warm daylight, light oak floor, white walls, a few plants. A soft white haze over the top 30% for legibility.
Story safe zones: 0–270 px and 1535–1920 px contain no text, cards or buttons, only the photo.
At about 15–26% of height, centred: a clean geometric sans, ink navy (#1B2A4A), semibold, about 58 px, 3 lines: "What a new launch condo can cost per month during construction".
At about 38–55%, centred: a frosted-white rounded card (white at about 88% opacity, 32 px corners, soft shadow), holding a giant number in a chunky soft serif (Cooper/Recoleta Black style), GoAhead red (#D0021B), about 170 px: "$[MONTHLY]/month*", and under it, ink-navy sans about 32 px: "at the [STAGE] progressive payment stage".
At about 64–73%: a white rounded strip (about 90% opacity), ink-navy italic sans about 19 px, fully legible: "*Illustration only. Based on a $[UNIT PRICE] unit at the [STAGE] progressive payment stage, [TENURE]-yr loan at [RATE]% interest, [LTV]% loan-to-value. Monthly instalments increase as construction progresses. Excludes stamp duties and fees. Not a loan offer." / "IMAGE SAMPLE ONLY – not the actual unit" / "[CEA LINE]".
At about 75–79%, centred: an ink-navy (#1B2A4A) pill, bold white all-caps sans about 36 px: "GET MY CUSTOM LIST".
Look: warm, hopeful, family-first, a pleasant surprise. Every quoted string crisp and rendered exactly once.
Avoid: visible or identifiable faces; any project, developer, bank or brand name, logo or signage; landmarks; any text beyond the quoted strings; misspelled, warped or duplicated text; returns, gains, rental or savings claims; unit counts, district codes; watermarks, QR codes, phone numbers.
```

### C3-B · 4:5 full prompt
```text
Portrait 4:5 feed ad, 1080x1350 px. Full-bleed photoreal sunny family scene in a bright Singapore new-launch condo living room: two parents and a young child seen from behind on a light sofa, looking out of large windows at tropical greenery; faces not visible; warm daylight, light oak, white walls. A soft white haze over the top 25%. 56 px margins.
Top, centred: geometric sans, ink navy (#1B2A4A), semibold, about 50 px, 2 lines: "A new launch condo per month, during construction".
Centre: a frosted-white rounded card with a giant chunky soft serif (Cooper/Recoleta Black style) number in GoAhead red (#D0021B), about 125 px: "$[MONTHLY]/month*", and under it, ink-navy sans about 28 px: "at the [STAGE] progressive payment stage".
Lower: a white rounded strip, ink-navy italic sans at least 18 px, fully legible: "*Illustration only. Based on a $[UNIT PRICE] unit at the [STAGE] progressive payment stage, [TENURE]-yr loan at [RATE]% interest, [LTV]% loan-to-value. Monthly instalments increase as construction progresses. Excludes stamp duties and fees. Not a loan offer." / "IMAGE SAMPLE ONLY – not the actual unit" / "[CEA LINE]".
Bottom, centred: an ink-navy pill, bold white text about 30 px: "GET MY CUSTOM LIST".
Look: warm, hopeful, family-first. Every quoted string rendered exactly once.
Avoid: identifiable faces; any name, logo or signage; landmarks; extra, misspelled or duplicated text; returns, gains, rental or savings claims; unit counts, district codes; watermarks, QR codes, phone numbers.
```

### C3-B · Image-only (both sizes)
```text
[9:16, 1080x1920 | 4:5, 1080x1350] Photoreal sunny family scene with no text of any kind: a bright Singapore new-launch condo living room, two parents and a young child seen from behind sitting close together on a light sofa, looking out of large windows at tropical greenery and blue sky, faces not visible. Warm daylight, light oak floor, white walls, a few plants. The family sits in the lower-middle third; the top 30% is soft bright wall and window light, low in detail, and the centre has calm window light behind them for an overlaid card. No logos, no signage.
```

---

## C3-C · Budget-first · ref-04 story, red version (evening)
- **Hook:** "START WITH WHAT YOU CAN PAY EACH MONTH"
- **Look:** a deep red gradient with white ultra-condensed caps, white chips with red dots, and a white tab with the red monthly figure. Evening interiors are fanned like a hand of cards. It's the inverse of C1-A.
- **Meta button:** Sign up

### C3-C · 9:16 full prompt
```text
Vertical 9:16 Story ad, 1080x1920 px. Background: a rich diagonal gradient from deep red (#B0001A) at top-left to warmer red (#E2353F) at bottom-right, with a faint soft light bloom behind the cards.
Story safe zones: 0–270 px and 1535–1920 px hold no text, chips, tabs or buttons, only the gradient.
At about 15–27% of height, left-aligned at 64 px: an ultra-condensed heavy sans (Bebas/Anton style), white, all caps, about 120 px, 3 lines: "START WITH WHAT YOU CAN PAY EACH MONTH".
At about 29%, white regular sans about 32 px: "Get the custom list of new launches that fits your monthly budget".
At about 33%: two white pill chips, each with a small red dot, red (#D0021B) medium sans about 28 px: "Free custom list" and "Progressive payment".
At about 37–44%, left-aligned: a white rectangular tab with one clipped corner, red (#D0021B) bold sans about 76 px: "From $[MONTHLY]/month*".
At about 46–64%: three photoreal evening-lit Singapore new-launch condo interior cards with 24 px rounded corners and soft shadows, fanned like a hand of playing cards from a common point below (left card rotated -14 degrees, centre upright, right +14 degrees, overlapping): a cosy living room with lamp glow, a calm bedroom with warm bedside light, a kitchen with under-cabinet lighting. No text on the cards.
At about 65–73%: a slightly darker red translucent rounded block with white italic sans about 19 px, fully legible: "*Illustration only. Based on a $[UNIT PRICE] unit at the [STAGE] progressive payment stage, [TENURE]-yr loan at [RATE]% interest, [LTV]% loan-to-value. Monthly instalments increase as construction progresses. Excludes stamp duties and fees. Not a loan offer." / "IMAGE SAMPLE ONLY – not the actual unit" / "[CEA LINE]".
At about 75–79%, centred: a white pill with bold red all-caps sans about 36 px: "GET MY CUSTOM LIST".
Look: bold, warm, energetic, budget-first. Every quoted string crisp and rendered exactly once.
Avoid: people; any project, developer, bank or brand name, logo or signage; landmarks; any text beyond the quoted strings; misspelled, warped or duplicated text; returns, gains, rental or savings claims; unit counts, district codes; watermarks, QR codes, phone numbers.
```

### C3-C · 4:5 full prompt
```text
Portrait 4:5 feed ad, 1080x1350 px. Background: a diagonal gradient from deep red (#B0001A) to warmer red (#E2353F) with a faint light bloom behind the cards. 56 px margins.
Top-left: ultra-condensed heavy sans (Bebas/Anton style), white, all caps, about 88 px, 3 lines: "START WITH WHAT YOU CAN PAY EACH MONTH".
White regular sans about 28 px: "Get the custom list that fits your monthly budget".
Two white pill chips with red dots, red medium sans about 24 px: "Free custom list" and "Progressive payment".
A white tab with a clipped corner, red bold sans about 54 px: "From $[MONTHLY]/month*".
Right side, mid-height: two photoreal evening-lit Singapore new-launch condo interior cards with rounded corners and soft shadows, fanned and overlapping (rotated -10 and +10 degrees): a cosy living room with lamp glow and a calm bedroom with warm bedside light. No text on the cards.
Lower area: a darker red translucent block, white italic sans at least 18 px, fully legible: "*Illustration only. Based on a $[UNIT PRICE] unit at the [STAGE] progressive payment stage, [TENURE]-yr loan at [RATE]% interest, [LTV]% loan-to-value. Monthly instalments increase as construction progresses. Excludes stamp duties and fees. Not a loan offer." / "IMAGE SAMPLE ONLY – not the actual unit" / "[CEA LINE]".
Bottom-right: a white pill, bold red text about 30 px: "GET MY CUSTOM LIST".
Look: bold, warm, budget-first. Every quoted string rendered exactly once.
Avoid: people; any name, logo or signage; landmarks; extra, misspelled or duplicated text; returns, gains, rental or savings claims; unit counts, district codes; watermarks, QR codes, phone numbers.
```

### C3-C · Image-only (both sizes)
```text
[9:16, 1080x1920 | 4:5, 1080x1350] No text of any kind. A rich diagonal red gradient (#B0001A to #E2353F) with a faint soft light bloom. [9:16: three | 4:5: two] photoreal evening-lit Singapore new-launch condo interior photo cards with rounded corners and soft shadows, fanned like a hand of playing cards and overlapping (cosy living room with lamp glow / calm bedroom with warm bedside light / kitchen with under-cabinet lighting), placed at [9:16: 46–64% of height, centred | 4:5: right side, mid-height]. Everything else is empty gradient, kept clear for text. No people, no logos, no signage.
```

---

## Cost note (estimate only, nothing has been spent)

| Item | Images |
|---|---|
| C1-A, C1-C, C2-A, C2-B, C2-C, C3-A, C3-B, C3-C (8 ads x 9:16 + 4:5) | 16 |
| C1-B carousel (5 cards x feed 4:5 + story 9:16) | 10 |
| **Total, one pass** | **26** |

- **Suggested generator:** `gpt-image-2` at high quality, portrait size.
- **Estimated price:** about **US$0.20 per image**. This is an estimate, so confirm the live per-image rate with `list_image_models` before any call.
- **One pass:** 26 x ~US$0.20 = **~US$5.20**.
- **With one retry per image** (text-heavy ads often need a second try): **~US$10.40**.
- **Image-only route** (recommended for final files):
  - C1-B card 1 needs no generation.
  - The C1-B tier cards need 8 collage photos instead of 8 full cards.
  - So about 24 images, **~US$4.80** one pass (**~US$9.60** with retries), plus free Canva time.
- **Two gates before any spend:**
  1. The user ticks the approval box in `creative-spec.md` and swaps in the confirmed prices.
  2. The user gives a go-ahead in chat for the specific batch at the cost shown.
