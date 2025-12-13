// Utilizando o fetch com then

// const response = fetch("http://localhost:3001/products")
//   .then((response) => {
//     response.json(); // Retorna o json com os produtoss
//   })
//   .then((data) => console.log(data)); // Retorna os dados da requisição

// Utilizando o fetch com async/await
async function fetchProducts() {
  const response = await fetch("http://localhost:3001/products");
  const data = await response.json()
  console.log(data)
}


fetchProducts()