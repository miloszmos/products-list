import { FC, useEffect, useState } from "react";
import { BASE_API_ROUTE, CATEGORY_SELECTOR_NAME } from "../../../constants";
import Selector from "../../atoms/Selector";

const CategorySelector: FC = () => {
  const [categoriesOptions, setCategoriesOptions] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      const products = await fetch(`${BASE_API_ROUTE}/products/categories`);
      const data = await products.json();
      setCategoriesOptions(data);
    };
    apiCall();
  }, []);

  return (
    <Selector
      name={CATEGORY_SELECTOR_NAME}
      options={categoriesOptions}
      placeholder="Select Category"
    />
  );
};

export default CategorySelector;
