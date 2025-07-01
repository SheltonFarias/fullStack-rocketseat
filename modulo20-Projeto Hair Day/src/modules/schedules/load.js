import {hoursLoad} from "../form/hours-load"

// Seleciona o input de data
const selectedDate = document.getElementById
export function schedulesDay() {
  // Obtem a data do input
  const date = selectedDate.value 

  // Renderiza as hora disponiveis
  hoursLoad()
}