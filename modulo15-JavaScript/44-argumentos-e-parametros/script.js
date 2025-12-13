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

sum(10, 20)
sum(7, 3)


function joinText(text1, text2, text3) {
  console.log(text1 + " " + text2 + " " + text3);
}