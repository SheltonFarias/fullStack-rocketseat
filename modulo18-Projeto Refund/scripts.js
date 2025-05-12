// Seleciona os elementos do formulario
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const expense = document.getElementById("expense");
const category = document.getElementById("category");

// Selecion os elementos da lista
const expenseList = document.querySelector("ul");
const expensesTotal = document.querySelector("aside header h2")
const expenseQuantity = document.querySelector("aside header p span");

// Captura o evento de input para formatar o valor.
amount.oninput = () => {
  // Obtem o valor atual do input e remove os caracteres não numericos.
  let value = amount.value.replace(/\D/g, "");

  // Transformar o valor em centavos. (exemplo: 150/100 = 1.5 que é equivalente a R$ 1, 50).
  value = Number(value) / 100;

  // Atualiza do valor do input.
  amount.value = formatCurrencyBRL(value);
};

function formatCurrencyBRL(value) {
  // Formata o valor no padrão BRL (Real Brasileiro)
  value = value.toLocaleString("pt-BR", {
    style: "currecy",
    curency: "BRL",
  });
  return value;
}

form.onsubmit = (event) => {
  // Previne o comportamento padrão de recarregar a pagina
  event.preventDefault();

  // cria um objeto com os detalhes da nova despesa
  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date(),
  };

  // chama a função que ira adicionar o item na lista
  expanseAdd(newExpense);
};

// Adiciona um novo item na lista
function expanseAdd(newExpense) {
  try {
    // cria o elemento de li para adicionar o item (li) na lista(ul).
    const expenseItem = document.createElement("li");
    expenseItem.classList.add("expense");

    // cria o ícone da categoria.
    const expanseIcon = document.createElement("img");
    expanseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`);
    expanseIcon.setAttribute("alt", newExpense.category_name);

    // Cria a info da despesa
    const expenseInfo = document.createElement("div");
    expenseInfo.classList.add("expense-info");

    // Cria o nome da despesa
    const expenseName = document.createElement("strong");
    expenseName.textContent = newExpense.expense;

    // Cria a categoria da despesa.
    const expenseCategory = document.createElement("span");
    expenseCategory.textContent = newExpense.category_name;

    // adicona name e category na div das informações da despesa
    expenseInfo.append(expenseName, expenseCategory);

    // Cria o valor da despesa.
    const expenseAmount = document.createElement("span");
    expenseAmount.classList.add("expense-amount");
    expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount
      .toUpperCase()
      .replace("R$", "")}`;

    // cria o icone de remover
    const removeIcon = document.createElement("img");
    removeIcon.classList.add("remove-icon");
    removeIcon.setAttribute("src", "img/remove.svg");
    removeIcon.setAttribute("alt", "remover");

    // Adiciona as informações mo item.
    expenseItem.append(expanseIcon, expenseInfo, expenseAmount, removeIcon);

    // Adicona o item na lista.
    expenseList.append(expenseItem);

    //Atualiza os totais
    updateTotals();
  } catch (error) {
    alert("Não foi possivel atualizar a lista de despesas");
    console.log(error);
  }
}

// Limpa o formulário para adicionar um novo
formClear()

// Atualizar os totais
function updateTotals() {
  try {
    // Recupera todos os itens que são (li) da lista (ul)
    const items = expenseList.children;

    // atualiza a quantidade de itens da lista.
    expensesQuantity.textContent = `${items.length} ${items > 1 ? "despesas" : "despesa"}`

    // variavel para incrementar o total
    let total = 0

    // percorre cada item (li) da lista (ul)
    for(let item = 0; item < items.length; item++){
      const itemAmount = items[item].querySelector(".expense-amount")

      // Remover caractere não numericos e substitui a vírgula pelo ponto.
      let value = itemAmount.textContent.replace(/[^\d,]/g, "").replace(",", ".")

      // converte o valor para float.
      value = parseFloat(value)

      //Verificar se é um número válido
      if(isNaN(value)) {
        return alert("não possivel calcular o total. O valor não parece ser um número")
      }

      // Incrementar o valor total
      total += Number(value)
    }

    // criar a span para adiconar o R$ formatado.
    const symbolBRL = document.createElement("small")
    symbolBRL.textContent = "R$"

    // Formata o valor e remove o R$ que será exibido pela small com um estilo customizado
    total.formatCurrencyBRL(total).toUpperCase().replace("R$", "")

    // Limpa o conteudo do elemento
    expensesTotal.innerHTML = ""

    // adicona o simbolo da moeda e o valor formatado
    expensesTotal.append(symbolBRL, total)

  } catch (error) {
    console.log(error);
    alert("Não foi possivel atualizar os totais");
  }
}

// Evento que captura o clique nos itens da lista
expenseList.addEventListener("click", (event) => {
  // verificar se o elemento clicado é o icone de remover.
  if(event.target.classList.contains("remove-icon")) {
    // obtem a li pai do elemento clicado
    const item = event.target.closest(".expense")
    // Remove o item da lista.
    item.remove()
  }

  updateTotals()
})

function formClear() {
  expense.value = ""
  category.value = ""
  amount.value = ""

  expanse.focus()
}