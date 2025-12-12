/* ===== Service Worker para EAD Oleohidráulica ===== */
/* Versión 1.0 - Cache Strategy */

const CACHE_NAME = 'ead-oleohidraulica-v1';
const RUNTIME_CACHE = 'ead-runtime-v1';

// Recursos estáticos para cachear
const STATIC_ASSETS = [
  '/EAD-web/',
  '/EAD-web/index.html',
  '/EAD-web/styles.css',
  '/EAD-web/main.js',
  '/EAD-web/carousel.js',
  '/EAD-web/Logo simple Taller (snf blanco).png',
  '/EAD-web/manifest.json'
];

// Estrategia: Cache First para assets estáticos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Cacheando assets estáticos');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activar y limpiar caches antiguos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => {
            return cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE;
          })
          .map((cacheName) => {
            console.log('Service Worker: Eliminando cache antiguo', cacheName);
            return caches.delete(cacheName);
          })
      );
    }).then(() => self.clients.claim())
  );
});

// Interceptar requests
self.addEventListener('fetch', (event) => {
  // Ignorar requests que no son GET
  if (event.request.method !== 'GET') {
    return;
  }

  // Ignorar requests a APIs externas y recursos dinámicos
  const url = new URL(event.request.url);
  if (url.origin !== location.origin && !url.pathname.startsWith('/EAD-web/')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Cache First para HTML, CSS, JS
        if (cachedResponse) {
          return cachedResponse;
        }

        // Network First para imágenes
        if (event.request.destination === 'image') {
          return fetch(event.request)
            .then((response) => {
              // Cachear imágenes exitosas
              if (response.status === 200) {
                const responseToCache = response.clone();
                caches.open(RUNTIME_CACHE)
                  .then((cache) => {
                    cache.put(event.request, responseToCache);
                  });
              }
              return response;
            })
            .catch(() => {
              // Retornar placeholder si falla
              return new Response('', { status: 404 });
            });
        }

        // Network First para otros recursos
        return fetch(event.request)
          .then((response) => {
            // No cachear respuestas que no son exitosas
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            const responseToCache = response.clone();
            caches.open(RUNTIME_CACHE)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(() => {
            // Si es HTML y falla, retornar index.html offline
            if (event.request.destination === 'document') {
              return caches.match('/EAD-web/index.html');
            }
          });
      })
  );
});

// Mensaje para actualizar cache
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Notificar a los clientes cuando hay una nueva versión disponible
self.addEventListener('activate', (event) => {
  event.waitUntil(
    self.clients.matchAll().then((clients) => {
      clients.forEach((client) => {
        client.postMessage({
          type: 'SW_UPDATED',
          message: 'Nueva versión disponible. Recarga la página para actualizar.'
        });
      });
    })
  );
});

