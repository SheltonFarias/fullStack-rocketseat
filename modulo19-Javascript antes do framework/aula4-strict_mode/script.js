// O Strict mode (modo estrito): ativando esse modo, os erros que eram silenciosos passa a gerar exceções no JavaScript.

"use strict" // Modo de passar o strict mode
function showMessage() {
  personName = "Rodrigo Gonçalves"

  console.log("Olá", personName)
}

showMessage()

// quando usado get metodo usado para obter o retorno
class Student {
  get point() {
    return 7
  }
}

let student = new Student()

// Tenta mudar uma propriedade somente leitura
student.point = 10 

console.log(student.point)


// Tenta deletar uma propriedade de um objeto que não posso deletar.
delete window.document

// Quando passamos parametros duplicados
function sum(a, a, c) {
  return a + a + c
}

const result = sum(1, 3, 2) // 3 + 3 + 2 = 8  Porque o segundo parametro repetido sobrepoem o primeiro 

console.log(result)