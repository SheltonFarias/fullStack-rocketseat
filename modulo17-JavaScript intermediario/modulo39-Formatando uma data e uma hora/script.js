let date = new date("2024-07-02T14:30:00")

// Formata para o dia sempre ter 2 digitos
let day = date.getDate().toString().padStart(2,"0")
console.log(day)

// Formata para o mês sempre ter 2 digitos
let mouth = (date.getMonth() + 1).toString().padStart(2,"0")
console.log(mouth)


let year = date.getFullYear()
let hour = date.getHours()
let minutes = date.getMinutes()


console.log(`${day}/${mouth}/${year} as ${hour}:${minutes}`)
