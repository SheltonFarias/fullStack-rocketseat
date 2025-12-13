window.addEventListener("load", function() {
  console.log("a pagina foi carregada")
})

addEventListener("click", function(e) {
  console.log("Você clicou no elemento: ", e.target)
  console.log("Você clicou na posição X: ", e.clientX)
  console.log("Você clicou na posição Y: ", e.clientY)
  console.log("Você clicou na posição X: ", e.pageX)
  console.log("Você clicou na posição Y: ", e.pageY)
  console.log("Você clicou no elemento: ", e.currentTarget)
})

addEventListener("click", function(event) {
  event.preventDefault ()


  // Retorna todas as informações do evento
  // console.log(event)

  // Retorna o elemento clinico

  console.log(event.target)

  // Retorna o textContent do elemento clicado
  console.log(event.target.textContent)
})
