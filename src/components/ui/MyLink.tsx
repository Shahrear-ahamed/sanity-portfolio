import Link from "next/link";
import React from "react";

export default function MyLink({
  link,
  title,
}: {
  link: string;
  title: string;
}) {
  return (
    <div>
      {link ? (
        <Link
          href={link}
          target="_blank"
          className="text-primary hover:text-primary/60 duration-300 hover:underline">
          <p>{title}</p>
        </Link>
      ) : (
        <p className="text-primary hover:text-primary/60 duration-300 hover:underline">
          {title} (Coming Soon)
        </p>
      )}
    </div>
  );
}
