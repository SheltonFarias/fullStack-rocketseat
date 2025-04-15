// Visualizar o conteuddo do document

console.log(document) // [object HTMLDocument]


// obter o title da página
console.log(document.title)

// acesso elementos vinculados ao ID (SELECTOR ID)
const guest = document.getElementById("guest")
console.log(guest) // <h1 id="guest">Olá, Teste</h1>

// Mostra as propriedades do objeto.
console.dir(guest)

// Acessar elemento com class (SELETOR CLASS)
const guestsByClass = document.getElementsByClassName("guest", )
console.log(guestsByClass) // [h1.guest]

// Exibir o primeiro elemento da lista
console.log(guestsByClass.item(0)) // <h1 class="guest">Olá, Teste</h1>
console.log(guestsByClass[0])

// Selecionar lista elementos pela tag
const guestsbyTag = document.getElementsByTagName("li")

