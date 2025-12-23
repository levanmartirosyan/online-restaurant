import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartView from "../pages/cart";
import ProductsView from "../pages/products";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductsView />,
    },
    {
      path: "/cart",
      element: <CartView />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
