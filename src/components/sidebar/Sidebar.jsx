/* Components */
import { SidebarContainer, List } from "./Sidebar.style";
import { FiHeart, FiHome, FiMoon, FiSearch, FiSun, FiX } from "react-icons/fi";
import Link from "next/link";

/* Logic */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/redux";
import { v4 as uuidv4 } from "uuid";
import { Contact } from "../contact";

const itemsContent = [
  <Link key={uuidv4()} href="/search/1">
    <FiSearch className="search-icon" size="2rem" /> Search Media
  </Link>,
  <Link key={uuidv4()} href="/favorites/1" className="link">
    <FiHeart size="2rem" /> Favorites
  </Link>,
  <Link key={uuidv4()} href="/" className="link">
    <FiHome size="2rem" /> Homepage
  </Link>,
];

export default function Sidebar({ isOpen, setIsOpen }) {
  useEffect(() => {
    if (isOpen) {
      document.querySelector("body").style.overflowY = "hidden";

      window.scrollTo(0, 0);
    } else {
      document.querySelector("body").style.overflowY = "initial";
    }
  }, [isOpen]);

  /* Theme state */
  const { theme } = useSelector((state) => state.appTheme);

  const dispatch = useDispatch();
  /*  */

  return (
    <SidebarContainer isOpen={isOpen}>
      <header>
        <FiX size="3em" onClick={() => setIsOpen((prevState) => !prevState)} />
      </header>

      <List>
        {itemsContent.map((content) => (
          <li key={uuidv4()} onClick={() => setIsOpen(false)}>
            {content}
          </li>
        ))}

        <li onClick={() => dispatch(toggleTheme("switch-theme"))}>
          <span>
            {theme.title === "light" ? (
              <FiMoon size="2rem" />
            ) : (
              <FiSun size="2rem" />
            )}{" "}
            Switch Theme
          </span>
        </li>
      </List>

      <footer>
        <Contact />
      </footer>
    </SidebarContainer>
  );
}
