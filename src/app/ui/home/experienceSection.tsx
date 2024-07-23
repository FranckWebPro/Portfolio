import React from "react";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mx-auto flex min-h-[calc(100vh-4rem)] items-center justify-center bg-glassmorphism bg-center bg-no-repeat py-32 md:min-h-[calc(100vh-5rem)]"
    >
      <div className="w-full max-w-screen-2xl p-4 py-8 sm:py-12 md:p-8 lg:p-12 lg:py-16">
        <hgroup className="mx-auto max-w-xl">
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            Mon expérience
          </h2>

          <p className="mt-4 text-center text-gray-300 leading-8">
            Ancien fusilier parachutiste passionné par le monde du web et
            l'entrepreneuriat, je me suis reconverti comme développeur web
            freelance. Je développe aussi mes propres logiciels notamment
            LinkerFlow, mon projet actuel.
          </p>
        </hgroup>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:gap-8 xl:gap-10 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex min-h-40 items-center justify-center gap-4 rounded-lg border border-lightColor bg-gray-50/[0.04] bg-center px-4 py-6 backdrop-blur-md md:min-h-56">
            <span className="shrink-0 rounded-lg p-4">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>

            <div>
              <h2 className="text-lg font-bold mb-4">
                LinkerFlow, SaaS outil Webflow
              </h2>

              <p className="mt-1 text-sm text-gray-300 leading-6">
                Je travaille actuellement au développement d'un outil Webflow afin d'automatiser le maillage interne, 
                afin d'améliorer le <strong>référencement</strong> des sites Webflow.
              </p>
            </div>
          </div>

          <div className="flex min-h-40 items-center justify-center gap-4 rounded-lg border border-lightColor bg-gray-50/[0.04] bg-center px-4 py-6 backdrop-blur-md md:min-h-56">
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>

            <div>
              <h2 className="text-lg font-bold mb-4">
                Formation développeur JS, Wild Code School
              </h2>

              <p className="mt-1 text-sm text-gray-300 leading-6">
                J'ai suivi durant 5 mois (Février à Juillet 2024) une formation intensive de développeur web où j'ai pu apprendre 
                en plus des technologies React / Express / Node.js / MySQL / Git et Github, des compétences dans l'<strong>accéssibilité web</strong>, 
                les méthodes Agile tel que Scrum et surtout le travail en équipe sur plusieurs projets.
              </p>
            </div>
          </div>

          <div className="flex min-h-40 items-center justify-center gap-4 rounded-lg border border-lightColor bg-gray-50/[0.04] bg-center 
          px-4 py-6 backdrop-blur-md md:min-h-56">
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>

            <div>
              <h2 className="text-lg font-bold mb-4">
                Agence No Code, mon agence Webflow
              </h2>

              <p className="mt-1 text-sm text-gray-300 leading-6">
                De fin 2023 à 2024 à 2024, j'ai travailler dur afin de trouver des clients en tant que freelance développeur Webflow, 
                j'ai souhaité mettre en pratique mes compétences en <strong>référencement</strong> <abbr title="Search Engine Optimization"> (SEO) </abbr>
                afin de faire monter mon propre site d'Agence Webflow 
                ( <a href="https://www.agencenocode.com/" target="_blank" className="text-primaryColor hover:text-primaryLight duration-300">Agence No Code</a> ) , 
                sur lequel je travaille aujourd'hui avec des partenaires en tant que freelance.
              </p>
            </div>
          </div>

          <div className="flex min-h-40 items-center justify-center gap-4 rounded-lg border border-lightColor bg-gray-50/[0.04] bg-center px-4 py-6 backdrop-blur-md md:min-h-56">
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>

            <div>
              <h2 className="text-lg font-bold mb-4">
                Spylead, Site de listing produit tech
              </h2>

              <p className="mt-1 text-sm text-gray-300 leading-6">
                Nous avons développé sur Webflow avec un associé, 
                <a href="https://www.spylead.com/" target="_blank" className="text-primaryColor hover:text-primaryLight duration-300"> Spylead </a>, 
                un site de listing de produit tech, tel que les scraper google maps, les fournisseurs d'adresses IP...
              </p>
            </div>
          </div>

          <div className="flex min-h-40 items-center justify-center gap-4 rounded-lg border border-lightColor bg-gray-50/[0.04] bg-center px-4 py-6 backdrop-blur-md md:min-h-56">
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>

            <div>
              <h2 className="text-lg font-bold mb-4">
                Développeur Webflow freelance
              </h2>

              <p className="mt-1 text-sm text-gray-300 leading-6">
                Lors de la fin de mon contrat j'ai souhaité me reconvertir dans le
                web, pour cela je me suis formé en autodidacte sur Webflow et j'ai pu proposé mes
                services en tant que dévelopeur <strong>Webflow</strong> freelance.
              </p>
            </div>
          </div>

          <div className="flex min-h-40 items-center justify-center gap-4 rounded-lg border border-lightColor bg-gray-50/[0.04] bg-center px-4 py-6 backdrop-blur-md md:min-h-56">
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>

            <div>
              <h2 className="text-lg font-bold mb-4">
                Fusilier parachutiste, Armée de l'Air
              </h2>

              <p className="mt-1 text-sm text-gray-300 leading-6">
                Après plus d'un an de réserve je m'engage en tant qu'élève
                pilote dans l'Armée de l'Air en 2017... Souhaitant plus d'action et de
                travail physique je change de spécialité pour rentré chez les
                fusilier parachutiste et effectu de nombreux stages de
                formations au cours de plus de 6 ans de services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
