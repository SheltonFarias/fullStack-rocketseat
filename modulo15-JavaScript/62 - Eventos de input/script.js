const form = document.querySelector('form');

// envia somento o ultimo evento passado
// se tivesse o formulario #2 com onsubmit, não enviaria o primeiro
form.onsubmit = (event) => {
  event.preventDefault(); // previne o comportamento padrão do formulário
  console.log('formulário enviado');
}

form.addEventListener("submit", (event) => {
  console.log("Voce fez submit no Formulário #2")  
})