# 📧 Configuración del Formulario de Contacto con EmailJS

## 📋 Pasos para activar el envío de emails

### 1. Crear cuenta en EmailJS
1. Ve a https://emailjs.com
2. Registrate con tu email (recomendado: adm201364@gmail.com)
3. Confirma tu cuenta por email

### 2. Configurar servicio de email
1. En el dashboard, ve a "Email Services"
2. Haz click en "Add New Service"
3. Selecciona "Gmail" 
4. Autoriza tu cuenta de Gmail (adm201364@gmail.com)
5. **Guarda el SERVICE_ID** que aparece (ej: service_abc123)

### 3. Crear template de email
1. Ve a "Email Templates"
2. Haz click en "Create New Template"
3. Copia y pega este template:

```
Asunto: [EAD] Nuevo mensaje desde la web - {{subject}}

Nuevo mensaje desde el sitio web de EAD Oleohidráulica:

DATOS DEL CLIENTE:
==================
Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{phone}}
Asunto: {{subject}}

MENSAJE:
==================
{{message}}

---
Este mensaje fue enviado desde: www.eadoleohidraulica.com
Fecha: {{fecha_envio}}
```

4. **Guarda el TEMPLATE_ID** que aparece (ej: template_xyz789)

### 4. Obtener Public Key
1. Ve a "Account" → "General"
2. Copia tu **PUBLIC_KEY** (ej: user_def456)

### 5. Configurar en tu sitio web
Reemplaza estos valores en los archivos:

**En `contacto.html` línea 136:**
```javascript
emailjs.init('TU_PUBLIC_KEY_AQUI');
```

**En `assets/js/contact.js` líneas 134-135 y 144:**
```javascript
'TU_SERVICE_ID_AQUI',  // línea 134
'TU_TEMPLATE_ID_AQUI', // línea 135
'TU_PUBLIC_KEY_AQUI'   // línea 144
```

### 6. Probar el formulario
1. Abre tu sitio web
2. Ve a la página de Contacto
3. Completa el formulario
4. Haz click en "Enviar mensaje"
5. Deberías recibir el email en adm201364@gmail.com

## 🔧 Solución de problemas

**Si no llegan los emails:**
1. Verifica que los IDs estén correctos
2. Revisa la consola del navegador (F12) para ver errores
3. Chequea la carpeta de spam
4. Verifica que el servicio de Gmail esté autorizado

**Límites gratuitos:**
- EmailJS plan gratuito: 200 emails/mes
- Si necesitas más, puedes upgradar a plan pago

## 📧 Ejemplo de email que recibirás:

```
De: noreply@emailjs.com
Para: adm201364@gmail.com
Asunto: [EAD] Nuevo mensaje desde la web - ¡URGENTE! Grúa fuera de servicio

Nuevo mensaje desde el sitio web de EAD Oleohidráulica:

DATOS DEL CLIENTE:
==================
Nombre: Juan Pérez
Email: juan.perez@cooperativa.com
Teléfono: 2302-555123
Asunto: ¡URGENTE! Grúa fuera de servicio

MENSAJE:
==================
Tenemos una grúa Palfinger PK15000 que perdió presión hidráulica.
Está ubicada en Ruta 5 km 120. Necesitamos asistencia urgente.
```

## ⚡ Próximos pasos opcionales

Una vez que funcione el formulario, podemos agregar:
- Notificaciones por WhatsApp
- Auto-respuesta al cliente
- Base de datos de consultas
- Dashboard de gestión

¿Todo claro? ¡Una vez configurado tendrás un formulario 100% funcional!