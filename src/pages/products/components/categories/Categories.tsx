import "./Categories.scss";
import UseCategories from "../../hooks/UseCategories";
import { UseProductsProvider } from "../../context/UseProductsProvider";
import { Segmented } from "antd";
import { useMemo, useState } from "react";

type Category = {
  name: string;
  id: number;
};

const Categories = () => {
  const { getAllProducts, getProductsById } = UseProductsProvider();
  const { categories } = UseCategories();

  const options = useMemo(() => {
    const opts = [
      { label: "All", value: "all" },
      ...categories.map((c: Category) => ({
        label: c.name,
        value: String(c.id),
      })),
    ];
    return opts;
  }, [categories]);

  const [value, setValue] = useState<string | number>("all");

  const handleChange = (val: string | number) => {
    setValue(val);
    if (val === "all") {
      getAllProducts();
    } else {
      const id = Number(val);
      if (!Number.isNaN(id)) getProductsById(id);
    }
  };

  return (
    <section className="categoriesSec">
      <div className="categories">
        <Segmented
          size="large"
          options={options}
          value={value}
          onChange={handleChange}
        />
      </div>
    </section>
  );
};

export default Categories;
