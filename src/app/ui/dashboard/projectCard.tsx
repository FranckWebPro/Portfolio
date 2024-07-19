import React from "react";
import { ProjectWithStacks, Stack } from "@/app/lib/definitions";
import Image from "next/image";
import { DeleteProject, UpdateProject } from "../buttons";

export default function ProjectCard({
  project,
}: {
  project: ProjectWithStacks;
}) {
  const backgroundImg = {
    backgroundImage: `url(${project.preview_picture_url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
  };

  return (
    <div className="group relative block h-full min-h-80 w-full">
      <div
        style={backgroundImg}
        className="relative flex h-full transform items-end bg-darkColor transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
      >
        <div className="p-4 pt-0 transition-opacity duration-300 group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
          <h3 className="mt-4 text-xl font-medium sm:text-2xl">
            {project.title}
          </h3>
        </div>

        <div className="shadow-[inset_10px_5px_10px_-15px_rgba(16, 221, 247, 0.8)] absolute top-0 flex h-full w-full flex-col gap-2 border-2 border-secondaryLight bg-black/[.4] p-4 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
          <p className="mt-4 text-sm sm:text-base">{project.description}</p>
          <ul className="flex items-center justify-evenly gap-2">
            {project.project_stacks.map((stack: Stack) => (
              <li key={stack.id}>
                <Image
                  src={stack.logo !== "url" ? stack.logo : ""}
                  width={60}
                  height={60}
                  alt={stack.name}
                />
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-evenly">
            <UpdateProject id={project.id} published={project.published} />
            <DeleteProject id={project.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
