import { Stack } from "@/app/lib/definitions";
import Image from "next/image";
import React from "react";

export default function StackSection({ stacks }: { stacks: Array<Stack> }) {
  return (
    <section
      id="technos"
      className="mx-auto flex min-h-[calc(100vh-4rem)] items-center justify-center bg-glassmorphism bg-no-repeat py-32 md:min-h-[calc(100vh-5rem)]"
    >
      <div className="grid max-w-screen-2xl grid-cols-1 gap-y-8 p-4 md:p-8 lg:grid-cols-2 lg:items-center lg:gap-x-16 lg:p-12">
        <div className="mx-auto text-center">
          <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
            Les technos du futur que je maîtrise
          </h2>

          <p className="my-4 text-lightColor">
            L'ensemble des librairies et framework que je connais et que je
            souhaite proposer dans mes services.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-block rounded-lg bg-secondaryColor px-12 py-3 text-sm font-medium text-darkColor transition duration-300 hover:bg-secondaryLight hover:text-lightColor focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Démarrez votre projet maintenant
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {stacks.map((stack) => (
            <a
              className="border-ligtColor flex flex-col items-center justify-center rounded-xl border bg-glassmorphism bg-center p-4 shadow-sm duration-300 hover:border-gray-200 hover:ring-1 hover:ring-primaryColor focus:outline-none focus:ring"
              href={stack.stack_link !== "url" ? stack.stack_link : ""}
              target="_blank"
              rel="noreferrer"
              key={stack.id}
            >
              <span className="inline-block rounded-lg bg-lightColor p-3">
                <Image
                  src={stack.logo !== "url" ? stack.logo : ""}
                  width={60}
                  height={60}
                  alt={`${stack.name} logo`}
                />
              </span>

              <h2 className="mt-2 font-bold">{stack.name}</h2>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
