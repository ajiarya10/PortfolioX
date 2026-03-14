/**
 * Theme Management Utility
 * Handles dark/light mode switching
 */

/**
 * Initialize theme toggle functionality
 */
export function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    // Load saved theme or use system preference
    loadTheme();

    // Add click handler
    themeToggle.addEventListener('click', toggleTheme);
}

/**
 * Load theme from localStorage or system preference
 */
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
        document.documentElement.classList.remove('dark');
    } else {
        // Use system preference
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
        }
    }
}

/**
 * Toggle between dark and light theme
 */
function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    console.log(`Theme changed to: ${isDark ? 'dark' : 'light'}`);
}

/**
 * Get current theme
 */
export function getCurrentTheme() {
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}
