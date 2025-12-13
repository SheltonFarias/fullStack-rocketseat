let myArray = [
  "um texto",
  10,
  true,
  () => {console.log("função dentro do Array")},
  {
    name: "teste",
    email: "teste@teste.com"
  },
]

// Texto
console.log(myArray[0])

// Número
console.log(myArray[1])

// Booleano
console.log(myArray[2])

// Função
myArray[3]()

// Objeto
console.log(myArray[4].name)
