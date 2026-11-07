# Usage: python tools/sheet.py <video.mp4> <sheet.png> t1,t2,...   (needs ~/.hf-ffmpeg/ffmpeg.exe)
import sys, subprocess, os, tempfile
from PIL import Image, ImageDraw
ff = os.path.expanduser('~/.hf-ffmpeg/ffmpeg.exe')
vid, out, ts = sys.argv[1], sys.argv[2], [float(t) for t in sys.argv[3].split(',')]
tmp = tempfile.mkdtemp(); W, H = 360, 640; cols = 5 if len(ts) > 8 else 4
rows = (len(ts) + cols - 1) // cols
sheet = Image.new('RGB', (cols * (W + 8) + 8, rows * (H + 34) + 8), 'white'); d = ImageDraw.Draw(sheet)
for i, t in enumerate(ts):
    p = os.path.join(tmp, f'{i}.png')
    subprocess.run([ff, '-v', 'error', '-y', '-ss', str(t), '-i', vid, '-frames:v', '1', p], check=True)
    im = Image.open(p).convert('RGB').resize((W, H), Image.LANCZOS)
    x, y = 8 + (i % cols) * (W + 8), 8 + (i // cols) * (H + 34)
    d.text((x, y), f'{t:.2f}s  (frame {round(t*30)})', fill='black'); sheet.paste(im, (x, y + 22))
    # safe-zone guides: top 270 / bottom 385 px of 1920
    for gy in (270, 1920 - 385):
        yy = y + 22 + int(gy * H / 1920); d.line([(x, yy), (x + W, yy)], fill=(255, 0, 0), width=1)
sheet.save(out); print(out, sheet.size)
