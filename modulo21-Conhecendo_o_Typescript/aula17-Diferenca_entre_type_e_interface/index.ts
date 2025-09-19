// Interface X Type

interface IBaseProduct {
  price:number
}

interface IProduct extends IBaseProduct {
  id: number,
  name: string
}

// Interface pode sobescrever concatenando os valores passados
interface IProduct{
  quantity:number
}

// Type pode criar tipos personalizados
type TBaseProduct = {
  price:number
}

type TProduct = TBaseProduct & {
  id: number,
  name: string
}

let product1: IProduct = {id:1 , name:"Produto1", price: 100, quantity:20}
let product2: TProduct = {id:2 , name:"Produto2", price: 150}

type TypeString = string
type TypeNumber = number