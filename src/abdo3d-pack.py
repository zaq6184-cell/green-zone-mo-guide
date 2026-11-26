"""Packs the 3D abdomen map's pictures into four files (26 Nov 2026), so the artifact keeps room under its 511-file limit:
  app/abdo3d/frames-a.webp   turntable frames 0 to 12, five to a row
  app/abdo3d/frames-b.webp   turntable frames 13 to 24, five to a row
  app/abdo3d/front-lit.webp  the front view with each region lit (regions 1 to 9), three to a row
  app/abdo3d/poster.webp     unchanged: the first view, before a turn
The 34 single pictures it replaces (f00.webp to f24.webp, front-lit/r1.webp to r9.webp) are the masters, kept in
sources/abdo/abdo3d-frames/ (git-ignored). Run: C:/Python314/python -I abdo3d-pack.py"""
import os, sys, site
sys.path.append(site.getusersitepackages())
from PIL import Image
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
SRC = os.path.join(ROOT, 'sources', 'abdo', 'abdo3d-frames')
OUT = os.path.join(ROOT, 'app', 'abdo3d')
Q = 74

def sheet(files, cols, out):
    ims = [Image.open(os.path.join(SRC, f)).convert('RGB') for f in files]
    w, h = ims[0].size
    rows = -(-len(ims) // cols)
    s = Image.new('RGB', (cols * w, rows * h))
    for i, im in enumerate(ims): s.paste(im, ((i % cols) * w, (i // cols) * h))
    s.save(os.path.join(OUT, out), quality=Q, method=6)
    print(out, len(ims), 'pictures,', s.size, os.path.getsize(os.path.join(OUT, out)), 'bytes')

sheet(['f%02d.webp' % i for i in range(13)], 5, 'frames-a.webp')
sheet(['f%02d.webp' % i for i in range(13, 25)], 5, 'frames-b.webp')
sheet(['r%d.webp' % i for i in range(1, 10)], 3, 'front-lit.webp')
