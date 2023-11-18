import React from "react";
import {
  Card,
  CardBody,
  Image,
  CardFooter,
  Tooltip,
} from "@nextui-org/react";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import { Blog } from "../../../typings";
import NextSanityImage from "@/lib/sanityImage";

export default function SingleBlog({
  blog,
  index,
}: {
  blog: Blog;
  index: number;
}) {
  const image = NextSanityImage(blog?.mainImage);

  return (
    <Card
      className={`w-full pb-5 bg-primary bg-opacity-10 rounded-lg ${
        index === 3 && "md:hidden lg:block"
      }`}>
      <CardBody className="overflow-visible py-2 p-0 [&>div]:!max-w-none [&>div]:!rounded-t-lg [&>div]:!rounded-b-none [&>div>div]:!rounded-t-lg [&>div>div]:!rounded-b-none">
        <Image
          alt="Card background"
          className="object-cover rounded-t-lg w-full !rounded-b-none"
          isZoomed
          src={image?.src}
          width={270}
        />
      </CardBody>
      <CardFooter className="pb-0 pt-2 px-4 flex-col items-start h-full">
        <Tooltip content={blog.title} radius="none" className="rounded">
          <Link href={`/blogs/${blog.slug}`} className="h-14">
            <h4 className="font-bold text-large">{blog.title.slice(0, 40)}</h4>
          </Link>
        </Tooltip>
        <small className="text-default-500 my-2">by @{blog.name}</small>
        <p className="my-2 text-sm">{blog.description}...</p>
        <Link
          href={`/blogs/${blog.slug}`}
          className="border border-primary rounded hover:!bg-primary duration-300 hover:!text-background px-4 py-2 flex items-center text-sm">
          Read more
          <FiArrowUpRight className="ml-2" />
        </Link>
      </CardFooter>
    </Card>
  );
}
