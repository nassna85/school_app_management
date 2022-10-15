import styled, { css } from "styled-components";

import IButton from "@/interfaces/ui/IButton";
import { ButtonBase } from "@/components/Global/UI/Buttons/ButtonBase.style";

export const ButtonStyle = styled(ButtonBase)<IButton>`
  ${(props) =>
    props.variant === "primary" &&
    css`
      background-color: ${props.theme.color.primary};
    `};
  ${(props) =>
    props.variant === "secondary" &&
    css`
      background-color: ${props.theme.color.secondary};
    `};
  ${(props) =>
    props.border === "rounded" &&
    css`
      border-radius: ${props.theme.borderRadius.rounded};
    `};
  ${(props) =>
    props.border === "rounded-50" &&
    css`
      border-radius: ${props.theme.borderRadius.rounded_50};
    `};
  &:disabled {
    ${(props) =>
      props.disabled &&
      css`
        opacity: 0.6;
        cursor: not-allowed;
      `};
  }
`;
