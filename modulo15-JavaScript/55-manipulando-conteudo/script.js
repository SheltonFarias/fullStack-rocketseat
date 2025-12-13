const guest = document.querySelector("#guest")

// retorna conteudo como texto
console.log(guest.textContent) // Olá, Teste

guest.textContent = "Olá, Teste 2" // altera o conteudo do elemento
console.log(guest.textContent) // Olá, Teste 2

// retorna conteudo como HTML
console.log(guest.innerHTML) // Olá, Teste
guest.innerHTML = "<strong>Olá, Teste 3</strong>" // altera o conteudo do elemento

console.log(guest.innercontent) // Retorna o conteúdo visivel e oculto
console.log(guest.innerText) // Retorna o conteúdo visivel
console.log(guest.innerHTML) // Retorna o HTML como texto
