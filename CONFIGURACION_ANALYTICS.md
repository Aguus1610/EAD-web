# 📊 Configuración de Google Analytics y Search Console

## 1. Google Analytics

### Paso 1: Crear cuenta
1. Ve a https://analytics.google.com/
2. Crea una cuenta (si no tienes una)
3. Crea una propiedad para "EAD Oleohidráulica"
4. Obtén tu Measurement ID (formato: `G-XXXXXXXXXX`)

### Paso 2: Configurar en el sitio
1. Abre `index.html`
2. Busca la línea: `gtag('config', 'G-XXXXXXXXXX', ...)`
3. Reemplaza `G-XXXXXXXXXX` con tu Measurement ID real
4. Repite en todas las páginas HTML

### Paso 3: Eventos configurados
Ya están implementados los siguientes eventos:
- ✅ `pwa_install` - Cuando un usuario instala la PWA
- ✅ `whatsapp_click` - Cuando hacen clic en botón WhatsApp
- ✅ `page_view` - Vista de página automática

### Eventos adicionales recomendados
Puedes agregar más eventos en `main.js`:

```javascript
// Ejemplo: Track formulario enviado
gtag('event', 'form_submit', {
  'event_category': 'Contact',
  'event_label': 'Quick Contact Form'
});

// Ejemplo: Track CTA click
gtag('event', 'cta_click', {
  'event_category': 'Conversion',
  'event_label': 'Hero CTA'
});
```

## 2. Google Search Console

### Paso 1: Verificar propiedad
1. Ve a https://search.google.com/search-console
2. Agrega propiedad > URL prefix
3. Ingresa: `https://aguus1610.github.io/EAD-web/`
4. Elige método de verificación:
   - **Opción 1 (Recomendada):** HTML tag
     - Copia el código de verificación
     - En `index.html`, busca: `<meta name="google-site-verification" content="TU_CODIGO_DE_VERIFICACION" />`
     - Reemplaza `TU_CODIGO_DE_VERIFICACION` con tu código
   - **Opción 2:** Subir archivo HTML
   - **Opción 3:** DNS (más complejo)

### Paso 2: Enviar sitemap
1. Crea `sitemap.xml` (ver abajo)
2. En Search Console: Sitemaps > Agregar nuevo sitemap
3. Ingresa: `sitemap.xml`
4. Envía

### Paso 3: Monitorear
- Revisa "Cobertura" para ver páginas indexadas
- Revisa "Rendimiento" para ver búsquedas
- Revisa "Mejoras" para problemas

## 3. Sitemap.xml

Crea un archivo `sitemap.xml` en la raíz:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://aguus1610.github.io/EAD-web/</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://aguus1610.github.io/EAD-web/servicios.html</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://aguus1610.github.io/EAD-web/productos.html</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://aguus1610.github.io/EAD-web/nosotros.html</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://aguus1610.github.io/EAD-web/contacto.html</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>
```

## 4. robots.txt

Crea un archivo `robots.txt` en la raíz:

```
User-agent: *
Allow: /

Sitemap: https://aguus1610.github.io/EAD-web/sitemap.xml
```

## 5. Verificación de Implementación

### Verificar Google Analytics:
1. Abre tu sitio web
2. Abre DevTools (F12) > Network
3. Filtra por "collect" o "analytics"
4. Deberías ver requests a google-analytics.com
5. O usa la extensión "Google Analytics Debugger"

### Verificar Search Console:
1. Usa la herramienta de inspección de URL
2. Ingresa cualquier URL de tu sitio
3. Verifica que esté indexada

## 6. Métricas Importantes a Monitorear

### Google Analytics:
- **Usuarios** - Cantidad de visitantes
- **Sesiones** - Visitas totales
- **Tasa de rebote** - Debería ser < 60%
- **Tiempo en sitio** - Objetivo: > 2 minutos
- **Páginas por sesión** - Objetivo: > 2
- **Conversiones** - Clics en WhatsApp, formularios

### Search Console:
- **Impresiones** - Veces que apareces en búsquedas
- **Clics** - Veces que hacen clic en tus resultados
- **CTR** - Tasa de clics (objetivo: > 3%)
- **Posición promedio** - Objetivo: < 10
- **Cobertura** - Páginas indexadas sin errores

## 7. Configuración Adicional Recomendada

### Goals en Google Analytics:
1. Ve a Admin > Goals
2. Crea objetivos:
   - **WhatsApp Click** - Evento: `whatsapp_click`
   - **Form Submit** - Evento: `form_submit`
   - **PWA Install** - Evento: `pwa_install`

### Audiencias:
- Crear audiencia de "Visitantes recurrentes"
- Crear audiencia de "Usuarios que hicieron clic en WhatsApp"

## 8. Troubleshooting

### Analytics no funciona:
- Verifica que el ID sea correcto
- Verifica que no haya bloqueadores de anuncios
- Revisa la consola del navegador para errores

### Search Console no verifica:
- Verifica que el meta tag esté en todas las páginas
- Espera 24-48 horas
- Prueba método alternativo de verificación

---

**Última actualización:** Enero 2025

