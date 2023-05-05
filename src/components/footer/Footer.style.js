/* Logic */
import styled from "styled-components";

export const Container = styled.footer`
  padding: 3rem clamp(1rem, 2.5vw, 2.5rem);
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

export const Content = styled.div`
  max-width: 100rem;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  h4 {
    font-size: 1.6em;
  }

  p {
    font-size: 1.4em;
    line-height: normal;
  }
`;
