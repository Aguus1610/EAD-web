# 📍 Ejemplo Visual de Configuración

## 🔍 Dónde Hacer los Cambios en `index.html`

---

## 1️⃣ Google Analytics - Ubicación Exacta

### Buscar esta sección (alrededor de la línea 180):

```html
<!-- Google Analytics (reemplazar G-XXXXXXXXXX con tu ID real) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', {  ← AQUÍ también
    'page_path': window.location.pathname,
    'send_page_view': true
  });
```

### Cambiar a (ejemplo con ID ficticio):

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123XYZ9"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-ABC123XYZ9', {  ← Mismo ID aquí
    'page_path': window.location.pathname,
    'send_page_view': true
  });
```

**⚠️ IMPORTANTE:** Cambia `G-XXXXXXXXXX` en **2 lugares**:
1. En la línea del `<script src=...>` 
2. En la línea del `gtag('config', ...)`

---

## 2️⃣ Google Search Console - Ubicación Exacta

### Buscar esta línea (alrededor de la línea 210):

```html
<!-- Google Search Console Verification (reemplazar con tu código) -->
<meta name="google-site-verification" content="TU_CODIGO_DE_VERIFICACION" />
```

### Cambiar a (ejemplo con código ficticio):

```html
<!-- Google Search Console Verification -->
<meta name="google-site-verification" content="abc123xyz789def456ghi012jkl345mno678pqr901stu234vwx567yz" />
```

**⚠️ IMPORTANTE:** 
- Solo reemplaza `TU_CODIGO_DE_VERIFICACION`
- No cambies nada más de esa línea
- El código es largo (50+ caracteres)

---

## 3️⃣ Verificación Visual - Antes y Después

### ❌ ANTES (No configurado):

```html
<!-- Google Analytics (reemplazar G-XXXXXXXXXX con tu ID real) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
...
gtag('config', 'G-XXXXXXXXXX', {

<!-- Google Search Console Verification (reemplazar con tu código) -->
<meta name="google-site-verification" content="TU_CODIGO_DE_VERIFICACION" />
```

### ✅ DESPUÉS (Configurado):

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123XYZ9"></script>
...
gtag('config', 'G-ABC123XYZ9', {

<!-- Google Search Console Verification -->
<meta name="google-site-verification" content="abc123xyz789def456ghi012jkl345mno678pqr901stu234vwx567yz" />
```

---

## 📋 Checklist de Verificación

Después de hacer los cambios, verifica:

- [ ] Reemplacé `G-XXXXXXXXXX` en **2 lugares** (línea script y línea config)
- [ ] Reemplacé `TU_CODIGO_DE_VERIFICACION` con mi código real
- [ ] No dejé espacios extra
- [ ] Guardé el archivo
- [ ] Hice commit y push a GitHub

---

## 🎬 Proceso Completo Paso a Paso

### Paso 1: Abrir el archivo
```
1. Abre index.html en tu editor
2. Presiona Ctrl+F (o Cmd+F en Mac)
3. Busca: G-XXXXXXXXXX
```

### Paso 2: Reemplazar Analytics
```
1. Click en "Reemplazar" (o Ctrl+H)
2. Buscar: G-XXXXXXXXXX
3. Reemplazar con: G-TU_ID_REAL
4. Click "Reemplazar todo" (o "Reemplazar" 2 veces)
```

### Paso 3: Reemplazar Search Console
```
1. Busca: TU_CODIGO_DE_VERIFICACION
2. Reemplaza con tu código real
3. Guarda el archivo (Ctrl+S)
```

### Paso 4: Subir cambios
```bash
git add index.html
git commit -m "Configurar Analytics y Search Console"
git push origin master
```

### Paso 5: Verificar (5-10 minutos después)
```
1. Ve a tu sitio: https://aguus1610.github.io/EAD-web/
2. Abre Analytics > Tiempo real
3. Deberías verte aparecer ✅
```

---

## 💡 Tips Importantes

1. **Copia y pega exactamente:**
   - No agregues espacios
   - No cambies comillas
   - Respeta mayúsculas/minúsculas

2. **Si tienes dudas:**
   - Compara con el ejemplo de arriba
   - Verifica que el formato sea igual
   - Revisa que no haya errores de sintaxis

3. **Si algo no funciona:**
   - Revisa la consola del navegador (F12)
   - Verifica que los IDs sean correctos
   - Espera unos minutos y vuelve a intentar

---

## 📞 ¿Necesitas Ayuda?

Si tienes problemas:
1. Revisa `GUIA_CONFIGURACION_PASO_A_PASO.md` para detalles
2. Verifica que copiaste los códigos correctamente
3. Asegúrate de haber hecho push a GitHub

---

**¡Con estos ejemplos deberías poder configurar todo fácilmente!** 🚀

