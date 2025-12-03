# ⚡ Configuración Rápida - Lo Esencial

## 🎯 Configuración en 3 Pasos (15 minutos)

---

## ✅ PASO 1: Google Analytics (5 minutos)

### 1.1 Obtener tu ID
1. Ve a: **https://analytics.google.com/**
2. Crea cuenta/propiedad (si no tienes)
3. **Copia tu Measurement ID** (formato: `G-ABC123XYZ9`)

### 1.2 Configurar en tu sitio
1. Abre `index.html`
2. Busca (Ctrl+F): `G-XXXXXXXXXX`
3. Reemplaza **2 veces** con tu ID real:
   ```html
   <!-- Línea ~181 -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-TU_ID_AQUI"></script>
   
   <!-- Línea ~186 -->
   gtag('config', 'G-TU_ID_AQUI', {
   ```

### 1.3 Subir cambios
```bash
git add index.html
git commit -m "Configurar Google Analytics"
git push origin master
```

### 1.4 Verificar (5 minutos después)
- Ve a Analytics > Tiempo real
- Visita tu sitio
- Deberías verte aparecer ✅

---

## ✅ PASO 2: Google Search Console (5 minutos)

### 2.1 Agregar propiedad
1. Ve a: **https://search.google.com/search-console**
2. Click "Agregar propiedad"
3. Ingresa: `https://aguus1610.github.io/EAD-web/`
4. Elige: **"Etiqueta HTML"**

### 2.2 Copiar código
- Copia solo el código largo del `content=`
- Ejemplo: `abc123xyz789def456ghi012...`

### 2.3 Configurar en tu sitio
1. Abre `index.html`
2. Busca: `TU_CODIGO_DE_VERIFICACION`
3. Reemplaza con tu código:
   ```html
   <!-- Línea ~200 -->
   <meta name="google-site-verification" content="TU_CODIGO_AQUI" />
   ```

### 2.4 Subir y verificar
```bash
git add index.html
git commit -m "Configurar Search Console"
git push origin master
```
- Vuelve a Search Console > Click "Verificar" ✅

### 2.5 Enviar sitemap
- Search Console > Sitemaps > Agregar: `sitemap.xml` > Enviar ✅

---

## ✅ PASO 3: Verificar PWA (5 minutos)

### 3.1 Abrir tu sitio
- Ve a: **https://aguus1610.github.io/EAD-web/**
- Abre DevTools (F12)

### 3.2 Verificar Service Worker
- Pestaña "Application" > "Service Workers"
- Deberías ver: ✅ "activated and is running"

### 3.3 Probar instalación
- Busca ícono de instalación en barra de direcciones
- O: Menú (3 puntos) > "Instalar EAD Oleohidráulica"
- Click "Instalar" ✅

---

## 📝 Resumen de Archivos a Modificar

### `index.html` - Líneas a cambiar:

| Línea | Buscar | Reemplazar con |
|-------|--------|----------------|
| ~181 | `G-XXXXXXXXXX` | Tu Measurement ID de Analytics |
| ~186 | `G-XXXXXXXXXX` | Tu Measurement ID de Analytics |
| ~200 | `TU_CODIGO_DE_VERIFICACION` | Tu código de Search Console |

---

## 🎬 Orden Recomendado

1. **Primero:** Google Analytics (más importante)
2. **Segundo:** Google Search Console (para SEO)
3. **Tercero:** Verificar PWA (ya funciona, solo verificar)
4. **Después (opcional):** Instagram API y optimización imágenes

---

## ⚠️ Importante

- **Espera 5-10 minutos** después de hacer push para que GitHub Pages actualice
- **Analytics puede tardar 24-48 horas** en mostrar datos completos
- **Search Console puede tardar días** en indexar todas las páginas

---

## 🆘 ¿Problemas?

### No veo mi visita en Analytics:
- ✅ Verifica que el ID sea correcto
- ✅ Desactiva bloqueador de anuncios
- ✅ Espera 5-10 minutos después del push

### Search Console no verifica:
- ✅ Verifica que el código esté correcto (sin espacios)
- ✅ Espera 24 horas y vuelve a intentar
- ✅ Prueba método alternativo (archivo HTML)

### PWA no instala:
- ✅ Verifica que estés en HTTPS
- ✅ Limpia cache del navegador
- ✅ Verifica que `manifest.json` esté accesible

---

## 📚 Documentación Completa

Para más detalles, consulta:
- `GUIA_CONFIGURACION_PASO_A_PASO.md` - Guía completa y detallada
- `CONFIGURACION_ANALYTICS.md` - Guía específica de Analytics
- `OPTIMIZACIONES_FASE4.md` - Detalles técnicos de PWA

---

**¡Listo! Con estos 3 pasos tendrás lo esencial configurado.** 🎉

