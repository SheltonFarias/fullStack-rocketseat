const book = {
  title: "Objetos Imutaveis",
  category: "Javascript",
  author: {
    name: "Rodrigo",
    email: "rodrigo@email.com"
  },
}

// criando copia do objeto
const updatedBook = {
  ...book,
  title: "Criando um Front-end moderno com HTML",
  category: "HTML",
  type: "Programming"
}


// Original intacto
console.log(book)

// Modificado.
console.log(updatedBook)

// Utilizando operador de desestruturação (rest operator) para remover propriedades
const {category, ...bookWithoutCategory} = book
console.log(bookWithoutCategory)