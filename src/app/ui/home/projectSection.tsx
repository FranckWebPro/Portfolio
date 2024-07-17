import React from "react";
import ProjectCard from "./projectCard";
import { Project } from "@/app/lib/definitions";

export default function ProjectSection({
  projects,
}: {
  projects: Array<Project>;
}) {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-4rem)] grid-cols-1 items-center justify-center p-0 py-32 md:min-h-[calc(100vh-5rem)] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {projects.map((project: Project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
