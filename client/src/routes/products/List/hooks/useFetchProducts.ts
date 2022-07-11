import { useState, useEffect, useContext } from "react";
import { BASE_API_ROUTE } from "../../../../constants";
import { FiltersContext } from "../../../../context/Filters";
import { ProductType } from "../../Item";

export type SearchParams = {
  page: number;
  limit?: string;
};

export const useFetchProducts = (options: SearchParams) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [total, setTotal] = useState<number>(0);
  const { filters } = useContext(FiltersContext);

  const { page, limit = 5 } = options;

  useEffect(() => {
    let ignoreStrictMode = false;
    let searchQuery = "";

    if (filters) {
      for (const [key, value] of Object.entries(filters)) {
        searchQuery += `&${key}=${value}`;
      }
    }

    const apiCall = async () => {
      const response = await fetch(
        `${BASE_API_ROUTE}/products?_page=${page}&_limit=${limit}${searchQuery}`
      );
      const data = await response.json();
      const total = Number(response.headers.get("X-Total-Count"));
      setTotal(total);

      if (!ignoreStrictMode) {
        if (page > 1) {
          setProducts((prev) => [...prev, ...data]);
        } else {
          setProducts([...data]);
        }
      }
    };
    apiCall();
    return () => {
      ignoreStrictMode = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, filters]);

  return {
    products,
    total,
  };
};
