"""Packs each turnable 3D scene rendered by spin3d.py into the files the guide serves (21 Nov 2026):
  app/spin/<key>.webp     every frame in one picture, COLS to a row (one file per scene keeps the artifact under its file limit)
  app/spin/<key>-0.webp   the first frame alone, shown before the scene is turned
and writes parts/data29.js (SPIN: frames, size, grid and each label's place on each frame). Banner stills rendered by
spin3d.py (sources/spin/still-<key>.png) become app/tiles/<key>.webp at the tiles' own 640 x 360.
Run: C:/Python314/python -I spin-pack.py <key> [<key> ...]"""
import sys, os, json, site
sys.path.append(site.getusersitepackages())
from PIL import Image
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
COLS, Q = 6, 74
os.makedirs(os.path.join(ROOT, 'app', 'spin'), exist_ok=True)
DATA = os.path.join(ROOT, 'src', 'parts', 'data29.js')
import numpy as np
from PIL import ImageDraw
# as spin3d.py's IDCOL (linear), written out through the sRGB curve (0.5 linear is 188 in the PNG)
srgb = lambda c: 12.92 * c if c <= 0.0031308 else 1.055 * c ** (1 / 2.4) - 0.055
IDCOL = np.array([[srgb(c) for c in t] for t in [(1, 0, 0), (0, 1, 0), (0, 0, 1), (1, 1, 0), (1, 0, 1), (0, 1, 1), (1, 0.5, 0), (0.5, 0, 1)]]) * 255

def trace(m, y0, x0):
    """Moore-neighbour trace of the outer boundary of the 8-connected blob whose topmost-leftmost pixel is (y0, x0)."""
    H, W = m.shape
    D = [(-1, 0), (-1, 1), (0, 1), (1, 1), (1, 0), (1, -1), (0, -1), (-1, -1)]  # N, NE, E, SE, S, SW, W, NW (clockwise)
    on = lambda y, x: 0 <= y < H and 0 <= x < W and m[y, x]
    pts, y, x, b = [(x0, y0)], y0, x0, 6  # came from the west
    for _ in range(200000):
        for t in range(8):
            d = (b + 1 + t) % 8; ny, nx = y + D[d][0], x + D[d][1]
            if on(ny, nx):
                b = (d + 4) % 8; y, x = ny, nx; break
        else: return pts
        if (x, y) == (x0, y0): return pts
        pts.append((x, y))
    return pts

def dp(pts, eps):
    """Douglas-Peucker on a closed outline."""
    if len(pts) < 4: return pts
    a = np.array(pts, float)
    def rec(i, j):
        if j <= i + 1: return [i]
        p, q = a[i], a[j]; d = q - p; n = np.hypot(*d) or 1e-9
        seg = a[i + 1:j]; dist = np.abs(d[0] * (seg[:, 1] - p[1]) - d[1] * (seg[:, 0] - p[0])) / n
        k = int(np.argmax(dist))
        if dist[k] > eps: return rec(i, i + 1 + k) + rec(i + 1 + k, j)
        return [i]
    far = int(np.argmax(((a - a[0]) ** 2).sum(1)))
    idx = rec(0, far) + rec(far, len(a) - 1) + [len(a) - 1]
    return [pts[i] for i in sorted(set(idx))]

def outlines(path, nreg, eps=2.0, min_px=60):
    a = np.asarray(Image.open(path).convert('RGB'), float)
    d = ((a[:, :, None, :] - IDCOL[None, None, :nreg, :]) ** 2).sum(3)
    lab = np.where(d.min(2) < 60 ** 2, d.argmin(2), -1)
    out = []
    for k in range(nreg):
        m = lab == k
        while m.sum() >= min_px:
            ys, xs = np.nonzero(m); i = np.lexsort((xs, ys))[0]
            c = trace(m, ys[i], xs[i])
            blob = Image.new('1', (m.shape[1], m.shape[0]), 0); ImageDraw.Draw(blob).polygon(c, fill=1, outline=1) if len(c) > 2 else None
            filled = np.array(blob, bool); filled[ys[i], xs[i]] = True
            if (m & filled).sum() >= min_px and len(c) > 2:
                out.append([k, ' '.join('%d,%d' % q for q in dp(c, eps))])
            m &= ~filled
    return out

spin, regs = {}, {}
for key in sys.argv[1:]:
    if key.startswith('still-'):
        k = key[6:]
        im = Image.open(os.path.join(ROOT, 'sources', 'spin', key + '.png')).convert('RGB')
        im.resize((640, 360), Image.LANCZOS).save(os.path.join(ROOT, 'app', 'tiles', k + '.webp'), quality=78, method=6)
        im.save(os.path.join(ROOT, 'illustrations', 'tiles', k + '.jpg'), quality=90)
        print('still', k, os.path.getsize(os.path.join(ROOT, 'app', 'tiles', k + '.webp')), 'bytes')
        continue
    src = os.path.join(ROOT, 'sources', 'spin', key)
    meta = json.load(open(os.path.join(src, 'anchors.json'), encoding='utf-8'))
    n, w, h = meta['frames'], meta['w'], meta['h']
    rows = -(-n // COLS)
    sheet = Image.new('RGB', (COLS * w, rows * h))
    for f in range(n):
        im = Image.open(os.path.join(src, 'f%02d.png' % f)).convert('RGB')
        sheet.paste(im, ((f % COLS) * w, (f // COLS) * h))
        if f == meta.get('first', 0): im.save(os.path.join(ROOT, 'app', 'spin', key + '-0.webp'), quality=Q + 6, method=6)
    out = os.path.join(ROOT, 'app', 'spin', key + '.webp')
    sheet.save(out, quality=Q, method=6)
    spin[key] = {'n': n, 'w': w, 'h': h, 'cols': COLS, 'rows': rows, 'bytes': os.path.getsize(out), 'names': meta['anchors'], 'at': meta['at']}
    if meta.get('arc'): spin[key]['arc'] = meta['arc']; spin[key]['first'] = meta['first']  # turns through an arc, opening on view 'first'
    if meta.get('regions'):
        # a scene with parts the page outlines: each part's outline on each view, traced from the ID pass (idNN.png)
        spin[key]['regions'] = meta['regions']
        regs[key] = [outlines(os.path.join(src, 'id%02d.png' % f), len(meta['regions'])) for f in range(n)]
        print(key, 'outlines', sum(len(r) for r in regs[key]), 'polygons,', sum(len(p[1]) for r in regs[key] for p in r), 'characters')
    print(key, n, 'frames', sheet.size, os.path.getsize(out), 'bytes; poster', os.path.getsize(os.path.join(ROOT, 'app', 'spin', key + '-0.webp')), 'bytes')
if spin:
    old = {}
    if os.path.exists(DATA):
        t = open(DATA, encoding='utf-8').read()
        old = json.loads(t[t.index('{'):t.rindex('}') + 1])
    old.update(spin)
    with open(DATA, 'w', encoding='utf-8', newline='\n') as f:
        f.write('/* Generated by src/spin-pack.py from sources/spin/<key>/ (rendered by src/spin3d.py): do not edit by hand.\n'
                '   SPIN: each turnable 3D scene: its frame count, frame size, grid in app/spin/<key>.webp, its size in bytes, and each\n'
                '   label\'s place on every frame, [yaw, [[x, y, depth], ...]] in frame pixels. */\n')
        f.write('const SPIN = ' + json.dumps(old, separators=(',', ':')) + ';\n')
    print('wrote', DATA)
if regs:
    # the outlines go in a file of the page's second part (build.js HEAVY), so a first open does not carry them
    RD = os.path.join(ROOT, 'src', 'parts', 'data34.js')
    old = {}
    if os.path.exists(RD):
        t = open(RD, encoding='utf-8').read()
        old = json.loads(t[t.index('{'):t.rindex('}') + 1])
    old.update(regs)
    with open(RD, 'w', encoding='utf-8', newline='\n') as f:
        f.write('/* Generated by src/spin-pack.py from the ID pass of a scene of parts (sources/spin/<key>/idNN.png): do not edit by hand.\n'
                '   SPIN_REG: for each such scene, on every view, each visible part\'s outline: [part, "x,y x,y ..."] in frame pixels. */\n')
        f.write('const SPIN_REG = ' + json.dumps(old, separators=(',', ':')) + ';\n')
    print('wrote', RD, os.path.getsize(RD), 'bytes')
