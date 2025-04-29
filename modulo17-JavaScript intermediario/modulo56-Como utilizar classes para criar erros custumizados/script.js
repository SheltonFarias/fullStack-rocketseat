class MyCustomError {
  constructor(message) {
    this.message  = "classe de erro customizada: " + message 
  }
}

try {
  // throw new Error("erro generico")


  throw new MyCustomError("Erro personalizado Lançado")
} catch (error) {
  
  if(error instanceof MyCustomError) {
    console.log(error.message)
  } else {
    console.log("Não foi possivel executar!")
  }

}