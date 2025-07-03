import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hous-click.js";

const hours = document.getElementById("hours")

export function hoursLoad({ date }) {
  //Limpa a lista de horarios
  hours.innerHTML = ""

  const opening = openingHours.map((hour) => {
    // recupera somente a hora.

    const [scheduleHour] = hour.split(":");
    console.log(scheduleHour);

    // Adiciona a hora na date e verificar se está no passado
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

    return {
      hour,
      avaible: isHourPast
    }
  });

 // Renderizar os horários
  opening.forEach(({ hour, avaible}) => {
    const li = document.createElement("li")
    
    li.classList.add("hour")
    li.classList.add(avaible ? "hour-available" : "hour-unavailable")

    li.textContent = hour

    if(hour === "9:00") {
      hourHeaderAdd("Manhã")
    } else if (hour === "13:00") {
      hourHeaderAdd("Tarde")
    } else if (hour === "18:00") {
      hourHeaderAdd("Noite")
    }

    hours.append(li)
  })

  // Adiciona o evento de clique nos horarios disponiveis
  hoursClick()

}



function hourHeaderAdd(title) {
  const header = document.createElement("li")
  header.classList.add("hour-period")
  header.textContent.title

  hour.append(header)
}
