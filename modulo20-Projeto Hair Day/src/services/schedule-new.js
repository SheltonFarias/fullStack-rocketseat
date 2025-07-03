import { apiConfig } from "./api-config";

export async function scheduleNew({id, name, when}) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: 'POST',
      headers: {
        "content-Type": "aplication/json"
      },
      Body:JSON.stringify({id, name, when})
    })

    alert(" Agendamento realizado com sucesso!")
  } catch (error) {
    console.log(error)
    alert("Não foi possivel agendar. Tente mais tarde")
  }
}