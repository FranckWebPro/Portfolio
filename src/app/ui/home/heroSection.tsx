"use server";

import Image from "next/image";
import React from "react";
import profilPicture from "../images/prprofil.png";

export default async function HeroSection() {
  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-screen w-full flex-col items-center justify-center gap-8 bg-hero
        bg-[center_top_4rem] bg-no-repeat px-4 py-32 md:px-8"
    >
      <div className="mx-auto flex max-w-3xl flex-col w-11//12 items-center justify-center gap-8 text-center">
        <h1
          className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold
            leading-8 text-transparent sm:text-4xl md:text-5xl"
        >
          Bienvenue sur mon Portfolio
          <span className="block">
            Moi c'est Franck, <br />
            Développeur Web Next.js
          </span>
        </h1>
        <p className="mx-auto max-w-xl sm:text-xl/relaxed">
          Entrepreneur et développeur fullstack freelance au service de votre entreprise
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/CVFG2.pdf"
            target="_blank"
            rel="noreferrer"
            className="block w-10/12 md:w-auto rounded-lg border-2 border-transparent bg-secondaryColor px-12 py-3 text-sm
              font-medium text-darkColor duration-300 hover:border-2 hover:border-secondaryColor
              hover:bg-transparent hover:text-lightColor focus:outline-none focus:ring active:text-opacity-75"
            download
          >
            Télécharger mon CV
          </a>
          <a
            className="block w-10/12 rounded-lg md:w-auto border border-secondaryColor px-12 py-3 text-sm font-medium
              text-lightColor duration-300 hover:bg-secondaryColor hover:text-darkColor focus:outline-none
              focus:ring active:bg-blue-500"
            href="#projects"
          >
            Voir mes projets
          </a>
        </div>
      </div>
      <Image
        src={profilPicture}
        width={200}
        height={200}
        alt="Photo de profil de Franck"
        className="bottom-[20%] right-[15%] h-32 w-32 rounded-[1000px] lg:absolute"
      />
    </section>
  );
}
