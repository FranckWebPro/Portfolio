import { deleteProject, togglePublication } from "../lib/actions";

export function UpdateProject({ id, published }: { id: number; published: boolean }) {
  const updateProjectWithId = togglePublication.bind(null, id, published);
  return (
    <form action={updateProjectWithId}>
      <button
        className="rounded-md border p-2 duration-300 hover:border-secondaryColor hover:bg-secondaryColor
          hover:text-darkColor"
      >
        Publier / Dépublier
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
