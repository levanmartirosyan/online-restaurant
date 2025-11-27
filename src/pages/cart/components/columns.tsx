import { TableColumnsType } from "antd";
import { CartItem } from "../../products/types/productItem";

export const Columns = (
  deleteCartItem: (id: number) => void
): TableColumnsType<CartItem> => [
  {
    title: "Product",
    dataIndex: "product",
    render: (product) => (
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: 90, height: 90, objectFit: "cover", borderRadius: 4 }}
        />
        <span>{product.name}</span>
      </div>
    ),
  },
  {
    title: "Qty",
    dataIndex: "quantity",
    sorter: (a, b) => a.quantity - b.quantity,
  },
  {
    title: "Price",
    dataIndex: "price",
    render: (value) => {
      return <div>{value}$</div>;
    },
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Total",
    render: (_, record) => {
      return <div>{record.quantity * record.price}$</div>;
    },
    sorter: (a, b) => a.quantity * a.price - b.quantity * b.price,
  },
  {
    title: "Actions",
    render: (_, record) => (
      <button
        style={{
          padding: "4px 8px",
          background: "red",
          color: "white",
          border: "none",
          borderRadius: 4,
          cursor: "pointer",
        }}
        onClick={() => deleteCartItem(record.product.id)}
      >
        Remove
      </button>
    ),
  },
];
