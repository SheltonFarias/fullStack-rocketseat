type Person1 = {
  id: number,
  name:string
}

type Teacher1 = Person1 & {
  subjects: string[]
}

type Student1 =  Person1 &{
  age: number
}

let teacher1: Teacher1