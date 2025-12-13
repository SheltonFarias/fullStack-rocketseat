const user = {
  name: "teste",
  email:"teste@teste.com",
  message: function() {
    // console.log(`Olá ${user.name}`)
    console.log(`Olá ${this.name}`)
  }
}

user.message()


