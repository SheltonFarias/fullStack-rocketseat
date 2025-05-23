const book = {
  title: "Objetos Imutaveis",
  category: "Javascript",
  author: {
    name: "Rodrigo",
    email: "rodrigo@email.com"
  }
}

Object.freeze(book)
console.log(book)

// Não vai alterar
book.category= "CSS"

// Agorar vai alterar
book.author.name = "teste"




function deepFreeze(object) {
  // retorna as propriedade como array
  const props = Reflect.ownKeys(object)

  // Itera sobre todas as propriedades do objeto.
  for(const prop of props) {
    // Obtem o valor associado a proprieda atual.
    const value = object[prop]


    // verifica se o valor é um objeto ou função para continuar aplicando o deepFreeze
    if(value && typeof value === "object" ||typeof value === "function"){
      deepFreeze(value)
    }
  }
  // Retorna o objeto congelado
  return Object.freeze(object)
}


// chama a função para congelar o objeto com Deep Freeze (congelamento profundo)
deepFreeze(book)
book.category = "HTML"
book.author.name = "teste 2"

console.log(book)