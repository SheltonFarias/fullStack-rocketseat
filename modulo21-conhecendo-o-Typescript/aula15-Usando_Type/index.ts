type Product1 = {
  id: number,
  name: string
}

function newProduct(product: Product1) {

}

newProduct({ id: 1, name: "Produto x"})

type SelectResponse = Product1[] | null

function selectProducts(): SelectResponse{
 return null
}