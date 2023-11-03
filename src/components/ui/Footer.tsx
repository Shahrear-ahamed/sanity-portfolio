import Image from "next/image";
import React from "react";
import logo from "../../../public/shahrear_logo.png";
import Link from "next/link";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  return (
    <footer className="bg-primary bg-opacity-10 pt-24">
      <div className="wrapper-container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 !my-5 gap-5 grid-rows-3 sm:grid-rows-2 md:grid-rows-1">
        <div className="flex flex-col items-center md:items-start">
          <Image
            src={logo}
            height={50}
            width={120}
            alt="Shahrear ahamed logo"
            className="cursor-pointer"
          />
          <p>A full stack web developer</p>
        </div>
        <div className=" text-center">
          <h3 className="mb-2">Quick Links</h3>
          <ul className="text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blogs">All Blog</Link>
            </li>
            <li>
              <Link href="/projects">All Project</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 sm:col-span-2 md:col-span-1 text-center md:text-right">
          <h3 className="mb-5">Follow Me On</h3>
          <SocialIcon />
        </div>
      </div>
      <hr className="w-full border-1 border-solid border-primary" />
      <p className="py-2 text-center text-xs">
        &copy;{" "}
        <Link href="" target="_blank" className="text-primary">
          Shahrear ahamed
        </Link>{" "}
        | V 1.0
      </p>
    </footer>
  );
}
