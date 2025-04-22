const product = {
  name: "Teclado",
  quantity:100,
}

//acessando a propriedade do objeto
console.log(product.name)

// atualizar o valor de uma propriedade
console.log(product.quantity)
product.quantity = 90
console.log(product.quantity)

console.log(product.name)
product.name = "Mouse"
console.log(product.name)

// notação de colchetes.
product["quantity"] = 50
console.log(product)