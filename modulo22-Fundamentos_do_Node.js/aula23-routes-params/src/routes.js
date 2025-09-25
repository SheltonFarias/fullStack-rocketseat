export const routes = () => [
  {
    method: "GET",
    path: "/products",
    controller: (request, response) => {
      return response.end("Lista de produtos");
    },
  },
  {
    method: "POST",
    path: "/products",
    controller: (request, response) => {
      console.log(request.body);
      return response.writeHead(201).end("Produto Cadastrado!");
    },
  },
    {
    method: "DELETE",
    path: "/products/:id",
    controller: (request, response) => {
      console.log(request.body);
      return response.end("Produto Removido!")
    },
  },
];
