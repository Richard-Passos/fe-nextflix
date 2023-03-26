/* Logic */
import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  min-height: 8vh;
  padding: 1.5rem 3rem;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
`;
