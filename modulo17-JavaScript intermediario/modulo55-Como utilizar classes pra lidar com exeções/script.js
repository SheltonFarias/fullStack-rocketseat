let obj = []
let index = 300

try {

  obj.execute()

  if(!obj.includes(17)) {
    throw new Error("O numero 17 não esta disponivel")
  }

  if(index > 100) {
    throw new RangeError("Número está fora do intervalo. Escolha um número de 0 À 99.")
  }

} catch (error) {
  if(error instanceof TypeError) {
    console.log("Método indisponível")
  }

  console.log(error)
}

