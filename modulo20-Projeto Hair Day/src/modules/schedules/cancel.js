import { schedulesDay } from "./load.js";
import { scheduleCancel } from "../../services/schedule-cancel.js";
const periods = document.querySelectorAll(".period");

// Gera evento de click para cada lista (manhã, tarde e noite)

periods.forEach((period) => {
  // Captura o evento de clique na lista.
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      // obter a li pai do li clicado
      const item = event.target.closest("li");

      // Pega o id do agendamento para remover
      const { id } = item.dataset;

      // Confirma que o id foi selecionado
      if (id) {
        // confirma se o usuario quer cancelar.
        const isConfirm = confirm(
          "tem certeza que deseja cancelar o agendamento?"
        );

        if (isConfirm) {
          // Faz a requisição na API para cancelar
          await scheduleCancel({id})

          // Recarrega os agendamentos
          schedulesDay()
        }
      }
    }
  });
});
