import http from "node:http"

const server = http.createServer((request, response) => {
  const { method, url } = request

  if(method === "GET" && url === "/products") {
    return response.end("Lista de produtos")
  }

  if(method === "POST" && url === "/products"){
    return response.writeHead(201).end("Produto cadastrado!")
  }

  // return response.writable.end("URL: " + method)
  return response.writable.end("URL: " + url)
})