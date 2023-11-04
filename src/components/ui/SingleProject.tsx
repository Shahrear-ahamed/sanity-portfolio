import React from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import Link from "next/link";

export default function SingleProject() {
  return (
    <div className="gap-2 grid grid-cols-12 grid-rows-2">
      <Card
        isFooterBlurred
        className="mx-w-[400px] w-full h-[300px] col-span-12 sm:col-span-5 group cursor-pointer">
        <CardHeader className="absolute z-10 -top-10 flex-col items-start opacity-0 duration-400 group-hover:opacity-100 group-hover:top-0">
          <h4 className="text-white/90 font-medium text-xl">
            trip4All - Travel App
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          isZoomed
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover group-hover:bg-overlay-100 duration-400"
          src="https://nextui.org/images/card-example-2.jpeg"
        />
        <CardFooter className="absolute bg-black/40 -bottom-20 z-10 opacity-0 border-t-1 border-default-600 dark:border-default-100 group-hover:bottom-0 duration-400 group-hover:opacity-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="https://nextui.org/images/card-example-2.jpeg"
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">
                Get a good night&apos;s sleep.
              </p>
            </div>
          </div>
          <Link href="/projects/project-title">
            <Button radius="full" size="sm">
              Case Study
            </Button>
          </Link>
        </CardFooter>
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7 group cursor-pointer">
        <CardHeader className="absolute z-10 -top-10 flex-col items-start opacity-0 duration-400 group-hover:opacity-100 group-hover:top-0">
          <h4 className="text-white/90 font-medium text-xl">
            Anchor auto - Mechanical Workshop
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          isZoomed
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="https://nextui.org/images/card-example-2.jpeg"
        />
        <CardFooter className="absolute bg-black/40 -bottom-20 z-10 opacity-0 border-t-1 border-default-600 dark:border-default-100 group-hover:bottom-0 duration-400 group-hover:opacity-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="https://nextui.org/images/card-example-2.jpeg"
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">
                Get a good night&apos;s sleep.
              </p>
            </div>
          </div>
          <Link href="/projects/project-title">
            <Button radius="full" size="sm">
              View Project
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

const galleryStyle = [
  {
    idx: 0,
    style: {
      coverImg: "",
      cardStyle: "",
    },
  },
  {
    idx: 1,
    style: {
      coverImg: "",
      cardStyle: "",
    },
  },
  {
    idx: 2,
    style: {
      coverImg: "",
      cardStyle: "",
    },
  },
  {
    idx: 3,
    style: {
      coverImg: "",
      cardStyle: "",
    },
  },
  {
    idx: 4,
    style: {
      coverImg: "",
      cardStyle: "",
    },
  },
  {
    idx: 5,
    style: {
      coverImg: "",
      cardStyle: "",
    },
  },
  {
    idx: 6,
    style: {
      coverImg: "",
      cardStyle: "",
    },
  },
];
