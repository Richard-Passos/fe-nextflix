/* Componenets */
import { HeaderContainer, LogoContainer } from "./Header.style";
import { FiMenu } from "react-icons/fi";
import { Sidebar } from "../sidebar";
import Link from "next/link";

/* Logic */
import { useState } from "react";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <HeaderContainer>
      <LogoContainer>
        <Link href="/">
          <h1 className="logo">NextFlix</h1>
        </Link>
      </LogoContainer>

      <FiMenu
        size="3em"
        className="sidebar-opener"
        onClick={() => setIsSidebarOpen(true)}
      />

      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
    </HeaderContainer>
  );
}
