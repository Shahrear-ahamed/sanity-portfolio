"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import { allProjectsPage, totalProjectCount } from "@/lib/Groq";
import { useEffect, useState } from "react";
import { Project } from "../../../../typings";
import { Pagination } from "@nextui-org/react";
import LoadingSkeleton from "@/components/ui/LoadingSkeleton";
import AllProjectsSingleProject from "@/components/ui/AllProjectsSingleProject";

export default function BlogsPage() {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [projects, setProjects] = useState<Project[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      const totalProjects = await totalProjectCount();
      const projects = await allProjectsPage({ limit, page });
      setProjects(projects);
      setTotal(Math.ceil(totalProjects / limit));
      setLoading(false);
    };
    fetchBlogs();
  }, [limit, page]);

  const handleChange = async (comPage: number) => {
    setPage(comPage);
  };

  return (
    <section className="wrapper-container mx-auto my-10">
      <SectionTitle>
        All <span className="text-primary">Projects</span>
      </SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-rows-1 md:grid-cols-none gap-5">
        {loading ? (
          <>
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
          </>
        ) : projects.length && !loading ? (
          projects.map((project: Project) => (
            <AllProjectsSingleProject key={project.title} project={project} />
          ))
        ) : (
          <p className="text-center text-2xl text-primary">No Projects Found</p>
        )}
      </div>
      <Pagination
        showShadow
        isCompact
        showControls
        total={total}
        initialPage={1}
        onChange={handleChange}
        className="[&>ul]:!bg-primary [&>ul]:!bg-opacity-10 [&>ul]:!rounded [&>ul>li]:!bg-transparent [&>ul>span]:!rounded [&>ul>span]:!text-background mt-5"
      />
    </section>
  );
}
