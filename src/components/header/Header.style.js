/* style */
import { rgba } from "polished";

/* Logic */
import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 1.5rem 3rem;
  background-color: ${({ theme }) => rgba(theme.colors.dark, 0.95)};
  color: ${({ theme }) => theme.colors.light};

  position: relative;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .sidebar-opener {
    transition: 0.3s;

    :hover {
      cursor: pointer;
      color: ${({ theme }) => rgba(theme.colors.light, 0.5)};
    }
  }
`;

export const LogoContainer = styled.div`
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.primaryLighter},
    ${({ theme }) => theme.colors.primary}
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* To be behind sidebar */
  position: relative;
  z-index: -1;
  /*  */

  .logo {
    font-size: 3em;
  }
`;
