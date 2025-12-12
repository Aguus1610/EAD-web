# Script completo para configurar y subir cambios al repositorio
# Repositorio: https://github.com/Aguus1610/EAD-web
# Rama: web-12-12-2025

Write-Host "=== Configuración del Repositorio Git ===" -ForegroundColor Cyan

# Verificar si es un repositorio Git
if (-not (Test-Path .git)) {
    Write-Host "`nInicializando repositorio Git..." -ForegroundColor Yellow
    git init
    
    Write-Host "Agregando remote origin..." -ForegroundColor Yellow
    git remote add origin https://github.com/Aguus1610/EAD-web.git
    
    Write-Host "Fetching desde origin..." -ForegroundColor Yellow
    git fetch origin
    
    Write-Host "Cambiando a la rama web-12-12-2025..." -ForegroundColor Yellow
    git checkout -b web-12-12-2025 origin/web-12-12-2025
} else {
    Write-Host "`nRepositorio Git ya existe" -ForegroundColor Green
    
    # Verificar si el remote existe
    $remoteExists = git remote get-url origin 2>$null
    if (-not $remoteExists) {
        Write-Host "Agregando remote origin..." -ForegroundColor Yellow
        git remote add origin https://github.com/Aguus1610/EAD-web.git
    } else {
        Write-Host "Remote origin ya configurado: $remoteExists" -ForegroundColor Green
    }
    
    # Verificar rama actual
    $currentBranch = git branch --show-current
    Write-Host "Rama actual: $currentBranch" -ForegroundColor Yellow
    
    if ($currentBranch -ne "web-12-12-2025") {
        Write-Host "Cambiando a la rama web-12-12-2025..." -ForegroundColor Yellow
        git fetch origin
        git checkout web-12-12-2025 2>$null
        if ($LASTEXITCODE -ne 0) {
            git checkout -b web-12-12-2025 origin/web-12-12-2025
        }
    }
}

Write-Host "`n=== Estado del repositorio ===" -ForegroundColor Cyan
git status

Write-Host "`n=== Agregando todos los archivos ===" -ForegroundColor Cyan
git add .

Write-Host "`n=== Archivos en staging ===" -ForegroundColor Cyan
git status --short

Write-Host "`n=== Haciendo commit ===" -ForegroundColor Cyan
$commitMessage = @"
Agregar página trabajos.html y reorganizar secciones

- Nueva página trabajos.html con galería, proceso, testimonios y blog
- Reorganización: certificaciones antes de tarjetas de servicios
- Actualización de enlaces de Instagram a oleohidraulica_ead
- Corrección de estilos de botones en tarjetas y secciones
- Agregado enlace 'Trabajos' en navbar de todas las páginas
- Movidas secciones de testimonios y blog a trabajos.html
"@

git commit -m $commitMessage

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n=== Haciendo push a la rama web-12-12-2025 ===" -ForegroundColor Cyan
    git push origin web-12-12-2025
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "`n=== ¡ÉXITO! ===" -ForegroundColor Green
        Write-Host "Los cambios han sido subidos correctamente a:" -ForegroundColor Green
        Write-Host "https://github.com/Aguus1610/EAD-web/tree/web-12-12-2025" -ForegroundColor Cyan
    } else {
        Write-Host "`n=== ERROR en el push ===" -ForegroundColor Red
        Write-Host "Verifica tus credenciales de Git o permisos del repositorio" -ForegroundColor Yellow
    }
} else {
    Write-Host "`n=== No hay cambios para commitear ===" -ForegroundColor Yellow
    Write-Host "Todos los cambios ya están commiteados" -ForegroundColor Yellow
}

