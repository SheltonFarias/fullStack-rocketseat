// O método every() testa se todos os elemento do array passam na condição e retorna um valor Boolean

// exemplo de array de idades
const ages = [15, 30, 39, 29]

// verificando se todas as idades são maiores ou igual a 18.
const result = ages.every((age) => age >= 18)

// retorna os valores maiores ou igual a 18
console.log(result)