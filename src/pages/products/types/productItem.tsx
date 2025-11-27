export interface Product {
  id: number;
  name: string;
  price: number;
  nuts: boolean;
  image: string;
  vegeterian: boolean;
  spiciness: number;
  categoryId: number;
}

export interface ProductResponse {
  id: number;
  name: string;
  products: Product[];
}

export interface CartItem {
  quantity: number;
  price: number;
  product: Product;
}
