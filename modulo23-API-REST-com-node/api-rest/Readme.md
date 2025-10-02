npm i typescript@5.5.4 @types/node@20.14.12 -D

- node não consegue executar por padrão Typescript
- comando executado => npx tsc src/server.ts

- instalação como npm i tsx@4.16.2 -D

- executado npx tsc --init => cria uma arquivo tsconfig.json

## express
- Framework flexivel e minimalista para Node.js, lida como requisições

- npm i express@4.19.2
- npm i --save-dev @types/express => instalar a tipagem para o typescript

## Controller
- Vai apresentar os metodos => create,update,remove,show

//exemplo de solicitação pegando parametros da pagina
productsRoutes.get("/products", (request, response) => {
  // /products?page=1&limit=10
  const {page, limit} = request.query
  response.send(`Pagina ${page} de ${limit}`)
})

// Aplicando o middlewaware nessa rota
productsRoutes.post("/products", myMiddleware, (request, response) => {
  const {name, price} = request.body

  response.status(201).json({name, price, user_id: request.user_id})
})