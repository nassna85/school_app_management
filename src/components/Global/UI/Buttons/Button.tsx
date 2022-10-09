import { FC } from "react";

interface ButtonProps {
  label: string;
  isLoading: boolean;
  type: "submit" | "reset" | "button";
  variant: "bg-pink-700" | "bg-blue-700";
  disabled: boolean;
}

const Button: FC<ButtonProps> = ({
  label,
  isLoading,
  type = "submit",
  variant = "bg-pink-700",
}) => {
  return (
    <button
      type={type}
      className={`${variant} text-white py-2 px-5 rounded mt-2`}
      disabled={isLoading}
    >
      {isLoading ? "Loading..." : label}
    </button>
  );
};

export default Button;
