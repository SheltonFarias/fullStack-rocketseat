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
}

const dog = new Dog()

dog.makeNoise