/*
- Conversão de Tipos(Type casting ou type conversion):
    Ocorre quando você explicitamente transforma um valor de um tipo em outro. Isso é feito de forma consciente, usando funções ou métodos específicos para realizar a conversão.
*/

let value = "9";
console.log(typeof Number(value)); // number
console.log(typeof value); // number

let age = 18;
console.log(typeof age.toString());
console.log(typeof String(age));

let option = 1;
console.log(Boolean(option));
console.log(typeof Boolean(option)); // boolean

/*
- Coerção de Tipos(Type coercion):
     Acontece de forma automática (implicitamente). O JavaScript tenta automaticamente converter um do valores para um tipo compatível antes de realizar a operação.
*/

console.log("10" + 5); // string
