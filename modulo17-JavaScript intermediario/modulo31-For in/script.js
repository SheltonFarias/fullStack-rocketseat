// for ... in executa interações a partir de um objeto e percorre as propriedades

let person = {
  name: "teste",
  surname: "teste1",
  email: "teste@teste.com"
}

// for(let property in person) {
//   // exibe o nome da propiedade
//   console.log(property)

//   // exibe o conteúdo da propriedade
//   console.log(person[property])
// }

const test = ["teste1", "teste2", "teste3"]

for(let index in test) {
  console.log(test[index])
}