# 🗺️ Configuración de Google Maps Interactivo

## 📍 Mapa Implementado

Se ha implementado un mapa interactivo de Google Maps en la página de contacto que muestra la ubicación del taller:
- **Dirección:** España 245, Colonia Baron (6315) - La Pampa - Argentina
- **Coordenadas:** -36.1515528, -63.8516893

---

## 🔑 Configurar API Key de Google Maps

### Paso 1: Crear proyecto en Google Cloud Console

1. **Ve a Google Cloud Console:**
   - Abre: https://console.cloud.google.com/
   - Inicia sesión con tu cuenta de Google

2. **Crear nuevo proyecto:**
   - Click en el selector de proyectos (arriba)
   - Click en "Nuevo proyecto"
   - Nombre: `EAD Oleohidráulica Web`
   - Click en "Crear"

3. **Seleccionar el proyecto:**
   - Selecciona el proyecto recién creado del dropdown

### Paso 2: Habilitar Google Maps JavaScript API

1. **Ir a APIs y Servicios:**
   - Menú lateral > "APIs y servicios" > "Biblioteca"

2. **Buscar y habilitar:**
   - Busca: "Maps JavaScript API"
   - Click en "Maps JavaScript API"
   - Click en "HABILITAR"

3. **Habilitar también (opcional pero recomendado):**
   - "Places API" (para búsqueda de lugares)
   - "Geocoding API" (para convertir direcciones a coordenadas)

### Paso 3: Crear credenciales (API Key)

1. **Ir a Credenciales:**
   - Menú lateral > "APIs y servicios" > "Credenciales"

2. **Crear credenciales:**
   - Click en "+ CREAR CREDENCIALES"
   - Selecciona "Clave de API"
   - **Copia la clave generada** (formato: `AIzaSy...`)

3. **Restringir la clave (IMPORTANTE para seguridad):**
   - Click en la clave recién creada para editarla
   - En "Restricciones de aplicación":
     - **Restricciones de sitios web:** Agrega:
       - `https://aguus1610.github.io/*`
       - `https://www.tudominio.com/*` (si tienes dominio propio)
   - En "Restricciones de API":
     - Selecciona "Restringir clave"
     - Marca solo: "Maps JavaScript API" y "Places API"
   - Click en "Guardar"

### Paso 4: Configurar en tu sitio web

1. **Abrir `contacto.html`:**
   - Abre el archivo en tu editor

2. **Buscar la línea del script de Google Maps:**
   - Busca (Ctrl+F): `maps.googleapis.com/maps/api/js?key=`
   - Deberías encontrar algo como:
   ```html
   <script async defer src="https://maps.googleapis.com/maps/api/js?key=TU_API_KEY_AQUI&callback=initMap&libraries=places"></script>
   ```

3. **Reemplazar la API Key:**
   - Reemplaza `TU_API_KEY_AQUI` con tu clave real
   - Ejemplo:
   ```html
   <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyABC123XYZ789&callback=initMap&libraries=places"></script>
   ```

4. **Guardar y subir:**
   ```bash
   git add contacto.html
   git commit -m "Configurar API key de Google Maps"
   git push origin master
   ```

---

## ✅ Verificar que Funciona

1. **Abrir tu sitio:**
   - Ve a: https://aguus1610.github.io/EAD-web/contacto.html

2. **Verificar el mapa:**
   - Deberías ver un mapa interactivo centrado en Colonia Baron
   - Deberías poder hacer zoom, mover el mapa, y ver Street View
   - Al hacer click en el marcador, debería aparecer una ventana con información

3. **Si no funciona:**
   - Abre la consola del navegador (F12)
   - Revisa si hay errores relacionados con la API key
   - Verifica que la API key esté correctamente configurada

---

## 🔄 Fallback Automático

El código incluye un **sistema de fallback automático**:
- Si la API key no está configurada o hay un error
- Automáticamente se mostrará un mapa embed (iframe) de Google Maps
- El mapa embed funciona sin API key, pero es menos interactivo

---

## 💰 Costos de Google Maps API

### Plan Gratuito (Free Tier):
- **$200 USD de crédito mensual** (equivalente a ~28,000 cargas de mapas)
- Para la mayoría de sitios web pequeños/medianos es **suficiente y GRATIS**

### Después del crédito gratuito:
- **$7 USD por cada 1,000 cargas adicionales**
- Para un sitio con ~1,000 visitas/mes al mapa = **$0 USD** (dentro del free tier)

### Monitorear uso:
- Google Cloud Console > "APIs y servicios" > "Panel"
- Verás el uso en tiempo real

---

## 🛡️ Seguridad de la API Key

### ⚠️ IMPORTANTE: Restringir la clave

**NUNCA** dejes la API key sin restricciones. Siempre:

1. ✅ Restringe por dominio (solo tu sitio)
2. ✅ Restringe por API (solo Maps JavaScript API)
3. ✅ No compartas la clave públicamente
4. ✅ Si la clave se filtra, revócala y crea una nueva

### Restricciones recomendadas:

```
Restricciones de aplicación:
- Restricciones de sitios web:
  ✅ https://aguus1610.github.io/*
  ✅ https://www.tudominio.com/*

Restricciones de API:
- ✅ Maps JavaScript API
- ✅ Places API (si la usas)
```

---

## 🎨 Personalización del Mapa

El mapa está personalizado con:
- **Zoom:** 16 (nivel de calle)
- **Marcador personalizado:** Con colores de la marca (naranja #FFAA00)
- **Ventana de información:** Con dirección y enlace a Google Maps
- **Controles:** Zoom, Street View, pantalla completa

### Para personalizar más:

Edita la función `initMap()` en `contacto.html`:

```javascript
const map = new google.maps.Map(document.getElementById('google-map'), {
  zoom: 16, // Cambiar nivel de zoom (1-20)
  center: tallerLocation,
  mapTypeId: 'roadmap', // 'roadmap', 'satellite', 'hybrid', 'terrain'
  // ... más opciones
});
```

---

## 📱 Responsive

El mapa es completamente responsive:
- **Desktop:** Altura 500px
- **Mobile:** Altura 400px
- Se adapta automáticamente al ancho de la pantalla

---

## 🆘 Solución de Problemas

### El mapa no carga:
1. ✅ Verifica que la API key sea correcta
2. ✅ Verifica que "Maps JavaScript API" esté habilitada
3. ✅ Verifica las restricciones de la API key (pueden estar bloqueando)
4. ✅ Revisa la consola del navegador (F12) para errores
5. ✅ El fallback debería activarse automáticamente después de 10 segundos

### Error "This API key is not authorized":
- Ve a Google Cloud Console
- Verifica que "Maps JavaScript API" esté habilitada
- Verifica que la API key tenga los permisos correctos

### Error "RefererNotAllowedMapError":
- Ve a Credenciales > Tu API Key
- Verifica que tu dominio esté en las restricciones de sitios web
- Agrega: `https://aguus1610.github.io/*`

### El mapa carga pero está en blanco:
- Verifica que las coordenadas sean correctas
- Verifica la consola del navegador para errores de JavaScript
- Prueba con un navegador diferente

---

## 📚 Recursos Adicionales

- **Documentación oficial:** https://developers.google.com/maps/documentation/javascript
- **Google Cloud Console:** https://console.cloud.google.com/
- **Pricing Calculator:** https://mapsplatform.google.com/pricing/
- **API Key Best Practices:** https://developers.google.com/maps/api-security-best-practices

---

## ✅ Checklist Final

- [ ] Proyecto creado en Google Cloud Console
- [ ] Maps JavaScript API habilitada
- [ ] API Key creada y restringida
- [ ] API Key configurada en `contacto.html`
- [ ] Mapa funciona correctamente en el sitio
- [ ] Restricciones de seguridad configuradas
- [ ] Monitoreo de uso configurado (opcional)

---

**¡Con estos pasos tendrás un mapa interactivo completamente funcional!** 🗺️✨

