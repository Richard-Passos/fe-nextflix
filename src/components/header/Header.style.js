/* Logic */
import { shade } from "polished";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  min-height: 8vh;
  padding: 1.5rem 3rem;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem 5rem;

  @media screen and (max-width: 600px) {
    padding: 1.5rem;

    flex-direction: column;
  }

  .search {
    width: 95%;
    max-width: 35rem;
    padding: 0.5rem 1rem;
    background-color: ${({ theme }) => theme.colors.light};
    border-radius: 0.5rem;
    font-size: 1.4em;

    ::-webkit-input-placeholder {
      color: ${({ theme }) => shade(0.1, theme.colors.gray)};
    }
  }

  .theme-icon {
    cursor: pointer;
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }

  nav {
    padding: 0.8rem 0;
    .link {
      padding: 0.8rem 1.6rem;
      border: 0.1rem solid ${({ theme }) => theme.colors.light};
      border-radius: 0.5rem;
      font-size: 1.4em;
      transition: 0.3s;

      :hover {
        cursor: pointer;
        background-color: ${({ theme }) => shade(0.7, theme.colors.light)};
      }
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
