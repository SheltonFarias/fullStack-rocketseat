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
