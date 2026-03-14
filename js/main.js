// main.js - Entry point utama (non-module, pasti jalan)
(function() {
    'use strict';

    console.log('Main.js loaded');

    // ============================================
    // DATA
    // ============================================
    
    const translations = {
        en: {
            navWork: "Work",
            navAbout: "About",
            navArticles: "Articles",
            navContact: "Contact",
            heroLocation: "Surabaya, Indonesia • Available worldwide",
            heroMission: "Building digital solutions that don't just work, but make a real impact.",
            heroQuote: "I believe technology should solve real problems, not just be clean code.",
            heroPersonalNote: "Based in Surabaya, available for remote work worldwide. Let's build something impactful together.",
            heroBtnWork: "View my work",
            heroBtnAbout: "More about me",
            statsProjects: "Projects Completed",
            statsClients: "Active Clients",
            statsExperience: "Years Experience",
            statsCertifications: "Certifications",
            workTitle: "Featured Projects",
            workSubtitle: "Every project I build has one goal: solving real problems.",
            workOtherTitle: "Other Projects",
            workBtnCode: "View Code",
            workBtnDemo: "Live Demo",
            workBadgeVetohub: "🏢 Veto Technology",
            workBadgeMagic: "📱 Independent",
            workImpact: "Impact",
            workBuilt: "What I built",
            aboutTitle: "About Me",
            aboutPara1: "Hi, I'm Adjie Arya, a Full Stack Developer based in Surabaya, Indonesia.",
            aboutPara2: "I believe technology should solve real problems, not just be clean code.",
            aboutPara3: "I'm constantly learning and open to collaborating on impactful projects.",
            aboutJourney: "Career Journey",
            aboutEducation: "Education",
            aboutThesis: "Thesis",
            aboutSkills: "Skills",
            aboutClients: "Clients & Partners",
            aboutCertifications: "Certifications",
            aboutRecommendations: "Recommendations",
            aboutViewAll: "View all recommendations →",
            aboutDownload: "Download resume (PDF)",
            articlesTitle: "Articles",
            articlesSubtitle: "Sometimes I write about technology and experiences.",
            articlesReadMore: "Read more",
            contactTitle: "Let's Talk",
            contactSubtitle: "I'm active on social media and always happy to connect.",
            contactResponse: "Usually responds within 1-2 business days",
            footerBuilt: "Built with ❤️ in Surabaya"
        },
        id: {
            navWork: "Proyek",
            navAbout: "Tentang",
            navArticles: "Artikel",
            navContact: "Kontak",
            heroLocation: "Surabaya, Indonesia • Tersedia di seluruh dunia",
            heroMission: "Membangun solusi digital yang tidak hanya berfungsi, tapi berdampak nyata.",
            heroQuote: "Saya percaya teknologi harus menyelesaikan masalah nyata.",
            heroPersonalNote: "Berbasis di Surabaya, tersedia untuk kerja remote secara global.",
            heroBtnWork: "Lihat Proyek",
            heroBtnAbout: "Tentang Saya",
            statsProjects: "Proyek Selesai",
            statsClients: "Klien Aktif",
            statsExperience: "Tahun Pengalaman",
            statsCertifications: "Sertifikasi",
            workTitle: "Proyek Unggulan",
            workSubtitle: "Setiap proyek saya bangun untuk menyelesaikan masalah nyata.",
            workOtherTitle: "Proyek Lainnya",
            workBtnCode: "Lihat Kode",
            workBtnDemo: "Demo Langsung",
            workBadgeVetohub: "🏢 Veto Technology",
            workBadgeMagic: "📱 Proyek Mandiri",
            workImpact: "Dampak",
            workBuilt: "Yang saya bangun",
            aboutTitle: "Tentang Saya",
            aboutPara1: "Halo, saya Adjie Arya, Full Stack Developer berbasis di Surabaya.",
            aboutPara2: "Saya percaya teknologi harus menyelesaikan masalah nyata.",
            aboutPara3: "Saya terus belajar dan terbuka untuk kolaborasi.",
            aboutJourney: "Perjalanan Karir",
            aboutEducation: "Pendidikan",
            aboutThesis: "Skripsi",
            aboutSkills: "Keahlian",
            aboutClients: "Klien & Mitra",
            aboutCertifications: "Sertifikasi",
            aboutRecommendations: "Rekomendasi",
            aboutViewAll: "Lihat semua rekomendasi →",
            aboutDownload: "Download resume (PDF)",
            articlesTitle: "Artikel",
            articlesSubtitle: "Kadang saya menulis tentang teknologi dan pengalaman.",
            articlesReadMore: "Baca selengkapnya",
            contactTitle: "Mari Ngobrol",
            contactSubtitle: "Saya aktif di media sosial dan selalu senang berkenalan.",
            contactResponse: "Biasanya merespon dalam 1-2 hari kerja",
            footerBuilt: "Dibangun dengan ❤️ di Surabaya"
        }
    };

    const portfolioData = {
        statistics: [
            { value: 25, label: "Proyek Selesai" },
            { value: 15, label: "Klien Aktif" },
            { value: 5, label: "Tahun Pengalaman" },
            { value: 10, label: "Sertifikasi" }
        ],
        projects: [
            {
                id: "vetohub",
                title: "Vetohub",
                tagline: "Solusi ERP & Landing Page",
                company: "Veto Technology",
                role: "Core Team Developer",
                description: "<p>Vetohub lahir dari visi Veto Technology untuk membantu perusahaan Indonesia bertransformasi digital.</p><p>Sistem ERP terintegrasi dengan modul keuangan, inventaris, SDM, dan operasional.</p>",
                impact: "Digunakan oleh 25+ perusahaan di seluruh Indonesia, meningkatkan efisiensi operasional hingga 35%.",
                image: "assets/p4.png",
                technologies: ["Laravel", "React", "MySQL", "Tailwind CSS"],
                github: "https://github.com/vetotechnology/vetohub",
                demo: "https://vetohub.id",
                metrics: "25+ perusahaan • Multi-industri",
                features: [
                    "Sistem ERP terintegrasi",
                    "Landing Page Builder",
                    "Arsitektur multi-tenant"
                ],
                testimonial: {
                    quote: "Adjie adalah salah satu pilar utama Veto Technology.",
                    author: "Tim Veto Technology",
                    role: "Tim Inti"
                }
            },
            {
                id: "magictracker",
                title: "MagicTracker",
                tagline: "Aplikasi tracking paket real-time",
                company: "Proyek Mandiri",
                description: "<p>MagicTracker membantu perusahaan logistik melacak paket secara real-time.</p>",
                impact: "Digunakan oleh 3 perusahaan logistik di Surabaya dengan 5.000+ paket per hari.",
                image: "assets/avatar5.png",
                technologies: ["React Native", "Firebase", "Node.js", "Express"],
                github: "https://github.com/ajiarya10/magictracker",
                demo: "https://magictracker.id",
                metrics: "3 perusahaan • 5.000+ paket/hari",
                features: [
                    "Pelacakan GPS real-time",
                    "Notifikasi push",
                    "Analitik pengiriman"
                ],
                testimonial: {
                    quote: "MagicTracker memberi kami keunggulan kompetitif.",
                    author: "Budi Santoso",
                    role: "CEO, Magic Logistics"
                }
            }
        ],
        clients: [
            { name: "Veto Technology", logo: "🏢", industry: "Teknologi" },
            { name: "PT Maju Jaya", logo: "🛍️", industry: "Ritel" },
            { name: "CV Karya Mandiri", logo: "🏭", industry: "Manufaktur" }
        ],
        journey: [
            {
                year: "2024 - Sekarang",
                title: "Full Stack Developer",
                company: "Veto Technology",
                description: "Membangun sistem ERP dan landing page builder."
            },
            {
                year: "2023 - 2024",
                title: "Full Stack Developer",
                company: "PT Teknologi Maju",
                description: "Memimpin pengembangan aplikasi web untuk klien enterprise."
            }
        ],
        education: [
            {
                degree: "Sarjana Teknik Informatika",
                institution: "Universitas Bhayangkara Surabaya",
                year: "2020 - 2025",
                gpa: "3.92/4.00",
                thesis: "Sistem Prediksi Nilai Siswa"
            }
        ],
        skills: {
            frontend: ["React", "Vue.js", "Tailwind CSS"],
            backend: ["Laravel", "Node.js", "Python"],
            database: ["MySQL", "MongoDB", "Firebase"],
            tools: ["Git", "Docker", "AWS"]
        },
        certifications: [
            { name: "AWS Certified Developer", issuer: "Amazon", year: "2024" },
            { name: "Google UX Design", issuer: "Google", year: "2023" }
        ],
        recommendations: [
            {
                name: "Tim Veto Technology",
                role: "Mitra Startup",
                text: "Bekerja dengan Adjie sangat menyenangkan. Dia memiliki pemahaman mendalam tentang arsitektur sistem."
            }
        ],
        articles: [
            {
                title: "Membangun ERP Multi-tenant dengan Laravel",
                date: "15 Jan 2026",
                readTime: "7 menit",
                link: "#"
            }
        ],
        social: {
            github: "https://github.com/ajiarya10",
            linkedin: "https://linkedin.com/in/ajiarya10",
            instagram: "https://instagram.com/ajiarya10",
            x: "https://twitter.com/ajiarya10",
            email: "adjie@aryadev.id",
            whatsapp: "https://wa.me/6281234567890"
        }
    };

    // ============================================
    // STATE
    // ============================================
    
    let currentLanguage = 'id';

    // ============================================
    // HELPER FUNCTIONS
    // ============================================
    
    function t(en, id) {
        return currentLanguage === 'en' ? en : id;
    }

    function translate(key) {
        return translations[currentLanguage][key] || key;
    }

    // ============================================
    // RENDER FUNCTIONS
    // ============================================
    
    function renderNavigation() {
        const header = document.getElementById('main-header');
        if (!header) return;

        header.innerHTML = `
            <nav class="container mx-auto px-4 flex justify-between items-center">
                <a href="#" class="text-lg font-medium hover:text-secondary transition-colors">Adjie Arya</a>
                <div class="hidden md:flex space-x-6">
                    <a href="#work" class="nav-link relative hover:text-secondary transition-colors">${translate('navWork')}</a>
                    <a href="#about" class="nav-link relative hover:text-secondary transition-colors">${translate('navAbout')}</a>
                    <a href="#articles" class="nav-link relative hover:text-secondary transition-colors">${translate('navArticles')}</a>
                    <a href="#contact" class="nav-link relative hover:text-secondary transition-colors">${translate('navContact')}</a>
                </div>
                <div class="flex items-center space-x-2">
                    <button id="theme-toggle" class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        <i class="fas fa-moon dark:hidden"></i>
                        <i class="fas fa-sun hidden dark:block"></i>
                    </button>
                    <button id="mobile-menu-button" class="md:hidden w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
            </nav>
            <div id="mobile-menu" class="hidden md:hidden px-4 py-3 bg-white dark:bg-primary border-t border-gray-200 dark:border-gray-800">
                <div class="flex flex-col space-y-3">
                    <a href="#work" class="mobile-nav-link py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">${translate('navWork')}</a>
                    <a href="#about" class="mobile-nav-link py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">${translate('navAbout')}</a>
                    <a href="#articles" class="mobile-nav-link py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">${translate('navArticles')}</a>
                    <a href="#contact" class="mobile-nav-link py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">${translate('navContact')}</a>
                </div>
            </div>
        `;
    }

    function renderHero() {
        const hero = document.getElementById('hero');
        if (!hero) return;

        hero.innerHTML = `
            <div class="container mx-auto px-4">
                <div class="max-w-3xl">
                    <div class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                        <i class="fas fa-map-marker-alt text-secondary"></i>
                        <span>${translate('heroLocation')}</span>
                    </div>
                    <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-4">
                        ${translate('heroMission')}
                    </h1>
                    <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6">
                        ${translate('heroQuote')}
                    </p>
                    <div class="personal-note p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border-l-4 border-secondary mb-6">
                        <p>${translate('heroPersonalNote')}</p>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-3">
                        <a href="#work" class="btn-primary px-6 py-3 bg-primary dark:bg-white text-white dark:text-primary rounded-full text-center hover:bg-secondary dark:hover:bg-secondary dark:hover:text-white transition-colors">
                            ${translate('heroBtnWork')}
                        </a>
                        <a href="#about" class="btn-outline px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full text-center hover:border-secondary hover:text-secondary transition-colors">
                            ${translate('heroBtnAbout')}
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    function renderStats() {
        const stats = document.getElementById('stats');
        if (!stats) return;

        const labels = [
            translate('statsProjects'),
            translate('statsClients'),
            translate('statsExperience'),
            translate('statsCertifications')
        ];

        stats.innerHTML = `
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    ${portfolioData.statistics.map((stat, index) => `
                        <div class="text-center">
                            <div class="stat-number text-3xl md:text-4xl font-bold text-secondary">${stat.value}</div>
                            <div class="text-sm text-gray-600 dark:text-gray-400">${labels[index]}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    function renderProjects() {
        const work = document.getElementById('work');
        if (!work) return;

        const featuredProjects = portfolioData.projects.filter(p => p.id === 'vetohub' || p.id === 'magictracker');

        work.innerHTML = `
            <div class="container mx-auto px-4">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">${translate('workTitle')}</h2>
                <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">${translate('workSubtitle')}</p>
                
                <div class="space-y-8">
                    ${featuredProjects.map(project => `
                        <div class="project-card bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 md:p-6">
                            <div class="grid md:grid-cols-2 gap-6">
                                <div class="project-image bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                                    <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover" loading="lazy">
                                </div>
                                <div class="project-content">
                                    <span class="inline-block px-3 py-1 bg-secondary text-white text-xs rounded-full mb-3">
                                        ${project.id === 'vetohub' ? translate('workBadgeVetohub') : translate('workBadgeMagic')}
                                    </span>
                                    <h3 class="text-2xl font-bold mb-1">${project.title}</h3>
                                    <p class="text-secondary mb-2">${project.tagline}</p>
                                    <div class="text-sm text-gray-600 dark:text-gray-400 mb-4">${project.description}</div>
                                    
                                    <div class="mb-4">
                                        <div class="font-semibold mb-2">🔧 ${translate('workBuilt')}:</div>
                                        <ul class="space-y-1">
                                            ${project.features.map(f => `
                                                <li class="flex items-start gap-2 text-sm">
                                                    <i class="fas fa-check text-secondary mt-1"></i>
                                                    <span>${f}</span>
                                                </li>
                                            `).join('')}
                                        </ul>
                                    </div>
                                    
                                    <div class="flex flex-wrap gap-2 mb-4">
                                        ${project.technologies.map(tech => `
                                            <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-full">${tech}</span>
                                        `).join('')}
                                    </div>
                                    
                                    <div class="mb-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                                        <div class="text-sm font-semibold mb-1">⚡ ${translate('workImpact')}:</div>
                                        <p class="text-sm">${project.impact}</p>
                                    </div>
                                    
                                    <div class="flex flex-col sm:flex-row gap-3">
                                        <a href="${project.github}" target="_blank" class="project-link flex items-center justify-center gap-2 px-4 py-2 bg-primary dark:bg-white text-white dark:text-primary rounded-full text-sm hover:bg-secondary dark:hover:bg-secondary dark:hover:text-white transition-colors">
                                            <i class="fab fa-github"></i>
                                            <span>${translate('workBtnCode')}</span>
                                        </a>
                                        <a href="${project.demo}" target="_blank" class="project-link flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full text-sm hover:border-secondary hover:text-secondary transition-colors">
                                            <i class="fas fa-external-link-alt"></i>
                                            <span>${translate('workBtnDemo')}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    function renderAbout() {
        const about = document.getElementById('about');
        if (!about) return;

        about.innerHTML = `
            <div class="container mx-auto px-4">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">${translate('aboutTitle')}</h2>
                
                <div class="grid md:grid-cols-2 gap-8">
                    <div>
                        <p class="text-lg mb-4">${translate('aboutPara1')}</p>
                        <p class="text-gray-600 dark:text-gray-400 mb-4">${translate('aboutPara2')}</p>
                        <p class="text-gray-600 dark:text-gray-400 mb-6">${translate('aboutPara3')}</p>
                        
                        <h4 class="font-semibold text-xl mb-4">${translate('aboutJourney')}</h4>
                        <div class="space-y-4">
                            ${portfolioData.journey.map(item => `
                                <div class="border-l-4 border-secondary pl-4">
                                    <div class="text-sm text-secondary">${item.year}</div>
                                    <h5 class="font-semibold">${item.title}</h5>
                                    <div class="text-sm text-gray-500 dark:text-gray-400">${item.company}</div>
                                    <p class="text-sm mt-1">${item.description}</p>
                                </div>
                            `).join('')}
                        </div>
                        
                        <h4 class="font-semibold text-xl mt-6 mb-4">${translate('aboutEducation')}</h4>
                        ${portfolioData.education.map(edu => `
                            <div>
                                <div class="font-semibold">${edu.degree}</div>
                                <div class="text-sm text-gray-500">${edu.institution} • ${edu.year}</div>
                                <div class="text-sm text-secondary">${edu.gpa}</div>
                                <div class="text-sm mt-1">${translate('aboutThesis')}: ${edu.thesis}</div>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div>
                        <h4 class="font-semibold text-xl mb-4">${translate('aboutSkills')}</h4>
                        ${Object.entries(portfolioData.skills).map(([category, skills]) => `
                            <div class="mb-4">
                                <div class="text-sm font-medium mb-2 capitalize">${category}</div>
                                <div class="flex flex-wrap gap-2">
                                    ${skills.map(s => `
                                        <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full">${s}</span>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                        
                        <h4 class="font-semibold text-xl mt-6 mb-4">${translate('aboutClients')}</h4>
                        <div class="grid grid-cols-2 gap-3">
                            ${portfolioData.clients.map(client => `
                                <div class="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-center">
                                    <div class="text-2xl mb-1">${client.logo}</div>
                                    <div class="text-sm font-medium">${client.name}</div>
                                    <div class="text-xs text-gray-500">${client.industry}</div>
                                </div>
                            `).join('')}
                        </div>
                        
                        <h4 class="font-semibold text-xl mt-6 mb-4">${translate('aboutCertifications')}</h4>
                        <div class="space-y-2">
                            ${portfolioData.certifications.map(cert => `
                                <div class="flex items-start gap-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                                    <i class="fas fa-certificate text-secondary mt-1"></i>
                                    <div>
                                        <div class="text-sm font-medium">${cert.name}</div>
                                        <div class="text-xs text-gray-500">${cert.issuer} • ${cert.year}</div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function renderArticles() {
        const articles = document.getElementById('articles');
        if (!articles) return;

        articles.innerHTML = `
            <div class="container mx-auto px-4">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">${translate('articlesTitle')}</h2>
                <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">${translate('articlesSubtitle')}</p>
                
                <div class="grid md:grid-cols-3 gap-4">
                    ${portfolioData.articles.map(article => `
                        <a href="${article.link}" class="article-card block p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                            <div class="flex gap-2 text-xs text-secondary mb-2">
                                <span>${article.date}</span>
                                <span>•</span>
                                <span>${article.readTime}</span>
                            </div>
                            <h3 class="font-semibold mb-3">${article.title}</h3>
                            <div class="text-sm text-gray-500 hover:text-secondary transition-colors">
                                ${translate('articlesReadMore')} <i class="fas fa-arrow-right ml-1 text-xs"></i>
                            </div>
                        </a>
                    `).join('')}
                </div>
            </div>
        `;
    }

    function renderContact() {
        const contact = document.getElementById('contact');
        if (!contact) return;

        contact.innerHTML = `
            <div class="container mx-auto px-4">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">${translate('contactTitle')}</h2>
                <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">${translate('contactSubtitle')}</p>
                
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl">
                    <a href="mailto:${portfolioData.social.email}" class="contact-item p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-center hover:bg-secondary hover:text-white hover:border-secondary transition-all">
                        <i class="far fa-envelope text-2xl mb-2"></i>
                        <div class="font-medium">Email</div>
                        <div class="text-xs opacity-75">adjie@aryadev.id</div>
                    </a>
                    
                    <a href="${portfolioData.social.github}" target="_blank" class="contact-item p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-center hover:bg-secondary hover:text-white hover:border-secondary transition-all">
                        <i class="fab fa-github text-2xl mb-2"></i>
                        <div class="font-medium">GitHub</div>
                        <div class="text-xs opacity-75">/ajiarya10</div>
                    </a>
                    
                    <a href="${portfolioData.social.linkedin}" target="_blank" class="contact-item p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-center hover:bg-secondary hover:text-white hover:border-secondary transition-all">
                        <i class="fab fa-linkedin text-2xl mb-2"></i>
                        <div class="font-medium">LinkedIn</div>
                        <div class="text-xs opacity-75">/in/ajiarya10</div>
                    </a>
                    
                    <a href="${portfolioData.social.instagram}" target="_blank" class="contact-item p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-center hover:bg-secondary hover:text-white hover:border-secondary transition-all">
                        <i class="fab fa-instagram text-2xl mb-2"></i>
                        <div class="font-medium">Instagram</div>
                        <div class="text-xs opacity-75">@ajiarya.dev</div>
                    </a>
                    
                    <a href="${portfolioData.social.x}" target="_blank" class="contact-item p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-center hover:bg-secondary hover:text-white hover:border-secondary transition-all">
                        <i class="fab fa-x-twitter text-2xl mb-2"></i>
                        <div class="font-medium">X</div>
                        <div class="text-xs opacity-75">@ajiarya10</div>
                    </a>
                    
                    <a href="${portfolioData.social.whatsapp}" target="_blank" class="contact-item p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-center hover:bg-secondary hover:text-white hover:border-secondary transition-all">
                        <i class="fab fa-whatsapp text-2xl mb-2"></i>
                        <div class="font-medium">WhatsApp</div>
                        <div class="text-xs opacity-75">+62 812-3456-7890</div>
                    </a>
                </div>
                
                <div class="mt-6 text-center text-sm text-gray-500">
                    <i class="far fa-clock mr-1"></i> ${translate('contactResponse')}
                </div>
            </div>
        `;
    }

    function renderFooter() {
        const footer = document.querySelector('footer');
        if (!footer) return;

        footer.innerHTML = `
            <div class="container mx-auto px-4">
                <div class="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                    <div>© ${new Date().getFullYear()} Adjie Arya. ${translate('footerBuilt')}</div>
                    <div class="flex space-x-4 mt-2 md:mt-0">
                        <a href="${portfolioData.social.github}" target="_blank" class="hover:text-secondary transition-colors">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="${portfolioData.social.linkedin}" target="_blank" class="hover:text-secondary transition-colors">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="${portfolioData.social.x}" target="_blank" class="hover:text-secondary transition-colors">
                            <i class="fab fa-x-twitter"></i>
                        </a>
                        <a href="${portfolioData.social.instagram}" target="_blank" class="hover:text-secondary transition-colors">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    // ============================================
    // FEATURES
    // ============================================
    
    function initLanguageToggle() {
        const langButtons = document.querySelectorAll('.lang-btn');
        
        langButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                if (lang === currentLanguage) return;
                
                currentLanguage = lang;
                document.documentElement.lang = lang;
                localStorage.setItem('language', lang);
                
                langButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Re-render semua
                renderAll();
            });
        });
    }

    function initThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        if (!themeToggle) return;
        
        // Load saved theme
        if (localStorage.getItem('theme') === 'dark') {
            document.documentElement.classList.add('dark');
        }
        
        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }

    function initMobileMenu() {
        const menuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (!menuButton || !mobileMenu) return;
        
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = menuButton.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.className = 'fas fa-bars';
            } else {
                icon.className = 'fas fa-times';
            }
        });
        
        // Close when clicking links
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                const icon = menuButton.querySelector('i');
                icon.className = 'fas fa-bars';
            });
        });
    }

    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const targetId = anchor.getAttribute('href');
                if (targetId === '#') return;
                
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                    
                    // Close mobile menu
                    const mobileMenu = document.getElementById('mobile-menu');
                    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                        const menuButton = document.getElementById('mobile-menu-button');
                        if (menuButton) {
                            menuButton.querySelector('i').className = 'fas fa-bars';
                        }
                    }
                }
            });
        });
    }

    function initHeaderScroll() {
        const header = document.getElementById('main-header');
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 50) {
                header.classList.add('glass', 'bg-white/80', 'dark:bg-primary/80', 'backdrop-blur', 'shadow-lg');
            } else {
                header.classList.remove('glass', 'bg-white/80', 'dark:bg-primary/80', 'backdrop-blur', 'shadow-lg');
            }
            
            if (currentScroll > lastScroll && currentScroll > 200) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            
            lastScroll = currentScroll;
        });
    }

    function initAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.project-card, .stat-number').forEach(el => {
            observer.observe(el);
        });
    }

    function renderAll() {
        renderNavigation();
        renderHero();
        renderStats();
        renderProjects();
        renderAbout();
        renderArticles();
        renderContact();
        renderFooter();
        
        // Re-initialize features after render
        setTimeout(() => {
            initMobileMenu();
            initSmoothScroll();
            initAnimations();
        }, 100);
    }

    // ============================================
    // INITIALIZATION
    // ============================================
    
    function init() {
        console.log('Initializing portfolio...');
        
        // Hide loading screen
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 300);
        }
        
        // Load saved language
        const savedLang = localStorage.getItem('language');
        if (savedLang && (savedLang === 'en' || savedLang === 'id')) {
            currentLanguage = savedLang;
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.lang === currentLanguage) {
                    btn.classList.add('active');
                }
            });
        }
        
        // Render everything
        renderAll();
        
        // Initialize features
        initLanguageToggle();
        initThemeToggle();
        initHeaderScroll();
        
        console.log('Portfolio initialized!');
    }

    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();