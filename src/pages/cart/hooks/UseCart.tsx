import { useEffect, useState } from "react";
import { CartItem } from "../../products/types/productItem";

const UseCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const baseUrl = "https://restaurant.stepprojects.ge/api/";

  useEffect(() => {
    const getCartItems = async () => {
      try {
        const response = await fetch(baseUrl + "Baskets/GetAll");
        const data: CartItem[] = await response.json();
        setCartItems(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getCartItems();
  }, []);

  const deleteCartItem = async (id: number) => {
    try {
      await fetch(baseUrl + `Baskets/DeleteProduct/${id}`, {
        method: "DELETE",
      });
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.product.id !== id)
      );
    } catch (err) {
      console.log(err);
    }
  };

  return { cartItems, deleteCartItem };
};

export default UseCart;
