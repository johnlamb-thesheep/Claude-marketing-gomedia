---
name: leadx-video-ad
description: Make LeadX video ads (verified buyer or seller leads for property agents) in Remotion from an ElevenLabs voiceover — 9:16, ~15s, VO sped up 1.2x, animation synced to words, SFX, captions. Use when the user sends a LeadX voiceover MP3, asks for a LeadX buyer/seller video ad or script, or wants a new variation of one.
---

> **Project location:** all building, rendering and file paths in this skill are inside `C:/Users/asus/Documents/Claude Video Editing/my-video`. Run every command from that folder (cd there first), even if the current session was opened elsewhere.

# LeadX video ads

> **Client rules live in `clients/gomedia/playbook/video.md`** (offer wording, hook order, look). Read it before writing a script. This skill is only the how-to.

Remotion project: `my-video`. Output 1080x1920, 30fps, ~12–16s.

## Existing compositions to reuse
- `src/LeadX/SellerQ4Video.tsx` — white Q4 seller ad: year-clock hook, big count-up "10", yellow FROM $500 tag, seller-lead notification cards, real Singapore map with town pins on spoken names, CTA end card. Also exports `SellerQ4VideoOfferFirst` (offer card from 0.2s).
- `src/LeadX/LeadXAd.tsx` + `variants.ts` + `Scenes.tsx` — older shared buyer/seller template (buyer white/maroon, seller black/red). Treat the seller variant as a failed reference.
- Map tiles: `public/sg-tiles/` + `src/LeadX/sg-tiles.json`.

## Pipeline (every voiceover)
1. Copy MP3 to `scratch/`, then from `my-video`:
   - `npx remotion ffmpeg -y -i scratch/X.mp3 -filter:a "atempo=1.2" -ar 48000 -ac 1 public/<dir>/vo-1.2x.wav`
   - `npx remotion ffmpeg -y -i public/<dir>/vo-1.2x.wav -ar 16000 -ac 1 -c:a pcm_s16le scratch/X-16k.wav`
   - `node scratch/transcribe-leadx.mjs scratch/X-16k.wav scratch/X-raw.json` (whisper.cpp medium.en, word timings; run in background — ~1 min).
2. Put word timings in a `WORDS` array (`[word, startMs, endMs]`, fix misheard names e.g. "Top ayo" → Toa Payoh) and derive `BEAT` frames with `Math.round(ms/1000*30)`. Build `PAGE_STARTS` (2–4 words per caption page) and `KEYWORDS` (highlighted words).
3. Write the composition, register in `src/Root.tsx`, `npx tsc --noEmit`.
4. Render 4–6 stills at key beats (`npx remotion still <Id> scratch/x-<f>.jpg --frame=<f> --scale=0.35`), **look at them**, fix overlaps/clipping/wrapping.
5. Render: `npx remotion render <Id> out/<Name>.mp4 --log=error`; send with SendUserFile.
6. Summarise beat-by-beat (VO line → what's on screen) and flag mock content and stale-date risks. Keep old versions (rename to -v1) when redoing.

## SFX (public/sfx)
whoosh.wav (cuts/entrances), drop_002 (stamps, pins), ding.wav (price/arrival), glass_001/003 (button, reveal), pluck_001/002 (list items), tick_001 (counters), switch_002 (MRT/lock), maximize_004 (+N slam), click_002 (final tap), bookPlace1 (heavy stamp). Hit SFX 2–3 frames before the visual. Volumes 0.2–0.6.

## Gotchas
- Remotion's bundled ffmpeg has no `-vf`/`filter_complex` — only simple ops (atempo, resample, `-ss -frames:v 1` frame grabs).
- Bash heredocs/`node -e` break on apostrophes — use Write for scripts.
- OSM: use `tile.openstreetmap.de` + photon geocoder; credit "© OpenStreetMap contributors".
