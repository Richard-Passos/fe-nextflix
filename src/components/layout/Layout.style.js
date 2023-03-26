/* Logic */
import styled from "styled-components";

export const LayoutContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.themeDarker};
  color: ${({ theme }) => theme.colors.text};

  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;
