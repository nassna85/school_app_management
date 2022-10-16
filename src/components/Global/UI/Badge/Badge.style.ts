import styled, { css } from "styled-components";
import IBadge from "@/interfaces/ui/IBadge";

export const BadgeStyle = styled.span<IBadge>`
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #fff;
  background-color: ${(props) => props.theme.color.default};
  ${(props) =>
    props.border === "rounded" &&
    css`
      border-radius: ${(props) => props.theme.borderRadius.rounded};
    `}
  ${(props) =>
    props.border === "rounded-50" &&
    css`
      border-radius: ${(props) => props.theme.borderRadius.rounded_50};
    `}
  ${(props) =>
    props.variant === "primary" &&
    css`
      background-color: ${(props) => props.theme.color.primary};
    `}
  ${(props) =>
    props.variant === "secondary" &&
    css`
      background-color: ${(props) => props.theme.color.secondary};
    `}
`;
