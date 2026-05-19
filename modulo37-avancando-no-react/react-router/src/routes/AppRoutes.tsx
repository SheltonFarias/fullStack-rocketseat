import { Routes, Route } from "react-router";

import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { NotFound } from "../pages/NotFound";
import { Details } from "../pages/Details";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}> {/* vai agrupa rotas que usam o msm layout */}
        {/* path dita o endpoint e element a pagina */}
        <Route path="/" index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/details/:id" element={<Details />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
