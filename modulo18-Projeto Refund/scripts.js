// Seleciona os elementos do formulario
const amount = document.getElementById("amount")


// Captura o evento de input para formatar o valor.
amount.oninput = () => {
  // Obtem o valor atual do input e remove os caracteres não numericos.
  let value = amount.value.replace(/\D/g, "")

  // Transformar o valor em centavos. (exemplo: 150/100 = 1.5 que é equivalente a R$ 1, 50).
  value = Number(value) / 100
  
  // Atualiza do valor do input.
  amount.value = formatCurrencyBRL(value)

}

function formatCurrencyBRL(value) {
  value = value.toLocaleString("pt-BR", {
    style: "currecy",
    curency: "BRL"
  })
  return value
}