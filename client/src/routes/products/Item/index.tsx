import { FC } from "react";
import "./styles.scss";

export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

interface ProductProps {
  product: ProductType;
}

const ProducItem: FC<ProductProps> = ({
  product: { title, description, price, discountPercentage, thumbnail },
}) => {
  return (
    <div className="item">
      <img src={thumbnail} alt="product" />
      <div className="info">
        <div>
          <p className="title">{title}</p>
          <p className="desc">{description}</p>
        </div>
        <div>
          <div className={`price ${discountPercentage > 0 ? "discount" : ""}`}>
            {price}
          </div>
          <div>price after discount</div>
          <div>In stock with color </div>
        </div>
      </div>
    </div>
  );
};

export default ProducItem;
