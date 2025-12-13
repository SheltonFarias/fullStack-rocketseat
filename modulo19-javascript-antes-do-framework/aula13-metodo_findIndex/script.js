// O método findIndex() retorna o índice no array do primeiro elemento que satisfizer a condição. Caso contrario, retorna -1, indicando que nenhum elemento passou no teste

const values = [4, 6, 8, 12]

// Obtendo o primeiro índice do elemento que o valor é maior do que 4.
const index = values.findIndex((value) => value > 4)
console.log(index)
console.log(values[index])

// Exemplo de quando não encontra
// Retorna -1
console.log(value.findIndex((value) => value > 12))