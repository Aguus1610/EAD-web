# EAD Oleohidráulica - Sitio Web Optimizado

## 🚀 Mejoras Implementadas

Este sitio web ha sido completamente optimizado con las mejores prácticas de desarrollo web moderno.

### Características principales:

- ✅ **SEO Optimizado**: Meta tags completos, Open Graph, Twitter Cards
- ✅ **Performance**: Lazy loading, prefetch, código optimizado
- ✅ **Accesibilidad**: WCAG 2.1 compliant, ARIA labels, focus visible
- ✅ **Animaciones**: Transiciones suaves y micro-interacciones profesionales
- ✅ **Responsive**: Diseño adaptativo para móviles, tablets y desktop
- ✅ **Código limpio**: Modular, organizado y documentado

## 📁 Estructura del Proyecto

```
/
├── index.html              # Página principal
├── productos.html          # Catálogo de productos
├── servicios.html          # Servicios técnicos
├── nosotros.html           # Acerca de la empresa
├── contacto.html           # Formulario de contacto
├── gracias.html            # Página de confirmación
├── styles.css              # Estilos principales
├── animations.css          # Sistema de animaciones
├── about.css               # Estilos página nosotros
├── contact.css             # Estilos formulario contacto
├── main.js                 # JavaScript principal
├── carousel.js             # Carrusel de imágenes
├── scroll-animations.js    # Animaciones de scroll
├── performance.js          # Optimizaciones de rendimiento
└── contact.js              # Lógica del formulario
```

## 🛠️ Configuración Necesaria

### 1. EmailJS (Formulario de Contacto)

El formulario de contacto usa EmailJS. Para configurarlo:

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Obtén tu Public Key
3. Edita `contacto.html` línea 251:
   ```javascript
   emailjs.init('TU_PUBLIC_KEY_AQUI'); // Reemplaza con tu clave
   ```

### 2. Imágenes

Las imágenes actualmente son placeholders. Reemplaza con imágenes reales:

- Formato recomendado: WebP o JPEG optimizado
- Herramienta: [TinyPNG](https://tinypng.com/) o [Squoosh](https://squoosh.app/)
- Mantén los nombres de archivo originales

### 3. Dominio

Actualiza las URLs en los meta tags:

- Busca `eadoleohidraulica.com.ar` en todos los HTML
- Reemplaza con tu dominio real

## 🌐 Despliegue

### Opción 1: Hosting Estático (Recomendado)

Este sitio es 100% HTML estático. Puedes desplegarlo en:

- **Netlify** (Gratis): Drag & drop en [netlify.com](https://netlify.com)
- **Vercel** (Gratis): Deploy con [vercel.com](https://vercel.com)
- **GitHub Pages** (Gratis): Push a repositorio y activa Pages
- **Servidor propio**: Copia todos los archivos a `/var/www/html/`

### Opción 2: Servidor Tradicional

1. Copia todos los archivos a tu servidor web
2. Asegúrate de que el dominio apunte a la carpeta
3. Configura HTTPS (recomendado: Let's Encrypt)

## 📊 Performance

El sitio está optimizado para:

- Google PageSpeed Insights: 90+ (estimado)
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 🔧 Mantenimiento

### Para actualizar contenido:

1. **Textos**: Edita directamente los archivos HTML
2. **Imágenes**: Reemplaza archivos manteniendo nombres
3. **Estilos**: Modifica `styles.css` o archivos específicos
4. **Animaciones**: Ajusta `animations.css`

### Para añadir páginas nuevas:

1. Copia estructura de una página existente
2. Actualiza meta tags (title, description, keywords)
3. Añade enlace en navegación de todas las páginas
4. Incluye los archivos CSS y JS necesarios

## 📱 Testing

Prueba el sitio en:

- ✅ Chrome/Edge (Desktop & Mobile)
- ✅ Firefox (Desktop & Mobile)
- ✅ Safari (Desktop & Mobile)
- ✅ Diferentes tamaños de pantalla

Herramientas útiles:

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WAVE Accessibility](https://wave.webaim.org/)

## 🆘 Soporte

Para modificaciones adicionales, contacta a:

**ADM Digital**
Desarrollador: Agustin Deux Messler
Email: adm201364@gmail.com

## 📄 Licencia

© 2025 EAD Oleohidráulica - Todos los derechos reservados.

---

**Última actualización**: Octubre 2025
**Versión**: 2.0.0
