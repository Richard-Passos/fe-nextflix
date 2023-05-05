/* Components */
import { Container, List } from "./Sidebar.style";
import Link from "next/link";
import { FiMoon, FiSun, FiHeart, FiSearch, FiX } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { Contact } from "../contact";

/* Logic */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { toggleTheme } from "@/redux";

const items = [
  {
    href: "/search/1",
    content: (
      <>
        <FiSearch className="search-icon" size="1.5em" /> Search Media
      </>
    ),
  },
  {
    href: "/favorites/1",
    content: (
      <>
        <FiHeart size="1.5em" /> Favorites
      </>
    ),
  },
  {
    href: "/",
    content: (
      <>
        <AiOutlineHome size="1.5em" /> Homepage
      </>
    ),
  },
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

  const themeIcon =
    theme.title === "light" ? <FiMoon size="1.5em" /> : <FiSun size="1.5em" />;

  const dispatch = useDispatch();
  /*  */

  return (
    <Container isOpen={isOpen}>
      <header>
        <FiX size="3em" onClick={() => setIsOpen((prevState) => !prevState)} />
      </header>

      <List>
        {items.map(({ href, content }) => (
          <li key={uuidv4()} onClick={() => setIsOpen(false)}>
            <Link href={href}>{content}</Link>
          </li>
        ))}

        <li onClick={() => dispatch(toggleTheme("switch-theme"))}>
          <span>{themeIcon} Switch Theme</span>
        </li>
      </List>

      <footer>
        <Contact />
      </footer>
    </Container>
  );
}
