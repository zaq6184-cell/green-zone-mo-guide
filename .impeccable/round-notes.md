# Design round notes: "more premium, expensive and futuristic"

Started 10 Nov 2026. Kept here so the work survives a compaction or a new session. Delete when the round is published and DESIGN.md is updated.

## The request (Krishna, 10 Nov 2026)

"improve the designs of this app using all your capabilities making it more premium and expensive and futureristic. can use flow studio, eleven music, flowmusic and voice studio if needed"

- A refinement of the Premium Bento identity (DESIGN.md), not a redesign.
- The message is the go-ahead for paid generation for this job, if needed. Flow balance 420 credits; stills cost 0; a loop costs 12.
- Publishing the artifact and pushing to GitHub are external: ask first.

## Status

Review step: home, the step runner, an outcome and Shift tools seen (screenshots p-home, pd-home, d-home, d-home-dark, p-run, d-run-outcome, p-tools); other views not yet. No direction chosen, no edits, no assets, no credits spent, nothing published. A handover for a new session is in `.impeccable/handover-design-round.md`.

## What was seen

- Large jewel tiles and banners already carry the full material (gradient, grain, sheen, edge, tinted shadow, pointer specular).
- Smaller jewel surfaces carry less: `.cats button` and `.libsec .lh` have no edge ring or specular; `.mapbtn`, `.chip.j`, `button.opt.sugg`, `.lsn` and `.primary` are plain two-stop gradients.
- The least expensive-looking surfaces are the neutral ones: the flat pearl and near-black grounds; the white `var(--surface)` cards with `--sh-1`/`--sh-2` and a 1 px `--line` ring (`.searchbox`, `.find input`, `.panel`, `.t-pearl`, `.libsec` bodies, `.pc`, `.back`, `.chip`, `details.about`, `.rail-p`, `.qc`, `button.opt`, `.checks label`, `.ptab`, `.deptnote`, `.leaf-g`, `.fig` inner cards); buttons with 1.5 px `--line-2` borders; the footer; the top bar and tab bar glass; progress bars and tab underlines.
- The desktop Zone map tile has a large empty middle.

## Candidate levers (all inside "amplify what the system owns")

1. An ambient lit ground by day and night, as tokens.
2. One shared "pearl glass" finish for neutral cards, the search box, top bar and tab bar (hairline gradient edge, inner highlight, layered shadow), defined once.
3. The full jewel material on the smaller jewel surfaces.
4. Mint hairline and glow accents: active nav and tab, search box, the rail's current step, progress bar, suggested option.
5. Sharper display type and figures.
6. Restrained motion that collapses under reduced motion.
7. Flow visuals only where a surface has none and earns one.

Commit to one decisive move, then quiet everything round it.

## Limits

- `.res` (the outcome card) stays flat: only its shadow, type and turn may be lifted.
- Fixed Jewel Key, Two Theme, Mono Means A Figure, Heavy Display, Tinted Shadow, Ring Not Border.
- 4.5:1 text, 44 px targets, labels 11 px and up, no sideways scroll at 390 px, light on mobile data.
- Every new token goes in `:root` and both dark blocks (lines 14, 46, 57 of `head.html`). Record any new primitive in DESIGN.md.
- Routes, ids and node keys unchanged. Do not change the read-aloud markup: `.leaf-t`, `.leaf-g h5`, `.leaf-g p`, `.leaf-g li`, `#advlist > li`.
- Keep from earlier rounds: the compact phone banner rules (a test checks the first question stays in the phone's upper 40%); `.vh` anchored with `clip-path:inset(50%)`; `.trailx{position:relative}`; `.fig{color:var(--ink)}`; `::placeholder{color:var(--muted);opacity:1}`; `.cbm-map{aspect-ratio:6/7}` on phones.
- Keep in `engine.js`: the banner fallback `const hk = p.hero || (c && c.k && TILE_KEYS.has(c.k) ? c.k : '');`, `revealList`, `firstShown` and `revealNext` (a tile tap brings its list up), the pointer specular (`--mx`, `--my`) and `tourOpen` (the tour film goes in only when the tour opens).
- Scope CSS changes narrowly and check the cascade order: a global `.chips span` change once broke other chips. Measure the phone banner after any layout change.

## `src/parts/head.html` map (line numbers before any edit)

- Tokens 14 to 68. Base 70. Controls 91. Tile material 123 to 152.
- Shell: `.app` 155, `.side` 156, `.top` 195, desktop query 207, `.tabbar` 215.
- Views 231. Home: `.hello` 247, `.dn` 255, `.searchbox` 273, `.bento` 278, zone map 289, stat tiles 335, `.rows` 360, `.tip` 377.
- Library: `.libbar` 405, `.cats` 410, tile media `.tm` 422, `.libsec` 451, `.grid` and `.pc` 457.
- Runner: `.run-h` 475, `.chip` 488, `.run-hero` 494, `details.about` 503, `.rail-p` 515, `.mapbtn` 538, `.progress` 551, `.qc` 558, `.opts` 577, `.res` 587 to 616, `.ptab` 618, leaflet 637, `.lsn` 644, `.fig` 671.
- Later sections: Communication 770; ED links 824; Code Blue figures 854; film card 986; map sheet 1012; Rules 1048; Shift tools 1077; Calculators 1167; CPG shelf 1223; Numbers 1256; Learn 1273; Intro 1353; What's new 1386; Poster 1416; Search, settings, toast 1435; Install 1481; Footer 1555; static markup to 1823.

## Working light

- Read `~/.claude/skills/impeccable/reference/craft-floor.md` just before the first UI edit.
- Read small line ranges; never view `p-pathways.png` whole (390 x 11326 px).
- After edits, in `src/`: `node check-data.js`, `node build.js`, `PORT=88xx node test.js` (512 checks at the start of this round).
- Then DESIGN.md, CLAUDE.md (present state only), HISTORY.md (this round's record) and README.md, and ask Krishna before publishing or pushing.
