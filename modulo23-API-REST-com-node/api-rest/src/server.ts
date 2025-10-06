import express, { Request, Response, NextFunction } from "express"
import {ZodError} from "zod"

import { routes } from "./routes"
import { AppError } from "./utils/app-error"

const PORT = 3333

// incializando o Express
const app = express()

// informa que vai usar o JSON como estrategia para representar dados
app.use(express.json())

// Pode fazer a requisição get apenas chamado app.
//exemplo de solicitação pegando o id do parametros
// productsRoutes.get("/products/:id", (request, response) => {
//   const { id } = request.params
//   response.send("Hello world Express!" + id)
// })

// Aplicando middleware de forma global, funcionando para todas as rotas
//app.use(myMiddleware)

app.use(routes)

/**
 * 400 (Bad Request): Erro do cliente.
 * 500 (Internal Server Erro): Erro interno do Servidor.
 */

app.use((error: any, request: Request, response: Response, _: NextFunction) => {
  if(error instanceof AppError){
    return response.status(error.statusCode).json({ message: error.message})
  }

  if(error instanceof ZodError) {
    response.status(400).json({message: "Validation error", issues: error.format()})
  }

  response.status(500).json({ message: error.message})
 })

// listen vai fazer rodar um servidor local esperando o argumento porta e podendo receber um função de callback
app.listen(PORT, () => console.log(`server on http://localhost:${PORT}`))