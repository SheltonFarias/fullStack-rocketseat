/*
  Objeto
    - Uma coleção de dados e/ou funcionalidades
    - Podem ter propriedades e métodos
*/

// cria um objeto vazio
const obj = {};
console.log(obj);
console.log(typeof obj);

// criar um objeto com propriedades e métodos
const user = {
  email: "teste@teste.com",
  age: 23,
  name: {
    firstName: "teste",
    surname: "farias",
  },
  address: {
    street: "Rua X",
    number: 23,
    city: "fortal",
    postalCode: "12345-123"
  },
  message: () => {
    console.log("oi teste")
  },
};

// Acessando propriedades e métodos usando a notação de ponto.
console.log(user.email)

// acessando propriedade de objeto
console.log(user.name.firstName)

// Executa o método do objeto
user.message()

// notação de colchetes
console.log(user["email"])
console.log(user["name"]["firstName"])

user["message"]()