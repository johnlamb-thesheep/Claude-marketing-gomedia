# GoAhead (gomedia-homes) video rules

> Client rules. Moved here on 2026-11-08, wording unchanged: the reel recipe from the old references/video-maker/PROPERTY_REEL.md (now deleted), then the blind/direct, script and visual rules from the `new-launch-video-ad` skill. On-screen text follows the copy rules in `static-ads.md` (no unit counts, no % sold, no district codes, full MRT names, "rare freehold condo", price cut-off, CTA by stage). Voice speed: 1.2x.

## Recipe: Singapore new-launch condo reel (~15s, 9:16)

### Typical script shape (ElevenLabs, ~50 words)

> [excited] Singapore homebuyers, do not miss this rare freehold condo in Upper East Coast. [confident] This is Bagnall Haus, a low-rise development with a twenty five metre lap pool, and it is only a five minute walk to Sungei Bedok MRT. [warm] Register now for floor plans and e-brochure.

### Scene pattern (one scene per spoken idea)

| Spoken | Visual | On-screen text |
|---|---|---|
| "Singapore homebuyers" | Exterior footage or a facade push-in | SINGAPORE / [HOMEBUYERS] |
| "rare freehold condo" | Facade pan or tower tilt-up | kicker + [RARE FREEHOLD] + CONDO |
| "in <area>" | Aerial or neighbourhood shot | [UPPER EAST COAST] (area name only; no district codes, per the gomedia-homes copy rules) |
| "This is <Name>" | Push toward the project's own signage | Letters of the name drop in one by one |
| "facility (pool, 47 facilities)" | Pool footage or render pan | [LAP POOL] + animated measure line "25M", or a count-up "47 FACILITIES" |
| "X min walk to <MRT>" | Arrival/driveway footage, **or** a redrawn map | [5 MIN WALK] + filling walk bar + MRT badge (line colour + code) |
| "nearby amenities" | Redrawn map with amenities popping | headline swaps to "WITH MULTIPLE AMENITIES NEARBY" |
| "Register now for floor plans and e-brochure" | Calm wide shot, slow zoom | REGISTER / [NOW], ✓ Floor Plans and ✓ E-Brochure chips popping on their words, pulsing button |

`[ ]` = highlight block (red with white text by default for this client).

### Delivered projects and what each taught

- **SG homes generic.** Made from photos only. Taught: carousel and coverflow cards make a still-only reel feel dynamic, and 3D coverflow plus a budget slider is a good "based on your budget & needs" moment.
- **The Arcady at Boon Keng.** Taught:
  - Redraw the map, and pop the MRT and amenities on cue.
  - Slow a footage clip to avoid reaching the presenter at its end.
  - Drop the price scene when the script drops the price.
- **Hougang Central Residences.** Taught:
  - Remove other logos by cropping graphics down to their clean part.
  - Exclude another project's render.
  - "Mall + bus interchange in the same development" works as an outlined site glowing on "same development".
- **The Island Residence (Keppel Island).** Taught: Ken Burns on every still, and drawing the bridge from island to mainland as a reveal. Excluded the gym image (people + "Artist Impression").
- **Amber House.** Taught: the client wants footage **full-screen, not blurred or darkened**. Uses a TE25 Tanjong Katong MRT badge in TEL brown (#9D5B25).
- **Bagnall Haus.** Taught: crop letterbox bars and burned-in shot captions. Red replaced yellow highlights.

## Blind vs direct, scripts and visual rules (from the `new-launch-video-ad` skill)

### Blind vs direct
- **Blind ad (default when unsure — ask):** never show the project name anywhere unless the VO says it. Blur signage on renders (one-off `Prep.tsx` still that crops + blurs), avoid renders with the name printed, end with a locked "🔒 PROJECT NAME" card ("register to find out the project name").
- **Direct ad:** the name is the hero — name reveal scene, signage renders are fine.

### Scripts
- ~40 words → ~15s after 1.2x. Hook in the first line (USP: price, MRT, freehold, "you've probably never heard of"). End with register CTA (price list / floor plans / e-brochure / project name).
- Format for ElevenLabs: spell out numbers ("one point five million dollars", "two-bedders"), "…" pauses, v3 tags `[curious] [excited] [confident] [warm]`; suggest Stability 35–45%.

### Visual rules (user preferences)
- Everything in the Meta safe band (y ≈ 300–1600); captions ~1200–1400; fine print ~1545.
- Text builds top-down on the spoken word (mask "rise" Reveal), phases clear between ideas — don't fill the screen.
- People want to **see a building** — avoid mystery silhouettes or map-only videos; use renders as backgrounds (Ken Burns), map only for the distance beat.
- Use a **real map** for walking distance: OSM tiles from `tile.openstreetmap.de` (zoom 17 for a neighbourhood), positions from `photon.komoot.io`, route drawn as a line + live counter ("437 m · 5 MIN*"), MRT icon in line colour (NEL #9E28B5, DTL #005EC4, EWL #009645, CCL #FA9E0D, NSL #D42E12). Credit "© OpenStreetMap contributors". Distances the user gives win — use the closest figure.
- Each new ad should look different from the previous one (palette, type, transition style).
- Captions word-highlighted; key words in the accent colour.
