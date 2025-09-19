interface User {
  id: number,
  name: string,
  email: string
}

const newUser: User = {id:1 , name: "teste", email: "teste@email.com"}

const udpateUser: Partial<User> = { name: "Rodrigo Gonçalves"}
// Partial vai permitir alterar qualquer campo sem a obrigatoriedade de campos

