import http from "node:http";
import { jsonBodyHandler } from "./middlewares/jsonHandler.js";
import { routeHandler } from "./middlewares/routerHandler.js";

const server = http.createServer(async (request, response) => {
  await jsonBodyHandler(request, response);
  routeHandler(request, response);
});

server.listen(3333);
