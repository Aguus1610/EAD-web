/* ===== Scroll Reveal Animations ===== */

function initScrollAnimations() {
  // Observer para revelar elementos al hacer scroll
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Opcional: dejar de observar después de la primera aparición
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observar elementos que queremos animar
  const elementsToReveal = document.querySelectorAll('.feature, .service-card, .product-card, .metric-item');
  elementsToReveal.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollAnimations);
} else {
  initScrollAnimations();
}
