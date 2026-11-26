# Content draft, 25 Nov 2026: the four updates Krishna approved

Read-only drafting: nothing under `src/` or `app/` was changed. Every fact below was read again today (25 Nov 2026) on the page named beside it, unless it is marked otherwise. Each item gives the facts with links, then the proposed text as snippets with the file and place, then what could not be verified.

**What was read as page text, and what through a summariser:**
- **Read as page text** (word for word):
  - the JKN Selangor and WHO dengue PDFs (pdftotext);
  - the Nipah circular and guideline, the abbreviation circular and the NAG home and What's new pages (in the browser pane);
  - the rhinosinusitis CPG (pdftotext).
- **Read through WebFetch's page summariser** (near-verbatim):
  - the news articles (The Star, Bernama, NST);
  - the NAG topic pages (their headings);
  - the mpox list page.
  - Check those quotations against the page before any goes into the app, as `RESEARCH-2026-11.md` advises.

**How the pages were read.** Web search and WebFetch first. moh.gov.my refuses automated requests (HTTP 403), so the three moh.gov.my PDFs (the Nipah circular and guideline, and the abbreviation circular) were read in the browser pane: fetched from the moh.gov.my page itself and turned into text with pdf.js, and the scanned pages drawn on screen and read by eye. Nothing was saved to this folder.

**Note for Krishna.** One attempt to open the abbreviation circular's PDF in the browser pane made moh.gov.my send it as a download, and the app showed a save dialog. If it is still open, cancel it: nothing was meant to be saved.

**Evidence tags**, as in `RESEARCH-2026-11.md`:
- *Primary*: read on the issuer's own page or document.
- *News*: read on a news page quoting MOH or a state health department.

---

## Item 1. A dated "Current alerts" card for the home page

### Facts, as read on 25 Nov 2026

| Alert | What the source says | Source, date | Evidence |
|---|---|---|---|
| Dengue, Selangor | Week 45 (8 to 14 Nov 2026): 674 cases, 5.6% (36 cases) more than the 638 of week 44. Weeks 1 to 45: 34,820 cases, 70.7% (14,421) more than the same period of 2025 (20,399). Deaths: "tiga puluh tiga (33)" (CFR 0.09%) against six (CFR 0.03%). The PDF was created 16 Nov 2026. Week 46 (`ME46_26.pdf`) returns 404, so week 45 is the latest. | JKN Selangor, "Situasi semasa kes demam denggi Negeri Selangor bagi minggu epidemiologi 45/2026": https://jknselangor.moh.gov.my/images/2026/denggi/ME45_26.pdf | Primary |
| Dengue, Malaysia (WHO) | Dengue Situation Update 757, 29 Oct 2026: "There was no update in this reporting period." Week 34 (23 to 29 Aug 2026): 2 585 new cases; higher than the same period in 2025 and the 5-year median (2021 to 2025); 63 752 cases and 60 deaths in 2026. No later update was found (`dengue_20261112.pdf` returns 404). **The Malaysian figures are from August.** | https://cdn.who.int/media/docs/default-source/wpro---documents/emergency/surveillance/dengue/dengue_20261029.pdf | Primary, but stale |
| Dengue, KL and Putrajaya | **No primary source was found.** The last figure seen (week 32, 10,316 against 5,013) is from news and is three months old. Selangor's report does not cover KL. | – | Leave out |
| Rabies, Kedah | A 31-year-old man from Kubang Pasu died on Sunday 27 Sep after a stray dog bite in August. He "sought treatment at a healthcare facility after the incident but did not receive rabies post-exposure prophylaxis (PEP)". Kedah's first human rabies case since 1998. Source: the state Health Department, reported by Bernama. | The Star, 27 Sep 2026: https://www.thestar.com.my/news/nation/2026/09/27/man-dies-of-rabies-in-kedah039s-first-human-case-since-1998 | News |
| Rabies, Malaysia | "Malaysia recorded seven deaths from rabies as of Oct 12 this year, with six cases in Sarawak and one in Kedah." The Veterinary Services Department's senior director gave 97 cases and 90 deaths from 2017 to 12 Oct. No November count was found. | Bernama, 22 Oct 2026, "Seven Rabies Deaths Recorded In Malaysia This Year": https://bernama.com/en/news.php?id=2624136 | News |
| Northeast monsoon floods | A Health Ministry statement of Monday 9 Nov: the 2026/2027 northeast monsoon "began on Oct 27 and is expected to continue until March next year"; 85 emergency medical teams on standby; the measures aim to reduce "flood-related illnesses such as diarrhoea, food poisoning, leptospirosis and respiratory tract infections". On re-reading, **the article gives no public advice**, so the advice quoted in `RESEARCH-2026-11.md` is not used. On 18 Nov, 2,553 evacuees in Selangor, Perak, Negeri Sembilan, Melaka and Sarawak; none in KL (NST). The MOH media statement list for 2026 shows no monsoon statement. | The Star, 9 Nov 2026: https://www.thestar.com.my/news/nation/2026/11/09/floods-85-emergency-medical-teams-on-standby-says-health-ministry | News (MOH statement not found on moh.gov.my) |

### The guide's own pages each alert opens (checked in `src/parts/`)

- Dengue: `#dengue-cpg` (`data4.js`; its menu opens with triage by Appendix 7, `#dengue-cpg--ask`). The home route already opens `dengue-cpg`.
- Rabies: `#animal-bites` (`data2.js`, start `risk`), and `#calc-rabies` (the prescription).
- Floods: `#infection-alerts--lepto` (`data28.js`, circular Bil. 26/2021).

### Proposed data (engine.js, near `HOURS`, about line 1571)

The card is drawn like Open now (`renderNow`, `myNow`), and a line hides itself after `until` (Malaysia time). Every line is in the guide's own words, dated, with its source, and points only to the guide's page. It gives no clinical advice.

```js
/* Current alerts (25 Nov 2026, at the guide owner's go-ahead): dated public health alerts on the home page, each in the guide's
   own words with its date, its source and the guide's own page it opens. No clinical advice: the guide's page carries that.
   A line hides itself after `until` (Malaysia time, myNow). Check each source again before `until`; replace or remove. */
const ALERTS = [
  {k:'dengue', at:'#dengue-cpg', atl:'Dengue CPG, 4th edition',
   t:'Dengue is rising in Selangor: 34,820 cases in weeks 1 to 45 of 2026, 70.7% more than the same weeks of 2025, and 33 deaths against 6.',
   d:'Week 45, 8 to 14 Nov 2026', src:'JKN Selangor, situation report ME45/2026',
   href:'https://jknselangor.moh.gov.my/images/2026/denggi/ME45_26.pdf', until:'2026-12-06'},
  {k:'rabies', at:'#animal-bites', atl:'Animal bites and rabies',
   t:'Rabies: a man in Kedah died in September 2026 after a stray dog bite in August. He had been seen at a health facility and was not given post-exposure prophylaxis. Seven rabies deaths in Malaysia this year to 12 Oct, six in Sarawak.',
   d:'27 Sep and 22 Oct 2026', src:'Kedah State Health Department and the Veterinary Services Department, as reported by The Star and Bernama',
   href:'https://www.thestar.com.my/news/nation/2026/09/27/man-dies-of-rabies-in-kedah039s-first-human-case-since-1998', until:'2026-12-31'},
  {k:'flood', at:'#infection-alerts--lepto', atl:'Fever after a flood: leptospirosis',
   t:'Northeast monsoon, 27 Oct 2026 to March 2027: the Health Ministry names leptospirosis, diarrhoea, food poisoning and respiratory tract infections as flood-related illnesses.',
   d:'9 Nov 2026', src:'Health Ministry statement, as reported by The Star',
   href:'https://www.thestar.com.my/news/nation/2026/11/09/floods-85-emergency-medical-teams-on-standby-says-health-ministry', until:'2027-03-31'}
];
```

- Second source link for the rabies line, if the card allows two: `https://bernama.com/en/news.php?id=2624136` (Bernama, 22 Oct 2026, the national count).
- Optional WHO line. Recommended: leave it out, because its Malaysian figures are from August.

```js
  {k:'dengue-who', at:'#dengue-cpg', atl:'Dengue CPG, 4th edition',
   t:'Nationally, 63 752 dengue cases and 60 deaths in 2026 to week 34 (late August), more than in 2025 and the 5-year median.',
   d:'WHO update 757, 29 Oct 2026 (Malaysian data to 29 Aug)', src:'WHO Western Pacific, Dengue Situation Update 757',
   href:'https://cdn.who.int/media/docs/default-source/wpro---documents/emergency/surveillance/dengue/dengue_20261029.pdf', until:'2026-12-06'}
```

### Proposed markup (`head.html`, home, about line 2507, beside `#pickup` and `#pins`)

```html
        <section class="alerts" id="alerts" aria-label="Current alerts" hidden></section>
```

The id `alerts` is not a route name and not a reserved route. The card heading can read "Current alerts". Each row shows:
- the line;
- "Source: <src>, <d>" with the link (`target="_blank" rel="noopener noreferrer"`);
- a pill to `at` labelled `atl`.

Hide the section when no line is in date.

### How stale each line becomes

| Line | Goes stale | Remove or replace by |
|---|---|---|
| Dengue, Selangor | When JKN Selangor posts week 46 or 47 (`ME46_26.pdf`, `ME47_26.pdf`) | 6 Dec 2026 (three weeks after the report). Re-read weekly and update the figures and week. |
| Dengue, WHO (optional) | Already stale: its Malaysian data are from August | 6 Dec 2026, or leave out |
| Rabies | The national count is as of 12 Oct | 31 Dec 2026; replace the count if a newer one is published |
| Floods | The monsoon runs to March 2027; the statement is of 9 Nov | 31 Mar 2027; re-check monthly that MOH still names leptospirosis |

### What's new and search (optional)

- A What's new round could say "Current alerts on the home page: dated, each with its source, pointing to the guide's own page".
- Give no `at` field: no entry's content changes.

### Not verified

- The Kedah death and the national rabies count were read only in news reports (The Star, Bernama). No MOH or JKN Kedah statement was found on moh.gov.my. The Bernama article id=2612548 came back empty to WebFetch.
- The flood statement was read only in The Star. The MOH 2026 media statement list (moh.gov.my, read in the browser pane) shows no monsoon statement.
- No primary source exists for KL and Putrajaya dengue figures.

---

## Item 2. National Antimicrobial Guideline (NAG): links to the Dec 2025 and Jan 2026 updates

### Facts, as read on 25 Nov 2026

- **Site:** https://sites.google.com/moh.gov.my/nag (banner "LATEST UPDATES! (Jan '26)"). What's new: https://sites.google.com/moh.gov.my/nag/information/whats-new
- **Terms, read as page text on the home page (https://sites.google.com/moh.gov.my/nag/home) in the browser pane, and stricter than `RESEARCH-2026-11.md` recorded:**
  - "Copyright © 2024 Ministry of Health Malaysia".
  - "No part of this website, including text, images, and media, may be printed or distributed in any other form without the prior written permission of the copyright owner."
  - "Information adopted / adapted from this guideline should be reviewed regularly for continued updates."
  - So: **links and topic names only.** No regimen, dose or table goes into the guide.
- **Update dates are by month only.** Topic pages show "Page updated" with no date, and the What's new page names topics without saying what changed.
- **Topic pages.** Each topic is a numbered section on its chapter's page; the in-page anchors (`#h.…`) are generated, so link to the page.

| Topic (NAG's own words) | Updated (What's new) | Page and section | Guide node |
|---|---|---|---|
| Cellulitis | Dec 2025 (adult) | https://sites.google.com/moh.gov.my/nag/contents/section-a-adult/a14-skin-soft-tissue-infections, "2.5 Cellulitis" | `cellulitis--opd` (`data.js`; its gap says the ebook names no antibiotic) |
| Skin and Soft Tissue Infection (primary care) | Jan 2026 | https://sites.google.com/moh.gov.my/nag/contents/section-c-clinical-pathways-in-primary-care/c6-skin-and-soft-tissue-infection | `cellulitis--opd` |
| Bite-Related Infections | Dec 2025 (adult) | A14 page, "2.6 Bite-Related Infections" | `animal-bites--wound` and `animal-bites--abc` (`data2.js`) |
| Dog bites, Cat bites (paediatric) | Dec 2025 | https://sites.google.com/moh.gov.my/nag/contents/section-b-paediatrics/b11-skin-soft-tissue-infections | `animal-bites` (optional) |
| Community-acquired pneumonia; Inpatient - Severe CAP | Dec 2025; severe CAP Jan 2026 | https://sites.google.com/moh.gov.my/nag/contents/section-a-adult/a11-respiratory-infections, "1. Community Acquired Pneumonia (CAP)", "1.4 Inpatient - Severe CAP" | `pneumonia--opd` (`data.js`; its gap says the ebook names no outpatient antibiotic) |
| Acute Bronchitis and Pneumonia (primary care) | Oct 2025 and Jan 2026 | https://sites.google.com/moh.gov.my/nag/contents/section-c-clinical-pathways-in-primary-care/c1-acute-bronchitis-and-pneumonia | `pneumonia--opd` |
| Influenza | Dec 2025 | A11 page, "2.2 Influenza" | **No node in the guide.** `#antibiotics` note only. |
| Uncomplicated UTI, Complicated UTI, Urosepsis | Dec 2025 | https://sites.google.com/moh.gov.my/nag/contents/section-a-adult/a17-urinary-tract-infections, sections 2, 3 and 4 | **No UTI pathway.** Only `renal-colic--urgent` names "urosepsis or pyelonephritis", leading to `renal-colic--uro` (refer urology). `#antibiotics` note; a link on `renal-colic--uro` is optional. |
| Urinary Tract Infection in Non-Pregnancy (primary care) | Jan 2026 | https://sites.google.com/moh.gov.my/nag/contents/section-c-clinical-pathways-in-primary-care/c7-urinary-tract-infection-in-non-pregnancy | as above |
| Infectious diarrhoea | Dec 2025 | https://sites.google.com/moh.gov.my/nag/contents/section-a-adult/a4-gastrointestinal-infections, "4. Infectious Diarrhoea" | `gastroenteritis` (`data.js`, refs; its `opd` says "Empirical antibiotics are not recommended", the ebook's line, which stays) |
| Melioidosis | Dec 2025 and Jan 2026 | https://sites.google.com/moh.gov.my/nag/contents/section-a-adult/a16-tropical-infections, "7. Melioidosis" | **No node in the guide.** `#antibiotics` note only. |
| Leptospirosis (adult, not in the recent adult rounds; paediatric Dec 2025) | adult: not listed since Sep 2024 | A16 page, "5. Leptospirosis" | `infection-alerts--lepto` (`data28.js`), optional |
| Diabetic Foot Infections | Dec 2025 | https://sites.google.com/moh.gov.my/nag/contents/section-a-adult/a9-orthopaedic-infections, "2.1 Diabetic Foot Infections" | `diabetic-foot-cpg--mild`, `--mod`, `--sevx` (`data6.js`), optional |
| Appendix 1: vancomycin intermittent infusion dosing | Sep 2024 | https://sites.google.com/moh.gov.my/nag/appendices/appendix-1-clinical-pharmacokinetic-guide-aminoglycoside-vancomycin | `#antibiotics`: the ED guides (Feb 2024) carry vancomycin and gentamicin |
| "Frequency of ampicillin/sulbactam" | Jan 2025 | (What's new; read as page text: it is a separate line after "Acute pancreatitis - Frequency of ceftriaxone", so whether it belongs to that topic is unclear) | Left out of the note below |

### Proposed link lines

**Placement.** Earlier rounds did not edit the ebook's entries in `data.js`; they added to them from the round's own file (`data3.js`, `data26.js`). Do the same here: a new round file (say `data33.js`, first part) that appends these `links` to existing nodes. For example:
```js
const NAG = 'https://sites.google.com/moh.gov.my/nag/contents/';
const addLinks = (id, node, ...l) => { const n = P[id] && P[id].nodes[node]; if (n) n.links = [...(n.links || []), ...l]; };
addLinks('cellulitis', 'opd', [NAG + 'section-a-adult/a14-skin-soft-tissue-infections', '...']);
```
- `cellulitis`, `pneumonia`, `gastroenteritis`, `renal-colic` (`data.js`), `animal-bites`, `infection-alerts` (`data2.js`) and `lepto` (`data28.js`) are all first-part entries, so the round file can change them directly.
- `diabetic-foot-cpg` is in `data6.js`, a second-part file (`HEAVY`). Its links go either in `data6.js` itself or in `MORE_AFTER` from the round file; a first-part file cannot reach it at startup.
- All the nodes below are outcomes, whose `links` already open `https:` addresses in a new tab (`engine.js`, about line 2482).

The snippets below show each node's resulting `links` value.

**`data.js`, `cellulitis` node `opd`** (it has no `links` yet). Add after its `items`:
```js
links:[['https://sites.google.com/moh.gov.my/nag/contents/section-a-adult/a14-skin-soft-tissue-infections', 'National Antimicrobial Guideline: cellulitis (2.5), updated Dec 2025'], ['https://sites.google.com/moh.gov.my/nag/contents/section-c-clinical-pathways-in-primary-care/c6-skin-and-soft-tissue-infection', 'NAG primary care: skin and soft tissue infection, updated Jan 2026']],
```

**`data.js`, `pneumonia` node `opd`.** Add:
```js
links:[['https://sites.google.com/moh.gov.my/nag/contents/section-a-adult/a11-respiratory-infections', 'National Antimicrobial Guideline: CAP (section 1), updated Dec 2025 and Jan 2026'], ['https://sites.google.com/moh.gov.my/nag/contents/section-c-clinical-pathways-in-primary-care/c1-acute-bronchitis-and-pneumonia', 'NAG primary care: acute bronchitis and pneumonia']],
```

**`data.js`, `gastroenteritis`.** Leave its `refs` as they are: they are the ebook's own printed references (rule 5).
- The ebook's `opd` says "Empirical antibiotics are not recommended", so a link there could read as contradicting it.
- If a link is wanted, add it from the round file to `opd`, with a label that keeps the ebook's line first:
```js
links:[['https://sites.google.com/moh.gov.my/nag/contents/section-a-adult/a4-gastrointestinal-infections', 'NAG: infectious diarrhoea (section 4, updated Dec 2025), for reference; the ebook\'s line above stands']],
```
- Recommended: leave it out, and name the update only in the `#antibiotics` note.

**`data2.js`, `animal-bites` node `wound`** (no rabies risk; no `links` yet). Add:
```js
links:[['https://sites.google.com/moh.gov.my/nag/contents/section-a-adult/a14-skin-soft-tissue-infections', 'National Antimicrobial Guideline: bite-related infections (2.6), updated Dec 2025']],
```
and append the same pair to `abc.links` (after `'The protocol (PDF)'`).

Optional, for children:
```js
['https://sites.google.com/moh.gov.my/nag/contents/section-b-paediatrics/b11-skin-soft-tissue-infections', 'NAG paediatrics: dog and cat bites, updated Dec 2025']
```

**`data28.js`, `I.nodes.lepto`** (optional). Append to its `links`:
```js
['https://sites.google.com/moh.gov.my/nag/contents/section-a-adult/a16-tropical-infections', 'National Antimicrobial Guideline: leptospirosis (A16, 5)']
```

**`data6.js`, `diabetic-foot-cpg` nodes `mild`, `mod`, `sevx`** (optional; in that file itself, lines 682 to 705). All three already have `links`, so append this pair to each:
```js
['https://sites.google.com/moh.gov.my/nag/contents/section-a-adult/a9-orthopaedic-infections', 'National Antimicrobial Guideline: diabetic foot infections (2.1), updated Dec 2025']
```

**`data.js`, `renal-colic` node `uro`** (optional):
```js
links:[['https://sites.google.com/moh.gov.my/nag/contents/section-a-adult/a17-urinary-tract-infections', 'National Antimicrobial Guideline: UTI and urosepsis (sections 2 to 4), updated Dec 2025']],
```

### Proposed note for the antimicrobial page (`engine.js`, `renderAbStatic`, the `#absrc` `lk-note`, about line 4529)

Current sentence: `Whether the 2nd edition is still current is under Still to confirm.`

One-line version (recommended), added after that sentence:
```
These guides predate the National Antimicrobial Guideline's online updates of Dec 2025 and Jan 2026 (<a href="https://sites.google.com/moh.gov.my/nag/information/whats-new" target="_blank" rel="noopener noreferrer">its What's new page</a>).
```

Longer version, if the topics should be named:
```
Whether the 2nd edition is still current is under Still to confirm. These guides predate the National Antimicrobial Guideline's online updates (4th edition, 2024): among them vancomycin dosing (Appendix 1, Sep 2024), and cellulitis, bite-related infections, UTI and urosepsis, community-acquired pneumonia, influenza, infectious diarrhoea and melioidosis (Dec 2025 and Jan 2026). The NAG does not say what changed in each: see <a href="https://sites.google.com/moh.gov.my/nag/information/whats-new" target="_blank" rel="noopener noreferrer">its What's new page</a>.
```

Optional pill after the source cards:
```html
<a class="pill ext" href="https://sites.google.com/moh.gov.my/nag" target="_blank" rel="noopener noreferrer">National Antimicrobial Guideline (MOH, online)${svg('ext')}</a>
```

Proposed Still to confirm addition, extending OPEN-ITEMS line 24 and its `CONFIRM` counterpart (the one that asks whether the 2nd edition is current):
- **For `CONFIRM`:** `whether the ED antimicrobial guides (2nd edition, Feb 2024) have been checked against the National Antimicrobial Guideline's online updates since (vancomycin, Appendix 1, Sep 2024; cellulitis, bite-related infections, UTI and urosepsis, CAP, influenza, infectious diarrhoea and melioidosis, Dec 2025 and Jan 2026)`
- **For `OPEN-ITEMS.md`:** `- Have the ED antimicrobial guides (2nd edition, Feb 2024) been checked against the NAG's online updates since: vancomycin dosing (Appendix 1, Sep 2024), and cellulitis, bite-related infections, UTI and urosepsis, CAP, influenza, infectious diarrhoea and melioidosis (Dec 2025 and Jan 2026)? The NAG's What's new page names the topics but not what changed.`

### Not verified

- What changed in each topic. The NAG does not say, and no regimen was read, by design.
- The exact day of each update: the NAG gives month and year only.

### Flag for Krishna (should not go in, or should be looked at)

- `data16.js` lines 294 to 296 (the abdominal pain handbook) already quote NAG regimens. Examples: "Amoxicillin/clavulanate 1.2 g IV every 6 h"; "Piperacillin/tazobactam 4.5 g IV every 6-8 h"; "Ceftriaxone 2 g IV every 24 h PLUS metronidazole 500 mg IV every 8 h".
- The NAG's terms forbid printing or distributing its content in any other form without written permission. Those lines came in through Krishna's handbook, quoted as printed. Whether they may stay is his call; a link to the A4 page could replace them.
- `RESEARCH-2026-11.md` says the NAG has "no reproduction statement found". It has one, as quoted above; correct it there.

---

## Item 3. Mpox and Nipah

### 3a. Nipah: the national guideline of January 2026 against the guide

**The documents, read in full on moh.gov.my in the browser pane (primary):**
- **Circular:** "Surat Pekeliling Ketua Pengarah Kesihatan Bil.16/2026: Pelaksanaan Garis Panduan Pengurusan Jangkitan Virus Nipah (NiV) di Malaysia (Edisi Kemaskini Januari 2026)".
  - Ruj. KKM.600-29/4/44 Jld.2(4), dated **6 May 2026**. The day was read from the page image; the text layer is garbled.
  - Division: Bahagian Kawalan Penyakit. Posted on the circulars page 6 May 2026.
  - Page: https://www.moh.gov.my/en/publications-and-reports/circulars/list-of-circulars/surat-pekeliling-ketua-pengarah-kesihatan-bil-16-2026-pelaksanaan-garis-panduan-pengurusan-jangkitan-virus-nipah-niv-di-malaysia-edisi-kemaskini-januari-2026
  - It replaces the guideline of 2000 (1), and is in force from the date it was signed (5).
  - It is signed by YBhg. Datuk Dr. Mahathar, who also wrote the guideline's foreword (rule 3). **Cite both by number and date only. No page snapshots.**
- **Guideline:** "Guidelines on the Management of Nipah Virus (NiV) Infection in Malaysia", Disease Control Division, January 2026, 46 pages.
  - https://www.moh.gov.my/images/04-penerbitan/garis-panduan-kkm/Guidelines%20on%20the%20Management%20of%20Nipah%20Virus%20NiV%20Infection%20in%20Malaysia%20January%202026%20Disease%20Control%20Division%201.pdf
  - Malay version: https://www.moh.gov.my/images/04-penerbitan/garis-panduan-kkm/Garis%20Panduan%20Pengurusan%20Jangkitan%20Virus%20Nipah%20NiV%20di%20Malaysia%20Januari%202026%20BM%20Bahagian%20Kawalan%20Penyakit%201.pdf (not read).
- **Reuse:** no copyright or reproduction statement in the text of pages 2 to 46, or on the cover (page 1, an image, looked at). So the guide uses its own words, with section and page, and copies no table, flow chart or annex.

**Dating against the department's documents.** The guideline is dated January 2026. It was brought into force by the circular of 6 May 2026, after both documents the guide uses: the UKI memo HKL/UKI/98/242/1 (3 Mar 2026) and the department memo HKL/JK/98/123/8 (printed "28 Januari 2025", circulated January 2026). Whether either memo followed a draft or the January text is not shown.
- The circular's 2.2 says WHO reported two confirmed cases among health workers in West Bengal on 26 Jan 2026. That is evidence that the department memo, which names West Bengal, was written in 2026.
- This is evidence only. The memo's printed year stays under Still to confirm.

**What the guide says now.**
- `data2.js` `infection-alerts--nipah`: from the UKI memo of 3 Mar 2026.
- `data26.js`, the department memo's three items: the suspected case; PPE and RSI; where to place the patient; whom to tell.

**Differences that matter to a Green Zone MO** (national guideline, section and page):

| # | National guideline | The guide now | Kind |
|---|---|---|---|
| 1 | Suspected case (4.2, p11): fever (a history of fever or above 37.5 °C) **and** neurological symptoms (headache, dizziness, vomiting, confusion, seizures, paralysis, coma, behavioural change) **and/or** respiratory symptoms (cough, shortness of breath), **and**, within 14 days before onset, travel from an affected area (such as West Bengal, India) **or** exposure or an epidemiological link to a confirmed case. Exposure means bats, bat-contaminated food or pigs in affected areas, or date palm sap or palm tree products there. | Memo: fever with neurological or respiratory symptoms, and travel or contact within 14 days in a risk area (India: West Bengal, and Bangladesh). No temperature, no exposure list. | Adds detail. Bangladesh is the memo's, not the guideline's. |
| 2 | Triage checklist (Annex 4, p36): fever **and** at least one of persistent or worsening cough, shortness of breath, altered mental status, altered level of consciousness, seizures; **and** within 14 days travel to or residence in an affected area, **or** close contact with a confirmed **or suspected** case. Then isolate at once, mask the patient and refer at once to a Family Medicine Specialist or MO. | Not given. | New, for triage |
| 3 | Warning signs (7, Table 1, p13): prolonged fever, reduced level of consciousness, seizures, shortness of breath, SpO2 below 95%. | Not given. | New |
| 4 | Phases (7, Table 1, p13; Annex 1, p29). **Phase 1** (no imported cases reported by other countries): a suspected case with mild symptoms and no warning signs goes home with a Health Alert Card for 14 days of self-monitoring, and the PKD is notified. With warning signs: the designated referral hospital, isolation ward, samples, contact, droplet and airborne precautions, and notify the PKD. **Phase 2** (imported cases reported in other countries): home monitoring is no longer allowed, and every suspected case is admitted. | UKI memo: admit to a BMU bed for SW28, or as the ward ID advises; not admitted, discharge with MC or home isolation advice and inform the UKA. | Consistent in Phase 1; the guide has no phases |
| 5 | Designated hospitals for **confirmed** cases (Annex 5, p38): for Selangor and the Federal Territories of KL and Putrajaya, **Hospital Sungai Buloh and Hospital Tunku Azizah**. HKL is not on the list (pp37 to 41 read). | UKI memo: HKL ward SW28. | **Likely the difference that matters most.** Still to confirm: a suspected case may stay at HKL, while a confirmed case may move. |
| 6 | Probable case (4.3, p11): a suspected case who died untested, or a suspected case with negative or inconclusive results, still monitored for 14 days. Annex 1: monitored 14 days at the ward or facility, assessed again, and discharged if stable. | Not given. | New |
| 7 | Notify every suspected, probable or confirmed case within 24 hours to the nearest health office, by telephone or e-Notification, under Act 342 (5, p12). | UKI memo: the ED MO fills in the notification form. Department memo: tell the Shift Leader, Infection Control and the PKD/CPRC at once. | Consistent; adds the 24 hours and the route |
| 8 | Screening and history (9.1, p14): three-ply surgical mask, gown and gloves. In hospital (9.2, p14): an airborne infection isolation room; gown, gloves, N95 and eye protection; no visitors. Procedures and samples (9.3, p15): full PPE with N95. | Department memo: full PPE including N95 or PAPR; avoid nebulisation; intubate by RSI only, by experienced staff. | The memo is stricter at the front door; keep it as the department's route |
| 9 | Laboratory (6, p12): RT-PCR from CSF, throat swab, urine and blood early; IgM serology after the second week. Risk Group 4 pathogen (BSL-4); samples triple-packaged (9.3, p16). | UKI memo: samples after admission, except blood for resuscitation. Department memo: samples only on the CPRC's or PKD's instruction. | Consistent |
| 10 | Close contacts (10.1 and 10.2, pp16 to 17) include staff who handled the case or its specimens without complete and correct PPE. They are monitored for 14 days from the last exposure. | Not given. | New |
| 11 | Incubation 4 to 14 days in over 90%, up to 45 days. Coma within 5 to 7 days of onset. Case fatality 40% to 75% (3, p10). | UKI memo: "can kill within 24–48 hours of brain symptoms". | Different framing; both stand with their sources |

**Proposed text** (`data26.js`, after the `NV.items = [...]` block, about line 161). These are the guide's own words, labelled as the national guideline.

```js
  /* 25 Nov 2026: the national guideline of January 2026 (circular KPK Bil. 16/2026, 6 May 2026), in the guide's own words with
     section and page; it prints no reproduction terms, so nothing is quoted or copied as laid out. The HKL memos above stay the
     department's route (rule 6); where they differ is under Still to confirm. Cited by number and date only (rule 3). */
  const NG = ' (national guideline, Jan 2026, ';
  NV.items = [...NV.items,
    'National guideline: suspect it with a fever (history, or above 37.5 °C) and neurological symptoms (headache, dizziness, vomiting, confusion, seizures, paralysis, coma or a change in behaviour) or respiratory symptoms (cough, shortness of breath), and, in the 14 days before onset, travel from an affected area such as West Bengal, India, or exposure to a confirmed case, to bats, bat-contaminated food or pigs there, or to date palm sap there' + NG + '4.2, p11)',
    'Warning signs: prolonged fever, a reduced level of consciousness, seizures, shortness of breath, SpO2 below 95%' + NG + 'Table 1, p13)',
    'The guideline works in phases. While no other country reports imported cases (phase 1), a suspected case with mild symptoms and no warning signs may go home with a Health Alert Card for 14 days of self-monitoring, the PKD told; with warning signs, admit to an isolation ward. Once other countries report imported cases (phase 2), admit every suspected case. It does not say which phase applies now: ask the EP or Infection Control' + NG + 'Table 1, p13, and Annex 1, p29)',
    'A suspected case with a negative or inconclusive result is a probable case and is still monitored for 14 days' + NG + '4.3, p11)',
    'Notify every suspected, probable or confirmed case within 24 hours to the nearest health office, by phone or e-Notification' + NG + '5, p12)',
    'Staff who handled the patient or the samples without complete PPE are close contacts and are monitored for 14 days' + NG + '10.1 and 10.2, pp16 to 17)'];
  NV.gap += ' And the national Guidelines on the Management of Nipah Virus (NiV) Infection in Malaysia, Disease Control Division, January 2026, issued with circular KPK Bil. 16/2026 (KKM.600-29/4/44 Jld.2(4), 6 May 2026), in the guide\'s own words.';
  NV.links = [...(NV.links || []), ['https://www.moh.gov.my/en/publications-and-reports/circulars/list-of-circulars/surat-pekeliling-ketua-pengarah-kesihatan-bil-16-2026-pelaksanaan-garis-panduan-pengurusan-jangkitan-virus-nipah-niv-di-malaysia-edisi-kemaskini-januari-2026', 'National Nipah guideline, Jan 2026 (circular Bil. 16/2026)']];
```

- `refs` (`data2.js`, `infection-alerts`): add `'Guidelines on the Management of Nipah Virus (NiV) Infection in Malaysia, Disease Control Division, MOH, January 2026; circular KPK Bil. 16/2026, 6 May 2026'`.
- If the step grows too long, the six national lines can go in a `notes` tab instead.
- Leave out on purpose: the designated hospital names. They are a difference to confirm, not a route for the MO (next block).

**Proposed Still to confirm** (Nipah):
- **For `CONFIRM`:** `the national Nipah guideline (January 2026), brought into force by circular KPK Bil. 16/2026 of 6 May 2026, after the UKI memo (3 Mar 2026) and the department memo: its list of hospitals for confirmed cases (Annex 5) names Hospital Sungai Buloh and Hospital Tunku Azizah for Selangor, KL and Putrajaya, not HKL, while the UKI memo admits to SW28; and for screening and history-taking it asks staff for a three-ply surgical mask, gown and gloves (9.1), where the department memo asks for full PPE with N95 or PAPR. Which applies at HKL, and do the memos need updating?`
- **For `OPEN-ITEMS.md`:** `- The national Nipah guideline (January 2026) was brought into force by circular KPK Bil. 16/2026 (6 May 2026), after both HKL Nipah documents. Its Annex 5 (p38) names Hospital Sungai Buloh and Hospital Tunku Azizah for confirmed cases from Selangor, KL and Putrajaya; the UKI memo (3 Mar 2026) admits to SW28. Is a suspected case admitted at HKL and a confirmed case moved? Do the memos follow the guideline's phases (Table 1, p13) and warning signs, and which phase applies now? For screening and history-taking the guideline asks for a surgical mask, gown and gloves (9.1, p14); the department memo asks for N95 or PAPR. The circular's 2.2 (WHO's report of 26 Jan 2026 on West Bengal) is evidence that the department memo printed "28 Januari 2025" was written in 2026.`

### 3b. Mpox: the 3rd edition could not be read

**Facts (25 Nov 2026):**
- **The list (primary):** "Guidelines of MPOX Management Malaysia Third Edition", 18 Sep 2025, on https://mpox.moh.gov.my/ms/petugas-kesihatan/garis-panduan-mpox.
  - The same page lists "PROSES KERJA PEMBERIAN VAKSIN MPOX" (22 Sep 2025).
  - It also lists the outpatient flowchart with Annexes A to G (26 Sep 2024).
- **Every download on that page fails.** HTTP 500, "Class "Joomlatools\RSA\Crypt_RSA" not found", with and without `/file`, in WebFetch and in the browser pane. The web archive cannot be reached from here. **Not read.** No reproduction terms were seen (none on the list page).
- **What could be read:** the national outpatient flowchart, "Management of Outpatient Suspected Mpox Case in Healthcare Facilities".
  - Ministry of Health Malaysia, 21 September 2024 (BPKK). Read on the Malaysian Medical Association's copy: https://mma.org.my/web/wp-content/uploads/3_FLOW-CHART-ON-MANAGEMENT-OF-OUTPATIENT-SUSPECTED-MPOX-CASE-IN-HEALTHCARE-FACILITIES-edited-21092024_BPKK-26.9.2024.pdf
  - **This is the Sept 2024 flowchart, not the 3rd edition.**

**The guide now.** `data2.js` `infection-alerts--mpox` to `--mpno`, from the HKL Mpox clinical pathway, updated Sept 2024: Decon Room, no lesion sampling in the ED, Dermatology samples, MC for 7 days.

**Differences from the national flowchart of Sept 2024** (for Krishna's information only; the 3rd edition may have changed them):

| # | National flowchart, Sept 2024 | The guide (HKL pathway, Sept 2024) |
|---|---|---|
| 1 | Annex A triage screening, four items, any one: (1) contact of a probable or confirmed case in the 21 days before fever; (2) the same before rash, mucosal lesion or lymphadenopathy; (3) **an unexplained acute skin rash, mucosal lesion or lymphadenopathy, with no link required**; (4) **travel to endemic or affected countries** in the 21 days before onset. It refers to the guideline for full case definitions. | Three items. The rash item needs an epidemiological link or multiple casual sexual partners. No travel item. |
| 2 | Annex D admission: clinically ill; persistent fever beyond day 5; exertional dyspnoea or SpO2 below 95%; dehydration; secondary infection of skin lesions; reduced consciousness; blurring of vision; uncontrolled conditions; immunocompromised; pregnant; extremes of age (under 2 or over 60); not suitable for home surveillance. | Thirteen items. Has hypoxia, eye involvement and pregnancy. Lacks persistent fever beyond day 5, dehydration and age under 2 or over 60. |
| 3 | A government facility takes the RT-PCR specimen from the outpatient; the MC length follows the time to the result. | No lesion sampling in the ED; the Dermatology Clinic samples; MC for 7 days. A local workflow, which stays (rule 6). |
| 4 | Notify the PKD within 24 hours (both). PPE (Annex F): mask or N95, gown, double gloves, eye protection; N95 for aerosol-generating procedures or when varicella is not excluded. | Notification within 24 hours. No PPE line. |

**Proposed text.** No change to the criteria: the 3rd edition is unreadable, and the HKL pathway is the department's route. Two small additions only:

- `data2.js`, `infection-alerts` node `mpout`: add a link.
  ```js
  links:[['https://mpox.moh.gov.my/ms/petugas-kesihatan/garis-panduan-mpox', 'National mpox guidelines (MOH list; downloads failing on 25 Nov 2026)']],
  ```
  Or hold the link until the downloads work again. Every file on that page returned a server error today.
- `refs`: add `'Guidelines of MPOX Management Malaysia, Third Edition, MOH, 18 Sep 2025 (listed on mpox.moh.gov.my; not read: the file did not open on 25 Nov 2026)'`.

**Proposed Still to confirm** (mpox):
- **For `CONFIRM`:** `the HKL mpox pathway (Sept 2024) predates the national Guidelines of MPOX Management Malaysia, Third Edition (18 Sep 2025), which could not be opened on 25 Nov 2026 (its download fails on mpox.moh.gov.my). The national outpatient flowchart of Sept 2024 also screens an unexplained rash with no contact, and travel to affected countries, and admits for persistent fever beyond day 5, dehydration, and age under 2 or over 60, which the HKL pathway does not list. Has the department checked its pathway against the 3rd edition?`
- **For `OPEN-ITEMS.md`:** `- Mpox: the HKL pathway (Sept 2024) against the national 3rd edition (18 Sep 2025; not readable online on 25 Nov 2026, as mpox.moh.gov.my's download returns a server error). Against the national outpatient flowchart of 21 Sep 2024 (Annexes A and D), the HKL pathway's triage leaves out an unexplained rash without a contact, and travel to affected countries; and its admission list leaves out persistent fever beyond day 5, dehydration, and age under 2 or over 60. Ask the department for the 3rd edition.`

---

## Item 4. Small corrections

### 4a. Rhinosinusitis CPG: the year is 2016. No change.

**The CPG's own page.** Read from `C:\Users\user\Documents\Codex\2026-11-09\dedicated-loop-would\outputs\AMM Clinical Practice Guidelines\Otorhinolaryngology\2016 - Management of Rhinosinusitis in Adolescents and Adults [845].pdf` (pdftotext):
- The copyright page (MaHTAS; ISBN 978-967-0769-63-9) prints no year.
- Its Statement of Intent says: "These guidelines were issued in 2016 and will be reviewed in 2020 or sooner if new evidence becomes available."
- Its literature search ran to 28 Feb 2015.
- The CPG contains no "2017" anywhere (unfiltered search of the whole text). The Quick Reference prints no year.

The MOH list and MaHTAS's database label it 2017, probably the year it was listed. The guide's 2016 matches the document.

**Every place the guide shows 2016 for it** (leave as they are):
- `src/parts/data7.js`:
  - line 5 (header comment);
  - 457 (section comment);
  - 468 (`title`, `src`);
  - 469 (`lead`);
  - 472 (`menu.hint`);
  - 663 (`refs`: "...; 2016. ISBN 978-967-0769-...");
  - 670 and 671 (see-also labels on `referral-rules` and `outpatient-referral`);
  - 875 (the sore throat CPG's see-also label, "Rhinosinusitis CPG (2016)").
- `src/parts/engine.js`:
  - line 128 (What's new round);
  - 331 (`CONFIRM` item);
  - about 2916 (`CPG_SHELF` row, `y:'2016'`).
- `CLAUDE.md`: the content list and the third CPG round ("rhinosinusitis, 2016").

**Optional:** one sentence on the entry's `menu.hint` or in `CPG-REVIEW-RHINOSINUSITIS.md`: `The MOH and MaHTAS lists file it under 2017; the CPG itself says it was issued in 2016 (Statement of Intent).`

### 4b. The MOH abbreviation list: its issuing circular

**Facts (primary, read 25 Nov 2026 on moh.gov.my in the browser pane; the scanned pages read by eye):**
- **Circular page:** https://www.moh.gov.my/en/publications-and-reports/circulars/list-of-circulars/surat-pekeliling-kpk-bil-4-2024-senarai-kata-singkatan-abbreviation-di-fasiliti-kementerian-kesihatan-malaysia-kkm
  - "Circular No.: Bil.4/2024", "Circular Category: Surat Pekeliling Ketua Pengarah Kesihatan", posted 19 April 2024.
- **The PDF (66 pages):**
  - **Reference and date:** Ruj. KKM.100-1/6/1 Jld.2 (16), dated **19 April 2024**.
  - **Title:** "Surat Pekeliling Ketua Pengarah Kesihatan Bil.4/2024: Senarai Kata Singkatan (Abbreviation) di Fasiliti Kementerian Kesihatan Malaysia (KKM)".
  - **Issuer:** the Director General of Health. Addressed to all State and Federal Territory Health Directors and all hospital and special medical institution directors.
  - **Rule of use (1, Tujuan):** abbreviations in patients' medical records are not encouraged ("tidak digalakkan"); where they are needed, only abbreviations approved by the Ministry may be used ("hanya kata singkatan yang diluluskan oleh KKM sahaja boleh digunakan").
  - **Responsibility (5):** State Health Directors monitor its use; hospital and institution directors, district health officers and medical officers ensure it is followed.
  - **In force (6):** from the date of the letter. It cancels the list circulated on 21 March 2006, and a QR code to the list is attached.
  - **Pages 4 to 64:** the list "Senarai Kata Singkatan (Abbreviation) di Fasiliti Kementerian Kesihatan Malaysia Bil.1/2024", rows 1 to 2,665. It is the same as the guide's copy:
    - 2,665 rows;
    - row 1500 "MSO4 ... Per The Do-Not-Use List.";
    - TDS only as "Toilet, Debridement And Suturing" (row 2355);
    - BD only as "Binswanger's Disease" (row 225).
  - **No do-not-use list is attached.** Pages 1 to 3 are the letter, 65 is blank, and 66 carries only the reference.
- **Reuse:** no terms printed on the circular (a government circular). The list is already in the guide as printed (21 Nov 2026).
- The signatory, the then Director General, is not named here; nothing calls for his name.

So the circular closes the **issuer, reference, date and rule of use** half of the item. The **do-not-use list** half stays open.

**Proposed text, everywhere the "no issuer or date" wording lives:**

1. **`src/parts/engine.js`, `CONFIRM`, line 302, item (2).** Replace:
   `(2) the MOH abbreviation list Bil.1/2024 prints no issuer, date or rule for its use, and gives only the meanings it prints (TDS only as "Toilet, Debridement And Suturing", BD only as "Binswanger's Disease"): whether the department uses it, and where its do-not-use list (named in its row 1500) is;`

   with:
   `(2) the MOH abbreviation list Bil.1/2024 was issued with circular KPK Bil.4/2024 (19 Apr 2024), which allows only the Ministry's approved abbreviations in medical records, and gives only the meanings it prints (TDS only as "Toilet, Debridement And Suturing", BD only as "Binswanger's Disease"): where its do-not-use list (named in its row 1500, and not attached to the circular) is;`

2. **`OPEN-ITEMS.md`, line 9.** Replace with:
   `- The MOH abbreviation list Bil.1/2024 was issued with circular KPK Bil.4/2024 (KKM.100-1/6/1 Jld.2 (16), 19 Apr 2024), which closes its issuer, date and rule of use (abbreviations in medical records are discouraged; only the Ministry's approved ones may be used). Still open: it gives only the meanings it prints (TDS only as "Toilet, Debridement And Suturing", BD only as "Binswanger's Disease"), and the do-not-use list its row 1500 names is not attached to the circular. Where is it?`

   And add under Krishna's decisions or a closed-items note: `Closed 25 Nov 2026: the abbreviation list's issuer and date (circular KPK Bil.4/2024, 19 Apr 2024, read on moh.gov.my).`

3. **`src/parts/engine.js`, `#kbsrc` note, about line 1820** (line numbers have moved since the morning; find `$('#kbsrc').innerHTML`). Replace the first two sentences, `Source: “Senarai ... Bil.1/2024”, posted to the department's channel on 1 Aug 2024. The list prints no issuer, reference, date or signature, and no rule on how to use it.`, with:
   ```
   Source: “Senarai Kata Singkatan (Abbreviation) di Fasiliti Kementerian Kesihatan Malaysia Bil.1/2024”, issued with Surat Pekeliling Ketua Pengarah Kesihatan Bil.4/2024 (KKM.100-1/6/1 Jld.2 (16), 19 April 2024), and posted to the department's channel on 1 Aug 2024. The circular discourages abbreviations in patients' medical records and allows only those the Ministry has approved; the list is in force from the circular's date and replaces the list of 21 March 2006. <a href="https://www.moh.gov.my/en/publications-and-reports/circulars/list-of-circulars/surat-pekeliling-kpk-bil-4-2024-senarai-kata-singkatan-abbreviation-di-fasiliti-kementerian-kesihatan-malaysia-kkm" target="_blank" rel="noopener noreferrer">The circular on moh.gov.my</a>.
   ```
   Keep the rest: row 1500, "that do-not-use list is not in the file" (it is not in the circular either), TDS and BD, "Nothing you type is stored."

4. **`src/parts/engine.js`, the comment above `const KB`, about line 1772.** Change `It prints no issuer, reference, date or rule for its use.` to:
   `Issued with circular KPK Bil.4/2024 (19 Apr 2024), which allows only the Ministry's approved abbreviations in medical records (read 25 Nov 2026).`

4b. **`src/abbr.js`, line 14, `meta.note`** (written into `app/data/abbr.json` by `node abbr.js`). Change `'No issuer, reference, date, signature or reproduction wording is printed; the file was posted to the department channel on 1 Aug 2024.'` to:
   `'Issued with Surat Pekeliling Ketua Pengarah Kesihatan Bil.4/2024 (KKM.100-1/6/1 Jld.2 (16), 19 April 2024); the file was posted to the department channel on 1 Aug 2024.'`
   - Then run `node abbr.js`.
   - `KB.meta` is stored but its `note` is not shown in the page, so this only keeps the data honest.

4c. **Tests.** No test pins the old wording. The abbreviation check in `src/test.js` (about lines 1076 to 1083) tests 2,665 rows, the MSO4 line with "Row 1500 · p35", and TDS. Those stay true.
   - "p35" is the page in the guide's copy as posted.
   - In the circular's PDF the list starts on page 4, so page numbers there differ. The guide keeps its own copy's pages.

5. **Unchanged:** the What's new line (`engine.js` line 83), the hero label "Ministry of Health · Bil.1/2024", the tile and the search entry. `CLAUDE.md`'s line "it prints no issuer, date or rule for its use (under Still to confirm)" should be updated with the round.

---

## Should NOT go in

- **NAG content of any kind** beyond links and topic names. Its terms forbid printing or distributing it without written permission. Krishna should also look at the NAG regimens already in `data16.js` (lines 294 to 296).
- **Dengue figures for KL and Putrajaya:** no primary source.
- **WHO's national dengue figures** as if current: they are week 34 (August).
- **The flood "public advice" quote** in `RESEARCH-2026-11.md`: not in the article on re-reading.
- **Any change to the mpox criteria:** the 3rd edition is unreadable. The Sept 2024 national flowchart's differences go to Still to confirm only.
- **The national Nipah guideline's flow chart, tables and the designated hospital list** as copied content: it prints no reproduction terms. Also no page images: the circular and the foreword carry Datuk Dr. Mahathar's name and signature (rule 3).
- **Patient-level rabies details** beyond the reported facts. No PEP schedule: the guide's `animal-bites` carries the HKL protocol's.
- **A change of the rhinosinusitis year:** the CPG itself says 2016.
