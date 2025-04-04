import Link from "next/link";
import React from "react";

interface ServiceSectionDictionary {
  title: string;
  description: string;
  start_project: string;
  web_development: { title: string; description: string };
  seo: { title: string; description: string };
  web_design: { title: string; description: string };
  accessibility: { title: string; description: string };
}

export default function ServiceSection({ dictionnary }: { dictionnary: ServiceSectionDictionary }) {
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
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">{dictionnary.title}</h2>

          <p className="my-4 text-lightColor" dangerouslySetInnerHTML={{ __html: dictionnary.description }}></p>

          <Link
            href="#contact"
            className="mt-8 inline-block rounded-full bg-secondaryColor px-12 py-3 text-sm font-medium text-darkColor
              transition duration-200 hover:bg-secondaryLight hover:text-lightColor focus:outline-none focus:ring
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
            <h3 className="text-xl font-bold  text-center">{dictionnary.web_development.title}</h3>
            <p
              className="text-sm leading-6 text-gray-300 text-center lg:text-left lg:text-base"
              dangerouslySetInnerHTML={{ __html: dictionnary.web_development.description }}
            ></p>
          </article>

          <article
            className="flex flex-col min-h-24 items-center justify-start gap-4 rounded-lg border border-lightColor
              bg-gray-50/[0.04] bg-center px-4 py-6 backdrop-blur-md md:min-h-40"
          >
            <h3 className="text-xl font-bold text-center">{dictionnary.seo.title}</h3>
            <p
              className="text-sm leading-6 text-gray-300 text-center lg:text-left lg:text-base"
              dangerouslySetInnerHTML={{ __html: dictionnary.seo.description }}
            ></p>
          </article>

          <article
            className="flex flex-col min-h-24 items-center justify-start gap-4 rounded-lg border border-lightColor
              bg-gray-50/[0.04] bg-center px-4 py-6 backdrop-blur-md md:min-h-40"
          >
            <h3 className="text-xl font-bold text-center">{dictionnary.web_design.title}</h3>
            <p
              className="text-sm leading-6 text-gray-300 text-center lg:text-left lg:text-base"
              dangerouslySetInnerHTML={{ __html: dictionnary.web_design.description }}
            ></p>
          </article>

          <article
            className="flex flex-col min-h-24 items-center justify-start gap-4 rounded-lg border border-lightColor
              bg-gray-50/[0.04] bg-center px-4 py-6 backdrop-blur-md md:min-h-40"
          >
            <h3 className="text-xl font-bold text-center">{dictionnary.accessibility.title}</h3>
            <p
              className="text-sm leading-6 text-gray-300 text-center lg:text-left lg:text-base"
              dangerouslySetInnerHTML={{ __html: dictionnary.accessibility.description }}
            ></p>
          </article>
        </div>
      </div>
    </section>
  );
}
