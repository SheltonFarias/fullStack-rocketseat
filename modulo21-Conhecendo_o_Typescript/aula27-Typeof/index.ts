interface Product10 {
  id: number
  name: string
  quantity: number
}

const product1: Product10 = {id: 1, name:"Produto 1", quantity: 3}

const product2: typeof product1 = {id: 2, name: "Produto 2", quantity: 5}
// cria uma tipagem a parti do objeto citado anteriormente
