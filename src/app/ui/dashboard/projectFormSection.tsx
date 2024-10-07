"use client";

import React, { useContext } from "react";
import { ProjectContext } from "./projectContext";
import EditProjectForm from "./editProjectForm";
import AddProjectForm from "./addProjectForm";
import { Stack } from "@/lib/definitions";
import { ResetProjectButton } from "./buttons";
import { useEdgeStore } from "@/lib/edgestore";

export default function ProjectFormSection({ stacks }: { stacks: Array<Stack> }) {
  const { projectToModify } = useContext(ProjectContext);
  const { edgestore } = useEdgeStore();

  return (
    <section
      className="flex mx-auto w-full max-w-screen-2xl flex-col items-center justify-start
        gap-4 bg-[center_top_4rem] bg-no-repeat py-4 pt-8 *:mx-auto md:gap-6"
    >
      <h2 className="text-xl md:text-2xl lg:text-3xl">
        {projectToModify ? "Modifier le projet" : "Ajouter un projet"}
      </h2>
      {projectToModify && <ResetProjectButton />}
      {projectToModify ? (
        <EditProjectForm stacks={stacks} edgestore={edgestore} />
      ) : (
        <AddProjectForm stacks={stacks} edgestore={edgestore} />
      )}
    </section>
  );
}
