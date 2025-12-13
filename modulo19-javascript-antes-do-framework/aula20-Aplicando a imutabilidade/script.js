const addres1 = {
  street: "AV. Brasil",
  number: 20
}

// Isso não é uma copia. É uma referencia
const addres2 = addres1
addres2.number = 30

// altera o number nos 2 
console.log(addres1)
console.log(addres2)


// Aqui estamos criando um novo objeto utilizando as propriedades e valores de addres1 (opcao 1).
const addres2 = {...addres1}

addres2.number = 30

// altera somento do addres2
console.log(addres1)
console.log(addres2)

// opcao 2
const addres2 = {...addres1, number: 30}
console.log(addres1)
console.log(addres2)


// Exemplo com Array
const list1 = ["apple", "banana"]

litst2 =list1

litst2.push("watermelon")

console.log(list1, list2)

////////////////

list2 = [...list1]
list2.push("watermelon")



list2 = [...list1, "watermelon"]