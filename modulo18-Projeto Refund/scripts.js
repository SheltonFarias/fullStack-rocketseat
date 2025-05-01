// Seleciona os elementos do formulario
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")

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
  // Formata o valor no padrão BRL (Real Brasileiro)
  value = value.toLocaleString("pt-BR", {
    style: "currecy",
    curency: "BRL"
  })
  return value
}

form.onsubmit = (event) => {
  // Previne o comportamento padrão de recarregar a pagina
  event.preventDefault()

  // cria um objeto com os detalhes da nova despesa
  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount:amount.value,
    created_at: new Date(),
  }

    // chama a função que ira adicionar o item na lista
    expanseAdd(newExpense)
}

function expanseAdd(newExpense) {
  try {
    // cria o elemento de li para adicionar o item (li) na lista(ul).   
    const expenseItem = document.createElement("li")
    expenseItem.classList.add("expense")

    // cria o ícone da categoria.
    const expanseIcon = document.createElement("img")

  } catch (error) {
    alert("Não foi possivel atualizar a lista de despesas")
    console.log(error)
  }
}