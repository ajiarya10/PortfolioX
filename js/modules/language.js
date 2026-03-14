// js/modules/language.js
import { translations } from './config.js';

let currentLanguage = 'id';

export function initLanguageToggle() {
    const langButtons = document.querySelectorAll('.lang-btn');
    if (!langButtons.length) return;
    
    // Load saved language
    const savedLang = localStorage.getItem('language');
    if (savedLang && (savedLang === 'en' || savedLang === 'id')) {
        currentLanguage = savedLang;
    }
    
    // Update active button
    updateActiveButtons(langButtons);
    
    // Add click handlers
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang === currentLanguage) return;
            
            currentLanguage = lang;
            localStorage.setItem('language', lang);
            document.documentElement.lang = lang;
            
            updateActiveButtons(langButtons);
            
            // Trigger re-render
            window.dispatchEvent(new CustomEvent('languageChanged'));
        });
    });
}

function updateActiveButtons(buttons) {
    buttons.forEach(btn => {
        btn.classList.remove('active', 'bg-blue-500', 'text-white');
        if (btn.dataset.lang === currentLanguage) {
            btn.classList.add('active', 'bg-blue-500', 'text-white');
        }
    });
}

export function translate(key) {
    if (!translations[currentLanguage] || !translations[currentLanguage][key]) {
        console.warn(`Translation missing: ${key}`);
        return key;
    }
    return translations[currentLanguage][key];
}

export function getCurrentLanguage() {
    return currentLanguage;
}

// Add getCurrentLanguage to translate function for access
translate.getCurrentLanguage = getCurrentLanguage;