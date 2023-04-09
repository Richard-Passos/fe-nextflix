/* Components */
import { SidebarContainer, Item, IconContainer } from "./Sidebar.style";
import {
  Heart,
  Home,
  Moon,
  Search,
  Sun,
  X,
} from "@styled-icons/boxicons-regular";
import Link from "next/link";
import { Github, LinkedinSquare } from "@styled-icons/boxicons-logos";

/* Logic */
import { useContext, useEffect } from "react";
import { themeContext } from "../layout/Layout";

export default function Sidebar({ isOpen, setIsOpen }) {
  const { theme, toggleTheme } = useContext(themeContext);

  useEffect(() => {
    document.querySelector("body").style.overflowY = isOpen
      ? "hidden"
      : "initial";

    if (isOpen) window.scrollTo(0, 0);
  }, [isOpen]);

  return (
    <SidebarContainer isOpen={isOpen}>
      <header>
        <X size="3rem" onClick={() => setIsOpen(false)} />
      </header>

      <div>
        <Item>
          <Link href="/search/1">
            <Search className="search-icon" size="2rem" /> Search Media
          </Link>
        </Item>

        <Item>
          <Link href="/" className="link">
            <Heart size="2rem" /> Favorites
          </Link>
        </Item>

        <Item>
          <Link href="/" className="link">
            <Home size="2rem" /> Homepage
          </Link>
        </Item>

        <Item onClick={toggleTheme}>
          {theme.title === "light" ? <Moon size="2rem" /> : <Sun size="2rem" />}{" "}
          Switch Theme
        </Item>
      </div>

      <footer>
        <h3>Make Contact</h3>

        <div>
          <IconContainer href="https://github.com/Richard-Passos">
            <Github size="3em" />
            <p className="icon-name">Github</p>
          </IconContainer>

          <IconContainer href="https://www.linkedin.com/in/richard-passos-91703624b/">
            <LinkedinSquare size="3em" />
            <p className="icon-name">LinkedIn</p>
          </IconContainer>
        </div>
      </footer>
    </SidebarContainer>
  );
}
