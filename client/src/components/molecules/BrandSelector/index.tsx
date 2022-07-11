import { FC, useEffect, useState } from "react";
import { BASE_API_ROUTE, BRAND_SELECTOR_NAME } from "../../../constants";
import Selector from "../../atoms/Selector";

const BrandSelector: FC = () => {
  const [brandOptions, setBrandOptions] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      const products = await fetch(`${BASE_API_ROUTE}/products/brands`);
      const data = await products.json();
      setBrandOptions(data);
    };
    apiCall();
  }, []);

  return (
    <Selector
      name={BRAND_SELECTOR_NAME}
      options={brandOptions}
      placeholder="Select Brand"
    />
  );
};

export default BrandSelector;
