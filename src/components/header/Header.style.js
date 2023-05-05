/* style */
import { rgba } from "polished";

/* Logic */
import styled from "styled-components";

export const Container = styled.header`
  padding: 1.5rem 3rem;
  color: ${({ theme }) => theme.colors.light};

  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .sidebar-opener {
    transition: 0.3s;

    z-index: 2;

    :hover {
      cursor: pointer;
      color: ${({ theme }) => rgba(theme.colors.light, 0.75)};
    }
  }

  ::before,
  ::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.dark};

    position: absolute;
    left: 0;
    z-index: -1;
  }

  ::after {
    background-color: ${({ theme }) => rgba(theme.colors.dark, 0.5)};

    z-index: 1;
  }
`;

export const Logo = styled.div`
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.primaryLighter},
    ${({ theme }) => theme.colors.primary}
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  z-index: 2;

  h1 {
    font-size: 3em;
  }
`;
