import http from "node:http";
import { jsonBodyHandler } from "./middlewares/jsonHandler.js"


const server = http.createServer(async (request, response) => {
  const { method, url } = request;

  await jsonBodyHandler(request, response)

  if (method === "GET" && url === "/products") {
    return response.end("Lista de produtos");
  }

  if (method === "POST" && url === "/products") {
    console.log(request.body)
    return response.writeHead(201).end("Produto Cadastrado!");
  }

  // return response.writable.end("URL: " + method)
  return response.writaHead(404).end("Rota não encontrada!");
});

server.listen(3333);
