import React from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import Link from "next/link";
import NextSanityImage from "@/lib/sanityImage";
import { galleryStyle } from "@/utils/projectGrid";

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
      className={`mx-w-[400px] w-full h-[300px] group !rounded-md cursor-pointer project-card bg-primary/10 ${galleryStyle[index].style}`}>
      <CardHeader className="absolute z-10 -top-10 flex-col items-start opacity-0 duration-400 group-hover:opacity-100 group-hover:top-0 bg-primary/5 backdrop-blur backdrop-saturate-150 !rounded-t-md">
        <h4 className="text-white/90 font-medium text-xl">{project.title}</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full object-cover group-hover:bg-overlay-100 duration-400 project-main-image !rounded-md"
        src={mainViewImage?.src}
      />
      <CardFooter className="absolute bg-primary/5 -bottom-20 z-10 opacity-0 border-t-1 border-background dark:border-default-100 group-hover:bottom-0 duration-400 group-hover:opacity-100 !rounded-b-md flex justify-between">
        <Image
          alt={project.slogan}
          className="rounded-full w-11 h-11 border border-background"
          src={siteIconImage?.src}
        />
        <Link
          href={`/projects/${project.slug}`}
          className="rounded-full px-3 py-2 text-xs text-white bg-background">
          View Project
        </Link>
      </CardFooter>
    </Card>
  );
}
