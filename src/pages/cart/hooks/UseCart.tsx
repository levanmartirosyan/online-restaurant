import { useEffect, useState } from "react";
import { CartItem } from "../../products/types/productItem";
import { useToast } from "../../../shared/toast/Toast";

const UseCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const toast = useToast();

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
      const res = await fetch(baseUrl + `Baskets/DeleteProduct/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        // show error message with status
        toast.open({
          type: "error",
          content: `Failed to remove item (status ${res.status}).`,
        });
        return;
      }

      toast.open({
        type: "success",
        content: "Item was removed from your cart.",
      });

      // refresh cart after successful delete
      const response = await fetch(baseUrl + "Baskets/GetAll");
      const data: CartItem[] = await response.json();
      setCartItems(data);
      console.log(data);
    } catch (err) {
      console.log(err);
      toast.open({
        type: "error",
        content: "Could not remove item. Please try again.",
      });
    }
  };

  return { cartItems, deleteCartItem };
};

export default UseCart;
