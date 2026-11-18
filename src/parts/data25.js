/* ================= 18 Nov 2026: the pink EM Watch form =================
   Source: the EM Watch form printed on pink paper, four pages, which Krishna gave as phone photos on 18 Nov 2026 ("EM watch,
   description and consent form. Incoperate it into the app"): page 1, "Senarai semak pesakit EMWATCH" with its
   "Syarat-syarat wajib"; page 2, "Borang kebenaran untuk Klinik Virtual EMWATCH" (Malay); page 3, "Consent form for EMWATCH
   Virtual Clinic" (English); page 4, the signatures and the slip cut off for the patient. It prints no form number, date or
   issuer beyond "Jabatan Kecemasan dan Trauma, Hospital Kuala Lumpur", so it goes in as a department note (standing rule 6),
   dated by the day it was given. Its pages show as snapshots (app/memo/emwatch-p<N>.webp, built by src/memos.js from
   sources/memos/pages/emwatch/), with the clinic's mobile number covered on pages 2 to 4; the number is left out of the
   text too, at Krishna's decision of 18 Nov 2026 ("Keep it covered"). The form is blank: nothing about a patient is shown, asked
   for or kept (rule 4). Whether it is AK-15's Pink Form (Lampiran 1) and Appointment form (Lampiran 2), and where its
   conditions differ from AK-15, is under Still to confirm. */
(function(){
  const E = P['em-watch']; if (!E) return;
  const GIVEN = 'the pink EM Watch form, Jabatan Kecemasan dan Trauma, HKL (4 pages; no form number or date printed; given by the guide owner on 18 Nov 2026)';

  MEMOS.emwatch = {kind:'Department form', ref:'The pink EM Watch form', date:'no date printed; given 18 Nov 2026',
    t:'Senarai semak pesakit EMWATCH; Borang kebenaran untuk Klinik Virtual EMWATCH',
    pages:[[1, 'Page 1: checklist'], [2, 'Page 2: consent, Malay'], [3, 'Page 3: consent, English'], [4, 'Page 4: signatures and slip']],
    list:false, cap:'The form as given, blank, a page at a tap. The clinic\'s mobile number is covered.'};

  /* The form, page by page: a step between "Is it a condition EM Watch takes?" and the booking steps */
  E.nodes.form = {step:'Fill in the pink EM Watch form, page by page', items:[
    'Page 1, the checklist ("Senarai semak pesakit EMWATCH"): name, IC number, phone number (60), appointment date ("tarikh temujanji"), diagnosis, purpose of the appointment ("tujuan temujanji"), CT scan (ya or tidak), and a blood sample or other ("sample darah/lain-lain", ya or tidak), naming it ("nyatakan")',
    'Page 1, the mandatory conditions ("Syarat-syarat wajib"), each marked YA or TIDAK:',
    '"Warganegara Malaysia sahaja": Malaysian citizens only',
    '"Berumur lebih 18 tahun/penjaga": over 18 years old, or a guardian',
    '"Mempunyai telefon pintar & WhatsApp": has a smartphone and WhatsApp',
    '"Berpengetahuan melakukan panggilan video": knows how to make a video call',
    '"Pesakit tidak memerlukan pemeriksaan secara fisikal": the patient does not need a physical examination',
    'Pages 2 and 3, the consent, in Malay and in English: go through it with the patient, or the legal guardian, in their language. The Consent, BM and Consent, English tabs hold it as printed, and Read aloud reads it',
    'What they agree to: a virtual clinic by Google Meet; first contact by WhatsApp; their data kept confidential; taking part is voluntary, and they may withdraw at any time; teleconsultation has limits, so they may still be advised to attend in person; and their personal data and health information used under the PDPA',
    'Page 4: the patient signs, with name, IC number and date ("Pesakit"); the medical officer signs and dates it, with the stamp ("Pegawai perubatan", "Cap")',
    'Page 4, the slip: fill in the name, IC, phone and appointment date, then cut it off and give it to the patient ("Sila potong dan berikan kepada pesakit"). It says "Tidak perlu hadir ke hospital": no need to come to the hospital',
    'The slip gives the clinic\'s hours: "Isnin hingga Sabtu, 8.00 pagi hingga 2.00 petang (tutup pada hari Ahad)", Monday to Saturday, 8 am to 2 pm, closed on Sunday. The patient is called on the appointment day from the number on the slip: "Sila tunggu panggilan daripada kami" (please wait for our call)'],
    fig:'memo-emwatch', next:'book'};
  E.nodes.cond.opts = E.nodes.cond.opts.map(o => o[1] === 'book' ? [o[0], 'form'] : o);
  E.nodes.elig.hint += ' The pink EM Watch form prints five conditions of its own on page 1 (Malaysian citizens only; over 18, or a guardian; a smartphone with WhatsApp; knowing how to make a video call; no physical examination needed): they are on the form step, after the conditions.';

  /* The booking outcome: the form's step, and where it came from */
  const B = E.nodes.book;
  B.links = [['#em-watch--form', 'The pink form, page by page'], ...(B.links || [])];
  B.gap = B.gap.replace('The two forms are not attached to the copy seen.', 'The two forms are not attached to the copy seen. A pink EM Watch form (checklist, consent in Malay and English, signatures and the patient\'s slip) is on the step before: ' + GIVEN + '. It prints no number, so whether it is Lampiran 1 and 2, and where its conditions differ from AK-15, is under Still to confirm.');

  E.src = 'AK-15, Mar 2026; the pink form; EM Watch deck, Aug 2023';
  E.kw = 'emwatch teleconsultation telekonsultasi'; /* distinctive words only: "form", "clinic", "klinik" and "borang" pulled EM Watch above other entries */
  E.refs.push('The pink EM Watch form: Senarai semak pesakit EMWATCH, and Borang kebenaran untuk Klinik Virtual EMWATCH / Consent form for EMWATCH Virtual Clinic, Jabatan Kecemasan dan Trauma, Hospital Kuala Lumpur; 4 pages, no number or date printed (given by the guide owner on 18 Nov 2026)');

  /* The consent as printed, one tab per language (the Malay one marked, so Read aloud uses a Malay voice) */
  const PG2 = 'Page 2 of the pink form, as printed: Jabatan Kecemasan dan Trauma, Hospital Kuala Lumpur';
  const PG3 = 'Page 3 of the pink form, as printed: Emergency and Trauma Department, Kuala Lumpur Hospital';
  E.notes = [
    {l:'Consent, BM', notes:[
      {h:'Dengan menandatangani di bawah, saya mengesahkan perkara berikut:', src:'Borang kebenaran untuk Klinik Virtual EMWATCH. ' + PG2, lang:'ms', items:[
        'Saya faham bahawa Klinik EMWATCH adalah sebuah klinik VIRTUAL dan tele konsultasi dengan doktor akan dilakukan melalui APLIKASI GOOGLE MEET.',
        'Komunikasi permulaan dengan pesakit adalah melalui WhatsApp [nombor klinik, seperti dicetak pada borang].',
        'Saya faham bahawa semua interaksi dan data saya akan dirahsiakan.',
        'Saya faham bahawa penyertaan saya adalah secara sukarela dan saya boleh menarik diri pada bila-bila masa.']},
      {h:'Kebenaran Rawatan', src:PG2, lang:'ms', items:[
        'Saya bersetuju untuk menerima rawatan melalui tele konsultasi menggunakan perundingan video secara dalam talian. Saya memahami bahawa tele konsultasi mempunyai keterbatasan berbanding pemeriksaan secara bersemuka dan saya mungkin dinasihatkan hadir ke klinik atau hospital sekiranya diperlukan.']},
      {h:'Perlindungan Data Peribadi (PDPA)', src:PG2, lang:'ms', items:[
        'Saya bersetuju bahawa data peribadi dan maklumat kesihatan saya boleh di kumpul, digunakan, disimpan dan didedahkan bagi tujuan tele konsultasi, dokumentasi perubatan, komunikasi, kesinambungan rawatan serta operasi perkhidmatan kesihatan selaras dengan Akta Perlindungan Data Peribadi Malaysia.']},
      {h:'Dengan menandatangani kebenaran ini, saya mengesahkan bahawa:', src:PG2, lang:'ms', items:[
        'Saya adalah pesakit atau penjaga yang sah.',
        'Saya memahami sifat dan keterbatasan tele konsultasi.',
        'Saya memberi kebenaran untuk rawatan dan pemprosesan data peribadi saya.']}]},
    {l:'Consent, English', notes:[
      {h:'By signing below, I confirm the following:', src:'Consent form for EMWATCH Virtual Clinic. ' + PG3, items:[
        'I understand that EMWATCH Clinic is a VIRTUAL clinic and teleconsultation with doctors will be done via GOOGLE MEET APPLICATION.',
        'Initial communication with patients will be via WhatsApp [the clinic\'s number, as printed on the form].',
        'I understand that all interactions and my data will be kept confidential.',
        'I understand that my participation is voluntary and I can withdraw at any time.']},
      {h:'Treatment consent', src:PG3, items:[
        'I agree to receive teleconsultation treatment via online video consultation. I understand that teleconsultation has limitations compared with face-to-face consultation, and that I may still be advised to attend the clinic or hospital physically if needed.']},
      {h:'Personal Data Protection (PDPA)', src:PG3, items:[
        'I consent to the collection, use, storage, and disclosure of my personal data and health information for teleconsultation services, medical documentation, communication, continuity of care, and healthcare operations in accordance with Malaysian PDPA laws.']},
      {h:'By signing the consent i hereby confirm that:', src:PG3, items:[
        'I am the patient or authorised guardian.',
        'I understand the nature and limitations of teleconsultation.',
        'I consent to treatment and processing of my personal data.']}]}];
  E.notesFoot = 'Source: ' + GIVEN + '. A department note (standing rule 6), quoted as printed, with square brackets where the form prints the clinic\'s mobile number. The patient and the medical officer sign the paper form: the guide keeps nothing (rule 4).';

  /* The triage course's "does not need a physical examination" line now has the form beside it */
  const S = P['safe-practice'];
  if (S && S.nodes.fuwatch) S.nodes.fuwatch.links = [...(S.nodes.fuwatch.links || []), ['#em-watch--form', 'The pink EM Watch form']];
})();
