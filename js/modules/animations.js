// js/modules/animations.js
export function initAnimations() {
    // Intersection Observer for fade-in effects
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, { threshold: 0.1, rootMargin: '50px' });
    
    // Observe elements
    document.querySelectorAll('.project-card, .skill-tag, .stat-number').forEach(el => {
        observer.observe(el);
    });
}

export function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

export function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('glass', 'bg-white/80', 'dark:bg-[#0a0a0a]/80', 'shadow-lg');
        } else {
            header.classList.remove('glass', 'bg-white/80', 'dark:bg-[#0a0a0a]/80', 'shadow-lg');
        }
    });
}