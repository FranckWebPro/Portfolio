"use client";

import { addStack } from "@/lib/actions";
import { MyEdgeStoreRouter } from "@/lib/definitions";
import React from "react";

export default function AddStackForm({ edgestore }: { edgestore: MyEdgeStoreRouter }) {
  const handleAddStack = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const file = formData.get("logo") as File | null;
    if (file) {
      const res = await edgestore.myPublicImages.upload({ file });
      formData.set("logo", res.url);
    }
    await addStack(formData);
    form.reset();
  };

  return (
    <form
      onSubmit={handleAddStack}
      id="addStackForm"
      className="w-full space-y-4 rounded-lg border-2 p-8 shadow-lg backdrop-blur-md lg:col-span-3"
    >
      <label className="sr-only" htmlFor="name">
        Nom *
      </label>
      <input
        className="w-full rounded-lg border border-gray-200 bg-transparent p-3 text-sm"
        placeholder="Nom *"
        type="text"
        id="name"
        name="name"
        required
      />
      <div>
        <label className="sr-only" htmlFor="stack_link">
          Lien de la techno *
        </label>
        <input
          className="w-full rounded-lg border border-gray-200 bg-transparent p-3 text-sm"
          placeholder="Lien de la techno *"
          type="text"
          name="stack_link"
          id="stack_link"
          required
        />
      </div>
      <div>
        <label className="sr-only" htmlFor="logo">
          Image projet *
        </label>
        <input
          className="w-full cursor-pointer rounded-lg border border-gray-200 bg-transparent p-3 text-sm file:mr-2
              file:border-none"
          placeholder="Image du projet *"
          type="file"
          accept="image/*"
          id="logo"
          name="logo"
          required
        />
      </div>
      <div className="mt-4 flex w-full items-center justify-center">
        <button
          type="submit"
          className="rounded-lg bg-secondaryColor px-6 py-3 font-medium text-darkColor duration-300
            hover:bg-secondaryLight hover:text-lightColor sm:w-auto"
        >
          Enregistrer cette techno
        </button>
      </div>
    </form>
  );
}
