// Como foi usado o export default pode chamar a função pelo nome sem precisar de ''
import sum, {multiply} from "./calc.js"

// Assim chamando 'calc' depois a função 'sum'
console.log("4 + 6 =", sum(4, 6))

// Assim chamando 'calc' depois a função 'multiply'
console.log("4 * 6 =", multiply(4, 6))
