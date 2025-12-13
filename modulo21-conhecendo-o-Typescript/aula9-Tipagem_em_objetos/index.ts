let user: {name: string, age: number, avatarUrl?/*Deixando avatar opcional com '?'*/: string} = {
  name: "teste",
  age: 24
}

/*
function signIn(email: string, password: string) {
  // Logica de conectar o usuario na aplicação.
}

signIn("teste@email.com", "1234")
*/

function signIn({email, password}: {email:string, password: string}){
  // Lógica de conectar o usuário na aplicação
}

signIn({email: "teste@email.com", password: "1234"})