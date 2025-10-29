const quotes = [
  "“Compila tu mente antes de depurar tu código.”",
  "“El error más común está entre la silla y el teclado.”",
  "“while(!succeed) tryAgain();”",
  "“A veces, apagar y encender también aplica a la vida.”",
  "“Debugging es como ser detective en un crimen que tú mismo cometiste.”",
  "“No eres tú, es el cache.”",
  "“Codear sin café es como un servidor sin energía.”",
  "“El commit más valiente: ‘final_final_fix_ahora_sí.js’.",
  "“Debuguea tu mente, no permitas tu error 500.",
];

const quoteEl = document.getElementById("quote");
const btn = document.getElementById("new-quote");

function newQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  quoteEl.style.opacity = 0;
  setTimeout(() => {
    quoteEl.textContent = quotes[random];
    quoteEl.style.opacity = 1;
  }, 300);
}

btn.addEventListener("click", newQuote);

// Mostrar una al cargar
newQuote();
