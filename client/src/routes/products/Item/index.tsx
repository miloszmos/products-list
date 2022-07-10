import { FC } from "react";
import Badge from "../../../components/atoms/Badge";
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

const getStockStatus = (stock: number) => {
  if (stock > 50) {
    return "green";
  } else if (stock > 25) {
    return "orange";
  } else {
    return "red";
  }
};

const calculatePrice = (price: number, percentage: number) => {
  return (price - (price * percentage) / 100).toFixed(2);
};

const ProducItem: FC<ProductProps> = ({
  product: {
    title,
    description,
    price,
    discountPercentage,
    thumbnail,
    stock,
    category,
  },
}) => {
  return (
    <div className="item">
      <div className="picture">
        <img src={thumbnail} alt="product" />
      </div>
      <div className="info">
        <div>
          <p className="title">{title}</p>
          <p className="desc">{description}</p>
        </div>
        <div className="bottom">
          <Badge>{category}</Badge>
          <div>
            <div className="price">
              <span
                className={`base-price ${
                  discountPercentage > 0 ? "discount" : ""
                }`}
              >
                ${price}
              </span>
              <span>${calculatePrice(price, discountPercentage)}</span>
            </div>
            <div className="stock">
              Stock: <span className={`${getStockStatus(stock)}`}>{stock}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProducItem;
