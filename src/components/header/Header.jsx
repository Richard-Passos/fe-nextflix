/* Componenets */
import { HeaderContainer, LogoContainer } from "./Header.style";
import Link from "next/link";
import Image from "next/image";
import { Search } from "@styled-icons/bootstrap";

/* Logic */
import { useContext, useRef } from "react";
import { setThemeContext } from "@/pages/_app";
import { lightTheme, darkTheme } from "@/styles/theme";

export default function Header({ input = false, setState = null }) {
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
          className="search-input"
          type="seasearchInputrch"
          name="searchInput"
          placeholder="Media title"
          onChange={(e) => setState(e.target.value)}
        />
      )}

      <div>
        {!input && (
          <Link href="/search/1">
            <Search className="search-icon" />
          </Link>
        )}

        <nav>
          <Link href="/" className="link">
            Home
          </Link>
        </nav>

        <Image
          src={theme.icon}
          width={20}
          height={20}
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
