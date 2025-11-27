import { createContext, useContext, useEffect, useState } from "react";
import type { Product, ProductResponse } from "../types/productItem";

type TProductProvider = {
  products: Product[];
  getProductsById: (id: number) => Promise<void>;
  getAllProducts: () => Promise<void>;
};

const ProductContext = createContext<TProductProvider | null>(null);

export const ProductsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<Product[]>([]);

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

  const value: TProductProvider = {
    products,
    getAllProducts,
    getProductsById,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const UseProductsProvider = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("Use Product Provider must be used within its context");
  }

  return context;
};
