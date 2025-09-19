type Person1 = {
  id: number,
  name:string
}

type Teacher1 = Person & {
  subjects: string[]
}

type Student1 =  Person &{
  age: number
}

let teacher1: Teacher1