/* ===== Script de Verificación PWA ===== */
/* Ejecutar en consola del navegador para verificar estado del PWA */

(function() {
  console.log('%c🔍 Verificación PWA - EAD Oleohidráulica', 'font-size: 16px; font-weight: bold; color: #ffaa00;');
  console.log('==========================================\n');

  // Verificar Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(registrations => {
      if (registrations.length > 0) {
        console.log('✅ Service Worker registrado:', registrations.length, 'instancia(s)');
        registrations.forEach((reg, index) => {
          console.log(`   ${index + 1}. Scope: ${reg.scope}`);
          console.log(`      Estado: ${reg.active ? 'Activo' : 'Inactivo'}`);
        });
      } else {
        console.log('❌ Service Worker NO registrado');
        console.log('   Verifica que sw.js esté en la raíz y accesible');
      }
    });
  } else {
    console.log('❌ Service Worker NO soportado en este navegador');
  }

  // Verificar Manifest
  const manifestLink = document.querySelector('link[rel="manifest"]');
  if (manifestLink) {
    fetch(manifestLink.href)
      .then(response => response.json())
      .then(manifest => {
        console.log('✅ Manifest.json encontrado');
        console.log('   Nombre:', manifest.name);
        console.log('   Short name:', manifest.short_name);
        console.log('   Íconos:', manifest.icons.length);
        console.log('   Theme color:', manifest.theme_color);
      })
      .catch(error => {
        console.log('❌ Error al cargar manifest.json:', error);
      });
  } else {
    console.log('❌ Manifest.json NO encontrado');
  }

  // Verificar instalabilidad
  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', (e) => {
    deferredPrompt = e;
    console.log('✅ PWA es instalable');
    console.log('   El usuario puede instalar la aplicación');
  });

  // Verificar si ya está instalada
  if (window.matchMedia('(display-mode: standalone)').matches) {
    console.log('✅ PWA ya está instalada y ejecutándose en modo standalone');
  } else {
    console.log('ℹ️  PWA no está instalada (ejecutándose en navegador)');
  }

  // Verificar cache
  if ('caches' in window) {
    caches.keys().then(cacheNames => {
      console.log('\n📦 Caches disponibles:', cacheNames.length);
      cacheNames.forEach(cacheName => {
        console.log(`   - ${cacheName}`);
        caches.open(cacheName).then(cache => {
          cache.keys().then(keys => {
            console.log(`     Archivos en cache: ${keys.length}`);
          });
        });
      });
    });
  }

  // Verificar recursos críticos
  console.log('\n📊 Recursos Críticos:');
  const criticalResources = [
    'styles.css',
    'main.js',
    'Logo simple Taller (snf blanco).png'
  ];

  criticalResources.forEach(resource => {
    const link = document.querySelector(`link[href="${resource}"], script[src="${resource}"], img[src="${resource}"]`);
    if (link) {
      const preload = document.querySelector(`link[rel="preload"][href="${resource}"]`);
      console.log(`   ${preload ? '✅' : '⚠️'} ${resource} ${preload ? '(preload)' : '(sin preload)'}`);
    }
  });

  console.log('\n==========================================');
  console.log('💡 Tips:');
  console.log('   - Para instalar: Busca el botón de instalación en la barra de direcciones');
  console.log('   - Para probar offline: Desactiva la conexión y recarga la página');
  console.log('   - Para limpiar cache: DevTools > Application > Clear storage');
})();

