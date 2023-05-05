/* Style */
import { rgba } from "polished";

/* Logic */
import styled from "styled-components";

export const Form = styled.form`
  width: min(35rem, 80vw);
  margin: -4.7rem auto 0;
  padding-inline: 0.8em;
  background-color: ${({ theme }) => theme.colors.themeLighter};
  border-radius: 2rem;
  overflow: hidden;
  transition: border-radius 0.5s ease;

  position: relative;

  display: flex;
  align-items: center;

  button {
    border: none;
    background: none;
    color: ${({ theme }) => rgba(theme.colors.text, 0.75)};

    svg {
      margin-top: 0.3rem;
    }

    :hover {
      cursor: pointer;
    }
  }

  .input {
    width: 100%;
    padding: 1.2rem 0.6rem;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.4rem;
    border: none;

    ::placeholder {
      color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
    }
  }

  [type="reset"] {
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
  }

  /*Shown X button when typing */
  .input:not(:placeholder-shown) + [type="reset"] {
    opacity: 1;
    pointer-events: initial;
  }

  ::before {
    content: "";
    height: 0.2rem;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: inset-inline 0.25s ease;

    position: absolute;
    bottom: 0;
    inset-inline: 50%;
  }

  :focus-within {
    border-radius: 0.5rem;

    :before {
      inset-inline: 0;
    }
  }
`;
