import styled, { css } from "styled-components";

import ILinkButton from "@/interfaces/ui/ILinkButton";

export const LinkButtonStyle = styled.div<ILinkButton>`
  color: #fff;
  padding: 0.5rem 1.25rem;
  display: inline-flex;
  text-align: center;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: filter 0.3s ease-in-out;
  background-color: ${(props) => props.theme.color.default};
  border-radius: ${(props) => props.theme.borderRadius.default};
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
  &:hover {
    filter: brightness(0.85);
  }
`;
