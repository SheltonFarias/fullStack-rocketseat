// Importando a classe
import { Calc } from "./calc.js";

// Instanciando a classe (Sempre necessario instanciar a classe para utilizar metodos)
const calc = new Calc();

console.log("4 + 6 =", calc.sum(4, 6));

console.log("4 * 6 =", calc.multiply(4, 6));

console.log(calc.name)

