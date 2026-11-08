---
name: new-launch-image-run
description: Produce the standard 3 GoAhead (gomedia-homes) new-launch static ads for one condo/EC project — Direct, Floor plan, Price + near MRT — using real project images from Google, built in Canva through the Canva MCP (fallback: the user's free ChatGPT/Gemini through Claude in Chrome), and filed in the Notion Master Content Tracker with the Canva links. Also covers rewriting pasted primary text for a project. Use when the user names a project and says "do the 3 angles", "make the images", "run it for <project>", "put it in Notion", or pastes another project's ad copy and asks to "make it <project>".
---

# New-launch 3-angle image run (GoAhead)

One project at a time. Everything lives in `clients/gomedia-homes/projects/<slug>/`
(`research.md`, `copy-brief.md`, `design-prompts.md`, `perf-review.md`, `images/`, `images/source/`).
Read `CLAUDE.md`, `clients/gomedia-homes/brand.md`, `learnings.md` and `.claude/skills/gomedia-homes-static-ad-rules/SKILL.md` first.

## The 3 angles (always these, in this order)

1. **Direct (named, price-led).** The only ad that names the project. Lead with the entry price when the cheapest unit is about $1.5M or below (~$1.6M still OK); above that, lead with the hottest USP and show no price.
2. **Floor plan (blind).** The real floor plan of the **2-bedroom** type by default (user 2026-11-08: "usually 2 bedroom is the best"; pick the 2BR type with stock).
3. **Price + near MRT (blind).** A listing-card ad for the **2-bedroom** type (never lead with 4BR): its size, plus its strongest USP (rare freehold / "X-min walk to <MRT>" when sourced, else "near"). Show the cheapest 2BR's exact "from $X*" price even when it's a little over ~$1.6M (user 2026-11-08, e.g. "From $1.695M*"), never rounded down. If the project has no 2BR, use its smallest unit type and keep the normal price cap.

USPs to lean on: near MRT, amenities (malls, parks, beach, schools), price, future developments (new MRT lines with their target year).

## Locked layouts (user, 2026-11-08)

Reference images: `clients/gomedia-homes/inputs/ad-references/new-launch-3-layouts/` (A-direct, B-floorplan, C-price-mrt). Every project follows these three layouts; only colours and words change. **Each project gets its own palette (user 2026-11-08):** pick the panel, box, accent and CTA colours from that project's own photos (e.g. sea blue, forest green, terracotta), and make sure they differ from the last projects done, so the ads don't all look the same. Change the CTA bar and box colours too, not just the text. When copying an earlier project's Canva design, recolour it before saving. Portrait 1080x1350.

**A. Direct** (`A-direct-layout.webp`)
1. Top ~45%: full-width real project render; red tag `SINGAPORE HOMEBUYER` top-left on the photo; small `ARTIST'S IMPRESSION ONLY` on the photo.
2. Below, on a cream panel: **callout** = project name in small bold caps (e.g. `VELA BAY`).
3. **Big headline**, 2 lines (price-led when allowed, else the hottest USP).
4. **3 dark boxes in a row**, each a big value + small caps label = the 3 main USPs (e.g. `6 min` / `WALK TO BOON KENG MRT`).
5. One line of body text below with the additional USPs (amenities).
6. Thin divider, then a dark full-width CTA bar `GET PRICE LIST & E-BROCHURE →`. Price fine print just above it when a price is shown.

**B. Floor plan** (`B-floorplan-layout.webp`)
1. Eyebrow `SINGAPORE HOMEBUYER` top-left.
2. **Two pictures side by side:** left = project photo (render or show-flat interior, no project name/signage visible); right = framed card labelled `FLOOR PLAN` with the real plan.
3. **Big condensed headline** = the unit type (e.g. `2-Bedroom + Study`).
4. **3 outlined boxes** = USPs, one must be the MRT (e.g. `764 SQFT` / `RARE FREEHOLD NEW LAUNCH CONDO` / `6-MIN WALK TO BOON KENG MRT`).
5. Body text below (amenities, schools with MOE line if named).
6. **Big** full-width CTA bar.

**C. Price + MRT** (`C-price-mrt-layout.webp`), blind, looks like a property-portal listing
1. Eyebrow `SINGAPORE HOMEBUYER` in spaced red caps; white rounded card.
2. Photo (interior or render) with a green `AVAILABLE TYPE` tag, carousel dots, and `IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY`.
3. Headline = `2-Bedroom <type>, <size> sqft, <USP>`; grey subhead = MRT walk/near + nearby malls.
4. Icon table: BEDROOMS / SIZE / TENURE / MRT / NEARBY (or PRICE `From $X*` when allowed).
5. Red full-width CTA `GET PRICE LIST & E-BROCHURE`.

## Steps

1. **Copy (copywriter → performance).** Write or update the 3 ads in `copy-brief.md` from `research.md`. Rules that always apply:
   - Exact price, never rounded down ("$1.542M*", not "$1.54M*"), with fine print: "*Based on developer price list as at [DATE]. Subject to availability and change. Excludes stamp duties."
   - No "VVIP preview", "launching soon", "last units", "prime units remain" for a launched project: use "show flat open for viewing".
   - No gain claims ("strong growth potential", "capital appreciation"). No unit counts, "% sold", district codes. Full MRT names. Freehold = "rare freehold condo". ECs carry "EC eligibility conditions apply."
   - GoAhead is CEA-authorised to market any project: never flag CEA as a blocker.
2. **Design prompts (static-designer → performance).** One self-contained, paste-ready prompt per ad in `design-prompts.md`, 4:5 portrait, every on-image string in quotes, a different layout and palette per ad. Prompts only, no paid generation.
3. **Real project images (standing user OK, 2026-11-07).** Search **Google Images** for "<project> <area>"; the official site isn't required, and GoAhead may use these images.
   - Pull full-size URLs from the results page with JS (match `["https://...jpg|png|webp", h, w]` in the page HTML), then `curl` them into `images/source/`.
   - Pick a **different image per angle**: exterior render → Direct, real floor plan of the entry unit → Floor plan, another render (e.g. beach/park view) → Price + MRT.
   - Skip images with baked-in banners, watermarks or old dated text. Log every URL in `images/source/SOURCES.md`.
4. **Build in Canva (default, user 2026-11-07).** Use the Canva MCP whenever it's connected; fall back to step 4b only if it isn't.
   - `upload-asset-from-url` with each chosen Google image URL (no download needed; still log it in `images/source/SOURCES.md`).
   - `create-design` (format "Instagram Post (Portrait)") with a brief that quotes every on-image string exactly and reserves a photo/plan area. Poll `get-create-design-async-job`.
   - `read-design` with `open_transaction`, then `edit-design`: `update_fill` the photo frame with the real render (or `insert_fill` the plan inside a white card at its own aspect ratio), `crop_media` so no tower tops are cut, fix any string Canva changed (it may drop the `*` or lowercase the `M`; the price must stay on one line). Canva sometimes fills a frame with its own AI photo: always replace it with the real image.
   - Check the after-thumbnail, then `commit`. Don't pass `format`; say "Portrait 1080x1350 (4:5)" in the brief instead, which gives a 4:5 canvas (2304x2880). Passing "Instagram Post (Portrait)" gives 3:4 (1080x1440). Canva often leaves the photo as an empty placeholder or the page background: `insert_fill` the real image over that area, then `layer_element` it to the back so tags and labels stay on top. If `create-design` fails with "quota_exceeded" (Canva AI credits used up), `copy-design` a finished project's A/B/C design (e.g. Vela Bay's) and swap the images and text with `edit-design`; copying uses no credits. Check copies for stray elements left over from earlier edits and delete them. A table value can come out missing (e.g. BEDROOMS with no number): add it with `add_text` and match the row's font size and colour.
   - No files are downloaded. The Notion page carries the Canva links (step 6).

4b. **Fallback: generate in ChatGPT/Gemini (Claude in Chrome).** Only when the Canva MCP isn't available. Try the user's **free ChatGPT** first; if it isn't logged in or hits its limit, use **free Gemini**. Never click upgrade/paid prompts; pause for the user if a login is needed.
   - Attach the source image by copying it to the clipboard and pasting into the prompt box (Gemini has no file input to target):
     `Add-Type -AssemblyName System.Windows.Forms,System.Drawing; [System.Windows.Forms.Clipboard]::SetImage([System.Drawing.Image]::FromFile("<png path>"))` then click the prompt box and press Ctrl+V.
   - Start the prompt with: "Use the attached image as the hero… Keep the building exactly as it is: do not redraw, add or remove any floors, windows, towers or landscaping; you may only crop and scale it." For the floor plan: "keep the plan's walls, rooms and labels exactly; only crop, scale and recolour." Ask for "VERTICAL PORTRAIT, 4:5 (1080 wide x 1350 tall)", because Gemini sometimes returns landscape.
   - Label renders "ARTIST'S IMPRESSION ONLY". Use a fresh chat per ad. Image generation with an attachment can take 1–2 minutes.
   - Click "Download full-sized image", then move the file from Downloads to `images/<slug>-<A|B|C>-<angle>_<real-render|real-plan>_<tool>.png`.
5. **Check every image** before filing: spelling of every string (especially the price), building unchanged versus the source, nothing cropped off, aspect ratio. Note issues for a Canva touch-up (garbled tiny labels, Gemini sparkle mark bottom-right, fine print under 18 px).
6. **Notion.** One page per project in the **Master Content Tracker** database (data source `collection://32875351-3e23-805b-8dfd-000b2f4afc82`). Properties:
   - Databased: Fulfillment Marketing
   - Vertical: Real Estate
   - Campaign type: Ful - New launches
   - Format: Picture
   - Lead Conversion: Lead Form
   - Status: Terri approval needed

   **Canva route:** don't upload images. Put the Direct ad's Canva link in the **Final Ads** property, set **Creative Done** to today, and list all 3 Canva links on the page, each with its headline, image source and notes. **Fallback route only:** upload each image with `notion-create-file-upload`, then a `curl -F file=@...` POST to the returned URL. At the top of the page, put the 3 images, each with its headline, source and notes, plus the prompt used. Below them, list the other prompts and attach the full `design-prompts.md`.
7. Tell the user what's left before launch (price refresh + [DATE], Canva fixes).

## Rewriting pasted primary text for a project

When the user pastes ad copy from another project and asks to "make it <project>": keep their format (bold-unicode header, emoji bullets, CTA lines) and swap in this project's confirmed facts from `research.md`. Apply the copy rules above, especially: preview/VVIP → "show flat open for viewing", growth claims removed, "minutes to" → "near" unless walk time is sourced, exact price with fine print. Append the result to `copy-brief.md` as a new revision, and give the user copy-ready code blocks.
