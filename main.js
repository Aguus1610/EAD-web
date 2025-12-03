/* ===== Utilidades ===== */
const $ = (sel) => document.querySelector(sel);

function initNav() {
  /* Navegación móvil */
  const nav = document.querySelector(".site-nav");
  const navToggle = document.querySelector(".nav-toggle");
  const navOverlay = document.querySelector(".nav-overlay");
  const header = document.querySelector(".site-header");
  
  /* ===== Header Scroll Effect ===== */
  if (header) {
    let lastScroll = 0;
    const scrollThreshold = 50;
    
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      
      // Añade clase scrolled cuando se hace scroll
      if (currentScroll > scrollThreshold) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
      
      lastScroll = currentScroll;
    }, { passive: true });
  }
  
  /* ===== Mobile Navigation ===== */
  if (nav && navToggle) {
    const openNav = () => {
      nav.classList.add("open");
      navToggle.classList.add("open");
      navToggle.setAttribute("aria-expanded", "true");
      if (navOverlay) navOverlay.classList.add("active");
      document.body.style.overflow = "hidden";
    };
    
    const closeNav = () => {
      nav.classList.remove("open");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      if (navOverlay) navOverlay.classList.remove("active");
      document.body.style.overflow = "";
      
      // Cierra también cualquier submenú
      document.querySelectorAll(".has-submenu.open").forEach((li) => {
        li.classList.remove("open");
        li.querySelector(".submenu-toggle")?.setAttribute("aria-expanded", "false");
      });
    };
    
    navToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = nav.classList.contains("open");
      
      if (isOpen) {
        closeNav();
      } else {
        openNav();
      }
    });

    /* Cierra navegación al pulsar overlay */
    if (navOverlay) {
      navOverlay.addEventListener("click", closeNav);
    }

    /* Cierra navegación al pulsar un enlace */
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeNav);
    });
    
    /* Cierra navegación con tecla Escape */
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        closeNav();
      }
    });
  }

  /* Submenús accesibles */
  document.querySelectorAll(".submenu-toggle").forEach((btn) => {
    const parentLi = btn.parentElement;
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      parentLi.classList.toggle("open");
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", !expanded);
    });
  });

  /* Cierra submenú al hacer clic en un enlace del submenú */
  document.querySelectorAll(".submenu a").forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".has-submenu.open").forEach((li) => {
        li.classList.remove("open");
        li.querySelector(".submenu-toggle")?.setAttribute("aria-expanded", "false");
      });
    });
  });

  /* Cierra submenú al hacer clic fuera */
  document.addEventListener("click", (ev) => {
    // ignora clics dentro del nav abierto
    if (nav && navToggle && (nav.contains(ev.target) || navToggle.contains(ev.target))) return;
    
    document.querySelectorAll(".has-submenu.open").forEach((li) => {
      li.classList.remove("open");
      li.querySelector(".submenu-toggle")?.setAttribute("aria-expanded", "false");
    });
    
    if (nav && navToggle && nav.classList.contains("open")) {
      nav.classList.remove("open");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      if (navOverlay) navOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  /* Año dinámico */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* ===== Animación de Números en Estadísticas ===== */
function initStatsAnimation() {
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  
  if (statNumbers.length === 0) return;
  
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
        const target = parseInt(entry.target.getAttribute('data-target'));
        animateNumber(entry.target, target);
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  statNumbers.forEach(stat => observer.observe(stat));
}

function animateNumber(element, target) {
  const duration = 2000;
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

/* ===== Formulario de Contacto Rápido ===== */
function initQuickContact() {
  const sidebar = document.getElementById('quickContactSidebar');
  const trigger = document.querySelector('.quick-contact-trigger');
  const closeBtn = document.querySelector('.quick-contact-close');
  const overlay = document.querySelector('.quick-contact-overlay');
  const form = document.getElementById('quick-contact-form');
  
  if (!sidebar || !trigger) return;
  
  const openSidebar = () => {
    sidebar.classList.add('active');
    document.body.style.overflow = 'hidden';
  };
  
  const closeSidebar = () => {
    sidebar.classList.remove('active');
    document.body.style.overflow = '';
  };
  
  trigger.addEventListener('click', openSidebar);
  if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
  if (overlay) overlay.addEventListener('click', closeSidebar);
  
  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('active')) {
      closeSidebar();
    }
  });
  
  // Manejo del formulario
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('quick-name').value;
      const phone = document.getElementById('quick-phone').value;
      const message = document.getElementById('quick-message').value;
      
      // Crear mensaje para WhatsApp
      const whatsappMessage = `Hola, soy ${name} (${phone}). ${message}`;
      const whatsappUrl = `https://wa.me/542302672827?text=${encodeURIComponent(whatsappMessage)}`;
      
      // Abrir WhatsApp
      window.open(whatsappUrl, '_blank');
      
      // Cerrar sidebar después de un breve delay
      setTimeout(() => {
        closeSidebar();
        form.reset();
      }, 500);
    });
  }
}

/* ===== FAQ Accordion ===== */
function initFAQ() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const isExpanded = question.getAttribute('aria-expanded') === 'true';
      const faqItem = question.closest('.faq-item');
      
      // Cerrar todas las otras preguntas (opcional - descomentar si quieres solo una abierta a la vez)
      // faqQuestions.forEach(q => {
      //   if (q !== question) {
      //     q.setAttribute('aria-expanded', 'false');
      //   }
      // });
      
      // Toggle la pregunta actual
      question.setAttribute('aria-expanded', !isExpanded);
    });
  });
}

/* ===== Inicialización ===== */
function initAll() {
  initNav();
  initStatsAnimation();
  initQuickContact();
  initFAQ();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAll);
} else {
  initAll();
}
