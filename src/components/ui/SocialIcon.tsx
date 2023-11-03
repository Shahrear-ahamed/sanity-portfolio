import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const socialLinks = [
  {
    link: "https://www.facebook.com/its.shahrear",
    icon: <FaFacebookF />,
  },
  {
    link: "https://www.instagram.com/shahrear_ahamed/",
    icon: <FaInstagram />,
  },
  {
    link: "https://www.linkedin.com/in/shahrear-ahamed/",
    icon: <FaLinkedinIn />,
  },
  {
    link: "https://www.github.com/Shahrear-ahamed/",
    icon: <FaGithub />,
  },
];

export default function SocialIcon() {
  return (
    <ul className="flex gap-5 justify-center md:justify-end">
      {socialLinks.map((socialLink, index) => (
        <Link
          key={index}
          href={socialLink.link}
          className="w-8 h-8 bg-gray-300 p-[6px] text-background cursor-pointer rounded-full hover:bg-primary duration-400 ease-in-out flex justify-center items-center">
          <li>{socialLink.icon}</li>
        </Link>
      ))}
    </ul>
  );
}
