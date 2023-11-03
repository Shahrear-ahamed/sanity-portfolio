"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/react";
import Image from "next/image";
import logo from "../../../public/shahrear_logo.png";

export default function NavbarCom() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "About", "Project", "Blog"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="navbarParent">
      <NavbarContent>
        <NavbarBrand className="cursor-pointer">
          <Image
            src={logo}
            width={120}
            height={50}
            alt="Shahrear ahamed logo"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link color="foreground" href="#">
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden md:flex">
          <button className="">
            <span>Let&apos;s Talk</span>
          </button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full text-base"
              href="#"
              size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarItem className="flex">
          <button className="">
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
