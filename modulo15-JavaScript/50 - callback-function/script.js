// CALLBACK FUNCTION: é uma função passada para outra função como argumento.

function execute(taskName, callback) {
  console.log("Executando a tarefa: ", taskName);

  callback()
}

function callback() {
  console.log("Tarefa finalizado1")
}

// Passando para a função.
execute("Download do arquivo...", callback)

// Criando a função no proprio parâmetro.
execute("Upload do arquivo", function() {
  console.log("Tarefa finalizado2")
}) 

// Utilizando Arrow Function
execute("Upload do arquivo", () => {
  console.log("Tarefa finalizado3")
})

execute("salvando arquivo", () => console.log("Arquivo salvo")) // Arrow Function