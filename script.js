// Enhanced cursor functionality
document.addEventListener("DOMContentLoaded", function () {
  // Initialize cursor
  const cursor = document.querySelector(".custom-cursor");
  const cursorFollower = document.querySelector(".cursor-follower");

  if (cursor && cursorFollower && window.innerWidth > 768) {
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";

      // Follower cursor with delay
      setTimeout(() => {
        cursorFollower.style.left = e.clientX + "px";
        cursorFollower.style.top = e.clientY + "px";
      }, 100);
    });

    // Add active class on interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, .magnetic, input, textarea, .skill-cloud, .project-item"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("active");
        cursorFollower.classList.add("active");
      });

      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("active");
        cursorFollower.classList.remove("active");
      });

      el.addEventListener("click", () => {
        cursor.classList.add("click");
        setTimeout(() => cursor.classList.remove("click"), 500);
      });
    });
  }

  // Initialize particle canvas
  initParticleCanvas();

  // Initialize floating particles
  initFloatingParticles();

  // Skill bar animation
  function animateSkillBars() {
    const skillBars = document.querySelectorAll(".skill-progress");
    skillBars.forEach((bar) => {
      const width = bar.getAttribute("data-width");
      setTimeout(() => {
        bar.style.width = width;
      }, 300);
    });
  }

  // Section transition animation
  function animateOnScroll() {
    const sections = document.querySelectorAll(".section-transition");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            // Animate skill bars when skills section is in view
            if (entry.target.closest("#skills")) {
              animateSkillBars();
            }

            // Animate counters when stats section is in view
            if (entry.target.closest(".counter")) {
              animateCounters();
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
  }

  // Header scroll effect
  function headerScrollEffect() {
    const header = document.getElementById("main-header");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("shadow-lg", "bg-white/80", "dark:bg-gray-900/80");
      } else {
        header.classList.remove("shadow-lg", "bg-white/80", "dark:bg-gray-900/80");
      }
    });
  }

  // Mobile menu toggle
  function initMobileMenu() {
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("mobile-menu-active");
        mobileMenu.classList.toggle("mobile-menu-hidden");

        // Animate hamburger icon
        const spans = mobileMenuButton.querySelectorAll("span");
        if (mobileMenu.classList.contains("mobile-menu-hidden")) {
          spans[0].style.transform = "";
          spans[1].style.opacity = "";
          spans[2].style.transform = "";
        } else {
          spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
          spans[1].style.opacity = "0";
          spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)";
        }
      });

      // Close menu when clicking on a link
      const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
      mobileNavLinks.forEach((link) => {
        link.addEventListener("click", () => {
          mobileMenu.classList.add("mobile-menu-hidden");
          mobileMenu.classList.remove("mobile-menu-active");
          spans[0].style.transform = "";
          spans[1].style.opacity = "";
          spans[2].style.transform = "";
        });
      });
    }
  }

  // Form validation and submission
  function initContactForm() {
    const contactForm = document.getElementById("contactForm");
    if (!contactForm) return;

    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Reset errors
      document.querySelectorAll('[id$="Error"]').forEach((el) => {
        el.classList.add("hidden");
      });

      let isValid = true;

      // Validate name
      const nameInput = document.getElementById("name");
      if (!nameInput.value.trim()) {
        document.getElementById("nameError").classList.remove("hidden");
        isValid = false;
      }

      // Validate email
      const emailInput = document.getElementById("email");
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        document.getElementById("emailError").classList.remove("hidden");
        isValid = false;
      }

      // Validate subject
      const subjectInput = document.getElementById("subject");
      if (!subjectInput.value.trim()) {
        document.getElementById("subjectError").classList.remove("hidden");
        isValid = false;
      }

      // Validate message
      const messageInput = document.getElementById("message");
      if (!messageInput.value.trim()) {
        document.getElementById("messageError").classList.remove("hidden");
        isValid = false;
      }

      if (isValid) {
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
        submitBtn.disabled = true;

        // Simulate API call
        setTimeout(() => {
          document.getElementById("formSuccess").classList.remove("hidden");
          contactForm.reset();
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;

          // Hide success message after 5 seconds
          setTimeout(() => {
            document.getElementById("formSuccess").classList.add("hidden");
          }, 5000);
        }, 2000);
      }
    });
  }

  // Enhanced theme toggle
  function initThemeToggle() {
    const themeToggleBtn = document.getElementById("theme-toggle");
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");
        localStorage.setItem(
          "theme",
          document.documentElement.classList.contains("dark") ? "dark" : "light"
        );
      });

      // Check for saved theme preference or respect OS preference
      if (
        localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }

  // Smooth scrolling for anchor links
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        if (targetId === "#") return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          // Close mobile menu if open
          const mobileMenu = document.getElementById("mobile-menu");
          if (
            mobileMenu &&
            !mobileMenu.classList.contains("mobile-menu-hidden")
          ) {
            mobileMenu.classList.add("mobile-menu-hidden");
            mobileMenu.classList.remove("mobile-menu-active");
            // Reset hamburger icon
            const spans = document.querySelectorAll(
              "#mobile-menu-button span"
            );
            spans[0].style.transform = "";
            spans[1].style.opacity = "";
            spans[2].style.transform = "";
          }

          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  }

  // Back to top button
  function initBackToTop() {
    const backToTopBtn = document.getElementById("back-to-top");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        backToTopBtn.classList.remove("opacity-0", "invisible");
        backToTopBtn.classList.add("opacity-100");
      } else {
        backToTopBtn.classList.add("opacity-0", "invisible");
        backToTopBtn.classList.remove("opacity-100");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Projects filter
  function initProjectsFilter() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectItems = document.querySelectorAll(".project-item");

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove("active"));

        // Add active class to clicked button
        button.classList.add("active");

        const filterValue = button.getAttribute("data-filter");

        // Filter projects
        projectItems.forEach((item) => {
          if (
            filterValue === "all" ||
            item.getAttribute("data-category") === filterValue
          ) {
            item.style.display = "block";
            setTimeout(() => {
              item.style.opacity = "1";
              item.style.transform = "scale(1)";
            }, 10);
          } else {
            item.style.opacity = "0";
            item.style.transform = "scale(0.8)";
            setTimeout(() => {
              item.style.display = "none";
            }, 300);
          }
        });
      });
    });
  }

  // Animated counters
  function animateCounters() {
    const counters = document.querySelectorAll(".counter");

    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-target"));
      let count = 0;
      const duration = 2000; // in milliseconds
      const increment = target / (duration / 16); // 16ms per frame for 60fps

      const updateCount = () => {
        if (count < target) {
          count += increment;
          counter.innerText = Math.ceil(count);
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  }

  // Set current year in footer
  function initCurrentYear() {
    document.getElementById("current-year").textContent =
      new Date().getFullYear();
  }

  // Initialize everything
  function init() {
    animateOnScroll();
    headerScrollEffect();
    initMobileMenu();
    initContactForm();
    initThemeToggle();
    initSmoothScroll();
    initBackToTop();
    initProjectsFilter();
    initCurrentYear();
  }

  // Loading screen handler
  window.addEventListener("load", () => {
    const loadingScreen = document.getElementById("loading-screen");
    if (loadingScreen) {
      loadingScreen.style.opacity = "0";
      setTimeout(() => {
        loadingScreen.style.display = "none";
        init();
      }, 500);
    } else {
      // If no loading screen, initialize immediately
      init();
    }
  });
});

// Particle canvas background
function initParticleCanvas() {
  const canvas = document.getElementById("particle-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let particlesArray = [];

  // Set canvas size
  function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  setCanvasSize();
  window.addEventListener("resize", () => {
    setCanvasSize();
    initParticles();
  });

  // Mouse position
  let mouse = {
    x: null,
    y: null,
    radius: 150,
  };

  window.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
  });

  // Create particle class
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 3 + 1;
      this.speedX = Math.random() * 3 - 1.5;
      this.speedY = Math.random() * 3 - 1.5;
      this.color = `hsl(${Math.random() * 360}, 50%, 50%)`;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // Bounce off walls
      if (this.x > canvas.width || this.x < 0) {
        this.speedX = -this.speedX;
      }
      if (this.y > canvas.height || this.y < 0) {
        this.speedY = -this.speedY;
      }

      // Mouse interaction
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < mouse.radius) {
        const force = (mouse.radius - distance) / mouse.radius;
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const directionX = forceDirectionX * force * 5;
        const directionY = forceDirectionY * force * 5;

        this.x -= directionX;
        this.y -= directionY;
      }
    }

    draw() {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }
  }

  // Initialize particles
  function initParticles() {
    particlesArray = [];
    const numberOfParticles = (canvas.height * canvas.width) / 9000;

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }
  }

  // Animate particles
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
      particlesArray[i].draw();
    }

    connectParticles();
    requestAnimationFrame(animate);
  }

  // Connect particles with lines
  function connectParticles() {
    const maxDistance = 100;
    for (let a = 0; a < particlesArray.length; a++) {
      for (let b = a; b < particlesArray.length; b++) {
        const dx = particlesArray[a].x - particlesArray[b].x;
        const dy = particlesArray[a].y - particlesArray[b].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          const opacity = 1 - distance / maxDistance;
          ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
          ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
          ctx.stroke();
        }
      }
    }
  }

  // Clear mouse position when leaving canvas
  window.addEventListener("mouseout", () => {
    mouse.x = undefined;
    mouse.y = undefined;
  });

  // Start animation
  initParticles();
  animate();
}

// Floating particles background
function initFloatingParticles() {
  const container = document.getElementById("floating-particles");
  if (!container) return;

  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.classList.add("absolute", "rounded-full");

    // Random size
    const size = Math.random() * 5 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;

    // Random color with opacity
    const colors = [
      "rgba(99, 102, 241, 0.5)",
      "rgba(168, 85, 247, 0.5)",
      "rgba(249, 115, 22, 0.5)",
    ];
    particle.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    // Random animation
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 5;
    particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;

    container.appendChild(particle);
  }
}