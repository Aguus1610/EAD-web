# 📖 Guía de Configuración Paso a Paso
## Cómo Configurar las Mejoras Implementadas

---

## 🎯 Índice

1. [Google Analytics](#1-google-analytics)
2. [Google Search Console](#2-google-search-console)
3. [Instagram Feed (Opcional)](#3-instagram-feed-opcional)
4. [Optimización de Imágenes](#4-optimización-de-imágenes)
5. [Verificación PWA](#5-verificación-pwa)

---

## 1. Google Analytics

### Paso 1: Crear cuenta y propiedad

1. **Ve a Google Analytics:**
   - Abre: https://analytics.google.com/
   - Inicia sesión con tu cuenta de Google

2. **Crear cuenta (si no tienes una):**
   - Click en "Comenzar a medir" o "Crear cuenta"
   - Nombre de cuenta: `EAD Oleohidráulica` (o el que prefieras)
   - Configura zona horaria: `(GMT-03:00) Buenos Aires`
   - Click en "Siguiente"

3. **Crear propiedad:**
   - Nombre de propiedad: `EAD Oleohidráulica Web`
   - Zona horaria: `(GMT-03:00) Buenos Aires`
   - Moneda: `ARS (Peso argentino)`
   - Click en "Siguiente"

4. **Información del negocio:**
   - Selecciona: "Construcción, bienes raíces e ingeniería" o "Otro"
   - Tamaño: Selecciona el que corresponda
   - Click en "Crear"

5. **Aceptar términos:**
   - Lee y acepta los términos de servicio
   - Click en "Acepto"

### Paso 2: Obtener tu Measurement ID

1. **Encontrar tu ID:**
   - En la pantalla de bienvenida, verás tu **Measurement ID**
   - Formato: `G-XXXXXXXXXX` (G seguido de 10 caracteres)
   - **Copia este ID** (lo necesitarás en el siguiente paso)

2. **Si no lo ves:**
   - Ve a: Admin (ícono de engranaje abajo izquierda)
   - En la columna "Propiedad", click en "Información de la propiedad"
   - Ahí verás tu Measurement ID

### Paso 3: Configurar en tu sitio web

1. **Abrir `index.html`:**
   - Abre el archivo `index.html` en tu editor

2. **Buscar el código de Analytics:**
   - Presiona `Ctrl + F` (o `Cmd + F` en Mac)
   - Busca: `G-XXXXXXXXXX`
   - Deberías encontrar algo como:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     gtag('config', 'G-XXXXXXXXXX', {
   ```

3. **Reemplazar el ID:**
   - Reemplaza **ambas** ocurrencias de `G-XXXXXXXXXX` con tu ID real
   - Ejemplo: Si tu ID es `G-ABC123XYZ9`, debería quedar:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123XYZ9"></script>
   <script>
     gtag('config', 'G-ABC123XYZ9', {
   ```

4. **Repetir en otras páginas:**
   - Haz lo mismo en: `servicios.html`, `productos.html`, `nosotros.html`, `contacto.html`
   - O simplemente copia el bloque completo de Analytics de `index.html` a las otras páginas

### Paso 4: Verificar que funciona

1. **Sube los cambios a GitHub:**
   ```bash
   git add index.html
   git commit -m "Configurar Google Analytics"
   git push origin master
   ```

2. **Espera 5-10 minutos** para que GitHub Pages actualice

3. **Abre tu sitio web:**
   - Ve a: https://aguus1610.github.io/EAD-web/

4. **Verificar en Analytics:**
   - Ve a Google Analytics > Informes > Tiempo real
   - Deberías ver tu visita aparecer en los últimos 30 minutos
   - Si ves tu visita = ✅ **¡Funciona correctamente!**

---

## 2. Google Search Console

### Paso 1: Agregar propiedad

1. **Ve a Google Search Console:**
   - Abre: https://search.google.com/search-console
   - Inicia sesión con la misma cuenta de Google

2. **Agregar propiedad:**
   - Click en el dropdown "Agregar propiedad"
   - Selecciona "URL prefix" (Prefijo de URL)
   - Ingresa: `https://aguus1610.github.io/EAD-web/`
   - Click en "Continuar"

### Paso 2: Verificar propiedad

1. **Elegir método de verificación:**
   - Te mostrará varias opciones
   - **Recomendado:** "Etiqueta HTML"

2. **Copiar código de verificación:**
   - Verás algo como:
   ```html
   <meta name="google-site-verification" content="abc123xyz789..." />
   ```
   - **Copia solo la parte del `content`** (el código largo)

3. **Configurar en tu sitio:**
   - Abre `index.html`
   - Busca: `TU_CODIGO_DE_VERIFICACION`
   - Deberías encontrar:
   ```html
   <meta name="google-site-verification" content="TU_CODIGO_DE_VERIFICACION" />
   ```
   - Reemplaza `TU_CODIGO_DE_VERIFICACION` con el código que copiaste
   - Ejemplo:
   ```html
   <meta name="google-site-verification" content="abc123xyz789def456ghi012jkl345mno678pqr901stu234vwx567yz" />
   ```

4. **Guardar y subir:**
   ```bash
   git add index.html
   git commit -m "Configurar Google Search Console"
   git push origin master
   ```

5. **Volver a Search Console:**
   - Click en "Verificar"
   - Si todo está bien, verás: ✅ **"La propiedad se ha verificado"**

### Paso 3: Enviar sitemap

1. **En Search Console:**
   - En el menú lateral, click en "Sitemaps"

2. **Agregar sitemap:**
   - En "Agregar un sitemap nuevo", ingresa: `sitemap.xml`
   - Click en "Enviar"

3. **Verificar:**
   - Deberías ver: ✅ "sitemap.xml - Correcto"
   - Google comenzará a indexar tus páginas (puede tardar días)

---

## 3. Instagram Feed (Opcional)

Tienes **3 opciones** para mostrar tu feed de Instagram:

### Opción A: Instagram Basic Display API (Gratis, más complejo)

1. **Crear app en Facebook Developers:**
   - Ve a: https://developers.facebook.com/
   - Click en "Mis Apps" > "Crear app"
   - Tipo: "Consumidor" o "Ninguno"
   - Nombre: `EAD Oleohidráulica Instagram`
   - Click en "Crear app"

2. **Agregar producto Instagram:**
   - En el dashboard de tu app, busca "Instagram"
   - Click en "Configurar" en "Instagram Basic Display"

3. **Configurar OAuth:**
   - En "Configuración básica", agrega:
     - **URI de redirección OAuth válidos:** `https://aguus1610.github.io/EAD-web/`
     - **Dominios de la app:** `aguus1610.github.io`

4. **Obtener Access Token:**
   - Ve a "Herramientas" > "Generador de tokens"
   - Selecciona tu app y permisos: `instagram_graph_user_profile`, `instagram_graph_user_media`
   - Genera token
   - **Copia el token** (es largo, guárdalo bien)

5. **Configurar en tu sitio:**
   - Abre `instagram-api.js`
   - Busca:
   ```javascript
   const instagramFeed = new InstagramFeed({
     username: 'ead_oleohidraulica',
     accessToken: null, // Agregar tu access token aquí
     useAPI: false // Cambiar a true cuando tengas el access token
   });
   ```
   - Cambia a:
   ```javascript
   const instagramFeed = new InstagramFeed({
     username: 'ead_oleohidraulica',
     accessToken: 'TU_TOKEN_AQUI', // Pega tu token aquí
     useAPI: true // Cambiar a true
   });
   ```

### Opción B: EmbedSocial (Más fácil, puede tener costo)

1. **Crear cuenta:**
   - Ve a: https://embedsocial.com/
   - Crea cuenta gratuita o de pago

2. **Crear widget de Instagram:**
   - Dashboard > "Create Widget" > "Instagram Feed"
   - Conecta tu cuenta de Instagram
   - Personaliza el diseño
   - Obtén tu Widget ID

3. **Configurar en tu sitio:**
   - Abre `instagram-api.js`
   - Busca la función `loadEmbedSocial()`
   - Reemplaza `'TU_WIDGET_ID'` con tu Widget ID real
   - Descomenta la línea en el código:
   ```javascript
   instagramFeed.loadEmbedSocial();
   ```

### Opción C: Dejar como está (Recomendado por ahora)

- El sitio ya muestra imágenes estáticas de Instagram
- Funciona perfectamente sin configuración adicional
- Puedes actualizar las imágenes manualmente cuando quieras

**Recomendación:** Empieza con la Opción C y luego implementa A o B cuando tengas tiempo.

---

## 4. Optimización de Imágenes

### Paso 1: Convertir imágenes a WebP

#### Método 1: Squoosh (Online - Más fácil)

1. **Abrir Squoosh:**
   - Ve a: https://squoosh.app/

2. **Subir imagen:**
   - Arrastra una imagen (ej: `Hidrogrubert-104.webp`)
   - O click en "Select an image"

3. **Configurar:**
   - En el lado derecho, selecciona "WebP"
   - Ajusta calidad: **80-85** (buen balance calidad/tamaño)
   - Observa la comparación de tamaño

4. **Descargar:**
   - Click en "Download"
   - Guarda con el mismo nombre pero extensión `.webp`
   - Ejemplo: `Hidrogrubert-104.webp` → `Hidrogrubert-104.webp` (ya optimizado)

5. **Repetir para todas las imágenes:**
   - Hazlo con las imágenes principales:
     - Hero carousel (4 imágenes)
     - Galería (6 imágenes)
     - Features (3 imágenes)

#### Método 2: ImageOptim (Mac) o FileOptimizer (Windows)

1. **Descargar herramienta:**
   - Mac: https://imageoptim.com/
   - Windows: https://nikkhokkho.sourceforge.net/static.php?page=FileOptimizer

2. **Arrastrar imágenes:**
   - Arrastra todas las imágenes a la app
   - Se optimizarán automáticamente

### Paso 2: Crear versiones @2x para Retina

1. **Para cada imagen importante:**
   - Toma la imagen original
   - Duplícala y redimensiona al **doble de tamaño**
   - Ejemplo: Si la original es 800x600px, crea una de 1600x1200px
   - Nómbrala con `@2x`: `Hidrogrubert-104@2x.webp`

2. **Actualizar HTML (opcional):**
   - El `srcset` ya está configurado para usar versiones @2x
   - Solo necesitas crear los archivos con el nombre correcto

### Paso 3: Verificar optimización

1. **Usar PageSpeed Insights:**
   - Ve a: https://pagespeed.web.dev/
   - Ingresa tu URL: `https://aguus1610.github.io/EAD-web/`
   - Click en "Analizar"
   - Revisa la sección "Oportunidades" para imágenes

2. **Verificar tamaños:**
   - Las imágenes deberían ser < 200KB cada una
   - Las imágenes del hero pueden ser un poco más grandes (< 300KB)

---

## 5. Verificación PWA

### Paso 1: Verificar que funciona

1. **Abrir tu sitio:**
   - Ve a: https://aguus1610.github.io/EAD-web/
   - Abre DevTools (F12)

2. **Verificar Service Worker:**
   - Ve a la pestaña "Application" (o "Aplicación")
   - En el menú lateral, click en "Service Workers"
   - Deberías ver: ✅ "activated and is running"

3. **Verificar Manifest:**
   - En "Application" > "Manifest"
   - Deberías ver la información de tu PWA

### Paso 2: Probar instalación

1. **En Chrome/Edge Desktop:**
   - Busca el ícono de instalación en la barra de direcciones (al lado de la URL)
   - O ve a: Menú (3 puntos) > "Instalar EAD Oleohidráulica"
   - Click en "Instalar"

2. **En Chrome Mobile (Android):**
   - Menú (3 puntos) > "Agregar a pantalla de inicio"
   - O aparecerá un banner automático

3. **Verificar instalación:**
   - La app debería abrirse en una ventana propia
   - Sin barra de direcciones del navegador
   - ✅ **¡PWA instalada correctamente!**

### Paso 3: Usar script de verificación

1. **Abrir consola del navegador:**
   - F12 > Pestaña "Console"

2. **Cargar script:**
   - Abre el archivo `verify-pwa.js`
   - Copia todo su contenido
   - Pégalo en la consola
   - Presiona Enter

3. **Revisar resultados:**
   - Verás un reporte completo del estado de tu PWA
   - ✅ = Todo bien
   - ❌ = Hay algo que revisar

---

## 📋 Checklist Final

### Configuración Básica (Recomendado hacer primero):
- [ ] Google Analytics configurado y funcionando
- [ ] Google Search Console verificado
- [ ] Sitemap enviado a Search Console
- [ ] PWA verificada y probada

### Optimización (Puede hacerse después):
- [ ] Imágenes convertidas a WebP
- [ ] Version @2x creadas para imágenes principales
- [ ] Instagram API configurada (opcional)

---

## 🆘 Solución de Problemas

### Google Analytics no funciona:
- ✅ Verifica que el ID sea correcto (formato: G-XXXXXXXXXX)
- ✅ Verifica que no tengas bloqueador de anuncios activo
- ✅ Espera 24-48 horas para ver datos (puede tardar)
- ✅ Revisa la consola del navegador (F12) para errores

### Search Console no verifica:
- ✅ Verifica que el meta tag esté en todas las páginas
- ✅ Verifica que no haya espacios extra en el código
- ✅ Espera 24-48 horas y vuelve a intentar
- ✅ Prueba método alternativo (archivo HTML)

### PWA no se puede instalar:
- ✅ Verifica que estés en HTTPS (GitHub Pages ya lo tiene)
- ✅ Verifica que `manifest.json` esté accesible
- ✅ Verifica que los íconos existan
- ✅ Limpia cache del navegador y vuelve a intentar

### Instagram no carga:
- ✅ Verifica que el token sea válido (si usas API)
- ✅ Verifica que no haya errores en consola
- ✅ El feed estático funciona sin configuración

---

## 📞 Recursos Adicionales

- **Google Analytics Help:** https://support.google.com/analytics
- **Search Console Help:** https://support.google.com/webmasters
- **Instagram API Docs:** https://developers.facebook.com/docs/instagram-basic-display-api
- **PWA Guide:** https://web.dev/progressive-web-apps/

---

## ✅ Siguiente Paso Después de Configurar

Una vez configurado todo:

1. **Monitorea Analytics** semanalmente
2. **Revisa Search Console** mensualmente
3. **Actualiza contenido** regularmente (blog, imágenes)
4. **Optimiza** basándote en los datos

---

**¿Necesitas ayuda con algún paso específico?** Revisa los archivos de documentación creados o consulta los recursos oficiales.

