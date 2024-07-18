import React from "react";
import { ProjectWithStacks, Stack } from "@/app/lib/definitions";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({
  project,
}: {
  project: ProjectWithStacks;
}) {
  return (
    <div className="group relative block h-full min-h-80 w-full">
      <div className="relative flex h-full transform items-end bg-darkColor transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div className="p-4 pt-0 transition-opacity duration-300 group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-10 sm:size-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <h3 className="mt-4 text-xl font-medium sm:text-2xl">
            {project.title}
          </h3>
        </div>

        <div className="absolute flex flex-col gap-2 p-4 opacity-0 transition-opacity duration-300 group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
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
