# Script para hacer commit y push de los cambios
# Ejecutar desde PowerShell en el directorio del proyecto

Write-Host "=== Verificando estado del repositorio ===" -ForegroundColor Cyan
git status

Write-Host "`n=== Agregando todos los archivos modificados ===" -ForegroundColor Cyan
git add .

Write-Host "`n=== Archivos en staging ===" -ForegroundColor Cyan
git status --short

Write-Host "`n=== Haciendo commit ===" -ForegroundColor Cyan
$commitMessage = "Agregar página trabajos.html, reorganizar secciones y actualizar enlaces de Instagram"
git commit -m $commitMessage

Write-Host "`n=== Obteniendo nombre de la rama actual ===" -ForegroundColor Cyan
$currentBranch = git branch --show-current
Write-Host "Rama actual: $currentBranch" -ForegroundColor Yellow

Write-Host "`n=== Haciendo push a la rama $currentBranch ===" -ForegroundColor Cyan
git push origin $currentBranch

Write-Host "`n=== ¡Completado! ===" -ForegroundColor Green
Write-Host "Los cambios han sido subidos a la rama: $currentBranch" -ForegroundColor Green

