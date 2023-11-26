"use client";

import SingleProject from "../ui/SingleProject";
import SectionTitle from "../ui/SectionTitle";
import { useEffect, useState } from "react";
import { HomeProjectsData } from "@/lib/Groq";
import { Project } from "../../../typings";
import { HomeProjectsLoading } from "../ui/LoadingSkeleton";

export default function MyProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      const projects = await HomeProjectsData();
      setProjects(projects);
      setLoading(false);
    };
    fetchProject();
  }, []);

  return (
    <section className="wrapper-container mx-auto my-10">
      <SectionTitle>
        My <span className="text-primary">Projects</span>
      </SectionTitle>

      <div className="gap-5 grid grid-cols-12">
        {loading ? (
          <>
            <HomeProjectsLoading index={1} />
            <HomeProjectsLoading index={2} />
            <HomeProjectsLoading index={3} />
            <HomeProjectsLoading index={4} />
            <HomeProjectsLoading index={5} />
            <HomeProjectsLoading index={6} />
          </>
        ) : projects.length ? (
          projects.map((project: any, idx: number) => (
            <SingleProject key={project.title} project={project} index={idx} />
          ))
        ) : (
          <p className="text-center text-2xl text-primary row-span-full col-span-12">
            No Projects Found
          </p>
        )}
      </div>
    </section>
  );
}
