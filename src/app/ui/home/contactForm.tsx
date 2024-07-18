import React from "react";

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="mx-auto min-h-[calc(100vh-4rem)] w-full max-w-screen-2xl"
    >
      <div className="grid max-w-screen-2xl grid-cols-1 items-center gap-x-12 gap-y-8 p-4 py-16 md:p-8 lg:grid-cols-5 lg:p-12">
        <div className="flex flex-col gap-3 lg:col-span-2 lg:py-12">
          <h2 className="mb-6 max-w-80 text-3xl font-bold sm:text-4xl">
            Un projet de fou ? Discutons-en :
          </h2>
          <p className="mb-4 max-w-xl text-lg">
            At the same time, the fact that we are wholly owned and totally
            independent from manufacturer and other group control gives you
            confidence that we will only recommend what is right for you.
          </p>

          <a
            href="mailto:contact@franckwebpro.com"
            className="text-2xl font-bold text-secondaryColor duration-300 hover:text-secondaryLight"
          >
            contact@franckwebpro.com
          </a>

          <address className="mt-2 not-italic">
            Adresse: Le monde entier
          </address>
        </div>

        <form
          action="#"
          className="space-y-4 rounded-lg border-2 bg-glassmorphism p-8 shadow-lg backdrop-blur-md lg:col-span-3 lg:p-12"
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
              className="block w-full cursor-pointer rounded-lg border-2 border-gray-200 p-3 hover:border-secondaryLight has-[:checked]:border-secondaryLight has-[:checked]:bg-black has-[:checked]:text-white"
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
              className="block w-full cursor-pointer rounded-lg border-2 border-gray-200 p-3 hover:border-secondaryLight has-[:checked]:border-secondaryLight has-[:checked]:bg-black has-[:checked]:text-lightColor"
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
              className="block w-full cursor-pointer rounded-lg border-2 border-gray-200 p-3 hover:border-secondaryLight has-[:checked]:border-secondaryLight has-[:checked]:bg-black has-[:checked]:text-white"
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
              className="inline-block w-full rounded-lg bg-secondaryColor px-5 py-3 font-medium text-darkColor duration-300 hover:bg-secondaryLight hover:text-lightColor sm:w-auto"
            >
              Envoyez moi vos mots doux
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
