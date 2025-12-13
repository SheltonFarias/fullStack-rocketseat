import http from "node:http"

const server = http.createServer((req, res) => {
  return response.end("Hello Word!")
})

server.listen(3333)

// node --watch src/server.js
// Para que o servidor matenha a taxa de atualização
// podendo Usar tbm o nodemon