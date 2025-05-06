import React from "react";
import { ProjectWithStacks, Stack } from "@/lib/supabase.type";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({
  project,
  dictionnary,
  lang,
}: {
  project: ProjectWithStacks;
  dictionnary: Record<string, string>;
  lang: string;
}) {
  const backgroundImg = {
    backgroundImage: `url(${project.preview_picture_url})`,
    backgroundSize: "100% 95%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
  };

  return (
    <article className="group relative block h-full min-h-80 w-full">
      <div
        style={backgroundImg}
        className="relative flex h-full w-full transform items-end bg-darkColor transition-transform object
          group-hover:-translate-x-2 group-hover:-translate-y-2"
      >
        <div
          className="w-full p-4 pt-0 transition-opacity duration-200 group-hover:absolute group-hover:opacity-0 sm:p-6
            lg:p-8 bg-gradient-to-b from-transparent to-black/80"
        >
          <h3 className="mt-4 text-center text-xl font-medium drop-shadow-[1px_2px_2px_rgba(114,15,234,1)] sm:text-2xl">
            {project.title}
          </h3>
        </div>

        <div
          className="shadow-[inset_10px_5px_10px_-15px_rgba(16, 221, 247, 0.8)] absolute top-0 flex h-full w-full
            flex-col items-center justify-center gap-2 border-2 border-primaryLight bg-black/[.4] p-4 opacity-0
            backdrop-blur-sm transition-opacity duration-200 group-hover:relative group-hover:opacity-100 sm:p-6
            lg:p-8"
        >
          <p className="mt-4 text-sm text-white sm:text-base">
            {lang === "fr" ? project.description : project.description_en}
          </p>
          <ul className="flex items-center justify-evenly gap-2">
            {project.stacks.map((stack: Stack) => (
              <li key={stack.id}>
                <Image src={stack.logo} width={60} unoptimized height={60} alt={stack.name} />
              </li>
            ))}
          </ul>

          <ul className="flex items-center justify-evenly gap-4">
            {project.github_repo && (
              <li>
                <Link
                  href={project.github_repo ? project.github_repo : ""}
                  target="_blank"
                  className="mt-8 font-bold text-secondaryColor drop-shadow-[1px_2px_2px_rgba(0,0,0,0.75)] duration-200
                    hover:text-secondaryLight"
                >
                  {dictionnary.github}
                </Link>
              </li>
            )}
            {project.link && (
              <li>
                <Link
                  href={project.link ? project.link : ""}
                  target="_blank"
                  className="mt-8 font-bold text-secondaryColor drop-shadow-[1px_2px_2px_rgba(0,0,0,0.75)] duration-200
                    hover:text-secondaryLight"
                >
                  {dictionnary.view_project}
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </article>
  );
}
