import { languages } from "../config/languages";

export function getInitialLanguage() {
    // idioma salvo
    const savedLang = localStorage.getItem('lang');

    if(languages.includes(savedLang)) {
        return savedLang;
    }

    // Idioma do navegador
    const browserLang = navigator.language?.toLowerCase().slice(0,2);

    // Português
    if (browserLang === 'pt') {
        return 'pt';
    } else {
        // Fallback internacional
        return 'en';
    }
}