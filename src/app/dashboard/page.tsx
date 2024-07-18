import React from "react";
import HeaderDashboard from "../ui/dashboard/headerDashboard";
import ProjectFormSection from "../ui/dashboard/projectFormSection";
import { ProjectWithStacks, Stack } from "../lib/definitions";
import ProjectSection from "../ui/projectSection";
import { fetchProjectsWithStacks, fetchStacks } from "../lib/data";

// const stacksArray: Array<Stack> = [
//   {
//     id: 1,
//     name: "Next.js",
//     logo: "url",
//     stack_link: "url",
//   },
//   {
//     id: 2,
//     name: "javascript",
//     logo: "url",
//     stack_link: "url",
//   },
// ];

// const projects: Array<Project> = [
//   {
//     id: 1,
//     title: "finished",
//     description: "finished",
//     client_name: "finished",
//     preview_picture_url: "finished",
//     link: "finished",
//     github_repo: "finished",
//     published: true,
//     status: "finished",
//   },
//   {
//     id: 2,
//     title: "finished",
//     description: "finished",
//     client_name: "finished",
//     preview_picture_url: "finished",
//     link: "finished",
//     github_repo: "finished",
//     published: true,
//     status: "finished",
//   },
//   {
//     id: 3,
//     title: "finished",
//     description: "finished",
//     client_name: "finished",
//     preview_picture_url: "finished",
//     link: "finished",
//     github_repo: "finished",
//     published: true,
//     status: "finished",
//   },
//   {
//     id: 4,
//     title: "finished",
//     description: "finished",
//     client_name: "finished",
//     preview_picture_url: "finished",
//     link: "finished",
//     github_repo: "finished",
//     published: true,
//     status: "finished",
//   },
// ];

export default async function page() {
  const projects: Array<ProjectWithStacks> = await fetchProjectsWithStacks();
  const stacksArray: Array<Stack> = await fetchStacks();

  return (
    <>
      <HeaderDashboard />
      <main className="w-full">
        <ProjectFormSection stacks={stacksArray} />
        <ProjectSection projects={projects} />
      </main>
    </>
  );
}
