import { Image } from "@nextui-org/react";
import Link from "next/link";

export const PortableTextShowComponent = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image className="object-contain" src={value?.asset?.url} alt="" />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-3 space-y-3 list-disc">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="ml-10 mt-3 list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-2xl py-10 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl py-8 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl py-6 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl py-4 font-bold">{children}</h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-sm md:text-base py-2">{children}</p>
    ),
    blockqoute: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary pl-5 py-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noopener noreferrer"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-primary hover:decoration-primary/50 duration-300">
          {children}
        </Link>
      );
    },
  },
};
