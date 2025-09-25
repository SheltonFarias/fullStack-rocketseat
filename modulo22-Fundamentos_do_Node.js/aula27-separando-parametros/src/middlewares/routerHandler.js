import { routes } from "../routes.js"

export function routeHandler(request, response) {
  const route = routes.find((route) => {
    return route.method === request.method && route.path.test(request.url)
  })

  if(route) {
    const routeParams = request.url.match(route.path)
    const {...params} = routeParams.groups

    return route.controller(request, response)
    
  }

  return response.writaHead(404).end("Rota não encontrada!");
}