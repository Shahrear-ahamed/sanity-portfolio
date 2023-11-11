import React from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import Link from "next/link";
import NextSanityImage from "@/lib/sanityImage";

export default function SingleProject({
  project,
  index,
}: {
  project: any;
  index: number;
}) {
  const mainViewImage = NextSanityImage(project.mainImage);
  const siteIconImage = NextSanityImage(project.siteIcon);

  return (
    <Card
      isFooterBlurred
      className={`mx-w-[400px] w-full h-[300px] group !rounded-md cursor-pointer project-card ${galleryStyle[index].style}`}>
      <CardHeader className="absolute z-10 -top-10 flex-col items-start opacity-0 duration-400 group-hover:opacity-100 group-hover:top-0 bg-black/40 backdrop-blur backdrop-saturate-150 !rounded-t-md">
        <h4 className="text-white/90 font-medium text-xl">{project.title}</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover group-hover:bg-overlay-100 duration-400 project-main-image"
        src={mainViewImage?.src}
      />
      <CardFooter className="absolute bg-black/40 -bottom-20 z-10 opacity-0 border-t-1 border-background dark:border-default-100 group-hover:bottom-0 duration-400 group-hover:opacity-100 !rounded-b-md">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt={project.slogan}
            className="rounded-full w-11 h-11 border border-background"
            src={siteIconImage?.src}
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">{project.slogan}</p>
          </div>
        </div>
        <Link href={`/projects/${project.slug}`}>
          <Button radius="full" size="sm">
            View Project
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

const galleryStyle = [
  {
    idx: 0,
    style: "col-span-12 sm:col-span-6 lg:col-span-4",
  },
  {
    idx: 1,
    style: "col-span-12 sm:col-span-6 lg:col-span-5",
  },
  {
    idx: 2,
    style: "col-span-12 sm:col-span-6 lg:col-span-3",
  },
  {
    idx: 3,
    style: "col-span-12 sm:col-span-6 lg:col-span-6",
  },
  {
    idx: 4,
    style: "col-span-12 sm:col-span-6 lg:col-span-3",
  },
  {
    idx: 5,
    style: "col-span-12 sm:col-span-6 lg:col-span-3",
  },
];
