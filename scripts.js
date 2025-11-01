// Base de frases con categorías
const quotes = [
  { text: "Compila tu mente antes de depurar tu código.", category: "reflexion" },
  { text: "El error más común está entre la silla y el teclado.", category: "humor" },
  { text: "while(!succeed) tryAgain();", category: "motivacion" },
  { text: "A veces, apagar y encender también aplica a la vida.", category: "reflexion" },
  { text: "Debugging es como ser detective en un crimen que tú mismo cometiste.", category: "humor" },
  { text: "No eres tú, es el cache.", category: "humor" },
  { text: "Codear sin café es como un servidor sin energía.", category: "humor" },
  { text: "El commit más valiente: 'final_final_fix_ahora_sí.js'.", category: "humor" },
  { text: "Debuguea tu mente, no permitas tu error 500.", category: "motivacion" },
  { text: "if (vida == dura) { console.log('sigue codeando'); }", category: "motivacion" },
  { text: "El mejor framework es la motivación.", category: "motivacion" },
  { text: "No hay bug que un buen café no pueda posponer.", category: "humor" },
  { text: "Tu código puede fallar, pero tú no te rindas.", category: "motivacion" },
  { text: "breakpoints en el código, pausas en la vida.", category: "reflexion" },
  { text: "El mejor parche para un mal día: git reset --hard y dormir bien.", category: "reflexion" },
  { text: "Commit temprano, commit seguido, commit sin miedo.", category: "motivacion" },
  { text: "La depresión no se resuelve con npm install felicidad, pero se intenta.", category: "reflexion" },
  { text: "A veces la vida no compila… revisa tus dependencias emocionales.", category: "reflexion" },
  { text: "console.log('Confía en ti');", category: "motivacion" },
  { text: "Menos estrés, más expresiones lambda.", category: "reflexion" },
  { text: "Un bug al día mantiene la humildad.", category: "humor" },
  { text: "Tu valor no depende del coverage.", category: "motivacion" },
  { text: "Error 404: Motivación no encontrada (reintenta con un café).", category: "humor" },
  { text: "Refactoriza tus pensamientos negativos.", category: "motivacion" },
  { text: "Siempre hay un 'else' para cada problema.", category: "reflexion" },
  { text: "Hay días que no corren… pero igual se compilan.", category: "humor" },
  { text: "Sé como un servidor: mantente en línea incluso bajo presión.", category: "motivacion" },
  { text: "Ctrl + S tus logros, Ctrl + Z tus errores.", category: "reflexion" },
  { text: "return felicidad; // y sigue adelante", category: "motivacion" },
  { text: "Nunca subestimes el poder de un buen commit y una buena siesta.", category: "humor" }
];

// Base de desafíos/acertijos
const challenges = [
  // LÓGICA
  {
    type: "logic",
    difficulty: 1,
    question: "Si un programador sale de casa a las 8:00 AM para una reunión a 30 minutos de distancia que empieza a las 9:00 AM, ¿llegará a tiempo?",
    options: [
      "Sí, llegará a las 8:30 AM",
      "No, porque antes pasará por Starbucks",
      "Sí, pero entrará 5 minutos tarde",
      "Depende del tráfico en Git"
    ],
    correct: 1,
    explanation: "¡Correcto! Todo programador necesita su café antes de cualquier reunión. 😄☕"
  },
  {
    type: "logic",
    difficulty: 2,
    question: "Tienes 3 servidores. El primero se cae cada 2 días, el segundo cada 3 días, y el tercero cada 6 días. Si hoy se caen los 3, ¿cuándo volverán a caerse los 3 juntos?",
    options: [
      "En 6 días",
      "En 12 días",
      "En 18 días",
      "Nunca, porque ya los arreglaste"
    ],
    correct: 0,
    explanation: "El MCM (Mínimo Común Múltiplo) de 2, 3 y 6 es 6. ¡Matemáticas al rescate!"
  },
  {
    type: "logic",
    difficulty: 1,
    question: "¿Cuántos programadores hacen falta para cambiar una bombilla?",
    options: [
      "Ninguno, es un problema de hardware",
      "Uno, pero necesita Stack Overflow",
      "Dos, uno para hacerlo y otro para hacer code review",
      "Infinitos, porque siempre encuentran un bug más"
    ],
    correct: 0,
    explanation: "¡Exacto! Los programadores no tocan hardware, es culpa del equipo de infraestructura. 😂"
  },

  // ¿QUÉ IMPRIME?
  {
    type: "code",
    difficulty: 2,
    question: "¿Qué imprimirá este código JavaScript?",
    code: `console.log(0.1 + 0.2 === 0.3);`,
    options: [
      "true",
      "false",
      "0.3",
      "Error"
    ],
    correct: 1,
    explanation: "¡false! Los números flotantes tienen problemas de precisión. 0.1 + 0.2 = 0.30000000000000004 en JavaScript."
  },
  {
    type: "code",
    difficulty: 1,
    question: "¿Qué imprimirá este código?",
    code: `console.log(typeof NaN);`,
    options: [
      '"NaN"',
      '"undefined"',
      '"number"',
      '"object"'
    ],
    correct: 2,
    explanation: '¡"number"! Sí, NaN (Not a Number) es de tipo... ¡número! La ironía de JavaScript. 🤷'
  },
  {
    type: "code",
    difficulty: 2,
    question: "¿Qué imprimirá este código Python?",
    code: `print([] == False)
print([] is False)`,
    options: [
      "True\\nTrue",
      "True\\nFalse",
      "False\\nFalse",
      "False\\nTrue"
    ],
    correct: 1,
    explanation: "True y False. == compara valores ([] vacío es falsy), pero 'is' compara identidad de objetos."
  },
  {
    type: "code",
    difficulty: 3,
    question: "¿Qué imprimirá este código JavaScript?",
    code: `console.log([1, 2, 3] + [4, 5, 6]);`,
    options: [
      "[1, 2, 3, 4, 5, 6]",
      '"1,2,34,5,6"',
      "[5, 7, 9]",
      "Error"
    ],
    correct: 1,
    explanation: 'JavaScript convierte los arrays a strings y los concatena: "1,2,3" + "4,5,6" = "1,2,34,5,6"'
  },

  // TRIVIA
  {
    type: "trivia",
    difficulty: 1,
    question: "¿Qué significa API?",
    options: [
      "Advanced Programming Interface",
      "Application Programming Interface",
      "Automated Program Integration",
      "All Programs Integrated"
    ],
    correct: 1,
    explanation: "Application Programming Interface - ¡La forma en que los programas hablan entre sí!"
  },
  {
    type: "trivia",
    difficulty: 2,
    question: "¿Cuál NO es un lenguaje de programación real?",
    options: [
      "Brainfuck",
      "Whitespace",
      "Rockstar",
      "CoffeePot"
    ],
    correct: 3,
    explanation: "¡CoffeePot no existe! Aunque Brainfuck, Whitespace y Rockstar son lenguajes esotéricos reales. 😄"
  },
  {
    type: "trivia",
    difficulty: 1,
    question: "¿Qué es un 'bug' en programación?",
    options: [
      "Un insecto en el ordenador",
      "Un error en el código",
      "Una función obsoleta",
      "Un comentario mal escrito"
    ],
    correct: 1,
    explanation: "Un error en el código. El término viene de 1947 cuando encontraron una polilla real en una computadora."
  },
  {
    type: "trivia",
    difficulty: 2,
    question: "¿En qué año se creó JavaScript?",
    options: [
      "1990",
      "1995",
      "2000",
      "1985"
    ],
    correct: 1,
    explanation: "JavaScript fue creado por Brendan Eich en 1995 en solo 10 días. ¡Y aquí seguimos debuggeándolo!"
  },
  {
    type: "trivia",
    difficulty: 3,
    question: "¿Qué significa el término 'Rubber Duck Debugging'?",
    options: [
      "Debuggear en la ducha",
      "Explicar tu código a un pato de goma para encontrar el bug",
      "Un método de testing automatizado",
      "Una técnica de refactorización"
    ],
    correct: 1,
    explanation: "¡Correcto! Explicar tu código en voz alta (a un pato de goma) te ayuda a encontrar errores. ¡Funciona!"
  },
  {
    type: "logic",
    difficulty: 2,
    question: "Un desarrollador tiene un problema. Decide usar expresiones regulares. Ahora tiene...",
    options: [
      "Una solución elegante",
      "Dos problemas",
      "Un código ilegible",
      "Todas las anteriores"
    ],
    correct: 3,
    explanation: "¡Todas son correctas! Es un chiste clásico de programación. Las regex son poderosas pero complejas. 😅"
  }
];

// Definición de logros
const achievements = [
  { id: "first-quote", icon: "🎯", title: "Primer Paso", desc: "Lee tu primera frase", requirement: 1, type: "read" },
  { id: "10-quotes", icon: "📚", title: "Lector Activo", desc: "Lee 10 frases", requirement: 10, type: "read" },
  { id: "50-quotes", icon: "🔥", title: "Devorador", desc: "Lee 50 frases", requirement: 50, type: "read" },
  { id: "100-quotes", icon: "💯", title: "Centenario", desc: "Lee 100 frases", requirement: 100, type: "read" },
  { id: "first-fav", icon: "❤️", title: "Primera Vez", desc: "Guarda tu primer favorito", requirement: 1, type: "favorite" },
  { id: "10-favs", icon: "💖", title: "Coleccionista", desc: "10 frases favoritas", requirement: 10, type: "favorite" },
  { id: "3-day-streak", icon: "🔥", title: "Constante", desc: "3 días seguidos", requirement: 3, type: "streak" },
  { id: "7-day-streak", icon: "⚡", title: "Disciplinado", desc: "1 semana seguida", requirement: 7, type: "streak" },
  { id: "30-day-streak", icon: "👑", title: "Leyenda", desc: "30 días seguidos", requirement: 30, type: "streak" },
  { id: "first-challenge", icon: "🧩", title: "Primer Desafío", desc: "Resuelve tu primer desafío", requirement: 1, type: "challenge" },
  { id: "10-challenges", icon: "🎯", title: "Resolutor", desc: "Resuelve 10 desafíos", requirement: 10, type: "challenge" },
  { id: "perfect-score", icon: "💯", title: "Perfeccionista", desc: "100% de precisión en 10 desafíos", requirement: 100, type: "accuracy" }
];

// Estado de la aplicación
let state = {
  currentQuote: null,
  currentCategory: "all",
  favorites: [],
  readCount: 0,
  streak: 0,
  lastVisit: null,
  unlockedAchievements: [],
  // Desafíos
  currentChallenge: null,
  currentChallengeType: "all",
  challengesSolved: 0,
  challengesAttempted: 0,
  challengeAnswer: null
};

// Elementos del DOM
const elements = {
  quote: document.getElementById("quote"),
  newQuoteBtn: document.getElementById("new-quote"),
  favoriteBtn: document.getElementById("favorite-btn"),
  shareBtn: document.getElementById("share-btn"),
  streakCount: document.getElementById("streak-count"),
  readCount: document.getElementById("read-count"),
  favCount: document.getElementById("fav-count"),
  currentCategoryBadge: document.getElementById("current-category"),
  favoritesList: document.getElementById("favorites-list"),
  achievementsList: document.getElementById("achievements-list"),
  tabs: document.querySelectorAll(".tab"),
  views: document.querySelectorAll(".view"),
  categoryBtns: document.querySelectorAll(".category-btn"),
  // Desafíos
  challengeQuestion: document.getElementById("challenge-question"),
  challengeCode: document.getElementById("challenge-code"),
  challengeOptions: document.getElementById("challenge-options"),
  challengeResult: document.getElementById("challenge-result"),
  challengeTypeBadge: document.getElementById("challenge-type-badge"),
  challengeDifficulty: document.getElementById("challenge-difficulty"),
  nextChallengeBtn: document.getElementById("next-challenge-btn"),
  revealAnswerBtn: document.getElementById("reveal-answer-btn"),
  challengesSolved: document.getElementById("challenges-solved"),
  challengesAccuracy: document.getElementById("challenges-accuracy"),
  challengeTypeBtns: document.querySelectorAll(".type-btn")
};

// ===== FUNCIONES DE PERSISTENCIA =====
function loadState() {
  const saved = localStorage.getItem("debugYourMindState");
  if (saved) {
    state = { ...state, ...JSON.parse(saved) };
  }
  updateStreak();
}

function saveState() {
  localStorage.setItem("debugYourMindState", JSON.stringify(state));
}

// ===== SISTEMA DE RACHAS =====
function updateStreak() {
  const today = new Date().toDateString();
  const lastVisit = state.lastVisit;

  if (!lastVisit) {
    // Primera visita
    state.streak = 1;
    state.lastVisit = today;
  } else if (lastVisit === today) {
    // Ya visitó hoy, no cambiar racha
    return;
  } else {
    const lastDate = new Date(lastVisit);
    const currentDate = new Date(today);
    const diffTime = currentDate - lastDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      // Día consecutivo
      state.streak++;
    } else if (diffDays > 1) {
      // Rompió la racha
      state.streak = 1;
    }

    state.lastVisit = today;
  }

  checkAchievements();
  saveState();
  updateStats();
}

// ===== ESTADÍSTICAS =====
function updateStats() {
  elements.streakCount.textContent = state.streak;
  elements.readCount.textContent = state.readCount;
  elements.favCount.textContent = state.favorites.length;
}

// ===== SISTEMA DE FRASES =====
function getFilteredQuotes() {
  if (state.currentCategory === "all") {
    return quotes;
  }
  return quotes.filter(q => q.category === state.currentCategory);
}

function newQuote() {
  const filtered = getFilteredQuotes();

  if (filtered.length === 0) {
    elements.quote.textContent = "No hay frases en esta categoría 😢";
    return;
  }

  const random = Math.floor(Math.random() * filtered.length);
  const quote = filtered[random];

  elements.quote.style.opacity = 0;

  setTimeout(() => {
    state.currentQuote = quote;
    elements.quote.textContent = quote.text;
    elements.quote.style.opacity = 1;

    // Incrementar contador de lectura
    state.readCount++;
    updateStats();
    updateFavoriteButton();
    checkAchievements();
    saveState();
  }, 300);
}

// ===== SISTEMA DE FAVORITOS =====
function toggleFavorite() {
  if (!state.currentQuote) return;

  const quoteText = state.currentQuote.text;
  const index = state.favorites.findIndex(f => f.text === quoteText);

  if (index !== -1) {
    // Eliminar favorito
    state.favorites.splice(index, 1);
    elements.favoriteBtn.classList.remove("active");
    elements.favoriteBtn.querySelector(".btn-icon").textContent = "🤍";
  } else {
    // Agregar favorito
    state.favorites.push(state.currentQuote);
    elements.favoriteBtn.classList.add("active");
    elements.favoriteBtn.querySelector(".btn-icon").textContent = "❤️";
  }

  updateStats();
  renderFavorites();
  checkAchievements();
  saveState();
}

function updateFavoriteButton() {
  if (!state.currentQuote) return;

  const isFavorite = state.favorites.some(f => f.text === state.currentQuote.text);

  if (isFavorite) {
    elements.favoriteBtn.classList.add("active");
    elements.favoriteBtn.querySelector(".btn-icon").textContent = "❤️";
  } else {
    elements.favoriteBtn.classList.remove("active");
    elements.favoriteBtn.querySelector(".btn-icon").textContent = "🤍";
  }
}

function renderFavorites() {
  const container = elements.favoritesList;

  if (state.favorites.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <span class="empty-icon">💔</span>
        <p>No tienes frases favoritas aún</p>
        <p class="empty-hint">Toca el corazón en tus frases preferidas</p>
      </div>
    `;
    return;
  }

  container.innerHTML = state.favorites.map((quote, index) => `
    <div class="favorite-card">
      <p class="favorite-text">${quote.text}</p>
      <button class="delete-btn" data-index="${index}">🗑️</button>
    </div>
  `).join('');

  // Event listeners para botones de eliminar
  container.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const index = parseInt(e.target.dataset.index);
      state.favorites.splice(index, 1);
      renderFavorites();
      updateStats();
      updateFavoriteButton();
      saveState();
    });
  });
}

// ===== SISTEMA DE LOGROS =====
function checkAchievements() {
  achievements.forEach(achievement => {
    // Si ya está desbloqueado, saltar
    if (state.unlockedAchievements.includes(achievement.id)) return;

    let shouldUnlock = false;

    switch (achievement.type) {
      case "read":
        shouldUnlock = state.readCount >= achievement.requirement;
        break;
      case "favorite":
        shouldUnlock = state.favorites.length >= achievement.requirement;
        break;
      case "streak":
        shouldUnlock = state.streak >= achievement.requirement;
        break;
      case "challenge":
        shouldUnlock = state.challengesSolved >= achievement.requirement;
        break;
      case "accuracy":
        const accuracy = state.challengesAttempted >= 10
          ? (state.challengesSolved / state.challengesAttempted) * 100
          : 0;
        shouldUnlock = accuracy >= achievement.requirement;
        break;
    }

    if (shouldUnlock) {
      unlockAchievement(achievement.id);
    }
  });

  renderAchievements();
}

function unlockAchievement(id) {
  if (!state.unlockedAchievements.includes(id)) {
    state.unlockedAchievements.push(id);
    saveState();

    // Mostrar notificación (opcional)
    const achievement = achievements.find(a => a.id === id);
    if (achievement) {
      showNotification(`¡Logro desbloqueado! ${achievement.icon} ${achievement.title}`);
    }
  }
}

function showNotification(message) {
  // Crear notificación simple
  const notification = document.createElement("div");
  notification.style.cssText = `
    position: fixed;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, #00ff99, #00cc7a);
    color: #000;
    padding: 1rem 2rem;
    border-radius: 15px;
    font-weight: 600;
    z-index: 10000;
    animation: slideDown 0.5s ease;
    box-shadow: 0 5px 20px rgba(0, 255, 153, 0.5);
  `;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = "slideUp 0.5s ease";
    setTimeout(() => notification.remove(), 500);
  }, 3000);
}

function renderAchievements() {
  const container = elements.achievementsList;

  container.innerHTML = achievements.map(achievement => {
    const isUnlocked = state.unlockedAchievements.includes(achievement.id);
    return `
      <div class="achievement-card ${isUnlocked ? 'unlocked' : 'locked'}">
        <span class="achievement-icon">${achievement.icon}</span>
        <div class="achievement-title">${achievement.title}</div>
        <div class="achievement-desc">${achievement.desc}</div>
      </div>
    `;
  }).join('');
}

// ===== SISTEMA DE CATEGORÍAS =====
function setCategory(category) {
  state.currentCategory = category;

  // Actualizar botones
  elements.categoryBtns.forEach(btn => {
    if (btn.dataset.category === category) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Actualizar badge
  const categoryNames = {
    all: "💭 Todas las frases",
    motivacion: "💪 Motivación",
    humor: "😄 Humor",
    reflexion: "🤔 Reflexión"
  };

  elements.currentCategoryBadge.textContent = categoryNames[category];

  // Cargar nueva frase de la categoría
  newQuote();
}

// ===== COMPARTIR =====
function shareQuote() {
  if (!state.currentQuote) return;

  const text = `${state.currentQuote.text}\n\n— Debug Your Mind 💭`;

  if (navigator.share) {
    navigator.share({
      title: "Debug Your Mind",
      text: text
    }).catch(() => {});
  } else {
    // Copiar al portapapeles
    navigator.clipboard.writeText(text).then(() => {
      showNotification("¡Frase copiada al portapapeles! 📋");
    });
  }
}

// ===== SISTEMA DE DESAFÍOS =====
function getFilteredChallenges() {
  if (state.currentChallengeType === "all") {
    return challenges;
  }
  return challenges.filter(c => c.type === state.currentChallengeType);
}

function loadChallenge() {
  const filtered = getFilteredChallenges();

  if (filtered.length === 0) {
    elements.challengeQuestion.textContent = "No hay desafíos en esta categoría 😢";
    return;
  }

  const random = Math.floor(Math.random() * filtered.length);
  state.currentChallenge = filtered[random];
  state.challengeAnswer = null;

  renderChallenge();
}

function renderChallenge() {
  const challenge = state.currentChallenge;

  // Actualizar badge y dificultad
  const typeNames = {
    logic: "🤔 Lógica",
    code: "💻 ¿Qué imprime?",
    trivia: "🎲 Trivia"
  };
  elements.challengeTypeBadge.textContent = typeNames[challenge.type];

  const difficultyMarks = ["●○○", "●●○", "●●●"];
  elements.challengeDifficulty.textContent = difficultyMarks[challenge.difficulty - 1];

  // Pregunta
  elements.challengeQuestion.textContent = challenge.question;

  // Código (si existe)
  if (challenge.code) {
    elements.challengeCode.classList.remove("hidden");
    elements.challengeCode.querySelector("code").textContent = challenge.code;
  } else {
    elements.challengeCode.classList.add("hidden");
  }

  // Opciones
  renderChallengeOptions();

  // Ocultar resultado
  elements.challengeResult.classList.add("hidden");
}

function renderChallengeOptions() {
  const challenge = state.currentChallenge;

  elements.challengeOptions.innerHTML = challenge.options.map((option, index) => `
    <button class="option-btn" data-index="${index}">
      ${option}
    </button>
  `).join('');

  // Event listeners
  elements.challengeOptions.querySelectorAll(".option-btn").forEach(btn => {
    btn.addEventListener("click", () => handleChallengeAnswer(parseInt(btn.dataset.index)));
  });
}

function handleChallengeAnswer(selectedIndex) {
  if (state.challengeAnswer !== null) return; // Ya respondió

  const challenge = state.currentChallenge;
  const isCorrect = selectedIndex === challenge.correct;

  state.challengeAnswer = selectedIndex;
  state.challengesAttempted++;

  if (isCorrect) {
    state.challengesSolved++;
  }

  // Actualizar UI
  const options = elements.challengeOptions.querySelectorAll(".option-btn");

  options.forEach((btn, index) => {
    btn.classList.add("disabled");

    if (index === challenge.correct) {
      btn.classList.add("correct");
    } else if (index === selectedIndex && !isCorrect) {
      btn.classList.add("incorrect");
    }
  });

  // Mostrar resultado
  showChallengeResult(isCorrect);

  // Actualizar estadísticas
  updateChallengeStats();
  checkAchievements();
  saveState();
}

function revealAnswer() {
  if (state.challengeAnswer !== null) return; // Ya respondió

  const challenge = state.currentChallenge;

  state.challengeAnswer = -1; // Indica que reveló sin responder
  state.challengesAttempted++;

  const options = elements.challengeOptions.querySelectorAll(".option-btn");

  options.forEach((btn, index) => {
    btn.classList.add("disabled");

    if (index === challenge.correct) {
      btn.classList.add("correct");
    }
  });

  showChallengeResult(false, true);
  updateChallengeStats();
  saveState();
}

function showChallengeResult(isCorrect, wasRevealed = false) {
  const challenge = state.currentChallenge;
  const result = elements.challengeResult;

  const icon = result.querySelector(".result-icon");
  const text = result.querySelector(".result-text");
  const explanation = result.querySelector(".result-explanation");

  if (wasRevealed) {
    icon.textContent = "💡";
    text.textContent = "Respuesta revelada";
  } else if (isCorrect) {
    icon.textContent = "🎉";
    text.textContent = "¡Correcto!";
  } else {
    icon.textContent = "😅";
    text.textContent = "No es correcto";
  }

  explanation.textContent = challenge.explanation;

  result.classList.remove("hidden");
}

function updateChallengeStats() {
  elements.challengesSolved.textContent = state.challengesSolved;

  const accuracy = state.challengesAttempted > 0
    ? Math.round((state.challengesSolved / state.challengesAttempted) * 100)
    : 0;

  elements.challengesAccuracy.textContent = `${accuracy}%`;
}

function setChallengeType(type) {
  state.currentChallengeType = type;

  // Actualizar botones
  elements.challengeTypeBtns.forEach(btn => {
    if (btn.dataset.type === type) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  loadChallenge();
}

// ===== NAVEGACIÓN DE PESTAÑAS (actualizar) =====
function switchTab(tabName) {
  // Actualizar pestañas
  elements.tabs.forEach(tab => {
    if (tab.dataset.tab === tabName) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });

  // Actualizar vistas
  elements.views.forEach(view => {
    if (view.id === `${tabName}-view`) {
      view.classList.add("active");
    } else {
      view.classList.remove("active");
    }
  });

  // Cargar contenido de la vista
  if (tabName === "favorites") {
    renderFavorites();
  } else if (tabName === "achievements") {
    renderAchievements();
  } else if (tabName === "challenges") {
    if (!state.currentChallenge) {
      loadChallenge();
    }
    updateChallengeStats();
  }
}

// ===== EVENT LISTENERS =====
elements.newQuoteBtn.addEventListener("click", newQuote);
elements.favoriteBtn.addEventListener("click", toggleFavorite);
elements.shareBtn.addEventListener("click", shareQuote);

elements.tabs.forEach(tab => {
  tab.addEventListener("click", () => switchTab(tab.dataset.tab));
});

elements.categoryBtns.forEach(btn => {
  btn.addEventListener("click", () => setCategory(btn.dataset.category));
});

elements.nextChallengeBtn.addEventListener("click", loadChallenge);
elements.revealAnswerBtn.addEventListener("click", revealAnswer);

elements.challengeTypeBtns.forEach(btn => {
  btn.addEventListener("click", () => setChallengeType(btn.dataset.type));
});

// ===== INICIALIZACIÓN =====
loadState();
updateStats();
newQuote();
renderAchievements();
updateChallengeStats();
