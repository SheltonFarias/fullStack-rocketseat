// Cria um objeto onde todas as chave são string e os valores são números
const scores: Record<string, number> = {
  "teste": 15,
  "teste2":20
}

// Limitar valores
type Profile = "admin" | "user" |"guest"

const user: Record<Profile, number> ={
  "admin": 1,
  "guest": 2,
  "user": 3
}

interface User  {
  name : string
  email: string
}

const users: Record<number, User> = {
  10: {name: "teste", email: "teste@email.com"},
  20: {name: "teste", email: "teste@email.com"},
}