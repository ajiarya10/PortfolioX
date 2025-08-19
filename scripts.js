// Modern cursor functionality
class CustomCursor {
  constructor() {
    this.cursor = document.querySelector(".custom-cursor");
    this.links = document.querySelectorAll("a, button");
    this.init();
  }

  init() {
    if (this.cursor && window.innerWidth > 768) {
      document.addEventListener("mousemove", this.move.bind(this));
      this.links.forEach((link) => {
        link.addEventListener("mouseenter", () =>
          this.cursor.classList.add("active")
        );
        link.addEventListener("mouseleave", () =>
          this.cursor.classList.remove("active")
        );
      });
    }
  }

  move(e) {
    requestAnimationFrame(() => {
      this.cursor.style.left = `${e.clientX}px`;
      this.cursor.style.top = `${e.clientY}px`;
    });
  }
}

// Magnetic effect on elements
class MagneticEffect {
  constructor() {
    this.elements = document.querySelectorAll(".magnetic");
    this.init();
  }

  init() {
    this.elements.forEach((element) => {
      element.addEventListener("mousemove", this.move.bind(this, element));
      element.addEventListener("mouseleave", this.reset.bind(this, element));
    });
  }

  move(element, e) {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    requestAnimationFrame(() => {
      element.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
  }

  reset(element) {
    element.style.transform = "translate(0px, 0px)";
  }
}

// Theme management
class ThemeManager {
  constructor() {
    this.themeToggleBtn = document.getElementById("theme-toggle");
    this.htmlElement = document.documentElement;
    this.init();
  }

  init() {
    if (!this.themeToggleBtn) return;

    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Apply initial theme
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      this.htmlElement.classList.add("dark");
    } else {
      this.htmlElement.classList.remove("dark");
    }

    // Handle theme toggle click
    this.themeToggleBtn.addEventListener("click", () => {
      this.htmlElement.classList.toggle("dark");

      // Save preference
      localStorage.setItem(
        "theme",
        this.htmlElement.classList.contains("dark") ? "dark" : "light"
      );
    });

    // Handle system theme changes
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        if (!localStorage.getItem("theme")) {
          if (e.matches) {
            this.htmlElement.classList.add("dark");
          } else {
            this.htmlElement.classList.remove("dark");
          }
        }
      });
  }
}

// Mobile menu management
class MobileMenu {
  constructor() {
    this.btn = document.getElementById("mobile-menu-button");
    this.menu = document.getElementById("mobile-menu");
    this.init();
  }

  init() {
    this.btn.addEventListener("click", () => this.toggle());
    document.addEventListener("click", (e) => this.handleClickOutside(e));
  }

  toggle() {
    const isOpen = !this.menu.classList.contains("hidden");
    const spans = this.btn.querySelectorAll("span");

    if (!isOpen) {
      this.menu.classList.remove("hidden");
      spans[0].style.transform = "rotate(45deg) translate(6px, 6px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(-45deg) translate(6px, -6px)";
    } else {
      this.menu.classList.add("hidden");
      spans.forEach((span) => (span.style = ""));
    }
  }

  handleClickOutside(e) {
    if (!this.btn.contains(e.target) && !this.menu.contains(e.target)) {
      this.menu.classList.add("hidden");
      this.btn.querySelectorAll("span").forEach((span) => (span.style = ""));
    }
  }
}

// Smooth scroll functionality
class SmoothScroll {
  constructor() {
    this.links = document.querySelectorAll('a[href^="#"]');
    this.mobileMenu = document.getElementById("mobile-menu");
    this.mobileMenuBtn = document.getElementById("mobile-menu-button");
    this.init();
  }

  init() {
    this.links.forEach((link) => {
      link.addEventListener("click", (e) => this.handleClick(e));
    });
  }

  handleClick(e) {
    e.preventDefault();
    const target = document.querySelector(e.currentTarget.getAttribute("href"));

    if (target) {
      // Close mobile menu if open
      this.mobileMenu.classList.add("hidden");
      this.mobileMenuBtn
        .querySelectorAll("span")
        .forEach((span) => (span.style = ""));

      // Smooth scroll with header offset
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }
}

// Intersection Observer for animations
class ScrollAnimations {
  constructor() {
    this.options = {
      root: null,
      threshold: 0.1,
      rootMargin: "0px",
    };
    this.init();
  }

  init() {
    const observer = new IntersectionObserver(
      this.handleIntersect.bind(this),
      this.options
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);

      // Mark children for animation
      section
        .querySelectorAll("h2, p, .modern-card, .blob")
        .forEach((element) => {
          element.classList.add("animate-on-scroll");
        });
    });
  }

  handleIntersect(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.animateElement(entry.target);

        // Animate children with delay
        entry.target
          .querySelectorAll(".animate-on-scroll")
          .forEach((child, index) => {
            setTimeout(() => {
              this.animateElement(child);
            }, index * 100);
          });
      }
    });
  }

  animateElement(element) {
    const animations = [
      "animate-slide-up",
      "animate-slide-down",
      "animate-slide-left",
      "animate-slide-right",
    ];
    const randomAnimation =
      animations[Math.floor(Math.random() * animations.length)];

    element.classList.add("visible", randomAnimation);
  }
}

// Form validation and submission
class ContactForm {
  constructor() {
    this.form = document.getElementById("contactForm");
    this.inputs = this.form.querySelectorAll("input, textarea");
    this.formSuccess = document.getElementById("formSuccess");
    this.init();
  }

  init() {
    this.inputs.forEach((input) => {
      const errorElement = document.getElementById(`${input.id}Error`);

      input.addEventListener("focus", () => {
        input.parentElement.classList.add("focused");
      });

      input.addEventListener("blur", () => {
        input.parentElement.classList.remove("focused");
        this.validateInput(input, errorElement);
      });

      input.addEventListener(
        "input",
        this.debounce(() => {
          this.validateInput(input, errorElement);
        }, 300)
      );
    });

    this.form.addEventListener("submit", (e) => this.handleSubmit(e));
  }

  validateInput(input, errorElement) {
    if (input.type === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(input.value.trim())) {
        this.showError(input, errorElement);
      } else {
        this.hideError(input, errorElement);
      }
    } else {
      if (!input.value.trim()) {
        this.showError(input, errorElement);
      } else {
        this.hideError(input, errorElement);
      }
    }
  }

  showError(input, errorElement) {
    errorElement.style.display = "block";
    input.classList.add("border-red-500");
    input.classList.remove("border-green-500");
  }

  hideError(input, errorElement) {
    errorElement.style.display = "none";
    input.classList.remove("border-red-500");
    input.classList.add("border-green-500");
  }

  async handleSubmit(e) {
    e.preventDefault();

    let isValid = true;
    this.inputs.forEach((input) => {
      const errorElement = document.getElementById(`${input.id}Error`);
      this.validateInput(input, errorElement);
      if (errorElement.style.display === "block") {
        isValid = false;
      }
    });

    if (isValid) {
      const submitBtn = this.form.querySelector('button[type="submit"]');
      const originalContent = submitBtn.innerHTML;

      try {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <div class="flex items-center">
            <div class="loading"></div>
            <span class="ml-2">Mengirim...</span>
          </div>
        `;

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        this.showSuccess();
        this.form.reset();
        this.inputs.forEach((input) => {
          input.classList.remove("border-green-500", "border-red-500");
        });
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Terjadi kesalahan. Silakan coba lagi.");
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalContent;
      }
    }
  }

  showSuccess() {
    this.formSuccess.classList.remove("hidden");
    this.formSuccess.style.animation = "slideUp 0.5s ease-out forwards";

    setTimeout(() => {
      this.formSuccess.style.animation = "slideDown 0.5s ease-out forwards";
      setTimeout(() => {
        this.formSuccess.classList.add("hidden");
      }, 500);
    }, 5000);
  }

  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
}

// Parallax effect
class ParallaxEffect {
  constructor() {
    this.heroSection = document.querySelector("#hero");
    this.parallaxLayers = document.querySelectorAll(".parallax-layer");
    this.init();
  }

  init() {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset;

      this.parallaxLayers.forEach((layer, index) => {
        const speed = 0.2 + index * 0.1;
        const yPos = -(scrolled * speed);
        requestAnimationFrame(() => {
          layer.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
      });
    });
  }
}

// Initialize all functionality
document.addEventListener("DOMContentLoaded", () => {
  new CustomCursor();
  new MagneticEffect();
  new ThemeManager();
  new MobileMenu();
  new SmoothScroll();
  new ScrollAnimations();
  new ContactForm();
  new ParallaxEffect();
});

// Loading screen handler
window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen");
  loadingScreen.style.opacity = "0";
  setTimeout(() => {
    loadingScreen.style.display = "none";
  }, 500);
});

// Custom cursor
document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".custom-cursor");
  if (cursor) {
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });

    // Add active class on interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, .magnetic"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => cursor.classList.add("active"));
      el.addEventListener("mouseleave", () =>
        cursor.classList.remove("active")
      );
    });
  }
});

// Mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      // Toggle menu button animation
      const spans = menuButton.querySelectorAll("span");
      spans.forEach((span) => span.classList.toggle("active"));
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!menuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add("hidden");
        const spans = menuButton.querySelectorAll("span");
        spans.forEach((span) => span.classList.remove("active"));
      }
    });
  }
});

// Contact form handling
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Reset errors
      document
        .querySelectorAll(".text-red-500")
        .forEach((el) => el.classList.add("hidden"));

      // Basic validation
      let isValid = true;
      const name = contactForm.querySelector("#name");
      const email = contactForm.querySelector("#email");
      const message = contactForm.querySelector("#message");

      if (!name.value.trim()) {
        document.getElementById("nameError").classList.remove("hidden");
        isValid = false;
      }

      if (!email.value.trim() || !email.value.includes("@")) {
        document.getElementById("emailError").classList.remove("hidden");
        isValid = false;
      }

      if (!message.value.trim()) {
        document.getElementById("messageError").classList.remove("hidden");
        isValid = false;
      }

      if (isValid) {
        // Show success message
        document.getElementById("formSuccess").classList.remove("hidden");
        contactForm.reset();

        // Hide success message after 3 seconds
        setTimeout(() => {
          document.getElementById("formSuccess").classList.add("hidden");
        }, 3000);
      }
    });
  }
});

// Magnetic effect on buttons and links
document.addEventListener("DOMContentLoaded", () => {
  const magneticElements = document.querySelectorAll(".magnetic");

  magneticElements.forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "translate(0px, 0px)";
    });
  });
});

// Intersection Observer for scroll animations
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });
});
