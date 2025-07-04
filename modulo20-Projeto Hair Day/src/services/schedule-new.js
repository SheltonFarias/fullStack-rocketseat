import { apiConfig } from "./api-config";

export async function scheduleNew({id, name, when}) {
  try {
    // Faz a requisição para enviar os dados do agendamento.
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: 'POST',
      headers: {
        "content-Type": "aplication/json"
      },
      Body:JSON.stringify({id, name, when})
    })


    // Exibe mensagem de agendamento realizado.
    alert(" Agendamento realizado com sucesso!")
  } catch (error) {
    console.log(error)
    alert("Não foi possivel agendar. Tente mais tarde")
  }
}