import React from "react";
import ProjectCard from "./projectCard";
import { ProjectWithStacks } from "@/lib/definitions";

export default function ProjectSection({ projects }: { projects: Array<ProjectWithStacks> }) {
  return (
    <section id="projects" className="pt-32">
      <h2 className="my-4 text-center text-3xl font-bold md:text-4xl">Les super projets que j'ai réalisé</h2>
      <p className="mb-8 text-center">
        Les projets que j'ai réalisé en formation, pour moi-même et en tant que freelance
      </p>
      <div
        className="grid-row-auto mx-auto grid min-h-[calc(100vh-4rem)] grid-cols-1 items-center justify-center p-0
          py-20 md:min-h-[calc(100vh-5rem)] md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-3
          xl:grid-cols-4"
      >
        {projects.map(
          (project: ProjectWithStacks) =>
            project.published === true && <ProjectCard key={project.id} project={project} />
        )}
      </div>
    </section>
  );
}
