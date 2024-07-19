"use server";

import Image from "next/image";
import React from "react";
import profilPicture from "../images/prprofil.png";

export default async function HeroSection() {
  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-screen w-full items-center justify-center bg-hero bg-[center_top_4rem] bg-no-repeat py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold leading-8 text-transparent sm:text-5xl">
          Bienvenue sur mon Portfolio
          <span className="sm:block">
            Moi c'est Franck, <br />
            Développeur Web Fullstack
          </span>
        </h1>
        <Image
          src={profilPicture}
          width={200}
          height={200}
          alt="Photo de profil de Franck"
          className="absolute bottom-[20%] right-[15%] rounded-[1000px]"
        />
        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
          Le développement web au service de votre business
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/CVFG.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-lg border-2 border-transparent bg-secondaryColor px-12 py-3 text-sm font-medium text-darkColor duration-300 hover:border-2 hover:border-secondaryColor hover:bg-transparent hover:text-lightColor focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            download
          >
            Télécharger mon CV
          </a>
          <a
            className="block w-full rounded-lg border border-secondaryColor px-12 py-3 text-sm font-medium text-lightColor duration-300 hover:bg-secondaryColor hover:text-darkColor focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            href="#projects"
          >
            Voir mes projets
          </a>
        </div>
      </div>
    </section>
  );
}
