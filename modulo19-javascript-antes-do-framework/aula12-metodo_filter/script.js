// O método filter() cria um novo array com todos os elementos que passaram na condição

const words = ["JavaScript", "HTML", "CSS", "Web"];

// Filtrando palavra que tenham mais do que 3 letras
const result = words.filter((word) => word.length > 3);
console.log(result);

const products = [
  { description: "teclado", price: 150, promotion: true },
  { description: "mouse", price: 70, promotion: false },
  { description: "monitor", price: 900, promotion:true },
];

// filtra somento itens true não retornando o mouse que é false
const promotion = products.filter((product) => product.promotion === true)

console.log(promotion)

