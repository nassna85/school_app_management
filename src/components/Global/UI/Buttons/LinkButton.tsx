import { Link } from "react-router-dom";
import { FC, ReactNode } from "react";

type LinkButtonProps = {
  children: ReactNode;
  path: string;
  variant: "bg-pink-700" | "bg-blue-700";
};

const LinkButton: FC<LinkButtonProps> = ({ children, path, variant }) => {
  return (
    <Link className={`${variant} text-white py-2 px-5 rounded mt-2`} to={path}>
      {children}
    </Link>
  );
};

export default LinkButton;
