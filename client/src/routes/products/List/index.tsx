import { useEffect, useState } from "react";
import { BASE_API_ROUTE } from "../../../constants";
import ProducItem, { ProductType } from "../Item";
import "./styles.scss";

const LIMIT = 5;

const ProductsList = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState(1);

  // TODO - make hook for fetching API
  useEffect(() => {
    let ignoreStrictMode = false;
    const apiCall = async () => {
      const response = await fetch(
        `${BASE_API_ROUTE}/products?_page=${page}&_limit=${LIMIT}`
      );
      const total = Number(response.headers.get("X-Total-Count"));
      const data = await response.json();

      if (!ignoreStrictMode) {
        setTotal(total);
        setProducts((prev) => [...prev, ...data]);
      }
    };
    apiCall();

    return () => {
      ignoreStrictMode = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      {products.map((product) => (
        <ProducItem key={product.id} product={product} />
      ))}
      <div className="more">
        {products.length < total && (
          <button onClick={handleLoadMore}>Load More</button>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
