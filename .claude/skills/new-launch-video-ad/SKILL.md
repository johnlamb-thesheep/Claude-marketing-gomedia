---
name: new-launch-video-ad
description: Make Singapore new-launch condo / EC video ads (blind or direct) in Remotion from an ElevenLabs voiceover — ask the user for renders/brochure/facts first (online research only if they have none and agree), speed VO 1.2x, sync animation to words, real maps for walking distances, SFX and captions. Use when the user names a property project (e.g. "do it for Hougang Central Residences", "this is Dover Residences"), sends a property VO, asks for a property script, or wants a blind/direct ad variation.
---

> **Project location:** all building, rendering and file paths in this skill are inside `C:/Users/asus/Documents/Claude Video Editing/my-video`. Run every command from that folder (cd there first), even if the current session was opened elsewhere.

# New-launch property video ads

> **Client rules live in `clients/gomedia-homes/playbook/video.md`** (blind vs direct, script shape, visual rules) and `static-ads.md` (copy rules). Read them before writing. This skill is only the how-to.

Remotion project: `my-video`. 1080x1920, 30fps, ~12–15s. One folder per project in `src/<Project>/` and `public/adN/`.

## Ask for materials first (saves credits)
Online research and image hunting is the most expensive part of this job. Before any WebSearch or image download:
1. **Check what's already here:** `clients/gomedia-homes/inputs/product-images/<project>/`, `inputs/ad-references/`, any `research-<project>.md` in `clients/gomedia-homes/campaigns/`, and earlier `public/adN/` folders in `my-video` for the same project. Reuse them.
2. **Ask the user once, in one short message** (skip what you already have):
   > Before I start on **[project]** — do you have any of these? Just drag them in:
   > - Renders or photos of the project (developer renders are best)
   > - Brochure, floor plan or price list (PDF or screenshot)
   > - Key facts you want in: district, tenure, nearest MRT + walk time, price/psf, TOP
   > - Blind or direct ad?
   >
   > If not, say **"search online"** and I'll find them myself (takes longer and uses more credits), or **"no images"** and I'll make a text-and-map version.
3. **Then:** files given → use only those, no web search (only look up a missing fact if the user agrees). "search online" → do the research below. "no images" → text-led scenes + real map, no renders.

## Research first (only if the user said "search online", or gave no files and agreed)
- WebSearch (standard, then extended if thin) for developer, tenure, units, site, MRT, schools, malls, launch/TOP timing, expected psf. Note which facts are estimates/marketing.
- Images: curl agent sites and EdgeProp new-launch pages (`img.tepcdn.com/img-v2/new-launches/m-max_1000/...` galleries are developer renders). Download to `scratch/adNweb/`, **look at every image**, reject: name printed (blind), watermarks, other projects, stock photos. AI/artist-impression renders are acceptable ("better than nothing") — add fine print "Images are artist's impressions / concept renders, for illustration only".
- Facebook reels need login; ask the user to download (e.g. FDown) and extract frames with `npx remotion ffmpeg -ss <t> -i ref.mp4 -frames:v 1 f<t>.jpg` + whisper for the script.
- Flag claims to verify: prices not released ("expected"), launch status ("new launch" vs already launched), distances.

## Proven components to copy from
- `src/Arcady/ArcadyV2.tsx` / `ArcadyV3.tsx` — champagne-gold serif luxury look, WalkBar (home → station walker with minute counter), locked project-name CTA (V3, blind).
- `src/Arcady/ArcadyDirect.tsx` — direct ad with real-map walk to MRT + school pin + 3-card CTA.
- `src/Hougang/HougangAd.tsx` (blind, callout pills over hub render), `HougangV2.tsx` (clip on top + bottom key-word card with photo), `HougangDirect.tsx` (purple/lime highlight boxes, radial 5-min ring, typed name, assembling layers, bottom-sheet CTA).
- `src/BukitPanjangEC/MapScene.tsx`, `src/BedokRise/MapScene.tsx` — stylised maps (pin drop, walking dots, LRT ride).
- `src/Dover/` — price tag swing + RARE stamp + isometric street with stopwatch walkers.
- `src/Collective/CollectiveAd.tsx` — "4 MRT lines" line-code cards.
- Property statics: `src/BedokRise/Statics.tsx` (NEW LAUNCH banner, real map static, checklist).

## Pipeline
Same as the LeadX video skill: copy MP3 → `npx remotion ffmpeg -filter:a "atempo=1.2"` → 16k wav → `node scratch/transcribe-leadx.mjs` (background) → `timing.ts` with WORDS/BEAT/PAGE_STARTS/KEYWORDS → composition → register in Root → tsc → still-check key frames (**always look**) → render → SendUserFile with a beat-by-beat summary and the things to check (prices, distances, image rights, blind leaks).

## Gotchas
- Remotion ffmpeg: no filters; crop/blur images via a Remotion `<Still>` instead.
- Bash heredocs break on apostrophes (`DON'T`, `IT'S`) — use the Write tool for scripts/JSX snippets.
- Keep previous renders (rename `-v1`) when redoing an ad.
