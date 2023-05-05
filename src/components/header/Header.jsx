/* Componenets */
import { Container, Logo } from "./Header.style";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { Sidebar } from "@/components";

/* Logic */
import { useState } from "react";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Container>
      <Logo>
        <Link href="/">
          <h1>NextFlix</h1>
        </Link>
      </Logo>

      <FiMenu
        size="3em"
        className="sidebar-opener"
        onClick={() => setIsSidebarOpen(true)}
      />

      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
    </Container>
  );
}
