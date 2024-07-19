"use client";

import { addProject } from "@/app/lib/actions";
import { Stack } from "@/app/lib/definitions";
import React from "react";

export default function ProjectFormSection({
  stacks,
}: {
  stacks: Array<Stack>;
}) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const file = formData.get("preview_picture_url") as File | null;
    if (file) {
      const uploadData = new FormData();
      uploadData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: uploadData,
      });

      if (!res.ok) {
        throw new Error(await res.text());
      }

      const imgPath = await res.json();
      formData.set("preview_picture_url", imgPath.path);
    }
    console.log(Object.fromEntries(formData));

    await addProject(formData);
  };

  return (
    <section
      id="contact"
      className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-screen-2xl flex-col items-center justify-center gap-4 bg-[center_top_4rem] bg-no-repeat py-6 pt-20 *:mx-auto md:gap-6"
    >
      <h1 className="mt-8 text-3xl md:text-4xl">
        Gestion des projets et technos
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full space-y-4 rounded-lg border-2 p-8 shadow-lg backdrop-blur-md lg:col-span-3 lg:p-12"
      >
        <label className="sr-only" htmlFor="name">
          Titre *
        </label>
        <input
          className="w-full rounded-lg border border-gray-200 bg-transparent p-3 text-sm"
          placeholder="Titre *"
          type="text"
          id="title"
          name="title"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="sr-only" htmlFor="phone">
              Nom du client
            </label>
            <input
              className="w-full rounded-lg border border-gray-200 bg-transparent p-3 text-sm"
              placeholder="Nom du client"
              type="text"
              id="client_name"
              name="client_name"
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="phone">
              Image projet *
            </label>
            <input
              className="w-full cursor-pointer rounded-lg border border-gray-200 bg-transparent p-3 text-sm file:mr-2 file:border-none"
              placeholder="Image du projet *"
              type="file"
              accept="image/*"
              id="preview_picture_url"
              name="preview_picture_url"
              required
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="phone">
              Lien du projet *
            </label>
            <input
              className="w-full rounded-lg border border-gray-200 bg-transparent p-3 text-sm"
              placeholder="Lien du projet"
              type="text"
              name="link"
              id="link"
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="phone">
              Repo Github
            </label>
            <input
              className="w-full rounded-lg border border-gray-200 bg-transparent p-3 text-sm"
              placeholder="Repo Github"
              type="text"
              name="github_repo"
              id="github_repo"
            />
          </div>
        </div>

        <fieldset className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
          <legend className="mb-3">Status du projet</legend>
          <label
            htmlFor="finished"
            className="block w-full cursor-pointer rounded-lg border-2 border-gray-200 p-3 duration-300 hover:border-secondaryColor has-[:checked]:border-secondaryColor has-[:checked]:bg-black has-[:checked]:text-lightColor"
            tabIndex={0}
          >
            <input
              className="sr-only"
              id="finished"
              type="radio"
              tabIndex={-1}
              name="status"
              value="Terminé"
            />

            <span className="text-sm"> Terminé </span>
          </label>
          <label
            htmlFor="working"
            className="block w-full cursor-pointer rounded-lg border-2 border-gray-200 p-3 duration-300 hover:border-secondaryColor has-[:checked]:border-secondaryColor has-[:checked]:bg-black has-[:checked]:text-white"
            tabIndex={0}
          >
            <input
              className="sr-only"
              id="working"
              type="radio"
              tabIndex={-1}
              name="status"
              value="En cours de développement"
            />

            <span className="text-sm"> En cours de développement </span>
          </label>
        </fieldset>

        <div>
          <label className="sr-only" htmlFor="message">
            Description
          </label>

          <textarea
            className="w-full rounded-lg border border-gray-200 bg-transparent p-3 text-sm"
            placeholder="Description *"
            rows={8}
            id="description"
            name="description"
            required
          ></textarea>
        </div>
        <label htmlFor="stacks_id" className="flex flex-col gap-2 text-center">
          Technos du projet
          <select
            name="stacks_id"
            id="stacks_id"
            multiple
            className="w-full rounded-lg border border-gray-200 bg-transparent p-3 text-sm"
          >
            {stacks.map((stack) => (
              <option key={stack.id} value={stack.id}>
                {stack.name}
              </option>
            ))}
          </select>
        </label>
        <label
          htmlFor="published"
          className="mt-4 flex w-full cursor-pointer flex-col gap-2 rounded-lg border border-gray-200 bg-transparent p-3 text-center text-base font-medium"
        >
          Publier le projet ?
          <input type="checkbox" id="published" name="published" />
        </label>

        <div className="mt-4 flex w-full items-center justify-center">
          <button
            type="submit"
            className="rounded-lg bg-secondaryColor px-10 py-4 font-medium text-darkColor duration-300 hover:bg-secondaryLight hover:text-lightColor sm:w-auto"
          >
            Enregistrer ce projet
          </button>
        </div>
      </form>
    </section>
  );
}
