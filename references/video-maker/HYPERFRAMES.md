# HyperFrames (HTML + GSAP video) – house guide

HyperFrames renders video from an HTML page. Timing comes from `data-*` attributes, and motion comes from one paused GSAP timeline that the renderer seeks frame by frame. The skills are in `.claude/skills/hyperframes*`, `motion-graphics` and `remotion-to-hyperframes`. Start with `hyperframes/SKILL.md`, then read `hyperframes-core`, `hyperframes-animation` (`rules-index.md`, `rules/kinetic-beat-slam.md`, `blueprints/kinetic-type-beats.md`) and `hyperframes-cli`.

**Our rules win.** Where the HF skills disagree with this repo, follow this repo: CLAUDE.md (approval, cost, image rights, asking for materials), `GUIDELINES.md`, the client's playbook (`clients/<client>/playbook/`) and brand files.

- Never run `hyperframes publish` (it uploads the project and makes a public URL).
- Never run `lambda` (AWS spend).
- Never use HeyGen TTS, BGM or SFX retrieval, ElevenLabs API calls or any other paid provider unless the user approves in chat and has seen a cost estimate first. HF's "render is user-gated" rule is weaker than ours. A render is local and free, but the MP4 still goes to the user for approval before any upload.

## Which tool

| Job | Tool |
|---|---|
| ~15 s reel or ad driven by kinetic type, chips, cards and price builds (property reel, offer ad, listing ad) | **HyperFrames**, the new default for type-led motion. It's fast and CSS layout is easy. |
| An existing Remotion job that only needs small edits, or a job with characters/rigs (`Agent.jsx`, `StandAgent.jsx`) | **Remotion** (`TECH.md`). Don't port it unless the user asks. |
| Flythrough footage with heavy crop/pan maths already solved in Remotion | Remotion. HF also works: put `<video>` at root level, muted, and animate a wrapper. |
| 30–90 s explainers, screen demos, talking-head edits, clip batches, dubs, "make one like this Reel" | **OpenMontage** (`OPENMONTAGE.md`) |
| A viral-reel clone plus many variants | Hypit (`HYPIT.md`) |

## Project layout (one per client job)

```
clients/<client>/campaigns/<YYYY-MM-name>/hyperframes/
  index.html            # the composition (root data-composition-id="main", 1080x1920, data-duration=15)
  CLAUDE.md             # 4 lines: our rules win, timing table location, PATH trick (replace HF's scaffolded one; delete AGENTS.md)
  package.json          # no "publish" script
  assets/voice.mp3      # user's ElevenLabs file (sped if needed)
  assets/img/           # pre-cropped stills (logos/watermarks already cropped out)
  assets/sfx/           # local licensed SFX + CREDITS.md
  assets/fonts/         # woff2 copied locally
  assets/vendor/gsap.min.js   # local GSAP, no CDN at render time
  tools/build.sh        # render wrapper (sets PATH)
  tools/sheet.py        # contact sheet from the MP4, with safe-zone guides
  out/<name>.mp4, out/<name>_contact-sheet.png
```

Scaffold with `HYPERFRAMES_SKIP_SKILLS=1 npx -y hyperframes@0.9.19 init hyperframes --example blank --resolution portrait --non-interactive`. The env var stops `init` from rewriting `.claude/skills` from GitHub.

## This PC: FFmpeg, RAM

- **FFmpeg PATH trick.** There's no system FFmpeg. The Remotion compositor's `ffmpeg.exe` is enough for `doctor`, `lint` and `snapshot`, but it **fails on render**: it has no `setparams` filter and no `pcm_f32le` encoder. Use the full build copied to `C:\Users\asus\.hf-ffmpeg\ffmpeg.exe` (from Python's `imageio_ffmpeg`, a gyan.dev essentials build). Put it first on PATH, with the Remotion folder after it for `ffprobe`:
  ```bash
  export PATH="/c/Users/asus/.hf-ffmpeg:<campaign>/video/node_modules/@remotion/compositor-win32-x64-msvc:$PATH"
  export HYPERFRAMES_SKIP_SKILLS=1
  ```
  If `.hf-ffmpeg` is missing, recreate it with `cp "$(python -c 'import imageio_ffmpeg;print(imageio_ffmpeg.get_ffmpeg_exe())')" ~/.hf-ffmpeg/ffmpeg.exe`.
- **Low RAM (~0.5 GB free).**
  - Always pass `--workers 1`; each worker is a Chrome instance (~256 MB).
  - Iterate with `snapshot` (seconds) and `--quality draft`. Render `--quality high` once at the end.
  - No per-frame CSS `filter: blur()`, `backdrop-filter`, SVG turbulence or grain. Pre-blur backgrounds in Pillow instead.
  - Animate transforms and opacity only.
- Measured: a 15 s, 1080×1920 kinetic reel takes ~15 s for 10 snapshots, ~53 s for a draft render and ~60 s for a high render.

## Voiceover workflow (same rules as `GUIDELINES.md` §2)

1. Use the user's ElevenLabs file. MD5-check every "new" upload against the last one.
2. Speed with `ffmpeg -filter:a atempo=1.2` (1.2x default or the client's playbook speed, 1.1x if 1.2x drops below ~14 s; aim for ~15 s), or keep 1.0x if it already lands at ~14–15 s. Tell the client which speed you used.
3. Word timings: pocketsphinx (`TECH.md`), or `npx hyperframes transcribe` if whisper is installed (local, free). Write one table at the top of the script: `const W = {word: seconds}`. **Every cue reads from W**: entrances, block wipes, card counts, SFX `data-start`, caption word tints. If the speed changes, scale W once.
4. Never build a final without the voice. Without it, the result is a labelled timing draft.

## Kinetic style (HF version of `GUIDELINES.md` §4)

- **One beat source.** Scene cuts sit on phrase starts. Each word or phrase slams on its own W time.
- **Vary the entrances** (kinetic-beat-slam): scale-slam `power4.out`, side-snap `expo.out`, rise-rotate `circ.out`, and `back.out` for chips and pops only.
  - Hits last 0.3–0.45 s.
  - Highlight blocks wipe with `scaleX` 0→1 (~0.2 s) just before the word, then the text rises inside an `overflow:hidden` mask.
- **Punch the beat.** On a stressed word, give the group a 0.07 s scale/y nudge, then `back.out(3)` settle. On a big number, add a 6-step deterministic shake.
- **Cards and counts.** Cards fly in from off-screen, one per counted word, with a pop SFX each. A digit strip ticker counts with them. Prices build glyph by glyph on the spoken words (slot columns roll 0→1, 0→1→2). The final figure must be the real figure.
- **Whip transitions.** A skewed blue panel crosses the frame in 0.44 s, and the scene swap happens under its midpoint. The background shifts x a little at each whip for parallax.
- **Stills always move.** Push in on the background for the whole video. Each card image has its own Ken Burns scale inside the card.
- Fonts: League Gothic (display) and Roboto (body) are what this campaign uses. Anton and Montserrat 800 are the house default for red-scheme reels. HF pre-bundles League Gothic, Montserrat, Oswald and Archivo Black. We still copy the woff2 into `assets/fonts/` and declare `@font-face` (from `@fontsource/*` in a Remotion `node_modules`, or the npm package) so renders never fetch fonts.

## Captions and safe zones (Reels/Stories, 1080×1920)

- Key text stays between **y 270 and y 1535** (top ~270 px and bottom ~385 px are covered by platform UI).
- Captions sit in a dark pill (Roboto 700, ~34 px) at **top ≈1440 px** (always above y 1500). Use one `.clip` per phrase on its own track, and tint the current word from W.
- Captions follow the VO, except that a misleading VO claim gets the approved softer wording on screen. Flag that to the user.
- `tools/sheet.py` draws the 270/1535 guide lines on every contact-sheet frame.

## Compliance overlays

Labels, fine print and banned words come from the client's playbook (`clients/<client>/playbook/video.md` and its copy rules). Typical for property:

- Image-sample labels on renders and room photos (≥23 px), "illustrative" labels on redrawn maps and floor plans.
- The price asterisk links to end-card fine print (≥24 px, on screen ≥2.5 s). Leave placeholders as placeholders and flag them; never invent dates or licence numbers.
- No third-party logos or watermarks (crop them out in Pillow before they reach `assets/img/`).

## SFX

- Use local licensed files only. `.claude/skills/hyperframes-media/assets/sfx/` (21 Pixabay-licensed files, see `CREDITS.md`) is fine. Copy the ones you use plus `CREDITS.md` into `assets/sfx/`.
- No downloads from third-party sites, and no HeyGen retrieval (paid credential).
- House default is voice plus 2–3 small effects (pop, thud, click); quiet whooshes on whips are optional. Volumes: whoosh 0.2, pop 0.16, impact 0.28, click 0.5. No music unless asked, and only licensed tracks.

## HF composition rules that bite (from hyperframes-core)

- One `gsap.timeline({paused:true})` at `window.__timelines["main"]`, built synchronously. No `Date.now`, unseeded `Math.random`, `repeat:-1` (use `Math.max(0, Math.floor(dur/cycle)-1)`), or `display`/`visibility` tweens.
- Timed elements need `class="clip"` and must be **direct children of the root**. `<audio>`/`<video>` must be direct root children too.
- Animate a wrapper *inside* a clip, not the clip itself.
- The first tween on an element/property is `fromTo` (sets the start state at build time). Later tweens are `.to`. A second `fromTo` needs `immediateRender:false`.
- Put the full-screen background on a child layer, not on the root.
- Intentional off-canvas elements (parked wipe panels, ticker strips, chips waiting to fly in) get `data-layout-allow-overflow`.

## Remotion → HyperFrames mapping

| Remotion | HyperFrames |
|---|---|
| `<Composition fps durationInFrames width height>` | root `<div data-composition-id="main" data-fps="30" data-duration="15" data-width="1080" data-height="1920">` |
| `useCurrentFrame()` + maths per frame | gone. Each derived value becomes a tween on the paused timeline at `seconds = frame/fps` |
| `interpolate(f,[a,b],[x,y],{easing})` | `tl.fromTo(el,{p:x},{p:y,duration:(b-a)/fps,ease},a/fps)` |
| `Easing.out(Easing.cubic)` / `Easing.out(Easing.exp)` / `inOut(cubic)` | `power2.out` / `expo.out` / `power2.inOut` |
| `spring()` / `Easing.back(n)` | `back.out(1.3–3)` (more overshoot = higher number) |
| `<Sequence from durationInFrames>` | an element with `class="clip" data-start data-duration data-track-index` |
| `<AbsoluteFill>` | `position:absolute; inset:0` div |
| `<Audio src volume>` inside `<Sequence>` | root-level `<audio src data-start data-duration data-track-index data-volume>` (overlapping sounds on different tracks) |
| `<Img src={staticFile()}>` | `<img src="assets/img/…">` |
| `<OffthreadVideo muted startFrom playbackRate>` | root-level `<video muted playsinline data-start data-trim-start data-playback-rate>`, animate a wrapper |
| `delayRender` + `document.fonts.load` | drop. `@font-face` with local woff2 is embedded at compile time |
| `zIndex` bleed-through bugs | same fix: DOM order and z-index; also check `inspect` "text_occluded" |
| `remotion still --frame=N` | `hyperframes snapshot --at t1,t2,…` (writes a contact sheet too) |
| `remotion render … --crf=18` | `hyperframes render --quality high --workers 1 --output out/x.mp4` |

Only use the `remotion-to-hyperframes` skill (lint, SSIM eval) when the user explicitly asks to *port* a Remotion project. A "make it like the Remotion one but better" request is a fresh HF build that reuses W, the crops and the SFX.

## Render and QA loop

1. `npx -y hyperframes@0.9.19 lint`: 0 errors. "nested_structure" and "track too dense" warnings are advisory for single-file reels.
2. `validate`: 0 console errors. Read contrast warnings at the reported time; ones on text still hidden in its mask can be ignored.
3. `inspect`: check every ⚠. Fix real overflow and overlap; mark intentional ones `data-layout-allow-overflow`.
4. `snapshot --at …` (~10 key times, including mid-whip and mid-flip), then look at the sheet. Typical catches: text overflow, labels sitting on a hero card, slivers of parked panels, empty beats.
5. `bash tools/build.sh draft out/draft.mp4`, then run `python tools/sheet.py out/draft.mp4 out/draft_sheet.png <times>` and look at the sheet again.
6. Fix, then `bash tools/build.sh high out/<name>.mp4`, then make the final contact sheet `out/<name>_contact-sheet.png`.
7. Check `ffprobe` (duration ~15 s, h264 + aac) and audio levels (`-af volumedetect`; mean around −17 dB, max ≤ −1 dB).
8. Deliver: scene list, what changed, and a please-check list (placeholders, claims, image rights). Keep earlier versions (`_v2`, `_v3`).
