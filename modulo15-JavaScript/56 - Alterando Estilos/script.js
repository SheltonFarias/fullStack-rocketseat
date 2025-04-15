const input = document.querySelector("#name")

// adiciona a classe
input.classList.add("input-error")

// Remove a classe
input.classList.remove("input-error")

// Adiciona a classe se não existir, remove se existir
input.classList.toggle("input-error") 

const button = document.querySelector("button")

// Modificar as propriedades de CSS do elemento 
button.style.backgroundColor = "red" // altera o background do botão
