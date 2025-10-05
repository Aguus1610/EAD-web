/* ===== Optimizaciones de Performance ===== */

// Lazy loading de imágenes
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px 0px',
    threshold: 0.01
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// Optimización del scroll
let ticking = false;
function onScroll() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      // Aquí se pueden agregar efectos de scroll
      ticking = false;
    });
    ticking = true;
  }
}

window.addEventListener('scroll', onScroll, { passive: true });

// Precarga de páginas importantes
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    const importantPages = ['productos.html', 'servicios.html', 'contacto.html'];
    importantPages.forEach(page => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = page;
      document.head.appendChild(link);
    });
  });
}

// Detectar y reportar errores JavaScript
window.addEventListener('error', (event) => {
  console.error('Error capturado:', event.error);
});

// Service Worker para cache (opcional)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Descomentar cuando se implemente el service worker
    // navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}
