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
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/redux";
import { v4 as uuidv4 } from "uuid";

export default function Sidebar({ isOpen, setIsOpen }) {
  useEffect(() => {
    document.querySelector("body").style.overflowY = isOpen
      ? "hidden"
      : "initial";

    if (isOpen) window.scrollTo(0, 0);
  }, [isOpen]);

  /* Control appTheme state */
  const { theme } = useSelector((state) => state.appTheme);

  const dispatch = useDispatch();
  /*  */

  const itemsContent = [
    <Link key={uuidv4()} href="/search/1">
      <Search className="search-icon" size="2rem" /> Search Media
    </Link>,
    <Link key={uuidv4()} href="/favorites" className="link">
      <Heart size="2rem" /> Favorites
    </Link>,
    <Link key={uuidv4()} href="/" className="link">
      <Home size="2rem" /> Homepage
    </Link>,
  ];

  return (
    <SidebarContainer isOpen={isOpen}>
      <header>
        <X size="3.5rem" onClick={() => setIsOpen(false)} />
      </header>

      <div>
        {itemsContent.map((content) => (
          <Item key={uuidv4()} onClick={() => setIsOpen(false)}>
            {content}
          </Item>
        ))}

        <Item onClick={() => dispatch(toggleTheme("switch-theme"))}>
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
