import React from "react";
import { ProjectWithStacks, Stack } from "@/lib/definitions";
import Image from "next/image";
import { DeleteProjectButton, TogglePublicationButton, UpdateProjectButton } from "./buttons";

export default function ProjectCard({ project }: { project: ProjectWithStacks }) {
  const backgroundImg = {
    backgroundImage: `url(${project.preview_picture_url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
  };

  return (
    <div className="group block h-full min-h-80 w-full">
      <div
        style={backgroundImg}
        className="flex h-full transform items-end bg-darkColor transition-transform group-hover:-translate-x-2
          group-hover:-translate-y-2"
      >
        <div
          className="w-full p-4 pt-0 transition-opacity text-3xl duration-300 bg-black/50 group-hover:absolute group-hover:opacity-0 sm:p-6
            lg:p-8"
        >
          <h3 className="mt-4 text-center text-xl font-medium drop-shadow-[1px_2px_2px_rgba(0,0,0,0.90)] sm:text-2xl">
            {project.title}
          </h3>
        </div>

        <div
          className="shadow-[inset_10px_5px_10px_-15px_rgba(16, 221, 247, 0.8)] absolute top-0 flex h-full w-full
            flex-col items-center justify-center gap-2 border-2 border-primaryLight bg-black/[.4] p-4 opacity-0
            backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 sm:p-6 lg:p-8"
        >
          <p className="mt-4 text-sm sm:text-base">{project.description}</p>
          <ul className="flex items-center justify-evenly gap-2">
            {project.project_stacks.map((stack: Stack) => (
              <li key={stack.id}>
                <Image
                  src={stack.logo !== "url" ? stack.logo : ""}
                  width={60}
                  height={60}
                  unoptimized
                  alt={stack.name}
                />
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 justify-evenly">
            <TogglePublicationButton id={project.id} published={project.published} />
            <DeleteProjectButton id={project.id} preview_picture_url={project.preview_picture_url} />
            <UpdateProjectButton id={project.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
