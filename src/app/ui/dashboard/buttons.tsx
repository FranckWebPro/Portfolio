"use client";

import { useContext } from "react";
import { deleteProject, deleteStack, togglePublication } from "../../../lib/actions";
import { ProjectContext } from "./projectContext";
import Link from "next/link";
import { StackContext } from "./stackContext";
import { useRouter } from "next/navigation";
import { deleteFile, readProjectWithStacks, readStack } from "@/lib/supabase/data";

export function TogglePublicationButton({ id, published }: { id: number; published: boolean }) {
  const handleUpdatePublished = async () => {
    try {
      await togglePublication(id, published);
    } catch (error) {
      console.error("Error updating project publication:", error);
    }
  };
  return (
    <button
      type="button"
      onClick={handleUpdatePublished}
      className="rounded-md border p-2 duration-300 hover:border-secondaryColor hover:bg-secondaryColor
        hover:text-darkColor"
    >
      {published ? "Dépublier" : "Publier"}
    </button>
  );
}

export function DeleteProjectButton({ id, preview_picture_url }: { id: number; preview_picture_url: string }) {
  const handleDelete = async () => {
    try {
      if (confirm("Supprimer ce projet ?")) {
        await deleteFile(preview_picture_url);
        await deleteProject(id);
      }
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      className="rounded-md border p-2 duration-300 hover:border-secondaryColor hover:bg-secondaryColor
        hover:text-darkColor"
    >
      Supprimer
    </button>
  );
}

export function UpdateProjectButton({ id }: { id: number }) {
  const { setProjectToModify } = useContext(ProjectContext);
  const handleUpdate = async () => {
    try {
      const project = await readProjectWithStacks(id);
      const formElement = document.getElementById("editProjectForm") as HTMLFormElement;
      if (formElement) {
        formElement.reset();
      }
      setProjectToModify(project);
    } catch (error) {
      console.error("Failed to read project:", error);
    }
  };
  return (
    <Link
      className="rounded-md border p-2 duration-300 hover:border-secondaryColor hover:bg-secondaryColor
        hover:text-darkColor"
      onClick={handleUpdate}
      href="#form"
    >
      Mettre à jour
    </Link>
  );
}

export function ResetProjectButton() {
  const { setProjectToModify } = useContext(ProjectContext);
  const handleResetProject = () => {
    setProjectToModify(null);
  };
  return (
    <button
      type="button"
      className="rounded-md border p-2 duration-300 hover:border-secondaryColor hover:bg-secondaryColor
        hover:text-darkColor"
      onClick={handleResetProject}
    >
      Ajouter un projet
    </button>
  );
}

export function ResetStackButton() {
  const { setStackToModify } = useContext(StackContext);
  const handleResetStack = () => {
    setStackToModify(null);
  };
  return (
    <button
      type="button"
      className="rounded-md border p-2 duration-300 hover:border-secondaryColor hover:bg-secondaryColor
          hover:text-darkColor"
      onClick={handleResetStack}
    >
      Ajouter une techno
    </button>
  );
}

export function DeleteStackButton({ id, logo }: { id: number; logo: string }) {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      if (confirm("Supprimer cette stack ?")) {
        await deleteFile(logo);
        await deleteStack(id);
        router.refresh();
      }
    } catch (error) {
      console.error("Error deleting stack:", error);
    }
  };
  return (
    <button
      type="button"
      onClick={handleDelete}
      className="rounded-md border p-2 duration-300 hover:border-secondaryColor hover:bg-secondaryColor
          hover:text-darkColor"
    >
      Supprimer
    </button>
  );
}

export function UpdateStackButton({ id }: { id: number }) {
  const { setStackToModify } = useContext(StackContext);
  const handleUpdate = async () => {
    try {
      const stack = await readStack(id);
      const formElement = document.getElementById("editStackForm") as HTMLFormElement;
      if (formElement) {
        formElement.reset();
      }

      setStackToModify(stack);
    } catch (error) {
      console.error("Failed to read stack:", error);
    }
  };
  return (
    <Link
      className="rounded-md border p-2 duration-300 hover:border-secondaryColor hover:bg-secondaryColor
          hover:text-darkColor"
      onClick={handleUpdate}
      href="#form"
    >
      Mettre à jour
    </Link>
  );
}
