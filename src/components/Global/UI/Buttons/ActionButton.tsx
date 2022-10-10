import { FC, ReactNode } from "react";

type ActionButtonProps = {
  children: ReactNode;
  type: "reset" | "submit" | "button";
  variant: "text-pink-700" | "text-blue-700" | "text-teal-500";
};

const ActionButton: FC<ActionButtonProps> = ({ type, children, variant }) => {
  return (
    <button type={type} className={`w-4 mr-2 ${variant}`}>
      {children}
    </button>
  );
};

export default ActionButton;
