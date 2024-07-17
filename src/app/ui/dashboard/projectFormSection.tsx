import React from "react";

export default function ProjectFormSection() {
  return (
    <section
      id="contact"
      className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-screen-2xl items-center justify-center bg-[center_top_4rem] bg-no-repeat pt-20 *:mx-auto"
    >
      <form
        action="#"
        className="bg-glassmorphism w-full space-y-4 rounded-lg border-2 p-8 shadow-lg backdrop-blur-md lg:col-span-3 lg:p-12"
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
              id="preview_picture_url"
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
            className="has-[:checked]:text-lightColor hover:border-secondaryColor has-[:checked]:border-secondaryColor block w-full cursor-pointer rounded-lg border-2 border-gray-200 p-3 has-[:checked]:bg-black"
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
            className="hover:border-secondaryColor has-[:checked]:border-secondaryColor block w-full cursor-pointer rounded-lg border-2 border-gray-200 p-3 has-[:checked]:bg-black has-[:checked]:text-white"
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

        <div className="mt-4">
          <button
            type="submit"
            className="bg-secondaryColor text-darkColor hover:text-lightColor hover:bg-secondaryLight inline-block w-full rounded-lg px-6 py-3 font-medium duration-300 sm:w-auto"
          >
            Enregistrer ce projet
          </button>
        </div>
      </form>
    </section>
  );
}
