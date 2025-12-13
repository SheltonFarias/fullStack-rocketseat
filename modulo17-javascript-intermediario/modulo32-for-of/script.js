// for ... of itera sobre valores de um objeto iterável

let students = ["teste1", "teste2", "teste3"]

for (let student of students) {
  //acessa diretamente as propriedades diferente de (for in)
   console.log(student)
}

let user = {
  name: "teste",
  email: "teste@teste.com"
}

for (let value of users) {
  console.log(value)
}