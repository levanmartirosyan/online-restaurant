import { Table } from "antd";
import { Columns } from "../columns";
import UseCart from "../../hooks/UseCart";
import "./Cart.scss";

const Cart = () => {
  const { cartItems, deleteCartItem } = UseCart();
  return (
    <section className="cart">
      <Table
        columns={Columns(deleteCartItem)}
        dataSource={cartItems}
        pagination={false}
        size="small"
        rowKey={(record) => record.product.id}
      />
    </section>
  );
};

export default Cart;
