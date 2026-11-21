"""The guide's turnable 3D scenes, rendered in Blender (21 Nov 2026).

Each scene is built from code here (no downloaded model), lit in the guide's frosted-glass style, and rendered as a
turntable: FRAMES views around it, written to sources/spin/<key>/fNN.png, with each labelled point's place on every frame
(sources/spin/<key>/anchors.json) so the page can lay its own labels over the picture. src/spin.js packs the frames into
one picture per scene (app/spin/<key>.webp) and writes parts/data29.js.

Run, for one scene or all:
  "C:/Program Files/Blender Foundation/Blender 5.3/blender.exe" -b --factory-startup -P spin3d.py -- route [frames] [width] [height] [samples]
"""
import bpy, math, json, os, sys
from mathutils import Vector
from bpy_extras.object_utils import world_to_camera_view

ARGS = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []
KEY = ARGS[0] if ARGS else 'route'
FRAMES = int(ARGS[1]) if len(ARGS) > 1 else 24
W = int(ARGS[2]) if len(ARGS) > 2 else 720
H = int(ARGS[3]) if len(ARGS) > 3 else 450
SAMPLES = int(ARGS[4]) if len(ARGS) > 4 else 48
ONLY = int(ARGS[5]) if len(ARGS) > 5 else -1  # render one frame only (a test)
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
OUT = os.path.join(ROOT, 'sources', 'spin', KEY)
os.makedirs(OUT, exist_ok=True)

# ---------- scene, world, render ----------
for o in list(bpy.data.objects): bpy.data.objects.remove(o, do_unlink=True)
sc = bpy.context.scene
sc.render.engine = 'CYCLES'
sc.cycles.device = 'CPU'
sc.cycles.samples = SAMPLES
sc.cycles.use_denoising = True
sc.cycles.max_bounces = 10
sc.cycles.transmission_bounces = 10
sc.render.resolution_x, sc.render.resolution_y, sc.render.resolution_percentage = W, H, 100
sc.render.image_settings.file_format = 'PNG'
sc.render.film_transparent = False
try: sc.view_settings.view_transform = 'AgX'
except TypeError: pass
try: sc.view_settings.look = 'AgX - Medium High Contrast'
except TypeError: pass
world = bpy.data.worlds.new('w') if not sc.world else sc.world
sc.world = world
world.use_nodes = True
bg = next(n for n in world.node_tree.nodes if n.type == 'BACKGROUND')
bg.inputs[0].default_value = (0.05, 0.065, 0.07, 1)
bg.inputs[1].default_value = 1.0

def inp(node, *names):
    for n in names:
        if n in node.inputs: return node.inputs[n]
    raise KeyError(names)

def mat(name, base=(0.8, 0.9, 0.88), rough=0.2, trans=0.0, emit=None, estr=0.0, alpha=1.0, ior=1.45, coat=0.0, metal=0.0):
    m = bpy.data.materials.new(name); m.use_nodes = True
    p = next(n for n in m.node_tree.nodes if n.type == 'BSDF_PRINCIPLED')
    inp(p, 'Base Color').default_value = (*base, 1)
    inp(p, 'Roughness').default_value = rough
    inp(p, 'Metallic').default_value = metal
    inp(p, 'Transmission Weight', 'Transmission').default_value = trans
    inp(p, 'IOR').default_value = ior
    inp(p, 'Coat Weight', 'Clearcoat').default_value = coat
    if emit:
        inp(p, 'Emission Color', 'Emission').default_value = (*emit, 1)
        inp(p, 'Emission Strength').default_value = estr
    if alpha < 1: inp(p, 'Alpha').default_value = alpha
    return m

def obj_active(): return bpy.context.view_layer.objects.active

def bevel(o, w=0.06, seg=5):
    m = o.modifiers.new('bv', 'BEVEL'); m.width = w; m.segments = seg; m.limit_method = 'ANGLE'
    s = o.modifiers.new('sm', 'WEIGHTED_NORMAL') if hasattr(bpy.types, 'WeightedNormalModifier') else None
    for f in o.data.polygons: f.use_smooth = True
    return o

def put(o, m): o.data.materials.clear(); o.data.materials.append(m); return o

def box(loc, size, m, w=0.05):
    bpy.ops.mesh.primitive_cube_add(location=loc); o = obj_active(); o.scale = (size[0] / 2, size[1] / 2, size[2] / 2)
    bpy.ops.object.transform_apply(scale=True); return put(bevel(o, w), m)

def cyl(loc, r, d, m, w=0.04, v=64):
    bpy.ops.mesh.primitive_cylinder_add(location=loc, radius=r, depth=d, vertices=v); o = obj_active(); return put(bevel(o, w), m)

def sphere(loc, r, m):
    bpy.ops.mesh.primitive_uv_sphere_add(location=loc, radius=r, segments=48, ring_count=24); o = obj_active()
    for f in o.data.polygons: f.use_smooth = True
    return put(o, m)

def torus(loc, R, r, m):
    bpy.ops.mesh.primitive_torus_add(location=loc, major_radius=R, minor_radius=r, major_segments=96, minor_segments=16); o = obj_active()
    for f in o.data.polygons: f.use_smooth = True
    return put(o, m)

def light(kind, loc, rot, power, size=1.0, color=(1, 1, 1)):
    d = bpy.data.lights.new(kind, kind); d.energy = power; d.color = color
    if kind == 'AREA': d.size = size
    o = bpy.data.objects.new(kind, d); o.location = loc; o.rotation_euler = rot; sc.collection.objects.link(o)
    try: o.visible_camera = False
    except AttributeError: pass
    return o

# The house materials: frosted glass, mint glow, slate floor
GLASS = mat('glass', base=(0.86, 0.95, 0.93), rough=0.3, trans=1.0, ior=1.45, emit=(0.55, 0.85, 0.75), estr=0.35)
CLEAR = mat('clear', base=(0.95, 1.0, 0.98), rough=0.06, trans=1.0, ior=1.45, emit=(0.7, 0.95, 0.88), estr=0.25)
MINT = mat('mint', base=(0.25, 0.85, 0.6), rough=0.3, emit=(0.24, 0.86, 0.59), estr=4.0)
MINT_SOFT = mat('mintsoft', base=(0.6, 0.95, 0.8), rough=0.25, trans=0.85, emit=(0.3, 0.9, 0.65), estr=0.6)
AMBER = mat('amber', base=(1.0, 0.72, 0.3), rough=0.25, trans=0.85, emit=(1.0, 0.62, 0.2), estr=0.8)
AMBER_GLOW = mat('amberglow', base=(1.0, 0.7, 0.3), rough=0.3, emit=(1.0, 0.6, 0.18), estr=3.0)
SLATE = mat('slate', base=(0.055, 0.07, 0.075), rough=0.62, coat=0.1)

ANCHORS = []  # (name, Vector)

# ---------- the scenes ----------
def scene_route():
    """The Green Zone route, in the order of the guide's journey (JOURNEY in engine.js): five stops on a one-way path.
    The order of the stops only, not a floor plan."""
    bpy.ops.mesh.primitive_plane_add(size=600, location=(0, 0, 0)); put(obj_active(), SLATE)
    # a horseshoe, so the scene fills the frame from every side
    P = [(round(2.5 * math.cos(math.radians(a)), 3), round(2.5 * math.sin(math.radians(a)) - 0.4, 3)) for a in (215, 150, 90, 30, -35)]
    MID = (0.85, 0.45)  # the direct way from the treatment room to review, inside the horseshoe
    # the path: a smooth curve through the stops, glowing mint; the stretch through the CCA (stop 4) is amber, as it is optional
    def ribbon(pts, m, name):
        cu = bpy.data.curves.new(name, 'CURVE'); cu.dimensions = '3D'; cu.bevel_depth = 0.035; cu.bevel_resolution = 4
        sp = cu.splines.new('BEZIER'); sp.bezier_points.add(len(pts) - 1)
        for b, (x, y) in zip(sp.bezier_points, pts):
            b.co = (x, y, 0.03); b.handle_left_type = b.handle_right_type = 'AUTO'
        o = bpy.data.objects.new(name, cu); sc.collection.objects.link(o); cu.materials.append(m); return o
    ribbon(P[:3], MINT, 'path-a')
    ribbon(P[2:], AMBER_GLOW, 'path-b')
    # a second, direct stretch from the treatment room back to you, for patients who need no CCA
    ribbon([P[2], MID, P[4]], MINT, 'path-c')
    # chevrons along the way, pointing on (one way)
    def chevron(a, b, t, m):
        x = a[0] + (b[0] - a[0]) * t; y = a[1] + (b[1] - a[1]) * t
        ang = math.atan2(b[1] - a[1], b[0] - a[0])
        bpy.ops.mesh.primitive_cone_add(vertices=3, radius1=0.16, depth=0.05, location=(x, y, 0.05), rotation=(0, 0, ang - math.pi / 2))
        o = obj_active(); o.scale = (1, 1.4, 1); put(o, m)
    for i in range(4):
        a, b = P[i], P[i + 1]
        chevron(a, b, 0.5, MINT if i < 2 else AMBER_GLOW)
    chevron(P[2], MID, 0.55, MINT); chevron(MID, P[4], 0.5, MINT)
    # each stop: a frosted glass pedestal on a glowing ring, and a small glass sign of what happens there
    for i, (x, y) in enumerate(P):
        opt = i == 3
        cyl((x, y, 0.14), 0.62, 0.28, AMBER if opt else GLASS, w=0.08)
        torus((x, y, 0.02), 0.66, 0.018, AMBER_GLOW if opt else MINT)
        z = 0.28
        before = set(bpy.data.objects)
        if i == 0:   # triage: a counter
            box((x, y, z + 0.32), (0.75, 0.3, 0.62), GLASS); sphere((x, y + 0.05, z + 0.75), 0.11, MINT_SOFT)
        elif i == 1: # you, the MO: a desk and a chair
            box((x, y, z + 0.22), (0.8, 0.45, 0.06), CLEAR); box((x - 0.3, y, z + 0.1), (0.06, 0.4, 0.2), CLEAR); box((x + 0.3, y, z + 0.1), (0.06, 0.4, 0.2), CLEAR)
            box((x, y - 0.4, z + 0.16), (0.32, 0.3, 0.32), MINT_SOFT)
        elif i == 2: # the treatment room: a drip on its stand
            cyl((x, y, z + 0.45), 0.025, 0.9, CLEAR, w=0.01, v=16); box((x, y, z + 0.82), (0.24, 0.12, 0.34), MINT_SOFT, w=0.05)
            cyl((x, y, z + 0.02), 0.22, 0.04, CLEAR, w=0.015)
        elif i == 3: # the CCA: a row of chairs
            for k in (-0.34, 0, 0.34): box((x + k, y, z + 0.16), (0.26, 0.28, 0.32), AMBER, w=0.05); box((x + k, y + 0.12, z + 0.38), (0.26, 0.05, 0.3), AMBER, w=0.02)
        else:        # review and finish: a screen to review results
            bpy.ops.mesh.primitive_cube_add(location=(x, y, z + 0.5), rotation=(math.radians(-12), 0, 0)); o = obj_active(); o.scale = (0.42, 0.03, 0.28)
            bpy.ops.object.transform_apply(scale=True); put(bevel(o, 0.03), GLASS)
            box((x, y - 0.02, z + 0.5), (0.7, 0.02, 0.42), MINT_SOFT, w=0.01); cyl((x, y + 0.05, z + 0.12), 0.03, 0.24, CLEAR, w=0.01, v=16)
        for o in set(bpy.data.objects) - before:
            o.location = (x + (o.location.x - x) * 1.5, y + (o.location.y - y) * 1.5, z + (o.location.z - z) * 1.5); o.scale = tuple(c * 1.5 for c in o.scale)
        ANCHORS.append(('s%d' % (i + 1), Vector((x, y, 1.75))))
    return Vector((0, 0.05, 0.45)), 9.0, 32, 30  # target, distance, elevation (degrees), lens (mm)


# ---------- banner scenes (21 Nov 2026): a still and a 7-second loop for an entry's banner, the group in the right third ----------
ANIM = []  # callables f(t), t from 0 to 1 over the loop
pb = lambda m: next(n for n in m.node_tree.nodes if n.type == 'BSDF_PRINCIPLED')

def ampoule(x, y, m, h=0.95, r=0.17):
    cyl((x, y, h * 0.32), r, h * 0.64, m, w=0.06)
    cyl((x, y, h * 0.69), r * 0.42, h * 0.12, m, w=0.02)
    sphere((x, y, h * 0.8), r * 0.62, m)
    cyl((x, y, h * 0.93), r * 0.3, h * 0.2, m, w=0.03)

def scene_b_antidote():
    bpy.ops.mesh.primitive_plane_add(size=600, location=(0, 0, 0)); put(obj_active(), SLATE)
    liquid = mat('liquid', base=(0.55, 0.95, 0.78), rough=0.2, trans=0.6, emit=(0.3, 0.95, 0.66), estr=1.2)
    for k, (x, y) in enumerate([(-0.75, 0.25), (-0.35, 0.45), (0.05, 0.6)]): ampoule(x, y, GLASS if k != 1 else CLEAR)
    cyl((0.65, -0.05, 0.42), 0.34, 0.84, CLEAR, w=0.08)           # the vial
    lq = cyl((0.65, -0.05, 0.3), 0.29, 0.56, liquid, w=0.06)       # its contents, glowing
    cyl((0.65, -0.05, 0.92), 0.22, 0.18, MINT, w=0.05)             # its mint cap
    for (x, y, r) in [(-1.05, -0.45, 0.12), (1.25, 0.35, 0.09), (-0.2, -0.55, 0.07)]: sphere((x, y, r), r, MINT_SOFT)
    ANIM.append(lambda t: setattr(inp(pb(liquid), 'Emission Strength'), 'default_value', 1.0 + 0.6 * math.sin(2 * math.pi * t)))
    return Vector((-1.05, 0.2, 0.45)), 7.2, 18, 42

def scene_b_abbrev():
    bpy.ops.mesh.primitive_plane_add(size=600, location=(0, 0, 0)); put(obj_active(), SLATE)
    TM = mat('tmint', base=(0.5, 0.95, 0.75), rough=0.25, trans=0.8, emit=(0.3, 0.9, 0.62), estr=0.9)
    T = [(-0.6, 0.0, 0.07, 0, 12, GLASS), (-0.55, 0.05, 0.2, 0, 4, GLASS), (-0.6, -0.02, 0.33, 0, 20, CLEAR),
         (0.15, 0.35, 0.07, 0, -18, TM), (0.85, -0.15, 0.07, 0, 30, GLASS), (0.2, -0.45, 0.07, 0, 8, AMBER),
         (0.55, 0.45, 0.32, 78, 20, GLASS), (-0.05, 0.75, 0.32, 82, -25, CLEAR)]
    for (x, y, z, rx, rz, m) in T:
        bpy.ops.mesh.primitive_cube_add(location=(x, y, z), rotation=(math.radians(rx), 0, math.radians(rz))); o = obj_active(); o.scale = (0.27, 0.27, 0.065)
        bpy.ops.object.transform_apply(scale=True); put(bevel(o, 0.05), m)
    return Vector((-0.95, 0.2, 0.3)), 6.6, 28, 42

def scene_b_ctbrain():
    bpy.ops.mesh.primitive_plane_add(size=600, location=(0, 0, 0)); put(obj_active(), SLATE)
    ring = torus((0, 0, 1.45), 1.25, 0.26, GLASS); ring.rotation_euler = (math.radians(90), 0, 0)
    box((0, 0, 0.14), (1.4, 0.7, 0.28), GLASS, w=0.1)
    sphere((0, 0, 1.45), 0.72, CLEAR)
    SL = mat('slice', base=(0.3, 0.95, 0.66), rough=0.3, trans=0.3, emit=(0.24, 0.9, 0.6), estr=5.0)
    bpy.ops.mesh.primitive_cylinder_add(location=(0, 0, 1.45), radius=1, depth=0.012, vertices=96); disc = put(obj_active(), SL)
    def move(t, R=0.72, c=1.45):
        h = 0.5 * math.sin(2 * math.pi * t); r = max(0.05, math.sqrt(max(0, R * R - h * h)) * 0.985)
        disc.location = (0, 0, c + h); disc.scale = (r, r, 1)
    ANIM.append(move); move(0)
    return Vector((-2.9, 0.0, 1.3)), 10.5, 13, 40

def scene_b_aggress():
    bpy.ops.mesh.primitive_plane_add(size=600, location=(0, 0, 0)); put(obj_active(), SLATE)
    LAV = mat('lav', base=(0.82, 0.72, 1.0), rough=0.28, trans=0.85, emit=(0.7, 0.55, 1.0), estr=0.7)
    p1 = sphere((-0.55, 0.05, 0.26), 0.42, LAV); p1.scale = (1.15, 0.95, 0.62)
    p2 = sphere((0.65, -0.1, 0.24), 0.4, MINT_SOFT); p2.scale = (1.1, 1.0, 0.6)
    bpy.ops.mesh.primitive_cylinder_add(location=(0.05, 0.75, 0.62), radius=2.2, depth=1.24, vertices=128); arc = obj_active()
    # a thin curved panel: a slice of a tall glass cylinder
    bpy.ops.object.mode_set(mode='EDIT'); bpy.ops.mesh.select_all(action='SELECT'); bpy.ops.object.mode_set(mode='OBJECT')
    me = arc.data
    keep = [v.index for v in me.vertices if v.co.y < -1.75]
    bpy.ops.object.mode_set(mode='EDIT'); bpy.ops.mesh.select_all(action='DESELECT'); bpy.ops.object.mode_set(mode='OBJECT')
    for v in me.vertices: v.select = v.index not in keep
    bpy.ops.object.mode_set(mode='EDIT'); bpy.ops.mesh.delete(type='VERT'); bpy.ops.object.mode_set(mode='OBJECT')
    sol = arc.modifiers.new('th', 'SOLIDIFY'); sol.thickness = 0.04
    arc.location = (0.05, 2.75, 0.0); put(bevel(arc, 0.015, 3), GLASS)
    def breathe(t):
        for m, base in ((LAV, 0.7), (MINT_SOFT, 0.6)):
            inp(pb(m), 'Emission Strength').default_value = base * (1 + 0.45 * math.sin(2 * math.pi * t))
    ANIM.append(breathe)
    return Vector((-1.05, 0.4, 0.45)), 7.4, 16, 42

SCENES = {'route': scene_route, 'b-antidote': scene_b_antidote, 'b-abbrev': scene_b_abbrev, 'b-ctbrain': scene_b_ctbrain, 'b-aggress': scene_b_aggress}
BANNER = KEY.startswith('b-')
if BANNER:
    bg.inputs[0].default_value = (0.006, 0.008, 0.009, 1)  # the backdrop meets the slate floor with no horizon line
    for m in (GLASS, CLEAR): inp(pb(m), 'Emission Strength').default_value *= 0.35
target, dist, elev, lens = SCENES[KEY]()

# ---------- lights and the camera ----------
pivot = bpy.data.objects.new('pivot', None); pivot.location = target; sc.collection.objects.link(pivot)
# The lights turn with the camera, so the scene seems to turn under a fixed studio light, and only the key light shows in
# reflections (the others lit the slate floor with hard squares)
for i, L in enumerate([light('AREA', (6, -5, 8), (math.radians(40), 0, math.radians(50)), 1400 if not BANNER else 520, size=7),
          light('AREA', (-8, -3, 4), (math.radians(70), 0, math.radians(-70)), 260, size=6, color=(0.8, 0.95, 1)),
          light('AREA', (0, 9, 6), (math.radians(-55), 0, math.radians(180)), 600, size=8, color=(0.75, 1, 0.9))]):
    L.location = L.location - target; L.parent = pivot
    if i:
        try: L.visible_glossy = False
        except AttributeError: pass
cd = bpy.data.cameras.new('cam'); cd.lens = lens
cam = bpy.data.objects.new('cam', cd); sc.collection.objects.link(cam); sc.camera = cam
cam.parent = pivot
e = math.radians(elev)
cam.location = (0, -dist * math.cos(e), dist * math.sin(e))
cam.rotation_euler = (math.radians(90) - e, 0, 0)

if BANNER:
    # FRAMES 1: the still (written to sources/spin/still-<name>.png); more: a seamless loop of that many frames, the camera
    # swaying 5 degrees and back and each scene's own motion (ANIM) running one cycle, written to sources/spin/<key>/
    name = KEY[2:]
    for f in range(FRAMES):
        t = f / FRAMES
        pivot.rotation_euler = (0, 0, math.radians(5 * math.sin(2 * math.pi * t)))
        for a in ANIM: a(t)
        bpy.context.view_layer.update()
        if ONLY >= 0 and f != ONLY: continue
        sc.render.filepath = os.path.join(ROOT, 'sources', 'spin', 'still-' + name + '.png') if FRAMES == 1 else os.path.join(OUT, 'b%03d.png' % f)
        bpy.ops.render.render(write_still=True)
    print('SPIN done', KEY, FRAMES, 'frames')
    sys.exit(0)
meta = {'key': KEY, 'frames': FRAMES, 'w': W, 'h': H, 'anchors': [a[0] for a in ANCHORS], 'at': []}
for f in range(FRAMES):
    yaw = 360.0 * f / FRAMES
    pivot.rotation_euler = (0, 0, math.radians(yaw))
    bpy.context.view_layer.update()
    pts = []
    for name, v in ANCHORS:
        c = world_to_camera_view(sc, cam, v)
        pts.append([round(c.x * W), round((1 - c.y) * H), round(c.z, 2)])
    meta['at'].append([round(yaw), pts])
    if ONLY >= 0 and f != ONLY: continue
    sc.render.filepath = os.path.join(OUT, 'f%02d.png' % f)
    bpy.ops.render.render(write_still=True)
json.dump(meta, open(os.path.join(OUT, 'anchors.json'), 'w'), indent=1)
print('SPIN done', KEY, FRAMES, 'frames into', OUT)
