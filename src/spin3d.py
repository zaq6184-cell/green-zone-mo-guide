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

REGIONS = []  # (name, [objects]) for a scene whose parts the page outlines on every view (an ID pass is rendered with each frame)

def scene_burns():
    """An adult figure in eight parts, for the rule of nines (RULE_OF_NINES in data24.js, from the VicBurns poster): head,
    right arm, left arm, anterior torso, back, right leg, left leg, genitalia. The figure faces the camera at the first view,
    so the patient's right is on the screen's left. Built from a skin-modifier skeleton; no downloaded model (26 Nov 2026)."""
    bpy.ops.mesh.primitive_plane_add(size=600, location=(0, 0, 0)); put(obj_active(), SLATE)
    cyl((0, 0, 0.05), 0.46, 0.1, GLASS, w=0.04)
    torus((0, 0, 0.012), 0.5, 0.012, MINT)
    # the skeleton: (x, y, z) joints, the figure facing -y; its right side is -x. Radii set below.
    J = {'pelvis': (0, 0, 0.98), 'waist': (0, 0, 1.18), 'chest': (0, 0, 1.42), 'neck': (0, 0, 1.6), 'headb': (0, 0, 1.68), 'head': (0, 0, 1.79), 'headt': (0, 0, 1.9),
         'rhip': (-0.1, 0, 0.94), 'rknee': (-0.12, 0, 0.53), 'rankle': (-0.13, 0, 0.12), 'rtoe': (-0.14, -0.13, 0.13),
         'lhip': (0.1, 0, 0.94), 'lknee': (0.12, 0, 0.53), 'lankle': (0.13, 0, 0.12), 'ltoe': (0.14, -0.13, 0.13),
         'rsh': (-0.19, 0, 1.47), 'relb': (-0.33, 0.01, 1.2), 'rwr': (-0.43, -0.02, 0.95), 'rhand': (-0.47, -0.03, 0.84),
         'lsh': (0.19, 0, 1.47), 'lelb': (0.33, 0.01, 1.2), 'lwr': (0.43, -0.02, 0.95), 'lhand': (0.47, -0.03, 0.84)}
    R = {'pelvis': 0.15, 'waist': 0.13, 'chest': 0.165, 'neck': 0.055, 'headb': 0.075, 'head': 0.1, 'headt': 0.055,
         'rhip': 0.085, 'rknee': 0.055, 'rankle': 0.04, 'rtoe': 0.035, 'lhip': 0.085, 'lknee': 0.055, 'lankle': 0.04, 'ltoe': 0.035,
         'rsh': 0.06, 'relb': 0.042, 'rwr': 0.032, 'rhand': 0.04, 'lsh': 0.06, 'lelb': 0.042, 'lwr': 0.032, 'lhand': 0.04}
    E = [('pelvis', 'waist'), ('waist', 'chest'), ('chest', 'neck'), ('neck', 'headb'), ('headb', 'head'), ('head', 'headt'),
         ('pelvis', 'rhip'), ('rhip', 'rknee'), ('rknee', 'rankle'), ('rankle', 'rtoe'), ('pelvis', 'lhip'), ('lhip', 'lknee'), ('lknee', 'lankle'), ('lankle', 'ltoe'),
         ('chest', 'rsh'), ('rsh', 'relb'), ('relb', 'rwr'), ('rwr', 'rhand'), ('chest', 'lsh'), ('lsh', 'lelb'), ('lelb', 'lwr'), ('lwr', 'lhand')]
    names = list(J)
    me = bpy.data.meshes.new('body'); me.from_pydata([J[n] for n in names], [(names.index(a), names.index(b)) for a, b in E], [])
    o = bpy.data.objects.new('body', me); sc.collection.objects.link(o)
    sk = o.modifiers.new('skin', 'SKIN'); sk.use_smooth_shade = True
    for i, n in enumerate(names):
        r = R[n]; o.data.skin_vertices[0].data[i].radius = (r, r * (0.78 if n in ('pelvis', 'waist', 'chest') else 1.0))
    o.data.skin_vertices[0].data[0].use_root = True
    sub = o.modifiers.new('sub', 'SUBSURF'); sub.levels = 3; sub.render_levels = 3
    bpy.context.view_layer.objects.active = o; o.select_set(True)
    for m in list(o.modifiers): bpy.ops.object.modifier_apply(modifier=m.name)
    # one material slot per region, chosen by each face's centre
    PEARL = mat('pearl', base=(0.84, 0.94, 0.91), rough=0.32, trans=0.15, ior=1.45, coat=0.6, emit=(0.5, 0.85, 0.74), estr=0.12)
    names8 = ['Head', 'Right arm', 'Left arm', 'Anterior torso', 'Back', 'Right leg', 'Left leg', 'Genitalia']
    for k in range(8):
        mk = PEARL.copy(); mk.name = 'reg%d' % k; o.data.materials.append(mk)
    crotch, neck_z, sh_x, ing = 0.9, 1.585, 0.205, 0.55
    # Cut the surface along each boundary first, so every part ends on a clean line: the neck, the shoulders, the groin creases
    # (rising outward from the crotch), the midline between the legs, the side seam between front and back, and the genital patch
    import bmesh
    bm = bmesh.new(); bm.from_mesh(o.data)
    def cut(co, no, keep=lambda v: True):
        g = [e for e in bm.edges if keep(e.verts[0].co) or keep(e.verts[1].co)] + [f for f in bm.faces if keep(f.calc_center_median())]
        bmesh.ops.bisect_plane(bm, geom=list(set(g)) + list({v for e in bm.edges if keep(e.verts[0].co) or keep(e.verts[1].co) for v in e.verts}), plane_co=co, plane_no=no)
    cut((0, 0, neck_z), (0, 0, 1))
    cut((-sh_x, 0, 0), (1, 0, 0), lambda c: c.z > 0.8); cut((sh_x, 0, 0), (1, 0, 0), lambda c: c.z > 0.8)
    cut((0, 0, crotch), (ing, 0, 1), lambda c: c.x <= 0.02 and c.z < 1.2); cut((0, 0, crotch), (-ing, 0, 1), lambda c: c.x >= -0.02 and c.z < 1.2)
    cut((0, 0, 0), (1, 0, 0), lambda c: c.z < crotch + 0.02)
    cut((0, 0, 0), (0, 1, 0))
    for xx in (-0.045, 0.045): cut((xx, 0, 0), (1, 0, 0), lambda c: c.y < 0 and crotch - 0.12 < c.z < crotch + 0.1)
    for zz in (crotch - 0.07, crotch + 0.05): cut((0, 0, zz), (0, 0, 1), lambda c: c.y < 0 and abs(c.x) < 0.1)
    bm.to_mesh(o.data); bm.free()
    for f in o.data.polygons:
        x, y, z = f.center
        if z > neck_z: k = 0
        elif abs(x) > sh_x and z > 0.8: k = 1 if x < 0 else 2
        elif abs(x) < 0.045 and y < 0 and crotch - 0.07 < z < crotch + 0.05: k = 7
        elif z < crotch + ing * abs(x): k = 5 if x < 0 else 6
        else: k = 3 if y < 0 else 4
        f.material_index = k
    bpy.ops.object.mode_set(mode='EDIT'); bpy.ops.mesh.select_all(action='SELECT'); bpy.ops.mesh.separate(type='MATERIAL'); bpy.ops.object.mode_set(mode='OBJECT')
    parts = [p for p in bpy.data.objects if p.name.startswith('body')]
    for p in parts:
        k = int(p.material_slots[p.data.polygons[0].material_index].material.name[3])  # 'reg<k>' (separating may drop unused slots)
        REGIONS.append((names8[k], k, p))
        for s in p.material_slots: s.material = PEARL
    REGIONS.sort(key=lambda r: r[1])
    for n, k, p in REGIONS: ANCHORS.append(('r%d' % (k + 1), Vector(p.matrix_world @ (sum((v.co for v in p.data.vertices), Vector()) / len(p.data.vertices)))))
    bg.inputs[0].default_value = (0.006, 0.008, 0.009, 1)  # no horizon line behind the figure
    return Vector((0, 0, 0.96)), 3.0, 5, 50

# ---------- the 26 Nov 2026 procedure scenes: a finger, an eye and a nose. Each label says only what the guide's own step says
# (SPIN_INFO in engine.js); the shapes are the guide's own schematic models, not anatomy to measure from. ----------
ARC = {}  # a scene that turns through an arc rather than all the way round: {'deg': half-arc}; its middle view is the front

def tube(pts, r, m, name, res=4):
    cu = bpy.data.curves.new(name, 'CURVE'); cu.dimensions = '3D'; cu.bevel_depth = r; cu.bevel_resolution = res
    sp = cu.splines.new('BEZIER'); sp.bezier_points.add(len(pts) - 1)
    for b, p in zip(sp.bezier_points, pts):
        b.co = p; b.handle_left_type = b.handle_right_type = 'AUTO'
    o = bpy.data.objects.new(name, cu); sc.collection.objects.link(o); cu.materials.append(m); return o

def skin_body(name, J, R, E, m, sub=2, flat=None):
    names = list(J)
    me = bpy.data.meshes.new(name); me.from_pydata([J[n] for n in names], [(names.index(a), names.index(b)) for a, b in E], [])
    o = bpy.data.objects.new(name, me); sc.collection.objects.link(o)
    sk = o.modifiers.new('skin', 'SKIN'); sk.use_smooth_shade = True
    for i, n in enumerate(names):
        r = R[n]; o.data.skin_vertices[0].data[i].radius = r if isinstance(r, tuple) else (r, r)
    o.data.skin_vertices[0].data[0].use_root = True
    s = o.modifiers.new('sub', 'SUBSURF'); s.levels = s.render_levels = sub
    return put(o, m)

SKIN = None
def skin_mat():
    global SKIN
    if not SKIN: SKIN = mat('skinglass', base=(0.86, 0.95, 0.92), rough=0.38, trans=0.7, ior=1.38, coat=0.5, emit=(0.55, 0.88, 0.76), estr=0.18)
    return SKIN

def scene_finger():
    """A finger standing up from the hand, its skin glass: the bones inside, the four digital nerves along its sides (two on the
    palm side, two on the back), and glowing points at its base where the ring block goes in (the step names them)."""
    bpy.ops.mesh.primitive_plane_add(size=600, location=(0, 0, 0)); put(obj_active(), SLATE)
    cyl((0, 0, 0.05), 0.62, 0.1, GLASS, w=0.04); torus((0, 0, 0.012), 0.66, 0.012, MINT)
    PEARL = mat('bone', base=(0.93, 0.92, 0.86), rough=0.35, coat=0.4, emit=(0.9, 0.88, 0.8), estr=0.05)
    NERVE = mat('nerve', base=(1.0, 0.7, 0.25), rough=0.3, emit=(1.0, 0.6, 0.15), estr=6.0)
    INJ = mat('inj', base=(0.3, 0.95, 0.66), rough=0.3, emit=(0.24, 0.9, 0.6), estr=6.0)
    # the hand: a rounded block, with the stubs of the fingers either side, the web spaces between
    FSKIN = mat('fskin', base=(0.88, 0.97, 0.94), rough=0.22, trans=0.9, ior=1.38, coat=0.6, emit=(0.55, 0.88, 0.76), estr=0.1)
    hb = box((0, 0, 0.42), (1.25, 0.42, 0.64), skin_mat(), w=0.16)
    for x in (-0.42, 0.42): skin_body('stub', {'a': (x, 0, 0.66), 'b': (x, 0, 0.95)}, {'a': 0.15, 'b': 0.14}, [('a', 'b')], skin_mat(), 2)
    # the finger: palm side toward the camera at the first view (-y); the nail on the back (+y)
    fz = [0.7, 1.32, 1.72, 2.02, 2.14]
    skin_body('finger', {'b': (0, 0, fz[0]), 'm': (0, 0, fz[1]), 'd': (0, 0, fz[2]), 't': (0, 0.0, fz[3]), 'tt': (0, 0.01, fz[4])},
              {'b': (0.2, 0.185), 'm': (0.185, 0.17), 'd': (0.17, 0.155), 't': (0.15, 0.135), 'tt': (0.08, 0.07)},
              [('b', 'm'), ('m', 'd'), ('d', 't'), ('t', 'tt')], FSKIN, 2)
    nail = box((0, 0.138, 1.95), (0.19, 0.03, 0.26), mat('nail', base=(0.95, 0.98, 1.0), rough=0.08, trans=0.6, coat=1.0), w=0.012)
    # the bones: three phalanges with gaps at the joints, and the head of the metacarpal in the hand
    for z0, z1, r in [(0.48, 0.66, 0.1), (0.72, 1.28, 0.075), (1.36, 1.68, 0.065), (1.76, 2.0, 0.055)]:
        cyl((0, 0, (z0 + z1) / 2), r, z1 - z0, PEARL, w=0.03, v=32)
    # the four digital nerves: palmar pair (thicker) and dorsal pair, running the length of the finger at its sides
    for sx in (-1, 1):
        # palmar nerves at 4 and 8 o'clock, nearer the midline than the dorsal pair at 10 and 2 (WikEM, Nerve block: digital block)
        tube([(sx * 0.105, -0.1, 0.35), (sx * 0.1, -0.11, 0.9), (sx * 0.09, -0.1, 1.5), (sx * 0.07, -0.075, 2.02)], 0.02, NERVE, 'npal')
        tube([(sx * 0.15, 0.085, 0.5), (sx * 0.14, 0.09, 0.95), (sx * 0.12, 0.085, 1.4)], 0.013, NERVE, 'ndor')
    # where the ring block goes in: one point each side at the base of the finger, on the back
    for sx in (-1, 1): sphere((sx * 0.205, 0.08, 0.8), 0.045, INJ)
    ANCHORS.extend([('palmar', Vector((-0.1, -0.12, 1.2))), ('dorsal', Vector((0.14, 0.1, 1.15))), ('inject', Vector((0.23, 0.08, 0.8))), ('web', Vector((-0.23, 0.08, 0.8)))])
    bg.inputs[0].default_value = (0.006, 0.008, 0.009, 1)
    return Vector((0, 0, 1.2)), 4.3, 8, 50

def scene_eye():
    """An eye in its lids, cut down the middle on the patient's left side, so the pockets where the lid lining folds back onto
    the eye (the fornices) show above and below: what an irrigation and an eversion reach."""
    ARC.update(lo=45, hi=135, home=90)  # 45 degrees either side of the cut face (90), the first view (27 Nov 2026: the half eye's front view read poorly)
    bpy.ops.mesh.primitive_plane_add(size=600, location=(0, 0, -1.2)); put(obj_active(), SLATE)
    import bmesh
    SCL = mat('sclera', base=(0.95, 0.96, 0.95), rough=0.3, coat=0.5, emit=(0.9, 0.95, 0.93), estr=0.04)
    IRIS = mat('iris', base=(0.2, 0.55, 0.5), rough=0.35, emit=(0.15, 0.6, 0.5), estr=0.6)
    PUP = mat('pupil', base=(0.01, 0.02, 0.02), rough=0.2)
    CORN = mat('cornea', base=(0.95, 1.0, 1.0), rough=0.02, trans=1.0, ior=1.376, coat=1.0)
    LID = mat('lid', base=(0.86, 0.94, 0.91), rough=0.3, trans=0.35, coat=0.4, emit=(0.6, 0.85, 0.76), estr=0.06)
    CONJ = mat('conj', base=(0.3, 0.95, 0.66), rough=0.3, emit=(0.24, 0.9, 0.6), estr=5.0)
    FORN = mat('fornix', base=(1.0, 0.65, 0.25), rough=0.3, emit=(1.0, 0.55, 0.12), estr=9.0)
    def halve(o):
        """cut the object down the middle and keep the patient's right half (x < 0) and the left half's outer shell only"""
        bpy.context.view_layer.objects.active = o
        for m in list(o.modifiers): bpy.ops.object.modifier_apply(modifier=m.name)
        bm = bmesh.new(); bm.from_mesh(o.data)
        r = bmesh.ops.bisect_plane(bm, geom=bm.verts[:] + bm.edges[:] + bm.faces[:], plane_co=(0, 0, 0), plane_no=(1, 0, 0), clear_outer=True)
        cut = [e for e in r['geom_cut'] if isinstance(e, bmesh.types.BMEdge)]
        if cut:
            try: bmesh.ops.holes_fill(bm, edges=cut, sides=0)
            except Exception: pass
        bm.to_mesh(o.data); bm.free(); return o
    R = 0.6
    globe = sphere((0, 0, 0), R, SCL); halve(globe)
    bpy.ops.mesh.primitive_uv_sphere_add(location=(0, -0.34, 0), radius=0.4, segments=64, ring_count=32); cap = obj_active()
    for f in cap.data.polygons: f.use_smooth = True
    put(cap, CORN)
    # keep only the front of the cornea's sphere: the bulge in front of the globe
    bm = bmesh.new(); bm.from_mesh(cap.data); bmesh.ops.bisect_plane(bm, geom=bm.verts[:] + bm.edges[:] + bm.faces[:], plane_co=(0, -0.48, 0), plane_no=(0, 1, 0), clear_outer=True); bm.to_mesh(cap.data); bm.free()
    halve(cap)
    bpy.ops.mesh.primitive_cylinder_add(location=(0, -0.5, 0), radius=0.27, depth=0.02, vertices=96, rotation=(math.radians(90), 0, 0)); ir = put(obj_active(), IRIS); halve(ir)
    bpy.ops.mesh.primitive_cylinder_add(location=(0, -0.512, 0), radius=0.1, depth=0.01, vertices=64, rotation=(math.radians(90), 0, 0)); pu = put(obj_active(), PUP); halve(pu)
    # the lids: thick shells in front of the globe, open in the middle
    def lid(sign):
        bpy.ops.mesh.primitive_uv_sphere_add(location=(0, 0, 0), radius=0.7, segments=96, ring_count=48); o = obj_active()
        for f in o.data.polygons: f.use_smooth = True
        bm = bmesh.new(); bm.from_mesh(o.data)
        bmesh.ops.bisect_plane(bm, geom=bm.verts[:] + bm.edges[:] + bm.faces[:], plane_co=(0, 0.05, 0), plane_no=(0, 1, 0), clear_outer=True)
        bmesh.ops.bisect_plane(bm, geom=bm.verts[:] + bm.edges[:] + bm.faces[:], plane_co=(0, 0, sign * 0.13), plane_no=(0, 0, -sign), clear_outer=True)
        bm.to_mesh(o.data); bm.free()
        s = o.modifiers.new('th', 'SOLIDIFY'); s.thickness = 0.07; s.offset = 1
        return halve(put(o, LID))
    lid(1); lid(-1)
    # the lining (conjunctiva) on the cut face: from each lid margin up the back of the lid into the fornix, and down over the
    # white of the eye to the edge of the cornea; the fornix itself glows amber
    for sg in (1, -1):
        X = 0.012
        pts = [(X, -0.68, sg * 0.15), (X, -0.6, sg * 0.36), (X, -0.41, sg * 0.53), (X, -0.17, sg * 0.635)]
        back = [(X, -0.1, sg * 0.605), (X, -0.33, sg * 0.51), (X, -0.47, sg * 0.35)]
        tube(pts + back, 0.012, CONJ, 'conj')
        sphere((X, -0.15, sg * 0.625), 0.05, FORN)
    ANCHORS.extend([('cornea', Vector((0.0, -0.73, 0.06))), ('upper', Vector((X, -0.15, 0.63))), ('lower', Vector((X, -0.15, -0.63))), ('lidm', Vector((0.0, -0.69, -0.16)))])
    bg.inputs[0].default_value = (0.006, 0.008, 0.009, 1)
    return Vector((0, -0.1, 0)), 3.3, 6, 50

def scene_nose():
    """A face from the front with a glass nose: the hard upper part (nasal bones) and the soft lower part, the septum down the
    middle, the small area at its front and bottom where most nosebleeds start, and the soft part to squeeze."""
    ARC['deg'] = 80
    bpy.ops.mesh.primitive_plane_add(size=600, location=(0, 0, -1.4)); put(obj_active(), SLATE)
    import bmesh
    PEARL = mat('bone', base=(0.93, 0.92, 0.86), rough=0.35, coat=0.4, emit=(0.9, 0.88, 0.8), estr=0.05)
    SEPT = mat('septum', base=(0.85, 0.97, 0.92), rough=0.3, trans=0.5, emit=(0.6, 0.9, 0.78), estr=0.25)
    LITTLE = mat('little', base=(1.0, 0.45, 0.3), rough=0.3, emit=(1.0, 0.38, 0.2), estr=5.0)
    PINCH = mat('pinch', base=(0.3, 0.95, 0.66), rough=0.3, trans=0.4, emit=(0.24, 0.9, 0.6), estr=1.6)
    # the face: the front of an egg, frosted
    bpy.ops.mesh.primitive_uv_sphere_add(location=(0, 0, 0), radius=1, segments=96, ring_count=48); face = obj_active(); face.scale = (0.78, 0.62, 1.05)
    bpy.ops.object.transform_apply(scale=True)
    for f in face.data.polygons: f.use_smooth = True
    bm = bmesh.new(); bm.from_mesh(face.data); bmesh.ops.bisect_plane(bm, geom=bm.verts[:] + bm.edges[:] + bm.faces[:], plane_co=(0, 0.05, 0), plane_no=(0, 1, 0), clear_outer=True); bm.to_mesh(face.data); bm.free()
    s = face.modifiers.new('th', 'SOLIDIFY'); s.thickness = 0.05
    put(face, mat('face', base=(0.84, 0.94, 0.91), rough=0.32, trans=0.55, coat=0.5, emit=(0.5, 0.85, 0.74), estr=0.06))
    # the nose: glass, from the bridge to the tip and the nostrils
    skin_body('nose', {'br': (0, -0.6, 0.2), 'mid': (0, -0.72, -0.05), 'tip': (0, -0.86, -0.28), 'col': (0, -0.74, -0.38),
                       'al_r': (-0.15, -0.68, -0.33), 'al_l': (0.15, -0.68, -0.33)},
              {'br': (0.06, 0.05), 'mid': (0.085, 0.07), 'tip': (0.1, 0.09), 'col': (0.04, 0.05), 'al_r': (0.075, 0.07), 'al_l': (0.075, 0.07)},
              [('br', 'mid'), ('mid', 'tip'), ('tip', 'col'), ('tip', 'al_r'), ('tip', 'al_l')], skin_mat(), 3)
    # the nasal bones: the hard upper third
    skin_body('bones', {'a': (0, -0.58, 0.24), 'b': (0, -0.7, 0.02)}, {'a': (0.075, 0.03), 'b': (0.095, 0.035)}, [('a', 'b')], PEARL, 2)
    # the septum down the middle, and the area at its front and bottom
    # the septum: a thin plate in the midline, inside the nose's own outline (bridge, tip, columella, floor)
    me = bpy.data.meshes.new('septum'); me.from_pydata([(0, -0.6, 0.16), (0, -0.7, -0.05), (0, -0.8, -0.26), (0, -0.74, -0.36), (0, -0.52, -0.36), (0, -0.5, 0.14)], [], [(0, 1, 2, 3, 4, 5)])
    sp = bpy.data.objects.new('septum', me); sc.collection.objects.link(sp); s = sp.modifiers.new('th', 'SOLIDIFY'); s.thickness = 0.015; s.offset = 0; put(sp, SEPT)
    bpy.ops.mesh.primitive_cylinder_add(location=(0, -0.72, -0.28), radius=0.055, depth=0.03, vertices=48, rotation=(0, math.radians(90), 0)); put(obj_active(), LITTLE)
    # the soft part of the nose to squeeze: a glowing band around it, below the bones
    bpy.ops.mesh.primitive_torus_add(location=(0, -0.74, -0.22), major_radius=0.17, minor_radius=0.012, major_segments=96, minor_segments=12, rotation=(math.radians(-62), 0, 0)); o = obj_active(); o.scale = (1.05, 1.0, 1.0); put(o, PINCH)
    ANCHORS.extend([('little', Vector((0, -0.74, -0.28))), ('soft', Vector((0.16, -0.78, -0.2))), ('bones', Vector((0, -0.66, 0.12)))])
    bg.inputs[0].default_value = (0.006, 0.008, 0.009, 1)
    return Vector((0, -0.7, -0.08)), 1.75, 4, 55

SCENES = {'finger': scene_finger, 'eye': scene_eye, 'nose': scene_nose, 'burns': scene_burns,'route': scene_route,'b-antidote': scene_b_antidote, 'b-abbrev': scene_b_abbrev, 'b-ctbrain': scene_b_ctbrain, 'b-aggress': scene_b_aggress}
BANNER = KEY.startswith('b-')
if BANNER:
    bg.inputs[0].default_value = (0.006, 0.008, 0.009, 1)  # the backdrop meets the slate floor with no horizon line
    for m in (GLASS, CLEAR): inp(pb(m), 'Emission Strength').default_value *= 0.35
target, dist, elev, lens = SCENES[KEY]()

# ---------- lights and the camera ----------
# The back (rim) light: stronger for the procedure scenes and the burns figure (27 Nov 2026), so their glass edges stand out
RIM = 1500 if KEY in ('burns', 'finger', 'eye', 'nose') else 600
pivot = bpy.data.objects.new('pivot', None); pivot.location = target; sc.collection.objects.link(pivot)
# The lights turn with the camera, so the scene seems to turn under a fixed studio light, and only the key light shows in
# reflections (the others lit the slate floor with hard squares)
for i, L in enumerate([light('AREA', (6, -5, 8), (math.radians(40), 0, math.radians(50)), 1400 if not BANNER else 520, size=7),
          light('AREA', (-8, -3, 4), (math.radians(70), 0, math.radians(-70)), 260, size=6, color=(0.8, 0.95, 1)),
          light('AREA', (0, 9, 6), (math.radians(-55), 0, math.radians(180)), RIM, size=8, color=(0.75, 1, 0.9))]):
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
# The ID pass: each region in its own flat colour on black, nothing else, no smoothing, so spin-pack.py can trace each
# region's outline on each view. Colours: region k (0 to 7) is IDCOL[k].
IDCOL = [(1, 0, 0), (0, 1, 0), (0, 0, 1), (1, 1, 0), (1, 0, 1), (0, 1, 1), (1, 0.5, 0), (0.5, 0, 1)]
def id_pass(f):
    keep = (sc.render.engine, sc.view_settings.view_transform, sc.view_settings.look, sc.render.filepath)
    others = [o for o in sc.objects if o.type == 'MESH' and o not in [r[2] for r in REGIONS]]
    for o in others: o.hide_render = True
    for n, k, p in REGIONS: p.color = (*IDCOL[k], 1)
    sc.render.engine = 'BLENDER_WORKBENCH'
    sh = sc.display.shading; sh.light = 'FLAT'; sh.color_type = 'OBJECT'; sh.show_object_outline = False; sh.show_shadows = False; sh.show_cavity = False
    try: sh.background_type = 'VIEWPORT'
    except Exception: pass
    sc.display.render_aa = 'OFF'
    sc.view_settings.view_transform = 'Standard'
    try: sc.view_settings.look = 'None'
    except TypeError: pass
    world.color = (0, 0, 0)
    sc.render.filepath = os.path.join(OUT, 'id%02d.png' % f)
    bpy.ops.render.render(write_still=True)
    for o in others: o.hide_render = False
    sc.render.engine, sc.view_settings.view_transform = keep[0], keep[1]
    try: sc.view_settings.look = keep[2]
    except TypeError: pass

meta = {'key': KEY, 'frames': FRAMES, 'w': W, 'h': H, 'anchors': [a[0] for a in ANCHORS], 'regions': [r[0] for r in REGIONS], 'at': []}
if ARC:
    LO, HI = (ARC['lo'], ARC['hi']) if 'lo' in ARC else (-ARC['deg'], ARC['deg'])
    YAWS = [LO + (HI - LO) * f / (FRAMES - 1) for f in range(FRAMES)]
    meta['arc'] = [LO, HI]; meta['first'] = min(range(FRAMES), key=lambda f: abs(YAWS[f] - ARC.get('home', 0)))
for f in range(FRAMES):
    yaw = YAWS[f] if ARC else 360.0 * f / FRAMES
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
    if REGIONS: id_pass(f)
json.dump(meta, open(os.path.join(OUT, 'anchors.json'), 'w'), indent=1)
print('SPIN done', KEY, FRAMES, 'frames into', OUT)
