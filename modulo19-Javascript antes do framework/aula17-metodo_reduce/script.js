/*
O método reduce é utilizado para reduzir um array a um único valor

Parametros:
- Array original (Values)
- Acumulador (accumlator)
- Valor da iteração (currentValue)
- Valor Inicial (0)
- Index (Index da iteração atual - opcional)
*/

const values = [1, 2, 3, 4, 5]

const sum = values.reduce((accumulator, currentValue, index) => {
  console.log("ACUMULADOR", accumulator)
  console.log("CURRENT VALUE", currentValue)
})