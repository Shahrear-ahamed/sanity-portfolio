"use client";

import React from "react";
import {
  Link as UiLink,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/react";
import Image from "next/image";
import logo from "../../../public/shahrear_logo.png";
import { Link, animateScroll as scroll } from "react-scroll";

export default function NavbarCom() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "About", "Project", "Blog"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="navbarParent z-[100]">
      <NavbarContent>
        <NavbarBrand className="cursor-pointer">
          <Link offset={-100} spy={true} to="home">
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
              offset={-100}
              spy={true}
              to={item.toLowerCase()}
              color="foreground"
              activeClass="text-primary"
              className="text-sm hover:text-primary duration-500 cursor-pointer">
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden md:flex">
          <Link offset={-100} to="contact" activeClass="text-primary">
            <button className="cursor-pointer rounded-lg justify-center bg-transparent -skew-x-12 py-3 px-4 border-2 border-white group hover:border-primary duration-5 00">
              <span className="text-sm skew-x-12 group-hover:text-primary duration-500">
                Let&apos;s Talk
              </span>
            </button>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu
        className={`!h-[30%] ${
          isMenuOpen ? "block" : "hidden"
        } z-[100] space-y-4`}>
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link
              offset={-100}
              spy={true}
              to={item.toLowerCase()}
              onClick={() => setIsMenuOpen(false)}
              color="foreground"
              activeClass="text-primary"
              className="text-sm hover:text-primary duration-500 cursor-pointer">
              {item}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem className="flex">
          <Link
            offset={-100}
            onClick={() => setIsMenuOpen(false)}
            to="contact"
            activeClass="[&>button]:text-primary">
            <button className="text-sm">
              <span>Let&apos;s Talk</span>
            </button>
          </Link>
        </NavbarItem>
      </NavbarMenu>
      <NavbarMenuToggle
        className="sm:hidden"
        aria-pressed={isMenuOpen}
        data-open={isMenuOpen}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      />
    </Navbar>
  );
}
