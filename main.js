/* ===== Utilidades ===== */
const $ = (sel) => document.querySelector(sel);

function initNav() {
  /* Navegación móvil */
  const nav = document.querySelector(".site-nav");
  const navToggle = document.querySelector(".nav-toggle");
  
  if (nav && navToggle) {
    navToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const willOpen = !nav.classList.contains("open");
      
      nav.classList.toggle("open");
      navToggle.classList.toggle("open");
      
      // Evita scroll del body cuando el menú está abierto
      document.body.style.overflow = willOpen ? "hidden" : "";
      
      if (!willOpen) {
        // cerramos también cualquier submenú
        document.querySelectorAll(".has-submenu.open").forEach((li) => {
          li.classList.remove("open");
          li.querySelector(".submenu-toggle")?.setAttribute("aria-expanded", "false");
        });
      }
    });

    /* Cierra navegación al pulsar un enlace */
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        navToggle.classList.remove("open");
        document.body.style.overflow = ""; // Restaura el scroll
      });
    });
  }

  /* Submenús accesibles */
  document.querySelectorAll(".submenu-toggle").forEach((btn) => {
    const parentLi = btn.parentElement;
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // Evita cualquier navegación
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
    
    if (nav && navToggle) {
      nav.classList.remove("open");
      navToggle.classList.remove("open");
      document.body.style.overflow = "";
    }
  });

  /* Año dinámico */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initNav);
} else {
  initNav();
}
