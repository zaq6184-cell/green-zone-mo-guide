/* ================= 10 Nov 2026: Communication on shift =================
   Krishna asked for communication skills in the Green Zone, researched online and made interactive, with the ED quick card
   on aggressive patients that he supplied (sources/communication/). Every source, its licence, what each gave, what was left
   out and the points to confirm are in COMMUNICATION-REVIEW.md.

   - The ED quick card, "Aggressive Patient Communication: Emergency Department Quick Card": no issuer or date printed. A copy
     sits in the ED HKL triage course folder (uploaded 7 Jul 2026; anyone with the link can view); the PDF itself was made
     with ReportLab on 8 Feb 2026, author not given. Krishna supplied it for the app, so its phrases are used as printed, with
     its dashes and arrows changed to colons and straight quotes. Where it differs from a published source, the entry says so.
   - Department documents and the ebook, cited as they already are in the app: the ebook's acute behavioural disturbance
     pathway (p5-9), the hospital's emergency colour codes card, the Green Zone Warrior note, the memos of 1 Sep 2023 and
     30 Jun 2026, the referral rules, the interpreter memo of 9 Jul 2026, the Code Blue Manual 2022/2024,
     Million Ringgit Habits, the medicolegal tip and the EMACC SOP; and the HKL website's Corporate Communications Unit page.
   - Published guidance, in the guide's own words with short quotes only: Richmond et al. 2012 (Project BETA), NICE NG10,
     Baile et al. 2000 (SPIKES), the CSTS fact sheet and Hobgood et al. 2005 (deaths), the AHRQ toolkit's Tool 5 with the
     CHCS fact sheet and NHS Scotland's Right Decision Service (teach-back), Jones et al. 2019 (safety-netting), Marshall et
     al. 2009 and 2012 with the NHS SBAR tool (ISBAR), NSW Health PD2017_044 and NHS England 2018 (interpreters), Thompson et
     al. 1996 (waits) and Medical Protection's Malaysia factsheet (confidentiality).
   No dose or clinical criterion is given here: BARS, sedation and restraint stay on the ebook's pathway, which this links to.

   For the integrator (not active here):
   - add 'data10.js' to the parts lists in build.js and check-data.js, after data9.js: one more rules entry;
   - fig keys cmdanger, cmstance, cmdeesc, cmleap, cmsay, cmspikes, cmteach and cmisbar are new: until FIGS has them,
     figHTML draws nothing (COMMUNICATION-REVIEW.md, "Figures to draw");
   - no hero: a banner still and loop would be new Flow generation (standing rule 2);
   - docs links the quick card's copy in the triage course folder, as referral-rules does for the orthopaedic memo;
   - the see-also links at the end add this entry to four related entries, each guarded so this file also loads alone;
   - CONFIRM in engine.js: the open points are listed at the end of COMMUNICATION-REVIEW.md. */

P['communication'] = {
  title:'Communication on shift', src:'ED quick card and published guidance', grp:'rules', sub:'protocol', isnew:true,
  kw:'communication communicate talking angry anger aggressive aggression agitated violent violence shouting threat threatening fight weapon knife security guard polis bantuan auxiliary police code gray code grey code silver code purple 5441 de-escalation deescalation de-escalate calm down difficult patient difficult relative upset complaint complain aduan sispaa ukk waiting wait long wait queue delay apology apologise sorry leap relative relatives family next of kin waris keluarga bad news breaking bad news berita buruk spikes death died dead passed away meninggal kematian grief grieving bereaved bereavement griev_ing critically ill discharge explain explaining teach-back teachback teach back show-me safety net safety-net safety netting plain language understanding handover hand over pass over passover isbar sbar refer referral referring phone call on call declined rujukan interpreter translator language jurubahasa mandarin tamil nepali bangladeshi marah mengamuk ganas kasar komunikasi',
  lead:'What to do and say when a patient or relative is angry or aggressive, the wait brings a complaint, you have bad news to give, a discharge to explain, a patient to hand over or refer by phone, or no shared language. Safety first: if anyone is being hurt, step away and call Code Gray, ext 5441. From the ED quick card on aggressive patients and published guidance, each step with its source.',
  see:[['#behavioural-disturbance', 'Acute behavioural disturbance (ebook)'], ['#code-blue--codes', 'Emergency codes: Gray, Silver, Purple'], ['#interpreter', 'Medical interpreters'], ['#safe-practice--notes', 'Notes, consent and records'], ['#oscc', 'OSCC: abuse and domestic violence'], ['#gz-rules--wait', 'Patients who should not wait outside']],
  docs:[['https://drive.google.com/file/d/1vo5j_37iusBoMY36YD2prk-szKt1lpbs/view', 'The ED quick card (PDF, triage course folder)']],
  start:'sit',
  nodes:{
    sit:{q:'What is in front of you?', hint:'Safety first: if anyone is being hurt or threatened, choose the first option. Each line names its source in brackets; the Sources tab explains the short names.', opts:[
      ['An angry or aggressive patient or relative', 'agg'],
      ['A complaint about the wait', 'wait'],
      ['Bad news to give', 'bad'],
      ['Explaining a discharge', 'dc'],
      ['Handing over, or referring by phone', 'ho'],
      ['No shared language', 'lang']]},

    /* ---- Angry or aggressive: safety before conversation (the card), then Project BETA's domains ---- */
    agg:{q:'A weapon, or violence happening now?', hint:'Safety before conversation. Never manage escalating aggression alone (card).', opts:[
      ['Yes: a weapon, or someone is being hurt', 'help'],
      ['No', 'signs']]},
    help:{end:'refer', title:'Step away and call for help: ext 5441', items:[
      'Do not handle it alone: step back, keep your way out clear, and get others away from the person (card; BETA 3)',
      'Physical violence involving visitors or staff: Code Gray, ext 5441',
      'An armed threat or hostages: Code Silver, ext 5441',
      'The ebook, for a violent patient with a weapon: call Polis Bantuan for help and activate Code Grey',
      'Alert the team leader and the team (ebook, A: alert)',
      'Attempted suicide or self-harm: Code Purple, ext 5441',
      'Once it is safe, medical care goes on through the ebook\'s pathway: BARS, the choice of medication, and restraint only as a last resort (ebook p5–9; BETA 9; NICE 1.4.5)',
      'Afterwards: document, report the event, and debrief the staff, and the patient once calm (ebook D and E; BETA 10; NICE 1.4.55)'],
      links:[['#behavioural-disturbance--grey', 'Ebook: a weapon, Code Grey'], ['#code-blue--codes', 'The emergency colour codes'], ['#behavioural-disturbance', 'Behavioural disturbance pathway']],
      gap:'Sources: the card; the hospital\'s emergency colour codes card (10 Nov 2026; under Still to confirm); the ebook, p5–9, which says Code Grey where the codes card says Code Silver for a weapon (both ext 5441); BETA; NICE.'},
    signs:{q:'Any early danger signs?', hint:'From the card. Trust your instincts: call senior staff or security early.', check:'any', fig:'cmdanger', items:[
      'Clenched fists',
      'Pacing',
      'Invading personal space',
      'Verbal threats',
      'Throwing objects',
      'Sudden intense silence'],
      opts:[['Yes: any of these', 'backup'], ['None: angry, but no danger signs', 'safe']]},
    backup:{step:'Call for backup first', items:[
      'Call senior staff or security now, before you go on (card)',
      'Alert the team leader and the team (ebook, A: alert)',
      'One person does the talking; the others stay close but back (BETA 3; NICE 1.3.18)',
      'Threats turn physical: step away and call Code Gray, ext 5441 (colour codes card)'],
      next:'safe'},
    safe:{step:'Set up before you speak', fig:'cmstance', items:[
      'Keep your distance: at least 2 arm\'s lengths, more if you need it to feel safe (BETA 1; the card says 1–2)',
      'Stand near the exit: neither of you should feel the way out is blocked (card; BETA 1)',
      'Stand at an angle, not face to face; hands visible and open; posture relaxed (card; BETA 2)',
      'No finger pointing, no crossed arms, and do not stand over a seated patient (card)',
      'Do not stare: long, direct eye contact can feel like a challenge (BETA 2)',
      'Move others away, or talk somewhere quieter, but never end up alone with the person (NICE 1.3.14)'],
      next:'self'},
    self:{step:'Control yourself first', items:[
      'The calmest person controls the room (card)',
      'Speak slowly, low and clear, in simple sentences; do not match their volume (card)',
      'Do not argue or challenge; no sarcasm or threats (card)',
      'Repeat your message calmly: repetition is how de-escalation works (BETA 4)',
      'Notice your own anger or fear, and keep it out of your face, voice and posture (NICE 1.3.19)',
      'Too frightened or too angry to stay calm: ask a colleague to take over (BETA)'],
      next:'talk'},
    talk:{step:'Talk it down in three steps', fig:'cmdeesc', items:[
      'Introduce yourself by name and role, and say you are there to help (BETA 3)',
      '1. Acknowledge the emotion: "I can see you\'re upset." "I understand this is frustrating." (card)',
      'Ask what they want, listen without interrupting, and say back what you heard (BETA 5 and 6)',
      '2. Set respectful limits: "I want to help you, but I cannot do that if staff feel unsafe." Hurting anyone is not acceptable (card; BETA 8)',
      '3. Offer choices, not commands: "Would you prefer to sit here or move to the assessment room?" (card)',
      'Agree where you honestly can, or agree to disagree; never promise what you cannot give (BETA 7 and 9)',
      'It often works in under 5 minutes (BETA)'],
      next:'calm'},
    calm:{q:'Is it settling?', hint:'Aggression is usually driven by fear, pain, or loss of control, not you (card). It can also be illness: the ebook\'s organic causes include hypoxia, hypoglycaemia, intoxication, sepsis, seizures, head injury and poorly controlled pain.', opts:[
      ['Yes: calmer, and talking with you', 'cause'],
      ['No: louder, closer or threatening', 'help'],
      ['Calmer, but it may be illness or mental illness', 'med']]},
    cause:{step:'Find the problem, and solve it together', items:[
      'Ask what is wrong: often pain, fear, the wait, or not knowing what happens next (card)',
      '"Here\'s what I can do right now": say what you will do and when, then do it (card; BETA 9)',
      'A relative wants details: ask the patient\'s permission first (Medical Protection)',
      'A partner who answers for the patient, or injuries that do not fit the story: ask the patient in private, and do not confront the partner (OSCC)'],
      next:'done'},
    done:{end:'neutral', title:'Settled: write it down', items:[
      'Document what happened, what was said and what you agreed: if it is not written, it is not done (medicolegal tip)',
      'Threats to staff or harm to anyone: report the event (ebook E: event, incident reporting)',
      'Come back when you said you would (BETA 9)'],
      links:[['#safe-practice--notes', 'Notes, consent and records'], ['#oscc--dv', 'Domestic violence: ask in private']],
      gap:'Sources: the card; BETA; the ebook, p5–9; Medicolegal tip of the day (MO Drive, Jun 2026); Medical Protection (2021); MOH OSCC Policy 2015. How the ED reports violence against staff is still to confirm.'},
    med:{end:'neutral', title:'Look for the cause: illness or mental illness', items:[
      'Check for an organic cause first, on the ebook\'s pathway: "Evidence of organicity?"',
      'Score the agitation with BARS (ebook)',
      'Known psychiatric history, a relapse and no other medical problem: refer directly to the Psychiatry MO on call, who should see the patient within 45 minutes',
      'An aggressive patient with a psychiatric history only: the Yellow Zone PSY corner first'],
      links:[['#behavioural-disturbance', 'Behavioural disturbance pathway'], ['#calc-calm', 'BARS and RASS'], ['#referral-rules--psy', 'Psychiatry referral'], ['#yellow-zone--flow', 'Yellow Zone flow']],
      gap:'Sources: the ebook, Acute behavioural disturbance, p5–9; minutes of the ED, Psychiatry and Radiology meeting, 7 Feb 2023; Aliran pesakit di Zon Kuning, 13 Jul 2026 (MO Drive).'},

    /* ---- A complaint about the wait: the card's L.E.A.P., then the department's rules on who should not wait ---- */
    wait:{step:'Listen first, then say sorry for the wait', fig:'cmleap', items:[
      'L, listen: let them finish without interrupting (card)',
      'E, empathise: "I understand this is frustrating." (card)',
      'A, apologise for the situation: "I\'m sorry the wait has been long. Let me see what I can do to help." (card)',
      'P, problem-solve together: "Let\'s figure this out together." (card)',
      'Never: "You have to wait." or "It\'s not my fault." (card)'],
      next:'waitq'},
    waitq:{q:'Should this patient be waiting outside at all?', hint:'Do not keep these patients waiting outside the Green Zone (Green Zone Warrior note).', check:'any', items:[
      'Elderly',
      'NSTEMI or ACS',
      'An illness that needs stat medication and monitoring'],
      opts:[['Yes: one of these', 'move'], ['None: the wait itself is the problem', 'explain']]},
    move:{end:'observe', title:'Move the patient, then explain', items:[
      'Send them to the CCA, the rooms in front of R2, the corridor next to R2, or any other zone with space, and tell the designated MA and HO',
      'No space: speak to the EP in charge',
      'Tell the patient and family where they are going, and why (Thompson 1996)'],
      links:[['#gz-rules--wait', 'Patients who should not wait outside']],
      gap:'Source: "Green Zone Warrior" note, Green Zone folder, MO Drive. Thompson et al. (Ann Emerg Med 1996): the information given and the staff\'s manner predicted patient satisfaction; the minutes waited did not.'},
    explain:{step:'Explain where they are, and what comes next', items:[
      'Say what they are waiting for (the doctor, a result or a bed) and what happens next: information counts for more than the minutes waited (Thompson 1996)',
      'Give an honest estimate, not a promise you cannot keep, and say when you will come back (BETA 9)',
      '"Here\'s what I can do right now" (card)',
      'Several disciplines and no disposition after a long wait: inform the EP in charge (memo, 1 Sep 2023)',
      'The primary team is delayed: the EP may decide the admission within 4 hours (KKM MTS announcement, Jul 2026)'],
      next:'waitc'},
    waitc:{q:'How did it go?', opts:[
      ['Settled', 'waitok'],
      ['They want to make a formal complaint', 'complain'],
      ['Getting angrier, or threatening', 'agg']]},
    waitok:{end:'neutral', title:'Settled: keep your word', items:[
      'Come back when you said you would, even if only to say there is no news yet (BETA 9; Thompson 1996)',
      'Patients who feel ignored complain: explain, and write down what you explained (medicolegal tip)'],
      gap:'Sources: the card; BETA; Thompson et al. 1996; Medicolegal tip of the day (MO Drive, Jun 2026).'},
    complain:{end:'neutral', title:'A formal complaint: tell them how', items:[
      'Do not argue or take it personally: listen, and note their concern (card)',
      'HKL\'s Corporate Communications Unit (UKK) takes complaints by letter, email, phone, the complaint form or face to face, and records them in SISPAA, the Ministry of Health\'s public complaints system',
      'It sends an acknowledgement within 1 working day, and a reply to an ordinary complaint within 15 working days',
      'Contact: 03-2615 5555, or email pro.hkl@moh.gov.my',
      'Write in the notes what was said and what you did (medicolegal tip)'],
      links:[['#safe-practice--notes', 'Notes, consent and records']],
      gap:'Source: HKL website, Corporate Communications Unit page (updated 22 Apr 2024; read 10 Nov 2026). Who in the ED should be told of a complaint is still to confirm.'},

    /* ---- Bad news: SPIKES; families of a critically ill patient; a death ---- */
    bad:{q:'What is the news?', opts:[
      ['A serious result, a new diagnosis, or an admission they did not expect', 'spikes'],
      ['The patient is critically ill: moved to the Yellow or Red Zone', 'crit'],
      ['The patient has died', 'death']]},
    spikes:{step:'Give the news with SPIKES', fig:'cmspikes', items:[
      'S, setting: somewhere private (at least draw the curtain), sit down, hand over your phone, and let the patient choose who stays',
      'P, perception: before you tell, ask what they understand so far',
      'I, invitation: ask how much they want to know now',
      'K, knowledge: warn first ("I\'m afraid I have some difficult news"), then give it in small pieces, in plain words, checking as you go',
      'E, emotions: pause, name the feeling ("I can see this is a shock"), and allow silence',
      'S, strategy and summary: agree the next step, then sum up',
      'Source: SPIKES (Baile et al., 2000), in the guide\'s own words'],
      next:'badend'},
    badend:{end:'neutral', title:'After the news: the plan, in writing', items:[
      'Say what happens next and who will look after them (SPIKES)',
      'Never "there is nothing more we can do": there is always care to offer, such as pain relief and a plan (SPIKES)',
      'Check what they took in with teach-back (AHRQ Tool 5)',
      'Document what you said, who was there and what they understood (medicolegal tip)'],
      links:[['#communication--tb', 'Teach-back'], ['#safe-practice--notes', 'Notes, consent and records']],
      gap:'Sources: SPIKES (Baile et al., 2000), in the guide\'s own words; AHRQ Tool 5; Medicolegal tip of the day (MO Drive, Jun 2026).'},
    crit:{end:'neutral', title:'The family of a critically ill patient', items:[
      'Somewhere private, sitting down; ask them to choose one or two people to speak for the family (SPIKES)',
      'Ask what they know already (SPIKES)',
      'Give a short, honest update in plain words and small pieces, and check they follow (SPIKES)',
      'Respond to the feeling, and allow silence (SPIKES)',
      'Say what happens next, and when they will hear more (SPIKES)',
      'A patient who can decide chooses what is shared: ask first. If they cannot, share what the family needs to support their care (Medical Protection)',
      'Write down who you spoke to and what you said (medicolegal tip)'],
      gap:'Sources: SPIKES (Baile et al., 2000); Medical Protection (2021); Medicolegal tip of the day (MO Drive, Jun 2026). In the guide\'s own words.'},
    death:{step:'Telling a family that someone has died', items:[
      'A private room, not the corridor or waiting area; everyone sits down, you too (CSTS)',
      'Bring a nurse or another support person with you (CSTS; Hobgood 2005)',
      'Introduce yourself, use the patient\'s name, and ask what they know so far (CSTS; Hobgood 2005)',
      'Warn that bad news is coming, then say briefly what happened, in plain words (CSTS)',
      'Say clearly that the person has died: "died" or "dead", not "passed away" (CSTS; Hobgood 2005)',
      'Then stop: allow silence and grief, and do not become defensive (CSTS)',
      'Answer questions honestly; if you do not know, say so (CSTS)'],
      next:'after'},
    after:{end:'neutral', title:'After the news', items:[
      'Offer time with the body, and prepare them for what they will see (CSTS)',
      'Leave forms and belongings for later, unless they ask (CSTS)',
      'Name a contact person before they leave (CSTS)',
      'A death at the scene after a Code Blue in the hospital grounds: the primary team declares it, and the body goes directly to Forensic, ext 6695 (Code Blue Manual)',
      'Document who was told, by whom and when (medicolegal tip)'],
      links:[['#code-blue--death', 'Code Blue: death at the scene']],
      gap:'Sources: CSTS fact sheet (undated); Hobgood et al. 2005; Code Blue Manual 2022/2024, 5.4f and Appendix v. In the guide\'s own words. The ED\'s own steps after a death in the department are not in these sources: still to confirm.'},

    /* ---- Explaining a discharge: plain words, teach-back, safety-net ---- */
    dc:{step:'Explain it in plain words', items:[
      'Sit down, slow down, and keep to a few key points (CHCS)',
      'Be exact, not vague: amounts, times and days, rather than words like "adequate" (CHCS)',
      'Everyday words: no jargon or abbreviations (CHCS)',
      'Use the pathway\'s Discharge advice tab: it can be copied, and some read aloud in English and Bahasa Melayu',
      'No shared language: get the medical interpreter, line 0 (memo, 9 Jul 2026)'],
      next:'tb'},
    tb:{step:'Teach-back: ask them to say it back', fig:'cmteach', items:[
      'Make it your check, not theirs: "I want to make sure I explained this clearly. Tell me what you will do at home." (adapted from AHRQ Tool 5)',
      'Do not ask "Do you understand?": people nod or say yes either way (Right Decision Service)',
      'Chunk and check: one or two points at a time, each checked before the next (AHRQ Tool 5)',
      'Wrong, or your words parroted back: explain it another way, and ask again (AHRQ Tool 5)',
      'An inhaler or a new medicine: ask them to show you (AHRQ Tool 5, show-me)'],
      next:'sn'},
    sn:{end:'discharge', title:'Safety-net, and write it down', items:[
      'What to watch for: the warning signs that mean come back at once (Jones 2019)',
      'How long it should take to get better, so they know when it is not going to plan (Jones 2019)',
      'Where and when to come back: the ED, the Klinik Kesihatan, or the date, time and place of an EMACC appointment, told to the patient and next of kin (Jones 2019; EMACC SOP)',
      'Give it in writing as well (Jones 2019)',
      'The department\'s line: "Return immediately if pain or symptoms worsen" (Million Ringgit Habits)',
      'Document the specific advice given, not just "advice given" (Jones 2019; Million Ringgit Habits)'],
      links:[['#tools', 'Discharge safety check'], ['#safe-practice--dc', 'Before any discharge'], ['#emacc', 'EMACC follow-up']],
      gap:'Sources: AHRQ Tool 5; CHCS (2024); Right Decision Service (NHS Scotland); Jones et al. 2019, in the guide\'s own words; Million Ringgit Habits (ETD HKL); EMACC SOP, 1 Feb 2018.'},

    /* ---- Handing over, and referring by phone: ISBAR, and the department's rules ---- */
    ho:{q:'Handing over, or referring?', opts:[
      ['Handing over to the next MO, or to the CCA', 'hand'],
      ['Referring to a team by phone', 'prep']]},
    hand:{step:'Hand over in ISBAR', fig:'cmisbar', items:[
      'I, identify: you, and the patient (name, and where they are)',
      'S, situation: why they are here, and what is pending',
      'B, background: the history, results and treatment so far',
      'A, assessment: what you think is going on, and how sick they are',
      'R, request: what the next MO must do, and by when',
      'Ask them to repeat the key points back (NHS SBAR tool)',
      'Source: ISBAR (Marshall et al., 2009)'],
      next:'handend'},
    handend:{end:'neutral', title:'Pass it over in writing too', items:[
      'Document who you passed the patient to, and what is pending',
      'Patients planned for admission and still waiting at the end of your shift must be passed over to the next MO',
      'CCA: the MO who sent the patient stays responsible, and the BHT goes with the patient',
      'IV antibiotics on a CCA chair: send the prescription, a wristband and complete records, and hand over to the HO in the CCA (memo, 30 Jun 2026)'],
      links:[['#gz-rules--wait', 'Patients who should not wait outside'], ['#gz-rules--ivab', 'IV antibiotics when no bed is free']],
      gap:'Sources: "Green Zone Warrior" note (MO Drive); IV antibiotic memo, 30 Jun 2026; ISBAR from Marshall et al. 2009; the read-back from the NHS SBAR tool.'},
    prep:{step:'Before you pick up the phone', items:[
      'Have the notes, vital signs and results in front of you, and know your question: what do you want the team to do?',
      'The usual faults in referral calls: no preparation, too much detail, no clear message, no clear question (Marshall 2012)',
      'Orthopaedics: a formal referral, never "opinion only" (memo, 17 May 2024)',
      'Psychiatry: an MO, not only an HO, examines the patient before the referral (meeting of 7 Feb 2023)',
      'General Medicine: no ward admission without referring to the Medical specialist or MO on call (memo, Jan 2026)'],
      next:'isbar'},
    isbar:{step:'Say it in ISBAR', fig:'cmisbar', items:[
      'I, identify: your name, role and zone; the patient\'s name and where they are',
      'S, situation: why you are calling, in one sentence',
      'B, background: the history, findings and results that matter',
      'A, assessment: what you think the problem is; or that you are not sure what is wrong, but worried (NHS SBAR tool)',
      'R, request: what you need and by when: a review, an admission or advice (Marshall 2012: on the phone, R is the request)',
      'Read back the plan they give you (NHS SBAR tool)'],
      next:'resp'},
    resp:{q:'What did the team say?', opts:[
      ['Accepted, or gave advice', 'refok'],
      ['Declined or delayed', 'refno']]},
    refok:{end:'neutral', title:'Write it down', items:[
      'Write the name of the doctor you spoke to, the time and the plan agreed (medicolegal tip: record timings)',
      'Tell the patient what happens next: being kept informed matters to patients in the ED (Thompson 1996)'],
      links:[['#referral-rules', 'Referral rules']],
      gap:'Sources: Medicolegal tip of the day (MO Drive, Jun 2026); Thompson et al. 1996.'},
    refno:{end:'neutral', title:'Declined or delayed: stay polite, then escalate', items:[
      'Stay calm and courteous; restate the request, and the criteria the case meets (ISBAR)',
      'Orthopaedics: if the case meets Lampiran 1, show the memo: every referral to the orthopaedic MO on call is a formal referral',
      'Psychiatry cannot decline or delay a referral because their shift is ending (meeting of 7 Feb 2023)',
      'Several disciplines and no disposition after a long wait: inform the EP in charge (memo, 1 Sep 2023)',
      'The primary team is delayed: the EP may decide the admission within 4 hours (KKM MTS announcement, Jul 2026)',
      'Document who declined, when, and the reason given (medicolegal tip)'],
      links:[['#referral-rules--orthoc', 'Orthopaedic referral memo'], ['#referral-rules--psy', 'Psychiatry referral'], ['#gz-rules--ep4', 'The primary team is delayed']],
      gap:'Sources: orthopaedic referral memo HKL/JK/98/188/3(8)24, 17 May 2024, and the guide owner\'s note of 10 Nov 2026; minutes of 7 Feb 2023; memo HKL/JK/98/188/3(17)23, 1 Sep 2023; KKM MTS announcement, Jul 2026.'},

    /* ---- No shared language: the hospital's interpreters first; outside advice where the memo is silent ---- */
    lang:{q:'Which language?', hint:'The hospital\'s medical interpreters cover Mandarin, Tamil, Nepali and Bangladeshi, through the operator on line 0 (memo, 9 Jul 2026).', opts:[
      ['Mandarin, Tamil, Nepali or Bangladeshi', 'interp'],
      ['Another language', 'other'],
      ['An emergency: no time to wait for an interpreter', 'emerg']]},
    interp:{step:'Call line 0, then talk through the interpreter', items:[
      'Call line 0 (IbuSawat HKL): the telephonist puts you through to the medical interpreter, who can come in person (memo, 9 Jul 2026)',
      'Brief the interpreter first: what the talk is for, and any risk (NSW 3.6)',
      'Speak to the patient, not the interpreter: "Do you…", not "Does she…" (NSW)',
      'Short sentences, frequent pauses, plain words, no jargon or slang (NSW)',
      'Tell the patient the interpreter keeps what is said confidential (NSW)',
      'Check understanding with teach-back, and ask for any other questions before the interpreter goes (NSW; AHRQ Tool 5)'],
      next:'langend'},
    langend:{end:'neutral', title:'Record the interpreter in the notes', items:[
      'Write that an interpreter was used, for which language, and their name (NSW 3.6.1)',
      'Record the patient\'s language needs, so the next team can arrange one too (NSW 2.3)'],
      links:[['#interpreter', 'Medical interpreters']],
      gap:'Sources: memo HKL/UEML/98/133, 9 Jul 2026 (the service); NSW Health PD2017_044, 2.3, 3.6, 3.6.1 and Appendix 5 (outside advice, in the guide\'s own words).'},
    other:{end:'neutral', title:'Another language: not covered by the memo', items:[
      'The memo covers Mandarin, Tamil, Nepali and Bangladeshi only, and does not say what to do for other languages',
      'Questions about the service: the Medical Officer of the Quality and Medicolegal Subunit (memo)',
      'Outside advice: family and friends are untrained interpreters and a risk to the patient (NSW 2.2); never use a child, except for immediate and necessary treatment when no one else can help (NHS England 2018; NSW 3.8)'],
      links:[['#interpreter', 'Medical interpreters']],
      gap:'Sources: memo HKL/UEML/98/133, 9 Jul 2026; NSW Health PD2017_044 (2017) and NHS England\'s interpreting guidance (2018), as outside advice. What the ED does for other languages, and whether bilingual staff may interpret, is still to confirm.'},
    emerg:{end:'neutral', title:'An emergency with no interpreter in time', items:[
      'Treat first. For the information you need now, ask in this order: bilingual staff, then an adult relative or friend; a child only if no one else can (NSW 3.8)',
      'Write in the notes that no interpreter could be reached in time, and why (NSW 3.8)',
      'Get a medical interpreter as soon as you can, to check what was understood (NSW 3.8; line 0)'],
      links:[['#interpreter', 'Medical interpreters']],
      gap:'Source: NSW Health Policy Directive PD2017_044, 3.8 (Australia; in the guide\'s own words). The HKL memo does not cover emergencies: still to confirm.'}
  },
  notesFoot:'From the ED quick card on aggressive patients (no issuer or date printed; its phrases as printed, with dashes and arrows changed to colons), the department documents and the ebook as each note names them, and published guidance in the guide\'s own words, with short quotes only.',
  notes:[
    {l:'Phrases', notes:[
      {h:'Never say these', src:'The ED quick card, as printed', fig:'cmsay', items:['"Calm down!"', '"It\'s not my fault."', '"You have to wait."', '"If you don\'t behave…"']},
      {h:'Use these instead', src:'The ED quick card, as printed', items:['"I want to help you."', '"Let\'s figure this out together."', '"Your safety is important to us."', '"Here\'s what I can do right now."']},
      {h:'The three steps and the wait, in words', src:'The ED quick card, as printed', items:['Acknowledge emotion: "I can see you\'re upset." "I understand this is frustrating."', 'Set respectful limits: "I want to help you, but I cannot do that if staff feel unsafe."', 'Offer choices, instead of commands: "Would you prefer to sit here or move to the assessment room?"', 'The wait: "I\'m sorry the wait has been long. Let me see what I can do to help."']},
      {h:'In Bahasa Melayu', src:'The guide\'s translation of the card\'s phrases', items:['"Saya nampak encik/puan sedang marah." "Saya faham keadaan ini memang mengecewakan."', '"Saya mahu membantu encik/puan, tetapi saya tidak dapat berbuat demikian jika kakitangan berasa tidak selamat."', '"Encik/puan mahu duduk di sini, atau pergi ke bilik pemeriksaan?"', '"Saya minta maaf kerana encik/puan sudah lama menunggu. Biar saya lihat apa yang boleh saya bantu."', '"Saya mahu membantu encik/puan." "Mari kita cari jalan penyelesaiannya bersama-sama."', '"Keselamatan encik/puan penting bagi kami." "Ini yang boleh saya buat sekarang."']},
      {h:'Bad news and checking understanding', src:'In the guide\'s own words, from SPIKES, AHRQ Tool 5 and the Right Decision Service', items:['Before you tell, ask: "What have you been told so far?"', 'Warn first: "I\'m afraid I have some difficult news."', 'Name the feeling: "I can see this is a shock."', 'Check your own explanation: "I want to make sure I explained this clearly. Tell me what you will do at home."', 'Not "Do you understand?": a yes or a nod proves nothing']}
    ]},
    {l:'De-escalation', notes:[
      {h:'The card: safety and self-control', src:'The ED quick card, as printed', fig:'cmstance', items:['Keep 1–2 arm lengths distance · Stand near an exit · Maintain clear escape path · Call for backup early if uneasy', 'Never manage escalating aggression alone.', 'The calmest person controls the room.', 'Speak slowly, low, and clear · Use simple sentences · Do not argue or challenge · Avoid sarcasm or threats · Do not match the patient\'s volume', 'Hands visible · Relaxed posture · Stand at an angle · Respect personal space', 'No finger pointing · No crossed arms · Don\'t hover over seated patients']},
      {h:'The card: early danger signs', src:'The ED quick card, as printed', fig:'cmdanger', items:['Clenched fists · Pacing · Invading personal space · Verbal threats · Throwing objects · Sudden intense silence', 'Trust your instincts: call senior staff or security early.', 'Aggression is usually driven by fear, pain, or loss of control: not you.', 'Calm = Authority · Firm = Safe · Respect = De-escalation']},
      {h:'The ten domains of de-escalation', src:'Project BETA (Richmond et al., 2012), in the guide\'s own words. The ebook\'s behavioural disturbance pathway lists the same ten', items:[
        '1. Respect personal space: at least 2 arm\'s lengths, and a way out for both of you',
        '2. Do not be provocative: hands visible, stand at an angle; do not stare, fold your arms or turn away',
        '3. Establish verbal contact: one person talks; others move bystanders away',
        '4. Be concise, and repeat',
        '5. Identify wants and feelings',
        '6. Listen closely, and say back what you heard',
        '7. Agree, or agree to disagree',
        '8. Set clear limits, with respect',
        '9. Offer choices and optimism; never promise what you cannot give; restraint or injection only as a last resort',
        '10. Debrief the patient and the staff after any force or restraint',
        'It often works in under 5 minutes']},
      {h:'Who to call', src:'The hospital\'s emergency colour codes card (shared 10 Nov 2026; no issuer or date printed); the ebook, p5–9', items:['Code Gray: physical violence involving visitors or staff, ext 5441', 'Code Silver: an armed threat or hostages, ext 5441', 'Code Purple: attempted suicide or self-harm, ext 5441', 'The ebook: a violent patient with a weapon, call Polis Bantuan for help and activate Code Grey']}
    ]},
    {l:'Bad news', notes:[
      {h:'SPIKES: six steps', src:'Baile et al., The Oncologist 2000 (© AlphaMed Press), in the guide\'s own words', fig:'cmspikes', items:[
        'S, setting up: plan it; privacy (at least the curtain); sit down; the patient chooses who is present; silence your phone',
        'P, perception: before you tell, ask what they know, and correct misunderstandings',
        'I, invitation: ask how much detail they want; if not now, offer later, or a relative',
        'K, knowledge: warn first; plain words; small pieces; check understanding often',
        'E, emotions: notice and name the emotion and its cause; give time; respond with empathy',
        'S, strategy and summary: check they are ready, agree the plan together, sum up; never "there is nothing more we can do"']},
      {h:'A death: what helps families', src:'Center for the Study of Traumatic Stress, fact sheet; Hobgood et al. 2005 (GRIEV_ING). In the guide\'s own words', items:[
        'Say "died" or "dead": words such as "passed away" confuse',
        'Bring a support person: a nurse, a social worker or a chaplain if available',
        'Respect cultural and religious norms',
        'GRIEV_ING, a mnemonic for these steps, improved residents\' confidence and skill in a 2005 study']},
      {h:'Relatives and confidentiality', src:'Medical Protection, Confidentiality: general principles (Malaysia factsheet, 22 Aug 2021), in the guide\'s own words', items:[
        'Sharing within the treating team needs only implied consent',
        'Telling anyone else, relatives included, needs the patient\'s express consent, unless the law or the public interest requires it',
        'A patient who lacks capacity: weigh their earlier wishes and the views of people close to them, and share what is needed for their care',
        'Relatives have no general right to see the records']}
    ]},
    {l:'Discharge talk', notes:[
      {h:'Teach-back', src:'AHRQ Health Literacy Universal Precautions Toolkit, 2nd edition, Tool 5, in the guide\'s own words', fig:'cmteach', items:[
        'It tests how well you explained, not the patient',
        'Plan how you will ask, for example: tell me the three things you will do at home',
        'Chunk and check through the talk, not only at the end; if it comes back wrong, explain it another way and check again',
        'Give a handout too, but ask them to explain in their own words, not read it out']},
      {h:'Plain words and safety-netting', src:'Center for Health Care Strategies, fact sheet, Mar 2024 (from the AHRQ toolkit); Jones et al., Br J Gen Pract 2019. In the guide\'s own words', items:['Speak more slowly than usual; a few key, specific points; familiar words, no acronyms (CHCS)', 'Be exact rather than vague: the fact sheet\'s example is "seven to eight hours of sleep", not "adequate" sleep (CHCS)', 'Safety-net: what to watch for, how long it should take, how, where and when to come back, and who arranges any follow-up (Jones 2019)', 'Follow up results and referrals: no news is not good news (Jones 2019)']}
    ]},
    {l:'Handover', notes:[
      {h:'ISBAR: the evidence', src:'Marshall, Harrison and Flanagan, Qual Saf Health Care 2009; Marshall et al., BMC Med Educ 2012 (CC BY 2.0)', fig:'cmisbar', items:['ISBAR splits "identify" out of SBAR\'s situation, after poor phone calls sent teams to the wrong patient, and even the wrong hospital', 'On a phone referral, R is the request', 'In a randomised trial, 40 minutes of ISBAR teaching made students\' referral calls fuller and clearer; the clarity held at six months']},
      {h:'SBAR prompts for a call', src:'NHS Improvement (ACT Academy), SBAR communication tool (now listed as retired), in the guide\'s own words', items:['Situation: who you are, the patient, and your concern, with the vital signs', 'Background: why they came, the history that matters, the last observations, and what is normal for them', 'Assessment: what you think the problem is and what you have done; or that you do not know, but you are worried', 'Recommendation: what you need and how soon; ask what to do meanwhile', 'Ask the receiver to repeat the key points; repeat back any advice given on the phone']}
    ]},
    {l:'Sources', notes:[
      {h:'Short names used in the steps', src:'Full citations in the References tab', items:[
        'Card: the ED quick card on aggressive patients (no issuer or date printed; in the ED HKL triage course folder since 7 Jul 2026)',
        'BETA: Project BETA, the consensus on verbal de-escalation (Richmond et al., 2012); the number is the domain',
        'NICE: NICE guideline NG10 (2015; an update is in development); the number is the recommendation',
        'SPIKES: Baile et al., 2000. CSTS: the Center for the Study of Traumatic Stress. Hobgood 2005: the GRIEV_ING study',
        'AHRQ Tool 5: the AHRQ health literacy toolkit, teach-back. CHCS: its 2024 fact sheet. Right Decision Service: NHS Scotland',
        'Jones 2019: safety-netting. Marshall: the ISBAR studies. NHS SBAR tool: NHS Improvement. NSW: NSW Health PD2017_044',
        'Thompson 1996: waiting and satisfaction in the ED. Medical Protection: its Malaysia factsheet on confidentiality',
        'Department sources (the ebook, the colour codes card, memos and notes): named where used']},
      {h:'Where the sources differ', src:'The guide\'s comparison', items:[
        'Distance: the card says 1–2 arm lengths; Project BETA says at least 2 arm\'s lengths. The steps use at least 2',
        'L.E.A.P.: the card\'s letters are listen, empathise, apologise, problem-solve. The published LEAP® of Dr Xavier Amador (the LEAP Institute) is listen, empathise, agree, partner: a method for people who do not accept that they are ill',
        'The three steps: the card\'s are acknowledge, set limits, offer choices; Project BETA\'s are engage the patient, build a working relationship, then de-escalate',
        'A weapon: the colour codes card calls an armed threat Code Silver; the ebook says Polis Bantuan and Code Grey. Both are ext 5441',
        'A psychiatric review: HKL\'s Psychiatry MO on call within 45 minutes (7 Feb 2023); NICE NG10 asks for an assessment within 1 hour. The steps use HKL\'s']}
    ]}
  ],
  refs:[
    'Aggressive Patient Communication: Emergency Department Quick Card (no issuer or date printed). ED HKL triage course folder, 7 Jul 2026; shared by the guide owner on 10 Nov 2026.',
    'HKL Emergency Color Codes: Rapid Response Guide (a card; no issuer or date printed), shared 10 Nov 2026.',
    'The Clinical Pathway in Emergency for Medical Officer, ETD HKL (2025): Acute behavioural disturbance, p5–9.',
    'Department documents: Green Zone Warrior note; memo of 1 Sep 2023; IV antibiotic memo, 30 Jun 2026; KKM MTS announcement, Jul 2026; orthopaedic referral memo, 17 May 2024; minutes of 7 Feb 2023; General Medicine memo, Jan 2026; Yellow Zone flow, 13 Jul 2026; interpreter memo HKL/UEML/98/133, 9 Jul 2026; Code Blue Manual 2022/2024; Million Ringgit Habits; Medicolegal tip of the day; EMACC SOP, 2018; MOH OSCC Policy, 2015.',
    'Hospital Kuala Lumpur, Corporate Communications Unit (UKK), hkl.moh.gov.my, updated 22 Apr 2024, read 10 Nov 2026.',
    'Richmond JS, et al. Verbal de-escalation of the agitated patient: consensus statement of the American Association for Emergency Psychiatry Project BETA De-escalation Workgroup. West J Emerg Med 2012;13(1):17–25.',
    'NICE guideline NG10. Violence and aggression: short-term management in mental health, health and community settings. 2015 (an update is in development).',
    'Baile WF, et al. SPIKES: a six-step protocol for delivering bad news. The Oncologist 2000;5(4):302–311.',
    'Center for the Study of Traumatic Stress, Uniformed Services University. Notifying family members after unexpected deaths (fact sheet, undated).',
    'Hobgood C, et al. The educational intervention "GRIEV_ING" improves the death notification skills of residents. Acad Emerg Med 2005;12(4):296–301.',
    'AHRQ Health Literacy Universal Precautions Toolkit, 2nd edition, Tool 5 (a 3rd edition followed in 2024). Center for Health Care Strategies, Improving verbal communication to promote patient health literacy (Mar 2024). Right Decision Service (NHS Scotland): Chunk and check.',
    'Jones D, et al. Safety netting for primary care: evidence from a literature review. Br J Gen Pract 2019;69(678):e70–e79.',
    'Marshall S, et al. Qual Saf Health Care 2009;18(2):137–140, and BMC Med Educ 2012;12:38 (ISBAR). NHS Improvement, ACT Academy: SBAR communication tool (listed as retired).',
    'NSW Health Policy Directive PD2017_044: Interpreters, standard procedures for working with health care interpreters (2017). NHS England: Guidance for commissioners, interpreting and translation services in primary care (2018).',
    'Thompson DA, et al. Effects of actual waiting time, perceived waiting time, information delivery, and expressive quality on patient satisfaction in the emergency department. Ann Emerg Med 1996;28(6):657–665.',
    'Medical Protection Society. Confidentiality: general principles (Malaysia factsheet, 2021).',
    'LEAP Institute (Dr Xavier Amador): LEAP®, Listen-Empathize-Agree-Partner, cited for the comparison only.']
};

/* See-also links into this entry from the related entries: each guarded, so this file also loads on its own */
[['behavioural-disturbance', '#communication--agg', 'Talking to an angry or aggressive patient'],
 ['interpreter', '#communication--interp', 'Talking through an interpreter'],
 ['referral-rules', '#communication--isbar', 'Referring by phone: ISBAR'],
 ['safe-practice', '#communication--tb', 'Explaining a discharge: teach-back']].forEach(([id, href, t]) => {
  if (P[id] && !(P[id].see || []).some(s => s[0] === href)) P[id].see = [...(P[id].see || []), [href, t]];
});

/* Its banner: a Flow Studio still of a warm glass lantern, with a slow push-in loop (10 Nov 2026) */
P['communication'].hero = 'comms';
