/* Logic */
import styled from "styled-components";

export const SearchInput = styled.input`
  width: min(35rem, 80vw);
  margin: -5rem auto;
  padding: 0.8rem 1.6rem;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  font-size: 1.4em;
  border: 0.1rem solid ${({ theme }) => theme.colors.oppositeTheme};
  border-radius: 2rem;
  caret-color: ${({ theme }) => theme.colors.primary};
  transition: 0.3s;

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  ::-webkit-search-cancel-button {
    cursor: pointer;
  }
`;
