"use client";

import React from "react";
import {
  Link as UiLink,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/react";
import Image from "next/image";
import logo from "../../../public/shahrear_logo.png";
import Link from "next/link";

export default function NavbarCom() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "About", "Project", "Blog"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="navbarParent">
      <NavbarContent>
        <NavbarBrand className="cursor-pointer">
          <Link href="/">
            <Image
              src={logo}
              width={120}
              height={50}
              alt="Shahrear ahamed logo"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              color="foreground"
              href="#"
              className="text-sm hover:text-primary duration-500">
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden md:flex">
          <button className="cursor-pointer rounded-lg justify-center bg-transparent -skew-x-12 py-3 px-4 border-2 border-white group hover:border-primary duration-500">
            <span className="text-sm skew-x-12 group-hover:text-primary duration-500">
              Let&apos;s Talk
            </span>
          </button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className={`!h-[30%] ${isMenuOpen ? "block" : "hidden"}`}>
        {menuItems.map((item, index) => (
          <NavbarItem
            key={`${item}-${index}`}
            onClick={() => setIsMenuOpen(false)}>
            <UiLink className="w-full text-sm text-white" href="#" size="lg">
              {item}
            </UiLink>
          </NavbarItem>
        ))}
        <NavbarItem className="flex" onClick={() => setIsMenuOpen(false)}>
          <button className="text-sm">
            <span>Let&apos;s Talk</span>
          </button>
        </NavbarItem>
      </NavbarMenu>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
    </Navbar>
  );
}
