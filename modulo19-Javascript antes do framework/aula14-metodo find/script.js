// O método find() retorna o valor do primeiro elemento do array que satisfazer a condição. Caso contrario, undefined é retornado

const values = [5, 12, 8, 130, 44]

// Retorna o primeiro elemetno que o valor é maior que 10.
const found = values.find((value) => value > 10)

// Exemplo com objetos
const fruits = [
  {name: "apples", quantity: 23},
  {name: "banana", quantity: 25},
  {name: "orange", quantity: 52},
]

const resutl = fruits.find((fruit) => fruit.name === "banana")