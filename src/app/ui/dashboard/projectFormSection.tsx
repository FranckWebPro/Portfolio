"use client";

import { Stack } from "@/app/lib/definitions";
import React, { useState } from "react";

export default function ProjectFormSection({
  stacks,
}: {
  stacks: Array<Stack>;
}) {
  const [file, setFile] = useState<File>();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;

    try {
      const data = new FormData();
      data.set("file", file);

      const res = await fetch("/api/upload", { method: "POST", body: data });

      if (!res.ok) {
        throw new Error(await res.text());
      }
    } catch (error: unknown) {
      console.error(error);
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-screen-2xl items-center justify-center bg-[center_top_4rem] bg-no-repeat pt-20 *:mx-auto"
    >
      <form
        onSubmit={onSubmit}
        className="w-full space-y-4 rounded-lg border-2 bg-glassmorphism p-8 shadow-lg backdrop-blur-md lg:col-span-3 lg:p-12"
      >
        <div>
          <label className="sr-only" htmlFor="name">
            Titre *
          </label>
          <input
            className="w-full rounded-lg border border-gray-200 bg-transparent p-3 text-sm"
            placeholder="Titre *"
            type="text"
            id="titre"
          />
        </div>

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
              onChange={(e) => setFile(e.target.files?.[0])}
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
              id="github_repo"
            />
          </div>
        </div>

        <fieldset className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
          <legend className="mb-3">Souhaitez vous publier ce projet ?</legend>
          <label
            htmlFor="published"
            className="block w-full cursor-pointer rounded-lg border-2 border-gray-200 p-3 hover:border-secondaryColor has-[:checked]:border-secondaryColor has-[:checked]:bg-black has-[:checked]:text-lightColor"
            tabIndex={0}
          >
            <input
              className="sr-only"
              id="published"
              type="radio"
              tabIndex={-1}
              name="published"
            />

            <span className="text-sm"> Publié </span>
          </label>
          <label
            htmlFor="draft"
            className="block w-full cursor-pointer rounded-lg border-2 border-gray-200 p-3 hover:border-secondaryColor has-[:checked]:border-secondaryColor has-[:checked]:bg-black has-[:checked]:text-white"
            tabIndex={0}
          >
            <input
              className="sr-only"
              id="draft"
              type="radio"
              tabIndex={-1}
              name="published"
            />

            <span className="text-sm"> Brouillon </span>
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
            required
          ></textarea>
        </div>
        <label htmlFor="stacks" className="flex flex-col gap-2 text-center">
          Technos du projet
          <select
            name="stacks"
            id="stacks"
            multiple
            className="w-full rounded-lg border border-gray-200 bg-transparent p-3 text-sm"
          >
            {stacks.map((stack) => (
              <option key={stack.id} value={stack.name}>
                {stack.name}
              </option>
            ))}
          </select>
        </label>

        <div className="mt-4">
          <button
            type="submit"
            className="inline-block w-full rounded-lg bg-secondaryColor px-6 py-3 font-medium text-darkColor duration-300 hover:bg-secondaryLight hover:text-lightColor sm:w-auto"
          >
            Enregistrer ce projet
          </button>
        </div>
      </form>
    </section>
  );
}
