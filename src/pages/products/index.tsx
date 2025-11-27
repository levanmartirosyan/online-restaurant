import Nav from "../../shared/navigation/Nav";
import Categories from "./components/categories/Categories";
import Greeting from "./components/greeting/Greeting";
import Product from "./components/product/Product";

const ProductsView = () => {
  return (
    <main>
      <Nav />
      <Greeting text={"Fast and efficient, online ordering you must try."} />
      <Categories />
      <Product />
    </main>
  );
};

export default ProductsView;
