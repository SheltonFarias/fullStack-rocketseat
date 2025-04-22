/*
  OPTIONAL CHAINING (?.) - Encadeamento opcional 
    - Se a propriedade ou função chamda de nullish (null or undefined), a expressão retorna undefined em vez de gerar um erro.

    - Útil ao explorar o conteúdo de um objeto quando não existe garantia da existencia de determinadas propriedades obrigatorias
*/

const user = {
  id: 1,
  name: "Teste",
  address:{
    street: "Avenida Brasil",
    city: "São Paulo",
    geo: {
      latitude: 47.8080,
      longitude: 17.5674,
    },
    message: function() {
      console.log(`Olá, ${this.name}`)
    } 
  }
}

console.log(user?.address)
console.log(user?.address?.street)

user.message?.()