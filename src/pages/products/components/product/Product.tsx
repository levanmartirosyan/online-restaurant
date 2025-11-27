import "./Product.scss";
import { BadgeCheck, CircleX } from "lucide-react";
import type { Product } from "../../types/productItem";
import { UseProductsProvider } from "../../context/UseProductsProvider";

const Product = () => {
  const { products } = UseProductsProvider();

  return (
    <div className="products">
      {products.map((p: Product) => (
        <div className="productCard" key={p.id}>
          <div className="img">
            <img src={p.image} alt="" />
          </div>
          <div className="params">
            <div className="name">{p.name}</div>
            <div className="spicy">Spiciness: {p.spiciness}</div>
            <div className="nuts">
              <span>
                {p.nuts ? (
                  <BadgeCheck size={16} className="success" />
                ) : (
                  <CircleX size={16} className="fail" />
                )}{" "}
                Nuts
              </span>
              <span>
                {p.vegeterian ? (
                  <BadgeCheck size={16} className="success" />
                ) : (
                  <CircleX size={16} className="fail" />
                )}{" "}
                Vegeterian
              </span>
            </div>
            <div className="btn">
              <div>{p.price}$</div>
              <button>Add To Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
