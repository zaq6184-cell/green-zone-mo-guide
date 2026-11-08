---
version: 1
slug: "src-parts-head-html"
primary_target: "src/parts/head.html"
related_targets: ["src/parts/engine.js"]
---

## Scope

The whole Green Zone MO Guide page (`src/parts/head.html` and `src/parts/engine.js`): home, search, pathways library, the step runner and outcome card, rules, tools, numbers, the learning views (journey, tour, quiz, What's new, poster, about), a new first-shift intro, and settings. Mode: Operate (on-shift lookup leads); the learning views follow the same world.

Audience and job: MOs and HOs mid-shift on a phone, reaching the department's answer in one or two taps; new MOs learning how a patient moves through the zone.

New in this redesign: a zone map tile (five stops, each opening its rules), a whole-pathway map (every step, your route lit, outcomes you can no longer reach dimmed), visual shift tools (route meter, gauges against the thresholds already in the guide), live mini-infographics in the home tiles, and a first-shift intro.

Constraints: routes, ids and node keys unchanged; outcome kinds keep the ebook's colours and never borrow a tile colour; nothing heavy on mobile data; artifact host rules in CLAUDE.md.

Memorable moment: the outcome card turning over in its colour at the end of a pathway, and tiles that catch the light under your finger.

Unresolved: whether new Flow clips are worth their credits once the world is built (budget approved up to 250).

## Direction contract

THESIS: The guide is a premium bento: a familiar clinical-reference app laid out as tiles of different sizes, each tile a live mini-infographic you can tap, in deep jewel colours with an expensive finish. It refuses the flat category default of white cards and tinted icon squares, version 7's look, and it refuses decoration: every tile shows real data from the guide.

OWN-WORLD: Pearl ground with white and jewel tiles. Jewel palette by area: emerald for the zone, sapphire for pathways, plum for rules, garnet for emergencies, obsidian for Code Stroke and the shell, teal for tools, bronze for quick sums, champagne for the shift's pearl. Tiles carry a diagonal gradient, a faint grain, a 1 px inner light edge and a hue-tinted shadow, with a specular highlight that follows the pointer. Outcome colours stay the ebook's flat red, yellow, green, plus violet for refer and slate for next step. Figtree 800 to 900 for display; Atkinson Hyperlegible Next for reading; Atkinson Hyperlegible Mono for numbers, extensions and doses. Radii 28 px for tiles, 16 px for controls; a floating glass tab bar on phones.

STORY: An MO searches or taps a quick-route tile, sees how that pathway can end before answering, answers one card at a time, lands on a coloured outcome card with its source, and copies the advice. A new MO taps the zone tile stop by stop and takes the four-screen intro.

FIRST VIEWPORT: Phone: a greeting and the name, a white search pill, then the bento: the emerald zone tile across the width with its five-stop route and the MO stop lit, garnet Code Blue and obsidian Code Stroke tiles with copyable numbers, and the quick-route tile showing each pathway's possible outcomes as colour dots; a floating glass tab bar. Desktop: an obsidian sidebar and a four-column bento with the zone tile two by two.

FORM: Bento, chosen by the user from three live prototypes they asked for (A Sign System, B Clinical Atlas, C Bento), with the steer "more interactive and informative, expensive premium, a variety of premium colours". Not from the roll; seed: seed:a789322e22327d3f is this session's roll reference. Signature move: tiles as live infographics that respond to touch, and the outcome card that turns over in its colour. Motion: tiles lift 2 px and catch light on hover, press to 98.5%; cards deal in from the right in 450 ms; outcome turns over in 600 ms; reduced motion shows end states at once.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
