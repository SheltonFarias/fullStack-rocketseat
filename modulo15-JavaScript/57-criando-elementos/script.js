const guests = document.querySelector("ul")

const newGuest = document.createElement("li") // cria o elemento li

const guestName = document.createElement("span") // cria o elemento span


guestName.textContent = "Novo Teste"

// Adiciona após o último elemento
newGuest.append(guestName) // adiciona o span dentro do li

// Adiciona antes do primeiro elemento
newGuest.prepend(guestName) // adiciona o span dentro do li

// É mais simples que o append e aceita apenas um argumento
newGuest.appendChild(guestName) // adiciona o span dentro do li
