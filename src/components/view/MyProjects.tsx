import SingleProject from "../ui/SingleProject";
import SectionTitle from "../ui/SectionTitle";
import { client } from "@/lib/sanity.client";

export default async function MyProjects() {
  const projects = await projectsData();

  return (
    <section className="wrapper-container mx-auto my-10">
      <SectionTitle>
        My <span className="text-primary">Projects</span>
      </SectionTitle>

      <div className="gap-5 grid grid-cols-12">
        {projects.length ? (
          projects.map((project: any, idx: number) => (
            <SingleProject key={project.title} project={project} index={idx} />
          ))
        ) : (
          <p className="text-center text-2xl text-primary row-span-full">
            No Projects Found
          </p>
        )}
      </div>
    </section>
  );
}

const projectsData = async () => {
  return await client.fetch(
    `*[_type == "project"] | order(_createdAt asc)[0 .. 5] {title, "slug":slug.current, slogan, mainImage, siteIcon,}`
  );
  // return await client.fetch(
  //   `*[_type == "project"] | order(_createdAt asc)[0 .. 5] {title, "slug":slug.current, slogan, projectImages, mainImage, siteIcon, frontendUrl, backendUrl, liveSiteUrl, categories, _updatedAt, metaDescription, body,}`
  // );
};
