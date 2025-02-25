import Link from "next/link";
import React from "react";

export default function ServiceSection() {
  return (
    <section
      id="services"
      className="mx-auto flex min-h-[calc(100vh-4rem)] items-center justify-center bg-glassmorphism bg-no-repeat
        py-32 md:min-h-[calc(100vh-5rem)]"
    >
      <div
        className="max-w-screen-2xl flex flex-col gap-4 lg:gap-0 lg:flex-row p-4 md:p-8 lg:p-12 lg:py-16 lg:grid-cols-2
          lg:items-center lg:gap-x-16"
      >
        <div className="w-full text-center lg:order-2 lg:text-left mb-14">
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            Développement d'applications et sites web sur-mesure
          </h2>

          <p className="my-4 text-lightColor">
            Les services que je propose comme prestations, du développement traditionnel pour plus de flexibilité au no
            code avec Webflow pour plus de simplicité/rapidité en passant par le référencement naturel (SEO).
          </p>

          <Link
            href="#contact"
            className="mt-8 inline-block rounded-full bg-secondaryColor px-12 py-3 text-sm font-medium text-darkColor
              transition duration-300 hover:bg-secondaryLight hover:text-lightColor focus:outline-none focus:ring
              focus:ring-yellow-400 xl:text-base"
          >
            Démarrez votre projet maintenant
          </Link>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
          <article
            className="flex flex-col min-h-24 items-center justify-start gap-4 rounded-lg border border-lightColor
              bg-gray-50/[0.04] bg-center px-4 py-6 backdrop-blur-md md:min-h-40"
          >
            <h3 className="text-xl font-bold  text-center">Développement de site ou d'applications Web</h3>
            <p className="text-sm leading-6 text-gray-300 text-center lg:text-left lg:text-base">
              Développement à partir d'une maquette graphique donnée ou que je peux réaliser avec vous pour la convertir
              en un projet web, je porte une attention particulière à l'
              <strong>
                <abbr title="Expérience Utilisateur">UX</abbr>
              </strong>
              , à l'optimisation et à l'accéssibilité web. Je développe landing page, blog, portfolio, sites vitrines et
              applications web (<abbr title="Software as a Service">SaaS</abbr>...) .
            </p>
          </article>

          <article
            className="flex flex-col min-h-24 items-center justify-start gap-4 rounded-lg border border-lightColor
              bg-gray-50/[0.04] bg-center px-4 py-6 backdrop-blur-md md:min-h-40"
          >
            <h3 className="text-xl font-bold text-center">Référencement Google</h3>
            <p className="text-sm leading-6 text-gray-300 text-center lg:text-left lg:text-base">
              Optimisation de votre site/application web pour le référencement naturel (organique) sur Google et les
              autres moteurs de recherches, le{" "}
              <strong>
                <abbr title="Search Engine Optimization">SEO</abbr>
              </strong>
              .
            </p>
          </article>

          <article
            className="flex flex-col min-h-24 items-center justify-start gap-4 rounded-lg border border-lightColor
              bg-gray-50/[0.04] bg-center px-4 py-6 backdrop-blur-md md:min-h-40"
          >
            <h3 className="text-xl font-bold text-center">Web Design</h3>
            <p className="text-sm leading-6 text-gray-300 text-center lg:text-left lg:text-base">
              Création de votre design et branding sur Figma, avec phase de wireframe, maquettage ou bien directement
              sur Webflow.
            </p>
          </article>

          <article
            className="flex flex-col min-h-24 items-center justify-start gap-4 rounded-lg border border-lightColor
              bg-gray-50/[0.04] bg-center px-4 py-6 backdrop-blur-md md:min-h-40"
          >
            <h3 className="text-xl font-bold text-center">Accessibilité</h3>
            <p className="text-sm leading-6 text-gray-300 text-center lg:text-left lg:text-base">
              Audit et amélioration de l'<strong>accessibilité</strong> de votre site web, en suivant les normes
              <abbr title="Web Content Accessibility Guidelines"> WCAG</abbr>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
