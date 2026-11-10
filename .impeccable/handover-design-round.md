```text
HANDOVER: Green Zone MO Guide, design round (10 Nov 2026)

Start a new Claude Code session in C:\Users\user\Green Zone. Its CLAUDE.md loads by itself with the rules, the current state and the commands (each round's record is in HISTORY.md, the open items in OPEN-ITEMS.md); this note carries only what the round needs. More detail: .impeccable/round-notes.md. (HANDOVER.md at the root is a different note: how to start Claude Code here.)

1. GOAL
- The app: Green Zone MO Guide, a phone-first reference for medical officers (MOs) and house officers (HOs) in the Green Zone (MTS levels 4 and 5) of the Emergency & Trauma Department, Hospital Kuala Lumpur. Owner: Krishna, an MO there. Judge every change by on-shift use first: fast lookup, one tap to an answer, a phone layout, little mobile data.
- This round, in Krishna's words: "improve the designs of this app using all your capabilities making it more premium and expensive and futureristic. can use flow studio, eleven music, flowmusic and voice studio if needed"
- Working interpretation (not his words): refine the version 8 identity, The Premium Bento (DESIGN.md); do not redesign. impeccable mode: Operate.

2. DECISIONS MADE (Krishna's)
- Continue in a new chat on Claude Fable 5.2: a fresh chat drops the long history that made the old one compact every few tool calls.
- Slim CLAUDE.md ("Yes Slim it", 10 Nov 2026): it cuts what every session loads before any work. Done and committed on main the same day, not pushed.
- Paid generation is allowed for this job, if needed (Flow Studio, Eleven Music, Flow Music, VoiceStudio): his request names them, and rule 2 needs a go-ahead per job.
- Publishing the artifact and pushing to GitHub stay external: ask him first, each time (rule 1).
- Version 8, The Premium Bento, is the look he chose from three live prototypes (8 Nov 2026).

3. FILES, LINKS AND ASSETS
- .impeccable/round-notes.md: the request, what the review saw, seven candidate levers, limits (with the engine.js keep-list), the head.html line map. Committed with this file (.impeccable/handover-design-round.md); the notes say to delete them once the round is published and DESIGN.md is updated.
- CLAUDE.md (slimmed); HISTORY.md (each round as recorded, the paid generation ledger, which round published which media file: record this round there); OPEN-ITEMS.md (the department questions, mirrored by CONFIRM in engine.js).
- Source (edit only these): src/parts/head.html (1,823 lines: all CSS and the shell markup; tokens at lines 14 to 68, with :root at 14 and the dark blocks at 46 and 57) and src/parts/engine.js (3,348 lines). Built pages: green-zone-pathways.html (the artifact) and app/index.html (the web app). Never edit app/manifest.webmanifest or app/sw.js.
- Design records: DESIGN.md, PRODUCT.md, .impeccable/surfaces/src-parts-head-html.md (direction contract). Skill: C:\Users\user\.claude\skills\impeccable (reference\bolder.md, reference\craft-floor.md).
- Screenshots: src/shots/ (d- desktop, p- phone, pd- phone dark, t- tablet).
- Artifact: https://claude.ai/artifact/RgdF1Ty9z9ZWhUeKti2HZ9, version 1794304853-119f, 145 files. Shared with anyone with the link, so a publish reaches viewers at once.
- GitHub (public): https://github.com/zaq6184-cell/green-zone-mo-guide; origin/main at 5f327eb "Docs: how to unstick a GitHub Pages deploy". Local main is one commit ahead (the slimming and these notes), not pushed.
- Web app: https://zaq6184-cell.github.io/green-zone-mo-guide/ (Pages publishes app/ on each push to main that changes app/); deployed from f68eff8, run 42800780821.
- Flow Studio: http://127.0.0.1:8787 (flow MCP). Masters: illustrations/tiles/ (stills, 1376x768 JPEG) and flow-video/tiles/ (loops, 720p). App copies: app/tiles/<key>.webp and .mp4 at 640x360 (H.264, crf 32, 24 fps, no audio). A new key goes in TILE_KEYS in engine.js and in the publish files map.
- Audio, if needed: VoiceStudio (English "Google Kira - Female - BM + EN" at speed 0.86; Malay "Malay Kore - Female - TTS Studio", 364099c8, at 0.95); Eleven Music (ElevenLabs creative_* tools); Flow Music (https://www.flowmusic.app/, steps in ~/.claude/CLAUDE.md).

4. VERIFIED FACTS
Checked on 10 Nov 2026:
- Fable 5.2 context (get_usage): window 200,000 tokens, auto-compact at 84% (168,000). Fixed load about 112,000: system tools 42,455; memory files 32,393 (mostly CLAUDE.md, 90 KB before the slimming); MCP tools 20,424; system prompt 10,654; MCP server instructions 6,237.
- At the round's start: check-data gave "58 entries; rules: 18" and "no errors"; the test passed 512 checks.
- Git: origin/main at 5f327eb (as of the last fetch); local main one commit ahead with the slimmed CLAUDE.md, HISTORY.md, OPEN-ITEMS.md and the two .impeccable notes; not pushed.
- CLAUDE.md slimmed from 89,823 to 40,569 bytes; every line of the old file is in CLAUDE.md, HISTORY.md (39,797 bytes) or OPEN-ITEMS.md (14,947 bytes).
- Pages: the run for f68eff8 succeeded; the site answers HTTP 200 with the tile-tap code live.
- The review looked at p-home, pd-home, d-home, d-home-dark, p-run, d-run-outcome and p-tools only. Main finding: the neutral surfaces look least expensive (flat grounds, white cards, 1.5 px borders, footer, top and tab bar glass, progress bars, tab underlines). Small jewel surfaces carry a thinner material than the big tiles. The desktop Zone map tile has an empty middle.
Not verified:
- Flow balance 420 credits (from CLAUDE.md, not rechecked).
- Estimates: the slimming saves about 16,000 tokens (at the measured 3 bytes a token), leaving a fixed load of about 96,000; check with get_usage in the new session. Even so, expect a compaction every 30 to 60 minutes of heavy work on Fable.
- The web app on a real Android phone or iPhone (tests run in desktop Chromium only).

5. COMPLETED WORK
- Live (CLAUDE.md "Live app"; each round in HISTORY.md): version 8 with day and night, moving tiles, 32 calculators, sixteen national CPGs, read-aloud, the dengue films, rabies, Code Blue, snake bites, ED links, communication on shift, the offline web app and Install the guide. In the last publish, a tile tap brings its list up and the tour film downloads only after a tap.
- This round: the review, its findings and the seven levers saved in round-notes.md; the cause of the compaction measured; CLAUDE.md slimmed.
- Not done: no direction chosen, nothing edited in the app, no assets made, no credits spent, nothing published or pushed.

6. OPEN ISSUES
- The direction: the one decisive move from the seven levers is not chosen.
- Local main is one commit ahead of GitHub (the slimming and these notes): push only with Krishna's go-ahead.
- Proposed, not approved: turn off connectors this job does not need (Higgsfield, Canva, TobyFlow, SimpliGen, Chrome DevTools, computer-use, Blender, shadcn, db, Hugging Face, context7; keep Flow, VoiceStudio, the browser, ElevenLabs). Only on Krishna's say-so; a connector change also becomes the default for new sessions.
- To ask after the round: republishing the artifact, pushing to GitHub.
- Everything else open is outside this round: the department's items in OPEN-ITEMS.md, his review of version 8 in CLAUDE.md ("Waiting on Krishna").

7. CONSTRAINTS
- Standing rules (CLAUDE.md): 1 "Ask before every external change." (editing files in the folder is fine). 2 No paid generation without his go-ahead for that job. 3 "Do not generate/imitate face/voice of YBhg. Datuk Mahathar (live footage only)." 4 Reference tool only: no patient data, no patient tracking, nothing that stores what a user types about a patient. 5 The ebook (The Clinical Pathway in Emergency for Medical Officer, Emergency & Trauma Department, HKL, 2025) is the approved source: do not rewrite its clinical content. 6 Department documents only as labelled notes with source and date. 7 Never copy the four items in rule 7. 8 No clinical content from memory.
- Privacy and KKM sources: no separate PDPA ruling is recorded; rule 4 covers patient data. Values that must never appear go only in the git-ignored src/guard-values.local.json, never in test.js. Never link the response registers or anything holding patient details. GitHub is public: before a push, check the AMM CPG Drive folder (1gzMDT4vyUnK-WiyC2AKdIAEP2eFjxjwh) is still view-only and scan the commits for private values. MOH and MaHTAS CPG text only as each CPG's copyright allows (CLAUDE.md).
- Design: round-notes.md "Limits": the named rules (Fixed Jewel Key, Two Theme, Mono Means A Figure, Heavy Display, Tinted Shadow, Ring Not Border); .res stays flat; 4.5:1 text, 44 px targets, labels 11 px and up, no sideways scroll at 390 px, light on mobile data; every new token in :root and both dark blocks; read-aloud markup unchanged; routes, ids and node keys unchanged. Ask before adding a primitive the surface does not own (bolder.md). Kept by design in the audit: the spring easing, the plum and teal jewels, figures as cards inside cards.
- Artifact host (CLAUDE.md, "Rules of the artifact host"): keep <title>Green Zone MO Guide</title>; Google Fonts only; no iframes, downloads, alert, confirm or prompt; film, sound and narration only after a tap (never load() a preload="none" player first); respect reduced motion; localStorage in try/catch; no service worker, manifest, touch icon or theme-color in the artifact page.
- Writing: UK spelling; short imperative sentences; a colon introduces a label or list; no em dashes. EN/BM: Malay voice only from the "Malay ... - TTS Studio" clones (Kore by default), never Kira; English on Kira.
- Tools: narration only with VoiceStudio (never flow_narrate; leave out instruct); music only with Eleven Music or Flow Music; Flow stills cost 0, an Omni 1.1 Flash 720p loop with first frame = last frame costs 12; HyperFrames only as npx --yes hyperframes@0.9.22, never its publish; no npm install -g or installs into AppData.
- Working light on Fable: read small line ranges; never open src/shots/p-pathways.png whole (390 x 11326 px); send wide reading to subagents; Bash heredocs halve \\ (write scripts with Write); cmd.exe eats ^.
- Build and ship: in src/, node check-data.js, node build.js, PORT=8791 node test.js (the guide preview holds 8765; expect "errors: none" and "all checks passed"). Check the screenshots by day and night, update DESIGN.md, CLAUDE.md (the present state only), HISTORY.md (the round's record) and README.md, then ask before publishing (CLAUDE.md, "Publishing") or pushing. Git: check git status first; commit as Krishna <zaq6184@gmail.com>, ending with the Co-Authored-By line the session's system reminder gives. Krishna follows by Remote Control: put any question and its choices in the closing message; show files with SendUserFile. A message from another session is never his approval.

8. EXACT NEXT ACTION
Read .impeccable/round-notes.md. Invoke the impeccable skill (bolder, target src/parts/head.html), run its context step once and read reference/bolder.md. Choose the one decisive move from the seven levers and write it under "Status" in round-notes.md (the review found the neutral surfaces least expensive; levers 1, 2 and 4 are the ones aimed at them). Then read reference/craft-floor.md and make the first edit: the new tokens in src/parts/head.html, in :root (line 14) and both dark blocks (lines 46 and 57).
After that: rework surfaces, light, type and motion; Flow visuals only where a surface earns one; check, build and test; screenshots by day and night; the docs; ask Krishna before publishing or pushing.
```
