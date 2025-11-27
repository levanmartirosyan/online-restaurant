import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductsProvider } from "../pages/products/context/UseProductsProvider";
import CartView from "../pages/cart";
import ProductsView from "../pages/products";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProductsProvider>
          <ProductsView />
        </ProductsProvider>
      ),
    },
    {
      path: "/cart",
      element: <CartView />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
