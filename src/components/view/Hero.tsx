import Image from "next/image";
import React from "react";
import HeroImage from "../../../public/hero_one.png";
import { BsCloudDownload } from "react-icons/bs";
import Link from "next/link";
import SocialIcon from "../ui/SocialIcon";
import ShowCase from "../ui/ShowCase";
import Mouse from "../ui/Mouse";
import { FaLaptopCode, FaTools } from "react-icons/fa";

function Hero() {
  return (
    <section className="wrapper-container mx-auto mt-20 pb-10 relative">
      <div className="grid items-center gap-10 min-h-[650px] justify-items-center md:justify-items-end grid-cols-1 md:grid-cols-2">
        <div>
          <span className="text-sm">Hello </span>
          <h1 className="font-bold text-5xl leading-tight">
            I&apos;m{" "}
            <span className="text-primary full_name">Shahrear Ahamed </span>
            <span className="rounded-sm px-2 bg-primary text-background">
              Full-Stack
            </span>{" "}
            Developer
          </h1>
          <p className="text-sm my-5">
            Hey, I am Shahrear Ahamed, a professional and passionate, programmer
            and full-stack (MERN) web developer. If you want to develop or hire
            me, don&apos;t hesitate to contact me!
          </p>

          <div className="flex items-center my-4">
            <Link
              className="flex cursor-pointer rounded-lg items-center justify-center border-none py-3 px-5 -skew-x-12 bg-primary duration-500 ease-in-out hover:shadow-md hover:shadow-primary"
              download
              href="/Shahrear_ahamed.pdf"
              rel="noopener noreferrer">
              <span className="flex items-center text-background skew-x-12 text-xs sm:text-base">
                Download Resume
                <BsCloudDownload style={{ marginLeft: "10px" }} />
              </span>
            </Link>

            <Link className="text-sm ml-8 underline" href="/projects">
              See Works
            </Link>
          </div>

          <div className="flex items-center my-8">
            <span className="text-sm mr-4">Follow Me:</span>
            <SocialIcon />
          </div>
        </div>

        {/* // image  */}
        <div className="relative">
          <ShowCase
            icon={<FaLaptopCode />}
            title="Front-end"
            style="top-[30%] left-5"
            anim_delay={{ animationDelay: "0.5s", animationDuration: "9s" }}
          />
          <Image
            src={HeroImage}
            alt="Shahrear ahamed Hero Image with blazer"
            height={500}
            width={500}
          />

          <ShowCase
            icon={<FaTools />}
            title="Back-end"
            style="right-0 top-[25%]"
            anim_delay={{ animationDelay: "1.5s", animationDuration: "10s" }}
          />

          <ShowCase
            text="2y+"
            title="Coding Exp."
            style="top-[70%] left-0 sm:top-[35%] sm:-left-[10px] md:top-[85%] md:left-[30%]"
            anim_delay={{ animationDelay: "1s", animationDuration: "8s" }}
          />
        </div>
      </div>
      <Mouse />
    </section>
  );
}

export default Hero;
