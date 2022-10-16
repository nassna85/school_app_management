import styled from "styled-components";

import IInputLabel from "@/interfaces/ui/IInputLabel";

export const InputLabelStyle = styled.label<IInputLabel>`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.color.gray_3};
`;
