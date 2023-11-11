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
      className={`max-w-[285px] w-full pb-5 bg-primary bg-opacity-10 ${
        index === 3 && "md:hidden lg:inline-block"
      }`}>
      <CardBody className="overflow-visible py-2 p-0 [&>div]:!max-w-none [&>div]:!rounded-t-lg [&>div]:!rounded-b-none [&>div>div]:!rounded-b-none">
        <Image
          alt="Card background"
          className="object-cover rounded-t-xl w-full "
          isZoomed
          src={image?.src}
          width={270}
        />
      </CardBody>
      <CardFooter className="pb-0 pt-2 px-4 flex-col items-start h-full">
        <Link href={`/blogs/${blog.slug}`} className="h-14">
          <Tooltip content={blog.title}>
            <h4 className="font-bold text-large">{blog.title.slice(0, 40)}</h4>
          </Tooltip>
        </Link>
        <small className="text-default-500">
          By <strong>@{blog.name}</strong>
        </small>
        <p className="my-2 text-sm">{blog.description}...</p>
        <Link href={`/blogs/${blog.slug}`}>
          <Button
            color="primary"
            variant="ghost"
            radius="sm"
            className="border-none hover:!bg-none hover:!text-white"
            endContent={<FiArrowUpRight />}>
            Read more
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
