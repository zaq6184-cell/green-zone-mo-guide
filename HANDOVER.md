# Handing the Green Zone MO Guide over to Claude Code

Version 7, 7 November 2026.

Everything for the guide is in this folder: the source, the built app, its media, the poster, the explainer video and the notes. `CLAUDE.md` gives Claude Code your rules, how the app is built, how to test it and how to publish it. Claude Code reads that file by itself each time you start it in this folder, so you do not need to explain the project again.

## Start Claude Code here

1. In File Explorer, right-click the `Green Zone` folder and choose **Open in Terminal** (or run `cd "C:\Users\user\Green Zone"`).
2. Run `claude`.
3. The build needs Node.js 18 or later (`node -v` shows the version).
4. Optional but useful: run `git init`, then ask Claude Code to make a first commit. You can then see and undo each change it makes.

## First prompt to paste

```
Read CLAUDE.md and HANDOVER.md. In src, run npm install, npx playwright install chromium, then npm run all. Tell me in a few lines whether everything passed, what the app holds, and what is still open. Do not publish or change anything outside this folder.
```

## Prompts for the usual jobs

- **Add a new memo:** "Add the memo in `<path to the PDF>` as a department note on `<pathway or rule>`, with its source and date. Run npm run all and show me the phone and desktop screenshots of that page."
- **Fix a detail:** "On the IV antibiotics step, change `<old text>` to `<new text>`. Run the checks and show me the screenshot."
- **Publish:** "Publish the current build to the live Green Zone MO Guide link." Claude Code will ask you to confirm first, as `CLAUDE.md` tells it to.
- **Check a pathway against the ebook:** put the ebook PDF in this folder first, then "Check the dengue pathway against pages `<n>` to `<n>` of the ebook and list any difference. Do not change anything yet."

## Where things stand

- **Live app:** https://claude.ai/artifact/RgdF1Ty9z9ZWhUeKti2HZ9, version 8 with day and night (published 8 Nov 2026). It is private until you share it from the page's Share menu. The QR code on poster sheet 1 now opens the public web app (below) instead, so anyone who scans it can use the guide.
- **Version 8** (8 Nov 2026): the premium bento redesign, now live at the link above. Preview changes with `npm run serve` in `src`, or the `guide` server in the browser pane. Every later publish still needs your go-ahead.
- **GitHub:** this folder is also at https://github.com/zaq6184-cell/green-zone-mo-guide, which is public. `git push` puts new commits there for anyone to see, so Claude asks you before every push.
- **Web app on GitHub Pages:** https://zaq6184-cell.github.io/green-zone-mo-guide/ is the same app, public. It updates by itself when a new build is pushed to `main`.
- **Moving tiles** (8 Nov 2026, live): glass sculptures made in Flow Studio move on the topic tiles and on Code Blue and Code Stroke, on phones too. Settings, Moving tiles turns them off. The other home tiles, the Pathways section bars and the Shift tools headers move too (built 9 Nov 2026, not yet published).
- **Day and night** (8 Nov 2026, live): a Day/Night switch at the top of the home screen. In night colours the tour plays night versions of both films and the poster page shows night versions of both sheets; the printed sheets keep the day colours. Dark mode's tile shadows now turn black, as DESIGN.md says.
- **Waiting on you:** your review of version 7.
- **Still to confirm with the department:** six details, listed at the end of `CLAUDE.md` and on the app's What's new page (EM Watch booking, the KK or GP redirect procedure, the EMACC SOP, four phone numbers, the MERS-CoV case definition and the snakebite guideline).
- **Not yet read:** MO Drive folders 1 (Administration), 2 (Memo-memo, beyond the memos already used), 4 (Slides) and 6 (Interdepartment referral).
- **Explainer and poster:** both were redone with version 8 and now include the triage course folder rules (one-way flow, down-triage, IV antibiotics without a bed, the delayed primary team). The KK or GP redirect is left out until its procedure is confirmed. The tour also plays it in Bahasa Melayu: the Narration switch under the video. The poster canvas on claude.ai still shows the old sheets until it is republished.

## If you move the folder

Copy the whole `Green Zone` folder. `src/` is enough to rebuild the page, but the offline copy and the published page need the media in `app/` (`img`, `media`, `poster`, `clips`, `audio`).
