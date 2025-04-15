// função anonima (função que não possui nome)

const showMessage = function() {
  console.log("Olá, Teste")
}
console.log(showMessage) // [Function: showMessage]


const showMessage2 = function(message,name) {
  return message + name 
}

console.log(showMessage2("Olá " ,"Teste2")) 