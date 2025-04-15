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
