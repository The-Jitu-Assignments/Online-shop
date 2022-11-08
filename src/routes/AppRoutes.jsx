import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";
import Products from "../pages/products/Products";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Dashboard>
            <Products />
          </Dashboard>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;