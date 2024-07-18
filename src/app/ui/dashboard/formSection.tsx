import React from "react";

export default function FormSection() {
  return (
    <section
      id="contact"
      className="mx-auto min-h-[calc(100vh-4rem)] w-full max-w-screen-2xl items-center py-16"
    >
      <form
        action="#"
        className="bg-glassmorphism w-full space-y-4 rounded-lg border-2 p-8 shadow-lg backdrop-blur-md lg:col-span-3 lg:p-12"
      >
        <div>
          <label className="sr-only" htmlFor="name">
            Name
          </label>
          <input
            className="w-full rounded-lg border border-gray-200 bg-transparent p-3 text-sm"
            placeholder="Nom *"
            type="text"
            id="name"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              className="w-full rounded-lg border border-gray-200 bg-transparent p-3 text-sm"
              placeholder="Adresse email *"
              type="email"
              id="email"
              required
            />
          </div>

          <div>
            <label className="sr-only" htmlFor="phone">
              Phone
            </label>
            <input
              className="w-full rounded-lg border border-gray-200 bg-transparent p-3 text-sm"
              placeholder="Numéro de téléphone"
              type="tel"
              id="phone"
            />
          </div>
        </div>

        <fieldset className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
          <legend className="mb-3">Quel service vous intéresse ?</legend>
          <label
            htmlFor="Option1"
            className="hover:border-secondaryColor has-[:checked]:border-secondaryLight block w-full cursor-pointer rounded-lg border-2 border-gray-200 p-3 has-[:checked]:bg-black has-[:checked]:text-white"
            tabIndex={0}
          >
            <input
              className="sr-only"
              id="Option1"
              type="radio"
              tabIndex={-1}
              name="option"
            />

            <span className="text-sm"> Option 1 </span>
          </label>
          <label
            htmlFor="Option2"
            className="has-[:checked]:text-lightColor hover:border-primaryLight has-[:checked]:border-primaryLight block w-full cursor-pointer rounded-lg border-2 border-gray-200 p-3 has-[:checked]:bg-black"
            tabIndex={0}
          >
            <input
              className="sr-only"
              id="Option2"
              type="radio"
              tabIndex={-1}
              name="option"
            />

            <span className="text-sm"> Option 2 </span>
          </label>
          <label
            htmlFor="Option3"
            className="hover:border-primaryLight has-[:checked]:border-primaryLight block w-full cursor-pointer rounded-lg border-2 border-gray-200 p-3 has-[:checked]:bg-black has-[:checked]:text-white"
            tabIndex={0}
          >
            <input
              className="sr-only"
              id="Option3"
              type="radio"
              tabIndex={-1}
              name="option"
            />

            <span className="text-sm"> Option 3 </span>
          </label>
        </fieldset>

        <div>
          <label className="sr-only" htmlFor="message">
            Message
          </label>

          <textarea
            className="w-full rounded-lg border border-gray-200 bg-transparent p-3 text-sm"
            placeholder="Message *"
            rows={8}
            id="message"
            required
          ></textarea>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="bg-secondaryColor text-darkColor hover:bg-secondaryLight inline-block w-full rounded-lg px-5 py-3 font-medium duration-300 sm:w-auto"
          >
            Envoyez moi vos mots doux
          </button>
        </div>
      </form>
    </section>
  );
}
