document.addEventListener('DOMContentLoaded', () => {
    // Inicializar los módulos de la aplicación SPA
    initRouting();
    initAccessibility();
    initContactFormValidation();
    initScriptGenerator();
    initQuestionsAPI();
});

/**
 * 1. Lógica de Navegación SPA (Routing Vanilla)
 */
function initRouting() {
    const navLinks = document.querySelectorAll('.main-nav a, .footer-map a');
    const sections = document.querySelectorAll('.page-section');
    const breadcrumbCurrent = document.getElementById('breadcrumb-current');

    // Función principal para navegar
    function navigateTo(hash) {
        let targetId = hash.replace('#', '') || 'inicio';

        // 1. Ocultar todas las secciones
        sections.forEach(sec => sec.classList.add('hidden'));

        // 2. Mostrar la sección destino
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
        } else {
            // Fallback a inicio si no existe
            document.getElementById('inicio').classList.remove('hidden');
            targetId = 'inicio';
        }

        // 3. Actualizar estado "activo" en la navegación principal
        document.querySelectorAll('.main-nav a').forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === `#${targetId}`) {
                a.classList.add('active');
                // Actualizar Migas de Pan (Breadcrumbs)
                if (breadcrumbCurrent) breadcrumbCurrent.textContent = a.textContent;
            }
        });

        // 4. Lógica dinámica al visitar secciones
        if (targetId === 'offline') {
            renderOfflineScripts();
        }
    }

    // Interceptar clicks en enlaces de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                // Actualizar la URL sin recargar la página
                history.pushState(null, null, href);
                navigateTo(href);
            }
        });
    });

    // Manejar evento de retroceso en el navegador (Back button)
    window.addEventListener('popstate', () => {
        navigateTo(location.hash);
    });

    // Cargar la sección correcta basada en la URL al cargar la página
    navigateTo(location.hash);
}

/**
 * 2. Accesibilidad (A11y)
 */
function initAccessibility() {
    const btnDecrease = document.getElementById('btn-text-decrease');
    const btnIncrease = document.getElementById('btn-text-increase');
    const btnContrast = document.getElementById('btn-contrast');

    let currentSize = 'base'; // Estados posibles: base, small, large

    // Disminuir texto
    btnDecrease.addEventListener('click', () => {
        if (currentSize === 'base') {
            document.body.classList.add('text-small');
            currentSize = 'small';
        } else if (currentSize === 'large') {
            document.body.classList.remove('text-large');
            currentSize = 'base';
        }
    });

    // Aumentar texto
    btnIncrease.addEventListener('click', () => {
        if (currentSize === 'base') {
            document.body.classList.add('text-large');
            currentSize = 'large';
        } else if (currentSize === 'small') {
            document.body.classList.remove('text-small');
            currentSize = 'base';
        }
    });

    // Alternar Alto Contraste
    btnContrast.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
    });
}

/**
 * 3. Validación de Formulario (Expresiones Regulares - Regex)
 */
function initContactFormValidation() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    // Patrones de Expresiones Regulares
    const regexPatterns = {
        name: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s\.,]{3,60}$/,
        email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/,
        phone: /^(\+\d{1,4}\s?)?(\d\s?){7,14}$/ // Prefijo internacional opcional, seguido de números y espacios
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evitar envío por defecto
        let isFormValid = true;

        // Cargar inputs
        const inputName = document.getElementById('contact-name');
        const inputEmail = document.getElementById('contact-email');
        const inputPhone = document.getElementById('contact-phone');
        const inputMsg = document.getElementById('contact-message');

        // Función de ayuda
        const validateField = (input, pattern, errorId) => {
            const val = input.value.trim();
            // Para teléfono, si está vacío se ignora (ya que es opcional)
            if (input.id === 'contact-phone' && val === '') {
                input.classList.remove('invalid');
                document.getElementById(errorId).style.display = 'none';
                return true;
            }

            if (!pattern.test(val)) {
                input.classList.add('invalid');
                document.getElementById(errorId).style.display = 'block';
                return false;
            } else {
                input.classList.remove('invalid');
                document.getElementById(errorId).style.display = 'none';
                return true;
            }
        };

        // Ejecutar validaciones Regex
        const vName = validateField(inputName, regexPatterns.name, 'error-name');
        const vEmail = validateField(inputEmail, regexPatterns.email, 'error-email');
        const vPhone = validateField(inputPhone, regexPatterns.phone, 'error-phone');

        // Validar mensaje base (al menos 10 caracteres)
        let vMsg = false;
        if (inputMsg.value.trim().length < 10) {
            inputMsg.classList.add('invalid');
            document.getElementById('error-msg').style.display = 'block';
        } else {
            inputMsg.classList.remove('invalid');
            document.getElementById('error-msg').style.display = 'none';
            vMsg = true;
        }

        isFormValid = vName && vEmail && vPhone && vMsg;

        // Feedback al usuario
        const msgBox = document.getElementById('form-successbox');
        if (isFormValid) {
            msgBox.textContent = "✅ ¡Mensaje enviado con éxito! (Simulación SPA)";
            msgBox.className = "message success";
            msgBox.classList.remove('hidden');
            form.reset();
            setTimeout(() => msgBox.classList.add('hidden'), 5000);
        } else {
            msgBox.textContent = "❌ Por favor, revise y corrija los campos marcados en rojo.";
            msgBox.className = "message error";
            msgBox.classList.remove('hidden');
        }
    });
}

/**
 * 4. Generador de Guiones y Guardado en LocalStorage (Offline)
 */
function initScriptGenerator() {
    const form = document.getElementById('script-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('script-title').value.trim();
        const content = document.getElementById('script-content').value.trim();
        const currentDate = new Date().toLocaleString('es-ES');

        if (title && content) {
            // Construir el objeto del guion
            const newScript = {
                id: Date.now(),
                title: title,
                content: content,
                date: currentDate
            };

            // Leer de LocalStorage (o inicializar array vacío)
            const savedScripts = JSON.parse(localStorage.getItem('edu_radio_scripts')) || [];

            // Agregar el nuevo y guardar
            savedScripts.push(newScript);
            localStorage.setItem('edu_radio_scripts', JSON.stringify(savedScripts));

            // Feedback
            const msgBox = document.getElementById('script-message');
            msgBox.textContent = `✅ Guion "${title}" guardado offline correctamente para trabajar sin internet.`;
            msgBox.className = 'message success';
            msgBox.classList.remove('hidden');
            form.reset();

            // Si el usuario está viendo la sección offline simultáneamente (no pasa, pero por seguridad manual)
            // renderOfflineScripts();

            setTimeout(() => msgBox.classList.add('hidden'), 4000);
        }
    });
}

/**
 * 5. Renderizado de Recursos Offline Guardados
 */
function renderOfflineScripts() {
    const container = document.getElementById('offline-grid');
    if (!container) return;

    // Obtener los datos locales
    const savedScripts = JSON.parse(localStorage.getItem('edu_radio_scripts')) || [];

    if (savedScripts.length === 0) {
        container.innerHTML = `
            <div class="card bg-green" style="grid-column: 1 / -1;">
                <p>No tienes guiones guardados en este dispositivo. Ve al <strong>Generador de Guiones</strong> para empezar a crear recursos para clases o programas que funcionen sin conexión.</p>
            </div>`;
        return;
    }

    container.innerHTML = '';

    // Invertir el array para mostrar los más recientes de primero
    savedScripts.slice().reverse().forEach(script => {
        const card = document.createElement('div');
        card.className = 'script-card';

        // Extracto pequeño del guion
        const extract = script.content.length > 100
            ? script.content.substring(0, 100) + '...'
            : script.content;

        card.innerHTML = `
            <h3>${escapeHTML(script.title)}</h3>
            <small style="color: #666; display: block; margin-bottom: 0.8rem;">📅 Guardado: ${script.date}</small>
            <p>${escapeHTML(extract)}</p>
            
            <div style="margin-top: auto; display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <button class="answer-btn" style="flex: 1;" onclick="viewFullScript(${script.id})">Leer Completo</button>
                <button class="answer-btn" style="flex: 1; background-color: var(--error-color); color: white; border: none;" onclick="deleteScript(${script.id})">Borrar</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Global functions for inline DOM handlers
window.deleteScript = function (id) {
    if (confirm('¿Está seguro de eliminar permanentemente este guion de este dispositivo?')) {
        let scripts = JSON.parse(localStorage.getItem('edu_radio_scripts')) || [];
        scripts = scripts.filter(sc => sc.id !== id);
        localStorage.setItem('edu_radio_scripts', JSON.stringify(scripts));
        renderOfflineScripts();
    }
};

window.viewFullScript = function (id) {
    const scripts = JSON.parse(localStorage.getItem('edu_radio_scripts')) || [];
    const script = scripts.find(sc => sc.id === id);
    if (script) {
        alert(`🎙️ TÍTULO: ${script.title}\n📅 FECHA: ${script.date}\n\n📝 CONTENIDO:\n${script.content}`);
    }
};

/**
 * 6. Consumo de API Externa (Open Trivia DB)
 */
function initQuestionsAPI() {
    const btnLoad = document.getElementById('load-questions-btn');
    const container = document.getElementById('questions-grid');
    const statusMsg = document.getElementById('api-status');

    btnLoad.addEventListener('click', async () => {
        btnLoad.textContent = '🔄 Buscando Preguntas...';
        btnLoad.disabled = true;
        statusMsg.textContent = "Conectando al banco global...";
        statusMsg.style.color = "var(--primary-color)";

        try {
            // API: Traer 6 preguntas de Cultura General (Categoría 9), dificultad media, codificadas en base64 para evitar issues de caracteres especiales
            const response = await fetch('https://opentdb.com/api.php?amount=6&category=9&difficulty=medium&type=multiple&encode=base64');

            if (!response.ok) throw new Error('Falló la conexión HTTP');

            const data = await response.json();

            if (data.results && data.results.length > 0) {
                renderAPIQuestions(data.results, container);
                // Guardar backup local por si luego trabajan sin conexión
                localStorage.setItem('edu_radio_questions_backup', JSON.stringify(data.results));

                statusMsg.textContent = "✅ Preguntas cargadas con éxito. Se ha guardado una copia offline.";
                statusMsg.style.color = "var(--success-color)";
            } else {
                throw new Error('La API no retornó resultados');
            }
        } catch (error) {
            console.error("Error al obtener la API:", error);

            // Estrategia Offline (Fallback a caché local)
            const backupStr = localStorage.getItem('edu_radio_questions_backup');
            if (backupStr) {
                renderAPIQuestions(JSON.parse(backupStr), container);
                statusMsg.textContent = "⚠️ Sin conexión a la API. Mostrando preguntas respaldadas offline anteriormente.";
                statusMsg.style.color = "var(--accent-color)";
            } else {
                statusMsg.textContent = "❌ No hay conexión a Internet y no existen copias locales guardadas. Imposible cargar preguntas.";
                statusMsg.style.color = "var(--error-color)";
            }
        } finally {
            btnLoad.textContent = '🔄 Cargar Nuevas Preguntas (Requiere Internet)';
            btnLoad.disabled = false;
        }
    });

    // Cargar del caché local si existe al iniciar la vista
    const initialBackupStr = localStorage.getItem('edu_radio_questions_backup');
    if (initialBackupStr) {
        renderAPIQuestions(JSON.parse(initialBackupStr), container);
        statusMsg.textContent = "Tus preguntas respaldadas offline (Última conexión).";
        statusMsg.style.color = "var(--primary-color)";
    }
}

/**
 * 7. API para envío de correo
 */
emailjs.init({
  publicKey: "a8GqGV31otrh2jChh",
});

function enviarCorreo(e) {
    
    e.preventDefault();

    const nombre = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const mensaje = document.getElementById("contact-message").value.trim();
    

    // Validaciones en el formulario
    if (nombre.length < 3) {
        alert("Nombre inválido");
        return;
    }

    if (!email.includes("@")) {
        alert("Correo inválido");
        return;
    }

    if (mensaje.length < 10) {
        alert("Mensaje muy corto");
        return;
    }
    
    emailjs.send("default_service", "template_ylarm9x", {
        nombre: document.getElementById("contact-name").value,
        email: document.getElementById("contact-email").value,
        mensaje: document.getElementById("contact-message").value

    })
    .then(() => {
        alert("Mensaje enviado correctamente");
    }, (error) => {
        console.error("ERROR REAL:", error);
        alert("Error al enviar");
    });
}

function renderAPIQuestions(questionsArray, container) {
    container.innerHTML = ''; // Limpiar grilla

    questionsArray.forEach((item, index) => {
        // Desencodificar base64 (El API lo envía así para evitar errores de render HTML)
        const questionText = decodeURIComponent(escape(atob(item.question)));
        const correctAnswerText = decodeURIComponent(escape(atob(item.correct_answer)));

        const card = document.createElement('div');
        card.className = 'question-card';
        card.innerHTML = `
            <h3>Pregunta ${index + 1}</h3>
            <p style="font-size: 1.1em; margin-bottom: 1rem;">${questionText}</p>
            
            <button class="answer-btn" onclick="this.nextElementSibling.classList.toggle('hidden')">👁️ Revelar Respuesta a los Oyentes</button>
            <div class="hidden" style="margin-top: 1rem; padding: 0.8rem; background-color: var(--bg-color); border-left: 3px solid var(--success-color); border-radius: 4px;">
                <strong>Respuesta Correcta:</strong><br> ${correctAnswerText}
            </div>
        `;
        container.appendChild(card);
    });
}

// Función auxiliar simple para evitar inyección en XSS
function escapeHTML(str) {
    return str.replace(/[&<>'"]/g,
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}
