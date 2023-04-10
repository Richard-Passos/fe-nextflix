/* Componenets */
import { HeaderContainer, LogoContainer } from "./Header.style";
import { Menu } from "@styled-icons/boxicons-regular";
import { Sidebar } from "../sidebar";

/* Logic */
import { useRef, useState } from "react";
import Link from "next/link";

export default function Header({ input = false, setState = null }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const inputSearch = useRef();

  return (
    <HeaderContainer>
      <LogoContainer>
        <Link href="/">
          <h1 className="logo">NextFlix</h1>
        </Link>
      </LogoContainer>

      {input && (
        <input
          ref={inputSearch}
          className="search-input"
          type="search"
          placeholder="Media title"
          onChange={(e) => setState(e.target.value)}
        />
      )}

      <div>
        <nav></nav>

        <Menu
          size="3rem"
          className="open-sidebar"
          onClick={() => setIsSidebarOpen(true)}
        />
      </div>

      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
    </HeaderContainer>
  );
}
