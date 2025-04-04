"use server";

import Image from "next/image";
import React from "react";
import Link from "next/link";

export default async function HeroSection({
  dictionnary,
  lang,
}: {
  dictionnary: Record<string, string>;
  lang: string;
}) {
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
          {dictionnary.welcome_message}
          <span className="block" dangerouslySetInnerHTML={{ __html: dictionnary.introduction }}></span>
        </h1>
        <p
          className="mx-auto max-w-xl sm:text-xl/relaxed"
          dangerouslySetInnerHTML={{ __html: dictionnary.description }}
        ></p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={lang === "fr" ? "/CVFG.pdf" : "/CVFGEN.pdf"}
            target="_blank"
            rel="noreferrer"
            className="block w-10/12 md:w-auto rounded-full border-2 border-transparent bg-secondaryColor px-12 py-3 text-sm
              font-medium text-darkColor duration-200 hover:border-2 hover:border-secondaryColor shadow-secondaryColor/50
              hover:bg-transparent hover:text-lightColor focus:outline-none focus:ring hover:shadow-[inset_0px_0px_15px_4px] active:text-opacity-75 xl:text-base"
            download
            dangerouslySetInnerHTML={{ __html: dictionnary.download_cv }}
          ></a>
          <Link
            className="block w-10/12 rounded-full md:w-auto border border-secondaryColor px-12 py-3 text-sm font-medium
              text-lightColor duration-200 shadow-[inset_0px_0px_15px_4px]  shadow-secondaryColor/50 hover:bg-secondaryColor hover:text-darkColor focus:outline-none
              focus:ring active:bg-blue-500 xl:text-base"
            href="#projects"
          >
            <span dangerouslySetInnerHTML={{ __html: dictionnary.view_projects }}></span>
          </Link>
        </div>
      </div>
      <Image
        src="/assets/images/photoprofil.png"
        width={200}
        height={200}
        alt="Photo de profil de Franck"
        className="bottom-[20%] right-[15%] h-32 w-32 rounded-[1000px] lg:absolute"
      />
    </section>
  );
}
