import React from "react";
import {
  Card,
  CardBody,
  Image,
  CardFooter,
  Button,
  Tooltip,
} from "@nextui-org/react";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import { Blog } from "../../../typings";
import NextSanityImage from "@/lib/sanityImage";

export default function AllBlogsSingleBlog({
  blog,
  index,
}: {
  blog: Blog;
  index: number;
}) {
  const image = NextSanityImage(blog?.mainImage);

  return (
    <Card className="w-full md:max-w-none bg-primary bg-opacity-10 rounded-lg  md:flex md:flex-row md:gap-5 md:h-[350px]">
      <CardBody
        className="overflow-visible py-2 p-0 h-full [&>div]:h-full [&>div]:!max-w-none 
      [&>div]:!rounded-t-lg [&>div]:!rounded-b-none [&>div>div]:!rounded-t-lg [&>div>div]:!rounded-b-none md:[&>div]:!rounded-l-lg md:[&>div]:!rounded-r-none md:[&>div>div]:!rounded-l-lg [&>div>div]:h-full md:[&>div>div]:!rounded-r-none">
        <Image
          alt="Card background"
          className="object-cover w-full h-full rounded-t-lg !rounded-b-none md:rounded-l-lg md:!rounded-r-none"
          isZoomed
          src={image?.src}
          width={270}
        />
      </CardBody>
      <CardFooter className="pb-5 pt-2 px-4 flex-col justify-between items-start h-full">
        <div className="md:mt-5">
          <Tooltip content={blog.title} radius="none" className="rounded">
            <Link href={`/blogs/${blog.slug}`} className="h-14">
              <h4 className="font-bold text-large">
                {blog.title.slice(0, 40)}
              </h4>
            </Link>
          </Tooltip>
          <small className="text-default-500 my-2">by @{blog.name}</small>
          <p className="my-2 text-sm">{blog.description}...</p>
        </div>
        <Link
          href={`/blogs/${blog.slug}`}
          className="border border-primary rounded hover:!bg-none duration-300">
          <Button
            color="primary"
            variant="ghost"
            radius="none"
            className="border-none hover:!text-background"
            endContent={<FiArrowUpRight />}>
            Read more
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
