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

console.log("executando função assicrona")

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