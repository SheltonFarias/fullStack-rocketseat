showMessage("Olá, Rodriguez!");

function showMessage(message){
  console.log(message);
  endLine();

  function endLine() {
    console.log("----------------");
  }
}


showMessage("tudo bem?");

// Não existe nesse escopo.
//endLine()