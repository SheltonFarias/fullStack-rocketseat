try {
  // TENTA executar o código
  console.log(result)
} catch(error) {
  // CAPTURA o erro para tratar
  console.log("erro: " + error);
} finally {
  console.log("fim");
}


let result = 1

try {
  if(result === 0) {
    throw new Error("valor é igual a zero");
  }
} catch (error) {
  console.log("erro: " + error);
} finally {
  console.log("fim");
}