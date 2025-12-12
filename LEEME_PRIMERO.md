# 🚀 Instrucciones para Subir Cambios al Repositorio

## ⚠️ IMPORTANTE: Git no está disponible en este sistema

Para subir los cambios, necesitas tener Git instalado. Aquí tienes las opciones:

## Opción 1: Instalar Git (Recomendado - 5 minutos)

1. **Descarga Git para Windows:**
   - Ve a: https://git-scm.com/download/win
   - Descarga e instala (usa opciones por defecto)

2. **Después de instalar, ejecuta este script:**
   ```powershell
   .\git-push-completo.ps1
   ```

## Opción 2: Usar GitHub Desktop (Más fácil - 3 minutos)

1. **Descarga GitHub Desktop:**
   - Ve a: https://desktop.github.com/
   - Instala y abre la aplicación

2. **Configura el repositorio:**
   - File → Clone Repository
   - URL: `https://github.com/Aguus1610/EAD-web`
   - Local Path: Elige una carpeta
   - Clone

3. **Cambia a la rama:**
   - Current branch → `web-12-12-2025` (o créala si no existe)

4. **Copia los archivos:**
   - Copia TODOS los archivos de `C:\Users\DEUX\Desktop\EAD-web-master` 
   - Pega en la carpeta que clonaste (reemplaza los existentes)

5. **Haz commit y push:**
   - Verás todos los archivos modificados
   - Escribe: "Agregar página trabajos.html y reorganizar secciones"
   - Click en "Commit to web-12-12-2025"
   - Click en "Push origin"

## Opción 3: VS Code (Si ya lo tienes)

1. Abre VS Code
2. File → Open Folder → Selecciona `C:\Users\DEUX\Desktop\EAD-web-master`
3. Abre la terminal (Ctrl + `)
4. Ejecuta estos comandos:

```bash
git init
git remote add origin https://github.com/Aguus1610/EAD-web.git
git fetch origin
git checkout -b web-12-12-2025 origin/web-12-12-2025
git add .
git commit -m "Agregar página trabajos.html y reorganizar secciones"
git push origin web-12-12-2025
```

## 📋 Resumen de Cambios

### Archivos Nuevos:
- ✅ `trabajos.html` - Nueva página completa

### Archivos Modificados:
- ✅ `index.html` - Reorganización de secciones, navbar, Instagram
- ✅ `styles.css` - Estilos de botones corregidos
- ✅ `instagram-api.js` - Nuevo perfil y selección de publicaciones
- ✅ `contacto.html` - Navbar y enlaces actualizados
- ✅ `productos.html` - Navbar actualizada
- ✅ `servicios.html` - Navbar actualizada
- ✅ `nosotros.html` - Navbar actualizada

## ✅ Verificación

Después del push, verifica en:
https://github.com/Aguus1610/EAD-web/tree/web-12-12-2025

Debes ver:
- ✅ El archivo `trabajos.html`
- ✅ Los cambios en `index.html`
- ✅ Todos los archivos modificados

---

**¿Necesitas ayuda?** El script `git-push-completo.ps1` está listo para ejecutarse una vez que tengas Git instalado.

