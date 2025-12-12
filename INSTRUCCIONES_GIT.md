# Instrucciones para hacer Commit y Push

## Opción 1: Usar el script automático

1. Abre PowerShell en el directorio del proyecto
2. Ejecuta:
```powershell
.\commit-and-push.ps1
```

## Opción 2: Comandos manuales

### 1. Verificar el estado
```bash
git status
```

### 2. Agregar todos los archivos modificados
```bash
git add .
```

O agregar archivos específicos:
```bash
git add index.html trabajos.html styles.css instagram-api.js contacto.html productos.html servicios.html nosotros.html
```

### 3. Hacer commit
```bash
git commit -m "Agregar página trabajos.html, reorganizar secciones y actualizar enlaces de Instagram"
```

### 4. Verificar la rama actual
```bash
git branch --show-current
```

### 5. Hacer push a tu rama
```bash
git push origin nombre-de-tu-rama
```

## Archivos modificados/creados

Los siguientes archivos han sido modificados o creados:

### Archivos nuevos:
- `trabajos.html` - Nueva página con galería, proceso, testimonios y blog

### Archivos modificados:
- `index.html` - Reorganización de secciones, nuevo enlace en navbar, actualización de Instagram
- `styles.css` - Estilos para botones corregidos
- `instagram-api.js` - Actualización de perfil y selección de publicaciones
- `contacto.html` - Actualización de enlaces de Instagram y navbar
- `productos.html` - Actualización de navbar
- `servicios.html` - Actualización de navbar
- `nosotros.html` - Actualización de navbar

## Si el repositorio no está inicializado

Si este directorio no es un repositorio Git, necesitas:

1. Inicializar el repositorio:
```bash
git init
```

2. Agregar el remote (reemplaza con tu URL):
```bash
git remote add origin https://github.com/tu-usuario/tu-repo.git
```

3. Crear o cambiar a tu rama:
```bash
git checkout -b nombre-de-tu-rama
```

4. Luego seguir los pasos de commit y push

