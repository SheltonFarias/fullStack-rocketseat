import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

// Date atual para formatar o input.
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual e define data minima sendo a data atual
selectedDate.value = inputTodays
selectedDate.min = inputToday

form.onsubmit= (event) => {
  // Previne o comportamento padrão de carregar a pagina.
  event.preventDefault()

  console.log("Enviado!")
}