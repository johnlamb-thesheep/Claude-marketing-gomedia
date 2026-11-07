import sys
from PIL import Image, ImageFilter, ImageOps, ImageDraw
src,out,S=sys.argv[1],sys.argv[2],sys.argv[3]
im=Image.open(src).convert('RGB')
def clone(box,dy):
    x0,y0,x1,y1=box; pad=4
    patch=im.crop((x0-pad,y0-pad+dy,x1+pad,y1+pad+dy))
    m=Image.new('L',patch.size,0); ImageDraw.Draw(m).rectangle((pad,pad,patch.size[0]-pad,patch.size[1]-pad),fill=255)
    m=m.filter(ImageFilter.GaussianBlur(2.5))
    im.paste(patch,(x0-pad,y0-pad),m)
clone((262,293,283,318),-26)
clone((156,290,192,313),-25)
im.save(out)
L=im.convert('L')
for n,(x0,x1) in enumerate([(140,230),(255,300)]):
    ImageOps.autocontrast(L.crop((x0,280,x1,335)),cutoff=2).resize(((x1-x0)*8,440),Image.NEAREST).save(S+'/h%d.png'%n)
