#!/usr/bin/env bash
# Usage: tools/build.sh draft|high <out.mp4>
# FFmpeg on this PC: full ffmpeg = ~/.hf-ffmpeg/ffmpeg.exe (copied from Python imageio-ffmpeg, gyan.dev essentials build);
# ffprobe = the Remotion compositor folder. The Remotion ffmpeg alone is too stripped for HF renders (no setparams / pcm_f32le).
set -e
cd "$(dirname "$0")/.."
Q=${1:-draft}; OUT=${2:-out/draft.mp4}
export PATH="/c/Users/asus/.hf-ffmpeg:$(cd ..; pwd)/video/node_modules/@remotion/compositor-win32-x64-msvc:$PATH"
export HYPERFRAMES_SKIP_SKILLS=1
npx -y hyperframes@0.9.19 render --quality "$Q" --workers 1 --output "$OUT"
[ -s "$OUT" ] && ffprobe -v error -show_entries format=duration:stream=codec_name,width,height -of compact "$OUT"
