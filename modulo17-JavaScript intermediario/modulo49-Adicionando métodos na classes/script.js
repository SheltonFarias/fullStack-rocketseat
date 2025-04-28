class User {
  constructor(name, email) {
    this.name = name
    this.email = email
  }

  sendEmail() {
    console.log("email enviado para", this.name, "no endereço eletronico", this.email)
  }
}

const user = new User("teste", "teste@teste.com")
user.sendEmail()