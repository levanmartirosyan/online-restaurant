import "./Product.scss";
import { BadgeCheck, CircleX } from "lucide-react";
import type { Product } from "../../types/productItem";
import { UseProductsProvider } from "../../context/UseProductsProvider";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

const Product = () => {
  const { products, addProductToCart } = UseProductsProvider();

  return (
    <div className="products">
      {products.map((p: Product) => (
        <Card
          key={p.id}
          style={{ width: 300 }}
          cover={<img draggable={false} alt="example" src={p.image} />}
          actions={[
            <div>{p.price}$</div>,

            <ShoppingCartOutlined
              key="cart"
              onClick={() => addProductToCart(p)}
            />,
          ]}
          className="productCard"
        >
          <Meta
            className="spicy"
            title={p.name}
            description={`Spiciness: ${p.spiciness}`}
          />
          <Meta
            className="params"
            description={
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
            }
          />
        </Card>
      ))}
    </div>
  );
};

export default Product;
