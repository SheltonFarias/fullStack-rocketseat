// destructuring assignment (desestruturação) permite extrair dados de array ou objetos em variáveis distintas.

const product = {
  description: "teclado",
  price: 150,
};

const { description, price } = product;

console.log("Descrição:", description);
console.log("Preço: R$", price);

function newProduct({description, price}) {
  console.log("### NOVO PRODUTO ###");
  console.log("Descrição:", description);
  console.log("Preço: R$", price);
}

newProduct({
  description: "mouse",
  price: 70
})
