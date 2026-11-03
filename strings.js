/* All interface text, in three languages.
   ace: written by native speakers only — never AI-filled. Empty keys fall back
   to Indonesian, then English. Give speakers the `id` column to translate. */
"use strict";

const STRINGS = {
  en: {
    "site.title": "Aceh NLP",
    "nav.review": "Review sentences",
    "nav.try": "Try the model",
    "nav.home": "About the project",
    "lang.label": "Language",

    "hero.title": "Keeping Acehnese alive, together",
    "hero.lead": "Language models already speak some Acehnese; they need the polish only its speakers can give. We are a community-led, local-first project using these models as an instrument to preserve Acehnese culture in an interactive way — one checked sentence at a time.",

    "why.title": "Why this matters",
    "why.p1": "About 3.4 million people speak Acehnese, yet almost no open, transcribed speech exists for it. Existing models were trained mostly on Bible text and stumble on everyday conversation.",
    "why.p2": "In our own tests, models produced Acehnese that native speakers could recognise but would still correct. That polish has to come from the community itself, so the project starts with people, and the models become a tool the community shapes and uses.",

    "how.title": "How it works",
    "how.l1.title": "Specialist-checked",
    "how.l1.text": "Educated native speakers from NGOs and institutions rate each sentence 1–5, correct it and annotate it. This is the best data and the smallest.",
    "how.l2.title": "Everyday speakers",
    "how.l2.text": "Daily speakers, recordings and internet text. Speakers give a quick +1 or −1 on whether a sentence sounds right.",
    "how.l3.title": "Synthetic",
    "how.l3.text": "AI-drafted sentences, clearly marked as unverified. The most plentiful and the least trusted — until a speaker corrects them.",
    "how.note": "Quality goes up the list; volume goes down. Nothing moves up a layer without a human.",

    "people.title": "People behind it",
    "people.intro": "Six of us, living and experimenting together on Pulau Weh — which is how the project began. We come from different places and backgrounds:",

    "join.title": "Join the project",
    "join.p": "Native speakers, teachers, linguists and institutions can take part. Specialists review and correct sentences; everyday speakers vote on them; partners help with recordings, permits and outreach.",
    "join.cta": "Start reviewing",
    "join.contact": "To join as a specialist or partner, contact the project team.",

    "footer.data": "Data in aceh-nlp-dataset",
    "footer.api": "API in aceh-nlp-backend",

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
    "site.title": "Aceh NLP",
    "nav.review": "Tinjau kalimat",
    "nav.try": "Coba modelnya",
    "nav.home": "Tentang proyek",
    "lang.label": "Bahasa",

    "hero.title": "Menjaga bahasa Aceh tetap hidup, bersama-sama",
    "hero.lead": "Model bahasa sudah bisa sedikit berbahasa Aceh; yang dibutuhkan adalah penyempurnaan yang hanya bisa diberikan penuturnya. Kami proyek yang dipimpin komunitas dan mengutamakan lokal, memakai model ini sebagai alat untuk melestarikan budaya Aceh secara interaktif — satu kalimat terperiksa pada satu waktu.",

    "why.title": "Mengapa ini penting",
    "why.p1": "Sekitar 3,4 juta orang berbahasa Aceh, tetapi hampir tidak ada rekaman tutur yang ditranskripsi dan terbuka. Model yang ada kebanyakan dilatih dari teks Alkitab dan tersandung pada percakapan sehari-hari.",
    "why.p2": "Dalam pengujian kami, model menghasilkan bahasa Aceh yang dikenali penutur asli tetapi masih perlu dikoreksi. Penyempurnaan itu harus datang dari komunitas sendiri, sehingga proyek ini dimulai dari manusia, dan model menjadi alat yang dibentuk dan dipakai komunitas.",

    "how.title": "Cara kerjanya",
    "how.l1.title": "Diperiksa spesialis",
    "how.l1.text": "Penutur asli berpendidikan dari LSM dan lembaga menilai setiap kalimat 1–5, mengoreksi, dan memberi catatan. Ini data terbaik dan paling sedikit.",
    "how.l2.title": "Penutur sehari-hari",
    "how.l2.text": "Penutur harian, rekaman, dan teks internet. Penutur cukup memberi +1 atau −1: apakah kalimatnya terdengar wajar.",
    "how.l3.title": "Sintetis",
    "how.l3.text": "Kalimat buatan AI, ditandai jelas sebagai belum terverifikasi. Paling banyak dan paling kurang dipercaya — sampai penutur mengoreksinya.",
    "how.note": "Makin ke atas makin bermutu; makin ke bawah makin banyak. Tidak ada yang naik lapisan tanpa manusia.",

    "people.title": "Orang-orang di baliknya",
    "people.intro": "Kami berenam, tinggal dan bereksperimen bersama di Pulau Weh — begitulah proyek ini bermula. Kami datang dari tempat dan latar belakang yang berbeda:",

    "join.title": "Bergabung dengan proyek",
    "join.p": "Penutur asli, guru, ahli bahasa, dan lembaga dapat ikut serta. Spesialis meninjau dan mengoreksi kalimat; penutur sehari-hari memberi suara; mitra membantu perekaman, perizinan, dan penjangkauan.",
    "join.cta": "Mulai meninjau",
    "join.contact": "Untuk bergabung sebagai spesialis atau mitra, hubungi tim proyek.",

    "footer.data": "Data di aceh-nlp-dataset",
    "footer.api": "API di aceh-nlp-backend",

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
    "site.title": "Aceh NLP",
    "nav.review": "Pareksa kalimat",
    "nav.try": "Cuba model nyoe",
    "nav.home": "Hai proyek nyoe",
    "lang.label": "Basa",
    "hero.title": "Tapeuudep basa Aceh, meusajan",
    "hero.lead": "Model basa ka jeuet meututoe basa Aceh bacut; nyang peureulèe jinoe peugöt nyang hana jeuet geubri lé soe laén seulaén ureueng nyang meututoe basa nyan. Kamoe proyek nyang geupimpin lé masyarakat ngon nyang peuutama ureueng lokal, tapeuguna model nyoe sibagoe alat keu tapeulestari budaya Aceh ngon cara interaktif — saboh kalimat nyang ka geupareksa bak sigo watèe.",
    "why.title": "Pakon nyoe peunteng",
    "how.title": "Kiban cara keureuja jih",
    "how.note": "Makin u ateueh makin gét; makin u yup makin le. Hana nyang ék lapisan meunyo hana ureueng.",
    "people.title": "Ureueng-ureueng di likot jih",
    "people.intro": "Kamoe nam droe, tinggai ngon meucuba-cuba meusajan di Pulo Weh — meunan proyek nyoe geumulai. Kamoe teuka dari teumpat ngon latar nyang meubeda-beda:",
    "join.title": "Tamong lam proyek nyoe",
    "join.p": "Ureueng Aceh, gurèe, ahli basa, ngon lembaga jeuet meuikot. Ahli geupareksa ngon geupeubeutôi kalimat; ureueng nyang marit uroe-uroe geubri suara; mitra geubantu rekaman, izin, ngon peungajakan.",
    "join.cta": "Mulai pareksa",
    "join.contact": "Keu tamong sibagoe ahli atawa mitra, neuhubông tim proyek.",
    "footer.data": "Data bak aceh-nlp-dataset",
    "footer.api": "API bak aceh-nlp-backend",
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
