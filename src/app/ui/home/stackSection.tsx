import { Stack } from "@/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function StackSection({ stacks }: { stacks: Array<Stack> }) {
  return (
    <section
      id="technos"
      className="mx-auto flex min-h-[calc(100vh-4rem)] items-center justify-center bg-glassmorphism bg-no-repeat
        py-32 md:min-h-[calc(100vh-5rem)]"
    >
      <div
        className="max-w-screen-2xl flex flex-col lg:flex-row p-4 md:p-8 lg:p-12 lg:py-16 lg:grid-cols-2
          lg:items-center lg:gap-x-16"
      >
        <div className="w-full text-center lg:text-left mb-14">
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">Les technos du futur que je maîtrise</h2>
          <p className="my-4 text-lightColor">
            L'ensemble des langages, librairies et frameworks, code ou no code, que je connais et que je souhaite
            proposer dans mes services... je suis bien sûr ouvert à de nouvelles découvertes et à l'apprentissage
            d'autres technos si besoin pour votre projet !
          </p>

          <Link
            href="#contact"
            className="mt-8 inline-block rounded-full bg-secondaryColor px-12 py-3 text-sm font-medium text-darkColor
              transition duration-300 hover:bg-secondaryLight hover:text-lightColor focus:outline-none focus:ring
              focus:ring-yellow-400 xl:text-base"
          >
            Discutons de votre projet
          </Link>
        </div>

        <div className="w-full grid grid-cols-2 gap-4 sm:grid-cols-3">
          {stacks.map((stack) => (
            <Link
              className="border-ligtColor flex flex-col items-center justify-center rounded-xl border bg-glassmorphism
                bg-center py-8 px-4 shadow-sm duration-300 hover:border-gray-200 hover:ring-1
                hover:ring-primaryColor focus:outline-none focus:ring"
              href={stack.stack_link !== "url" ? stack.stack_link : ""}
              target="_blank"
              rel="noreferrer"
              key={stack.id}
            >
              <Image
                src={stack.logo !== "url" ? stack.logo : ""}
                width={60}
                height={60}
                unoptimized
                alt={`${stack.name} logo`}
                className={`inline-block rounded-lg bg-lightColor p-3 ${stack.name === "Express" && "min-h-14"}`}
              />
              <h3 className="mt-2 font-bold">{stack.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
