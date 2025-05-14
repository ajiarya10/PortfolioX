// Ambil tombol toggle dark mode
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Fungsi untuk update ikon tombol sesuai tema
function updateToggleIcon() {
  if (htmlElement.classList.contains('dark')) {
    themeToggleBtn.textContent = '☀️'; // Ikon matahari untuk mode terang
  } else {
    themeToggleBtn.textContent = '🌙'; // Ikon bulan untuk mode gelap
  }
}

// Set tema awal berdasarkan localStorage atau preferensi sistem
if (
  localStorage.getItem('theme') === 'dark' ||
  (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  htmlElement.classList.add('dark');
} else {
  htmlElement.classList.remove('dark');
}
updateToggleIcon();

// Event listener toggle dark mode
themeToggleBtn.addEventListener('click', () => {
  htmlElement.classList.toggle('dark');
  if (htmlElement.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
  updateToggleIcon();
});


themeToggleBtn.addEventListener('click', () => {
  if (htmlElement.classList.contains('dark')) {
    htmlElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    themeToggleBtn.textContent = '🌙';
  } else {
    htmlElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    themeToggleBtn.textContent = '☀️';
  }
});

// Mobile nav toggle
const navToggleBtn = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');

navToggleBtn.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Swiper testimonial slider initialization
const swiper = new Swiper('.mySwiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 6000,
  },
});

// Form validation
const form = document.getElementById('contactForm');
const nameInput = form.name;
const emailInput = form.email;
const messageInput = form.message;
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let valid = true;

  // Reset errors
  nameError.style.display = 'none';
  emailError.style.display = 'none';
  messageError.style.display = 'none';
  formSuccess.style.display = 'none';

  if (!nameInput.value.trim()) {
    nameError.style.display = 'block';
    valid = false;
  }

  const emailPattern = /^\S+@\S+\.\S+$/;
  if (!emailInput.value.trim() || !emailPattern.test(emailInput.value)) {
    emailError.style.display = 'block';
    valid = false;
  }

  if (!messageInput.value.trim()) {
    messageError.style.display = 'block';
    valid = false;
  }

  if (valid) {
    // Simulate form submission success
    formSuccess.style.display = 'block';
    form.reset();
  }
});