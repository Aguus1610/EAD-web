/* ===== Script de Build y Optimización ===== */
/* Ejecutar antes de hacer deploy para optimizar recursos */

const fs = require('fs');
const path = require('path');

console.log('🚀 Iniciando optimización de build...\n');

// Configuración
const config = {
  minifyCSS: true,
  minifyJS: true,
  optimizeImages: true,
  generateWebP: true
};

// Función para minificar CSS básico (remover comentarios y espacios)
function minifyCSS(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remover comentarios
    .replace(/\s+/g, ' ') // Remover espacios múltiples
    .replace(/\s*{\s*/g, '{') // Remover espacios alrededor de {
    .replace(/\s*}\s*/g, '}') // Remover espacios alrededor de }
    .replace(/\s*:\s*/g, ':') // Remover espacios alrededor de :
    .replace(/\s*;\s*/g, ';') // Remover espacios alrededor de ;
    .replace(/\s*,\s*/g, ',') // Remover espacios alrededor de ,
    .trim();
}

// Función para minificar JS básico
function minifyJS(js) {
  return js
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remover comentarios multi-línea
    .replace(/\/\/.*$/gm, '') // Remover comentarios de línea
    .replace(/\s+/g, ' ') // Remover espacios múltiples
    .replace(/\s*{\s*/g, '{')
    .replace(/\s*}\s*/g, '}')
    .replace(/\s*;\s*/g, ';')
    .trim();
}

// Crear archivos optimizados
try {
  // Leer archivos originales
  const cssContent = fs.readFileSync('styles.css', 'utf8');
  const mainJS = fs.readFileSync('main.js', 'utf8');
  
  // Crear directorio dist si no existe
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
  }
  
  // Minificar CSS
  if (config.minifyCSS) {
    const minifiedCSS = minifyCSS(cssContent);
    fs.writeFileSync('dist/styles.min.css', minifiedCSS);
    console.log('✅ CSS minificado: dist/styles.min.css');
    console.log(`   Tamaño original: ${(cssContent.length / 1024).toFixed(2)} KB`);
    console.log(`   Tamaño minificado: ${(minifiedCSS.length / 1024).toFixed(2)} KB`);
    console.log(`   Reducción: ${((1 - minifiedCSS.length / cssContent.length) * 100).toFixed(1)}%\n`);
  }
  
  // Minificar JS
  if (config.minifyJS) {
    const minifiedJS = minifyJS(mainJS);
    fs.writeFileSync('dist/main.min.js', minifiedJS);
    console.log('✅ JavaScript minificado: dist/main.min.js');
    console.log(`   Tamaño original: ${(mainJS.length / 1024).toFixed(2)} KB`);
    console.log(`   Tamaño minificado: ${(minifiedJS.length / 1024).toFixed(2)} KB`);
    console.log(`   Reducción: ${((1 - minifiedJS.length / mainJS.length) * 100).toFixed(1)}%\n`);
  }
  
  // Generar reporte
  const report = {
    timestamp: new Date().toISOString(),
    config: config,
    files: {
      css: {
        original: `${(cssContent.length / 1024).toFixed(2)} KB`,
        minified: config.minifyCSS ? `${(minifyCSS(cssContent).length / 1024).toFixed(2)} KB` : 'N/A'
      },
      js: {
        original: `${(mainJS.length / 1024).toFixed(2)} KB`,
        minified: config.minifyJS ? `${(minifyJS(mainJS).length / 1024).toFixed(2)} KB` : 'N/A'
      }
    }
  };
  
  fs.writeFileSync('dist/build-report.json', JSON.stringify(report, null, 2));
  console.log('✅ Reporte generado: dist/build-report.json\n');
  
  console.log('✨ Optimización completada!\n');
  console.log('📝 Notas:');
  console.log('   - Los archivos minificados están en /dist');
  console.log('   - Actualiza las referencias en HTML para usar .min.css y .min.js');
  console.log('   - Para producción, usa herramientas profesionales como:');
  console.log('     * cssnano para CSS');
  console.log('     * terser para JavaScript');
  console.log('     * imagemin para imágenes');
  
} catch (error) {
  console.error('❌ Error durante la optimización:', error.message);
  console.log('\n💡 Asegúrate de tener Node.js instalado y ejecutar: npm install');
}

