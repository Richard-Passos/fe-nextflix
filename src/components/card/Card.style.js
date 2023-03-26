/* Logic */
import styled from "styled-components";

export const CardContainer = styled.div`
  width: 20rem;
  height: 40rem;
  padding-bottom: 2.5rem;
  background-color: ${({ theme }) => theme.colors.theme};
  border: 0.1rem solid transparent;
  border-radius: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  overflow: hidden;
  transition: 0.3s;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  :hover {
    cursor: pointer;
    border-color: ${({ theme }) => theme.colors.primary};
    scale: 1.1;
  }

  p {
    padding: 0 1rem;
    font-size: 1.4em;
    font-weight: bold;
    line-height: 2rem;
  }

  small {
    padding: 0 1rem;
    font-size: 1.2em;
  }
`;
