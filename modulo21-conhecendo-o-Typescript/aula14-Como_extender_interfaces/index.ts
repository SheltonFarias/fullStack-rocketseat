interface Person {
  id: number,
  name: string
}

interface Teacher extends Person {
  // id: number,
  // name: string,
  subjects: string[]
}

interface Student extends Person {
  // id: number,
  // name:string,
  age: number
}

let teacher: Teacher = {id: 1, name: "teste", subjects: ["Javascript", "Typescript"]}

let student: Student = {id: 2, name: "teste2", age: 23}

// Funciona como as classes podendo usar propriedades extendidas