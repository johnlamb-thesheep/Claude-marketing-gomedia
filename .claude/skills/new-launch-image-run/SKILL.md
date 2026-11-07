---
name: new-launch-image-run
description: Produce the standard 3 GoAhead (gomedia-homes) new-launch static ads for one condo/EC project — Direct, Floor plan, Price + near MRT — using real project images from Google, generated in the user's free ChatGPT/Gemini through Claude in Chrome, saved to the project folder and filed in the Notion Master Content Tracker. Also covers rewriting pasted primary text for a project. Use when the user names a project and says "do the 3 angles", "make the images", "run it for <project>", "put it in Notion", or pastes another project's ad copy and asks to "make it <project>".
---

# New-launch 3-angle image run (GoAhead)

One project at a time. Everything lives in `clients/gomedia-homes/projects/<slug>/`
(`research.md`, `copy-brief.md`, `design-prompts.md`, `perf-review.md`, `images/`, `images/source/`).
Read `CLAUDE.md`, `clients/gomedia-homes/brand.md`, `learnings.md` and `.claude/skills/gomedia-homes-static-ad-rules/SKILL.md` first.

## The 3 angles (always these, in this order)

1. **Direct (named, price-led).** The only ad that names the project. Lead with the entry price when the cheapest unit is about $1.5M or below (~$1.6M still OK); above that, lead with the hottest USP and show no price.
2. **Floor plan.** The real floor plan of the entry unit type (e.g. "See How 3 Bedrooms Fit in 872 sqft"). Blind.
3. **Price + near MRT (blind).** Price tag + "Near <full MRT name>". Say walk minutes ("5 min walk to X MRT") only when a source confirms them; otherwise just "near".

USPs to lean on: near MRT, amenities (malls, parks, beach, schools), price, future developments (new MRT lines with their target year).

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
4. **Generate (Claude in Chrome).** Try the user's **free ChatGPT** first; if it isn't logged in or hits its limit, use **free Gemini**. Never click upgrade/paid prompts; pause for the user if a login is needed.
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

   Upload each image with `notion-create-file-upload`, then a `curl -F file=@...` POST to the returned URL. At the top of the page, put the 3 images, each with its headline, source and notes, plus the prompt used. Below them, list the other prompts and attach the full `design-prompts.md`.
7. Tell the user what's left before launch (price refresh + [DATE], Canva fixes).

## Rewriting pasted primary text for a project

When the user pastes ad copy from another project and asks to "make it <project>": keep their format (bold-unicode header, emoji bullets, CTA lines) and swap in this project's confirmed facts from `research.md`. Apply the copy rules above, especially: preview/VVIP → "show flat open for viewing", growth claims removed, "minutes to" → "near" unless walk time is sourced, exact price with fine print. Append the result to `copy-brief.md` as a new revision, and give the user copy-ready code blocks.
