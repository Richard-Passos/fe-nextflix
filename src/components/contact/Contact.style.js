/* Logic */
import styled from "styled-components";

export const Container = styled.div`
  font-size: 1em;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  h4 {
    font-size: 1.6em;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem 1rem;
  }
`;

export const Icon = styled.a`
  width: 6.5rem;
  margin-bottom: -0.8rem;
  padding: 0.8rem 1.6rem;
  isolation: isolate;
  transition: 0.3s;

  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    flex: 0 0 2.5rem;
  }

  .icon-name {
    color: ${({ theme }) => theme.colors.dark};
    font-size: 1.4em;
    font-weight: bold;
    pointer-events: none;
  }

  :before {
    content: "";
    width: 0%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.light};
    border-radius: 2rem;
    transition: width 0.3s;

    position: absolute;
    left: 0;
    z-index: -1;
  }

  :hover {
    width: 13rem;
    color: ${({ theme }) => theme.colors.dark};

    :before {
      width: 100%;
    }
  }
`;
