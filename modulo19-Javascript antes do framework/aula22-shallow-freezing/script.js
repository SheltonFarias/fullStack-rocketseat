const book = {
  title: "Objetos Imutáveis",
  category: "javascript",
  author: {
    name: "Rodrigo",
    email:"rodrigo@email.com",
  },
}

// O JavaScript em si não impõe restrições à modificação dos objetos.
book.category = "HTML"

// Cogela o objeto e impede a modificação
Object.freeze(book)


// Não vai executar a modificação
book.category = "CSS"

// O Object.freeze() não impede modificações profundas em objetos aninhados (shallow freezing).
book.author.name = "João"
console.log(book)