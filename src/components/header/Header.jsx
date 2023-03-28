/* Componenets */
import { HeaderContainer, LogoContainer } from "./Header.style";
import Link from "next/link";
import Image from "next/image";

/* Logic */
import { useContext, useRef } from "react";
import { setThemeContext } from "@/pages/_app";
import { lightTheme, darkTheme } from "@/styles/theme";

export default function Header({ children, input = false, setState = null }) {
  const { theme, setTheme } = useContext(setThemeContext);

  const inputSearch = useRef();

  return (
    <HeaderContainer>
      <LogoContainer>
        <h1 className="logo">NextFlix</h1>
      </LogoContainer>

      {input && (
        <input
          ref={inputSearch}
          className="search"
          type="search"
          name="searchMovie"
          placeholder="Media name"
          onChange={(e) => setState(e.target.value)}
        />
      )}

      <div>
        <nav>
          <Link
            href="/"
            className="link"
            onClick={() => {
              if (input) {
                setState("");
                inputSearch.current.value = "";
              }
            }}
          >
            Home
          </Link>
        </nav>

        <Image
          src={theme.icon}
          width={25}
          height={25}
          alt="theme-icon"
          className="theme-icon"
          onClick={() =>
            setTheme((prevTheme) =>
              prevTheme.title === "light" ? darkTheme : lightTheme
            )
          }
        />
      </div>
    </HeaderContainer>
  );
}
