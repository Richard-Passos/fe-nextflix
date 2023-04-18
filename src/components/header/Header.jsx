/* Componenets */
import { HeaderContainer, LogoContainer } from "./Header.style";
import { Menu } from "@styled-icons/boxicons-regular";
import { Sidebar } from "../sidebar";

/* Logic */
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <HeaderContainer>
      <LogoContainer>
        <Link href="/">
          <h1 className="logo">NextFlix</h1>
        </Link>
      </LogoContainer>

      <div>
        <nav></nav>

        <Menu
          size="3.5rem"
          className="open-sidebar"
          onClick={() => setIsSidebarOpen(true)}
        />
      </div>

      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
    </HeaderContainer>
  );
}
