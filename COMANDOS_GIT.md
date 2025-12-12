# Comandos Git para subir cambios

## Repositorio
- URL: https://github.com/Aguus1610/EAD-web
- Rama: web-12-12-2025

## Opción 1: Usar el script automático

Ejecuta en PowerShell desde el directorio del proyecto:

```powershell
.\setup-and-push.ps1
```

## Opción 2: Comandos manuales

### Si NO es un repositorio Git (primera vez):

```bash
# 1. Inicializar repositorio
git init

# 2. Agregar remote
git remote add origin https://github.com/Aguus1610/EAD-web.git

# 3. Obtener la rama remota
git fetch origin

# 4. Cambiar a la rama
git checkout -b web-12-12-2025 origin/web-12-12-2025
```

### Si YA es un repositorio Git:

```bash
# 1. Verificar rama actual
git branch --show-current

# 2. Si no estás en web-12-12-2025, cambiar:
git fetch origin
git checkout web-12-12-2025

# O crear la rama si no existe:
git checkout -b web-12-12-2025 origin/web-12-12-2025
```

### Subir cambios (en ambos casos):

```bash
# 1. Ver estado
git status

# 2. Agregar todos los archivos
git add .

# 3. Hacer commit
git commit -m "Agregar página trabajos.html y reorganizar secciones

- Nueva página trabajos.html con galería, proceso, testimonios y blog
- Reorganización: certificaciones antes de tarjetas de servicios
- Actualización de enlaces de Instagram a oleohidraulica_ead
- Corrección de estilos de botones en tarjetas y secciones
- Agregado enlace 'Trabajos' en navbar de todas las páginas
- Movidas secciones de testimonios y blog a trabajos.html"

# 4. Hacer push
git push origin web-12-12-2025
```

## Archivos a subir

### Nuevos:
- `trabajos.html`
- `commit-and-push.ps1` (opcional)
- `setup-and-push.ps1` (opcional)
- `INSTRUCCIONES_GIT.md` (opcional)
- `COMANDOS_GIT.md` (opcional)

### Modificados:
- `index.html`
- `styles.css`
- `instagram-api.js`
- `contacto.html`
- `productos.html`
- `servicios.html`
- `nosotros.html`

## Verificar después del push

1. Ve a: https://github.com/Aguus1610/EAD-web/tree/web-12-12-2025
2. Verifica que `trabajos.html` esté presente
3. Verifica que los cambios en `index.html` estén reflejados
4. Si usas GitHub Pages, espera unos minutos para que se actualice

