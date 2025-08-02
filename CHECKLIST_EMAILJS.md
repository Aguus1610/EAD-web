# ✅ CHECKLIST: Configuración EmailJS - ¡5 minutos!

## 🎯 **Datos que necesitás conseguir:**

### 📧 **1. SERVICE_ID** (desde EmailJS → Email Services)
```
Ejemplo: service_abc123
```

### 📝 **2. TEMPLATE_ID** (desde EmailJS → Email Templates)  
```
Ejemplo: template_xyz789
```

### 🔑 **3. PUBLIC_KEY** (desde EmailJS → Account → General)
```
Ejemplo: user_def456
```

---

## 🛠️ **Reemplazá estos 3 valores en tu código:**

### 📄 **Archivo: `contacto.html` (línea 136)**
```html
emailjs.init('TU_PUBLIC_KEY_AQUI'); 
```
👆 **Reemplazá** `TU_PUBLIC_KEY_AQUI` **con tu PUBLIC_KEY**

### 📄 **Archivo: `assets/js/contact.js` (líneas 134, 135 y 144)**
```javascript
'TU_SERVICE_ID_AQUI',     // ← línea 134
'TU_TEMPLATE_ID_AQUI',    // ← línea 135  
'TU_PUBLIC_KEY_AQUI'      // ← línea 144
```

---

## 🧪 **Para probar:**
1. Abrí tu sitio web
2. Andá a **Contacto** 
3. Completá el formulario
4. Hacé click en **"Enviar mensaje"**
5. ¡Deberías recibir el email en `adm201364@gmail.com`!

---

## 🆘 **Si algo no funciona:**
1. **Abrir F12** en el navegador → pestaña **Console**
2. **Fijate si hay errores** en rojo
3. **Verificá** que los 3 valores estén bien copiados
4. **Revisá spam** en tu email

---

## 🎉 **¡Listo!**
Una vez que andes estos 3 valores, el formulario va a enviar emails reales a tu correo automáticamente.

**¿Necesitás ayuda?** Avisame qué parte no te sale y te ayudo paso a paso.