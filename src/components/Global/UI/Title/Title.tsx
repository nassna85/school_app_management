import { FC, ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
  size: "xs" | "sm" | "xl" | "2xl";
};

const Title: FC<TitleProps> = ({ children, size, ...props }) => {
  return (
    <h1 className={`font-bold text-${size}`} {...props}>
      {children}
    </h1>
  );
};

export default Title;
