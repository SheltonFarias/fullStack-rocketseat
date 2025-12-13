function createProduct(name) {
  const product = {}

  product.name = name
  product.details = () => {
    console.log(`O nome do produto é ${this.name}`)
  }

  return product
}


// new cria um novo objeto com utilizando a estrutura da função construtora.
const product1 = new createProduct("teclado")
console.log(product1.name)
product1.details()

const product2 = new createProduct("mouse")
console.log(product2.name)
product2.details()


console.log(product1 === product2) // false

// exemplo de funcões construtoras no JavaScript
let myName = new String("Rodrigo")
console.log(myName)

let price = "40.6".replace(".", "")
console.log(price)

let date = new Date("2024-1-1")
console.log(date)


function Person(name) {
  this.name = name
  this.message = () => {
    console.log(`Olá, ${this.name}`)
  }
}

const person1 = new Person("Teste")
console.log(person1)
person1.message()

const person2 = new Person("Teste")
console.log(person2)
person2.message()