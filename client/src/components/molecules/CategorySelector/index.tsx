import { FC, useEffect, useState } from "react";
import { BASE_API_ROUTE } from "../../../constants";
import Selector from "../../atoms/Selector";

const SELECTOR_NAME = "category-selector";

const CategorySelector: FC = () => {
  const [categoriesOptions, setCategoriesOptions] = useState([]);

  // TODO - make hook for fetching API
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
      name={SELECTOR_NAME}
      options={categoriesOptions}
      placeholder="Select Category"
    />
  );
};

export default CategorySelector;
