export function hoursClick() {
  const hours = document.querySelectorAll('.hour-avaible');
  
  
  hours.forEach(( available ) => {
    available.addEventListener("click", (selected) => {
     
      // removendo a classe hour-selected de todas as li não selecionadas
      hours.forEach((hour) => {
        hours.classlist.remove("hour-selected")
      })

      // Adiciono a classe na li clicada
      selected.target.classlist.add("hour-selected")
    })
  })
}