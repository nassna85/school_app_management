import { FC } from "react";

import { ButtonStyle } from "@/components/Global/UI/Buttons/Button/Button.style";
import IButton from "@/interfaces/ui/IButton";

const Button: FC<IButton> = ({
  label,
  isLoading,
  type = "submit",
  variant = "default",
  onClick = () => null,
  disabled,
  border,
}) => {
  return (
    <ButtonStyle
      type={type}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      label={isLoading ? "Loading..." : label}
      border={border}
    >
      {label}
    </ButtonStyle>
  );
};

export default Button;
