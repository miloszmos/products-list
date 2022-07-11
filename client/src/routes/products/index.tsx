import { FC, useContext } from "react";
import Badge from "../../components/atoms/Badge";
import Card from "../../components/atoms/Card";
import BrandSelector from "../../components/molecules/BrandSelector";
import CategorySelector from "../../components/molecules/CategorySelector";
import { FiltersContext } from "../../context/Filters";
import ProductsList from "./List";
import "./styles.scss";

const Products: FC = () => {
  const { filters } = useContext(FiltersContext);
  const filterValues = filters && Object.values(filters);

  return (
    <div className="container">
      <Card>
        <div className="top">
          <h1>Filters</h1>
          <div>
            {!!filterValues?.length && (
              <>
                <span>active:</span>
                {filterValues.map((filter) => (
                  <Badge key={filter}>{filter}</Badge>
                ))}
              </>
            )}
          </div>
        </div>
        <div className="selectors">
          <CategorySelector />
          <BrandSelector />
        </div>
      </Card>
      <Card>
        <ProductsList />
      </Card>
    </div>
  );
};

export default Products;
