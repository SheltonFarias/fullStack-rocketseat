import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware";
import { ProductsController } from "../controllers/ProductsController";

const productsRoutes = Router()

const productsController = new ProductsController()

//exemplo de solicitação pegando parametros da pagina
productsRoutes.get("/", productsController.index)

// Aplicando o middlewaware nessa rota
productsRoutes.post("/", myMiddleware, productsController.create)

export { productsRoutes }