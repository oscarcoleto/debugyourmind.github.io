const quotes = [
  "“Compila tu mente antes de depurar tu código.”",
  "“El error más común está entre la silla y el teclado.”",
  "“while(!succeed) tryAgain();”",
  "“A veces, apagar y encender también aplica a la vida.”",
  "“Debugging es como ser detective en un crimen que tú mismo cometiste.”",
  "“No eres tú, es el cache.”",
  "“Codear sin café es como un servidor sin energía.”",
  "“El commit más valiente: ‘final_final_fix_ahora_sí.js’.”",
  "“Debuguea tu mente, no permitas tu error 500.”",
  "“if (vida == dura) { console.log('sigue codeando'); }”",
  "“El mejor framework es la motivación.”",
  "“No hay bug que un buen café no pueda posponer.”",
  "“Tu código puede fallar, pero tú no te rindas.”",
  "“breakpoints en el código, pausas en la vida.”",
  "“El mejor parche para un mal día: git reset --hard y dormir bien.”",
  "“Commit temprano, commit seguido, commit sin miedo.”",
  "“La depresión no se resuelve con npm install felicidad, pero se intenta.”",
  "“A veces la vida no compila… revisa tus dependencias emocionales.”",
  "“console.log(‘Confía en ti’);”",
  "“Menos estrés, más expresiones lambda.”",
  "“Un bug al día mantiene la humildad.”",
  "“Tu valor no depende del coverage.”",
  "“Error 404: Motivación no encontrada (reintenta con un café).”",
  "“Refactoriza tus pensamientos negativos.”",
  "“Siempre hay un ‘else’ para cada problema.”",
  "“Hay días que no corren… pero igual se compilan.”",
  "“Sé como un servidor: mantente en línea incluso bajo presión.”",
  "“Ctrl + S tus logros, Ctrl + Z tus errores.”",
  "“return felicidad; // y sigue adelante”",
  "“Nunca subestimes el poder de un buen commit y una buena siesta.”"
];

const quoteEl = document.getElementById("quote");
const btn = document.getElementById("new-quote");
const favoriteBtn = document.getElementById("favorite-btn");
const showFavoritesBtn = document.getElementById("show-favorites");
const favoritesModal = document.getElementById("favorites-modal");
const closeModalBtn = document.getElementById("close-modal");
const favoritesList = document.getElementById("favorites-list");

let currentQuote = "";
let favorites = JSON.parse(localStorage.getItem("debugYourMindFavorites")) || [];

function newQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  quoteEl.style.opacity = 0;
  setTimeout(() => {
    currentQuote = quotes[random];
    quoteEl.textContent = currentQuote;
    quoteEl.style.opacity = 1;
    updateFavoriteButton();
  }, 300);
}

function updateFavoriteButton() {
  if (favorites.includes(currentQuote)) {
    favoriteBtn.classList.add("active");
    favoriteBtn.textContent = "❤️";
  } else {
    favoriteBtn.classList.remove("active");
    favoriteBtn.textContent = "❤️";
  }
}

function toggleFavorite() {
  if (favorites.includes(currentQuote)) {
    favorites = favorites.filter(q => q !== currentQuote);
    favoriteBtn.classList.remove("active");
    favoriteBtn.textContent = "❤️";
  } else {
    favorites.push(currentQuote);
    favoriteBtn.classList.add("active");
    favoriteBtn.textContent = "❤️";
  }
  localStorage.setItem("debugYourMindFavorites", JSON.stringify(favorites));
  renderFavorites();
}

function renderFavorites() {
  if (favorites.length === 0) {
    favoritesList.innerHTML = '<p class="no-favorites">No tienes frases favoritas aún. ¡Empieza a guardar tus favoritas!</p>';
  } else {
    favoritesList.innerHTML = favorites.map((quote, index) => `
      <div class="favorite-item">
        <p class="favorite-quote">${quote}</p>
        <button class="delete-favorite" data-index="${index}" title="Eliminar">🗑️</button>
      </div>
    `).join('');

    // Añadir event listeners a los botones de eliminar
    document.querySelectorAll('.delete-favorite').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const index = parseInt(e.target.dataset.index);
        favorites.splice(index, 1);
        localStorage.setItem("debugYourMindFavorites", JSON.stringify(favorites));
        renderFavorites();
        updateFavoriteButton();
      });
    });
  }
}

function openModal() {
  renderFavorites();
  favoritesModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  favoritesModal.classList.add("hidden");
  document.body.style.overflow = "auto";
}

// Event Listeners
btn.addEventListener("click", newQuote);
favoriteBtn.addEventListener("click", toggleFavorite);
showFavoritesBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

// Cerrar modal al hacer clic fuera
favoritesModal.addEventListener("click", (e) => {
  if (e.target === favoritesModal) {
    closeModal();
  }
});

// Mostrar una al cargar
newQuote();
