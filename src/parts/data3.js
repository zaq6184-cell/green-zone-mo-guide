/* ================= Version 7 additions: the workflow-map documents not yet in the app =================
   From the triage course folder (one-way flow, down-triage memo, IV antibiotic memo, ortho referral memo,
   IPR admission criteria, KKM MTS announcement), as summarised in the Green Zone workflow map (7 Nov 2026).
   Each item names its source. Nothing here replaces the ebook. */

(function(){
  const G = P['gz-rules'];
  G.nodes.menu.opts.splice(1, 0, ['One-way flow: no repeat tests', 'oneway']);
  G.nodes.menu.opts.push(
    ['Down-triage', 'down'],
    ['IV antibiotics and no bed free', 'ivab'],
    ['The primary team is delayed', 'ep4'],
    ['Redirect to a Klinik Kesihatan or GP', 'kk']);
  G.nodes.oneway = {end:'neutral', title:'One-way flow: no repeats after secondary triage', items:[
    'Triage gives the MTS level, and the Green Zone takes levels 4 and 5 (MTS 2022, five levels)',
    'Secondary triage does the focused history, vital signs, the ECG once, wound irrigation and dressing',
    'Do not repeat the ECG, dressing or vital signs later unless they were missed',
    'An ECG you ask for in the Green Zone is done in the Procedure Room: do not send the patient back to secondary triage'],
    gap:'Sources: HKL ED one-way procedure flow (Green Zone); KKM MTS announcement, Jul 2026.'};
  G.nodes.down = {end:'neutral', title:'Down-triage: only the EP can allow it', items:[
    'Only the EP can allow a down-triage',
    'If you, the MO, need to down-triage, examine the patient properly first: it is not allowed until the MO has examined the patient',
    'Then document the down-triage on the patient\'s triage form',
    'The PPP makes sure the MO who down-triaged has documented it'],
    gap:'Sources: memo HKL/JK/98/188/3(22)22, 4 Oct 2022 (examine first, document on the triage form, the PPP makes sure). The EP\'s permission was added on 8 Nov 2026 at the guide owner\'s instruction; the 2022 memo does not mention it, so its written source is still to be confirmed.'};
  G.nodes.ivab = {end:'neutral', title:'IV antibiotics when no bed is free', items:[
    'Look for a bed first in Yellow Obs, ISO or YZ Ext, and pass the patient over to the zone in-charge',
    'If none is free, the patient can have IV antibiotics on a chair in the CCA, with one of the four allowed antibiotics only: Augmentin, cefuroxime, ceftriaxone or Unasyn',
    'Send with the patient: the prescription, a wristband and complete records (bloods and X-ray), and hand over to the HO in the CCA',
    'Move the patient to a bed when one frees up'],
    links:[['#gz-rules--wait','Patients who should not wait outside']],
    gap:'Source: IV antibiotic memo, 30 Jun 2026.'};
  G.nodes.ep4 = {end:'neutral', title:'When the primary team is delayed', items:[
    'The EP may decide the admission within 4 hours if the primary team is delayed',
    'Several disciplines and no disposition after a long wait: inform the EP in charge'],
    gap:'Sources: KKM MTS announcement, Jul 2026; memo HKL/JK/98/188/3(17)23, 1 Sep 2023.'};
  G.nodes.kk = {end:'refer', title:'Redirect to a Klinik Kesihatan or private GP', items:[
    'Non-emergency Green Zone cases can be redirected to a Klinik Kesihatan or a private GP (Skim MADANI, PeKa B40)',
    'Also for primary care: NCD follow-up; STD, RVD and hepatitis screening; chronic cough for PTB workup',
    'Gout is managed at primary care: refer to the nearest Klinik Kesihatan'],
    links:[['#gz-rules--gout','Gout referrals'],['#outpatient-referral','Clinic referrals from the ED']],
    gap:'Sources: KKM MTS announcement, Jul 2026; MAU FAST referral criteria. The HKL procedure for redirecting patients is still to be confirmed.'};
  G.refs.push('HKL ED one-way procedure flow, Green Zone (triage course folder)', 'Memo HKL/JK/98/188/3(22)22: Peringatan tatacara triage di Jabatan Kecemasan dan Trauma, 4 Oct 2022', 'IV antibiotic memo: Green Zone patients needing IV antibiotics with no bed available, 30 Jun 2026', 'KKM MTS announcement, Jul 2026');

  const R = P['referral-rules'];
  R.nodes.ortho = {check:'any', q:'Any of these? Then refer to the orthopaedic team on call.', hint:'Lampiran 1 of the orthopaedic referral memo (17 May 2024). Unsure about the X-ray? Ask the EP on duty first.', items:[
    'Open, comminuted, displaced or intra-articular fracture',
    'Fracture of the scaphoid, talus, calcaneum, malleolus, cervical spine, pelvis or femur',
    'Large haematoma, or a wound over a joint or tendon',
    'Dislocation, or an unstable ligament injury',
    'Compartment syndrome or crush injury',
    'Unable to bear weight, or severe pain despite analgesia'],
    opts:[['Any present','orthoc'],['None of these','orthcl']]};
  R.nodes.orthoc = {end:'refer', title:'Refer to the orthopaedic team on call', items:[
    'Make a formal referral: "opinion only" referrals are not accepted',
    'Joint dislocation, including the shoulder: refer to the ortho MO on call 1 or 2, before or after reduction, not to the clinic',
    'A fracture that needs closed manipulation and reduction (CMR): ortho should do it within 2 hours; if not, tell the EP on duty. The ED does the procedural sedation (PSA)',
    'From the Green Zone, write the treatment notes in duplicate: the original with a patient ID sticker goes into the Orthopaedic file, the copy stays in the ED notes',
    'Only the Orthopaedic file and the X-ray films go with the patient to the Orthopaedic consultation room',
    'Record every referral in the Orthopaedic referral register book'],
    gap:'Sources: orthopaedic referral memo, 17 May 2024 (Lampiran 1); joint dislocation reminder, 26 Jun 2023; memo HKL/JK/98/188/3(29)22, 20 Dec 2022.'};
  R.nodes.orthcl = {end:'refer', title:'Refer to the orthopaedic clinic', items:[
    'For fractures that do not meet the urgent criteria, stable ligament injuries, and a prolapsed disc (PID) without severe pain',
    'Give a referral letter: ED referrals go to the Orthopaedic clinic at Wisma Kayu, not SCACC',
    'Record every referral in the Orthopaedic referral register book'],
    links:[['#emacc','EMACC follow-up for a suspected fracture with a normal X-ray']],
    gap:'Sources: orthopaedic referral memo, 17 May 2024 (Lampiran 1); Orthopaedic Department letter, 17 Jan 2018.'};
  R.nodes.ipr = {check:'all', q:'Meets the criteria for transfer to IPR (respiratory)?', hint:'IPR takes, for example, known IPR patients, complicated TB, bronchiectasis, pleural effusion, pneumothorax, asthma, COPD and respiratory palliative care.', items:[
    'Haemodynamically stable',
    'Not on inotropic support',
    'On minimal oxygen support (Venturi mask 40% at most)',
    'None of the exclusions: ACS, massive haemoptysis, needs several disciplines, or weight over 120 kg'],
    opts:[['All met','iprok'],['Not all met','iprno']]};
  R.nodes.iprok = {end:'refer', title:'Suitable for transfer to IPR', items:[
    'Call the IPR specialist on call: 03-4023 2966',
    'Follow the ED HKL approach to respiratory cases for IPR referral'],
    gap:'Sources: IPR admission criteria (triage course folder); Flow 3, Approach to respiratory cases in ED HKL to IPR, 2021.'};
  R.refs.push('Orthopaedic referral memo with Lampiran 1, 17 May 2024', 'IPR admission criteria (triage course folder)');
})();
