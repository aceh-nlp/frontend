/* All interface text, in three languages.
   ace: written by native speakers only — never AI-filled. Empty keys fall back
   to Indonesian, then English. Give speakers the `id` column to translate. */
"use strict";

const STRINGS = {
  en: {
    "datasets.layer": "Layer",
    "field.ind": "Indonesian",
    "field.eng": "English",
    "field.eng_summary": "English summary",
    "site.title": "Aceh NLP",
    "nav.review": "Evaluation",
    "nav.try": "Talk with the model",
    "nav.home": "About the project",
    "lang.label": "Language",

    "hero.title": "A language lives where it is spoken.",
    "hero.lead": "Acehnese is carried in kitchens, on fishing boats and over coffee, far from the data that trained today’s models, which learned about Aceh from other people’s choices and inherited their blind spots. We are a small group from different backgrounds, gathered on Pulau Weh by curiosity and care for the language, helping speakers collect their own words and decide what counts as data, who checks it, and what it is for. This is how we begin to decolonise the technology: a language model held by a community becomes a living archive, one you can question, correct and teach, so knowledge keeps moving, as it always has, from one voice to the next.",


    "how.title": "How it works",
    "loop.view.label": "View",
    "loop.view.story": "Recipe book",
    "loop.view.ml": "ML pipeline",
    "loop.ml.intro": "The same loop in standard machine-learning terms.",
    "loop.ml.t1": "Layer 1: specialist",
    "loop.ml.t2": "Layer 2: everyday",
    "loop.ml.t3": "Layer 3: synthetic",
    "loop.ml.note": "A sentence moves up a layer only after human review.",
    "loop.ml.seal": "Held back from training. Scores each new model.",
    "loop.ml.elders": "Specialists",
    "loop.ml.others": "Everyday speakers",
    "loop.ml.return": "Reviewed data returns to the dataset.",
    "loop.intro": "Think of a family kitchen. The cook learns from one recipe book, and the family decides what goes back into it.",
    "loop.book.title": "The recipe book",
    "loop.book.plain": "Dataset",
    "loop.t1.title": "Elders’ recipes",
    "loop.t1.text": "Specialist-checked. Smallest, most trusted.",
    "loop.t2.title": "Neighbours’ recipes",
    "loop.t2.text": "Everyday speakers and internet text.",
    "loop.t3.title": "Machine-written recipes",
    "loop.t3.text": "Synthetic AI drafts. Largest, least trusted.",
    "loop.book.note": "A recipe moves up only when a person has tasted it.",
    "loop.learn.title": "The cook learns the book",
    "loop.learn.plain": "Training",
    "loop.cook.title": "The cook",
    "loop.cook.plain": "Model",
    "loop.seal.title": "A sealed family recipe",
    "loop.seal.plain": "Locked test set",
    "loop.seal.text": "The cook never reads it. It shows whether each new cook is really better.",
    "loop.dish.title": "Cooks new dishes",
    "loop.dish.plain": "Generate",
    "loop.taste.title": "The family tastes",
    "loop.taste.plain": "Human review: annotation and evaluation",
    "loop.elders.title": "Elders (specialists)",
    "loop.elders.text": "Score 1–5, correct and annotate.",
    "loop.others.title": "Everyone else",
    "loop.others.text": "For now, score 1–5, correct and annotate too. Later: compare two answers to one question, and give the better one +1 and the other −1.",
    "loop.return": "What passes goes into the book.",
    "loop.pause": "Pause",
    "loop.play": "Play",

    "people.title": "People behind it",
    "people.intro": "Six of us, living and experimenting together on Pulau Weh — which is how the project began. We come from different places and backgrounds:",

    "join.title": "Join the project",
    "join.p": "It takes many kinds of help, not only reviewers. All roles are volunteer for now.",
    "join.cta": "Start evaluating",
    "join.teach.title": "Teach or study Acehnese",
    "join.teach.text": "Review sentences and settle spelling.",
    "join.speak.title": "Speak Acehnese",
    "join.speak.text": "Correct drafts and write conversation prompts.",
    "join.local.title": "Live on Pulau Weh",
    "join.local.text": "Help us work respectfully with communities.",
    "join.record.title": "Record and transcribe",
    "join.record.text": "Lend equipment or train as an interviewer. Recording starts once consent is ready.",
    "join.write.title": "Share writing or translate",
    "join.write.text": "Acehnese text you have the right to share, or translation between Acehnese and Indonesian.",
    "join.build.title": "Build software",
    "join.build.text": "Review tools, data and training.",
    "join.compute.title": "Offer compute or funding",
    "join.compute.text": "GPU time, cloud credits and grants, for when training is ready.",
    "join.legal.title": "University or legal",
    "join.legal.text": "Permits, consent and data protection.",
    "join.story.title": "Design, write, film",
    "join.story.text": "Help people understand the project honestly.",
    "join.contact.link": "Write to us on GitHub",
    "join.contact": "Posts there are public, so please leave out personal details. An email address is coming soon.",



    "login.title": "Sign in",
    "login.note": "Your reviews are recorded under your email and dialect so we know who evaluated what. We email you a one-time code; there is no password.",
    "login.email": "Email",
    "login.name": "Name",
    "login.name.placeholder": "optional",
    "login.dialect": "Dialect",
    "login.dialect.none": "— not a native speaker —",
    "login.dialect.other": "Other",
    "login.submit": "Email me a code",
    "login.sent": "We've sent a code to your email. It can take a minute, so check your spam folder too.",
    "login.code": "Code",
    "login.verify": "Sign in",
    "login.back": "Use a different email or send again",
    "login.limit": "Too many codes for now. Use the last one we sent, or try again later.",
    "login.later": "Something went wrong on our side. Please try again later.",
    "login.bademail": "That email address doesn't look right. Please check it.",
    "login.out": "Sign out",
    "login.wrong": "That code is wrong or has expired. Check it, or ask for a new one.",

    "datasets.title": "Choose a dataset to review",
    "datasets.empty": "No datasets found.",
    "datasets.items": "items",
    "coordinator.title": "Coordinator",
    "upload.title": "Upload a dataset",
    "upload.name": "Name",
    "upload.file": "JSONL file",
    "upload.submit": "Upload",

    "review.back": "← datasets",
    "review.rated": "reviewed",
    "review.score.hint": "1 = wrong/unnatural · 5 = exactly how a speaker says it. Write any correction and annotation before choosing a score.",
    "review.correction": "Correction (how you would say it)",
    "review.annotation": "Annotation",
    "review.done.title": "All done 🎉",
    "review.done.text": "You have reviewed every item in this dataset. Thank you!",

    "try.title": "Talk with the model",
    "try.note": "Write something in Acehnese and see what the model answers. It is a research model and often wrong — that is the point. Nothing you type here is stored.",
    "try.placeholder": "Tuléh lam basa Aceh…",
    "try.submit": "Send",
    "try.offline": "The model is offline right now. The demo runs on a rented GPU and is switched on for evaluation sessions.",
    "try.wait": "…",
    "draft.notice": "This Acehnese text is an AI draft awaiting correction by native speakers. If something is wrong, please help us fix it.",
  },

  id: {
    "datasets.layer": "Lapisan",
    "field.ind": "Bahasa Indonesia",
    "field.eng": "Bahasa Inggris",
    "field.eng_summary": "Ringkasan bahasa Inggris",
    "site.title": "Aceh NLP",
    "nav.review": "Evaluasi",
    "nav.try": "Bicara dengan model",
    "nav.home": "Tentang proyek",
    "lang.label": "Bahasa",

    "hero.title": "Bahasa hidup di tempat ia dituturkan.",
    "hero.lead": "Bahasa Aceh dibawa di dapur, di atas perahu nelayan, dan di meja kopi, jauh dari data yang melatih model-model hari ini, yang mengenal Aceh dari pilihan orang lain dan mewarisi titik butanya. Kami sekelompok kecil orang dengan latar belakang berbeda, dipertemukan di Pulau Weh oleh rasa ingin tahu dan kepedulian pada bahasa ini, membantu para penutur mengumpulkan kata-kata mereka sendiri dan menentukan apa yang dihitung sebagai data, siapa yang memeriksanya, dan untuk apa. Beginilah kami mulai mendekolonisasi teknologi ini: model bahasa di tangan komunitas menjadi arsip hidup, yang bisa ditanya, dikoreksi, dan diajari, sehingga pengetahuan terus bergerak, seperti selama ini, dari satu suara ke suara berikutnya.",


    "how.title": "Cara kerjanya",
    "loop.view.label": "Tampilan",
    "loop.view.story": "Buku resep",
    "loop.view.ml": "Pipeline ML",
    "loop.ml.intro": "Putaran yang sama dalam istilah pembelajaran mesin.",
    "loop.ml.t1": "Lapisan 1: spesialis",
    "loop.ml.t2": "Lapisan 2: sehari-hari",
    "loop.ml.t3": "Lapisan 3: sintetis",
    "loop.ml.note": "Kalimat hanya naik lapisan setelah ditinjau manusia.",
    "loop.ml.seal": "Disisihkan dari pelatihan. Menilai setiap model baru.",
    "loop.ml.elders": "Spesialis",
    "loop.ml.others": "Penutur sehari-hari",
    "loop.ml.return": "Data yang ditinjau kembali ke dataset.",
    "loop.intro": "Bayangkan dapur keluarga. Juru masak belajar dari satu buku resep, dan keluarga yang menentukan apa yang masuk kembali ke dalamnya.",
    "loop.book.title": "Buku resep",
    "loop.book.plain": "Dataset",
    "loop.t1.title": "Resep para tetua",
    "loop.t1.text": "Diperiksa spesialis. Paling sedikit, paling dipercaya.",
    "loop.t2.title": "Resep tetangga",
    "loop.t2.text": "Penutur sehari-hari dan teks internet.",
    "loop.t3.title": "Resep tulisan mesin",
    "loop.t3.text": "Draf AI sintetis. Paling banyak, paling kurang dipercaya.",
    "loop.book.note": "Resep hanya naik setelah dicicipi orang.",
    "loop.learn.title": "Juru masak mempelajari buku",
    "loop.learn.plain": "Pelatihan",
    "loop.cook.title": "Juru masak",
    "loop.cook.plain": "Model",
    "loop.seal.title": "Resep keluarga yang disegel",
    "loop.seal.plain": "Set uji terkunci",
    "loop.seal.text": "Juru masak tidak pernah membacanya. Resep ini menunjukkan apakah juru masak baru benar-benar lebih baik.",
    "loop.dish.title": "Memasak hidangan baru",
    "loop.dish.plain": "Menghasilkan",
    "loop.taste.title": "Keluarga mencicipi",
    "loop.taste.plain": "Tinjauan manusia: anotasi dan evaluasi",
    "loop.elders.title": "Para tetua (spesialis)",
    "loop.elders.text": "Memberi nilai 1–5, mengoreksi, dan mencatat.",
    "loop.others.title": "Yang lain",
    "loop.others.text": "Untuk saat ini, juga memberi nilai 1–5, mengoreksi, dan mencatat. Nanti: membandingkan dua jawaban atas satu pertanyaan, memberi +1 untuk yang lebih baik dan −1 untuk yang lain.",
    "loop.return": "Yang lolos masuk ke dalam buku.",
    "loop.pause": "Jeda",
    "loop.play": "Putar",

    "people.title": "Orang-orang di baliknya",
    "people.intro": "Kami berenam, tinggal dan bereksperimen bersama di Pulau Weh — begitulah proyek ini bermula. Kami datang dari tempat dan latar belakang yang berbeda:",

    "join.title": "Bergabung dengan proyek",
    "join.p": "Proyek ini butuh banyak jenis bantuan, bukan hanya peninjau. Untuk saat ini semua peran bersifat sukarela.",
    "join.cta": "Mulai mengevaluasi",
    "join.teach.title": "Mengajar atau mempelajari bahasa Aceh",
    "join.teach.text": "Meninjau kalimat dan memutuskan soal ejaan.",
    "join.speak.title": "Berbicara bahasa Aceh",
    "join.speak.text": "Mengoreksi draf dan menulis pemantik percakapan.",
    "join.local.title": "Tinggal di Pulau Weh",
    "join.local.text": "Bantu kami bekerja dengan penuh hormat bersama masyarakat.",
    "join.record.title": "Merekam dan menyalin",
    "join.record.text": "Pinjamkan peralatan atau berlatih menjadi pewawancara. Perekaman dimulai setelah proses persetujuan siap.",
    "join.write.title": "Berbagi tulisan atau menerjemahkan",
    "join.write.text": "Teks bahasa Aceh yang berhak Anda bagikan, atau terjemahan antara bahasa Aceh dan bahasa Indonesia.",
    "join.build.title": "Membangun perangkat lunak",
    "join.build.text": "Alat peninjauan, data, dan pelatihan.",
    "join.compute.title": "Menawarkan komputasi atau dana",
    "join.compute.text": "Waktu GPU, kredit cloud, dan hibah, untuk saat pelatihan sudah siap.",
    "join.legal.title": "Universitas atau hukum",
    "join.legal.text": "Perizinan, persetujuan, dan perlindungan data.",
    "join.story.title": "Desain, tulis, film",
    "join.story.text": "Bantu orang memahami proyek ini dengan jujur.",
    "join.contact.link": "Tulis kepada kami di GitHub",
    "join.contact": "Tulisan di sana bersifat publik, jadi jangan sertakan data pribadi. Alamat email akan segera tersedia.",



    "login.title": "Masuk",
    "login.note": "Tinjauan Anda dicatat dengan email dan dialek Anda agar kami tahu siapa menilai apa. Kami mengirim kode sekali pakai ke email Anda; tidak ada kata sandi.",
    "login.email": "Email",
    "login.name": "Nama",
    "login.name.placeholder": "opsional",
    "login.dialect": "Dialek",
    "login.dialect.none": "— bukan penutur asli —",
    "login.dialect.other": "Lainnya",
    "login.submit": "Kirim kode ke email saya",
    "login.sent": "Kami sudah mengirim kode ke email Anda. Mungkin perlu semenit, jadi periksa juga folder spam.",
    "login.code": "Kode",
    "login.verify": "Masuk",
    "login.back": "Pakai email lain atau kirim lagi",
    "login.limit": "Terlalu banyak kode untuk saat ini. Pakai kode terakhir yang kami kirim, atau coba lagi nanti.",
    "login.later": "Ada masalah di pihak kami. Silakan coba lagi nanti.",
    "login.bademail": "Alamat email itu sepertinya salah. Silakan periksa lagi.",
    "login.out": "Keluar",
    "login.wrong": "Kode itu salah atau sudah kedaluwarsa. Periksa lagi, atau minta kode baru.",

    "datasets.title": "Pilih dataset untuk ditinjau",
    "datasets.empty": "Tidak ada dataset.",
    "datasets.items": "butir",
    "coordinator.title": "Koordinator",
    "upload.title": "Unggah dataset",
    "upload.name": "Nama",
    "upload.file": "Berkas JSONL",
    "upload.submit": "Unggah",

    "review.back": "← dataset",
    "review.rated": "ditinjau",
    "review.score.hint": "1 = salah/tidak wajar · 5 = persis seperti ucapan penutur. Tulis koreksi dan catatan sebelum memilih nilai.",
    "review.correction": "Koreksi (bagaimana Anda mengucapkannya)",
    "review.annotation": "Catatan",
    "review.done.title": "Selesai 🎉",
    "review.done.text": "Anda telah meninjau semua butir dalam dataset ini. Terima kasih!",

    "try.title": "Bicara dengan model",
    "try.note": "Tulis sesuatu dalam bahasa Aceh dan lihat jawaban model. Ini model riset dan sering salah — justru itu intinya. Teks yang Anda ketik tidak disimpan.",
    "try.placeholder": "Tuléh lam basa Aceh…",
    "try.submit": "Kirim",
    "try.offline": "Model sedang tidak aktif. Demo ini berjalan di GPU sewaan dan dinyalakan saat sesi evaluasi.",
    "try.wait": "…",
    "draft.notice": "Teks bahasa Aceh ini masih draf buatan AI yang menunggu koreksi penutur asli. Jika ada yang salah, bantu kami memperbaikinya.",
  },

  // Acehnese: AI DRAFT (Claude, Nov 2026) awaiting native-speaker correction.
  // Source sheet: aceh_nlp/docs/site_strings_ace_draft.md. Replace lines as corrections arrive.
  ace: {
    "datasets.layer": "Lapisan",
    "site.title": "Aceh NLP",
    "nav.review": "Evaluasi",
    "nav.try": "Marit ngon model",
    "nav.home": "Hai proyek nyoe",
    "lang.label": "Basa",
    "hero.title": "Basa udep di teumpat geumarit.",
    "hero.lead": "Basa Aceh geuba lam dapu, ateuh peurahô nelayan, ngon bak meja kupi, jioh nibak data nyang geulatéh model-model jinoe, nyang geuteupeue Aceh dari piléh ureueng laén ngon jipeusaka titèk buta jih. Kamoe saboh kawan ubit nyang meubeda-beda latar, nyang meurumpok di Pulo Weh kareuna hawa keuneuk teupeue ngon peuduli keu basa nyoe, meubantu ureueng nyang meututoe geukumpoi narit droe ngon geupeutentèe peue nyang jeuet keu data, soe nyang pareksa, ngon keu peue. Meunoe kamoe mulai dekolonisasi teknologi nyoe: model basa bak jaroe masyarakat jeuet keu arsip udep, jeuet tatanyong, tapeubeutôi, ngon tapeurunoe, mangat teupeue teutap jijak, lagèe nyang ka sabé, dari saboh su u su laén.",
    "how.title": "Kiban cara keureuja jih",
    "loop.view.label": "Rupa",
    "loop.view.story": "Kitab resep",
    "loop.view.ml": "Pipeline ML",
    "loop.ml.intro": "Putaran nyang sama lam istilah machine learning.",
    "loop.ml.t1": "Lapisan 1: ahli",
    "loop.ml.t2": "Lapisan 2: uroe-uroe",
    "loop.ml.t3": "Lapisan 3: sintetis",
    "loop.ml.note": "Kalimat ék lapisan meunyo ka geupareksa lé ureueng.",
    "loop.ml.seal": "Geupeuasoe nibak latéh. Geunilai tiep model baro.",
    "loop.ml.elders": "Ahli",
    "loop.ml.others": "Ureueng nyang marit uroe-uroe",
    "loop.ml.return": "Data nyang ka geupareksa jiwoe u dataset.",
    "loop.intro": "Bayangkan dapu keluarga. Tukang masak jibeulajai nibak saboh kitab resep, ngon keluarga nyang peutentèe peue nyang jitamong lom lam kitab nyan.",
    "loop.book.title": "Kitab resep",
    "loop.book.plain": "Dataset",
    "loop.t1.title": "Resep ureueng tuha",
    "loop.t1.text": "Geupareksa lé ahli. Paleng dit, paleng geupeucaya.",
    "loop.t2.title": "Resep jiran",
    "loop.t2.text": "Ureueng nyang marit uroe-uroe ngon teks internet.",
    "loop.t3.title": "Resep tuléh mesin",
    "loop.t3.text": "Draf AI sintetis. Paleng le, paleng kureueng geupeucaya.",
    "loop.book.note": "Resep ék meunyo ka geurasa lé ureueng.",
    "loop.learn.title": "Tukang masak jibeulajai kitab",
    "loop.learn.plain": "Latéh",
    "loop.cook.title": "Tukang masak",
    "loop.cook.plain": "Model",
    "loop.seal.title": "Resep keluarga nyang geututôp",
    "loop.seal.plain": "Set uji nyang geukunci",
    "loop.seal.text": "Tukang masak hana tom jibaca. Nyoe jipeudeuh peue tukang masak baro beutôi leubèh gét.",
    "loop.dish.title": "Jimasak idangan baro",
    "loop.dish.plain": "Peuhasé",
    "loop.taste.title": "Keluarga geurasa",
    "loop.taste.plain": "Pareksa ureueng: anotasi ngon evaluasi",
    "loop.elders.title": "Ureueng tuha (ahli)",
    "loop.elders.text": "Geubri nilai 1–5, geupeubeutôi, ngon geucatat.",
    "loop.others.title": "Nyang laén",
    "loop.others.text": "Keu jinoe, neubri nilai 1–5, neupeubeutôi, ngon neubri catatan cit. Teuma: geubandéng dua jaweueb keu saboh teunanyöng, geubri +1 keu nyang leubèh gét ngon −1 keu nyang laén.",
    "loop.return": "Nyang lulôt jitamong lam kitab.",
    "loop.pause": "Piyôh",
    "loop.play": "Puta",
    "people.title": "Ureueng-ureueng di likot jih",
    "people.intro": "Kamoe nam droe, tinggai ngon meucuba-cuba meusajan di Pulo Weh — meunan proyek nyoe geumulai. Kamoe teuka dari teumpat ngon latar nyang meubeda-beda:",
    "join.title": "Tamong lam proyek nyoe",
    "join.p": "Proyek nyoe peureulèe macam-macam bantuan, kon ureueng pareksa mantong. Keu jinoe mandum peran nyan suka rela.",
    "join.cta": "Mulai evaluasi",
    "join.teach.title": "Neumeuajar atawa neubeuet basa Aceh",
    "join.teach.text": "Neupareksa kalimat ngon neupeutentèe ejaan.",
    "join.speak.title": "Neumarit basa Aceh",
    "join.speak.text": "Neupeubeutôi draf ngon neutuléh peunyo keu meututô.",
    "join.local.title": "Neudiëm di Pulo Weh",
    "join.local.text": "Neubantu kamoe meukeureuja ngon hormat ngon masyarakat.",
    "join.record.title": "Rekam ngon tuléh",
    "join.record.text": "Neupeuinjam alat atawa neubeuet jeuet keu pewawancara. Rekaman geumulai lheueh proses persetujuan ka siap.",
    "join.write.title": "Neubagi tulisan atawa neupeusalén",
    "join.write.text": "Teks basa Aceh nyang na hak neubagi, atawa peusalén antara basa Aceh ngon basa Indonesia.",
    "join.build.title": "Neupeugot software",
    "join.build.text": "Alat pareksa, data, ngon latihan.",
    "join.compute.title": "Neubri komputasi atawa dana",
    "join.compute.text": "Wate GPU, kredit cloud, ngon hibah, keu watée latihan ka siap.",
    "join.legal.title": "Universitas atawa hukôm",
    "join.legal.text": "Izin, persetujuan, ngon peulindông data.",
    "join.story.title": "Desain, tuléh, film",
    "join.story.text": "Neubantu ureueng meuphôm proyek nyoe deungon jujô.",
    "join.contact.link": "Neutuléh keu kamoe bak GitHub",
    "join.contact": "Tulisan nyan jeuet geubaca lé ban mandum ureueng, nyan pasai bèk neupeutamong data droe. Alamat email hana trép teuk na.",
    "login.title": "Tamong",
    "login.note": "Hasé pareksa droeneuh geucatat ngon email ngon dialék droeneuh mangat kamoe meuteupeue soe nyang nilai peue. Kamoe peugisa kode sigo pakai u email droeneuh; hana kata sandi.",
    "login.email": "Email",
    "login.name": "Nan",
    "login.name.placeholder": "hana wajéb",
    "login.dialect": "Dialék",
    "login.dialect.none": "— kon ureueng Aceh asli —",
    "login.dialect.other": "Laén",
    "login.submit": "Peugisa kode u email lôn",
    "login.sent": "Kamoe ka peugisa kode u email droeneuh. Mungkin peureulèe sigeundèt, nyan pasai neukalon cit folder spam.",
    "login.code": "Kode",
    "login.verify": "Tamong",
    "login.back": "Pakai email laén atawa peugisa lom",
    "login.limit": "Ka le that kode keu jinoe. Neupakai kode nyang paléng akhé, atawa neucuba lom teuma.",
    "login.later": "Na masalah bak kamoe. Neucuba lom teuma.",
    "login.bademail": "Alamat email nyan meunan salah. Neupareksa lom.",
    "login.out": "Teubiet",
    "login.wrong": "Kode nyan salah atawa ka abéh watèe. Neupareksa lom, atawa neulakèe kode barô.",
    "datasets.title": "Neupiléh dataset nyang neupareksa",
    "datasets.empty": "Hana dataset.",
    "datasets.items": "butir",
    "coordinator.title": "Koordinator",
    "upload.title": "Peuék dataset",
    "upload.name": "Nan",
    "upload.file": "File JSONL",
    "upload.submit": "Peuék",
    "review.back": "← dataset",
    "review.rated": "ka geupareksa",
    "review.score.hint": "1 = salah/hana wajar · 5 = sabé lagèe ureueng Aceh marit. Neutuléh peubeutôi ngon catatan sigohlom neupiléh nilai.",
    "review.correction": "Peubeutôi (kiban droeneuh marit)",
    "review.annotation": "Catatan",
    "review.done.title": "Ka lheueh 🎉",
    "review.done.text": "Droeneuh ka neupareksa bandum butir lam dataset nyoe. Teurimong geunaséh!",
    "try.title": "Marit ngon model",
    "try.note": "Neutuléh peue-peue lam basa Aceh dan neukalon kiban model jaweueb. Nyoe model risèt ngon kayém salah — nyan keuh inti jih. Teks nyang neutuléh hana geusimpan.",
    "try.placeholder": "Tuléh lam basa Aceh…",
    "try.submit": "Peugisa",
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
