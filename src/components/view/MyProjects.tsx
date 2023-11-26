"use client";

import SingleProject from "../ui/SingleProject";
import SectionTitle from "../ui/SectionTitle";
import { useEffect, useState } from "react";
import { HomeProjectsData } from "@/lib/Groq";
import { Project } from "../../../typings";
import { HomeProjectsLoading } from "../ui/LoadingSkeleton";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

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
    <section id="project" className="wrapper-container mx-auto my-10">
      <div className="flex justify-between items-center">
        <SectionTitle>
          My <span className="text-primary">Projects</span>
        </SectionTitle>
        <div className="w-10 h-10">
          <Link
            href="/projects"
            className="h-full w-full flex justify-center items-center relative cursor-pointer right-0 hover:-right-2 duration-400">
            <FaChevronRight className="h-5 w-5" />
          </Link>
        </div>
      </div>

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
