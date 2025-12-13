class Animal {
  constructor(name) {
    this.name = name
  }

  makeNoise() {
    console.log("Algum som genérico do animal")
  }
}

// herda metodos da classe Animal
class Dog extends Animal {
  // Não tem nada aqui.
  makeNoise() {
    console.log("au au au")
  }
}

const dog = new Dog("Belu")
console.log(dog.name)

dog.makeNoise()

