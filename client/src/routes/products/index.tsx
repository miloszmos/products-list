import { FC } from "react";
import Card from "../../components/atoms/Card";
import BrandSelector from "../../components/molecules/BrandSelector";
import CategorySelector from "../../components/molecules/CategorySelector";
import ProductsList from "./List";
import "./styles.scss";

const Products: FC = () => {
  return (
    <div className="container">
      <div className="filtering">
        <Card>
          <h1>Filters</h1>
          <div className="selectors">
            <CategorySelector />
            <BrandSelector />
          </div>
        </Card>
      </div>

      <div className="list">
        <Card>
          <ProductsList />
        </Card>
      </div>
    </div>
  );
};

export default Products;
