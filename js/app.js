(() => {
    const QUESTION_BANK = [
        { id: "ciencia-facil-1", subject: "ciencia", difficulty: "facil", question: "¿Qué planeta es conocido como el planeta rojo?", correct: "Marte", options: ["Marte", "Venus", "Saturno"] },
        { id: "ciencia-facil-2", subject: "ciencia", difficulty: "facil", question: "¿Cuál es el estado del agua a 0°C?", correct: "Sólido", options: ["Sólido", "Líquido", "Gaseoso"] },
        { id: "ciencia-facil-3", subject: "ciencia", difficulty: "facil", question: "¿Qué gas es más abundante en la atmósfera?", correct: "Nitrógeno", options: ["Oxígeno", "Nitrógeno", "Helio"] },
        { id: "ciencia-medio-1", subject: "ciencia", difficulty: "medio", question: "¿Cuál es la unidad básica de los seres vivos?", correct: "Célula", options: ["Átomo", "Célula", "Tejido"] },
        { id: "ciencia-medio-2", subject: "ciencia", difficulty: "medio", question: "¿Qué órgano bombea la sangre en el cuerpo humano?", correct: "Corazón", options: ["Pulmón", "Hígado", "Corazón"] },
        { id: "ciencia-medio-3", subject: "ciencia", difficulty: "medio", question: "¿Qué proceso usan las plantas para fabricar su alimento?", correct: "Fotosíntesis", options: ["Digestión", "Fotosíntesis", "Evaporación"] },
        { id: "ciencia-dificil-1", subject: "ciencia", difficulty: "dificil", question: "¿Qué tipo de enlace comparte electrones entre átomos?", correct: "Covalente", options: ["Iónico", "Covalente", "Metálico"] },
        { id: "ciencia-dificil-2", subject: "ciencia", difficulty: "dificil", question: "¿Dónde ocurre principalmente la respiración celular?", correct: "Mitocondria", options: ["Núcleo", "Mitocondria", "Ribosoma"] },
        { id: "ciencia-dificil-3", subject: "ciencia", difficulty: "dificil", question: "¿Qué partícula tiene carga negativa?", correct: "Electrón", options: ["Protón", "Neutrón", "Electrón"] },
        { id: "historia-facil-1", subject: "historia", difficulty: "facil", question: "¿Qué muro cayó en 1989 en Alemania?", correct: "Muro de Berlín", options: ["Muro de Berlín", "Muro de París", "Muro de Roma"] },
        { id: "historia-facil-2", subject: "historia", difficulty: "facil", question: "¿Quién llegó a América en 1492 según la historia tradicional?", correct: "Cristóbal Colón", options: ["Cristóbal Colón", "Simón Bolívar", "Hernán Cortés"] },
        { id: "historia-facil-3", subject: "historia", difficulty: "facil", question: "¿En qué continente se desarrolló el antiguo Egipto?", correct: "África", options: ["Europa", "África", "Asia"] },
        { id: "historia-medio-1", subject: "historia", difficulty: "medio", question: "¿Qué revolución inició en Francia en 1789?", correct: "Revolución Francesa", options: ["Revolución Industrial", "Revolución Francesa", "Revolución Rusa"] },
        { id: "historia-medio-2", subject: "historia", difficulty: "medio", question: "¿Qué civilización construyó Machu Picchu?", correct: "Inca", options: ["Maya", "Azteca", "Inca"] },
        { id: "historia-medio-3", subject: "historia", difficulty: "medio", question: "¿Quién lideró campañas de independencia en Sudamérica?", correct: "Simón Bolívar", options: ["José Martí", "Simón Bolívar", "Miguel Hidalgo"] },
        { id: "historia-dificil-1", subject: "historia", difficulty: "dificil", question: "¿En qué año comenzó la Primera Guerra Mundial?", correct: "1914", options: ["1914", "1918", "1939"] },
        { id: "historia-dificil-2", subject: "historia", difficulty: "dificil", question: "¿Qué tratado cerró formalmente la Primera Guerra Mundial?", correct: "Tratado de Versalles", options: ["Tratado de Versalles", "Tratado de París", "Tratado de Utrecht"] },
        { id: "historia-dificil-3", subject: "historia", difficulty: "dificil", question: "¿Qué dinastía unificó China en 221 a.C.?", correct: "Dinastía Qin", options: ["Dinastía Han", "Dinastía Qin", "Dinastía Tang"] },
        { id: "geografia-facil-1", subject: "geografia", difficulty: "facil", question: "¿Cuál es la capital de Colombia?", correct: "Bogotá", options: ["Bogotá", "Quito", "Lima"] },
        { id: "geografia-facil-2", subject: "geografia", difficulty: "facil", question: "¿Cuál es el océano más grande del planeta?", correct: "Océano Pacífico", options: ["Océano Pacífico", "Océano Atlántico", "Océano Índico"] },
        { id: "geografia-facil-3", subject: "geografia", difficulty: "facil", question: "¿En qué continente está Brasil?", correct: "América del Sur", options: ["América del Norte", "Europa", "América del Sur"] },
        { id: "geografia-medio-1", subject: "geografia", difficulty: "medio", question: "¿Qué cordillera atraviesa Sudamérica?", correct: "Cordillera de los Andes", options: ["Alpes", "Cordillera de los Andes", "Himalaya"] },
        { id: "geografia-medio-2", subject: "geografia", difficulty: "medio", question: "¿Cuál es el río más caudaloso del mundo?", correct: "Río Amazonas", options: ["Río Amazonas", "Río Nilo", "Río Misisipi"] },
        { id: "geografia-medio-3", subject: "geografia", difficulty: "medio", question: "¿Cuál es el desierto cálido más grande?", correct: "Sahara", options: ["Sahara", "Atacama", "Gobi"] },
        { id: "geografia-dificil-1", subject: "geografia", difficulty: "dificil", question: "¿Qué línea divide la Tierra en hemisferio norte y sur?", correct: "Ecuador", options: ["Ecuador", "Trópico de Cáncer", "Meridiano de Greenwich"] },
        { id: "geografia-dificil-2", subject: "geografia", difficulty: "dificil", question: "¿Qué país es el más extenso del mundo?", correct: "Rusia", options: ["Canadá", "Rusia", "China"] },
        { id: "geografia-dificil-3", subject: "geografia", difficulty: "dificil", question: "¿Qué estrecho separa Asia de América del Norte?", correct: "Estrecho de Bering", options: ["Estrecho de Bering", "Estrecho de Gibraltar", "Estrecho de Magallanes"] }
    ];

    const RadioEduApp = {
        customQuestionsStorageKey: "mis_preguntas_custom",
        accessibilityStorageKey: "radioedu_ods_accessibility",
        questionHistoryStorageKey: "radioedu_ods_question_history",
        viewedQuestions: [],
        currentQuestionIds: [],
        previewQuestion: null,

        init() {
            this.cacheDOM();
            this.applyStoredAccessibilityPreferences();
            this.bindEvents();
            this.initializeQuestionSystem();
            this.renderStoredCustomQuestions();
            this.hideContactSuccess();
        },

        cacheDOM() {
            this.body = document.body;
            this.sections = Array.from(document.querySelectorAll(".page-section"));
            this.navLinks = Array.from(document.querySelectorAll("#nav-menu a"));
            this.cardLinks = Array.from(document.querySelectorAll(".card-link"));
            this.breadcrumbCurrent = document.querySelector("#breadcrumb-current");

            this.btnTextDecrease = document.querySelector("#btn-text-decrease");
            this.btnTextIncrease = document.querySelector("#btn-text-increase");
            this.btnTextReset = document.querySelector("#btn-text-reset");
            this.btnContrast = document.querySelector("#btn-contrast");

            this.refreshQuestionsBtn = document.querySelector("#refresh-questions-btn");
            this.apiStatus = document.querySelector("#api-status");
            this.questionsGrid = document.querySelector("#questions-grid");
            this.subjectFilter = document.querySelector("#subject-filter");
            this.difficultyFilter = document.querySelector("#difficulty-filter");
            this.historyList = document.querySelector("#history-list");
            this.historyContainer = document.querySelector("#historial-lista");
            this.clearHistoryBtn = document.querySelector("#clear-history-btn");

            this.scriptForm = document.querySelector("#script-form");
            this.customSubjectInput = document.querySelector("#custom-subject");
            this.customDifficultyInput = document.querySelector("#custom-difficulty");
            this.customQuestionInput = document.querySelector("#custom-question");
            this.optionAInput = document.querySelector("#option-a");
            this.optionBInput = document.querySelector("#option-b");
            this.optionCInput = document.querySelector("#option-c");
            this.correctOptionInput = document.querySelector("#correct-option");
            this.generateQuestionBtn = document.querySelector("#generate-question-btn");
            this.questionPreview = document.querySelector("#question-preview");
            this.scriptMessage = document.querySelector("#script-message");
            this.offlineGrid = document.querySelector("#offline-grid");
            this.editingQuestionId = null;

            this.contactForm = document.querySelector("#contact-form");
            this.contactNameInput = document.querySelector("#contact-name");
            this.contactEmailInput = document.querySelector("#contact-email");
            this.contactPhoneInput = document.querySelector("#contact-phone");
            this.contactMessageInput = document.querySelector("#contact-message");
            this.contactSuccessBox = document.querySelector("#form-successbox");

            this.errorName = document.querySelector("#error-name");
            this.errorEmail = document.querySelector("#error-email");
            this.errorPhone = document.querySelector("#error-phone");
            this.errorMsg = document.querySelector("#error-msg");
        },

        bindEvents() {
            this.navLinks.forEach((link) => {
                link.addEventListener("click", (event) => this.handleNavigationClick(event, link));
            });

            this.cardLinks.forEach((link) => {
                link.addEventListener("click", (event) => this.handleNavigationClick(event, link));
            });

            if (this.btnTextIncrease) {
                this.btnTextIncrease.addEventListener("click", () => this.increaseText());
            }

            if (this.btnTextDecrease) {
                this.btnTextDecrease.addEventListener("click", () => this.decreaseText());
            }

            if (this.btnTextReset) {
                this.btnTextReset.addEventListener("click", () => this.resetText());
            }

            if (this.btnContrast) {
                this.btnContrast.addEventListener("click", () => this.toggleContrast());
            }

            if (this.refreshQuestionsBtn) {
                this.refreshQuestionsBtn.addEventListener("click", () => this.loadFilteredQuestions());
            }

            if (this.subjectFilter) {
                this.subjectFilter.addEventListener("change", () => this.loadFilteredQuestions());
            }

            if (this.difficultyFilter) {
                this.difficultyFilter.addEventListener("change", () => this.loadFilteredQuestions());
            }

            if (this.questionsGrid) {
                this.questionsGrid.addEventListener("click", (event) => this.handleAnswerToggle(event));
            }

            if (this.clearHistoryBtn) {
                this.clearHistoryBtn.addEventListener("click", () => this.clearQuestionHistory());
            }

            if (this.generateQuestionBtn) {
                this.generateQuestionBtn.addEventListener("click", () => this.handleGenerateQuestion());
            }

            if (this.scriptForm) {
                this.scriptForm.addEventListener("submit", (event) => this.handleCustomQuestionSave(event));
            }

            if (this.questionPreview) {
                this.questionPreview.addEventListener("click", (event) => this.handlePreviewActions(event));
            }

            if (this.offlineGrid) {
                this.offlineGrid.addEventListener("click", (event) => {
                    this.handleAnswerToggle(event);
                    this.handleOfflineGridActions(event);
                });
            }

            if (this.contactForm) {
                this.bindContactRealtimeValidation();
                this.contactForm.addEventListener("submit", (event) => this.handleContactSubmit(event));
            }
        },

        handleNavigationClick(event, link) {
            const href = link.getAttribute("href");
            if (!href || !href.startsWith("#")) {
                return;
            }

            const sectionId = href.slice(1);
            const targetSection = document.getElementById(sectionId);

            if (!targetSection || !targetSection.classList.contains("page-section")) {
                return;
            }

            event.preventDefault();
            this.showSection(sectionId);
            this.updateActiveNavLink(sectionId);
            this.updateBreadcrumb(link, sectionId);
            window.scrollTo({ top: 0, behavior: "smooth" });
        },

        showSection(sectionId) {
            this.sections.forEach((section) => {
                const isTarget = section.id === sectionId;
                section.classList.toggle("hidden", !isTarget);
                section.classList.toggle("active", isTarget);
            });
        },

        updateActiveNavLink(sectionId) {
            this.navLinks.forEach((link) => {
                const isActive = link.getAttribute("href") === `#${sectionId}`;
                link.classList.toggle("active", isActive);
            });
        },

        updateBreadcrumb(link, sectionId) {
            if (!this.breadcrumbCurrent) {
                return;
            }

            const navLink = this.navLinks.find((item) => item.getAttribute("href") === `#${sectionId}`);
            if (navLink) {
                this.breadcrumbCurrent.textContent = navLink.textContent?.trim() || "Inicio";
                return;
            }

            const cardTitle = link.querySelector("h3");
            this.breadcrumbCurrent.textContent = cardTitle?.textContent?.trim() || "Inicio";
        },

        increaseText() {
            this.body.classList.remove("text-small");
            this.body.classList.add("text-large");
            this.saveAccessibilityPreferences();
        },

        decreaseText() {
            this.body.classList.remove("text-large");
            this.body.classList.add("text-small");
            this.saveAccessibilityPreferences();
        },

        resetText() {
            this.body.classList.remove("text-large", "text-small");
            this.body.style.removeProperty("font-size");
            document.documentElement.style.removeProperty("font-size");
            this.saveAccessibilityPreferences();
        },

        toggleContrast() {
            this.body.classList.toggle("high-contrast");
            this.saveAccessibilityPreferences();
        },

        applyStoredAccessibilityPreferences() {
            if (!this.body) {
                return;
            }

            const rawData = localStorage.getItem(this.accessibilityStorageKey);
            if (!rawData) {
                return;
            }

            try {
                const preferences = JSON.parse(rawData);
                const textSize = preferences?.textSize;
                const highContrast = preferences?.highContrast;

                this.body.classList.remove("text-large", "text-small");
                this.body.style.removeProperty("font-size");
                document.documentElement.style.removeProperty("font-size");
                if (textSize === "large") {
                    this.body.classList.add("text-large");
                } else if (textSize === "small") {
                    this.body.classList.add("text-small");
                }

                this.body.classList.toggle("high-contrast", Boolean(highContrast));
            } catch (_error) {
                localStorage.removeItem(this.accessibilityStorageKey);
            }
        },

        saveAccessibilityPreferences() {
            if (!this.body) {
                return;
            }

            let textSize = "normal";
            if (this.body.classList.contains("text-large")) {
                textSize = "large";
            } else if (this.body.classList.contains("text-small")) {
                textSize = "small";
            }

            const preferences = {
                textSize,
                highContrast: this.body.classList.contains("high-contrast")
            };

            localStorage.setItem(this.accessibilityStorageKey, JSON.stringify(preferences));
        },

        initializeQuestionSystem() {
            this.viewedQuestions = this.getViewedQuestions();
            this.renderQuestionHistory();
            this.loadFilteredQuestions();
        },

        loadFilteredQuestions() {
            if (!this.questionsGrid || !this.apiStatus || !this.subjectFilter || !this.difficultyFilter) {
                return;
            }

            const subject = this.subjectFilter.value;
            const difficulty = this.difficultyFilter.value;
            const evaluationBank = this.getEvaluationQuestionBank();

            const filteredQuestions = evaluationBank.filter(
                (question) => question.subject === subject && question.difficulty === difficulty
            );

            const unseenQuestions = filteredQuestions.filter(
                (question) => !this.viewedQuestions.some((viewed) => viewed.id === question.id)
            );

            if (unseenQuestions.length === 0) {
                this.currentQuestionIds = [];
                this.updateQuestionsWithTransition([]);
                this.apiStatus.textContent = "Has completado todas las preguntas de esta sección";
                this.renderQuestionHistory();
                return;
            }

            const selectedQuestions = this.shuffleArray(unseenQuestions).slice(0, 3);
            this.currentQuestionIds = selectedQuestions.map((question) => question.id);
            this.markQuestionsAsViewed(selectedQuestions);
            this.updateQuestionsWithTransition(selectedQuestions);

            const statusCount = selectedQuestions.length;
            this.apiStatus.textContent = `Mostrando ${statusCount} pregunta(s) de ${subject} - ${difficulty}.`;
        },

        getEvaluationQuestionBank() {
            const customQuestions = this.getStoredCustomQuestions()
                .map((question) => ({
                    id: question.id,
                    subject: question.materia,
                    difficulty: question.dificultad,
                    question: question.pregunta,
                    correct: question.respuestaCorrecta,
                    options: question.opciones
                }))
                .filter(
                    (question) =>
                        typeof question.id === "string" &&
                        typeof question.subject === "string" &&
                        typeof question.difficulty === "string" &&
                        typeof question.question === "string" &&
                        typeof question.correct === "string" &&
                        Array.isArray(question.options) &&
                        question.options.length === 3
                );

            return [...QUESTION_BANK, ...customQuestions];
        },

        updateQuestionsWithTransition(questions) {
            if (!this.questionsGrid) {
                return;
            }

            this.questionsGrid.classList.add("is-updating");
            window.setTimeout(() => {
                this.renderQuestions(questions);
                this.questionsGrid.classList.remove("is-updating");
            }, 220);
        },

        renderQuestions(questions) {
            if (!this.questionsGrid) {
                return;
            }

            if (questions.length === 0) {
                this.questionsGrid.innerHTML = "";
                return;
            }

            const cardsHTML = questions
                .map((question, index) => {
                    const options = this.shuffleArray(question.options);
                    const optionsList = options.map((option) => `<li>${this.escapeHTML(option)}</li>`).join("");

                    return `
                        <article class="question-card">
                            <h3>Pregunta ${index + 1}</h3>
                            <p>${this.escapeHTML(question.question)}</p>
                            <ul>${optionsList}</ul>
                            <button class="answer-btn" type="button" data-answer="${this.escapeAttribute(question.correct)}">
                                Mostrar respuesta
                            </button>
                        </article>
                    `;
                })
                .join("");

            this.questionsGrid.innerHTML = cardsHTML;
        },

        markQuestionsAsViewed(questions) {
            questions.forEach((question) => {
                const exists = this.viewedQuestions.some((viewed) => viewed.id === question.id);
                if (!exists) {
                    this.viewedQuestions.push({
                        id: question.id,
                        question: question.question,
                        answer: question.correct
                    });
                }
            });

            this.saveViewedQuestions();
            this.renderQuestionHistory();
        },

        getViewedQuestions() {
            const raw = sessionStorage.getItem(this.questionHistoryStorageKey);
            if (!raw) {
                return [];
            }

            try {
                const parsed = JSON.parse(raw);
                if (!Array.isArray(parsed)) {
                    return [];
                }

                return parsed.filter(
                    (item) =>
                        typeof item?.id === "string" &&
                        typeof item?.question === "string" &&
                        typeof item?.answer === "string"
                );
            } catch (_error) {
                return [];
            }
        },

        saveViewedQuestions() {
            sessionStorage.setItem(this.questionHistoryStorageKey, JSON.stringify(this.viewedQuestions));
        },

        renderQuestionHistory() {
            if (!this.historyList || !this.historyContainer) {
                return;
            }

            const historyItems = this.viewedQuestions.filter(
                (item) => !this.currentQuestionIds.includes(item.id)
            );

            if (historyItems.length === 0) {
                this.historyContainer.classList.add("hidden");
                this.historyList.innerHTML = "<li>Aún no has consultado preguntas.</li>";
                return;
            }

            this.historyContainer.classList.remove("hidden");
            this.historyList.innerHTML = historyItems
                .map(
                    (item) =>
                        `<li>Pregunta: ${this.escapeHTML(item.question)} | Respuesta: ${this.escapeHTML(item.answer)}</li>`
                )
                .join("");
        },

        clearQuestionHistory() {
            this.viewedQuestions = [];
            this.currentQuestionIds = [];
            sessionStorage.removeItem(this.questionHistoryStorageKey);
            this.loadFilteredQuestions();
        },

        handleAnswerToggle(event) {
            const button = event.target.closest(".answer-btn");
            if (!button) {
                return;
            }

            const answer = button.getAttribute("data-answer") || "";
            const isShowing = button.getAttribute("data-showing") === "true";

            if (isShowing) {
                button.textContent = "Mostrar respuesta";
                button.setAttribute("data-showing", "false");
            } else {
                button.textContent = `Respuesta: ${answer}`;
                button.setAttribute("data-showing", "true");
            }
        },

        getCustomQuestionFromForm() {
            const materia = this.customSubjectInput?.value || "";
            const dificultad = this.customDifficultyInput?.value || "";
            const pregunta = this.customQuestionInput?.value.trim() || "";
            const opcionA = this.optionAInput?.value.trim() || "";
            const opcionB = this.optionBInput?.value.trim() || "";
            const opcionC = this.optionCInput?.value.trim() || "";
            const correctLetter = this.correctOptionInput?.value || "A";
            const options = [opcionA, opcionB, opcionC];
            const correctIndex = { A: 0, B: 1, C: 2 }[correctLetter];
            const respuestaCorrecta = options[correctIndex] || "";

            return {
                id: this.editingQuestionId || `custom-${Date.now()}`,
                materia,
                dificultad,
                pregunta,
                opciones: options,
                respuestaCorrecta
            };
        },

        validateCustomQuestion(question) {
            const hasBaseData =
                Boolean(question.materia) &&
                Boolean(question.dificultad) &&
                Boolean(question.pregunta);
            const hasThreeOptions = question.opciones.length === 3 && question.opciones.every((opt) => Boolean(opt));
            const uniqueOptions = new Set(question.opciones.map((opt) => opt.toLowerCase())).size === 3;
            const hasCorrect = Boolean(question.respuestaCorrecta);
            return hasBaseData && hasThreeOptions && uniqueOptions && hasCorrect;
        },

        handleGenerateQuestion() {
            const question = this.getCustomQuestionFromForm();
            if (!this.validateCustomQuestion(question)) {
                this.showScriptMessage("Complete todos los campos. Las opciones no deben repetirse.", "error");
                return;
            }

            this.renderQuestionPreview(question);
            this.showScriptMessage("Previsualización generada. Puede editar o guardar.", "success");
        },

        renderQuestionPreview(question) {
            if (!this.questionPreview) {
                return;
            }

            this.previewQuestion = question;
            const optionsList = question.opciones
                .map((option) => `<li>${this.escapeHTML(option)}</li>`)
                .join("");

            this.questionPreview.innerHTML = `
                <article class="question-card">
                    <h3>Previsualización</h3>
                    <p>${this.escapeHTML(question.pregunta)}</p>
                    <ul>${optionsList}</ul>
                    <button class="answer-btn" type="button" data-answer="${this.escapeAttribute(question.respuestaCorrecta)}">
                        Mostrar respuesta
                    </button>
                    <p><strong>Materia:</strong> ${this.escapeHTML(question.materia)} | <strong>Dificultad:</strong> ${this.escapeHTML(question.dificultad)}</p>
                    <button class="custom-question-btn edit-btn" type="button" data-action="edit-preview">Editar</button>
                </article>
            `;
        },

        handlePreviewActions(event) {
            const actionBtn = event.target.closest("[data-action]");
            if (!actionBtn) {
                return;
            }

            const action = actionBtn.getAttribute("data-action");
            if (action === "edit-preview") {
                if (this.previewQuestion) {
                    this.populateCustomQuestionForm(this.previewQuestion);
                }
                this.showScriptMessage("Puede modificar los campos y volver a generar o guardar.", "success");
            }
        },

        handleCustomQuestionSave(event) {
            event.preventDefault();

            const question = this.getCustomQuestionFromForm();
            if (!this.validateCustomQuestion(question)) {
                this.showScriptMessage("No se puede guardar. Revise los campos del formulario.", "error");
                return;
            }

            const storedQuestions = this.getStoredCustomQuestions();
            const questionIndex = storedQuestions.findIndex((item) => item.id === question.id);

            if (questionIndex >= 0) {
                storedQuestions[questionIndex] = question;
                this.showScriptMessage("Pregunta actualizada correctamente.", "success");
            } else {
                storedQuestions.unshift(question);
                this.showScriptMessage("Pregunta guardada correctamente.", "success");
            }

            localStorage.setItem(this.customQuestionsStorageKey, JSON.stringify(storedQuestions));
            this.editingQuestionId = null;
            this.previewQuestion = null;
            this.scriptForm?.reset();
            if (this.questionPreview) {
                this.questionPreview.innerHTML = "";
            }
            this.renderStoredCustomQuestions();
            this.loadFilteredQuestions();
        },

        getStoredCustomQuestions() {
            const rawData = localStorage.getItem(this.customQuestionsStorageKey);
            if (!rawData) {
                return [];
            }

            try {
                const parsed = JSON.parse(rawData);
                if (!Array.isArray(parsed)) {
                    return [];
                }

                return parsed.filter(
                    (item) =>
                        typeof item?.id === "string" &&
                        typeof item?.materia === "string" &&
                        typeof item?.dificultad === "string" &&
                        typeof item?.pregunta === "string" &&
                        Array.isArray(item?.opciones) &&
                        item.opciones.length === 3 &&
                        typeof item?.respuestaCorrecta === "string"
                );
            } catch (_error) {
                return [];
            }
        },

        renderStoredCustomQuestions() {
            if (!this.offlineGrid) {
                return;
            }

            const questions = this.getStoredCustomQuestions();
            if (questions.length === 0) {
                this.offlineGrid.innerHTML = `
                    <article class="script-card">
                        <h3>Sin preguntas guardadas</h3>
                        <p>Aún no hay preguntas personalizadas en su dispositivo.</p>
                    </article>
                `;
                return;
            }

            this.offlineGrid.innerHTML = questions
                .map((question) => {
                    const optionsList = question.opciones
                        .map((option) => `<li>${this.escapeHTML(option)}</li>`)
                        .join("");

                    return `
                        <article class="question-card">
                            <h3>${this.escapeHTML(question.pregunta)}</h3>
                            <ul>${optionsList}</ul>
                            <p><strong>Materia:</strong> ${this.escapeHTML(question.materia)} | <strong>Dificultad:</strong> ${this.escapeHTML(question.dificultad)}</p>
                            <button class="answer-btn" type="button" data-answer="${this.escapeAttribute(question.respuestaCorrecta)}">Mostrar respuesta</button>
                            <div class="custom-question-actions">
                                <button class="custom-question-btn edit-btn" type="button" data-action="edit-custom" data-id="${this.escapeAttribute(question.id)}">Editar</button>
                                <button class="custom-question-btn delete-btn" type="button" data-action="delete-custom" data-id="${this.escapeAttribute(question.id)}">Borrar</button>
                            </div>
                        </article>
                    `;
                })
                .join("");
        },

        handleOfflineGridActions(event) {
            const actionBtn = event.target.closest("[data-action]");
            if (!actionBtn) {
                return;
            }

            const action = actionBtn.getAttribute("data-action");
            const id = actionBtn.getAttribute("data-id");
            if (!id) {
                return;
            }

            if (action === "edit-custom") {
                this.loadCustomQuestionForEditing(id);
            } else if (action === "delete-custom") {
                this.deleteCustomQuestion(id);
            }
        },

        loadCustomQuestionForEditing(id) {
            const questions = this.getStoredCustomQuestions();
            const question = questions.find((item) => item.id === id);
            if (!question) {
                return;
            }

            this.editingQuestionId = question.id;
            this.populateCustomQuestionForm(question);
            this.renderQuestionPreview(question);
            this.showSection("guiones");
            this.updateActiveNavLink("guiones");
            this.showScriptMessage("Pregunta cargada para edición.", "success");
            window.scrollTo({ top: 0, behavior: "smooth" });
        },

        populateCustomQuestionForm(question) {
            if (this.customSubjectInput) this.customSubjectInput.value = question.materia;
            if (this.customDifficultyInput) this.customDifficultyInput.value = question.dificultad;
            if (this.customQuestionInput) this.customQuestionInput.value = question.pregunta;
            if (this.optionAInput) this.optionAInput.value = question.opciones[0] || "";
            if (this.optionBInput) this.optionBInput.value = question.opciones[1] || "";
            if (this.optionCInput) this.optionCInput.value = question.opciones[2] || "";

            let correctLetter = "A";
            if (question.respuestaCorrecta === question.opciones[1]) {
                correctLetter = "B";
            } else if (question.respuestaCorrecta === question.opciones[2]) {
                correctLetter = "C";
            }
            if (this.correctOptionInput) this.correctOptionInput.value = correctLetter;
        },

        deleteCustomQuestion(id) {
            const updatedQuestions = this.getStoredCustomQuestions().filter((question) => question.id !== id);
            localStorage.setItem(this.customQuestionsStorageKey, JSON.stringify(updatedQuestions));
            this.viewedQuestions = this.viewedQuestions.filter((item) => item.id !== id);
            this.saveViewedQuestions();
            this.renderQuestionHistory();
            this.renderStoredCustomQuestions();
            this.loadFilteredQuestions();
            this.showScriptMessage("Pregunta eliminada.", "success");
        },

        showScriptMessage(message, type) {
            if (!this.scriptMessage) {
                return;
            }

            this.scriptMessage.textContent = message;
            this.scriptMessage.classList.remove("hidden", "success", "error");
            this.scriptMessage.classList.add(type);
        },

        bindContactRealtimeValidation() {
            this.contactNameInput?.addEventListener("input", () => {
                this.validateContactName();
                this.hideContactSuccess();
            });

            this.contactEmailInput?.addEventListener("input", () => {
                this.validateContactEmail();
                this.hideContactSuccess();
            });

            this.contactPhoneInput?.addEventListener("input", () => {
                this.validateContactPhone();
                this.hideContactSuccess();
            });

            this.contactMessageInput?.addEventListener("input", () => {
                this.validateContactMessage();
                this.hideContactSuccess();
            });
        },

        handleContactSubmit(event) {
            event.preventDefault();

            const isNameValid = this.validateContactName();
            const isEmailValid = this.validateContactEmail();
            const isPhoneValid = this.validateContactPhone();
            const isMessageValid = this.validateContactMessage();

            if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
                if (this.contactSuccessBox) {
                    this.contactSuccessBox.textContent = "Mensaje enviado correctamente.";
                    this.contactSuccessBox.classList.remove("hidden", "error");
                    this.contactSuccessBox.classList.add("success");
                }
                this.contactForm?.reset();
                this.clearContactFieldStates();
                return;
            }

            this.hideContactSuccess();
        },

        validateContactName() {
            const value = this.contactNameInput?.value.trim() || "";
            const pattern = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]{3,}$/;
            return this.validateField(this.contactNameInput, this.errorName, pattern.test(value));
        },

        validateContactEmail() {
            const value = this.contactEmailInput?.value.trim() || "";
            const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
            return this.validateField(this.contactEmailInput, this.errorEmail, pattern.test(value));
        },

        validateContactPhone() {
            const value = this.contactPhoneInput?.value.trim() || "";
            if (!value) {
                return this.validateField(this.contactPhoneInput, this.errorPhone, true);
            }

            const pattern = /^\+\d{1,3}[\s-]?\d[\d\s-]{6,}$/;
            return this.validateField(this.contactPhoneInput, this.errorPhone, pattern.test(value));
        },

        validateContactMessage() {
            const value = this.contactMessageInput?.value.trim() || "";
            return this.validateField(this.contactMessageInput, this.errorMsg, value.length >= 10);
        },

        validateField(input, errorElement, isValid) {
            if (!input || !errorElement) {
                return isValid;
            }

            input.classList.toggle("invalid", !isValid);
            errorElement.style.display = isValid ? "none" : "block";
            return isValid;
        },

        clearContactFieldStates() {
            [
                [this.contactNameInput, this.errorName],
                [this.contactEmailInput, this.errorEmail],
                [this.contactPhoneInput, this.errorPhone],
                [this.contactMessageInput, this.errorMsg]
            ].forEach(([input, error]) => {
                if (input) {
                    input.classList.remove("invalid");
                }
                if (error) {
                    error.style.display = "none";
                }
            });
        },

        hideContactSuccess() {
            if (!this.contactSuccessBox) {
                return;
            }

            this.contactSuccessBox.classList.add("hidden");
            this.contactSuccessBox.classList.remove("success", "error");
            this.contactSuccessBox.textContent = "";
        },

        shuffleArray(items) {
            const array = [...items];
            for (let i = array.length - 1; i > 0; i -= 1) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        },

        escapeHTML(value) {
            return value
                .replaceAll("&", "&amp;")
                .replaceAll("<", "&lt;")
                .replaceAll(">", "&gt;")
                .replaceAll('"', "&quot;")
                .replaceAll("'", "&#39;");
        },

        escapeAttribute(value) {
            return this.escapeHTML(value);
        }
    };

    document.addEventListener("DOMContentLoaded", () => RadioEduApp.init());
})();
