# Technical notes (Remotion pipeline)

## Stack

- **Remotion 4, React, JSX.** One project per client job. Shared helpers live in `common.jsx`: `s(sec)` → frames, `usePop`, and the `Slam`, `Block`, `Kicker`, and `Flash` components.
- **Fonts:** bundle them from npm (`@fontsource/anton`, `@fontsource/montserrat`) and wait with `delayRender` and `document.fonts.load`. Google Fonts may be blocked at render time.
- **Rendering:**
  - Command: `npx remotion render src/index.jsx <CompId> out/x.mp4 --crf=18`. Pass `--browser-executable` if Chrome can't be downloaded.
  - Stills: `npx remotion still ... --frame=N --scale=0.35`, then tile them into one contact sheet with Pillow to review.

## Voice and timing

```bash
ffmpeg -i voice.mp3 -filter:a atempo=1.2 public/voice.mp3          # speed
ffmpeg -i public/voice.mp3 -ar 16000 -ac 1 v.wav                    # for alignment
```

Use offline word timings (`pip install pocketsphinx`) and print `word@start` for each segment. The recognised words are rough ("bad no house" = "Bagnall Haus"), but the **timings are what you need**. Map them onto the known script.

Write the timings in one table (`W = {word: seconds}`) and drive everything from it.

To change speed later (e.g. 1.2x → 1.3x), scale every time with one factor (`K = 1.2/1.3`) inside `s()`. Divide the caption lookup by `K` as well.

## Footage

```bash
ffmpeg -i in.mp4 -an -c:v copy public/flythrough.mp4                               # mute
ffmpeg -i in.mp4 -vf "select='gt(scene,0.25)',showinfo" -f null - 2>&1 | grep pts_time   # cut points
ffmpeg -i in.mp4 -vf "fps=1/2,scale=200:-1,drawtext=text='%{pts\:hms}'..." f_%03d.png  # contact sheet
```

- Use `<OffthreadVideo muted startFrom={frames} playbackRate={...}>` inside an absolutely positioned box.
- **9:16 crop:** set H = 1920·zoom and W = H·16/9, and animate `left` between crop positions.
- **Letterbox or burned-in captions:** set `top = -H*(y0/1080) - (H*(h/1080) - 1920)/2` to frame only rows y0…y0+h.

## Common bugs (check every time)

- **Hooks called after an early `return null`.** Call every `usePop` and `spring` first, then return.
- **Overlay layers with `zIndex` show through a covering scene.** Give the covering layer a higher `zIndex`.
- **Text overflow:** long Anton words in highlight blocks wrap or clip, so lower the size until it's one line (~0.45 × size px per character).
- **`<Sequence>` children get a local clock.** Wrap a scene in one to give it its own frame 0.
- **Emoji in text may render as empty boxes** without an emoji font. Avoid them in rendered text.
- **Render time limits:** if a command has a hard time limit, render in chunks with `--frames=a-b --muted`, concatenate with the ffmpeg concat demuxer, and mix the audio with `amix` + `adelay`. Background processes may be killed when the command ends.

## Performance

- **Flat vector style** renders at ~0.2 s/frame on one core, so ~1.5–2 min for 15s.
- **Heavy SVG filters** (blur, glow, turbulence grain on every frame) render at ~1.2 s/frame. Avoid them for quick-turnaround ads.
