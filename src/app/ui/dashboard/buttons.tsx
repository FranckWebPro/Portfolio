"use client";

import { useContext } from "react";
import { deleteProject, togglePublication, readProjectWithStacks } from "../../../lib/actions";
import { ProjectContext } from "./projectContext";

export function TogglePublication({ id, published }: { id: number; published: boolean }) {
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

export function DeleteProject({ id }: { id: number }) {
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

export function UpdateProject({ id }: { id: number }) {
  const { setProjectToModify } = useContext(ProjectContext);

  const handleUpdate = async () => {
    try {
      console.log(id);

      const project = await readProjectWithStacks(id);
      setProjectToModify(project);
    } catch (error) {
      console.error("Failed to read project:", error);
    }
  };

  return (
    <button
      type="button"
      className="rounded-md border p-2 duration-300 hover:border-secondaryColor hover:bg-secondaryColor
        hover:text-darkColor"
      onClick={handleUpdate}
    >
      Mettre à jour
    </button>
  );
}
