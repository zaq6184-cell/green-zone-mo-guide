---
name: Green Zone MO Guide
description: 'A phone-first premium bento of jewel tiles over a pearl ground, for MOs on shift in the HKL Green Zone. "Right patient. Right zone. Right time."'
colors:
  pearl-ground: "#e9edeb"
  pearl-ground-2: "#e1e7e3"
  surface: "#ffffff"
  on-jewel: "#ffffff"
  surface-2: "#f5f7f6"
  surface-3: "#ebefed"
  ink: "#0f1a15"
  ink-2: "#26352e"
  muted: "#53635b"
  faint: "#7b8a83"
  line: "#dbe2de"
  line-2: "#c5cfc9"
  accent: "#0b6b47"
  accent-2: "#08513a"
  accent-soft: "#dcf1e5"
  mint: "#43dd8c"
  gold: "#d8b46a"
  gold-ink: "#2a1f07"
  emerald-1: "#0d7049"
  emerald-2: "#0a5a3b"
  emerald-3: "#063d28"
  sapphire-1: "#24477f"
  sapphire-2: "#16305c"
  sapphire-3: "#0d1f3e"
  plum-1: "#6a3473"
  plum-2: "#4a2150"
  plum-3: "#2f1334"
  garnet-1: "#a52234"
  garnet-2: "#7e1626"
  garnet-3: "#560d19"
  obsidian-1: "#27352e"
  obsidian-2: "#17211c"
  obsidian-3: "#0b110e"
  teal-1: "#157481"
  teal-2: "#0f5a64"
  teal-3: "#093d45"
  bronze-1: "#8a5a1f"
  bronze-2: "#6b4414"
  bronze-3: "#47290a"
  champagne-1: "#f2e2bb"
  champagne-2: "#e3ca90"
  champagne-3: "#c9a563"
  indigo-1: "#3d4597"
  indigo-2: "#2a3072"
  indigo-3: "#191d4a"
  slate-1: "#46586b"
  slate-2: "#2f3e4f"
  slate-3: "#1c2733"
  outcome-admit: "#c42a20"
  outcome-observe: "#f0ae1c"
  on-observe: "#241900"
  outcome-discharge: "#13834c"
  outcome-refer: "#5a44c4"
  outcome-neutral: "#41544b"
  outcome-advice: "#1b5daf"
  admit-text: "#ae2219"
  admit-soft: "#fcebe9"
  observe-text: "#7d5300"
  observe-soft: "#fdf2d5"
  discharge-text: "#0d6f40"
  discharge-soft: "#e1f3e8"
  refer-text: "#4733ae"
  refer-soft: "#ece9fb"
  advice-text: "#1b5daf"
  advice-soft: "#e6effb"
  concern: "#a2305a"
  concern-soft: "#fbe8ef"
  highlight: "#fde68a"
typography:
  display:
    fontFamily: "Figtree, Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 4.4vw, 3.2rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Figtree, Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "1.45rem"
    fontWeight: 850
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Figtree, Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  control:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
    lineHeight: 1.2
  label:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.1em"
  figure:
    fontFamily: "Atkinson Hyperlegible Mono, ui-monospace, Menlo, Consolas, monospace"
    fontSize: "clamp(1.8rem, 7vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontFeature: "tnum"
  mono:
    fontFamily: "Atkinson Hyperlegible Mono, ui-monospace, Menlo, Consolas, monospace"
    fontSize: "0.8rem"
    fontWeight: 700
    fontFeature: "tnum"
rounded:
  sm: "12px"
  md: "16px"
  lg: "22px"
  xl: "28px"
  pill: "999px"
spacing:
  bento-gap-phone: "12px"
  bento-gap: "14px"
  gutter-phone: "16px"
  tile-pad: "18px"
  card-pad: "22px"
  gutter-tablet: "28px"
  gutter-desktop: "40px"
components:
  button:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.sm}"
    padding: "10px 16px"
    height: "46px"
  button-primary:
    backgroundColor: "{colors.emerald-1}"
    textColor: "{colors.on-jewel}"
    typography: "{typography.control}"
    rounded: "{rounded.sm}"
    padding: "10px 16px"
    height: "46px"
  button-soft:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.accent}"
    rounded: "{rounded.sm}"
    padding: "10px 16px"
  pill:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "7px 14px"
    height: "38px"
  tile:
    backgroundColor: "{colors.emerald-2}"
    textColor: "{colors.on-jewel}"
    rounded: "{rounded.xl}"
    padding: "18px"
  tile-pearl:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "18px"
  question-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "24px 22px 20px"
  option:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    rounded: "20px"
    padding: "10px 16px 10px 10px"
    height: "60px"
  option-suggested:
    backgroundColor: "{colors.emerald-1}"
    textColor: "{colors.on-jewel}"
    rounded: "20px"
  outcome-admit:
    backgroundColor: "{colors.outcome-admit}"
    textColor: "{colors.on-jewel}"
    rounded: "{rounded.xl}"
  outcome-observe:
    backgroundColor: "{colors.outcome-observe}"
    textColor: "{colors.on-observe}"
    rounded: "{rounded.xl}"
  outcome-discharge:
    backgroundColor: "{colors.outcome-discharge}"
    textColor: "{colors.on-jewel}"
    rounded: "{rounded.xl}"
  outcome-refer:
    backgroundColor: "{colors.outcome-refer}"
    textColor: "{colors.on-jewel}"
    rounded: "{rounded.xl}"
  outcome-neutral:
    backgroundColor: "{colors.outcome-neutral}"
    textColor: "{colors.on-jewel}"
    rounded: "{rounded.xl}"
  field:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0 14px"
    height: "56px"
  tabbar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    rounded: "26px"
    padding: "7px"
  tabbar-active:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.accent}"
    rounded: "19px"
    height: "54px"
---

# Design System: Green Zone MO Guide

## Overview

**Creative North Star: "The Premium Bento"**

The guide is a familiar clinical-reference app laid out as tiles of different sizes, each tile a live mini-infographic that can be tapped: the zone map with its five stops, the emergency extensions, how each pathway can end, the discharge check, the quick-sum thresholds. The tiles sit on a cool pearl ground in deep jewel colours, one jewel per area of the guide, with an expensive finish: a diagonal gradient, a faint grain, a 1 px inner light edge, a shadow tinted with the tile's own hue, and a soft highlight that follows the pointer. White pearl tiles carry the denser lists between them. The world was chosen by the owner from three live prototypes (a sign system, a clinical atlas and this bento) with the steer "more interactive and informative, expensive premium, a variety of premium colours".

Decoration is not part of it. Every tile shows real content from the guide, and the clinical meaning is carried by a second, deliberately plain palette: the ebook's own flat outcome boxes in red, yellow and green, with violet for refer and slate for a next step. The finish belongs to the shell and the areas; the outcomes stay flat so the answer reads as the ebook printed it.

The density is phone-first. On a 390 px screen the bento is two columns, the zone tile runs the full width, and a floating glass tab bar sits over the content within thumb reach. On desktop an obsidian sidebar holds the navigation and the bento opens to four columns with the zone tile two by two. Light, dark and device themes are all first-class.

**Key Characteristics:**
- Jewel tiles by area over a pearl ground, each a live infographic of guide content.
- One material for every jewel surface: diagonal gradient, grain, inner light edge, hue-tinted shadow, pointer specular.
- Flat outcome colours from the ebook, never finished like a jewel.
- Figtree at 800 to 900 for display, Atkinson Hyperlegible Next for reading, Atkinson Hyperlegible Mono for figures.
- Large radii (28 px tiles), generous touch targets (44 px and up), a floating glass tab bar on phones.
- Motion that explains: cards deal in, outcomes turn over, the zone route draws itself; all of it gone under reduced motion.

## Colors

Two palettes with separate jobs: a jewel palette that tells the MO which area of the guide they are in, and a flat clinical palette that tells them where the patient goes.

### Primary
- **Ward Emerald** (accent, with emerald-1 to emerald-3 as the jewel stops): the guide's own colour. Links, active navigation, focus of selection, the brand mark, the primary button gradient, the zone tile, the runner's route rail and the suggested answer. In dark themes the accent lifts to a light green so links stay legible.
- **Signal Mint** (mint): the light on a dark tile. The lit MO stop on the zone map, the drawn route fill, the current step's halo, focus outlines, search icons in dark chrome. It is a highlight, never a surface for text blocks.

### Secondary
- **The jewel palette**, each a three-stop gradient family (stop 1 light, stop 3 deepest). On the home bento and in the shell each jewel names an area:
  - **Emerald**: the zone, the brand mark, primary actions.
  - **Sapphire**: pathways, the whole-pathway map button and sheet header.
  - **Plum**: rules and protocols.
  - **Garnet**: emergencies (Code Blue).
  - **Obsidian**: the shell (sidebar, search palette header, toast, the active segmented control) and Code Stroke.
  - **Teal**: shift tools and the discharge check.
  - **Bronze**: the calculators (the home tile and the Shift tools card that lead to them).
  - **Champagne**: the shift's pearl (tip of the day), Still to confirm and the saved-state highlight; the only light jewel, so it takes dark gold ink.
  - In the pathway library the same jewels are reassigned as a second, fixed key for the eight topic groups: heart garnet, breathing sapphire, brain plum, abdomen teal, infection bronze, sugar and pain **Indigo** (the one jewel used only here), Green Zone flow emerald, protocols obsidian, injuries and teeth **Slate** (a cool blue-grey, added with the third CPG round for hip fracture and the knocked-out tooth). A topic keeps its jewel on its library tile, section header, runner chip and list dot.
  - In the calculators the jewels are a third fixed key, for the six groups: Dengue bronze, Doses indigo, Scores sapphire, Heart teal, Pain and calm plum, Injuries garnet, Poisoning and allergy obsidian, Kids champagne. A group keeps its jewel on its tile, its section bar and the header of each of its calculators. Kids is the light jewel, so its tiles take the dark gold ink without a text shadow.
- **Gold** (gold, gold-ink): small warm accents on dark: saved stars, the What's new dot, the intro's call to go, the tour's current chapter.

### Tertiary
- **Outcome Red** (outcome-admit): admit, the ebook's red box; also a failed discharge check and a wrong quiz answer.
- **Outcome Yellow** (outcome-observe, with on-observe ink): observation, the ebook's yellow box. It always takes the dark on-observe ink, never white.
- **Outcome Green** (outcome-discharge): discharge, the ebook's green box; a passed discharge check; a right quiz answer.
- **Outcome Violet** (outcome-refer): refer.
- **Outcome Slate** (outcome-neutral): a next step or the rule itself.
- **Advice Blue** (outcome-advice) and **Concern Rose** (concern): the discharge advice and practical concerns tabs.
- Each outcome also has a text tone and a soft tint (admit-text with admit-soft and so on) for checked states, notes and calculator readouts on light surfaces.

### Neutral
- **Pearl Ground** (pearl-ground, pearl-ground-2): the page behind the bento; a cool grey-green, never pure white.
- **Surface** (surface, surface-2, surface-3): white tiles and cards, then the recessed fill of options, fields and checklists, then the hover and segmented-control track.
- **Ink** (ink, ink-2, muted, faint): text from headings down to tertiary metadata. Faint is for icons, chevrons and separators only: as text it falls under 4.5:1 in both themes, so metadata, small labels, chart axes and placeholders take muted.
- **Lines** (line, line-2): 1 px inner rings and dividers; line-2 for dashed empties, kbd keys and field rings.
- **Highlight** (highlight): search match marks.

### Named Rules
**The Fixed Jewel Key Rule.** A jewel is a key, not a decoration. Each home area and each library topic owns one jewel and keeps it everywhere that area or topic appears: tile, tool header, section header, runner chip, list dot. A new surface in an existing area or topic takes its jewel; never recolour one for variety.

**The Flat Outcome Rule.** The outcome tokens (outcome-admit, -observe, -discharge, -refer, -neutral) are always flat fills: outcome cards, discharge verdicts, outcome dots, legend swatches, quiz right and wrong states, calculator scale bands. They never take a gradient, grain or specular. The ebook's boxes are flat and the answer must read as the ebook printed it.

**The Two Theme Rule.** Every colour is a token on the root with a light value. The two dark blocks (device dark unless light is forced, and dark by choice) redefine ground, surface, ink, lines, accent, mint, gold, the outcome text and soft tones, highlight, scrim, inner edge and shadows, and nothing else. The jewel stops, the flat outcome fills, on-observe, gold-ink, glass and grain are the same in both themes. No colour is ever defined only in a dark block.

## Typography

**Display Font:** Figtree (with Atkinson Hyperlegible Next, system-ui)
**Body Font:** Atkinson Hyperlegible Next (with system-ui, -apple-system, Segoe UI)
**Label/Mono Font:** Atkinson Hyperlegible Mono (with ui-monospace, Menlo, Consolas)

**Character:** A heavy, tightly tracked geometric display face gives the tiles their premium weight, while a typeface designed for legibility carries every word an MO has to read under pressure. Its mono sibling sets the figures so that extensions and doses line up and cannot be misread.

All three load from Google Fonts in one stylesheet request: Figtree 600 to 900, Atkinson Hyperlegible Next 400 to 800 with italic 400, Atkinson Hyperlegible Mono 400 to 700.

### Hierarchy
- **Display** (Figtree 900, clamp(2.1rem, 4.4vw, 3.2rem), line-height 1, tracking -0.035em): view titles and the pathway title in the runner. The home greeting runs larger (to 3.4rem, -0.04em) and drops to 1.75rem under 560 px.
- **Big figures in display** (Figtree 900, 2.2rem to 3.4rem, -0.03em to -0.04em): stat counts on What's new and the quiz score.
- **Headline** (Figtree 850, 1.45rem, 1.15): section heads; question cards run 1.4rem to 1.95rem; the outcome title 1.45rem to 2.1rem at 900.
- **Title** (Figtree 800 to 850, 1rem to 1.15rem, 1.15 to 1.2): tile headings, rail and sheet heads, rule and tool headings.
- **Body** (Atkinson Hyperlegible Next 400, 1rem, 1.55): reading text; leads at 1.03rem; prose capped at 72ch, view intros at 74ch, runner leads at 70ch. Option buttons and list titles use the same face at 800.
- **Control** (Atkinson Hyperlegible Next 700, 0.95rem, 1.2): buttons, pills (0.86rem), tab bar labels (0.72rem at 800).
- **Label** (Atkinson Hyperlegible Next 800, 0.69rem to 0.76rem, never under 11 px, tracking 0.08em to 0.14em, uppercase): short functional labels in four placements only: a chip beside a tile heading that carries a count or a fact (23 pathways, 7 stop signs, One way); New, Updated and Dept notes badges; the outcome kind under the outcome title (Discharge (green box)); and navigation group heads in the sidebar, the search palette and the route trail.
- **Figure** (Atkinson Hyperlegible Mono 700, clamp(1.8rem, 7vw, 2.5rem), tabular): the emergency extensions on number tiles; 1.75rem on number cards, 1.2rem to 1.45rem in lists and calculator outputs, 1.25rem in number fields.
- **Mono** (Atkinson Hyperlegible Mono 700, 0.7rem to 0.9rem, tabular): counts beside navigation and categories, keyboard keys, option numbers, the Ebook page chip in the runner, map node numbers, quick-sum thresholds, tour timecodes.

### Named Rules
**The Mono Means A Figure Rule.** Atkinson Hyperlegible Mono is reserved for things that are read as figures: extensions and phone numbers, doses and thresholds, scores, counts, keys, timecodes and the ebook page chip. Words are never set in mono, and a figure an MO might copy or dial is always mono and tabular.

**The Heavy Display Rule.** Display type is Figtree at 800 to 900 with negative tracking; headings never fall back to a system face and never run lighter than 750.

## Layout

The page is a single column of views inside an app shell. Under 1100 px a sticky glass top bar (60 px, blurred pearl) carries the menu, brand, current title, search and settings, and the obsidian sidebar slides in from the left over a scrim. At 1100 px and up the sidebar is a fixed 286 px column and the top bar disappears.

Views are capped at 1200 px. Side gutters always respect the safe area: max(16px, env(safe-area-inset-left)) and the right-hand equivalent on phones, 28 px from 761 px, 40 px from 1100 px. Views pad 22 px above and 56 px below on phones, 32 px and 64 px wider up. Nothing may scroll sideways at 390 px: grids use minmax(0, 1fr) columns, long labels ellipsis or wrap, and horizontal trails and tab rows scroll inside themselves with hidden scrollbars. Screen-reader text (`.vh`) is anchored to the top left of its containing block and clipped, and the route trail is positioned, so a hidden label inside a scrolled row can never widen the page (every view, step and calculator is crawled at 360 px with none). List items, like paragraphs, wrap with text-wrap: pretty. Tables scroll inside their own frame; on phones their cells pad 8 px with 0.86rem text, so most two and three-column tables fit without scrolling.

**The bento.** Two columns with 12 px gaps on phones; four columns with 14 px gaps from 761 px, with dense auto-flow. The zone tile spans the full width on phones and two by two on desktop; wide tiles span two columns; stat tiles hold at least 150 px. Order is set per breakpoint so on-shift lookup leads on phones: zone, the two emergency numbers, quick routes and saved, then the area tiles, then learning and reference tiles.

**Breakpoints in use.** 560 px (short labels, tighter cards), 640 px (journey rail compacts), 760 and 761 px (tab bar, bento columns, gutters), 860 and 900 px (journey stage and tour stack), 980 px (runner rail hides, tools and rules stack), 1100 px (fixed sidebar).

**Rhythm.** Tile padding 18 px; card padding 22 to 24 px (16 to 20 px under 560 px); section heads 40 px above and 14 px below; lists breathe at 6 to 10 px gaps. On phones the page reserves 98 px plus the bottom safe area under the content for the tab bar.

## Elevation & Depth

A hybrid of tonal layering and soft, long shadows. The pearl ground sits lowest; white surfaces rise on a broad, low-opacity shadow with a 1 px inner ring instead of a border; jewel tiles rise on a shadow tinted with their own deepest stop, so depth reads in the tile's colour rather than grey. Overlays (search palette, settings, map sheet, open sidebar) take the strongest shadow over a scrim. In dark themes the shadows become plain deep black and the inner rings carry the edges.

### Shadow Vocabulary
- **Hairline** (sh-1, `0 1px 2px rgba(15,26,21,.06)`): back pill, runner icon buttons, collapsible panels.
- **Resting** (sh-2, `0 1px 2px rgba(15,26,21,.05), 0 18px 34px -20px rgba(15,26,21,.42)`): pearl tiles, cards, panels, the search pill, the library and tab panels.
- **Raised** (sh-3, `0 2px 10px rgba(15,26,21,.08), 0 36px 70px -28px rgba(15,26,21,.5)`): hover on pearl surfaces, dialogs, the palette, the sheet, the toast.
- **Jewel** (`0 1px 1px rgba(0,0,0,.05), 0 22px 38px -24px <stop 3>`): every jewel tile at rest; on hover the blur opens to 44 px and the offset to 28 px.
- **Outcome glow** (`0 22px 40px -26px <outcome colour>`): under the outcome card and verdicts, in the flat outcome colour.
- **Glass bar** (`0 0 0 1px line at 80%, 0 20px 40px -18px rgba(15,26,21,.5)`): the floating tab bar.

### Named Rules
**The Tinted Shadow Rule.** A jewel surface casts a shadow in its own deepest stop, never in grey. Neutral surfaces use the sh-1 to sh-3 steps. In dark themes every tinted shadow (jewel tiles, emerald buttons, outcome cards and verdicts) mixes to black through the shade-k token (0% in light, 100% in both dark blocks), so no shadow lights the dark ground; the night films and night poster sheets do the same.

**The Ring Not Border Rule.** Surfaces are outlined with a 1 px inset ring (line on light surfaces, a white edge on jewels), not a CSS border, so the edge sits inside the radius and never shifts layout. Hover and focus thicken the ring to 1.5 or 2 px in the accent.

## Shapes

Soft, generous corners that scale with the surface. Tiles, outcome cards, question cards, tool and library panels take 28 px (xl); panels and grouped details 22 px (lg); fields, checklist rows, notes and dropdown cards 16 px (md); buttons 12 px (sm), with 11 px for small buttons. Chips, pills, badges, tags, the back pill and the toast are full pills. Components between steps keep their own observed values: the search pill and answer options at 20 px, icon buttons and icon chips at 14 px, the tab bar at 26 px with 19 px active cells. The direction contract named 16 px for controls; the build ships 12 px buttons and 16 px fields, and the build is recorded here.

Circles mark places on a route: zone stops (50 to 58 px), journey stops, runner rail dots, map node numbers. A rounded square (8 to 11 px corners) marks an outcome or a step on the same routes, so a route reads question as circle, outcome as square. Outcome dots in lists are short rounded bars (18 by 6 px).

## Components

### Buttons
Tactile and quiet: white with a ring, the colour arrives on intent.
- **Shape:** gently rounded (12 px), minimum height 46 px; small 38 px; icon buttons 44 by 44 px at 14 px.
- **Default:** surface fill, 1.5 px line-2 border, ink text at 700.
- **Primary:** a 150 degree emerald gradient (emerald-1 to emerald-2), white text, an emerald-3 tinted shadow; brightens 8% on hover.
- **Soft:** accent-soft fill, accent text, gains an accent border on hover.
- **Ghost:** transparent; surface-3 on hover.
- **Hover / Active:** border turns accent; press scales to 98%. Disabled drops to 42% opacity.
- **On jewel and outcome surfaces:** glass fills (white at 14 to 26%) with a white inset ring; the outcome card's primary action inverts to white with the outcome colour as text (on-observe fill on yellow).

### Chips
- **Pill links:** full pill, surface fill, 1.5 px ring, 0.86rem text at 700 with a trailing chevron; accent ring and text on hover. On jewels they turn to glass.
- **Tags:** glass pill (white at 9%, so white type keeps 4.5:1 under the tile's sheen) beside a tile heading, uppercase label type; on pearl tiles they sit on surface-3 in muted.
- **Rule tiles:** the three rule tiles take the admit, discharge and advice hues; the discharge tile's gradient starts at the outcome green itself, and chips and pills on all three sit on a dark glass (black at 16%) so their white labels read on every stop.
- **Outcome legend:** a pill with a short bar swatch in the flat outcome colour and the kind in ink-2.
- **Category chips in the runner:** the area's jewel gradient with white text; the Ebook page chip is white and mono.

### Cards / Containers
- **Jewel tile (signature):** 28 px corners, 18 px padding, a 150 degree gradient through the area's three stops (stop 2 at 55%), a grain layer (an inline SVG noise tile at 180 px), a top-left radial sheen, a 1 px inner white edge, and the tinted Jewel shadow. A pointer handler writes the pointer position into --mx and --my on the tile under it, and a 280 px radial highlight follows. Linked tiles lift 2 px on hover over 350 ms and press to 98.5%.
- **Pearl tile:** the same shape and behaviour in white with a line ring and the Resting shadow; the pointer highlight is mint at 9%; hover deepens to Raised.
- **Cards and panels:** white, 22 to 28 px corners, Resting shadow plus inner line ring, 18 to 24 px padding.
- **Tile media:** a topic tile, Code Blue and Code Stroke carry a Flow Studio still of their body system in jewel glass, under the sheen and grain, with an 8-second loop over it while Moving tiles is on and the tile is on screen. On topic tiles the picture fills the right 78% behind a fade in the tile's stop 2, so the title sits on calm colour; on the two number tiles it is a 40% background so the extension reads at a glance. The other home tiles have their own: Pathways (a glass book), Rules and protocols (a shield), Discharge check (a doorway) and Quick sums (a gauge) as a 40% background behind their lists; First shift (a compass) on the right 64% behind a fade; the Pearl tile (a pearl in its shell) at 55% behind a champagne fade. The Shift tools headers reuse the doorway and the gauge on the right 64%, and each Pathways section bar carries its topic's picture at the right, at most 250 px wide, blended into the bar. The calculator groups carry six more, on their tiles, section bars and calculator headers: a teddy bear (Kids), an ampoule (Doses), a balance scale (Scores), a feather (Pain and calm), a helmet (Injuries), a droplet (Dengue), a stethoscope (Heart) and an apothecary bottle (Poisoning and allergy). A phone plays at most six loops at once, the most visible first (twelve on wider screens). White cards and the Numbers page have none. Reduced motion keeps the still.
- **Recessed rows:** options, checklist rows, notes and readouts sit on surface-2 with an inner line ring at 16 to 20 px.

### Inputs / Fields
- **Style:** 56 px tall, 16 px corners, surface-2 fill, inset line-2 ring, values in mono 700 at 1.25rem; selects in body 800. Placeholders take muted at full opacity in every field.
- **Focus:** the ring becomes a 2 px accent inset and the fill lifts to surface; no outline glow.
- **Checklists:** 50 px rows with an emerald accent-colour checkbox; checked rows turn accent-soft with an accent ring; stop-sign checklists use the admit red and admit-soft instead.
- **Library find:** 52 px, 18 px corners, white with the Resting shadow and an accent search icon.

### Navigation
- **Phone tab bar:** a floating glass bar 10 px from the sides and bottom (plus safe areas), 26 px corners, surface at 90% with an 18 px backdrop blur and 1.6 saturation. Five equal cells of icon over 0.72rem label at 800 in muted; the current cell fills accent-soft in accent. The centre Search cell is a 44 px emerald gradient square.
- **Sidebar:** obsidian gradient from stop 1 to stop 3, light text, uppercase group heads, 44 px rows at 13 px corners; the current page gets white at 12% with a mint icon; counts in mono at 55%.
- **Top bar (under 1100 px):** sticky, pearl at 84% with a 16 px blur and a hairline bottom line.
- **Focus:** a 3 px mint outline offset 2 px on every focusable element.
- **Day and night switch:** in the home header, a 64 by 36 px track on surface-3 with a line-2 ring, a sun and a moon at 18 px, and a 28 px knob that slides 28 px on the spring: white with an observe-amber sun by day, indigo-2 with a gold moon at night. It is labelled "Night colours" from 761 px; below that it sits beside the title, icons only. It sets the same theme as Settings, and the tour film and poster sheets follow it.

### Pathway Runner (signature)
One question card at a time on a white 28 px card with a ghost card stacked behind it. Answer options are 60 px rows with a mono number key; the option the checklist suggests becomes an emerald gradient with a mint key. A route rail beside the card (a vertical emerald to teal line with circle stops, the current one ringed in mint) shows the answers given and how the pathway can end; under 980 px it becomes a horizontal trail and a segmented progress bar.

### Outcome Card (signature)
A flat block of the outcome colour at 28 px with a 58 px glass icon square, a display title, the kind label in uppercase underneath, tick-box items, glass link pills, any source gap on a 14% black panel, and a footer of glass actions with one inverted primary.

### Calculator
The hub reuses the library: a find field, the group tiles (as topic tiles, with All in obsidian) and a section per group with a jewel bar and white rows; a PEMCalc or MDCalc row carries an outside-link icon and names its site as an outside site, not from the ebook or a department document. An open calculator is a tool panel: a header tile in its group's jewel with the group's sculpture on the right 64%, its title, one line of purpose, and its source and group as tags. Its fields come in five kinds: number fields (mono, the weight with a one-line "shared, not saved" note), choices, a segmented control in equal columns, checklists with a mono points badge (stop-sign red for the CT criteria), rating rows of three 0/1/2 options with the ebook's words (stacked under 560 px), and a level picker with a mono key square that fills emerald when chosen. Results are recessed rows: a figure in mono, an answer in words in the display face, with a flat scale under scores. The next step is a flat verdict in the outcome colours (admit red, discharge green, refer violet, a next step in slate) with a glass pill to the pathway step. Where the source stops, a "Not in the source" note sits on a line-2 ring. The footer holds Open the pathway, Copy and Clear. Under 980 px the open calculator sits above the hub; from 980 px they sit side by side.

### Guideline Tabs and Leaflet
A national guideline (the dengue CPG) uses the same reference tabs as a pathway, underlined in gold, each holding notes on surface-2 cards that name their page. Its first tab is a leaflet: a segmented English and Bahasa Melayu switch (the obsidian pressed state), the leaflet title in the display face, then each part on its own card. The warning signs part sits on concern-soft with a concern edge and a stop icon, so it reads apart from the do and do-not lists. Copy takes the language on screen. Its outcome labels are plain (Admit, Discharge), and its neutral answers read Guidance, not Next step. Since 10 Nov 2026 every entry opens on a banner: an entry with its own picture keeps it, and the others take their topic group's glass loop (a topic banner, `.run-hero.topic`). On phones every banner is compact: 11 to 12 px padding, chips at 0.74rem, the title across the full width at 1.74rem, so the first question starts within about 10 px of where a plain header put it; the pictures sit behind the title's right end under the fade and a text shadow. On the entry page its chips and title sit on a jewel banner (`.run-hero`, in its topic's jewel: bronze for dengue, sapphire for asthma, indigo for gout) with its own Flow Studio still and loop on the right, laid out like the calculator headers; the banner redraws without restarting the loop.

### Guidelines Filter and CPG Shelf
The library's filter row gains a Guidelines chip between Ebook and Rules and protocols. It shows the national guidelines built into the guide in their topic sections, then a shelf: one obsidian section, "National CPGs, outside links", with a short muted note (not built in yet; each opens its PDF in Google Drive where its copyright allows a copy, otherwise the Academy of Medicine's file, which may ask for a quick check), a pill to the whole Drive folder, then two plain sub-headings, For the Green Zone and Now and then, each with a mono count. Every shelf row is an outside-link row like the calculators hub's: the title, an outside-link icon naming where it opens (PDF in Google Drive, or Academy of Medicine), the specialty and year, and a row of pills raised above the row's own link so each can be tapped: Academy (the official file, when the title opens Drive), Quick reference, and Patient leaflet with its language or edition. A pill opens the Drive copy when there is one. A built CPG entry carries the same pills at the top of its References tab (`.cpg-pdf`): the full CPG in Google Drive, the Academy, and the quick reference. A library search under All shows the matching shelf rows in the same section; All without a search shows none. `#guidelines` opens the library on this chip.

### Whole-pathway Map Sheet
A right-hand sheet up to 560 px over a scrim, sapphire gradient header, every node on a vertical line: questions as circles, steps and outcomes as rounded squares, outcome nodes filled flat in their outcome colour, the current node in emerald with a mint halo and the untaken branches faded.

### Motion
The ease is a long out-curve, cubic-bezier(.16, 1, .3, 1); a spring, cubic-bezier(.34, 1.56, .64, 1), is kept for stops and dots that pop. Views rise 10 px in over 400 ms. Question cards deal in from 22 px right with a 0.8 degree tilt over 450 ms. The outcome card turns over from -50 degrees about its top edge in 600 ms. The zone route fill draws over 1.2 s while the stops pop in 100 ms apart; the intro art draws its lines and pops its marks. Sheets slide 30 px in over 360 ms; the palette and dialogs drop 10 px in over 260 ms. Under reduced motion every animation and transition collapses to an instant end state.

## Do's and Don'ts

### Do:
- **Do** give every jewel surface the full material: three-stop 150 degree gradient, grain, inner 1 px edge, a shadow in its own deepest stop, and the pointer highlight.
- **Do** keep each area and library topic on its jewel: emerald zone, sapphire pathways, plum rules, garnet emergencies, obsidian shell and Code Stroke, teal tools, bronze sums, champagne for the shift's pearl; topics as keyed in Colors.
- **Do** fill outcome surfaces flat with the outcome tokens, and set text on Outcome Yellow in on-observe.
- **Do** make every tile show real content from the guide: a count, a route, a threshold, a number to copy.
- **Do** set extensions, doses, thresholds, scores, counts and timecodes in Atkinson Hyperlegible Mono with tabular figures, and keep phone numbers as selectable text with a Copy button.
- **Do** define every new colour as a root token with a light value and redefine it in both dark blocks when it must change for dark.
- **Do** use max(16px, env(safe-area-inset-left, 0px)) and the right-hand equivalent for side gutters, and check 390 px for sideways scroll.
- **Do** keep touch targets at 44 px or more and the 3 px mint focus outline on everything focusable.
- **Do** wrap every animation in a no-preference reduced-motion query and show the end state when motion is reduced.
- **Do** load fonts only from Google Fonts and keep scripts inline; there is no framework and no external script.

### Don't:
- **Don't** put a gradient, grain or specular on the outcome tokens; the ebook's boxes are flat.
- **Don't** use a tile as decoration or fill a tile with placeholder art; if it has no guide content, it is not a tile.
- **Don't** set words in mono, or a copyable number in the body face.
- **Don't** put an uppercase label line above a headline; uppercase labels sit beside a heading as a chip, under the outcome title, or as a navigation group head.
- **Don't** use grey shadows under jewel tiles, or CSS borders where an inset ring belongs.
- **Don't** define a colour only inside a dark block, or hard-code a hex in a component when a token exists.
- **Don't** use glyph characters for icons; icons are inline SVG.
- **Don't** let any element scroll the page sideways at 390 px.

### Protocol Infographics
Where a protocol draws its content (the rabies protocol's flow charts and prescribing appendices), the guide redraws it as a quiet infographic inside the step or note it belongs to (`fig`), on surface-2 with a line edge and its own ink, so it reads the same in a white card, a tab note or a coloured outcome card, never as a picture of the page. Captions are 0.8rem in muted; labels inside a drawing are at least 9.5 px. The Code Blue map is 10:7 on wide screens and 6:7 on phones, so its smallest block is 31 px tall at 360 px. The colour-code cards carry their colour in the icon square, with no side stripe. The wound categories are three cards with a small skin cross-section and a 4 px top rule on a severity ramp (next-step slate, observe amber, admit red), saying what each category leads to. The vaccine schedules are a day strip from D0 to D28: an accent dot on each dose day, a soft accent bar for a window (D14 to D28), a mono count over a multi-site dose (×2, ×4), the course and its chart wording as the row label (above the strip on phones), with a front and back figure marking the sites (refer violet for IM, accent for ID) and the dose at each site in mono. RIG is four small cards with stroke icons, the one that forbids in admit red. The prescription writer repeats the strip for the course chosen under its result.

### Read-aloud Bar and Leaflet Film
Patient advice that can be read aloud (the two CPG leaflets in both languages, and the discharge advice of mild head injury, dengue and the Asthma Zone) opens with a **Listen bar**: an emerald jewel strip with a white round play button, the label and the time in mono, a 6 px track that fills in mint with a tick at each section, and white-ringed chips that start a section. While it plays, the section being read is outlined in the accent on accent-soft, and the line being read carries a soft mint marker (mint at 30%, with a 4 px spread of the same so the marker breathes past the text) that moves line by line with the voice; the page follows it only when it leaves the screen and the reader has not scrolled in the last four seconds. Nothing downloads before the play button is tapped. A leaflet with a film offers it under the bar as a small white card (a 72 px square cover with a white play disc, a display-face title and one muted line with the length); the tap swaps the card for a square player with the full cover, and starting either one stops the other.

### Offline and Install (the public web app only)
The GitHub Pages copy installs as an app and opens without a signal; the claude.ai artifact cannot (`parts/pwa.js`, which `build.js` adds to `app/index.html` only, feeds the live parts). The visible pieces, all from existing tokens and components:
- **App icon:** the brand mark exactly as the top bar's `.mark` draws it: the 150 degree emerald-1 to emerald-3 gradient, the glyph in mint and white at 25/42 of the tile, corners a third of the size (`icon-192`, `icon-512`); full bleed with the glyph at 52% for Android's masks (`maskable-*`), and at 58% for iOS (`apple-touch-icon`, 180 px). `src/icons.js` draws them from LOGO and the tokens. The splash and browser bar take the pearl ground (`--bg`); the bar follows the Day and Night switch.
- **Install the guide (`#install`):** the tools world, so teal. A teal jewel hero holds the live state: a small uppercase label, a display-face headline (Ready offline; Saving for offline use; Installed: you are using the app), one line with the size saved on this device, and glass chips that turn white when true (Works without a signal, Installed) or observe amber when the connection drops (Offline now: using the saved copy); where the browser offers an install, a white Install button. Beside it (above it on a phone) a drawn phone home screen in the intro's line style, the Green Zone icon popping in with a mint tick, a down arrow while saving or an amber no-signal badge. Below, under "Install it, step by step", two segmented controls (the library's `.seg`) choose the device and the browser, the one detected marked with a mint dot; then the steps as white cards: a drawing on surface-2 (a light phone, cropped so the control is large, or a light browser window, the control to tap ringed in teal with an echo that pulses three times), a 32 px teal number badge, a display-face title and one muted line, with the button's own icon in a small key chip where the text names it. A QR card (a white plate, 132 px; "On your phone" on a computer, "For a colleague" on a phone, the address in mono with Copy link) and a "What works without a signal" card (discharge-green ticks, muted crosses) close the page. In the claude.ai artifact the page keeps only the hero, saying it installs from the web app with a white "Open the web app" button, and the QR card. Shift tools carries a teal "Install the guide" tile beside ED links, and the side menu links it under Reference.
- **Settings row, Offline and install:** a standard `.set` row above the footnote. Its muted line says whether the guide is saved on this device and how many films and sounds are kept. At the row's end a small (`.sm`) Install button where the browser offers an install, like Clear; otherwise a small "How to install" link to the page.
- **Offline notice:** when the connection stays down for a moment, the standard toast says "Offline: the saved guide still works" (at most once a minute).
- **Update notice:** when a newer version has been saved while an older page is open, a toast that stays until used: the obsidian pill with "New version ready", a mint Reload pill (44 px, obsidian-3 text) and a 44 px white close icon. Above the phone tab bar like every toast; Reload keeps the step you are on, since it lives in the address.

### One-screen Calculator (the dengue assessment)
A long calculator can run as one screen in numbered sections: each section heading is a bronze 28 px numbered badge with a display-face title, separated by a hairline. A checklist that must be answered before a lower result can show ends with a **None of these** row, outlined in line-2 and filled discharge-soft when ticked; ticking an item clears it, and ticking it clears the list. A result bar (`.cx-sticky`) sticks to the foot of the screen while the form scrolls (above the phone tab bar, at 96 px plus the safe area) in the verdict's own outcome colour, and settles above the results; tapping it scrolls to them. The open calculator clips with `overflow:clip` so the bar can stick. The dengue phase timeline is a ten-day strip: a legend above, two 10 px tracks (the febrile phase in advice blue, the usual critical window in observe amber) and a 3 px ink marker on the day entered, with the day's number set in bold on the axis.
