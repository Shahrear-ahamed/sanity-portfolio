"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon,
  XIcon,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { IoCopy, IoCopyOutline } from "react-icons/io5";

export default function Share({ title }: { title: string }) {
  const [copy, setCopy] = useState(false);
  const shortLink = usePathname();
  const shareUrl = `https://www.shahrear-ahamed.com${shortLink}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopy(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopy(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [copy]);

  return (
    <ul className="flex gap-5 [&>li]:flex [&>li]:items-center">
      <li className="relative">
        <p
          className={`absolute left-0 md:-left-7 text-xs w-20 duration-300 text-green-500 ${
            copy
              ? "opacity-100 -bottom-7 md:bottom-10"
              : "opacity-0 -bottom-5 md:bottom-7"
          }`}>
          Link Copied
        </p>
        <button onClick={copyToClipboard} className="text-sm">
          {copy ? <IoCopy size={24} /> : <IoCopyOutline size={24} />}
        </button>
      </li>
      <li>
        <FacebookShareButton url={shareUrl} title={title} className="text-sm">
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </li>
      <li>
        <LinkedinShareButton url={shareUrl} title={title} className="">
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </li>
      <li>
        <TwitterShareButton url={shareUrl} title={title} className="">
          <XIcon size={32} round />
        </TwitterShareButton>
      </li>
      <li>
        <TelegramShareButton url={shareUrl} title={title} className="">
          <TelegramIcon size={32} round />
        </TelegramShareButton>
      </li>
      <li>
        <WhatsappShareButton
          url={shareUrl}
          title={title}
          separator=":: "
          className="">
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </li>
    </ul>
  );
}
