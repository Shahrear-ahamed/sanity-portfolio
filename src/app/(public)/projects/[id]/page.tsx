import { getSingleProject } from "@/lib/Groq";
import FullBlogImage from "@/components/ui/FullBlogImage";
import { PortableText } from "@portabletext/react";
import { PortableTextShowComponent } from "@/components/ui/PortableTextShowComponent";
import { parseIsoDate } from "@/lib/luxonDateFormate";
import { Project } from "../../../../../typings";
import Link from "next/link";
import MyLink from "@/components/ui/MyLink";

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const project: Project = await getSingleProject(params.id);

  if (!project) return <div>404</div>;
  const parseDate = parseIsoDate(project.publishedAt);

  return (
    <article className="my-10">
      <FullBlogImage image={project?.mainImage} title={project.title} />
      <div className="-mt-10 z-50 relative w-full backdrop-blur-sm bg-background/40 py-10">
        <div className="wrapper-container mx-auto relative z-20">
          <h1 className="text-xl sm:text-2xl md:text-4xl pl-2 sm:pl-4 md:pl-7 lg:pl-10 flex items-center relative w-fit before:block before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-full before:bg-primary before:w-1">
            {project.title}
          </h1>
          <div className="my-5 text-sm">
            <div className="flex space-x-4">
              <p>Published: {parseDate}</p>
              <p>
                by
                <span className="text-primary/80"> @{project.name}</span>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-sm gap-5">
            <MyLink link={project.liveSiteUrl} title="Live Site" />
            <MyLink link={project.showcaseUrl} title="ShowCase Video" />
            <MyLink link={project.frontendUrl} title="Font end Git" />
            <MyLink link={project.backendUrl} title="Back end Git" />
          </div>
          <div>
            <PortableText
              value={project.body}
              components={PortableTextShowComponent}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
