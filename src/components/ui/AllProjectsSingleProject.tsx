import { Card, CardBody, Image, CardFooter, Tooltip } from "@nextui-org/react";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import { Project } from "../../../typings";
import NextSanityImage from "@/lib/sanityImage";

export default function AllProjectsSingleProject({
  project,
}: {
  project: Project;
}) {
  const mainImage = NextSanityImage(project?.mainImage);

  return (
    <Card className="w-full md:max-w-none bg-primary bg-opacity-10 rounded-lg  md:flex md:flex-row md:gap-5 md:h-[350px]">
      <CardBody
        className="overflow-visible py-2 p-0 h-full [&>div]:h-full [&>div]:!max-w-none 
        [&>div]:!rounded-t-lg [&>div]:!rounded-b-none [&>div>div]:!rounded-t-lg [&>div>div]:!rounded-b-none md:[&>div]:!rounded-l-lg md:[&>div]:!rounded-r-none md:[&>div>div]:!rounded-l-lg [&>div>div]:h-full md:[&>div>div]:!rounded-r-none">
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-[300px] md:h-full object-cover group-hover:bg-overlay-100 !duration-400 project-main-image rounded-t-lg !rounded-b-none md:rounded-l-lg md:!rounded-r-none !object-[center_top]"
          src={mainImage?.src}
        />
      </CardBody>
      <CardFooter className="pb-5 pt-2 px-4 flex-col justify-between items-start h-full">
        <div className="md:mt-5">
          <Tooltip content={project.title} radius="none" className="rounded">
            <Link href={`/projects/${project.slug}`} className="h-14">
              <h4 className="font-bold text-large sm:text-xl md:text-2xl">
                {project.title.slice(0, 40)}
              </h4>
            </Link>
          </Tooltip>
          <small className="text-default-500 my-2">by @{project.name}</small>
          {/* <p className="my-2 text-sm">{project.description}...</p> */}
        </div>
        <Link
          href={`/blogs/${project.slug}`}
          className="border border-primary rounded hover:!bg-primary duration-300 hover:!text-background px-4 py-2 flex items-center text-sm">
          Read more
          <FiArrowUpRight className="ml-2" />
        </Link>
      </CardFooter>
    </Card>
  );
}
