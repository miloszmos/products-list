import { createContext, PropsWithChildren, useState } from "react";
import { BRAND_SELECTOR_NAME, CATEGORY_SELECTOR_NAME } from "../constants";

type Filters = {
  [BRAND_SELECTOR_NAME]?: string;
  [CATEGORY_SELECTOR_NAME]?: string;
};

export type FiltersContent = {
  filters?: Filters;
  setFilters: (c: Filters) => void;
};

export const FiltersContext = createContext<FiltersContent>({
  filters: {},
  setFilters: () => {},
});

export const FiltersProvider = ({ children }: PropsWithChildren) => {
  const [filters, setFilters] = useState({});

  const value = {
    filters,
    setFilters,
  };

  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  );
};
