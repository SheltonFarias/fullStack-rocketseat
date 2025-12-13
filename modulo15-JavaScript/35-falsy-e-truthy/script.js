/*
FALSY quando um valor é considerado false e TRUTHY quando é considerado verdadeiro em contextos onde um boolean é obrigatório (condicionais e loops)
*/

console.log("### Exemplos de FALSY ###");
console.log(false ? "Verdadeiro" : "Falso"); // false
console.log(0 ? "Verdadeiro" : "Falso"); // false
console.log(-0 ? "Verdadeiro" : "Falso"); // false
console.log("" ? "Verdadeiro" : "Falso"); // false
console.log(null ? "Verdadeiro" : "Falso"); // false
console.log(undefined ? "Verdadeiro" : "Falso"); // false
console.log(NaN ? "Verdadeiro" : "Falso"); // false


console.log("### Exemplos de TRUTHY ###");
console.log(true ? "Verdadeiro" : "Falso"); // true
console.log(1 ? "Verdadeiro" : "Falso"); // true
console.log(-1 ? "Verdadeiro" : "Falso"); // true
console.log(" " ? "Verdadeiro" : "Falso"); // true
console.log([] ? "Verdadeiro" : "Falso"); // true
console.log({} ? "Verdadeiro" : "Falso"); // true