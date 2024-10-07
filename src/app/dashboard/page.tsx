import React from "react";
import HeaderDashboard from "../ui/dashboard/headerDashboard";
import { ProjectWithStacks, Stack } from "../../lib/definitions";
import ProjectSection from "../ui/dashboard/projectSection";
import { fetchProjectsWithStacks, fetchStacks } from "../../lib/data";
import ProjectFormSection from "../ui/dashboard/projectFormSection";
import StackFormSection from "../ui/dashboard/stackFormSection";
import StackSection from "../ui/dashboard/stackSection";

export default async function page() {
  const projects: Array<ProjectWithStacks> = await fetchProjectsWithStacks();
  const stacksArray: Array<Stack> = await fetchStacks();

  return (
    <>
      <HeaderDashboard login />
      <main className="w-full bg-glassmorphism2 bg-cover py-24 bg-fixed bg-center">
        <h1 className="w-full text-center text-3xl md:text-4xl">Gestion des projets et technos</h1>
        <div id="form" className="flex flex-col gap-6 p-4 lg:p-8 lg:gap-8 lg:flex-row">
          <ProjectFormSection stacks={stacksArray} />
          <StackFormSection />
        </div>
        <StackSection stacks={stacksArray} />
        <ProjectSection projects={projects} published />
        <ProjectSection projects={projects} published={false} />
      </main>
    </>
  );
}
