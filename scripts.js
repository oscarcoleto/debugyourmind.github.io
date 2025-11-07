// Base de desafíos/acertijos - App centrada en gamificación de programación
const challenges = [
  // LÓGICA
  {
    type: "logic",
    difficulty: 2,
    question: "Tienes 3 servidores. El primero se cae cada 2 días, el segundo cada 3 días, y el tercero cada 6 días. Si hoy se caen los 3, ¿cuándo volverán a caerse los 3 juntos?",
    options: [
      "En 6 días",
      "En 12 días",
      "En 18 días",
      "Nunca"
    ],
    correct: 0,
    explanation: "El MCM (Mínimo Común Múltiplo) de 2, 3 y 6 es 6. Los tres servidores coincidirán cada 6 días."
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

  // ARRAYS
  {
    type: "arrays",
    difficulty: 1,
    question: "¿Qué devuelve [1, 2, 3].map(x => x * 2)?",
    options: [
      "[2, 4, 6]",
      "[1, 2, 3, 2, 4, 6]",
      "6",
      "Error"
    ],
    correct: 0,
    explanation: "map() crea un nuevo array aplicando la función a cada elemento. Resultado: [2, 4, 6]"
  },
  {
    type: "arrays",
    difficulty: 2,
    question: "¿Cuál es la forma correcta de eliminar duplicados de un array?",
    options: [
      "[...new Set(array)]",
      "array.unique()",
      "array.filter(x => !x)",
      "array.removeDuplicates()"
    ],
    correct: 0,
    explanation: "Set elimina duplicados automáticamente. Usar spread operator [...] convierte el Set de vuelta a array."
  },
  {
    type: "arrays",
    difficulty: 2,
    question: "¿Qué hace [1, 2, 3].reduce((a, b) => a + b, 0)?",
    options: [
      "Suma todos los elementos (resultado: 6)",
      "Devuelve el primer elemento",
      "Multiplica todos los elementos",
      "Error de sintaxis"
    ],
    correct: 0,
    explanation: "reduce() acumula valores. En este caso suma: 0 + 1 + 2 + 3 = 6"
  },
  {
    type: "arrays",
    difficulty: 3,
    question: "¿Qué devuelve [1, 2, 3].flat()?",
    options: [
      "[1, 2, 3]",
      "6",
      "[1, [2], [3]]",
      "Error"
    ],
    correct: 0,
    explanation: "flat() aplana arrays anidados. Como no hay anidación, devuelve [1, 2, 3]"
  },

  // STRINGS
  {
    type: "strings",
    difficulty: 1,
    question: "¿Qué devuelve 'hello'.toUpperCase()?",
    options: [
      "'HELLO'",
      "'Hello'",
      "'hello'",
      "Error"
    ],
    correct: 0,
    explanation: "toUpperCase() convierte todos los caracteres a mayúsculas."
  },
  {
    type: "strings",
    difficulty: 2,
    question: "¿Cómo invertir un string 'abc'?",
    options: [
      "'abc'.split('').reverse().join('')",
      "'abc'.reverse()",
      "'abc'.backwards()",
      "'abc'.flip()"
    ],
    correct: 0,
    explanation: "Convertir a array con split(), invertir con reverse(), y unir con join(''). Resultado: 'cba'"
  },
  {
    type: "strings",
    difficulty: 2,
    question: "¿Qué devuelve 'a-b-c'.split('-').length?",
    options: [
      "3",
      "5",
      "2",
      "1"
    ],
    correct: 0,
    explanation: "split('-') divide por guiones: ['a', 'b', 'c']. El array tiene length 3."
  },
  {
    type: "strings",
    difficulty: 3,
    question: "¿Qué hace 'hello world'.replace(/o/g, '0')?",
    options: [
      "'hell0 w0rld'",
      "'hello world'",
      "'hell0 world'",
      "Error"
    ],
    correct: 0,
    explanation: "El flag 'g' (global) reemplaza TODAS las ocurrencias de 'o' con '0'."
  },

  // ALGORITHMS
  {
    type: "algorithms",
    difficulty: 2,
    question: "¿Cuál es la complejidad temporal de buscar un elemento en un array NO ordenado?",
    options: [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n²)"
    ],
    correct: 0,
    explanation: "Debes recorrer todos los elementos en el peor caso. Complejidad lineal O(n)."
  },
  {
    type: "algorithms",
    difficulty: 3,
    question: "¿Qué algoritmo es más eficiente para ordenar un array grande?",
    options: [
      "QuickSort (promedio O(n log n))",
      "Bubble Sort (O(n²))",
      "Selection Sort (O(n²))",
      "Insertion Sort (O(n²))"
    ],
    correct: 0,
    explanation: "QuickSort tiene complejidad O(n log n) en promedio, mucho mejor que O(n²)."
  },
  {
    type: "algorithms",
    difficulty: 2,
    question: "¿Qué es un algoritmo recursivo?",
    options: [
      "Una función que se llama a sí misma",
      "Un bucle infinito",
      "Una función con muchos parámetros",
      "Un algoritmo que usa arrays"
    ],
    correct: 0,
    explanation: "Recursión significa que una función se llama a sí misma hasta alcanzar un caso base."
  },

  // FRONTEND
  {
    type: "frontend",
    difficulty: 1,
    question: "¿Qué hook de React se usa para manejar estado local?",
    options: [
      "useState",
      "useEffect",
      "useContext",
      "useReducer"
    ],
    correct: 0,
    explanation: "useState() es el hook básico para manejar estado local en componentes funcionales."
  },
  {
    type: "frontend",
    difficulty: 2,
    question: "¿Qué CSS framework NO existe?",
    options: [
      "BootstrapReact",
      "Tailwind",
      "Bootstrap",
      "Bulma"
    ],
    correct: 0,
    explanation: "BootstrapReact no existe. Tailwind, Bootstrap y Bulma son frameworks reales."
  },
  {
    type: "frontend",
    difficulty: 2,
    question: "¿Qué hace useEffect(() => {...}, [])?",
    options: [
      "Se ejecuta solo una vez al montar el componente",
      "Se ejecuta en cada render",
      "Se ejecuta solo al desmontar",
      "Nunca se ejecuta"
    ],
    correct: 0,
    explanation: "Array vacío [] significa que solo se ejecuta al montar (como componentDidMount)."
  },
  {
    type: "frontend",
    difficulty: 3,
    question: "¿Qué es el Virtual DOM en React?",
    options: [
      "Una representación ligera del DOM real en memoria",
      "Un servidor virtual",
      "Una base de datos virtual",
      "Un framework CSS"
    ],
    correct: 0,
    explanation: "Virtual DOM es una copia del DOM en memoria que React usa para optimizar updates."
  },

  // BACKEND
  {
    type: "backend",
    difficulty: 1,
    question: "¿Qué significa REST en REST API?",
    options: [
      "Representational State Transfer",
      "Remote Execution Service Technology",
      "Rapid Endpoint Service Transfer",
      "Real-time Execution State"
    ],
    correct: 0,
    explanation: "REST significa Representational State Transfer. Es un estilo arquitectural para APIs."
  },
  {
    type: "backend",
    difficulty: 2,
    question: "¿Qué código HTTP indica éxito?",
    options: [
      "200 OK",
      "404 Not Found",
      "500 Internal Server Error",
      "401 Unauthorized"
    ],
    correct: 0,
    explanation: "200 OK indica que la petición fue exitosa. Los 2xx son códigos de éxito."
  },
  {
    type: "backend",
    difficulty: 2,
    question: "¿Qué es middleware en Express.js?",
    options: [
      "Funciones que procesan requests antes de llegar a las rutas",
      "Una base de datos",
      "Un framework de frontend",
      "Un gestor de paquetes"
    ],
    correct: 0,
    explanation: "Middleware son funciones que se ejecutan en orden para procesar requests/responses."
  },
  {
    type: "backend",
    difficulty: 3,
    question: "¿Qué es SQL Injection?",
    options: [
      "Un ataque que inyecta código SQL malicioso",
      "Una forma de optimizar queries",
      "Un tipo de base de datos",
      "Un método de autenticación"
    ],
    correct: 0,
    explanation: "SQL Injection es un ataque de seguridad donde se inyecta SQL malicioso en inputs."
  },

  // MÁS CODE CHALLENGES
  {
    type: "code",
    difficulty: 2,
    question: "¿Qué imprimirá este código?",
    code: `const obj = { a: 1 };
const obj2 = obj;
obj2.a = 2;
console.log(obj.a);`,
    options: [
      "2",
      "1",
      "undefined",
      "Error"
    ],
    correct: 0,
    explanation: "obj y obj2 apuntan al mismo objeto. Modificar obj2.a también modifica obj.a."
  },
  {
    type: "code",
    difficulty: 3,
    question: "¿Qué imprimirá este código?",
    code: `setTimeout(() => console.log(1), 0);
console.log(2);
Promise.resolve().then(() => console.log(3));
console.log(4);`,
    options: [
      "2, 4, 3, 1",
      "1, 2, 3, 4",
      "2, 3, 4, 1",
      "1, 3, 2, 4"
    ],
    correct: 0,
    explanation: "Event loop: código síncrono primero (2, 4), luego microtasks/Promises (3), luego macrotasks/setTimeout (1)."
  },
  {
    type: "code",
    difficulty: 2,
    question: "¿Qué imprimirá?",
    code: `const arr = [1, 2, 3];
arr[10] = 99;
console.log(arr.length);`,
    options: [
      "11",
      "4",
      "10",
      "Error"
    ],
    correct: 0,
    explanation: "JavaScript permite espacios vacíos en arrays. El length es el índice más alto + 1."
  },

  // MÁS TRIVIA
  {
    type: "trivia",
    difficulty: 2,
    question: "¿Qué significa 'npm'?",
    options: [
      "Node Package Manager",
      "New Programming Method",
      "Node Project Module",
      "Network Package Manager"
    ],
    correct: 0,
    explanation: "npm significa Node Package Manager. Es el gestor de paquetes de Node.js."
  },
  {
    type: "trivia",
    difficulty: 2,
    question: "¿Quién creó Python?",
    options: [
      "Guido van Rossum",
      "Brendan Eich",
      "James Gosling",
      "Dennis Ritchie"
    ],
    correct: 0,
    explanation: "Guido van Rossum creó Python en 1991. Brendan Eich creó JavaScript."
  },
  {
    type: "trivia",
    difficulty: 3,
    question: "¿Qué significa 'SOLID' en programación orientada a objetos?",
    options: [
      "5 principios de diseño de software",
      "Un tipo de base de datos",
      "Un framework de JavaScript",
      "Un patrón de diseño"
    ],
    correct: 0,
    explanation: "SOLID son 5 principios: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion."
  },
  {
    type: "trivia",
    difficulty: 1,
    question: "¿Qué es Git?",
    options: [
      "Un sistema de control de versiones",
      "Un lenguaje de programación",
      "Una base de datos",
      "Un editor de código"
    ],
    correct: 0,
    explanation: "Git es un sistema de control de versiones distribuido creado por Linus Torvalds."
  },

  // MÁS LÓGICA
  {
    type: "logic",
    difficulty: 2,
    question: "Un array tiene índices del 0 al 9. ¿Cuántos elementos tiene?",
    options: [
      "10",
      "9",
      "11",
      "8"
    ],
    correct: 0,
    explanation: "Del 0 al 9 hay 10 elementos (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)."
  },
  {
    type: "logic",
    difficulty: 3,
    question: "¿Cuántos bits hay en 1 byte?",
    options: [
      "8",
      "16",
      "4",
      "1024"
    ],
    correct: 0,
    explanation: "1 byte = 8 bits. Es una unidad fundamental en computación."
  }
];

// Definición de logros - Solo desafíos y racha
const achievements = [
  { id: "first-challenge", icon: "🧩", title: "Primer Desafío", desc: "Resuelve tu primer desafío", requirement: 1, type: "challenge" },
  { id: "10-challenges", icon: "🎯", title: "Resolutor", desc: "Resuelve 10 desafíos", requirement: 10, type: "challenge" },
  { id: "50-challenges", icon: "🔥", title: "Maestro", desc: "Resuelve 50 desafíos", requirement: 50, type: "challenge" },
  { id: "100-challenges", icon: "💯", title: "Leyenda del Código", desc: "Resuelve 100 desafíos", requirement: 100, type: "challenge" },
  { id: "3-day-streak", icon: "🔥", title: "Constante", desc: "3 días seguidos", requirement: 3, type: "streak" },
  { id: "7-day-streak", icon: "⚡", title: "Disciplinado", desc: "1 semana seguida", requirement: 7, type: "streak" },
  { id: "30-day-streak", icon: "👑", title: "Imparable", desc: "30 días seguidos", requirement: 30, type: "streak" },
  { id: "perfect-score", icon: "💯", title: "Perfeccionista", desc: "100% de precisión en 10 desafíos", requirement: 100, type: "accuracy" }
];

// Estado de la aplicación
let state = {
  streak: 0,
  lastVisit: null,
  lastChallengeDate: null, // Para validar racha con desafíos
  unlockedAchievements: [],
  // Desafíos
  currentChallenge: null,
  currentChallengeType: "all",
  challengesSolved: 0,
  challengesAttempted: 0,
  challengeAnswer: null,
  solvedChallenges: [], // IDs de desafíos ya resueltos
  dailyChallengeCompleted: false, // Desafío diario
  dailyChallengeDate: null,
  // Ranking
  username: null
};

// Elementos del DOM
const elements = {
  // Estadísticas
  streakCount: document.getElementById("streak-count"),
  solvedCount: document.getElementById("solved-count"),
  accuracyCount: document.getElementById("accuracy-count"),
  achievementsList: document.getElementById("achievements-list"),
  tabs: document.querySelectorAll(".tab"),
  views: document.querySelectorAll(".view"),
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
  challengeTypeBtns: document.querySelectorAll(".type-btn"),
  dailyChallengeBadge: document.getElementById("daily-challenge-badge"),
  // Ranking
  usernameInput: document.getElementById("username-input"),
  saveUsernameBtn: document.getElementById("save-username-btn"),
  syncBtn: document.getElementById("sync-btn"),
  rankingTable: document.getElementById("ranking-table"),
  // Stats/Profile view
  statsView: document.getElementById("stats-view")
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

  // Sincronizar con Supabase si está disponible
  if (window.supabaseFunctions && state.username) {
    window.supabaseFunctions.autoSync();
  }
}

// ===== SISTEMA DE RACHAS (basado en completar desafíos) =====
function updateStreak() {
  const today = new Date().toDateString();
  const lastChallengeDate = state.lastChallengeDate;

  // La racha solo se actualiza cuando completas un desafío
  // Esta función se llama desde handleChallengeAnswer cuando aciertas

  if (!lastChallengeDate) {
    // Primer desafío completado
    state.streak = 1;
    state.lastChallengeDate = today;
  } else if (lastChallengeDate === today) {
    // Ya completó un desafío hoy, mantener racha
    return;
  } else {
    const lastDate = new Date(lastChallengeDate);
    const currentDate = new Date(today);
    const diffTime = currentDate - lastDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      // Día consecutivo - incrementar racha
      state.streak++;
    } else if (diffDays > 1) {
      // Rompió la racha - resetear a 1
      state.streak = 1;
    }

    state.lastChallengeDate = today;
  }

  checkAchievements();
  saveState();
  updateStats();
}

// Verificar racha al iniciar (para detectar rachas rotas)
function checkStreakOnLoad() {
  const today = new Date().toDateString();
  const lastChallengeDate = state.lastChallengeDate;

  if (lastChallengeDate && lastChallengeDate !== today) {
    const lastDate = new Date(lastChallengeDate);
    const currentDate = new Date(today);
    const diffTime = currentDate - lastDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    // Si pasaron más de 1 día sin completar desafíos, la racha se rompe
    if (diffDays > 1) {
      state.streak = 0;
      saveState();
    }
  }

  updateStats();
}

// ===== ESTADÍSTICAS =====
function updateStats() {
  if (elements.streakCount) {
    elements.streakCount.textContent = state.streak;
  }
  if (elements.solvedCount) {
    elements.solvedCount.textContent = state.challengesSolved;
  }
  if (elements.accuracyCount) {
    const accuracy = state.challengesAttempted > 0
      ? Math.round((state.challengesSolved / state.challengesAttempted) * 100)
      : 0;
    elements.accuracyCount.textContent = `${accuracy}%`;
  }
}

// ===== SISTEMA DE LOGROS =====
function checkAchievements() {
  achievements.forEach(achievement => {
    // Si ya está desbloqueado, saltar
    if (state.unlockedAchievements.includes(achievement.id)) return;

    let shouldUnlock = false;

    switch (achievement.type) {
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

// ===== DESAFÍO DIARIO =====
function getDailyChallengeIndex() {
  // Generar un índice basado en la fecha actual
  // El mismo índice para todo el día (cambia a las 00:00)
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

  // Usar el día del año como semilla para seleccionar un desafío
  return dayOfYear % challenges.length;
}

function getDailyChallenge() {
  const index = getDailyChallengeIndex();
  return challenges[index];
}

function checkDailyChallenge() {
  const today = new Date().toDateString();
  const dailyChallenge = getDailyChallenge();

  // Si el desafío actual es el desafío diario y aún no lo completó hoy
  if (
    state.currentChallenge === dailyChallenge &&
    state.dailyChallengeDate !== today
  ) {
    state.dailyChallengeCompleted = true;
    state.dailyChallengeDate = today;
    showNotification("⭐ ¡Completaste el desafío diario! +50% de puntos");
    saveState();
  }
}

function updateDailyChallengeBadge() {
  const today = new Date().toDateString();
  const dailyChallenge = getDailyChallenge();

  // Mostrar badge si el desafío actual es el diario
  if (elements.dailyChallengeBadge && state.currentChallenge === dailyChallenge) {
    const completed = state.dailyChallengeDate === today && state.dailyChallengeCompleted;
    elements.dailyChallengeBadge.classList.remove('hidden');
    elements.dailyChallengeBadge.textContent = completed ? '✅ Diario Completado' : '⭐ Desafío del Día';
  } else if (elements.dailyChallengeBadge) {
    elements.dailyChallengeBadge.classList.add('hidden');
  }
}

// ===== SISTEMA DE DESAFÍOS =====
function getChallengeId(challenge) {
  // Generar ID único basado en la pregunta
  return challenges.indexOf(challenge);
}

function getFilteredChallenges() {
  let filtered;

  if (state.currentChallengeType === "all") {
    filtered = challenges;
  } else {
    filtered = challenges.filter(c => c.type === state.currentChallengeType);
  }

  // Filtrar desafíos ya resueltos
  const unsolved = filtered.filter(c => {
    const id = getChallengeId(c);
    return !state.solvedChallenges.includes(id);
  });

  // Si todos están resueltos, permitir repetir (resetear para esa categoría)
  if (unsolved.length === 0 && filtered.length > 0) {
    showNotification("🎉 ¡Completaste todos los desafíos! Puedes repetirlos.");
    return filtered;
  }

  return unsolved;
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

  // Actualizar badge del desafío diario
  updateDailyChallengeBadge();

  // Actualizar badge y dificultad
  const typeNames = {
    logic: "🤔 Lógica",
    code: "💻 Código",
    trivia: "🎲 Trivia",
    arrays: "📊 Arrays",
    strings: "📝 Strings",
    algorithms: "🧮 Algoritmos",
    frontend: "🎨 Frontend",
    backend: "⚙️ Backend"
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

    // Marcar desafío como resuelto
    const challengeId = getChallengeId(challenge);
    if (!state.solvedChallenges.includes(challengeId)) {
      state.solvedChallenges.push(challengeId);
    }

    // Actualizar racha solo si acierta
    updateStreak();

    // Verificar si completó el desafío diario
    checkDailyChallenge();
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

  // Actualizar estadísticas (barra superior y vista)
  updateStats();
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
  updateStats();
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

function resetSolvedChallenges() {
  if (state.solvedChallenges.length === 0) {
    showNotification("⚠️ No hay desafíos resueltos para resetear");
    return;
  }

  // Confirmar antes de resetear
  const confirmReset = confirm(
    `¿Seguro que quieres resetear los ${state.solvedChallenges.length} desafíos resueltos?\n\n` +
    "Podrás volver a intentarlos todos, pero tu contador de desafíos completados se mantendrá."
  );

  if (confirmReset) {
    state.solvedChallenges = [];
    saveState();
    loadChallenge(); // Cargar un nuevo desafío
    showNotification("✅ Desafíos reseteados. ¡Puedes intentarlos de nuevo!");
  }
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
  if (tabName === "achievements") {
    renderAchievements();
  } else if (tabName === "challenges") {
    if (!state.currentChallenge) {
      loadChallenge();
    }
    updateChallengeStats();
  } else if (tabName === "ranking") {
    if (window.supabaseFunctions) {
      window.supabaseFunctions.renderLeaderboard();
    }
  } else if (tabName === "stats") {
    renderStatsView();
  }
}

// ===== VISTA DE ESTADÍSTICAS/PERFIL =====
function renderStatsView() {
  // Implementar vista de estadísticas
  const accuracy = state.challengesAttempted > 0
    ? Math.round((state.challengesSolved / state.challengesAttempted) * 100)
    : 0;

  if (elements.statsView) {
    elements.statsView.innerHTML = `
      <h2 class="view-title">📈 Tus Estadísticas</h2>
      <div class="stats-grid">
        <div class="stat-card">
          <span class="stat-icon">🧩</span>
          <span class="stat-value">${state.challengesSolved}</span>
          <span class="stat-label">Completados</span>
        </div>
        <div class="stat-card">
          <span class="stat-icon">🎯</span>
          <span class="stat-value">${accuracy}%</span>
          <span class="stat-label">Precisión</span>
        </div>
        <div class="stat-card">
          <span class="stat-icon">🔥</span>
          <span class="stat-value">${state.streak}</span>
          <span class="stat-label">Mejor Racha</span>
        </div>
        <div class="stat-card">
          <span class="stat-icon">💯</span>
          <span class="stat-value">${state.challengesSolved * 10}</span>
          <span class="stat-label">Puntos Totales</span>
        </div>
      </div>

      <div style="margin-top: 2rem; text-align: center;">
        <button id="reset-challenges-btn" class="action-btn secondary-btn">
          🔄 Resetear Desafíos Resueltos
        </button>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem;">
          Permite volver a intentar todos los desafíos que ya completaste
        </p>
      </div>
    `;

    // Re-añadir event listener al botón (porque se recreó el elemento)
    const resetBtn = document.getElementById("reset-challenges-btn");
    if (resetBtn) {
      resetBtn.addEventListener("click", resetSolvedChallenges);
    }
  }
}

// ===== EVENT LISTENERS =====
elements.tabs.forEach(tab => {
  tab.addEventListener("click", () => switchTab(tab.dataset.tab));
});

elements.nextChallengeBtn.addEventListener("click", loadChallenge);
elements.revealAnswerBtn.addEventListener("click", revealAnswer);

elements.challengeTypeBtns.forEach(btn => {
  btn.addEventListener("click", () => setChallengeType(btn.dataset.type));
});

// Event listeners de ranking
if (elements.saveUsernameBtn) {
  elements.saveUsernameBtn.addEventListener("click", async () => {
    const username = elements.usernameInput.value;
    if (window.supabaseFunctions) {
      const success = await window.supabaseFunctions.saveUsername(username);
      if (success) {
        elements.usernameInput.value = "";
        window.supabaseFunctions.renderLeaderboard();
      }
    }
  });
}

if (elements.usernameInput) {
  elements.usernameInput.addEventListener("keypress", async (e) => {
    if (e.key === "Enter") {
      const username = elements.usernameInput.value;
      if (window.supabaseFunctions) {
        const success = await window.supabaseFunctions.saveUsername(username);
        if (success) {
          elements.usernameInput.value = "";
          window.supabaseFunctions.renderLeaderboard();
        }
      }
    }
  });
}

if (elements.syncBtn) {
  elements.syncBtn.addEventListener("click", async () => {
    if (window.supabaseFunctions) {
      showNotification("🔄 Sincronizando...");
      await window.supabaseFunctions.syncRanking();
      await window.supabaseFunctions.renderLeaderboard();
      showNotification("✅ ¡Sincronizado!");
    }
  });
}

// ===== INICIALIZACIÓN =====
loadState();
checkStreakOnLoad(); // Verificar racha al iniciar
updateStats();
renderAchievements();
updateChallengeStats();

// Cargar desafío inicial y mostrar vista de desafíos por defecto
loadChallenge();
switchTab('challenges');

// Inicializar Supabase
if (window.supabaseFunctions) {
  window.supabaseFunctions.initSupabase();
}
