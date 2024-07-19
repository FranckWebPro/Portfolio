import React from "react";
import { ProjectWithStacks, Stack } from "@/app/lib/definitions";
import Link from "next/link";
import Image from "next/image";

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
        <div className="w-full p-4 pt-0 transition-opacity duration-300 group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
          <h3 className="mt-4 text-center text-xl font-medium drop-shadow-[1px_2px_2px_rgba(0,0,0,0.75)] sm:text-2xl">
            {project.title}
          </h3>
        </div>

        <div className="shadow-[inset_10px_5px_10px_-15px_rgba(16, 221, 247, 0.8)] absolute top-0 flex h-full w-full flex-col gap-2 border-2 border-secondaryLight bg-black/[.4] p-4 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
          <p className="mt-4 text-sm sm:text-base">{project.description}</p>
          <ul className="flex items-center justify-evenly gap-2">
            {project.project_stacks.map((stack: Stack) => (
              <li key={stack.id}>
                <Image
                  src={stack.logo}
                  width={60}
                  height={60}
                  alt={stack.name}
                />
              </li>
            ))}
          </ul>

          <ul className="flex items-center justify-evenly gap-4">
            {project.github_repo && (
              <li>
                <Link
                  href={project.github_repo ? project.github_repo : ""}
                  target="_blank"
                  className="mt-8 font-bold text-secondaryColor duration-300 hover:text-secondaryLight"
                >
                  Voir le repo Github
                </Link>
              </li>
            )}
            {project.link && (
              <li>
                <Link
                  href={project.link ? project.link : ""}
                  target="_blank"
                  className="mt-8 font-bold text-secondaryColor duration-300 hover:text-secondaryLight"
                >
                  Voir le projet
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}