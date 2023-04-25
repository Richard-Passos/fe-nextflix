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
    justify-content: center;
  }
`;

export const IconContainer = styled.a`
  width: 8rem;
  margin-bottom: -1rem;
  padding: 1rem 2rem;
  transition: 0.3s;
  isolation: isolate;

  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  :before {
    content: "";
    width: 0%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.light};
    border-radius: 2rem;
    transition: 0.3s;

    position: absolute;
    left: 0;
    z-index: -1;
  }

  .icon-name {
    color: ${({ theme }) => theme.colors.dark};
    font-size: 1.6em;
    font-weight: bold;

    position: absolute;
    right: 2rem;
    z-index: -1;
  }

  :hover {
    width: 15rem;
    color: ${({ theme }) => theme.colors.dark};

    :before {
      width: 100%;
    }
  }
`;
