// While: executa até que a condição seja verdadeira

let execute = true

while(execute) {
  let response = window.prompt("deseja continuar: 1 (SIM) ou 2 (NÃO)")

  if(response === "2") {
    execute = false
  }
}

console.log("segue o Fluxo")
