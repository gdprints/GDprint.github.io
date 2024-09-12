// Translation data for different languages
const translations = {
	en: {
		vcard_name: "Harutyun Chalikyan",
		vcard_info: "Director of an online printing house",
		vcard_tel: "Call Now",
		about_us: "About Us",
		Contact_us: "Contact us",
		save: "Save Contact",
		vcard_web: "Website",
		vcard_services: "Services",
		vcard_copy: "Copy Email",
	},
	hy: {
		vcard_name: "Հարություն Չալիկյան",
		vcard_info: "Առցանց տպարանի տնօրեն",
		vcard_tel: "Զանգահարեք հիմա",
		about_us: "Մեր մասին",
		Contact_us: "Կապվեք մեզ հետ",
		save: "Պահպանել կոնտակտը",
		vcard_web: "Կայք",
		vcard_services: "Ծառայություններ",
		vcard_copy: "Պատճենել էլ",
	},
	ru: {
		vcard_name: "Арутюн Чаликян",
		vcard_info: "Директор интернет-типографии",
		vcard_tel: "Позвоните сейчас",
		about_us: "О нас",
		Contact_us: "Связаться с нами",
		save: "Сохранить контакт",
		vcard_web: "Веб-сайт",
		vcard_services: "Услуги",
		vcard_copy: "Копировать эл.",
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
