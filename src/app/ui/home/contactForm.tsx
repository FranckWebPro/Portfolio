export default function ContactForm() {
  return (
    <section id="contact" className="mx-auto min-h-[calc(100vh-4rem)] w-full max-w-screen-2xl py-12">
      <div
        className="grid max-w-screen-2xl grid-cols-1 items-center gap-x-12 gap-y-8 p-4 py-16 md:p-8 lg:grid-cols-5
          lg:p-12"
      >
        <div className="flex flex-col gap-3 lg:col-span-2 lg:py-12">
          <h2 className="mb-6 max-w-80 text-3xl font-bold md:text-4xl">Un projet de fou ? Discutons-en :</h2>
          <p className="mb-4 max-w-xl text-lg">
            Que vous soyez une entreprise, professionnel indépendant ou même juste curieux à propos du développement
            web, n'hésitez pas à me contacter. Vous pouvez me joindre par mail ou bien par le formulaire, je vous
            répondrai au plus vite !
          </p>

          <a
            href="mailto:contact@franckwebpro.com"
            className="text-lg font-bold text-secondaryColor duration-300 hover:text-secondaryLight lg:text-2xl"
          >
            contact@franckwebpro.com
          </a>
        </div>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="space-y-4 rounded-lg border-2 bg-glassmorphism p-8 shadow-lg backdrop-blur-md lg:col-span-3 lg:p-12"
        >
          <input type="hidden" aria-hidden name="access_key" value="280330b4-d8a3-4a40-b1bb-05c086f6cf92"></input>
          <div>
            <label className="sr-only" htmlFor="name">
              Nom
            </label>
            <input
              className="w-full rounded-lg border border-gray-200 bg-transparent p-3 text-sm duration-300
                hover:border-primaryLight focus:outline-primaryColor"
              placeholder="Nom *"
              type="text"
              id="name"
              name="name"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 bg-transparent p-3 text-sm duration-300
                  hover:border-primaryLight focus:outline-primaryColor"
                placeholder="Adresse email *"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">
                Phone
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 bg-transparent p-3 text-sm duration-300
                  hover:border-primaryLight focus:outline-primaryColor"
                placeholder="Numéro de téléphone"
                type="tel"
                id="phone"
                name="phone"
              />
            </div>
          </div>

          <fieldset className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            <legend className="mb-3">Quel sont vos besoins ?</legend>
            <label
              htmlFor="conseil"
              className="block w-full cursor-pointer rounded-lg border-2 border-gray-200 p-3 duration-300
                hover:border-primaryLight has-[:checked]:border-primaryLight has-[:checked]:bg-black
                has-[:checked]:text-white"
              tabIndex={0}
            >
              <input className="sr-only" id="conseil" type="radio" tabIndex={-1} name="option" />

              <span className="text-sm"> Conseil </span>
            </label>
            <label
              htmlFor="dev"
              className="block w-full cursor-pointer rounded-lg border-2 border-gray-200 p-3 duration-300
                hover:border-primaryLight has-[:checked]:border-primaryLight has-[:checked]:bg-black
                has-[:checked]:text-lightColor"
              tabIndex={0}
            >
              <input className="sr-only" id="dev" type="radio" tabIndex={-1} name="option" />

              <span className="text-sm"> Développement web </span>
            </label>
            <label
              htmlFor="reprise"
              className="block w-full cursor-pointer rounded-lg border-2 border-gray-200 p-3 duration-300
                hover:border-primaryLight has-[:checked]:border-primaryLight has-[:checked]:bg-black
                has-[:checked]:text-white"
              tabIndex={0}
            >
              <input className="sr-only" id="reprise" type="radio" tabIndex={-1} name="option" />

              <span className="text-sm"> Maintenance </span>
            </label>
          </fieldset>

          <div>
            <label className="sr-only" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full rounded-lg border border-gray-200 bg-transparent p-3 text-sm duration-300
                hover:border-primaryLight focus:outline-primaryColor"
              placeholder="Message *"
              rows={8}
              id="message"
              name="message"
              required
            ></textarea>
          </div>
          <label aria-hidden className="hidden" htmlFor="botckeck">
            <input aria-hidden title="botcheck" type="checkbox" name="botcheck" className="hidden" />
          </label>
          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-full border border-secondaryColor bg-secondaryColor px-5 py-3 font-medium
                text-darkColor duration-300 hover:border-primaryLight hover:bg-transparent hover:text-lightColor
                sm:w-auto"
            >
              Envoyez-moi vos mots doux
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
