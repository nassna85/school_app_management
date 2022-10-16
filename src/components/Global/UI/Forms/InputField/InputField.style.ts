import styled, { css } from "styled-components";
import IInputField from "@/interfaces/ui/IInputField";

export const InputFieldStyle = styled.input<IInputField>`
  border-radius: ${(props) => props.theme.borderRadius.rounded};
  appearance: none;
  position: relative;
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${(props) => props.theme.color.gray_1};
  color: ${(props) => props.theme.color.body};
  font-size: 0.875rem;
  line-height: 1.25rem;
  &::placeholder {
    color: ${(props) => props.theme.color.gray_2};
  }
  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.color.default};
  }
  ${(props) =>
    props.error &&
    css`
      border: 1px solid ${(props) => props.theme.color.danger};
    `}
`;
