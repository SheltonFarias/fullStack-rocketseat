const response = fetch("http://localhost:3001/products")
  .then((response) => {
    response.json(); // Retorna o json com os produtoss
  })
  .then((data) => console.log(data)); // Retorna os dados da requisição
