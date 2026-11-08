# Vela Bay: design prompts (3 locked layouts, 2026-11-08)

Follows the locked GoAhead new-launch layouts (`.claude/skills/new-launch-image-run/SKILL.md`, references in `clients/gomedia-homes/inputs/ad-references/new-launch-3-layouts/`). Strings come from the Approved copy (`copy-brief.md`) and `research.md`. Built in Canva with real images (`images/source/SOURCES.md`). The earlier 5-angle prompts are in `old/design-prompts-5-angle.md`.

Facts used: 1BR + Study from $1,466,000 (484 sqft, entry); 2BR Premium 689 sqft from $1,890,000 (above the ~$1.6M cap, so no price on B/C); 99-year leasehold; next to Bayshore MRT (developer, Stacked, OneMap ~40m; no walk minutes); short walk to East Coast Park (Stacked, underpass); sea views from selected units; near East Coast Lagoon Food Village.

---

## A. Direct (named, price-led)

Image: `direct-facade.jpg` (developer facade render).

```
Portrait 1080x1350 Singapore new-launch condo ad, layout A (Direct).
TOP 45%: full-width real photo of the project (use the supplied render unchanged, crop only, show the full tower tops). Red tag top-left on the photo: "SINGAPORE HOMEBUYER" (white bold caps). Small white text bottom-right of the photo: "ARTIST'S IMPRESSION ONLY". A soft dark gradient strip at the bottom edge of the photo.
BOTTOM 55%, warm cream panel (#F3EEE4), deep navy text (#13283F):
- Callout, small bold caps: "VELA BAY"
- Big 2-line headline, heavy sans: "1-Bedroom + Study" / "From $1.466M*"
- Row of 3 equal dark navy boxes (#13283F), each with a big serif value and a small white caps label:
  1. "Next to" / "BAYSHORE MRT"
  2. "Short walk" / "TO EAST COAST PARK"
  3. "Sea views" / "FROM SELECTED UNITS"
- Body line: "Thomson-East Coast Line at your doorstep, near East Coast Lagoon Food Village. 99-year leasehold."
- Fine print: "*Based on developer price list as at [DATE]. Subject to availability and change. Excludes stamp duties."
- Thin gold divider, then a full-width navy CTA bar: "GET PRICE LIST & E-BROCHURE" with a white arrow at the right.
Every string exactly as quoted, once. No logos, no unit counts, no % sold, no district code.
```

## B. Floor plan (blind)

Images: left `direct-facade.jpg` cropped to the towers (entrance sign cropped out); right `plan-2brp-stacked.jpg` (real 2BR Premium plan, 689 sqft).

```
Portrait 1080x1350 Singapore new-launch condo ad, layout B (Floor plan). Off-white background (#F5F2EC), charcoal text (#2E2E2E), rust accent (#B5452A).
- Top-left eyebrow, rust caps: "SINGAPORE HOMEBUYER"
- Two pictures side by side, about 45% of the height: LEFT = real project render (no name or signage visible); RIGHT = white framed card with a small caps label "FLOOR PLAN" above the real floor plan (keep walls, rooms and labels exactly; crop/scale only).
- Big condensed bold headline: "2-Bedroom Premium"
- Row of 3 outlined boxes (thin charcoal border), caps: "689 SQFT" / "NEXT TO BAYSHORE MRT" / "SHORT WALK TO EAST COAST PARK"
- Body text: "Both bedrooms with their own bathroom, plus a balcony. Near East Coast Lagoon Food Village, on the Thomson-East Coast Line."
- Big full-width rust CTA bar: "GET PRICE LIST & E-BROCHURE"
No project name anywhere. No price.
```

## C. Price + MRT (blind, listing card)

Image: `mrt-aerial.jpeg` (developer aerial render with sea view).

```
Portrait 1080x1350 Singapore new-launch condo ad, layout C (portal listing card). Light grey page (#F2F3F5), white rounded card with soft shadow.
- Eyebrow above the card, spaced red caps: "SINGAPORE HOMEBUYER"
- Card photo (top 45% of the card): the supplied aerial render, unchanged. Green tag top-left: "AVAILABLE TYPE". Carousel dots near the bottom. Small italic white text bottom-left: "IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY"
- Headline, bold dark grey: "2-Bedroom Premium, 689 sqft, Next to Bayshore MRT"
- Grey subhead: "Short walk to East Coast Park. Near East Coast Lagoon Food Village."
- Icon table with thin dividers (icon, grey caps label, bold value):
  BEDROOMS 2 · SIZE 689 sqft · TENURE 99-year leasehold · MRT Next to Bayshore MRT · NEARBY East Coast Park, East Coast Lagoon Food Village
- Red full-width rounded CTA: "GET PRICE LIST & E-BROCHURE"
No project name anywhere. No price (the 2BR Premium is above the price cap).
```

## Before you generate / launch
- [ ] [DATE] filled and $1,466,000 re-checked on the developer's list within 48h (A only). If the 1BR + Study sells out, A drops the price and leads with "Next to Bayshore MRT".
- [ ] 2BR Premium still available (7 left on 6 Nov).
- [ ] Rights to the renders and the Stacked floor plan (standing OK for Google images, 2026-11-07).
