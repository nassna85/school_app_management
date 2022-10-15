import { FC } from "react";

import ILinkButton from "@/interfaces/ui/ILinkButton";
import { LinkButtonStyle } from "@/components/Global/UI/Buttons/LinkButton/LinkButton.style";
import { Link } from "react-router-dom";

const LinkButton: FC<ILinkButton> = ({ children, path, variant, border }) => {
  return (
    <LinkButtonStyle path={path} variant={variant} border={border}>
      <Link to={path}>{children}</Link>
    </LinkButtonStyle>
  );
};

export default LinkButton;
