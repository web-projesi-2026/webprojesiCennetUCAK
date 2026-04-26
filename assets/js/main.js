const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const themeToggle = document.getElementById("themeToggle");
const topBtn = document.getElementById("topBtn");

// Mobil Menü
if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
    });
  });
}

// Dark / Light Mode
if (themeToggle) {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeToggle.textContent = "🌙";
  } else {
    themeToggle.textContent = "☀";
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light");
      themeToggle.textContent = "🌙";
    } else {
      localStorage.setItem("theme", "dark");
      themeToggle.textContent = "☀";
    }
  });
}

// Yukarı Çık Butonu
if (topBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      topBtn.classList.add("show");
    } else {
      topBtn.classList.remove("show");
    }
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// Slider
const slider = document.getElementById("solutionSlider");

if (slider) {
  const slides = slider.querySelectorAll(".slide");
  const prevBtn = slider.querySelector(".slider-prev");
  const nextBtn = slider.querySelector(".slider-next");
  const dotsContainer = slider.querySelector(".slider-dots");

  let currentSlide = 0;
  let sliderInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });

    const dots = dotsContainer.querySelectorAll(".slider-dot");
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    currentSlide = index;
  }

  function nextSlide() {
    let newIndex = currentSlide + 1;
    if (newIndex >= slides.length) newIndex = 0;
    showSlide(newIndex);
  }

  function prevSlide() {
    let newIndex = currentSlide - 1;
    if (newIndex < 0) newIndex = slides.length - 1;
    showSlide(newIndex);
  }

  if (dotsContainer) {
    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.className = "slider-dot";
      dot.type = "button";
      dot.addEventListener("click", () => showSlide(i));
      dotsContainer.appendChild(dot);
    });
  }

  if (nextBtn) nextBtn.addEventListener("click", nextSlide);
  if (prevBtn) prevBtn.addEventListener("click", prevSlide);

  function startSlider() {
    sliderInterval = setInterval(nextSlide, 4000);
  }

  function stopSlider() {
    clearInterval(sliderInterval);
  }

  slider.addEventListener("mouseenter", stopSlider);
  slider.addEventListener("mouseleave", startSlider);

  showSlide(0);
  startSlider();
}

// 🔥 YAVAŞ SAYAÇ ANİMASYONU
const counters = document.querySelectorAll(".counter");

function runCounter(counter) {
  const target = Number(counter.getAttribute("data-target")) || 0;
  const suffix = counter.getAttribute("data-suffix") || "";
  let current = 0;

  const increment = 1; // TEK TEK ARTSIN

  const updateCounter = () => {
    current += increment;

    if (current >= target) {
      counter.textContent = target + suffix;
    } else {
      counter.textContent = current + suffix;
      setTimeout(updateCounter, 100); // YAVAŞLIK AYARI
    }
  };

  updateCounter();
}

if (counters.length > 0) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = "true";
        runCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.4
  });

  counters.forEach(counter => {
    counter.textContent = "0";
    observer.observe(counter);
  });
}

// Modal
const modal = document.getElementById("genericDetailModal");
const modalBody = document.getElementById("genericModalBody");
const openButtons = document.querySelectorAll(".open-detail-btn");
const closeButtons = document.querySelectorAll("[data-close-modal]");

if (modal && modalBody && openButtons.length > 0) {
  openButtons.forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".detail-source");
      if (!card) return;

      const title = card.dataset.detailTitle || "";
      const subtitle = card.dataset.detailSubtitle || "";
      const text = card.dataset.detailText || "";

      modalBody.innerHTML = `
        <h2>${title}</h2>
        <p><strong>${subtitle}</strong></p>
        <p>${text}</p>
      `;

      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener("click", () => {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
}

// Sekmeli içerik
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

if (tabButtons.length > 0 && tabContents.length > 0) {
  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-tab");

      tabButtons.forEach(btn => btn.classList.remove("active"));
      tabContents.forEach(content => content.classList.remove("active"));

      button.classList.add("active");

      const activeContent = document.getElementById(target);
      if (activeContent) {
        activeContent.classList.add("active");
      }
    });
  });
}
// FORM KONTROL
// FORM KONTROL
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (form && formMessage) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
      formMessage.style.color = "red";
      formMessage.textContent = "Lütfen tüm alanları doldurun!";
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      formMessage.style.color = "red";
      formMessage.textContent = "Geçerli bir e-posta giriniz!";
      return;
    }

    // ✅ SADECE BAŞARI MESAJI
    formMessage.style.color = "lime";
    formMessage.textContent = "Formunuz başarıyla gönderildi!";

    form.reset();
  });
}
