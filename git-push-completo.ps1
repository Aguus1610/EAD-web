# Script completo para hacer commit y push
# Este script intenta encontrar Git automáticamente

Write-Host "=== Buscando Git ===" -ForegroundColor Cyan

# Buscar Git en ubicaciones comunes
$gitPaths = @(
    "git",
    "C:\Program Files\Git\bin\git.exe",
    "C:\Program Files (x86)\Git\bin\git.exe",
    "$env:LOCALAPPDATA\Programs\Git\bin\git.exe",
    "$env:ProgramFiles\Git\cmd\git.exe",
    "$env:ProgramFiles\Git\usr\bin\git.exe"
)

$gitCmd = $null
foreach ($path in $gitPaths) {
    try {
        $result = Get-Command $path -ErrorAction SilentlyContinue
        if ($result) {
            $gitCmd = $result.Source
            Write-Host "Git encontrado en: $gitCmd" -ForegroundColor Green
            break
        }
    } catch {
        continue
    }
}

if (-not $gitCmd) {
    Write-Host "`nERROR: Git no encontrado en el sistema." -ForegroundColor Red
    Write-Host "`nPor favor, instala Git desde: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "O usa GitHub Desktop desde: https://desktop.github.com/" -ForegroundColor Yellow
    Write-Host "`nAlternativamente, puedes usar VS Code con la extensión de Git." -ForegroundColor Yellow
    exit 1
}

# Función para ejecutar comandos Git
function Invoke-Git {
    param([string]$Command)
    $fullCommand = "& `"$gitCmd`" $Command"
    Write-Host "Ejecutando: git $Command" -ForegroundColor Gray
    Invoke-Expression $fullCommand
    return $LASTEXITCODE
}

Write-Host "`n=== Configurando repositorio ===" -ForegroundColor Cyan

# Verificar si es repositorio Git
$isGitRepo = Test-Path .git
if (-not $isGitRepo) {
    Write-Host "Inicializando repositorio..." -ForegroundColor Yellow
    Invoke-Git "init"
    
    Write-Host "Agregando remote origin..." -ForegroundColor Yellow
    Invoke-Git "remote add origin https://github.com/Aguus1610/EAD-web.git"
    
    Write-Host "Obteniendo información del repositorio remoto..." -ForegroundColor Yellow
    Invoke-Git "fetch origin"
    
    Write-Host "Cambiando a la rama web-12-12-2025..." -ForegroundColor Yellow
    $checkoutResult = Invoke-Git "checkout -b web-12-12-2025 origin/web-12-12-2025"
    if ($checkoutResult -ne 0) {
        Invoke-Git "checkout web-12-12-2025"
    }
} else {
    Write-Host "Repositorio Git detectado" -ForegroundColor Green
    
    # Verificar remote
    $remoteCheck = Invoke-Git "remote get-url origin"
    if ($remoteCheck -ne 0) {
        Write-Host "Agregando remote origin..." -ForegroundColor Yellow
        Invoke-Git "remote add origin https://github.com/Aguus1610/EAD-web.git"
    }
    
    # Obtener última información
    Invoke-Git "fetch origin"
    
    # Verificar rama actual
    $currentBranch = Invoke-Git "branch --show-current" | Out-String
    Write-Host "Rama actual: $currentBranch" -ForegroundColor Yellow
    
    # Cambiar a la rama correcta si es necesario
    if ($currentBranch -notmatch "web-12-12-2025") {
        Write-Host "Cambiando a la rama web-12-12-2025..." -ForegroundColor Yellow
        $checkoutResult = Invoke-Git "checkout web-12-12-2025"
        if ($checkoutResult -ne 0) {
            Invoke-Git "checkout -b web-12-12-2025 origin/web-12-12-2025"
        }
    }
}

Write-Host "`n=== Estado del repositorio ===" -ForegroundColor Cyan
Invoke-Git "status"

Write-Host "`n=== Agregando archivos ===" -ForegroundColor Cyan
Invoke-Git "add ."

Write-Host "`n=== Archivos en staging ===" -ForegroundColor Cyan
Invoke-Git "status --short"

Write-Host "`n=== Haciendo commit ===" -ForegroundColor Cyan
$commitMessage = "Agregar página trabajos.html y reorganizar secciones`n`n- Nueva página trabajos.html con galería, proceso, testimonios y blog`n- Reorganización: certificaciones antes de tarjetas de servicios`n- Actualización de enlaces de Instagram a oleohidraulica_ead`n- Corrección de estilos de botones en tarjetas y secciones`n- Agregado enlace 'Trabajos' en navbar de todas las páginas`n- Movidas secciones de testimonios y blog a trabajos.html"

$commitResult = Invoke-Git "commit -m `"$commitMessage`""

if ($commitResult -eq 0) {
    Write-Host "`n=== Haciendo push ===" -ForegroundColor Cyan
    $pushResult = Invoke-Git "push origin web-12-12-2025"
    
    if ($pushResult -eq 0) {
        Write-Host "`n=== ¡ÉXITO! ===" -ForegroundColor Green
        Write-Host "Los cambios han sido subidos correctamente." -ForegroundColor Green
        Write-Host "`nVerifica en: https://github.com/Aguus1610/EAD-web/tree/web-12-12-2025" -ForegroundColor Cyan
    } else {
        Write-Host "`n=== ERROR en el push ===" -ForegroundColor Red
        Write-Host "Posibles causas:" -ForegroundColor Yellow
        Write-Host "1. No tienes permisos para hacer push" -ForegroundColor Yellow
        Write-Host "2. Necesitas autenticarte (usuario/contraseña o token)" -ForegroundColor Yellow
        Write-Host "3. La rama remota no existe aún" -ForegroundColor Yellow
        Write-Host "`nIntenta ejecutar manualmente: git push -u origin web-12-12-2025" -ForegroundColor Yellow
    }
} else {
    Write-Host "`n=== No hay cambios para commitear ===" -ForegroundColor Yellow
    Write-Host "Todos los archivos ya están commiteados o no hay cambios." -ForegroundColor Yellow
}

