// js/modules/sections.js
import { translate } from './language.js';
import { portfolioData } from './config.js';

export function initHero() {
    const hero = document.getElementById('hero');
    if (!hero) return;
    
    hero.innerHTML = `
        <div class="container mx-auto px-6">
            <div class="max-w-4xl">
                <div class="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm mb-8 animate-fade-in">
                    <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span class="text-gray-600 dark:text-gray-400">${translate('heroAvailable')}</span>
                </div>
                
                <h1 class="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 animate-slide-up">
                    ${translate('heroTitle1')}<br>
                    <span class="text-blue-500">${translate('heroTitle2')}</span>
                </h1>
                
                <p class="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed animate-slide-up" style="animation-delay: 0.1s">
                    ${translate('heroDescription')}
                </p>
                
                <div class="flex flex-col sm:flex-row gap-4 animate-slide-up" style="animation-delay: 0.2s">
                    <a href="#work" class="group px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium hover:bg-blue-500 dark:hover:bg-blue-500 dark:hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                        ${translate('heroBtnWork')}
                        <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                    </a>
                    <a href="#contact" class="group px-8 py-4 border border-gray-300 dark:border-gray-700 rounded-full font-medium hover:border-blue-500 hover:text-blue-500 transition-all duration-300 flex items-center justify-center gap-2">
                        ${translate('heroBtnContact')}
                        <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                    </a>
                </div>
            </div>
        </div>
    `;
}

export function initWork() {
    const work = document.getElementById('work');
    if (!work) return;
    
    const getCategoryBadge = (project) => {
        if (project.badge) {
            return `<span class="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4">${translate(project.badge)}</span>`;
        }
        
        switch(project.category) {
            case 'featured':
                return `<span class="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4">${translate('projectFeatured')}</span>`;
            case 'blockchain':
                return `<span class="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-4">${translate('projectBlockchain')}</span>`;
            case 'webdesign':
                return `<span class="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium mb-4">${translate('projectWebDesign')}</span>`;
            default:
                return '';
        }
    };
    
    work.innerHTML = `
        <div class="container mx-auto px-6">
            <div class="max-w-2xl mb-16">
                <h2 class="text-4xl md:text-5xl font-bold mb-4">${translate('workTitle')}</h2>
                <p class="text-xl text-gray-600 dark:text-gray-400">${translate('workSubtitle')}</p>
            </div>
            
            <div class="space-y-24">
                ${portfolioData.projects.map((project, index) => {
                    const isEven = index % 2 === 0;
                    const title = project.title.startsWith('project') ? translate(project.title) : project.title;
                    const description = translate(project.description.en);
                    const badge = getCategoryBadge(project);
                    
                    return `
                        <div class="project-card group grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                            ${isEven ? `
                                <!-- Image on left for even index -->
                                <div class="relative order-2 md:order-1">
                                    <div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gray-100 dark:bg-gray-800">
                                        <img src="${project.image}" 
                                             alt="${title}" 
                                             class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                             loading="lazy"
                                             onerror="this.src='https://via.placeholder.com/600x400?text=${encodeURIComponent(title)}'">
                                    </div>
                                    <div class="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                                        <span class="text-sm">${project.year}</span>
                                    </div>
                                    ${project.metrics ? `
                                        <div class="absolute -bottom-4 -left-4 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-lg text-sm font-medium">
                                            ${project.metrics}
                                        </div>
                                    ` : ''}
                                </div>
                                
                                <!-- Content on right for even index -->
                                <div class="order-1 md:order-2">
                                    ${badge}
                                    <h3 class="text-3xl md:text-4xl font-bold mb-4">${title}</h3>
                                    <p class="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                        ${description}
                                    </p>
                                    <div class="flex flex-wrap gap-2 mb-6">
                                        ${project.technologies.map(tech => 
                                            `<span class="skill-tag px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-all duration-300 cursor-default">${tech}</span>`
                                        ).join('')}
                                    </div>
                                    <div class="flex flex-wrap gap-4">
                                        ${project.links.project ? `
                                            <a href="${project.links.project}" target="_blank" class="text-blue-500 font-medium hover:gap-2 transition-all duration-300 flex items-center gap-1">
                                                ${translate('viewProject')} <i class="fas fa-arrow-right text-sm"></i>
                                            </a>
                                        ` : ''}
                                        ${project.links.demo ? `
                                            <a href="${project.links.demo}" target="_blank" class="text-green-500 font-medium hover:gap-2 transition-all duration-300 flex items-center gap-1">
                                                ${translate('liveDemo')} <i class="fas fa-external-link-alt text-sm"></i>
                                            </a>
                                        ` : ''}
                                        ${project.links.github ? `
                                            <a href="${project.links.github}" target="_blank" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                                                <i class="fab fa-github text-xl"></i>
                                            </a>
                                        ` : ''}
                                    </div>
                                </div>
                            ` : `
                                <!-- Content on left for odd index -->
                                <div>
                                    ${badge}
                                    <h3 class="text-3xl md:text-4xl font-bold mb-4">${title}</h3>
                                    <p class="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                        ${description}
                                    </p>
                                    <div class="flex flex-wrap gap-2 mb-6">
                                        ${project.technologies.map(tech => 
                                            `<span class="skill-tag px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-all duration-300 cursor-default">${tech}</span>`
                                        ).join('')}
                                    </div>
                                    <div class="flex flex-wrap gap-4">
                                        ${project.links.project ? `
                                            <a href="${project.links.project}" target="_blank" class="text-blue-500 font-medium hover:gap-2 transition-all duration-300 flex items-center gap-1">
                                                ${translate('viewProject')} <i class="fas fa-arrow-right text-sm"></i>
                                            </a>
                                        ` : ''}
                                        ${project.links.demo ? `
                                            <a href="${project.links.demo}" target="_blank" class="text-green-500 font-medium hover:gap-2 transition-all duration-300 flex items-center gap-1">
                                                ${translate('liveDemo')} <i class="fas fa-external-link-alt text-sm"></i>
                                            </a>
                                        ` : ''}
                                        ${project.links.github ? `
                                            <a href="${project.links.github}" target="_blank" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                                                <i class="fab fa-github text-xl"></i>
                                            </a>
                                        ` : ''}
                                    </div>
                                </div>
                                
                                <!-- Image on right for odd index -->
                                <div class="relative">
                                    <div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gray-100 dark:bg-gray-800">
                                        <img src="${project.image}" 
                                             alt="${title}" 
                                             class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                             loading="lazy"
                                             onerror="this.src='https://via.placeholder.com/600x400?text=${encodeURIComponent(title)}'">
                                    </div>
                                    <div class="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                                        <span class="text-sm">${project.year}</span>
                                    </div>
                                    ${project.metrics ? `
                                        <div class="absolute -top-4 -right-4 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-lg text-sm font-medium">
                                            ${project.metrics}
                                        </div>
                                    ` : ''}
                                </div>
                            `}
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

export function initAbout() {
    const about = document.getElementById('about');
    if (!about) return;
    
    about.innerHTML = `
        <div class="container mx-auto px-6">
            <div class="max-w-3xl mx-auto text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold mb-4">${translate('aboutTitle')}</h2>
                <p class="text-xl text-gray-600 dark:text-gray-400">${translate('aboutSubtitle')}</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
                ${portfolioData.roles.map(role => {
                    const bgColor = {
                        blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-500',
                        purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-500',
                        green: 'bg-green-100 dark:bg-green-900/30 text-green-500'
                    }[role.iconBg];
                    
                    return `
                        <div class="p-8 bg-gray-50 dark:bg-gray-900/50 rounded-2xl hover:shadow-lg transition-all duration-300">
                            <div class="w-16 h-16 ${bgColor} rounded-2xl flex items-center justify-center mb-6">
                                <i class="fas ${role.icon} text-2xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold mb-3">${translate(role.title)}</h3>
                            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                                ${translate(role.description)}
                            </p>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

export function initStats() {
    const stats = document.getElementById('stats');
    if (!stats) return;
    
    stats.innerHTML = `
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                ${portfolioData.stats.map(stat => `
                    <div class="text-center">
                        <div class="text-4xl md:text-5xl font-bold text-blue-500 mb-2">
                            ${stat.value}${stat.suffix || ''}
                        </div>
                        <div class="text-gray-600 dark:text-gray-400">${translate(stat.label)}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

export function initContact() {
    const contact = document.getElementById('contact');
    if (!contact) return;
    
    contact.innerHTML = `
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-4xl md:text-6xl font-bold mb-6">${translate('contactTitle')}</h2>
            <p class="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                ${translate('contactSubtitle')}
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:${portfolioData.social.email}" class="group px-8 py-4 bg-white text-gray-900 rounded-full font-medium hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
                    <i class="far fa-envelope"></i>
                    ${portfolioData.social.email}
                </a>
                <a href="${portfolioData.social.whatsapp}" target="_blank" class="group px-8 py-4 bg-white/10 backdrop-blur border border-white/20 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-2">
                    <i class="fab fa-whatsapp"></i>
                    ${translate('contactWhatsApp')}
                </a>
            </div>
            
            <div class="flex justify-center gap-4 mt-12">
                <a href="${portfolioData.social.github}" target="_blank" class="w-12 h-12 bg-white/10 backdrop-blur rounded-full flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all duration-300">
                    <i class="fab fa-github"></i>
                </a>
                <a href="${portfolioData.social.linkedin}" target="_blank" class="w-12 h-12 bg-white/10 backdrop-blur rounded-full flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all duration-300">
                    <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="${portfolioData.social.twitter}" target="_blank" class="w-12 h-12 bg-white/10 backdrop-blur rounded-full flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all duration-300">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="${portfolioData.social.instagram}" target="_blank" class="w-12 h-12 bg-white/10 backdrop-blur rounded-full flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all duration-300">
                    <i class="fab fa-instagram"></i>
                </a>
            </div>
        </div>
    `;
}

export function initFooter() {
    const footer = document.querySelector('footer');
    if (!footer) return;
    
    footer.innerHTML = `
        <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                <div>© ${new Date().getFullYear()} Adjie Arya. ${translate('footerBuilt')}</div>
                <div class="flex gap-6 mt-4 md:mt-0">
                    <a href="#" class="hover:text-blue-500 transition-colors duration-300">${translate('footerPrivacy')}</a>
                    <a href="#" class="hover:text-blue-500 transition-colors duration-300">${translate('footerTerms')}</a>
                </div>
            </div>
        </div>
    `;
}