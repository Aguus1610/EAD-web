# 📸 Guía de Optimización de Imágenes

## Conversión a WebP

### Opción 1: Herramientas Online (Recomendado para empezar)
1. **Squoosh** (Google): https://squoosh.app/
   - Arrastra y suelta imágenes
   - Compara calidad/tamaño
   - Descarga optimizada

2. **CloudConvert**: https://cloudconvert.com/webp-converter
   - Conversión masiva
   - API disponible

### Opción 2: Herramientas Desktop
- **ImageOptim** (Mac): https://imageoptim.com/
- **FileOptimizer** (Windows): https://nikkhokkho.sourceforge.net/static.php?page=FileOptimizer
- **GIMP** (Multiplataforma): Exportar como WebP

### Opción 3: Script Automático (Node.js)
```bash
npm install sharp-cli -g
sharp -i "*.jpg" -o "output/" -f webp -q 80
```

## Estructura Recomendada

```
/imagenes/
  /original/        (backup de originales)
  /webp/           (versiones WebP)
  /thumbnails/     (miniaturas)
```

## Implementación en HTML

### Ejemplo con picture element (mejor compatibilidad):
```html
<picture>
  <source srcset="imagen.webp" type="image/webp">
  <source srcset="imagen.jpg" type="image/jpeg">
  <img src="imagen.jpg" alt="Descripción">
</picture>
```

### Ejemplo con srcset (ya implementado):
```html
<img 
  src="imagen.jpg" 
  srcset="imagen.jpg 1x, imagen@2x.jpg 2x"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="Descripción"
  loading="lazy">
```

## Tamaños Recomendados

| Uso | Ancho | Formato | Calidad |
|-----|-------|---------|---------|
| Logo | 200px | PNG/WebP | 100% |
| Hero | 1200px | WebP | 85% |
| Gallery | 800px | WebP | 80% |
| Thumbnail | 400px | WebP | 75% |
| Iconos | 64px | SVG/PNG | 100% |

## Checklist de Optimización

- [ ] Convertir todas las imágenes a WebP
- [ ] Crear versiones @2x para retina
- [ ] Implementar picture element o srcset
- [ ] Comprimir imágenes originales
- [ ] Agregar lazy loading
- [ ] Verificar tamaños de archivo (< 200KB por imagen)
- [ ] Probar en diferentes dispositivos

## Herramientas de Análisis

- **PageSpeed Insights**: https://pagespeed.web.dev/
- **WebPageTest**: https://www.webpagetest.org/
- **Lighthouse**: DevTools > Lighthouse

## Script de Conversión Rápida (PowerShell)

```powershell
# Convertir todas las imágenes a WebP
Get-ChildItem -Path . -Include *.jpg,*.png -Recurse | ForEach-Object {
    $output = $_.FullName -replace '\.(jpg|png)$', '.webp'
    # Usar magick (ImageMagick) o sharp
    magick $_.FullName -quality 85 $output
}
```

