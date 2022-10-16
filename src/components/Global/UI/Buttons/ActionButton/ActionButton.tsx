import { FC, ReactNode } from "react";

type ActionButtonProps = {
  children: ReactNode;
  type: "reset" | "submit" | "button";
  variant: "text-pink-700" | "text-blue-700" | "text-teal-500";
  onClick: () => void;
};

const ActionButton: FC<ActionButtonProps> = ({
  type,
  children,
  variant,
  onClick,
}) => {
  return (
    <button type={type} className={`w-4 mr-2 ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default ActionButton;
