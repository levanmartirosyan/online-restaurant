import "./Categories.scss";
import UseCategories from "../../hooks/UseCategories";
import { UseProductsProvider } from "../../context/UseProductsProvider";

type Props = {
  name: string;
  id: number;
};

const Categories = () => {
  const { getAllProducts, getProductsById } = UseProductsProvider();
  const { categories } = UseCategories();

  return (
    <section className="categoriesSec">
      <div className="categories">
        <div className="category" onClick={getAllProducts}>
          All
        </div>
        {categories.map((c: Props) => (
          <div
            className="category"
            key={c.id}
            onClick={() => getProductsById(c.id)}
          >
            {c.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
