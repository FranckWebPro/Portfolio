import React from "react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-screen w-full items-center justify-center bg-hero bg-[center_top_4rem] bg-no-repeat py-32"
    >
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
            className="block w-full rounded-lg border-2 border-transparent bg-secondaryColor px-12 py-3 text-sm font-medium text-darkColor duration-300 hover:border-2 hover:border-secondaryColor hover:bg-transparent hover:text-lightColor focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            href="#"
          >
            Me contacter
          </a>

          <a
            className="block w-full rounded-lg border border-secondaryColor px-12 py-3 text-sm font-medium text-lightColor duration-300 hover:bg-secondaryColor hover:text-darkColor focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            href="#"
          >
            Voir mes projets
          </a>
        </div>
      </div>
    </section>
  );
}
