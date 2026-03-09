import { Router } from "express";

import { tablesSessionsRoutes } from "./table-sessions-routes";
import { productsRoutes } from "./products-routes";
import { tablesRoutes } from "./table-routes";
import { ordersRoutes } from "./orders-routes";

const routes = Router()
routes.use("/tables-sessions", tablesSessionsRoutes)
routes.use("/products", productsRoutes)
routes.use("/tables", tablesRoutes)
routes.use("/orders", ordersRoutes)

export { routes }