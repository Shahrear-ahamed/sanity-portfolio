"use client";

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

export default function Share({ title }: { title: string }) {
  const shortLink = usePathname();
  const shareUrl = `https://www.shahrear-ahamed.com${shortLink}`;
  console.log(shareUrl);
  return (
    <ul className="flex gap-5">
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
