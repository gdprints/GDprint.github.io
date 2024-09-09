const translations = {
    en: {
        title: "Davit Kartashyan!",
        description: "Chieft Executive Officer",
        content: "Hear about us",
		call:"Call Me",
    },
    hy: {
        title: "Դավիթ Քարտաշյան",
        description: "Գլխավոր գործադիր տնօրեն",
        content: "Լսեք մեր մասին",
		call:"Զանգիր մեզ",
    },
    ru: {
        title: "Давид Карташян",
        description: "Главный исполнительный директор",
        content: "Узнайте о нас",
		call:"Позвоните мне",
    },
};

// Store the currently selected language
let selectedLanguage = 'en';

// Function to toggle the visibility of the dropdown menu
function toggleDropdown() {
    const dropdown = document.getElementById("languageDropdown");
    dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
}

// Function to translate the page based on the selected language
function translatePage(language) {
    const elementsToTranslate = document.querySelectorAll("[data-translate]");
    
    elementsToTranslate.forEach((element) => {
        const key = element.getAttribute("data-translate");
        element.textContent = translations[language][key];
    });

    selectedLanguage = language; // Update the selected language
    document.getElementById("audioButton").disabled = false; // Enable the audio button
    toggleDropdown(); // Close the dropdown after selecting a language
}

// Function to play audio translation based on the selected language
function playAudio() {
    const audioElements = {
        en: document.getElementById("audio-en"),
        hy: document.getElementById("audio-hy"),
        ru: document.getElementById("audio-ru"),
    };

    // Pause all audios first
    Object.values(audioElements).forEach(audio => audio.pause());

    // Play the selected language audio
    audioElements[selectedLanguage].play();
}

// Set default language on page load
document.addEventListener("DOMContentLoaded", function() {
    translatePage('en'); // Default to English
});
