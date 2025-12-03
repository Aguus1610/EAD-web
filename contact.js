/* ===== Validación y manejo del formulario de contacto ===== */

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  // Elementos del formulario
  const submitBtn = form.querySelector('button[type="submit"]');
  const formGroups = form.querySelectorAll('.form-group');

  // Patrones de validación
  const patterns = {
    name: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,50}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^[\d\s\-\+\(\)]{8,20}$/
  };

  // Mensajes de error
  const errorMessages = {
    name: 'Por favor ingrese un nombre válido (mínimo 3 caracteres)',
    email: 'Por favor ingrese un email válido',
    phone: 'Por favor ingrese un número de teléfono válido',
    message: 'Por favor ingrese un mensaje (mínimo 10 caracteres)',
    required: 'Este campo es obligatorio'
  };

  // Crear elementos de error
  formGroups.forEach(group => {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    group.appendChild(errorDiv);
  });

  // Función de validación
  function validateField(field) {
    const fieldName = field.name;
    const value = field.value.trim();
    const errorDiv = field.parentElement.querySelector('.error-message');
    let isValid = true;

    // Limpiar estado anterior
    field.classList.remove('error');
    errorDiv.style.display = 'none';

    // Validar campos requeridos
    if (field.hasAttribute('required') && !value) {
      showError(field, errorMessages.required);
      return false;
    }

    // Validación específica por campo
    switch (fieldName) {
      case 'name':
        if (value && !patterns.name.test(value)) {
          showError(field, errorMessages.name);
          isValid = false;
        }
        break;
      
      case 'email':
        if (value && !patterns.email.test(value)) {
          showError(field, errorMessages.email);
          isValid = false;
        }
        break;
      
      case 'phone':
        if (value && !patterns.phone.test(value)) {
          showError(field, errorMessages.phone);
          isValid = false;
        }
        break;
      
      case 'message':
        if (value && value.length < 10) {
          showError(field, errorMessages.message);
          isValid = false;
        }
        break;
    }

    return isValid;
  }

  // Mostrar error
  function showError(field, message) {
    field.classList.add('error');
    const errorDiv = field.parentElement.querySelector('.error-message');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
  }

  // Validación en tiempo real
  form.querySelectorAll('input, textarea, select').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.classList.contains('error')) {
        validateField(field);
      }
    });
  });

  // Manejo del envío
  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    // Validar todos los campos
    let isFormValid = true;
    form.querySelectorAll('input, textarea, select').forEach(field => {
      if (!validateField(field)) {
        isFormValid = false;
      }
    });

    if (!isFormValid) {
      // Enfocar el primer campo con error
      const firstError = form.querySelector('.error');
      if (firstError) firstError.focus();
      return;
    }

    // Preparar datos del formulario
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Mostrar estado de carga
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    submitBtn.textContent = 'Enviando...';

    try {
      // Generar fecha y hora actual
      const now = new Date();
      const time = now.toLocaleString('es-AR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'America/Argentina/Buenos_Aires'
      });

      // Envío real con EmailJS
      const response = await emailjs.send(
        'service_tstfqsl', // ✅ Service ID configurado
        'template_ke1v1qj', // ✅ Template ID configurado
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone || 'No proporcionado',
          subject: getSubjectText(data.subject),
          message: data.message,
          time: time, // ✅ Variable time agregada
          to_email: 'adm201364@gmail.com'
        },
        'SHCCKv__9-9XVNQDv' // ✅ Public Key configurado
      );
      
      console.log('Email enviado exitosamente:', response);
      showSuccessMessage();
      form.reset();
      
    } catch (error) {
      console.error('Error al enviar email:', error);
      showErrorMessage('Hubo un error al enviar el mensaje. Por favor intente nuevamente o llámenos directamente.');
    } finally {
      // Restaurar botón
      submitBtn.disabled = false;
      submitBtn.classList.remove('loading');
      submitBtn.textContent = 'Enviar mensaje';
    }
  });

  // Función para convertir el valor del select en texto legible
  function getSubjectText(value) {
    const subjects = {
      'repuesto': 'Necesito un repuesto para grúa',
      'reparacion': 'Reparación de grúa/hidroelevador',
      'mantenimiento': 'Plan de mantenimiento',
      'emergencia': '¡URGENTE! Grúa fuera de servicio',
      'certificacion': 'Certificación/Inspección'
    };
    return subjects[value] || 'Consulta general';
  }

  // Mostrar mensaje de éxito
  function showSuccessMessage() {
    // Crear o mostrar mensaje de éxito
    let successDiv = document.querySelector('.form-success');
    if (!successDiv) {
      successDiv = document.createElement('div');
      successDiv.className = 'form-success';
      form.parentElement.insertBefore(successDiv, form);
    }
    
    successDiv.innerHTML = `
      <strong>¡Mensaje enviado con éxito!</strong><br>
      Recibimos su consulta y nos comunicaremos en las próximas 2 horas.<br>
      <small>Para urgencias, llame al: <a href="tel:+542302672827">2302-672827</a></small>
    `;
    successDiv.style.display = 'block';
    
    // Ocultar después de 5 segundos
    setTimeout(() => {
      successDiv.style.display = 'none';
    }, 5000);

    // Scroll al mensaje
    successDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // Mostrar mensaje de error
  function showErrorMessage(message) {
    let errorDiv = document.querySelector('.form-error');
    if (!errorDiv) {
      errorDiv = document.createElement('div');
      errorDiv.className = 'form-error';
      form.parentElement.insertBefore(errorDiv, form);
    }
    
    errorDiv.innerHTML = `<strong>Error:</strong> ${message}`;
    errorDiv.style.display = 'block';
    
    // Ocultar después de 5 segundos
    setTimeout(() => {
      errorDiv.style.display = 'none';
    }, 5000);
  }

  // Prevenir envío con Enter en campos que no sean textarea
  form.querySelectorAll('input').forEach(input => {
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        const nextField = getNextField(this);
        if (nextField) nextField.focus();
      }
    });
  });

  // Obtener siguiente campo
  function getNextField(currentField) {
    const fields = Array.from(form.querySelectorAll('input, textarea, select, button'));
    const currentIndex = fields.indexOf(currentField);
    return fields[currentIndex + 1] || null;
  }
});