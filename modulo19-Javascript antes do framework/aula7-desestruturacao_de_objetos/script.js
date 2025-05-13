// destructuring assignment (desestruturação) permite extrair dados de arrays ou objetos em variáveis distintas

const data = ["teste testes", "teste@teste.com"];

// Desestruturando arrray
const [username, email] = data;

console.log("nome:", username);
console.log("email:", email);

const frutis = ["banana", "apple", "orange"];

// Desestruturar somente o primeiro
const [banana] = frutis;
console.log(banana);

// ignorando o primeiro na desestruturação
const [_, Apple] = frutis;

console.log(Apple);

// Ignorando o primeiro e o segundo na desestruturação.
const [, , orange] = frutis;
