# Research behind version 6

Krishna asked for research online to improve the guide, and then for an app that helps an MO during a shift. I looked for evidence on two things: how doctors look things up while they work, and what makes a short teaching video and its player work. This page lists what the sources say and what version 6 does with each point. It was read on 7 November 2026.

## Sources

1. Ely JW, Osheroff JA, Ebell MH, et al. Analysis of questions asked by family doctors regarding patient care. *BMJ* 1999;319:358–361. Abstract read at https://augusta.elsevierpure.com/en/publications/analysis-of-questions-asked-by-family-doctors-regarding-patient-c/ and a news summary at https://www.clinician.com/articles/50535-physicians-slow-to-seek-answers-on-patient-care (the PubMed Central copy, PMC28191, was behind a browser check).
2. Brame CJ. Effective educational videos: principles and guidelines for maximizing student learning from video content. *CBE Life Sciences Education* 2016;15(4):es6. https://pmc.ncbi.nlm.nih.gov/articles/PMC5132380 (it reports the edX engagement data of Guo et al., 2014).
3. The Learning Scientists. Designing effective instructional videos. Blog, July 2021. https://www.learningscientists.org/blog/2021/7/1-1
4. Accessible.org. Video player accessibility best practices. https://accessible.org/video-player-accessibility-best-practices/
5. British Red Cross design system. Video component guidance. https://design.redcross.org.uk/components/video

Two more pages could not be read, so nothing here rests on them: a PubMed record on how doctors use UpToDate at the point of care (PMID 23413790, an empty page), and a PubMed Central article on retrieval practice (PMC10409703, behind a browser check).

## What the sources say, and what version 6 does

### Looking things up during a shift

| Finding | How version 6 applies it |
|---|---|
| Doctors spent "an average of less than 2 minutes pursuing an answer", and did not immediately pursue most of their questions (702, 64%). They used "readily available print and human resources" (1). | Search opens from every screen: the **/** key, Ctrl K or ⌘K, the hero search box, or the Search tab on a phone. It searches pathways, rules, numbers and the department notes, and shows Saved and Recent when empty. |
| An answer has to be close at hand to be used at all (1). | Saved pathways and recent ones sit on the home screen. Any step has its own link, for example `#trauma-walkins--ct`, so a colleague can send the exact step. Numbers have copy buttons. |
| A question pursued is usually answered quickly when the source is simple (1). | Each pathway asks one question per screen, with the answer keys 1 to 9 on a keyboard, and ends in the outcome box with the discharge advice ready to copy. The discharge safety check and the quick sums take one screen each. |
| (Design choice, not from a source.) A phone in one hand at the bedside. | Bottom tab bar on phones (Home, Search, Pathways, Tools, Numbers), search text large enough (18 px) that the phone does not zoom in, and the hero clip loads only on wide screens to save mobile data. |

### The tour and the journey clips

| Finding | How version 6 applies it |
|---|---|
| Keep videos to 6 minutes or less. Median engagement in the edX data was close to 100% for videos under 6 minutes, about 50% at 9 to 12 minutes, and about 20% at 12 to 40 minutes (2). | The tour is 65 seconds. Each journey clip is 8 seconds. |
| Break a video into segments that the learner can pause and replay (2, 3). | The tour has 7 chapters you can jump to, a transcript you can click to seek, speeds from 0.75 to 1.5, and it offers to resume where you stopped. The journey is five stops with Back and Next, and Play all. |
| Signal the key points, narrate over pictures rather than reading out on-screen text, and leave out music and busy extras (2, 3). | The Flow clips carry no text and no music. Each stop's points sit beside the picture, not over it. |
| Use a conversational voice that speaks to the learner as "you" (2). | The narration and the pathways address the MO as "you". |
| Embedded questions can improve memory through the testing effect and help learners judge what they know (2). | A 10-question quiz built on the Green Zone rules and the new Drive material. Each answer shows why at once and links to the rule. Answer order is shuffled each time, and the best score is kept on this device only. |

### Accessible video and motion

| Finding | How version 6 applies it |
|---|---|
| Captions must be accurate and in sync; a full transcript adds to captions but does not replace them (4, 5). | The tour's captions are timed to the narration, and the transcript highlights the line being spoken. Listen on a journey stop shows its words as it plays. |
| Every control must work from the keyboard with visible focus; the native video element avoids most custom-player problems (4, 5). | The tour uses the browser's own video controls. Every button in the app is a real button with a visible focus ring. |
| Do not autoplay with sound. Motion that lasts more than 5 seconds needs a pause control (WCAG 2.2.2). Respect reduced motion, and avoid more than three flashes a second (WCAG 2.3.1) (4, 5). | Clips play muted, only while on screen, with a Pause button. Sound starts only when you press Listen or play the tour. If the phone or computer is set to reduce motion, clips do not start on their own and a still picture shows instead. The clips do not flash. |
| The player must reflow without sideways scrolling (WCAG 1.4.10) (5). | Tested on a 390 px phone screen and a 1366 px desktop, in light and dark: no sideways scrolling on any section. |
