import { FC, ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
  size: "xs" | "sm" | "xl" | "2xl";
};

const Title: FC<TitleProps> = ({ children, size }) => {
  return <h1 className={`font-bold text-${size}`}>{children}</h1>;
};

export default Title;
