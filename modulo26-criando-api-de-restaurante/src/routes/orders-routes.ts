import { Router } from "express";

import { OrdersController } from "controllers/orders-controller";

const ordersRoutes = Router()
const orderController = new OrdersController()

ordersRoutes.post("/", orderController.create)
ordersRoutes.get("/table-session/:table_sessions_id", orderController.index)
ordersRoutes.get("/table-session/:table_sessions_id/total", orderController.show)


export {ordersRoutes}