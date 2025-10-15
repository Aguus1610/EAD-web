/* ===== Hero Carousel ===== */
document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.hero-carousel');
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.carousel-slide');
  const indicators = carousel.querySelectorAll('.indicator');
  let currentSlide = 0;
  let autoPlayTimer;

  // Función para mostrar una slide específica
  function showSlide(index) {
    // Remover clase active de todas las slides e indicadores
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));

    // Asegurar que el índice esté en rango
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;

    // Activar la slide e indicador correspondiente
    slides[index].classList.add('active');
    indicators[index].classList.add('active');

    currentSlide = index;
  }

  // Función para ir a la siguiente slide
  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  // Función para iniciar el autoplay
  function startAutoPlay() {
    autoPlayTimer = setInterval(nextSlide, 6000); // 6 segundos
  }

  // Función para detener el autoplay
  function stopAutoPlay() {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  }

  // Event listeners para los indicadores
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      showSlide(index);
      stopAutoPlay();
      // Reiniciar autoplay después de 10 segundos de inactividad
      setTimeout(startAutoPlay, 10000);
    });
  });

  // Pausar autoplay cuando el mouse está sobre el carousel
  carousel.addEventListener('mouseenter', stopAutoPlay);
  carousel.addEventListener('mouseleave', startAutoPlay);

  // Pausar autoplay cuando la página no está visible
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAutoPlay();
    } else {
      startAutoPlay();
    }
  });

  // Inicializar el carousel
  showSlide(0);
  startAutoPlay();

  // Limpiar timer al descargar la página
  window.addEventListener('beforeunload', stopAutoPlay);
});