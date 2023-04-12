/* Style */
import { lighten, rgba, shade } from "polished";
import { IconContainer as FooterIconContainer } from "../footer";

/* Logic */
import styled from "styled-components";

export const SidebarContainer = styled.aside`
  width: 28rem;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.themeDarker};
  color: ${({ theme }) => theme.colors.text};
  transition: ${({ isOpen }) => (isOpen ? "0.5s linear" : "1s ease-in")};

  position: absolute;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "min(-28rem, -100vw)")};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    min-height: 10vh;
    padding: 0 3rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0 0.3rem 0.8rem;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    svg {
      transition: 0.3s;
      :hover {
        cursor: pointer;
        color: ${({ theme }) =>
          theme.title === "light"
            ? lighten(0.5, theme.colors.text)
            : shade(0.5, theme.colors.text)};
      }
    }
  }

  > div {
    min-height: 80vh;
    padding: 2.4rem;
    font-size: 1.6rem;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  :before {
    content: "";
    background-color: ${({ theme }) => rgba(theme.colors.oppositeTheme, 0.5)};
    transition: ${({ isOpen }) => (isOpen ? "1s linear" : "0.5s linear")};

    position: absolute;
    inset: -100vh 100% 0
      ${({ isOpen }) =>
        isOpen ? "calc(-100vw + 28rem)" : "calc(100vw + 28rem)"};
  }

  footer {
    min-height: 10vh;
    color: ${({ theme }) => theme.colors.oppositeTheme};

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    h3 {
      font-size: 1.4em;
    }

    div {
      display: flex;
    }
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  > * {
    transition: 0.3s;
  }

  :hover {
    cursor: pointer;
    color: ${({ theme }) =>
      theme.title === "light"
        ? lighten(0.5, theme.colors.text)
        : shade(0.5, theme.colors.text)};
  }
`;

export const IconContainer = styled(FooterIconContainer)`
  .icon-name {
    color: ${({ theme }) => theme.colors.themeDarker};
  }

  :before {
    background-color: ${({ theme }) => theme.colors.oppositeTheme};
  }

  :hover {
    color: ${({ theme }) => theme.colors.themeDarker};
  }
`;
