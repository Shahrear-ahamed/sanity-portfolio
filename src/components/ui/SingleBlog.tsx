import React from "react";
import { Card, CardBody, Image, CardFooter, Button } from "@nextui-org/react";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

export default function SingleBlog() {
  return (
    <Card className="max-w-[285px] w-full pb-5">
      <CardBody className="overflow-visible py-2 p-0 [&>div]:!max-w-none [&>div]:!rounded-t-lg [&>div]:!rounded-b-none ">
        <Image
          alt="Card background"
          className="object-cover rounded-t-xl w-full"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
      <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
        <Link href="/blogs/frontend-radio">
          <h4 className="font-bold text-large">Frontend Radio</h4>
        </Link>
        <small className="text-default-500">
          By <strong>@Shahrear</strong>
        </small>
        <p className="my-2 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quae
          nesciunt dicta facere alias amet nihil fugiat ipsam adipisci ab?
        </p>
        <Link href="/blogs/frontend-radio">
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
