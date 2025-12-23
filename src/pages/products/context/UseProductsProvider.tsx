import { createContext, useContext, useEffect, useState } from "react";
import type { CartItem, Product, ProductResponse } from "../types/productItem";
import { useToast } from "../../../shared/toast/Toast";

type TProductProvider = {
  products: Product[];
  getProductsById: (id: number) => Promise<void>;
  getAllProducts: () => Promise<void>;
  addProductToCart: (product: Product) => void;
};

const noopAsync = async () => {};
const noop = () => {};

const defaultValue: TProductProvider = {
  products: [],
  getProductsById: async (_id: number) => await noopAsync(),
  getAllProducts: async () => await noopAsync(),
  addProductToCart: (_product: Product) => noop(),
};

const ProductContext = createContext<TProductProvider>(defaultValue);

export const ProductsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [_, setCartItems] = useState<CartItem[]>([]);
  const toast = useToast();

  const baseUrl = "https://restaurant.stepprojects.ge/api/";

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const response = await fetch(baseUrl + "Products/GetAll");
      const data: Product[] = await response.json();
      setProducts(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getProductsById = async (id: number) => {
    try {
      const response = await fetch(baseUrl + `Categories/GetCategory/${id}`);
      const data: ProductResponse = await response.json();
      setProducts(data.products);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getCartItems = async () => {
    try {
      const response = await fetch(baseUrl + "Baskets/GetAll");
      const data: CartItem[] = await response.json();
      setCartItems(data);
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
      return [] as CartItem[];
    }
  };
  const addProductToCart = async (product: Product) => {
    try {
      const currentCart = await getCartItems();

      const existingItem = currentCart.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        await fetch(baseUrl + "Baskets/UpdateBasket", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            quantity: existingItem.quantity + 1,
            price: product.price,
            productId: product.id,
          }),
        });
        toast.open({
          type: "success",
          content: `${product.name} quantity updated in cart.`,
        });
      } else {
        await fetch(baseUrl + "Baskets/AddToBasket", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            quantity: 1,
            price: product.price,
            productId: product.id,
          }),
        });
        toast.open({
          type: "success",
          content: `${product.name} was added to your cart.`,
        });
      }

      await getCartItems();

      console.log("Added to cart:", product);
    } catch (err) {
      console.error(err);
    }
  };

  const value: TProductProvider = {
    products,
    getAllProducts,
    getProductsById,
    addProductToCart,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const UseProductsProvider = () => {
  const context = useContext(ProductContext);

  if (!context) {
    console.warn(
      "Use Product Provider used outside of a ProductsProvider — using fallback defaults."
    );
    return defaultValue;
  }

  return context;
};
