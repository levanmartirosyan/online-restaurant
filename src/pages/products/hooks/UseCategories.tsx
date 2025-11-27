import { useEffect, useState } from "react";

type Category = {
  name: string;
  id: number;
};

const UseCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const baseUrl = "https://restaurant.stepprojects.ge/api/";

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const response = await fetch(baseUrl + "Categories/GetAll");
      const data: Category[] = await response.json();
      setCategories(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return { categories };
};

export default UseCategories;
