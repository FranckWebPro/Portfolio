"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../images/logoLight.png";

export default function HeaderDashboard({login} : {login: boolean}) {
  return (
    <header className="fixed z-50 mx-auto h-16 w-full animate-blur md:h-20">
      <nav className="mx-auto grid w-full grid-cols-[0.25fr,2fr,0.25fr] h-16 max-w-screen-2xl items-center justify-between">
        <div className="md:flex md:items-center md:gap-12">
          <Link className="block text-teal-600 dark:text-teal-600" href="/">
            <span className="sr-only">Home</span>
            <Image
              src={logo}
              alt="logo FranckWebPro"
              className="~h-16/20 ~w-16/20"
              width={80}
              height={80}
              sizes="(max-width: 768px) 4rem, (max-width: 1200px) 5rem, 6rem"
            />
          </Link>
        </div>

        <Link
          className="text-lightColor transition duration-300 text-center hover:text-secondaryColor dark:text-white dark:hover:text-white/75"
          href="/"
        >
          Retour à l'accueil
        </Link>

          {!login && <a
            className="rounded-lg bg-secondaryColor px-6 py-3 text-sm font-semibold text-darkColor shadow duration-300 hover:bg-secondaryLight hover:text-lightColor 2xl:text-base"
            href="/"
          >
            Déconnexion
          </a>}
      </nav>
    </header>
  );
}
