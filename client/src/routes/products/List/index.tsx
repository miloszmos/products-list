import { useContext, useEffect, useState } from "react";
import { FiltersContext } from "../../../context/Filters";
import { SearchParams, useFetchProducts } from "./hooks/useFetchProducts";
import ProducItem from "../Item";
import "./styles.scss";

const ProductsList = () => {
  const { filters, setFilters } = useContext(FiltersContext);

  const [searchOptions, setSearchOptions] = useState<SearchParams>({
    page: 1,
  });

  const { products, total } = useFetchProducts(searchOptions);

  useEffect(() => {
    setSearchOptions({
      page: 1,
    });
  }, [filters]);

  const handleResetFilters = () => setFilters({});

  const handleLoadMore = () => {
    setSearchOptions((prev) => ({
      ...prev,
      page: prev.page + 1,
    }));
  };

  return (
    <div className="list">
      <div className="total">
        {!!(filters && Object.entries(filters).length) && (
          <button onClick={handleResetFilters} className="reset">
            Reset Filters
          </button>
        )}
        <span>Total Items: {total}</span>
      </div>
      {products.map((product) => (
        <ProducItem key={product.id} product={product} />
      ))}
      {products.length === 0 && (
        <div className="no-results">
          <p>No Results</p>
        </div>
      )}
      <div className="more">
        {products.length < total && (
          <button onClick={handleLoadMore}>Load More</button>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
