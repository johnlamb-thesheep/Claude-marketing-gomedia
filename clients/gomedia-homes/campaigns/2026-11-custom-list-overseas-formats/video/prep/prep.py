import sys
from PIL import Image, ImageFilter
A=sys.argv[1]; P=sys.argv[2]; S=sys.argv[3]
CW,CH=470,824
def card(src,box,out,fix=None):
    im=Image.open(f"{A}/{src}").convert('RGB')
    if fix: im=fix(im)
    im=im.crop(box).resize((CW,CH),Image.LANCZOS)
    im.save(f"{P}/{out}",quality=92)
    return im
def wm08(im):
    # soften the faint watermark band (y~288-326) so no letters survive
    band=(0,286,800,328)
    reg=im.crop(band).filter(ImageFilter.GaussianBlur(5))
    im.paste(reg,band[:2]); return im
c1=None  # card1 built from prep/img08-clean.png (watermark letters clone-patched by prep/wm3.py), crop (0,0,304,533)
c2=card('img-09.png',(292,0,500,365),'card2.jpg')
c3=card('img-11.webp',(395,0,714,560),'card3.jpg')
c4=card('img-12.webp',(430,0,1193,1339),'card4.jpg')
fp=Image.open(f"{A}/img-10-2bed-floorplan.png").convert('RGB').crop((215,22,958,548))
fp.save(f"{P}/floorplan.png")
bg=Image.open(f"{A}/img-13-background-pool.webp").convert('RGB')
w,h=bg.size; tw=int(h*1080/1920); x0=(w-tw)//2+60
bg=bg.crop((x0,0,x0+tw,h)).resize((1080,1920),Image.LANCZOS).filter(ImageFilter.GaussianBlur(14))
bg.save(f"{P}/bg-pool.jpg",quality=90)
sheet=Image.new('RGB',(CW*4+30,CH),'white')
for i,c in enumerate([c1,c2,c3,c4]): sheet.paste(c,(i*(CW+10),0))
sheet.save(f"{S}/cards.jpg")
