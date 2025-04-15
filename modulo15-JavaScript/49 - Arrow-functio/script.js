// Arrow function (função de seta)

const showMessage = () => {
  console.log("Olá, Teste")
}

console.log(showMessage)
showMessage()

const showMessage2 = (username, email) => {
  console.log("Olá, ", username, "Seu e-mail é: ", email)  
}

showMessage2("Teste2", "teste@teste.com")