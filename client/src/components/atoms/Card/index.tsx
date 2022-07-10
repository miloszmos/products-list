import { FC, PropsWithChildren } from "react";
import "./styles.scss";

const Card: FC<PropsWithChildren> = ({ children }) => {
  return <div className="card">{children}</div>;
};

export default Card;
