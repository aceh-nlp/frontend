/* All interface text, in three languages.
   ace: written by native speakers only — never AI-filled. Empty keys fall back
   to Indonesian, then English. Give speakers the `id` column to translate. */
"use strict";

const STRINGS = {
  en: {
    "stat.speakers.n": "3.4 million",
    "stat.speakers": "people speak Acehnese",
    "stat.drafts": "AI-drafted sentences waiting for speakers",
    "stat.team": "of us on Pulau Weh",
    "demo.label": "AI draft, not yet checked",
    "demo.translation": "I get up at five in the morning.",
    "demo.question": "Does this sound right to you?",
    "datasets.layer": "Layer",
    "field.ind": "Indonesian",
    "field.eng": "English",
    "field.eng_summary": "English summary",
    "site.title": "Aceh NLP",
    "nav.review": "Review sentences",
    "nav.try": "Try the model",
    "nav.home": "About the project",
    "lang.label": "Language",

    "hero.title": "A language lives where it is spoken.",
    "hero.lead": "Acehnese is carried in kitchens, on fishing boats and over coffee, far from the data that trained today’s models, which learned about Aceh from other people’s choices and inherited their blind spots. We are a small group from different backgrounds, gathered on Pulau Weh by curiosity and care for the language, helping speakers collect their own words and decide what counts as data, who checks it, and what it is for. This is how we begin to decolonise the technology: a language model held by a community becomes a living archive, one you can question, correct and teach, so knowledge keeps moving, as it always has, from one voice to the next.",

    "why.title": "Why this matters",
    "why.p1": "About 3.4 million people speak Acehnese, yet almost no open, transcribed speech exists for it. Existing models were trained mostly on Bible text and stumble on everyday conversation.",
    "why.p2": "In our own tests, models produced Acehnese that native speakers could recognise but would still correct. That polish has to come from the community itself, so the project starts with people, and the models become a tool the community shapes and uses.",

    "how.title": "How it works",
    "how.s1.title": "Data collection",
    "how.s1.text": "Everything starts with Acehnese text and speech, sorted by how far it can be trusted.",
    "how.s2.title": "Annotation",
    "how.s2.text": "Speakers review each sentence. Specialists rate it 1–5, correct it and annotate it. Everyday speakers give a quick +1 or −1.",
    "how.s3.title": "Training and evaluation",
    "how.s3.text": "Reviewed data trains language models. Part of the checked data is held back and never trained on, so models are tested on sentences they have not seen, and speakers judge the results. This step starts once enough sentences are checked.",
    "how.l1.title": "Specialist-checked",
    "how.l1.text": "Sentences checked and corrected by educated native speakers from NGOs and institutions. The best data, and the smallest.",
    "how.l2.title": "Everyday speakers",
    "how.l2.text": "Daily speakers, recordings and internet text, with a quick check from speakers.",
    "how.l3.title": "Synthetic",
    "how.l3.text": "AI-drafted sentences, clearly marked as unverified. The most plentiful and the least trusted — until a speaker corrects them.",
    "how.note": "Quality goes up the list; volume goes down. Nothing moves up a layer without a human.",

    "people.title": "People behind it",
    "people.intro": "Six of us, living and experimenting together on Pulau Weh — which is how the project began. We come from different places and backgrounds:",

    "join.title": "Join the project",
    "join.p": "Native speakers, teachers, linguists and institutions can take part. Specialists review and correct sentences; everyday speakers vote on them; partners help with recordings, permits and outreach.",
    "join.cta": "Start reviewing",
    "join.contact": "To join as a specialist or partner, contact the project team.",

    "footer.data": "Data in aceh-nlp/dataset",
    "footer.api": "API in aceh-nlp/backend",

    "tab.review": "Review",
    "tab.try": "Try the model",

    "login.title": "Sign in",
    "login.note": "Your reviews are recorded under your email so we know who evaluated what. No password — just identify yourself.",
    "login.email": "Email",
    "login.name": "Name",
    "login.name.placeholder": "optional",
    "login.dialect": "Dialect",
    "login.dialect.none": "— not a native speaker —",
    "login.dialect.other": "Other",
    "login.submit": "Sign in",

    "datasets.title": "Choose a dataset to review",
    "datasets.empty": "No datasets found.",
    "datasets.items": "items",
    "coordinator.title": "Coordinator",
    "upload.title": "Upload a dataset",
    "upload.name": "Name",
    "upload.file": "JSONL file",
    "upload.submit": "Upload",
    "export.title": "Download reviews",
    "export.dataset": "Dataset",
    "export.token": "Admin token",
    "export.submit": "Download JSON",

    "review.back": "← datasets",
    "review.rated": "reviewed",
    "review.score.hint": "1 = wrong/unnatural · 5 = exactly how a speaker says it. Write any correction and annotation before choosing a score.",
    "review.correction": "Correction (how you would say it)",
    "review.annotation": "Annotation",
    "review.vote.hint": "+1 = sounds right · −1 = sounds wrong",
    "review.done.title": "All done 🎉",
    "review.done.text": "You have reviewed every item in this dataset. Thank you!",

    "try.title": "Try the model",
    "try.note": "Write something in Acehnese and see what the model answers. It is a research model and often wrong — that is the point. Nothing you type here is stored.",
    "try.placeholder": "Tuléh lam basa Aceh…",
    "try.submit": "Generate",
    "try.offline": "The model is offline right now. The demo runs on a rented GPU and is switched on for evaluation sessions.",
    "try.wait": "…",
    "draft.notice": "This Acehnese text is an AI draft awaiting correction by native speakers. If something is wrong, please help us fix it.",
  },

  id: {
    "stat.speakers.n": "3,4 juta",
    "stat.speakers": "orang berbahasa Aceh",
    "stat.drafts": "kalimat buatan AI menunggu penutur",
    "stat.team": "orang di Pulau Weh",
    "demo.label": "Draf AI, belum diperiksa",
    "demo.translation": "Saya bangun jam lima pagi.",
    "demo.question": "Apakah ini terdengar wajar bagi Anda?",
    "datasets.layer": "Lapisan",
    "field.ind": "Bahasa Indonesia",
    "field.eng": "Bahasa Inggris",
    "field.eng_summary": "Ringkasan bahasa Inggris",
    "site.title": "Aceh NLP",
    "nav.review": "Tinjau kalimat",
    "nav.try": "Coba modelnya",
    "nav.home": "Tentang proyek",
    "lang.label": "Bahasa",

    "hero.title": "Bahasa hidup di tempat ia dituturkan.",
    "hero.lead": "Bahasa Aceh dibawa di dapur, di atas perahu nelayan, dan di meja kopi, jauh dari data yang melatih model-model hari ini, yang mengenal Aceh dari pilihan orang lain dan mewarisi titik butanya. Kami sekelompok kecil orang dengan latar belakang berbeda, dipertemukan di Pulau Weh oleh rasa ingin tahu dan kepedulian pada bahasa ini, membantu para penutur mengumpulkan kata-kata mereka sendiri dan menentukan apa yang dihitung sebagai data, siapa yang memeriksanya, dan untuk apa. Beginilah kami mulai mendekolonisasi teknologi ini: model bahasa di tangan komunitas menjadi arsip hidup, yang bisa ditanya, dikoreksi, dan diajari, sehingga pengetahuan terus bergerak, seperti selama ini, dari satu suara ke suara berikutnya.",

    "why.title": "Mengapa ini penting",
    "why.p1": "Sekitar 3,4 juta orang berbahasa Aceh, tetapi hampir tidak ada rekaman tutur yang ditranskripsi dan terbuka. Model yang ada kebanyakan dilatih dari teks Alkitab dan tersandung pada percakapan sehari-hari.",
    "why.p2": "Dalam pengujian kami, model menghasilkan bahasa Aceh yang dikenali penutur asli tetapi masih perlu dikoreksi. Penyempurnaan itu harus datang dari komunitas sendiri, sehingga proyek ini dimulai dari manusia, dan model menjadi alat yang dibentuk dan dipakai komunitas.",

    "how.title": "Cara kerjanya",
    "how.s1.title": "Pengumpulan data",
    "how.s1.text": "Semuanya dimulai dari teks dan tuturan bahasa Aceh, yang dipilah menurut seberapa jauh bisa dipercaya.",
    "how.s2.title": "Anotasi",
    "how.s2.text": "Penutur meninjau setiap kalimat. Spesialis memberi nilai 1–5, mengoreksi, dan memberi catatan. Penutur sehari-hari cukup memberi +1 atau −1.",
    "how.s3.title": "Pelatihan dan evaluasi",
    "how.s3.text": "Data yang sudah ditinjau melatih model bahasa. Sebagian data yang diperiksa disisihkan dan tidak pernah dipakai untuk melatih, sehingga model diuji pada kalimat yang belum pernah dilihatnya, dan penuturlah yang menilai hasilnya. Tahap ini dimulai setelah cukup banyak kalimat diperiksa.",
    "how.l1.title": "Diperiksa spesialis",
    "how.l1.text": "Kalimat yang diperiksa dan dikoreksi penutur asli berpendidikan dari LSM dan lembaga. Data terbaik dan paling sedikit.",
    "how.l2.title": "Penutur sehari-hari",
    "how.l2.text": "Penutur harian, rekaman, dan teks internet, dengan pemeriksaan cepat oleh penutur.",
    "how.l3.title": "Sintetis",
    "how.l3.text": "Kalimat buatan AI, ditandai jelas sebagai belum terverifikasi. Paling banyak dan paling kurang dipercaya — sampai penutur mengoreksinya.",
    "how.note": "Makin ke atas makin bermutu; makin ke bawah makin banyak. Tidak ada yang naik lapisan tanpa manusia.",

    "people.title": "Orang-orang di baliknya",
    "people.intro": "Kami berenam, tinggal dan bereksperimen bersama di Pulau Weh — begitulah proyek ini bermula. Kami datang dari tempat dan latar belakang yang berbeda:",

    "join.title": "Bergabung dengan proyek",
    "join.p": "Penutur asli, guru, ahli bahasa, dan lembaga dapat ikut serta. Spesialis meninjau dan mengoreksi kalimat; penutur sehari-hari memberi suara; mitra membantu perekaman, perizinan, dan penjangkauan.",
    "join.cta": "Mulai meninjau",
    "join.contact": "Untuk bergabung sebagai spesialis atau mitra, hubungi tim proyek.",

    "footer.data": "Data di aceh-nlp/dataset",
    "footer.api": "API di aceh-nlp/backend",

    "tab.review": "Tinjau",
    "tab.try": "Coba modelnya",

    "login.title": "Masuk",
    "login.note": "Tinjauan Anda dicatat dengan email Anda agar kami tahu siapa menilai apa. Tanpa kata sandi — cukup perkenalkan diri.",
    "login.email": "Email",
    "login.name": "Nama",
    "login.name.placeholder": "opsional",
    "login.dialect": "Dialek",
    "login.dialect.none": "— bukan penutur asli —",
    "login.dialect.other": "Lainnya",
    "login.submit": "Masuk",

    "datasets.title": "Pilih dataset untuk ditinjau",
    "datasets.empty": "Tidak ada dataset.",
    "datasets.items": "butir",
    "coordinator.title": "Koordinator",
    "upload.title": "Unggah dataset",
    "upload.name": "Nama",
    "upload.file": "Berkas JSONL",
    "upload.submit": "Unggah",
    "export.title": "Unduh tinjauan",
    "export.dataset": "Dataset",
    "export.token": "Token admin",
    "export.submit": "Unduh JSON",

    "review.back": "← dataset",
    "review.rated": "ditinjau",
    "review.score.hint": "1 = salah/tidak wajar · 5 = persis seperti ucapan penutur. Tulis koreksi dan catatan sebelum memilih nilai.",
    "review.correction": "Koreksi (bagaimana Anda mengucapkannya)",
    "review.annotation": "Catatan",
    "review.vote.hint": "+1 = terdengar wajar · −1 = terdengar salah",
    "review.done.title": "Selesai 🎉",
    "review.done.text": "Anda telah meninjau semua butir dalam dataset ini. Terima kasih!",

    "try.title": "Coba modelnya",
    "try.note": "Tulis sesuatu dalam bahasa Aceh dan lihat jawaban model. Ini model riset dan sering salah — justru itu intinya. Teks yang Anda ketik tidak disimpan.",
    "try.placeholder": "Tuléh lam basa Aceh…",
    "try.submit": "Hasilkan",
    "try.offline": "Model sedang tidak aktif. Demo ini berjalan di GPU sewaan dan dinyalakan saat sesi evaluasi.",
    "try.wait": "…",
    "draft.notice": "Teks bahasa Aceh ini masih draf buatan AI yang menunggu koreksi penutur asli. Jika ada yang salah, bantu kami memperbaikinya.",
  },

  // Acehnese: AI DRAFT (Claude, Nov 2026) awaiting native-speaker correction.
  // Source sheet: aceh_nlp/docs/site_strings_ace_draft.md. Replace lines as corrections arrive.
  ace: {
    "stat.speakers": "ureueng meututoe basa Aceh",
    "stat.drafts": "kalimat buatan AI preh ureueng Aceh",
    "stat.team": "droe di Pulo Weh",
    "demo.label": "Draf AI, gohlom geupareksa",
    "demo.question": "Peue nyoe deuh wajar bak droeneuh?",
    "datasets.layer": "Lapisan",
    "site.title": "Aceh NLP",
    "nav.review": "Pareksa kalimat",
    "nav.try": "Cuba model nyoe",
    "nav.home": "Hai proyek nyoe",
    "lang.label": "Basa",
    "hero.title": "Basa udep di teumpat geumarit.",
    "hero.lead": "Basa Aceh geuba lam dapu, ateuh peurahô nelayan, ngon bak meja kupi, jioh nibak data nyang geulatéh model-model jinoe, nyang geuteupeue Aceh dari piléh ureueng laén ngon jipeusaka titèk buta jih. Kamoe saboh kawan ubit nyang meubeda-beda latar, nyang meurumpok di Pulo Weh kareuna hawa keuneuk teupeue ngon peuduli keu basa nyoe, meubantu ureueng nyang meututoe geukumpoi narit droe ngon geupeutentèe peue nyang jeuet keu data, soe nyang pareksa, ngon keu peue. Meunoe kamoe mulai dekolonisasi teknologi nyoe: model basa bak jaroe masyarakat jeuet keu arsip udep, jeuet tatanyong, tapeubeutôi, ngon tapeurunoe, mangat teupeue teutap jijak, lagèe nyang ka sabé, dari saboh su u su laén.",
    "why.title": "Pakon nyoe peunteng",
    "why.p1": "Na kira-kira 3,4 juta ureueng nyang meututoe basa Aceh, teuma hampir hana rekaman tutoe nyang ka geutranskripsi ngon teubuka. Model nyang na jinoe le nyang geulatéh dari teks Alkitab ngon payah watèe marit uroe-uroe.",
    "why.p2": "Lam ujian kamoe, model peuhasé basa Aceh nyang geuteupeue lé ureueng Aceh teuma mantong peureulèe geupeubeutôi. Peugöt nyan harôh teuka dari masyarakat keudroe, kareuna nyan proyek nyoe geumulai dari ureueng, dan model jeuet keu alat nyang geupeugöt ngon geupeuguna lé masyarakat.",
    "how.title": "Kiban cara keureuja jih",
    "how.s1.title": "Kumpoi data",
    "how.s1.text": "Bandum geumulai nibak teks ngon tutoe basa Aceh, nyang geupisah meunurot padum jeuet geupeucaya.",
    "how.l1.title": "Geupareksa lé ahli",
    "how.l1.text": "Kalimat nyang geupareksa ngon geupeubeutôi lé ureueng Aceh nyang meupeundidikan dari LSM ngon lembaga. Data nyang paleng gét ngon paleng dit.",
    "how.l2.title": "Ureueng nyang marit uroe-uroe",
    "how.l2.text": "Ureueng nyang marit uroe-uroe, rekaman, ngon teks internet, ngon pareksa bacut lé ureueng Aceh.",
    "how.l3.title": "Sintetis",
    "how.l3.text": "Kalimat nyang geupeugöt lé AI, geutanda jeulah gohlom geuverifikasi. Paleng le ngon paleng kureueng geupeucaya — sampoe ureueng Aceh geupeubeutôi.",
    "how.s2.title": "Anotasi",
    "how.s2.text": "Ureueng Aceh geupareksa tiep kalimat. Ahli geubri nilai 1–5, geupeubeutôi, ngon geubri catatan. Ureueng nyang marit uroe-uroe cukôp geubri +1 atawa −1.",
    "how.s3.title": "Latéh ngon evaluasi",
    "how.s3.text": "Data nyang ka geupareksa geupeuguna keu latéh model basa. Siseun data nyang ka geupareksa geupeuasoe, hana geupeuguna keu latéh, mangat model geuuji ngon kalimat nyang gohlom jikalon, ngon ureueng Aceh nyang nilai hasé jih. Tahap nyoe geumulai meunyo ka le kalimat geupareksa.",
    "how.note": "Makin u ateueh makin gét; makin u yup makin le. Hana nyang ék lapisan meunyo hana ureueng.",
    "people.title": "Ureueng-ureueng di likot jih",
    "people.intro": "Kamoe nam droe, tinggai ngon meucuba-cuba meusajan di Pulo Weh — meunan proyek nyoe geumulai. Kamoe teuka dari teumpat ngon latar nyang meubeda-beda:",
    "join.title": "Tamong lam proyek nyoe",
    "join.p": "Ureueng Aceh, gurèe, ahli basa, ngon lembaga jeuet meuikot. Ahli geupareksa ngon geupeubeutôi kalimat; ureueng nyang marit uroe-uroe geubri suara; mitra geubantu rekaman, izin, ngon peungajakan.",
    "join.cta": "Mulai pareksa",
    "join.contact": "Keu tamong sibagoe ahli atawa mitra, neuhubông tim proyek.",
    "footer.data": "Data bak aceh-nlp/dataset",
    "footer.api": "API bak aceh-nlp/backend",
    "tab.review": "Pareksa",
    "tab.try": "Cuba model nyoe",
    "login.title": "Tamong",
    "login.note": "Hasé pareksa droeneuh geucatat ngon email droeneuh mangat kamoe meuteupeue soe nyang nilai peue. Hana kata sandi — cukôp neupeuturi droe.",
    "login.email": "Email",
    "login.name": "Nan",
    "login.name.placeholder": "hana wajéb",
    "login.dialect": "Dialék",
    "login.dialect.none": "— kon ureueng Aceh asli —",
    "login.dialect.other": "Laén",
    "login.submit": "Tamong",
    "datasets.title": "Neupiléh dataset nyang neupareksa",
    "datasets.empty": "Hana dataset.",
    "datasets.items": "butir",
    "coordinator.title": "Koordinator",
    "upload.title": "Peuék dataset",
    "upload.name": "Nan",
    "upload.file": "File JSONL",
    "upload.submit": "Peuék",
    "export.title": "Peutrôn hasé pareksa",
    "export.dataset": "Dataset",
    "export.token": "Token admin",
    "export.submit": "Peutrôn JSON",
    "review.back": "← dataset",
    "review.rated": "ka geupareksa",
    "review.score.hint": "1 = salah/hana wajar · 5 = sabé lagèe ureueng Aceh marit. Neutuléh peubeutôi ngon catatan sigohlom neupiléh nilai.",
    "review.correction": "Peubeutôi (kiban droeneuh marit)",
    "review.annotation": "Catatan",
    "review.vote.hint": "+1 = deuh wajar · −1 = deuh salah",
    "review.done.title": "Ka lheueh 🎉",
    "review.done.text": "Droeneuh ka neupareksa bandum butir lam dataset nyoe. Teurimong geunaséh!",
    "try.title": "Cuba model nyoe",
    "try.note": "Neutuléh peue-peue lam basa Aceh dan neukalon kiban model jaweueb. Nyoe model risèt ngon kayém salah — nyan keuh inti jih. Teks nyang neutuléh hana geusimpan.",
    "try.placeholder": "Tuléh lam basa Aceh…",
    "try.submit": "Peuhasé",
    "try.offline": "Model jinoe hana udep. Demo nyoe jipeujalan bak GPU sewa ngon geupeuudep watèe sesi evaluasi.",
    "try.wait": "…",
    "draft.notice": "Teks basa Aceh nyoe mantong draf buatan AI, gohlom geupeubeutôi lé ureueng Aceh. Meunyo salah, neubantu kamoe peubeutôi.",
  },
};

const LANGS = [["ace", "Aceh"], ["id", "Indonesia"], ["en", "English"]];

function currentLang() {
  let lang = "";
  try { lang = localStorage.getItem("aceh_lang") || ""; } catch { /* storage blocked */ }
  if (!STRINGS[lang]) {
    const nav = (navigator.language || "").toLowerCase();
    lang = nav.startsWith("ace") ? "ace" : nav.startsWith("id") ? "id" : "en";
  }
  return lang;
}

function t(key) {
  const lang = currentLang();
  return STRINGS[lang][key] ?? STRINGS.id[key] ?? STRINGS.en[key] ?? key;
}

function setLang(lang) {
  if (!STRINGS[lang]) return;
  try { localStorage.setItem("aceh_lang", lang); } catch { /* storage blocked */ }
  applyStrings();
}

function applyStrings() {
  const lang = currentLang();
  document.documentElement.lang = lang;
  for (const el of document.querySelectorAll("[data-i18n]")) el.textContent = t(el.dataset.i18n);
  for (const el of document.querySelectorAll("[data-i18n-placeholder]")) {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  }
  for (const btn of document.querySelectorAll("#lang-switch button")) {
    btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
  }
  const notice = document.getElementById("draft-notice");
  if (notice) notice.hidden = lang !== "ace";
  document.dispatchEvent(new CustomEvent("langchange", { detail: lang }));
}

function buildLangSwitch() {
  const holder = document.getElementById("lang-switch");
  if (!holder) return;
  holder.innerHTML = "";
  for (const [code, label] of LANGS) {
    const b = document.createElement("button");
    b.type = "button";
    b.dataset.lang = code;
    b.textContent = label;
    b.addEventListener("click", () => setLang(code));
    holder.appendChild(b);
  }
}

document.addEventListener("DOMContentLoaded", () => { buildLangSwitch(); applyStrings(); });
