import React from "react";
import HeaderDashboard from "../ui/dashboard/headerDashboard";
import ProjectFormSection from "../ui/dashboard/projectFormSection";
import { ProjectWithStacks, Stack } from "../lib/definitions";
import ProjectSection from "../ui/dashboard/projectSection";
import { fetchProjectsWithStacks, fetchStacks } from "../lib/data";

export default async function page() {
  const projects: Array<ProjectWithStacks> = await fetchProjectsWithStacks();
  const stacksArray: Array<Stack> = await fetchStacks();

  return (
    <>
      <HeaderDashboard />
      <main className="w-full bg-glassmorphism2 bg-cover bg-fixed bg-center">
        <ProjectFormSection stacks={stacksArray} />
        <ProjectSection projects={projects} published />
        <ProjectSection projects={projects} published={false} />
      </main>
    </>
  );
}
