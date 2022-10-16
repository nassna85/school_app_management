import styled from "styled-components";

export const ButtonBase = styled.button`
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
  &:hover {
    filter: brightness(0.85);
  }
`;
