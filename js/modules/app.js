// js/modules/app.js
import { initLanguageToggle } from './language.js';
import { initThemeToggle } from './theme.js';
import { initNavigation, initMobileMenu } from './navigation.js';
import { initHero, initWork, initAbout, initStats, initContact, initFooter } from './sections.js';
import { initAnimations, initSmoothScroll, initHeaderScroll } from './animations.js';

export function initApp() {
    console.log('Initializing portfolio...');
    
    // Hide loading screen
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1000);
    }
    
    // Initialize all components
    initLanguageToggle();
    initNavigation();
    initHero();
    initWork();
    initAbout();
    initStats();
    initContact();
    initFooter();
    
    // Initialize features
    initThemeToggle();
    initMobileMenu();
    initSmoothScroll();
    initHeaderScroll();
    initAnimations();
    
    // Re-render on language change
    window.addEventListener('languageChanged', () => {
        initNavigation();
        initHero();
        initWork();
        initAbout();
        initStats();
        initContact();
        initFooter();
        initMobileMenu(); // Re-initialize mobile menu after render
    });
    
    console.log('Portfolio initialized!');
}

// Auto-initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}