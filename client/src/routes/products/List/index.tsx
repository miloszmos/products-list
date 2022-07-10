import { useEffect, useState } from "react";
import { BASE_API_ROUTE } from "../../../constants";
import ProducItem, { ProductType } from "../Item";

const ProductsList = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  // TODO - make hook for fetching API
  useEffect(() => {
    const apiCall = async () => {
      const products = await fetch(`${BASE_API_ROUTE}/products`);
      const data = await products.json();

      setProducts(data);
    };

    apiCall();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <ProducItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
