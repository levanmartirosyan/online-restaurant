import Nav from "../../shared/navigation/Nav";
import Cart from "./components/cart/Cart";
import Greeting from "./components/greeting/Greeting";

const CartView = () => {
  return (
    <main>
      <Nav />
      <Greeting text={"My Cart"} />
      <Cart />
    </main>
  );
};

export default CartView;
