// sintaxe correta
console.log("Olá, Rodrigo!");

// sintaxe incorreta
// con.sole.log("Olá, Rodrigo!")

// No javascript ponto e vírgula é opcional
console.log("Olá, João!");

console.log("Olá, João!");

/*
VARIÁVEL    

Na programação é um espaço reservado na memória RAM(Random Acess Memory) do computador para armazenar algo temporariamente
*/

// Declarar uma variavel sem o valor
var user;

console.log(user);

// Declara uma variavel com valor
var email = "rodrigo@email.com";
console.log(email);

// Substitui o valor da variavel.
email = "joao@email.com";
console.log(email);

/*
  Quando uma linguagem de programação é case-sensitive significa que ela é sensivel a letras maiúsculas e minúsculas

  Por exemplo: "Rodrigo" é considerado diferente de "rodrigo".
*/

var product = "Teclado Mecânico";
var Product = "Mouse gamer";

console.log(product);
console.log(Product);

// Declara uma variavel sem valor
let user;
console.log("Rodrigo Gonçalves");

// Declara uma variável com valor
let email = "rodrigo@email.com";
console.log(email);

email = "joao@email.com";
console.log(email);

// uma constante cria uma variavel que o valor é fixo (Não pode ser alterado)
const number = 42;
console.log(number);

number = 55;
console.log;

// uma constante cria uma variavel que o valor é fixo (Não pode ser alterado)
const number = 42;
console.log(number);

number = 55;
console.log;

var user = "teste";
console.log(user);

// Hosting
var user;
console.log(user);

// Escopo Global
var email = "teste@teste.com";

{
  // Escopo de bloco
  console.log(email);
}

{
  var age = 18;
}

console.log(age);

let addres = "Rua x";

{
  console.log(addres);
}

// case sensitive
let username = "Rodrigo";
let userName = "Joao";

console.log(username);
console.log(userName);

// Podemos
let $email = "rodrigo@gmail.com";
let _email = "rodrigo@gmail.com";
let Ação = "Cadastrar"; // não recomendado
let user_email = "teste@teste.com";

console.log($email);
console.log(_email);
console.log(Ação);
console.log(user_email);

// Não podemos
// let 1user = "Rodrigo"
// let user-name = "Rodrigo"
// let user name = "Rodrigo"
// let user@name = "Rodrigo"

// Recomendações
// Escreva em inglês
// Utilizar camelCase
let register = "Cadastro";

let produtcName = "Produto";
let firstName = "teste";
let lastName = "teste";

// Recomendações Snake case
let register_name = "Cadastro";
let first_name = "teste";
let last_name = "teste";

// case sensitive
let username = "Rodrigo";
let userName = "Joao";

console.log(username);
console.log(userName);

// Podemos
let $email = "rodrigo@gmail.com";
let _email = "rodrigo@gmail.com";
let Ação = "Cadastrar"; // não recomendado
let user_email = "teste@teste.com";

console.log($email);
console.log(_email);
console.log(Ação);
console.log(user_email);

// Não podemos
// let 1user = "Rodrigo"
// let user-name = "Rodrigo"
// let user name = "Rodrigo"
// let user@name = "Rodrigo"

// Recomendações
// Escreva em inglês
// Utilizar camelCase
let register = "Cadastro";

let produtcName = "Produto";
let firstName = "teste";
let lastName = "teste";

// Recomendações Snake case
let register_name = "Cadastro";
let first_name = "teste";
let last_name = "teste";

// String
let username = "teste";
console.log(username);
console.log(typeof username);

console.log("uma string com aspas");
console.log("uma string com aspas simples");
console.log(`uma string com template string`);

// Quando ultilizar aspas simples ou duplas?
console.log('Uma string com "aspas duplas" dentro de uma simples');

console.log("Uma String com 'aspas simples' dentro de uma dupla");

// Template literals (template strings interpolação de strings)
let username = "teste";
let email = "teste@email.com";

console.log(`O nome do usuário é ${username} e o email é ${email}`);

// Number

// Inteiro Positivo
console.log(1);

// Inteiro Negativo
console.log(-1);

// Numeros Reais ou float
console.log(125.7);

// NaN - Not a Number
console.log(12.5 / "rodrigo");

// Boolean

console.log(true);
console.log(false);

let isLoading = true;
console.log(typeof isLoading);

// undefined(indefinido) e null

let emptiness;

console.log("O valor é:", emptiness); // undefined
console.log(typeof emptiness); // undefined

let empty = null;
console.log("O valor é:", empty); // null
console.log(typeof empty); // object

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

// Operadores aritméticos

console.log("SOMA:", 12 + 8); // 12 + 8 = 20

console.log("CONCATENAÇÃO:", 12 + 8); // 12 + 8 = 128

console.log("SUBTRAÇÃO:", 12 - 8); // 12 - 8 = 4

console.log("MULTIPLICAÇÃO:", 12 * 8); // 12 * 8 = 96

console.log("DIVISÃO:", 12 / 8); // 12 / 8 = 1.5

console.log("RESTO DA DIVISÃO:", 12 % 8); // 12 % 8 = 4

console.log("POTÊNCIA:", 12 ** 8); // 12 ** 8 = 429981696

let number = 10;

// number = number + 1
// ou
number++;
console.log(number); // 11

// Incrementa apos (por isso não mostra no console)
console.log(number++); // 11
console.log(number);

// incrementa antes
console.log(++number); // 13

// Decremento
console.log("Decremento após", number--); // 12

console.log("Decremento antes", --number); // 10

// Incremtenta mais de um (colocar)
number += 10;
console.log(number); // 20

// Decrementa mais de um (tirar)
number -= 10;
console.log(number); // 10

// Grouping Operator (Ordem de Precedência)

let total = 10 + 5 * 2;
console.log(total); // 20

let total2 = (10 + 5) * 2;
console.log(total2); // 30

let average = 9.5 + 7 + 5 / 3;
console.log(average); // 12.5

let average2 = (9.5 + 7 + 5) / 3;
console.log(average2); // 7.83

let one = 1;
let two = 2;

console.log("== IGUAL A");
// == igual a
console.log(one == 1); // true
console.log(one == two); // false
console.log(one == "1"); // true

console.log("!= DIFERENTE DE");
// != diferente de
console.log(one != two); // true
console.log(one != 1); // false'
console.log(one != "1"); // false

let one = 1;
let two = 2;

// === Estritamente Igual e Diferente
console.log(one === 1); // true
console.log(one === "1"); // false
console.log(two === 2); // true
console.log(two === "2"); // false

// !== Estritamente Diferente de
console.log(one !== 1); // false
console.log(one !== "1"); // true
console.log(two !== 2); // false
console.log(two !== "2"); // true

let balance = 500;
let payment = 120;

// > Maior que
console.log(balance > payment); // true

// < Menor que
console.log(balance < payment); // false

// >= Maior ou igual a
console.log(balance >= payment); // true

// <= Menor ou igual a
console.log(balance <= payment); // false

let value;

// operadores de atribuição
value = 1;

console.log(value); // 1

// incremento
value += 1; // value = value + 1
console.log(value); // 2

// decremento
value -= 1; // value = value - 1
console.log(value); // 1

// multiplicação
value *= 2; // value = value * 2

// Resto da divisão
value %= 2; // value = value % 2
console.log(value); // 1

// exponenciação
value **= 2; // value = value ** 2

let email = true;
let password = true;

// AND (E) &&
console.log(email && password); // true

// OR (OU) ||
console.log(email || password); // true

// NOT (NÃO) !
console.log(!email); // false

// Operador condicional ternário

let age = 16;
console.log(age >= 18 ? "Pode dirigir" : "Não pode dirigir"); // Não pode dirigir

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

// IF (se)

let hour = 11;

if (hour <= 12) {
  console.log("Bom dia!");
}

// IF ELSE (senão)

let age = 17;

if (age < 18) {
  console.log("Voce não pode dirigir");
} else {
  console.log("Voce pode dirigir");
}

// if else if

let hour = 11;

if (hour <= 12) {
  console.log("Bom dia!");
} else if (hour < 18) {
  console.log("Boa tarde!");
} else if (hour < 24) {
  console.log("Boa noite!");
}

if (hour <= 12) {
  console.log("Bom dia!");
} else if (hour > 12 && hour < h118) {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}

let options = 1;

switch (options /*aponta para a variavel acima e interpreta*/) {
  case 1:
    console.log("consultar pedido");
    break; // se não colocar o break, ele continua executando os outros cases
  case 2:
    console.log("falar com atendente");
    break;
  case 3:
    console.log("cancelar pedido");
    break;
  default:
    console.log("opção inválida");
}

try {
  // TENTA executar o código
  console.log(result);
} catch (error) {
  // CAPTURA o erro para tratar
  console.log("erro: " + error);
} finally {
  console.log("fim");
}

let result = 1;

try {
  if (result === 0) {
    throw new Error("valor é igual a zero");
  }
} catch (error) {
  console.log("erro: " + error);
} finally {
  console.log("fim");
}

function message() {
  alert("Hello, World!");
  console.log("Hello, World!");
}

message(); // chamando a função

/*
  - Parâmetros: é a variavel (escopo da função) que irá receber um valor em uma função.
  - Argumentos: é o valor que será passado para a função.

*/

// passando o parametro username
function message(username) {
  console.log("olá" + username);
}

// passando argumentos
message("Teste"); // Teste é o argumento
message("Teste2"); // Lucas é o argumento

function sum(a, b) {
  console.log(a + b);
}

sum(10, 20);
sum(7, 3);

function joinText(text1, text2, text3) {
  console.log(text1 + " " + text2 + " " + text3);
}

showMessage("Olá, Rodriguez!");

function showMessage(message) {
  console.log(message);
  endLine();

  function endLine() {
    console.log("----------------");
  }
}

showMessage("tudo bem?");

// Não existe nesse escopo.
//endLine()

function sum(a, b) {
  let result = a + b;

  return result; // retorna os valor a quem chamou a função
}

sum(7, 3);

let response = sum(7, 3);
console.log(response); // 10

console.log(sum(7, 3)); // 10

/*
  Comentário de Documentação em JavaScript (sintaxe de JSDoc).
  O JSDoc é um padrão para incorporar documentação no código-fonte a partir desses comentarios.
*/

/**
 * Função para autenticar um usuário
 * @param {string} email - O email do usuário
 * @param {string} password - A senha do usuário
 * @returns {number} Retorna o ID do usuário autenticado
 */

function signIn(email, password) {
  // Fluxo de autenticacao do usuario

  return 7;
}

signIn();

// função anonima (função que não possui nome)

const showMessage = function () {
  console.log("Olá, Teste");
};
console.log(showMessage); // [Function: showMessage]

const showMessage2 = function (message, name) {
  return message + name;
};

console.log(showMessage2("Olá ", "Teste2"));

// Arrow function (função de seta)

const showMessage = () => {
  console.log("Olá, Teste");
};

console.log(showMessage);
showMessage();

const showMessage2 = (username, email) => {
  console.log("Olá, ", username, "Seu e-mail é: ", email);
};

showMessage2("Teste2", "teste@teste.com");

// CALLBACK FUNCTION: é uma função passada para outra função como argumento.

function execute(taskName, callback) {
  console.log("Executando a tarefa: ", taskName);

  callback();
}

function callback() {
  console.log("Tarefa finalizado1");
}

// Passando para a função.
execute("Download do arquivo...", callback);

// Criando a função no proprio parâmetro.
execute("Upload do arquivo", function () {
  console.log("Tarefa finalizado2");
});

// Utilizando Arrow Function
execute("Upload do arquivo", () => {
  console.log("Tarefa finalizado3");
});

execute("salvando arquivo", () => console.log("Arquivo salvo")); // Arrow Function

// Visualizar o conteuddo do document

console.log(document); // [object HTMLDocument]

// obter o title da página
console.log(document.title);

// acesso elementos vinculados ao ID (SELECTOR ID)
const guest = document.getElementById("guest");
console.log(guest); // <h1 id="guest">Olá, Teste</h1>

// Mostra as propriedades do objeto.
console.dir(guest);

// Acessar elemento com class (SELETOR CLASS)
const guestsByClass = document.getElementsByClassName("guest");
console.log(guestsByClass); // [h1.guest]

// Exibir o primeiro elemento da lista
console.log(guestsByClass.item(0)); // <h1 class="guest">Olá, Teste</h1>
console.log(guestsByClass[0]);

// Selecionar lista elementos pela tag
const guestsbyTag = document.getElementsByTagName("li");

// acessa o elemento pelo seletor ID
const guest = document.querySelector("#guest");

// Acesso o elemento pelo seletor CLASS
const guests2 = document.querySelector(".guest");

// Acesso o elemento pelo seletor TAG
const guests3 = document.querySelector("li");

// Retorna todos os elementos encontrados pelo query
const guests4 = document.querySelectorAll(".guest");

const guest = document.querySelector("#guest");

// retorna conteudo como texto
console.log(guest.textContent); // Olá, Teste

guest.textContent = "Olá, Teste 2"; // altera o conteudo do elemento
console.log(guest.textContent); // Olá, Teste 2

// retorna conteudo como HTML
console.log(guest.innerHTML); // Olá, Teste
guest.innerHTML = "<strong>Olá, Teste 3</strong>"; // altera o conteudo do elemento

console.log(guest.innercontent); // Retorna o conteúdo visivel e oculto
console.log(guest.innerText); // Retorna o conteúdo visivel
console.log(guest.innerHTML); // Retorna o HTML como texto

const input = document.querySelector("#name");

// adiciona a classe
input.classList.add("input-error");

// Remove a classe
input.classList.remove("input-error");

// Adiciona a classe se não existir, remove se existir
input.classList.toggle("input-error");

const button = document.querySelector("button");

// Modificar as propriedades de CSS do elemento
button.style.backgroundColor = "red"; // altera o background do botão

const guests = document.querySelector("ul");

const newGuest = document.createElement("li"); // cria o elemento li

const guestName = document.createElement("span"); // cria o elemento span

guestName.textContent = "Novo Teste";

// Adiciona após o último elemento
newGuest.append(guestName); // adiciona o span dentro do li

// Adiciona antes do primeiro elemento
newGuest.prepend(guestName); // adiciona o span dentro do li

// É mais simples que o append e aceita apenas um argumento
newGuest.appendChild(guestName); // adiciona o span dentro do li

window.addEventListener("load", function () {
  console.log("a pagina foi carregada");
});

addEventListener("click", function (e) {
  console.log("Você clicou no elemento: ", e.target);
  console.log("Você clicou na posição X: ", e.clientX);
  console.log("Você clicou na posição Y: ", e.clientY);
  console.log("Você clicou na posição X: ", e.pageX);
  console.log("Você clicou na posição Y: ", e.pageY);
  console.log("Você clicou no elemento: ", e.currentTarget);
});

addEventListener("click", function (event) {
  event.preventDefault();

  // Retorna todas as informações do evento
  // console.log(event)

  // Retorna o elemento clinico

  console.log(event.target);

  // Retorna o textContent do elemento clicado
  console.log(event.target.textContent);
});

const input = document.querySelector("input");

// Atualizar um atributo
input.setAttribute("disabled", true); // desabilita o input
input.setAttribute("type", "file");

// remover atributo
input.removeAttribute("id");

const ul = document.querySelector("ul");

ul.addEventListener("scroll", (event) => {
  console.log(ul.scrollTop);
  console.log(event.target.scrollTop);

  if (ul.scrollTop > 300) {
    console.log("fim da lista");

    ul.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});

const button = document.querySelector("button");
button.addEventListener("click", (event) => {
  console.log("clicou");
  event.preventDefault(); // previne o comportamento padrão do botão
});

const form = document.querySelector("form");

// envia somento o ultimo evento passado
// se tivesse o formulario #2 com onsubmit, não enviaria o primeiro
form.onsubmit = (event) => {
  event.preventDefault(); // previne o comportamento padrão do formulário
  console.log("formulário enviado");
};

form.addEventListener("submit", (event) => {
  console.log("Voce fez submit no Formulário #2");
});

const form = document.querySelector("form");

// envia somento o ultimo evento passado
// se tivesse o formulario #2 com onsubmit, não enviaria o primeiro
form.onsubmit = (event) => {
  event.preventDefault(); // previne o comportamento padrão do formulário
  console.log("formulário enviado");
};

form.addEventListener("submit", (event) => {
  console.log("Voce fez submit no Formulário #2");
});

const input = document.querySelector("input");
const form = document.querySelector("form");

input.addEventListener("input", () => {
  const value = input.value;

  const regex = /\D+/g;

  // Retonra o padrão encontrado na string
  // console.log(value.match(regex))

  const isValid = regex.test(value);
});

form.addEventListener("submit", (event) => {
  const regex = /\D+/g;
  event.preventDefault();
  const value = input.value.replace(regex, "");

  console.log(value);
});

/*
  Objeto
    - Uma coleção de dados e/ou funcionalidades
    - Podem ter propriedades e métodos
*/

// cria um objeto vazio
const obj = {};
console.log(obj);
console.log(typeof obj);

// criar um objeto com propriedades e métodos
const user = {
  email: "teste@teste.com",
  age: 23,
  name: {
    firstName: "teste",
    surname: "farias",
  },
  address: {
    street: "Rua X",
    number: 23,
    city: "fortal",
    postalCode: "12345-123",
  },
  message: () => {
    console.log("oi teste");
  },
};

// Acessando propriedades e métodos usando a notação de ponto.
console.log(user.email);

// acessando propriedade de objeto
console.log(user.name.firstName);

// Executa o método do objeto
user.message();

// notação de colchetes
console.log(user["email"]);
console.log(user["name"]["firstName"]);

user["message"]();

// Acessando propriedades
const user = {
  name: "teste",
  email: "teste@teste.com",
  message: function () {
    // console.log(`Olá ${user.name}`)
    console.log(`Olá ${this.name}`);
  },
};

user.message();

// Atualizando um objeto
const product = {
  name: "Teclado",
  quantity: 100,
};

//acessando a propriedade do objeto
console.log(product.name);

// atualizar o valor de uma propriedade
console.log(product.quantity);
product.quantity = 90;
console.log(product.quantity);

console.log(product.name);
product.name = "Mouse";
console.log(product.name);

// notação de colchetes.
product["quantity"] = 50;
console.log(product);

/*
  OPTIONAL CHAINING (?.) - Encadeamento opcional 
    - Se a propriedade ou função chamda de nullish (null or undefined), a expressão retorna undefined em vez de gerar um erro.

    - Útil ao explorar o conteúdo de um objeto quando não existe garantia da existencia de determinadas propriedades obrigatorias
*/

const user = {
  id: 1,
  name: "Teste",
  address: {
    street: "Avenida Brasil",
    city: "São Paulo",
    geo: {
      latitude: 47.808,
      longitude: 17.5674,
    },
    message: function () {
      console.log(`Olá, ${this.name}`);
    },
  },
};

console.log(user?.address);
console.log(user?.address?.street);

user.message?.();

/* 
  OPERADOR DE COALESCENCIA (??)
    - Operador lógico que retorna o seu operando do lado direito quando o operador do lado esquerdo é null ou undefined
    - Caso Contrario ele retorna o seu operando do lado esquerdo
*/

let content = null;

// se o content for nulo ou indefined sera mostrado o conteudo da direita
console.log(content ?? "conteudo padrão");

const user = {
  name: "teste",
  picture: undefined,
};

console.log(user.picture ?? "default.png");

function createProduct(name) {
  const product = {};

  product.name = name;
  product.details = () => {
    console.log(`O nome do produto é ${this.name}`);
  };

  return product;
}

// new cria um novo objeto com utilizando a estrutura da função construtora.
const product1 = new createProduct("teclado");
console.log(product1.name);
product1.details();

const product2 = new createProduct("mouse");
console.log(product2.name);
product2.details();

console.log(product1 === product2); // false

// exemplo de funcões construtoras no JavaScript
let myName = new String("Rodrigo");
console.log(myName);

let price = "40.6".replace(".", "");
console.log(price);

let date = new Date("2024-1-1");
console.log(date);

function Person(name) {
  this.name = name;
  this.message = () => {
    console.log(`Olá, ${this.name}`);
  };
}

const person1 = new Person("Teste");
console.log(person1);
person1.message();

const person2 = new Person("Teste");
console.log(person2);
person2.message();

let message = "Estou estudando os fundamento do JavaScript";

console.log(message);

// Exibir o texto em maisculo
console.log(message.toUpperCase);

// Exibir o texto em minusculo
console.log(message.toLowerCase);

// Obtendo o comprimento de uma string
let message = "Estou estudando os fundamento do JavaScript";

// vai mostrar a quantidade de caracteres
console.log(message.length);

let password = "123456";

if (password.length <= 6) {
  console.log("A senha deve conter pelo menos 6 digitos");
}

// Quantos dígitos tem um numero
let value = 12345;
console.log(String(value).length);
console.log(value.toString().length);

// Substituindo e fatiando um texto
let message = "Estou estudando os fundamento do JavaScript";

// Substituindo parte de um texto
console.log(message.replace(" ", "-"));

console.log(message);

// Extraindo uma parte da string (start, end) pega do começo ao fim
console.log(message.slice(6, 30));

// Extrair uma parte da string de trás para frente.
console.log(message.slice(-11));

let textWithSpace = " Texto de exemplo  ";
console.log(textWithSpace.length);

// Remove espaços em branco no início e no final da string.
console.log(textWithSpace.trim());

// completando um string
const creditCard = "1234567812344928";
console.log(creditCard.length);

// pega os 4 últimos dígitos
const lastDigts = creditCard.slice(-4);
// console.log(lastDigts)

// O padStart preenche a string do início
const maskedNumber = lastDigts.padStart(creditCard.length, "X");

console.log(maskedNumber);

// O padEnd preenche a string no final.
const number = "123";
console.log(number.padEnd(10, "#"));

// Separando e unindo strings
let text = "estudar, aprender, praticar";

// serpara a string
let separete = text.split(",");
console.log(separete);

let message = "Estou aprendendo JavaScript";
console.log(message.split(" "));

// Unir a string
let joined = separete.join("#");
console.log(joined);

// Encontrando um texto
let message = "Estou estudando o fundamentos do JavaScript";

// obter a posição da palavra
// quando não encontra retorna -1
console.log(message.indexOf("estudando"));

// verificar se existe a palavra na string.
console.log(message.includes("Javascript"));

console.log(message.toLocaleLowerCase().includes("Javascript"));

// cria o Array
let fruits = ["aple", "banana", "orange"];
console.log(fruits);

// Quantide de itens do Array
console.log(fruits.length);

// Acessa o item pelo índice.
console.log(fruits[1]);

// metodo para acessar ultimo indice do array
console.log(fruits[fruits.length - 1]);

// covertendo um array para string
let fullName = "teste teste1 teste2";

console.log(fullName);

// cria uma array com os nomes separando pelo espaco
console.log(fullName.split(" "));

// cria um array com as letras.
console.log(Array.from(fullName));

//Adicionando e removendo um item do array
let users = [];
console.log(users);

// Adiciona um item ao final do Array
users.push("teste");
users.push("teste2");
users.push("teste3");

// Adicona um item ao inicio do Array
users.unshift("teste4");

console.log(users);

// Remove um item no inicio do Array
users.shift();

// Remove um item no final do Array
users.pop();

// Adicionando e removendo um item do array
let fullName = "teste teste1 teste2";

console.log(fullName);

// cria uma array com os nomes separando pelo espaco
console.log(fullName.split(" "));

// cria um array com as letras.
console.log(Array.from(fullName));

// usando o indice
let fruits = ["apple", "watermelon", "strawberry"];
//console.log(fruits)

// Encontra e retorna o índice do elemento no Array
let position = fruits.indexOf("watermelon");
console.log(position);

// remove itens selecionados pelo index, do index 1 ao index 3
fruits.splice(1, 2);

// quais elementos o array aceita
let myArray = [
  "um texto",
  10,
  true,
  () => {
    console.log("função dentro do Array");
  },
  {
    name: "teste",
    email: "teste@teste.com",
  },
];

// Texto
console.log(myArray[0]);

// Número
console.log(myArray[1]);

// Booleano
console.log(myArray[2]);

// Função
myArray[3]();

// Objeto
console.log(myArray[4].name);

// Verificando se existe conteudo no array
let fruits = ["apple", "Orange", "Banana"];

// Verifica se um item existe no array
console.log(fruits.includes("Apple"));
confirm.log(fruits.includes("Strawberry"));
confirm.log(fruits.includes("lemon"));

// While: executa até que a condição seja verdadeira

let execute = true;

while (execute) {
  let response = window.prompt("deseja continuar: 1 (SIM) ou 2 (NÃO)");

  if (response === "2") {
    execute = false;
  }
}

console.log("segue o Fluxo");

// Loop infinito

let value = true;

// while(value) {
//   console.log("Executando while...")
// }

// DO WHILE: repete até que a condição especifica seja VERDADEIRA. No entanto, a instrução será executada pelo menos uma vez antes da condição ser verificada.

let value = 0;

do {
  value++;
  console.log(value);
} while (value < 10);

console.log("Segue o fluxo");

/* 
  FOR repete até que a condição especificada seja FALSA

  - variável de controle
  - condição
  - incremento ou decremento da variável de controle

*/

for (let step = 0; step < 10; step++) {
  console.log(step);
}

// exemplo de tabuada.
console.log("### TABUADA ###");
console.log(`7x0 = ${7 * 0}`);
console.log(`7x1 = ${7 * 1}`);
console.log(`7x2 = ${7 * 2}`);
console.log(`7x3 = ${7 * 3}`);
console.log(`7x4 = ${7 * 4}`);
console.log(`7x5 = ${7 * 5}`);
console.log(`7x6 = ${7 * 6}`);
console.log(`7x7 = ${7 * 7}`);
console.log(`7x8 = ${7 * 8}`);
console.log(`7x9 = ${7 * 9}`);
console.log(`7x10 = ${7 * 10}`);

// Tabuada Dinamica
let number = 7;

for (step = 0; step <= 10; step++) {
  console.log(`${number}x${step} = ${number * step}`);
}

// for ... in executa interações a partir de um objeto e percorre as propriedades

let person = {
  name: "teste",
  surname: "teste1",
  email: "teste@teste.com",
};

// for(let property in person) {
//   // exibe o nome da propiedade
//   console.log(property)

//   // exibe o conteúdo da propriedade
//   console.log(person[property])
// }

const test = ["teste1", "teste2", "teste3"];

for (let index in test) {
  console.log(test[index]);
}

// for ... of itera sobre valores de um objeto iterável

let students = ["teste1", "teste2", "teste3"];

for (let student of students) {
  //acessa diretamente as propriedades diferente de (for in)
  console.log(student);
}

let user = {
  name: "teste",
  email: "teste@teste.com",
};

for (let value of users) {
  console.log(value);
}

// Break encerra a execução da repetição ou switch para seguir para a instrução seguinte.

// let option = 1;

// switch (option) {
//   case 1:
//     console.log("cadastrar");
//     break
//   case 2:
//     console.log("cadastrar");
//     break
//   case 3:
//     console.log("faça o login");
//     break
//   default:
//     console.log("opção invalida")
//     break
// }

// utililizando o break para finalizar a repetição.
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }

  console.log(i);
}

// continue encerra(pula) a execução das intruções na iteração atual e continua a execução do loop com a proxima iteração

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }

  console.log(i);
}

// como obter data e hora
// exibe data e hora atual
console.log(new Date());

// exibe a data e hora de referência (considera o fuso)
console.log(new Date(0));

// exibe o numero de milissegundos
console.log(new Date().getTime);

// definindo data e hora
//Define com Ano, Mês(0-11), Dia
console.log(new Date(2024, 6, 3));

// Define ano, mês(0-11) e dia e hora, minuto e segundo
console.log(new Date(2024, 6, 3, 14, 30, 0));

// Definindo data e hora com string
console.log(new Date("2024-07-03T14:30:00"));

console.log("july 3, 2024 14:30:00");

// Metodos para trabalhar com data e hora
let date = new Date("2024-07-02T14:30:10");

// Dia da semana de 0 a 6 (domingo é 0)
console.log(date.getDate());

// Dia do mês (0 à 30)
console.log(date.getDate());

// Mês (0 à 11)
console.log(date.getMonth() + 1);

// Ano
console.log(date.getFullYear());

// Horas
console.log(date.getHours());

// Minutos
console.log(date.getMinutes());

// segundos
console.log(date.getSeconds);

// Modificando data e hora
let date = new Date("July 3, 2024 14:30:00");

// Modificar o ano
console.log(date);

//Modificar o mês (começa com 0)
date.setMonth(7);

// Modificar o dia
date.setDate(10);

// Modificar a hora
date.setHours(18);

// Modificar o minuto
date.setMinutes(15);

// Modificar o segundos
date.setSeconds;

// Formatando uma data e uma hora

let date = new date("2024-07-02T14:30:00");

// Formata para o dia sempre ter 2 digitos
let day = date.getDate().toString().padStart(2, "0");
console.log(day);

// Formata para o mês sempre ter 2 digitos
let mouth = (date.getMonth() + 1).toString().padStart(2, "0");
console.log(mouth);

let year = date.getFullYear();
let hour = date.getHours();
let minutes = date.getMinutes();

console.log(`${day}/${mouth}/${year} as ${hour}:${minutes}`);

// Convertendo uma data para string
let date = new date("2024-07-02T14:30:00");

// Converte para String
console.log(date.toString());

// Retorna someta a data
console.log(date.toDateString());

// Retorna somente a hora
console.log(date.toTimeString());

// Exibindo data e hora formatadas de acordo com a localidade
let date = new Date("2024-07-02T14:00:00");

// Exibe a data e hora no formato local.
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());

// Exibe a data e hora no formato escolhido
console.log(date.toLocaleDateString("en"));
console.log(date.toLocaleTimeString("pt-br"));

// usando to localestring
let date = new Date("2024-07-02T14:30:10");

console.log(date.toLocaleString());

console.log(date.toLocaleString("en"));

// exibe data e hora em styles diferentes.
console.log(
  date.toLocaleString("pt-BR", {
    dateStyle: "short",
  }),
);

console.log(
  date.toLocaleString("pt-BR", {
    dateStyle: "long",
  }),
);

console.log(
  date.toLocaleString("pt-BR", {
    dateStyle: "medium",
  }),
);

console.log(
  date.toLocaleString("pt-BR", {
    dateStyle: "full",
  }),
);

console.log(
  date.toLocaleString("pt-BR", {
    day: "2-digit",
    mouth: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }),
);

let amount = 12.5;

console.log(
  amount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  }),
);

// Obtem informações da localidade
const currentLocale = Intl.DateTimeFormat().resolvedOptions();

console.log(currentLocale);

// Formata no formato de acordo com a localidade.
console.log(new Intl.DateTimeFormat("pt-BR").format(new Date()));
console.log(new Intl.DateTimeFormat("en-US").format(new Date()));

const date = new Date();

// Obtém a diferença em minutos do timezone
console.log(date.getTimezoneOffset());

// Obtém a diferença em horas do timezone
console.log(date.getTimezoneOffset() / 60);

// criando uma data e uma hora com fuso horario
// Obtem informações da localidade
const currentLocale = Intl.DateTimeFormat().resolvedOptions();

console.log(currentLocale);

// Formata no formato de acordo com a localidade.
console.log(new Intl.DateTimeFormat("pt-BR").format(new Date()));
console.log(new Intl.DateTimeFormat("en-US").format(new Date()));

const date = new Date();

// Obtém a diferença em minutos do timezone
console.log(date.getTimezoneOffset());

// Obtém a diferença em horas do timezone
console.log(date.getTimezoneOffset() / 60);

// criando uma classe com um metodo construtor

class Person {
  constructor() {
    console.log("classe instanciada...");
  }
}

const person = new Person();

// Criando propriedades de classes
class Product {
  constructor(name) {
    this.name = name;
  }
}

const product1 = new Product("Teclado");
console.log(product1.name);

const product2 = new Product("Mouse");
console.log(product2.name);

// adicionando metodos na classes
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  sendEmail() {
    console.log(
      "email enviado para",
      this.name,
      "no endereço eletronico",
      this.email,
    );
  }
}

const user = new User("teste", "teste@teste.com");
user.sendEmail();

// o que pe metodo estatico
class User {
  showMessage(message) {
    console.log(message);
  }
}

// const user = new User()
// user.showMessage()

// messagem sem instancia a classe
User.showMessage("Essa é uma menssagem");
User.showMessage("Essa é uma menssagem");

// como aplicar herança com classes

//sobrecrevendo metodos

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeNoise() {
    console.log("Algum som genérico do animal");
  }
}

// herda metodos da classe Animal
class Dog extends Animal {
  // Não tem nada aqui.
  makeNoise() {
    console.log("au au au");
  }
}

const dog = new Dog("Belu");
console.log(dog.name);

dog.makeNoise();

// criando prototype
const address = {
  city: "São Paulo",
  country: "Brazil",
};

console.log(address);

const users = ["Rodrigo", "João", "Maria"];

console.log(users);

const userName = "teste teste";

// acessa o Protorype da string
console.log(userName.__proto__);

// como utilizar classes para lidar com excessoes
let obj = [];
let index = 300;

try {
  obj.execute();

  if (!obj.includes(17)) {
    throw new Error("O numero 17 não esta disponivel");
  }

  if (index > 100) {
    throw new RangeError(
      "Número está fora do intervalo. Escolha um número de 0 À 99.",
    );
  }
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Método indisponível");
  }

  console.log(error);
}

// como utilizar classes para criar erros customizados
class MyCustomError {
  constructor(message) {
    this.message = "classe de erro customizada: " + message;
  }
}

try {
  // throw new Error("erro generico")

  throw new MyCustomError("Erro personalizado Lançado");
} catch (error) {
  if (error instanceof MyCustomError) {
    console.log(error.message);
  } else {
    console.log("Não foi possivel executar!");
  }
}

// O Strict mode (modo estrito): ativando esse modo, os erros que eram silenciosos passa a gerar exceções no JavaScript.

("use strict"); // Modo de passar o strict mode
function showMessage() {
  personName = "Rodrigo Gonçalves";

  console.log("Olá", personName);
}

showMessage();

// quando usado get metodo usado para obter o retorno
class Student {
  get point() {
    return 7;
  }
}

let student = new Student();

// Tenta mudar uma propriedade somente leitura
student.point = 10;

console.log(student.point);

// Tenta deletar uma propriedade de um objeto que não posso deletar.
delete window.document;

// Quando passamos parametros duplicados
function sum(a, a, c) {
  return a + a + c;
}

const result = sum(1, 3, 2); // 3 + 3 + 2 = 8  Porque o segundo parametro repetido sobrepoem o primeiro

console.log(result);

// desistruturação de array
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

// destructuring assignment (desestruturação) permite extrair dados de array ou objetos em variáveis distintas.

const product = {
  description: "teclado",
  price: 150,
};

const { description, price } = product;

console.log("Descrição:", description);
console.log("Preço: R$", price);

function newProduct({ description, price }) {
  console.log("### NOVO PRODUTO ###");
  console.log("Descrição:", description);
  console.log("Preço: R$", price);
}

newProduct({
  description: "mouse",
  price: 70,
});

// conhecendo o Rest params
// Rest params (...) permite representar um número indefinido de argumentos com um array

function values(a, ...rest) {
  // mostra a quantidade de parametros
  console.log(rest.length);

  console.log(a);

  // Exibindo o conteudo do Array
  console.log(...rest);

  // Exibe o conteúdo do rest que é um array
  console.log(...rest);
}

values(2, 1, 3);

// spread (espalhar) permite que um objeto iterável, como uma expressão de array ou uma string seja expandido para ser usado onde zero ou mais argumentos

const numbers = [1, 2, 3];
console.log(numbers);

// Spread
console.log(...numbers);

const data = [
  {
    name: "teste",
    email: "rodrigo@email.com",
    avatar: "r.png",
  },
  {
    name: "teste 2",
    email: "rodrigo@email.com",
    avatar: "r.png",
  },
  {
    name: "teste 3 ",
    email: "rodrigo@email.com",
    avatar: "r.png",
  },
];

// Utilizando o spread no array com objetos.
console.log(...data);

// O método map chama a função callback recebida por parâmetro para cada elemento do Array original, em ordem, e constrói um novo array com base nos retornos de cada chamada. E no final, devolve o novo array.

const products = ["teclado", "mouse", "monitor"];

// Percorro os itens do Array
products.map((product) => {
  console.log(product);
});

// Sintaxe reduzida
products.map((product) => console.log(product));

// Utilizando o novo objeto retornado.
const formatted = products.map((product) => {
  // return product.toUpperCase();
  return {
    id: Math.random(),
    description: product,
  };
});

console.log(formatted);

// O método filter() cria um novo array com todos os elementos que passaram na condição

const words = ["JavaScript", "HTML", "CSS", "Web"];

// Filtrando palavra que tenham mais do que 3 letras
const result = words.filter((word) => word.length > 3);
console.log(result);

const products = [
  { description: "teclado", price: 150, promotion: true },
  { description: "mouse", price: 70, promotion: false },
  { description: "monitor", price: 900, promotion: true },
];

// filtra somento itens true não retornando o mouse que é false
const promotion = products.filter((product) => product.promotion === true);

console.log(promotion);

// O método findIndex() retorna o índice no array do primeiro elemento que satisfizer a condição. Caso contrario, retorna -1, indicando que nenhum elemento passou no teste

const values = [4, 6, 8, 12];

// Obtendo o primeiro índice do elemento que o valor é maior do que 4.
const index = values.findIndex((value) => value > 4);
console.log(index);
console.log(values[index]);

// Exemplo de quando não encontra
// Retorna -1
console.log(value.findIndex((value) => value > 12));

// O método find() retorna o valor do primeiro elemento do array que satisfazer a condição. Caso contrario, undefined é retornado

const values = [5, 12, 8, 130, 44];

// Retorna o primeiro elemetno que o valor é maior que 10.
const found = values.find((value) => value > 10);

// Exemplo com objetos
const fruits = [
  { name: "apples", quantity: 23 },
  { name: "banana", quantity: 25 },
  { name: "orange", quantity: 52 },
];

const resutl = fruits.find((fruit) => fruit.name === "banana");

// O método every() testa se todos os elemento do array passam na condição e retorna um valor Boolean

// exemplo de array de idades
const ages = [15, 30, 39, 29];

// verificando se todas as idades são maiores ou igual a 18.
const result = ages.every((age) => age >= 18);

// retorna os valores maiores ou igual a 18
console.log(result);

// O método some() testa se ao menos um dos elementos no array passa a condição e retorna um valor true ou false

// exemplo de array de idades
const ages = [15, 25, 30, 35];

// false: pois nenhum do itens do array atende a condição
const result = ages.some((age) => age === 18);
console.log(result);

/*
O método reduce é utilizado para reduzir um array a um único valor

Parametros:
- Array original (Values)
- Acumulador (accumlator)
- Valor da iteração (currentValue)
- Valor Inicial (0)
- Index (Index da iteração atual - opcional)
*/

const values = [1, 2, 3, 4, 5];

const sum = values.reduce((accumulator, currentValue, index) => {
  console.log("ACUMULADOR", accumulator);
  console.log("CURRENT VALUE", currentValue);
  console.log("INDEX", index);

  console.log("SOMA", accumulator + currentValue);
  console.log("####################");

  return accumulator + currentValue;
}, 0);

const addres1 = {
  street: "AV. Brasil",
  number: 20,
};

// Isso não é uma copia. É uma referencia
const addres2 = addres1;
addres2.number = 30;

// altera o number nos 2
console.log(addres1);
console.log(addres2);

// Aqui estamos criando um novo objeto utilizando as propriedades e valores de addres1 (opcao 1).
const addres2 = { ...addres1 };

addres2.number = 30;

// altera somento do addres2
console.log(addres1);
console.log(addres2);

// opcao 2
const addres2 = { ...addres1, number: 30 };
console.log(addres1);
console.log(addres2);

// Exemplo com Array
const list1 = ["apple", "banana"];

litst2 = list1;

litst2.push("watermelon");

console.log(list1, list2);

////////////////

list2 = [...list1];
list2.push("watermelon");

list2 = [...list1, "watermelon"];

// Shallow copy (cópio superficial): não pega os itens aninhados
const htmlCourse = {
  course: "HTML",
  students: [{ name: "Rodrigo", email: "rodrigo@email.com" }],
};
/*
// const jsCourse = {
//   ...htmlCourse,
//   course: "JavaScript",
// }

// vai modificar o htmlCourse tbm students é uma referencia e não uma cópia.
jsCourse.students.push({ name: "João", email: "joao@email.com"})


// Deep Copy (copia profunda)
// exemplo 1
// const jsCourse = {
//   ...htmlCourse,
//   course: "JavaScript",
//   students: [...htmlCourse.students, {name: "joao", email: "joao@email.com"}]
// }

// exemplo 2
const jsCourse = {
  ...htmlCourse,
  course: "JavaScript",
  students: [...htmlCourse.students]
}

jsCourse.push({name: "joao", email: "joao@email.com"})
*/

const jsCourse = {
  ...htmlCourse,
  course: "JavaScript",
};

jsCourse.students = [
  ...htmlCourse.students,
  { name: "Joao", email: "joao@email..com" },
];

console.log;

const book = {
  title: "Objetos Imutáveis",
  category: "javascript",
  author: {
    name: "Rodrigo",
    email: "rodrigo@email.com",
  },
};

// O JavaScript em si não impõe restrições à modificação dos objetos.
book.category = "HTML";

// Cogela o objeto e impede a modificação
Object.freeze(book);

// Não vai executar a modificação
book.category = "CSS";

// O Object.freeze() não impede modificações profundas em objetos aninhados (shallow freezing).
book.author.name = "João";
console.log(book);

const book = {
  title: "Objetos Imutaveis",
  category: "Javascript",
  author: {
    name: "Rodrigo",
    email: "rodrigo@email.com",
  },
};

Object.freeze(book);
console.log(book);

// Não vai alterar
book.category = "CSS";

// Agorar vai alterar
book.author.name = "teste";

function deepFreeze(object) {
  // retorna as propriedade como array
  const props = Reflect.ownKeys(object);

  // Itera sobre todas as propriedades do objeto.
  for (const prop of props) {
    // Obtem o valor associado a proprieda atual.
    const value = object[prop];

    // verifica se o valor é um objeto ou função para continuar aplicando o deepFreeze
    if ((value && typeof value === "object") || typeof value === "function") {
      deepFreeze(value);
    }
  }
  // Retorna o objeto congelado
  return Object.freeze(object);
}

// chama a função para congelar o objeto com Deep Freeze (congelamento profundo)
deepFreeze(book);
book.category = "HTML";
book.author.name = "teste 2";

console.log(book);

const book = {
  title: "Objetos Imutaveis",
  category: "Javascript",
  author: {
    name: "Rodrigo",
    email: "rodrigo@email.com",
  },
};

// criando copia do objeto
const updatedBook = {
  ...book,
  title: "Criando um Front-end moderno com HTML",
  category: "HTML",
  type: "Programming",
};

// Original intacto
console.log(book);

// Modificado.
console.log(updatedBook);

// Utilizando operador de desestruturação (rest operator) para remover propriedades
const { category, ...bookWithoutCategory } = book;
console.log(bookWithoutCategory);

/////////////////////////////////////////////////////
// Podendo exportar a função
export function sum(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// podendo ser informado na função ou no final do codigo
export { sum, multiply };

// Importando tudo referente ao calc.js
// Sendo necessario passar um alias(apelido)
import * as calc from "./calc.js";

// Assim chamando 'calc' depois a função 'sum'
console.log("4 + 6 =", calc.sum(4, 6));

// Assim chamando 'calc' depois a função 'multiply'
console.log("4 * 6 =", calc.multiply(4, 6));

///////////////////////////////////////////////////
// default export - é a função padrão fornecida pelo módulo.
export default function sum(a, b) {
  return a + b;
}

// named export - cada metodo é importado pelo seu proprio nome de exportação
export function multiply(a, b) {
  return a * b;
}

// Como foi usado o export default pode chamar a função pelo nome sem precisar de ''
import sum, { multiply } from "./calc.js";

// Assim chamando 'calc' depois a função 'sum'
console.log("4 + 6 =", sum(4, 6));

// Assim chamando 'calc' depois a função 'multiply'
console.log("4 * 6 =", multiply(4, 6));

///////////////////////////////////////////////////////////////////////////
function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

export { sum as sumTwoNumbers, multiply as multiplyTwoNumbers };

// Chamando sum com alias se tornando sumTwoNumbers
import { sumTwoNumbers, multiplyTwoNumbers } from "./calc.js";

console.log("4 + 6 =", sumTwoNumbers(4, 6));

console.log("4 * 6 =", multiplyTwoNumbers(4, 6));

///////////////////////////////////////////////////////////////////////////////////
function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

export { sum, multiply };

// Renomeando com alias(as) assim sendo chamar o metodo pelo alias
import { sum as s, multiply as m } from "./calc.js";

console.log("4 + 6 =", s(4, 6));

console.log("4 * 6 =", m(4, 6));

// setTimeout() executa uma função após um intervalo de tempo especifico

setTimeout(() => {
  console.log("Olá, tudo bem?");
}, 1000); // tempo em milissegundos

// setInterval() executa uma função após um intervalo de tempo especificado.

let value = 10;

const interval = setInterval(() => {
  value--;

  if (value === 0) {
    console.log("parou");
    // Interrompe o intervalo de execuções.
    clearInterval(interval); // vai para o intervalo
  }
}, 100);

console.log("teste");

// função que retorna uma promise.
function asyncFunction() {
  return new Promise((resolve, reject) => {
    // simula uma operação assícrona
    setTimeout(() => {
      const isSuccess = true;

      if (isSuccess) {
        resolve("A operação foi concluida com sucesso");
      } else {
        reject("Algo deu errado!");
      }
    }, 3000); // Simula uma operação assincrona que leva 3 segundos
  });
}

// Visualizando que o retorno é uma promise
// console.log(asyncFunction())

console.log("executando função assicrona");

// const response = asyncFunction()
// console.log(response)

asyncFunction()
  .then((response) => {
    console.log("Sucesso: ", response);
  })
  .catch((error) => {
    console.log("Error: ", error);
  })
  .finally(() => {
    console.log("Fim da execução");
  });

// função que retorna uma promise.
function asyncFunction() {
  return new Promise((resolve, reject) => {
    // simula uma operação assícrona
    setTimeout(() => {
      const isSuccess = true;

      if (isSuccess) {
        resolve("A operação foi concluida com sucesso");
      } else {
        reject("Algo deu errado!");
      }
    }, 3000); // Simula uma operação assincrona que leva 3 segundos
  });
}

/*
const fetch = async () => {
  const response = await asyncFunction()
  console.log(response)
}
*/

async function fetch() {
  try {
    const response = await asyncFunction();
    console.log("Sucesso:", response);
  } catch (error) {
    console.log("Erro:", error);
  } finally {
    console.log("Fim da execução");
  }
}

fetch();

// (1) Executa o codigo de forma sincrona e o valor 1 é impresso imediatamente no console.
console.log(1);

// (3) Microtasks são executadas antes de temporizadores e promessas
queueMicrotask(() => {
  console.log(2);
});

// (5) Macrotask que aguarda o evento de temporizador ser acionado
setTimeout(() => {
  console.log(3);
}, 1000);

// (2) Execução síncrona.
console.log(4);

// (4) Adiciona uma microtask
Promise.resolve(true).then(() => {
  console.log(5);
});

// Gerenciando pacotes

const now = dayjs(); // chamo o day.js ja iniciando
console.log(now.format("DD/MM - HH:mm")); // Formatando o modelo de horario pela documentação

const now = dayjs(); // chamo o day.js ja iniciando
console.log(now.format("DD/MM - HH:mm")); // Formatando o modelo de horario pela documentação

// Utilizando o Fectch
const response = fetch("http://localhost:3001/products")
  .then((response) => {
    response.json(); // Retorna o json com os produtoss
  })
  .then((data) => console.log(data)); // Retorna os dados da requisição

// Async e Await
// Utilizando o fetch com then

// const response = fetch("http://localhost:3001/products")
//   .then((response) => {
//     response.json(); // Retorna o json com os produtoss
//   })
//   .then((data) => console.log(data)); // Retorna os dados da requisição

// Utilizando o fetch com async/await
async function fetchProducts() {
  const response = await fetch("http://localhost:3001/products");
  const data = await response.json();
  console.log(data);
}

fetchProducts();

// Passando parametros para a requisição
// Utilizando o fetch com then

// const response = fetch("http://localhost:3001/products")
//   .then((response) => {
//     response.json(); // Retorna o json com os produtoss
//   })
//   .then((data) => console.log(data)); // Retorna os dados da requisição

// Utilizando o fetch com async/await
async function fetchProducts() {
  const response = await fetch("http://localhost:3001/products");
  const data = await response.json();
  console.log(data);
}

async function fetchProductById(id) {
  const response = await fetch(`http://localhost:3333/products/${id}`);
}

fetchProductsById("1");

// fetch com post
const productName = document.getElementById("name");
const productPrice = document.getElementById("price");
const productForm = document.getElementsByName("form");

addEventListener("submit", async (event) => {
  event.preventDefault();

  await fetch("http://localhost:3333/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: new Date().getTime().toString(),
      name: productName.value,
      price: productPrice.value,
    }),
  });

  await fetchProducts();
});

// Verificando tipo estatico
// const message = "hello Word"

// consigo mudar?
// message = "Typescript!"

// Consigo executa?
// message()

const user = {
  name: "Rodrigo Gonçalves",
  email: "rodrigo@email.com",
};

// Propriedade existe?
// console.log(user.avatar)

// Tipos primitivos
// String para texto.
// let username:string

username = "test";
// username = 17
// username = true

// Number para número
// let total: number
total = 3;
total = 7.5;

// Boolean para verdadeiro ou falso
// let isLoading: boolean
isLoading = true;
isLoading = false;

// Inferencia de tipos e tipagem explicita
// Tipagem Explicita
// let myName: string

myName = "teste";

// Inferencia de tipos
let message = "Hello world"; // entende que é tipo string automaticamente mesmo sem ser tipado

// Tipo Any
// let message1
// let message1:any

// Podendo deixar o Any explicito ou não

// com o tipo any a variavel aceita qualquer valor

message1 = "Esse é um texto";
message1 = 41;

// Tipagem em funções
function sum(x /*:number*/, y /*:number*/) {
  const result = x + y;
  console.log("Resultado = " + result);

  return result;
}

const result = sum(7, 8);

// Tipagem em objetos
// let user: {name: string, age: number, avatarUrl?/*Deixando avatar opcional com '?'*/: string} = {
//   name: "teste",
//   age: 24
// }

/*
function signIn(email: string, password: string) {
  // Logica de conectar o usuario na aplicação.
}

signIn("teste@email.com", "1234")
*/

// function signIn({email, password}: {email:string, password: string}){
//   // Lógica de conectar o usuário na aplicação
// }

signIn({ email: "teste@email.com", password: "1234" });

// Null e undefined
// undefined

// let value: number
value = 12;

console.log(value);

let user1 = {
  name: "Rodrigo",
};

// console.log(user.email)

// null
let email = null;
console.log(email);

if (!email) {
  console.log("Informe o e-mail!");
}

// Union types
// Pipe vai fazer a adição de outra possibilidade de tipo
// let response: string | null | number

response = "Teste";
response = null;
response = 10;

// Conhecendo a interface Typescript
// interface Product {
//   id: number,
//   name: string
// }

// function newProduct(product: Product) {

// }

newProduct({ id: 10, name: "teste X" });

// Como extender interfaces
// interface Person {
//   id: number,
//   name: string
// }

// interface Teacher extends Person {
//   // id: number,
//   // name: string,
//   subjects: string[]
// }

// interface Student extends Person {
//   // id: number,
//   // name:string,
//   age: number
// }

// let teacher: Teacher = {id: 1, name: "teste", subjects: ["Javascript", "Typescript"]}

// let student: Student = {id: 2, name: "teste2", age: 23}

// Funciona como as classes podendo usar propriedades extendidas

// Usando Type
// type Product1 = {
//   id: number,
//   name: string
// }

// function newProduct(product: Product1) {

// }

// newProduct({ id: 1, name: "Produto x"})

// type SelectResponse = Product1[] | null

// function selectProducts(): SelectResponse{
//  return null
// }

// Interseção tipos
// type Person1 = {
//   id: number,
//   name:string
// }

// type Teacher1 = Person1 & {
//   subjects: string[]
// }

// type Student1 =  Person1 &{
//   age: number
// }

// let teacher1: Teacher1

// diferença entre type e interface
// Interface X Type

// interface IBaseProduct {
//   price:number
// }

// interface IProduct extends IBaseProduct {
//   id: number,
//   name: string
// }

// // Interface pode sobescrever concatenando os valores passados
// interface IProduct{
//   quantity:number
// }

// // Type pode criar tipos personalizados
// type TBaseProduct = {
//   price:number
// }

// type TProduct = TBaseProduct & {
//   id: number,
//   name: string
// }

// let product1: IProduct = {id:1 , name:"Produto1", price: 100, quantity:20}
// let product2: TProduct = {id:2 , name:"Produto2", price: 150}

// type TypeString = string
// type TypeNumber = number

// Asserção de tipos
// type UserResponse = {
//   id: number,
//   name: string,
//   avatar: string;
// }

// // vai adicionar as propriedades => asserção
// // Recurso usado para consumir API
// let userResponse = {} as UserResponse;

// Restringindo valores
// type Size = "small" | "medium" | "large"

// let size: Size

// size = "large"

// Enums
// Passar um alias/Apelido para algum argumento
// enum Profile {
//   Admin = 1,
//   Client = 2,
//   Sellet = 3
// }

// let profile: number = Profile.Admin
// console.log(Profile.Admin)

// Generic
// function useState<T>() {
//   let state: T;

//   function get(){
//     return state
//   }

//   function set(newValue: T){
//     state = newValue
//   }

//   return {get, set}
// }

let newState = useState();
newState.get;
newState.set("teste");

// Partial
// interface User {
//   id: number,
//   name: string,
//   email: string
// }

// const newUser: User = {id:1 , name: "teste", email: "teste@email.com"}

// const udpateUser: Partial<User> = { name: "Rodrigo Gonçalves"}
// Partial vai permitir alterar qualquer campo sem a obrigatoriedade de campos

// Pick
// interface Book {
//   title: string
//   pages: number
//   author: string
// }

// interface BookPreview {
//   title: string
// }

// const book11: BookPreview = { title: "Typescript" }
// const book22: Pick<Book, "title" | "pages"> = { title: "Typescript", pages: 100 }
// Pick vai possibilitar chamar somente o elemento que vai ser atribuido

// Omit
// interface Book10 {
//   title: string
//   pages: number
//   author: string
//   description: string
// }

// const book10: Omit<Book10, "description" | "author" | "title"> = { pages: 10  }
// Omit usado para reaproveitar um tipagem informando quais seram omitidos

//Record
// Cria um objeto onde todas as chave são string e os valores são números
// const scores: Record<string, number> = {
//   "teste": 15,
//   "teste2":20
// }

// Limitar valores
// type Profile = "admin" | "user" |"guest"

// const user: Record<Profile, number> ={
//   "admin": 1,
//   "guest": 2,
//   "user": 3
// }

// interface User  {
//   name : string
//   email: string
// }

// const users: Record<number, User> = {
//   10: {name: "teste", email: "teste@email.com"},
//   20: {name: "teste", email: "teste@email.com"},
// }

// interface Product10 {
//   id: number
//   name: string
//   quantity: number
// }

// const product1: Product10 = {id: 1, name:"Produto 1", quantity: 3}

// const product2: typeof product1 = {id: 2, name: "Produto 2", quantity: 5}
// // cria uma tipagem a parti do objeto citado anteriormente

const icons = {
  home: "./path/home.svg",
  add: "./path/add.svg",
  remove: "./path/home.svg",
};

// type Icon = typeof icons

// const icon:keyof Icon = "add"
//Keyof seleciona um chave especifica da tipagem

// Importação commonJS
//const http = require("http") // CommonJS

import http from "node:http"; // ES modules, deixando explicito que http nativo do node

// Criando o primeiro servidor node.js

import http from "node:http";

const server = http.createServer((req, res) => {
  return response.end("Hello Word!");
});

server.listen(3333);

// node --watch src/server.js
// Para que o servidor matenha a taxa de atualização
// podendo Usar tbm o nodemon

// Url da requisição
import http from "node:http";

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === "GET" && url === "/products") {
    return response.end("Lista de produtos");
  }

  if (method === "POST" && url === "/products") {
    return response.writeHead(201).end("Produto cadastrado!");
  }

  // return response.writable.end("URL: " + method)
  return response.writable.end("URL: " + url);
});

// Exemplo de middlewares
export async function jsonBodyHandler(req, res) {
  const buffers = [];

  // coleta os chunks de dados da requisição
  for await (const chunk of request) {
    buffers.push(chunk);
  }

  try {
    // concatenar os chunck e converter para string. Em seguida converte a string para JSON
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (error) {
    req.body = null;
  }

  // Define o header de resposta como JSON.
  res.setHeader("content-Type", "application/json");
}

// server.js que usa esse middlewares
import http from "node:http";
import { jsonBodyHandler } from "./middlewares/jsonHandler.js";

const server = http.createServer(async (request, response) => {
  const { method, url } = request;

  await jsonBodyHandler(request, response);

  if (method === "GET" && url === "/products") {
    return response.end("Lista de produtos");
  }

  if (method === "POST" && url === "/products") {
    console.log(request.body);
    return response.writeHead(201).end("Produto Cadastrado!");
  }

  // return response.writable.end("URL: " + method)
  return response.writaHead(404).end("Rota não encontrada!");
});

server.listen(3333);

// Separando Rotas
export const routes = () => [
  {
    method: "GET",
    path: "/products",
    controller: (request, response) => {
      return response.end("Lista de produtos");
    },
  },
  {
    method: "POST",
    path: "/products",
    controller: (request, response) => {
      console.log(request.body);
      return response.writeHead(201).end("Produto Cadastrado!");
    },
  },
];

// Criação de arquivo para simulação de banco
import fs from "node:fs/promises";

const DATABASE_PATH = new URL("db.json", import.meta.url);

export class Database {
  database = {};

  constructor() {
    fs.readFile(DATABASE_PATH, "utf-8")
      .then((data) => {
        this.database = JSON.parse(data);
      })
      .catch(() => this.persist());
  }

  persist() {
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.database));
  }

  insert(table, data) {
    if (Array.isArray(this.database[table])) {
      this.database[table].push(data);
    } else {
      this.database[table] = [data];
    }

    this.persist();
  }

  select(table) {
    return this.database[table];
  }
}
