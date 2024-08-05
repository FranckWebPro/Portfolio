"use client";

import { useContext } from "react";
import { deleteProject, togglePublication } from "../../../lib/actions";
import { ProjectContext } from "./projectContext";
import { readProjectWithStacks } from "@/lib/data";

export function TogglePublicationButton({ id, published }: { id: number; published: boolean }) {
  const togglePublicationWithId = togglePublication.bind(null, id, published);
  return (
    <form action={togglePublicationWithId}>
      <button
        className="rounded-md border p-2 duration-300 hover:border-secondaryColor hover:bg-secondaryColor
          hover:text-darkColor"
      >
        {published ? "Dépublier" : "Publier"}
      </button>
    </form>
  );
}

export function DeleteProjectButton({ id }: { id: number }) {
  const deleteProjectWithId = deleteProject.bind(null, id);
  return (
    <form action={deleteProjectWithId}>
      <button
        className="rounded-md border p-2 duration-300 hover:border-secondaryColor hover:bg-secondaryColor
          hover:text-darkColor"
      >
        Supprimer
      </button>
    </form>
  );
}

export function UpdateProjectButton({ id }: { id: number }) {
  const { setProjectToModify } = useContext(ProjectContext);

  const handleUpdate = async () => {
    try {

      const project = await readProjectWithStacks(id);
      const formElement = document.getElementById("editForm") as HTMLFormElement;
        if (formElement) {
        formElement.reset();
        }
      setProjectToModify(project);

    } catch (error) {
      console.error("Failed to read project:", error);
    }
  };

  return (
    <a
      className="rounded-md border p-2 duration-300 hover:border-s‡econdaryColor hover:bg-secondaryColor
        hover:text-darkColor"
      onClick={handleUpdate}
      href="#form"
    >
      Mettre à jour
    </a>
  );
}


export function ResetProjectButton() {
    const { setProjectToModify } = useContext(ProjectContext);

    const handleResetProject = () => {
        setProjectToModify(null)
    }
    return (
        <button
          className="rounded-md border p-2 duration-300 hover:border-secondaryColor hover:bg-secondaryColor
            hover:text-darkColor"
        onClick={handleResetProject}
        >
          Ajouter un projet
        </button>
    );
  }