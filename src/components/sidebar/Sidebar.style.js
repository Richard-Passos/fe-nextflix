/* Style */
import { rgba } from "polished";

/* Logic */
import styled from "styled-components";

export const SidebarContainer = styled.aside`
  width: 28rem;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.themeDarker};
  color: ${({ theme }) => theme.colors.text};
  transition: right 0.5s linear;

  position: absolute;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-28rem")};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    height: 6rem;
    padding-inline: 3rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0 0.3rem 0.8rem;

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

    .icon-container {
      :before {
        background-color: ${({ theme }) => theme.colors.oppositeTheme};
      }

      .icon-name {
        color: ${({ theme }) => theme.colors.themeDarker};
      }

      :hover {
        color: ${({ theme }) => theme.colors.themeDarker};
      }
    }
  }

  ::before {
    content: "";
    background-color: ${({ theme }) => rgba(theme.colors.oppositeTheme, 0.5)};
    transition: 0.5s ease-in-out;

    position: absolute;
    inset: 0;
    left: ${({ isOpen }) => (isOpen ? "calc(-100vw + 28rem)" : "28rem")};
    z-index: -1;
  }
`;

export const List = styled.ul`
  min-height: calc(100vh - 15rem);
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
