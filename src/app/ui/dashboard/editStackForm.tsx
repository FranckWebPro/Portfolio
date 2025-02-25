"use client";

import { editStack } from "@/lib/actions";
import { MyEdgeStoreRouter } from "@/lib/definitions";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { StackContext } from "./stackContext";

export default function EditStackForm({ edgestore }: { edgestore: MyEdgeStoreRouter }) {
  const { stackToModify, setStackToModify } = useContext(StackContext);
  const [currentPreviewImg, setCurrentPreviewImg] = useState(stackToModify!.logo);

  const handleEditProject = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const file = formData.get("logo") as File;
    if (file.size !== 0 && currentPreviewImg.startsWith("https://files.edgestore.dev")) {
      const res = await edgestore.myPublicImages.upload({
        file,
        options: {
          replaceTargetUrl: currentPreviewImg,
        },
      });
      formData.set("logo", res.url);
    } else if (currentPreviewImg.startsWith("https://files.edgestore.dev")) {
      formData.set("logo", currentPreviewImg);
    } else {
      const res = await edgestore.myPublicImages.upload({ file });
      formData.set("logo", res.url);
    }
    await editStack(stackToModify!.id, formData);
    form.reset();
    setStackToModify(null);
  };

  useEffect(() => {
    setCurrentPreviewImg(stackToModify!.logo);
  }, [stackToModify]);

  return (
    <form
      id="editStackForm"
      onSubmit={handleEditProject}
      className="w-full space-y-4 rounded-lg border-2 p-8 shadow-lg backdrop-blur-md lg:col-span-3"
    >
      <label className="sr-only" htmlFor="name">
        Nom *
      </label>
      <input
        className="w-full rounded-lg border border-gray-200 bg-transparent p-3 text-sm"
        placeholder="Titre *"
        type="text"
        id="name"
        name="name"
        defaultValue={stackToModify?.name}
      />
      <div>
        <label className="sr-only" htmlFor="logo">
          Image projet *
        </label>
        <input
          className="w-full cursor-pointer rounded-lg border border-gray-200 bg-transparent p-3 text-sm file:mr-2
              file:border-none mb-4"
          placeholder="Logo de la techno *"
          type="file"
          accept="image/*"
          id="logo"
          name="logo"
        />
        <Image
          width={384}
          height={384}
          src={currentPreviewImg}
          alt=""
          unoptimized
          className="max-w-56 mx-auto xl:max-w-96"
        />
      </div>
      <div>
        <label className="sr-only" htmlFor="stack_link">
          Lien de la techno *
        </label>
        <input
          className="w-full rounded-lg border border-gray-200 bg-transparent p-3 text-sm"
          placeholder="Lien du projet"
          type="text"
          name="stack_link"
          id="stack_link"
          defaultValue={stackToModify?.stack_link}
        />
      </div>
      <div className="mt-4 flex w-full items-center justify-center">
        <button
          type="submit"
          className="rounded-lg bg-secondaryColor px-8 py-3 font-medium text-darkColor duration-300
            hover:bg-secondaryLight hover:text-lightColor sm:w-auto"
        >
          Mettre à jour cette techno
        </button>
      </div>
    </form>
  );
}
