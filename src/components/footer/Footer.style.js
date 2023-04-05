/* Logic */
import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  padding: 3rem 1rem;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  font-size: 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

export const Content = styled.div`
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem 1rem;
  }
`;

export const IconContainer = styled.a`
  width: 8rem;
  margin-bottom: -1rem;
  padding: 0.5rem 1rem;
  transition: 0.3s;
  isolation: isolate;

  position: relative;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .icon {
    min-width: 3em;
    max-width: 3em;
  }

  .icon-name {
    color: ${({ theme }) => theme.colors.dark};
    font-size: 0;
    transition: 0.3s;
  }

  :before {
    content: "";
    width: 0%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.light};
    border-radius: 0.5rem;
    transition: 0.3s;

    position: absolute;
    left: 0;
    z-index: -1;
  }

  :hover {
    width: 15rem;
    color: ${({ theme }) => theme.colors.dark};

    .icon-name {
      font-size: initial;
    }

    :before {
      width: 100%;
    }
  }
`;
