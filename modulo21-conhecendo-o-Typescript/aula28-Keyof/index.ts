const icons = {
  "home":"./path/home.svg",
  "add": "./path/add.svg",
  "remove": "./path/home.svg",
}

type Icon = typeof icons

const icon:keyof Icon = "add"
//Keyof seleciona um chave especifica da tipagem