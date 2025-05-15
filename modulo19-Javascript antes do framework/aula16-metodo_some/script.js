// O método some() testa se ao menos um dos elementos no array passa a condição e retorna um valor true ou false

// exemplo de array de idades
const ages = [15, 25, 30, 35]

// false: pois nenhum do itens do array atende a condição
const result = ages.some((age) => age === 18)
console.log(result)