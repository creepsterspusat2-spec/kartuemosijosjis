
// ================================================
// 1. DATA KARTU EMOSI
// ================================================

const emotions = [
    {
        id: "senang",
        name: "Senang",
        subtitle: "Perasaan bahagia",
        color: "#FFE9A8",
        emoji: "😊",

        description:
            "Senang adalah perasaan bahagia yang membuat hati kita terasa nyaman. " +
            "Saat senang, kita mungkin ingin tersenyum, tertawa, atau bermain.",

        situation:
            "Kamu merasa senang ketika mendapat hadiah, bermain bersama teman, " +
            "atau berhasil menyelesaikan tugas dengan baik.",

        tips:
            "Nikmati perasaan bahagiamu! Kamu bisa tersenyum, " +
            "bercerita kepada orang lain, atau berbagi kebahagiaan dengan teman.",

        image: "assets/images/senang.png",
        audio: "assets/audio/senang.mp3"
    },

    {
        id: "sedih",
        name: "Sedih",
        subtitle: "Perasaan tidak bahagia",
        color: "#DCEEFF",
        emoji: "😢",

        description:
            "Sedih adalah perasaan ketika hati kita terasa tidak nyaman. " +
            "Kita mungkin ingin menangis atau diam sejenak.",

        situation:
            "Kamu merasa sedih ketika mainan kesayangan rusak, " +
            "kehilangan sesuatu, atau tidak bisa bermain bersama teman.",

        tips:
            "Tidak apa-apa jika kamu menangis. " +
            "Cobalah bercerita kepada ibu, ayah, atau guru. " +
            "Kamu juga boleh meminta pelukan jika menginginkannya.",

        image: "assets/images/sedih.png",
        audio: "assets/audio/sedih.mp3"
    },

    {
        id: "marah",
        name: "Marah",
        subtitle: "Perasaan kesal",
        color: "#FFD9D1",
        emoji: "😠",

        description:
            "Marah adalah perasaan ketika kita merasa kesal atau sesuatu " +
            "tidak berjalan sesuai keinginan. Tubuh kita mungkin terasa panas.",

        situation:
            "Kamu merasa marah ketika teman mengambil mainanmu tanpa izin " +
            "atau ketika kamu tidak mendapatkan giliran bermain.",

        tips:
            "Berhenti sebentar. Tarik napas dalam-dalam sebanyak 3 kali. " +
            "Hitung perlahan, lalu ceritakan apa yang membuatmu marah. " +
            "Ingat, marah boleh, menyakiti orang lain tidak boleh.",

        image: "assets/images/marah.png",
        audio: "assets/audio/marah.mp3"
    },

    {
        id: "takut",
        name: "Takut",
        subtitle: "Perasaan khawatir",
        color: "#E8E2FF",
        emoji: "😨",

        description:
            "Takut adalah perasaan ketika kita merasa ada sesuatu yang " +
            "menyeramkan atau membuat kita tidak aman.",

        situation:
            "Kamu merasa takut ketika mendengar suara petir yang keras, " +
            "berada di tempat gelap, atau bertemu sesuatu yang belum dikenal.",

        tips:
            "Cari tempat yang aman dan dekat dengan orang yang kamu percaya. " +
            "Tarik napas perlahan. Kamu boleh meminta bantuan " +
            "ibu, ayah, atau guru.",

        image: "assets/images/takut.png",
        audio: "assets/audio/takut.mp3"
    },

    {
        id: "terkejut",
        name: "Terkejut",
        subtitle: "Perasaan kaget",
        color: "#FFE1F0",
        emoji: "😲",

        description:
            "Terkejut adalah perasaan ketika sesuatu terjadi secara tiba-tiba " +
            "dan kita tidak menyangka hal tersebut.",

        situation:
            "Kamu merasa terkejut ketika mendengar suara keras, " +
            "melihat hadiah yang tidak disangka, atau seseorang tiba-tiba menyapamu.",

        tips:
            "Tenangkan tubuhmu terlebih dahulu. " +
            "Tarik napas perlahan dan lihat apa yang sebenarnya terjadi. " +
            "Jika merasa tidak aman, mintalah bantuan orang dewasa.",

        image: "assets/images/terkejut.png",
        audio: "assets/audio/terkejut.mp3"
    },

    {
        id: "jijik",
        name: "Jijik",
        subtitle: "Perasaan tidak suka",
        color: "#DDF6E7",
        emoji: "🤢",

        description:
            "Jijik adalah perasaan tidak nyaman terhadap sesuatu, " +
            "misalnya bau yang tidak enak atau makanan yang terlihat aneh.",

        situation:
            "Kamu merasa jijik ketika mencium bau sampah, " +
            "melihat makanan basi, atau menemukan sesuatu yang kotor.",

        tips:
            "Menjauhlah dari benda yang membuatmu jijik. " +
            "Jangan menyentuh benda kotor. " +
            "Cuci tangan menggunakan sabun dan mintalah bantuan orang dewasa.",

        image: "assets/images/jijik.png",
        audio: "assets/audio/jijik.mp3"
    },

    {
        id: "bangga",
        name: "Bangga",
        subtitle: "Perasaan puas",
        color: "#FFF0C7",
        emoji: "🤩",

        description:
            "Bangga adalah perasaan senang dan puas ketika kita berhasil " +
            "melakukan sesuatu yang baik atau berusaha dengan sungguh-sungguh.",

        situation:
            "Kamu merasa bangga ketika berhasil belajar naik sepeda, " +
            "menyelesaikan puzzle, atau membantu teman.",

        tips:
            "Berikan apresiasi kepada dirimu sendiri. " +
            "Kamu bisa berkata, 'Aku sudah berusaha dengan baik!' " +
            "Tetap rendah hati dan hargai usaha teman-temanmu juga.",

        image: "assets/images/bangga.png",
        audio: "assets/audio/bangga.mp3"
    },

    {
        id: "malu",
        name: "Malu",
        subtitle: "Perasaan canggung",
        color: "#F8DDF5",
        emoji: "😊",

        description:
            "Malu adalah perasaan canggung ketika kita menjadi perhatian orang lain " +
            "atau melakukan sesuatu yang membuat kita merasa tidak nyaman.",

        situation:
            "Kamu merasa malu ketika diminta bernyanyi di depan kelas, " +
            "bertemu orang baru, atau ketika semua teman melihatmu.",

        tips:
            "Tidak apa-apa merasa malu. " +
            "Cobalah tersenyum dan lakukan sesuatu secara perlahan. " +
            "Kamu tidak harus langsung berani. " +
            "Mintalah dukungan dari orang yang kamu percaya.",

        image: "assets/images/malu.png",
        audio: "assets/audio/malu.mp3"
    }
];


// ================================================
// 2. DOM ELEMENTS
// ================================================

const emotionGrid = document.getElementById("emotion-grid");

const cardCount = document.getElementById("card-count");

const modal = document.getElementById("emotion-modal");

const modalOverlay = document.getElementById("modal-overlay");

const modalClose = document.getElementById("modal-close");

const modalHeader = document.getElementById("modal-header");

const modalImage = document.getElementById("modal-image");

const modalTitle = document.getElementById("modal-title");

const modalDescription = document.getElementById("modal-description");

const modalSituation = document.getElementById("modal-situation");

const modalTips = document.getElementById("modal-tips");

const btnSpeak = document.getElementById("btn-speak");

const btnFinish = document.getElementById("btn-finish");


// ================================================
// 3. SVG PLACEHOLDER
// ================================================

/**
 * Membuat SVG placeholder dengan emoji besar.
 * Dipakai jika gambar PNG/JPG tidak tersedia.
 */

function createPlaceholder(emoji, color) {

    const svg = `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            width="200"
            height="200"
            role="img"
            aria-label="Ilustrasi emosi ${emoji}"
        >
            <defs>
                <radialGradient id="bg">
                    <stop offset="0%" stop-color="#ffffff"/>
                    <stop offset="100%" stop-color="${color}"/>
                </radialGradient>
            </defs>

            <circle cx="100" cy="100" r="98" fill="url(#bg)"/>

            <circle cx="100" cy="100" r="80" fill="#ffffff" opacity="0.45"/>

            <text
                x="100"
                y="104"
                font-size="125"
                text-anchor="middle"
                dominant-baseline="middle"
            >${emoji}</text>
        </svg>
    `;

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}


// ================================================
// 4. EFEK PARTIKEL (EMOJI MELAYANG)
// ================================================

/**
 * Partikel kecil yang muncul di sekitar gambar
 * sesuai dengan emosinya.
 */

const emotionEffects = {
    senang:   ["✨", "🎵", "🌟", "✨"],
    sedih:    ["💧", "💧", "💧"],
    marah:    ["💢", "💢", "🔥"],
    takut:    ["💦", "💦", "💦"],
    terkejut: ["❗", "❗", "✨"],
    jijik:    ["💨", "💨", "💚"],
    bangga:   ["⭐", "🌟", "🎉", "✨"],
    malu:     ["💗", "💗", "🌸"]
};

// Posisi partikel di sekeliling gambar.
const effectSlots = [
    { x: "2%",  y: "6%"  },
    { x: "84%", y: "2%"  },
    { x: "88%", y: "62%" },
    { x: "-2%", y: "64%" }
];

function createEffects(emotion) {

    const fragment = document.createDocumentFragment();

    const icons = emotionEffects[emotion.id] || ["✨"];

    icons.forEach((icon, index) => {

        const span = document.createElement("span");

        const slot = effectSlots[index % effectSlots.length];

        span.className = "fx";

        span.textContent = icon;

        span.setAttribute("aria-hidden", "true");

        span.style.setProperty("--x", slot.x);

        span.style.setProperty("--y", slot.y);

        span.style.setProperty("--delay", `${index * 0.5}s`);

        fragment.appendChild(span);

    });

    return fragment;
}


// ================================================
// 5. IMAGE FALLBACK HANDLER
// ================================================

/**
 * Membuat <img> dengan fallback ke placeholder.
 */

function createImageElement(emotion, altText, lazy = false) {

    const image = document.createElement("img");

    image.src = emotion.image;

    image.alt = altText;

    image.decoding = "async";

    if (lazy) {
        image.loading = "lazy";
    }

    image.onerror = function () {

        this.onerror = null;

        this.src = createPlaceholder(
            emotion.emoji,
            emotion.color
        );

    };

    return image;
}


/**
 * Gambar emosi untuk kartu.
 * Kelas "emo-<id>" dipakai CSS untuk animasi khas tiap emosi.
 */

function createEmotionImage(emotion, className = "emotion-image") {

    const imageContainer = document.createElement("div");

    imageContainer.className = `${className} emo-${emotion.id}`;

    imageContainer.appendChild(
        createImageElement(
            emotion,
            `Ilustrasi emosi ${emotion.name}`,
            true
        )
    );

    imageContainer.appendChild(createEffects(emotion));

    return imageContainer;
}


// ================================================
// 6. RENDER EMOTION CARDS
// ================================================

function renderEmotionCards() {

    emotionGrid.innerHTML = "";

    cardCount.textContent = emotions.length;

    emotions.forEach((emotion, index) => {

        const card = document.createElement("button");

        card.type = "button";

        card.className = "emotion-card";

        card.style.setProperty("--card-color", emotion.color);

        // Dipakai untuk animasi masuk dan napas yang bergantian.
        card.style.setProperty("--i", index);

        card.setAttribute(
            "aria-label",
            `Pelajari emosi ${emotion.name}`
        );

        card.innerHTML = `
            <span class="emotion-name">
                ${emotion.name}
            </span>

            <span class="emotion-subtitle">
                ${emotion.subtitle}
            </span>

            <span class="card-action">
                Ayo Belajar! ✨
            </span>
        `;

        card.insertBefore(
            createEmotionImage(emotion),
            card.firstChild
        );

        card.addEventListener("click", () => {

            openEmotionModal(emotion);

            playEmotionAudio(emotion);

        });

        emotionGrid.appendChild(card);

    });

}


// ================================================
// 7. MODAL DETAIL EMOSI
// ================================================

let currentEmotion = null;


function openEmotionModal(emotion) {

    currentEmotion = emotion;

    modalHeader.style.setProperty("--modal-color", emotion.color);

    modalTitle.textContent = emotion.name;

    modalDescription.textContent = emotion.description;

    modalSituation.textContent = emotion.situation;

    modalTips.textContent = emotion.tips;

    // Bangun ulang gambar besar (animasi masuk diulang setiap dibuka).
    modalImage.className = `modal-image-container emo-${emotion.id}`;

    modalImage.innerHTML = "";

    const figure = document.createElement("div");

    figure.className = "modal-figure";

    figure.appendChild(
        createImageElement(emotion, `Ilustrasi ${emotion.name}`)
    );

    modalImage.appendChild(figure);

    modalImage.appendChild(createEffects(emotion));

    modal.classList.add("active");

    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    modalClose.focus();

}


function closeEmotionModal() {

    modal.classList.remove("active");

    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    stopEmotionAudio();

    currentEmotion = null;

}


// ================================================
// 8. AUDIO PLAYBACK
// ================================================

let currentAudio = null;

// Setiap pemutaran baru mendapat nomor baru supaya
// callback dari pemutaran lama tidak mengganggu.
let playbackToken = 0;

let isSpeaking = false;

let indonesianVoice = null;


function setSpeaking(state) {

    isSpeaking = state;

    modal.classList.toggle("speaking", state);

    btnSpeak.classList.toggle("is-speaking", state);

    btnSpeak.textContent = state
        ? "⏹ Berhenti"
        : "🔊 Dengarkan";

}


function loadIndonesianVoice() {

    if (!("speechSynthesis" in window)) return;

    const voices = window.speechSynthesis.getVoices();

    indonesianVoice =
        voices.find((voice) =>
            voice.lang.toLowerCase().replace("_", "-").startsWith("id")
        ) || null;

}


function stopEmotionAudio() {

    playbackToken++;

    if (currentAudio) {

        currentAudio.pause();

        currentAudio.currentTime = 0;

        currentAudio = null;

    }

    if ("speechSynthesis" in window) {

        window.speechSynthesis.cancel();

    }

    setSpeaking(false);

}


/**
 * Menyusun teks yang dibacakan: nama emosi lalu penjelasannya.
 * Dipecah per kalimat agar tidak terpotong di beberapa browser.
 */

function buildNarration(emotion) {

    const text = [
        `${emotion.name}!`,
        emotion.description,
        emotion.situation,
        emotion.tips
    ].join(" ");

    return text
        .split(/(?<=[.!?])\s+/)
        .map((part) => part.trim())
        .filter(Boolean);

}


/**
 * Prioritas:
 * 1. File MP3 lokal (emotion.audio), jika ada.
 * 2. Suara browser (SpeechSynthesis) membacakan penjelasan.
 */

function playEmotionAudio(emotion) {

    stopEmotionAudio();

    const token = playbackToken;

    const audio = new Audio(emotion.audio);

    currentAudio = audio;

    audio.addEventListener("ended", () => {

        if (token === playbackToken) {

            currentAudio = null;

            setSpeaking(false);

        }

    });

    audio.play()
        .then(() => {

            if (token === playbackToken) {

                setSpeaking(true);

            }

        })
        .catch(() => {

            // File MP3 tidak ada / gagal, pakai suara browser.
            if (token !== playbackToken) return;

            currentAudio = null;

            speakEmotion(emotion, token);

        });

}


/**
 * Membacakan penjelasan emosi dengan Web Speech API.
 * Mengembalikan false jika browser tidak mendukung.
 */

function speakEmotion(emotion, token = playbackToken) {

    if (!("speechSynthesis" in window)) return false;

    const synth = window.speechSynthesis;

    const parts = buildNarration(emotion);

    let index = 0;

    const speakNext = () => {

        if (token !== playbackToken) return;

        if (index >= parts.length) {

            setSpeaking(false);

            return;

        }

        const utterance = new SpeechSynthesisUtterance(parts[index]);

        index++;

        utterance.lang = "id-ID";

        utterance.rate = 0.9;

        utterance.pitch = 1.15;

        utterance.volume = 1;

        if (indonesianVoice) {

            utterance.voice = indonesianVoice;

        }

        utterance.onend = speakNext;

        utterance.onerror = (event) => {

            if (token !== playbackToken) return;

            if (
                event.error === "canceled" ||
                event.error === "interrupted"
            ) {
                return;
            }

            setSpeaking(false);

        };

        synth.speak(utterance);

    };

    setSpeaking(true);

    // Jeda singkat setelah cancel() agar Chrome tidak melewatkan suara.
    setTimeout(speakNext, 80);

    return true;

}


// ================================================
// 9. EVENT HANDLERS
// ================================================

btnSpeak.addEventListener("click", () => {

    if (!currentEmotion) return;

    // Klik saat suara berjalan = berhenti.
    if (isSpeaking) {

        stopEmotionAudio();

        return;

    }

    playEmotionAudio(currentEmotion);

});

modalClose.addEventListener("click", closeEmotionModal);

modalOverlay.addEventListener("click", closeEmotionModal);

btnFinish.addEventListener("click", closeEmotionModal);

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        modal.classList.contains("active")
    ) {

        closeEmotionModal();

    }

});


// ================================================
// 10. INITIALIZATION
// ================================================

document.addEventListener("DOMContentLoaded", () => {

    renderEmotionCards();

    if ("speechSynthesis" in window) {

        loadIndonesianVoice();

        // Daftar suara dimuat secara asinkron di beberapa browser.
        window.speechSynthesis.addEventListener(
            "voiceschanged",
            loadIndonesianVoice
        );

    }

});
