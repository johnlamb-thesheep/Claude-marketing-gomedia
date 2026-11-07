# GoAhead C1 Custom List – kinetic 15s reel (HyperFrames)

House rules win over the HyperFrames defaults. Read `references/video-maker/HYPERFRAMES.md` (repo root) first.
- No `hyperframes publish`, no Lambda, no HeyGen TTS/BGM/SFX retrieval without the user's approval and a cost estimate.
- Word timings live in `index.html` (`W`); every cue reads from it. Voice v2 = `assets/voice-v2.mp3` (voice-adam-v2 at 1.05x, 14.26 s); v1 source is `versions/index-v1.html` with `assets/voice.mp3`.
- Before any CLI call on this PC, put the full FFmpeg on PATH: `export PATH="$HOME/.hf-ffmpeg:<campaign>/video/node_modules/@remotion/compositor-win32-x64-msvc:$PATH"` (ffprobe comes from the Remotion folder) (or run `tools/build.sh`). The Remotion-bundled ffmpeg is missing filters/encoders HyperFrames needs for rendering.
