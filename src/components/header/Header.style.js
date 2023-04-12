/* style */
import { lighten, rgba, shade } from "polished";

/* Logic */
import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  min-height: 10vh;
  padding: 1.5rem 3rem;
  background-color: ${({ theme }) => rgba(theme.colors.dark, 0.95)};
  color: ${({ theme }) => theme.colors.light};

  position: relative;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .search-input {
    width: 95%;
    max-width: 35rem;
    padding: 0.8rem 1.6rem;
    background-color: ${({ theme }) => theme.colors.light};
    font-size: 1.4em;
    border-radius: 0.5rem;

    ::placeholder {
      color: ${({ theme }) => shade(0.1, theme.colors.gray)};
    }
  }

  .open-sidebar {
    transition: 0.3s;

    :hover {
      cursor: pointer;
      color: ${({ theme }) =>
        theme.title === "light"
          ? lighten(0.5, theme.colors.text)
          : shade(0.5, theme.colors.text)};
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

  .logo {
    font-size: 3em;
  }
`;
