// setInterval() executa uma função após um intervalo de tempo especificado.

let value = 10


const interval = setInterval(() => {
 value--

 if(value === 0) {
  console.log("parou")
  // Interrompe o intervalo de execuções.
  clearInterval(interval) // vai para o intervalo
 }
}, 100)

console.log("teste")