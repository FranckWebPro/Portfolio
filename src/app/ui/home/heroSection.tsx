import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-hero mx-auto flex min-h-screen w-full items-center justify-center bg-[center_top_4rem] bg-no-repeat py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
          Understand User Flow.
          <span className="sm:block"> Increase Conversion. </span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          illo tenetur fuga ducimus numquam ea!
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="bg-secondaryColor text-darkColor hover:border-secondaryColor hover:text-lightColor block w-full rounded-lg border-2 border-transparent px-12 py-3 text-sm font-medium duration-300 hover:border-2 hover:bg-transparent focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            href="#"
          >
            Me contacter
          </a>

          <a
            className="border-secondaryColor hover:bg-secondaryColor text-lightColor hover:text-darkColor block w-full rounded-lg border px-12 py-3 text-sm font-medium duration-300 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            href="#"
          >
            Voir mes projets
          </a>
        </div>
      </div>
    </section>
  );
}
