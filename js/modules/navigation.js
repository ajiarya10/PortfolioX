// js/modules/navigation.js
import { translate } from './language.js';

export function initNavigation() {
    const header = document.getElementById('header');
    if (!header) return;
    
    header.innerHTML = `
        <nav class="container mx-auto px-6 flex justify-between items-center">
            <a href="#" class="text-xl font-bold tracking-tight hover:text-blue-500 transition-colors">Adjie Arya</a>
            <div class="hidden md:flex items-center space-x-8">
                <a href="#work" class="text-sm font-medium hover:text-blue-500 transition-colors">${translate('navWork')}</a>
                <a href="#about" class="text-sm font-medium hover:text-blue-500 transition-colors">${translate('navAbout')}</a>
                <a href="#contact" class="text-sm font-medium hover:text-blue-500 transition-colors">${translate('navContact')}</a>
            </div>
            <div class="flex items-center gap-3">
                <button id="theme-toggle" class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <i class="fas fa-moon dark:hidden"></i>
                    <i class="fas fa-sun hidden dark:block"></i>
                </button>
                <button id="mobile-menu-btn" class="md:hidden w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800">
                    <i class="fas fa-bars text-xl"></i>
                </button>
            </div>
        </nav>
        
        <div id="mobile-menu" class="hidden md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-gray-800 py-4">
            <div class="container mx-auto px-6 flex flex-col space-y-4">
                <a href="#work" class="mobile-link py-2 text-lg font-medium hover:text-blue-500 transition-colors">${translate('navWork')}</a>
                <a href="#about" class="mobile-link py-2 text-lg font-medium hover:text-blue-500 transition-colors">${translate('navAbout')}</a>
                <a href="#contact" class="mobile-link py-2 text-lg font-medium hover:text-blue-500 transition-colors">${translate('navContact')}</a>
            </div>
        </div>
    `;
}

export function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!menuBtn || !mobileMenu) return;
    
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const icon = menuBtn.querySelector('i');
        if (mobileMenu.classList.contains('hidden')) {
            icon.className = 'fas fa-bars text-xl';
        } else {
            icon.className = 'fas fa-times text-xl';
        }
    });
    
    // Close menu when clicking links
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            const icon = menuBtn.querySelector('i');
            if (icon) icon.className = 'fas fa-bars text-xl';
        });
    });
}