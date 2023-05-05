/* Style */
import { rgba } from "polished";

/* Logic */
import styled from "styled-components";

export const Container = styled.aside`
  --bg-color: ${({ theme }) => theme.colors.themeDarker};

  width: 28rem;
  height: 100svh;
  color: ${({ theme }) => theme.colors.text};
  transition: right 0.5s linear;

  position: absolute;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-28rem")};
  z-index: 100;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    height: 6rem;
    padding-inline: 3rem;
    box-shadow: 0 0.8rem 2.4rem rgba(0, 0, 0, 0.15);

    display: flex;
    justify-content: flex-end;
    align-items: center;

    svg {
      transition: 0.3s;

      :hover {
        cursor: pointer;
        color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
      }
    }
  }

  footer {
    height: 9rem;

    .icon {
      :before {
        background-color: ${({ theme }) => theme.colors.oppositeTheme};
      }

      .icon-name {
        color: var(--bg-color);
      }

      :hover {
        color: var(--bg-color);
      }
    }
  }

  ::before,
  ::after {
    content: "";
    height: 100%;

    position: absolute;
    right: 0;
    z-index: -1;
  }

  ::before {
    background-color: ${({ theme }) => rgba(theme.colors.oppositeTheme, 0.5)};
    transition: left 0.5s ease-in-out;

    left: ${({ isOpen }) => (isOpen ? "calc(-100vw + 28rem)" : "28rem")};
  }

  ::after {
    width: 100%;
    background-color: var(--bg-color);
  }
`;

export const List = styled.ul`
  min-height: calc(100svh - 15rem);
  padding: 2.4rem;
  font-size: 1.4rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  li {
    > :first-child {
      transition: 0.3s;

      display: flex;
      align-items: center;
      gap: 1rem;
    }

    :hover {
      cursor: pointer;
      color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
    }
  }
`;
