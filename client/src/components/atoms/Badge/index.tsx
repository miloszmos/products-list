import { FC, PropsWithChildren } from "react";
import "./styles.scss";

const Badge: FC<PropsWithChildren> = ({ children }) => {
  return <div className="badge">{children}</div>;
};

export default Badge;
