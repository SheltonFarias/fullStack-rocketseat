/* 
  OPERADOR DE COALESCENCIA (??)
    - Operador lógico que retorna o seu operando do lado direito quando o operador do lado esquerdo é null ou undefined
    - Caso Contrario ele retorna o seu operando do lado esquerdo
*/

let content = null;

// se o content for nulo ou indefined sera mostrado o conteudo da direita
console.log(content ?? "conteudo padrão")

const user = {
  name: "teste",
  picture: undefined
}

console.log(user.picture ?? "default.png")

