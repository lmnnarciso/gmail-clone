"use client";
import { useState } from "react";
import { Navbar } from "./navbar";
import { SideNav } from "./sidenav";

export function NavGroup() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar isOpen={isOpen} toggle={toggle} />
      <SideNav isOpen={isOpen} />
    </>
  );
}
