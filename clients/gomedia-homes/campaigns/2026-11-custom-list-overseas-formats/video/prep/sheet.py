import sys, glob, os
from PIL import Image, ImageDraw
d, out = sys.argv[1], sys.argv[2]
fs = sorted(glob.glob(os.path.join(d, 'f*.png')))
ims = [Image.open(f) for f in fs]
w, h = ims[0].size; cols = 4; rows = (len(ims) + cols - 1) // cols
sh = Image.new('RGB', (cols * (w + 8), rows * (h + 34)), 'white')
dr = ImageDraw.Draw(sh)
for i, (f, im) in enumerate(zip(fs, ims)):
    x, y = (i % cols) * (w + 8), (i // cols) * (h + 34)
    sh.paste(im, (x, y + 30)); n = int(os.path.basename(f)[1:4])
    dr.text((x + 4, y + 8), f"frame {n}  ({n/30:.2f}s)", fill='black')
sh.save(out)
