"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../images/logoLight.png";

export default function HeaderDashboard() {
  return (
    <header className="fixed z-50 mx-auto h-16 w-full animate-blur md:h-20">
      <nav className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between">
        <div className="md:flex md:items-center md:gap-12">
          <Link className="block text-teal-600 dark:text-teal-600" href="/">
            <span className="sr-only">Home</span>
            <Image
              src={logo}
              alt="logo FranckWebPro"
              className="~h-16/20 ~w-16/20"
              objectFit="contain"
              width={80}
              height={80}
              sizes="(max-width: 768px) 4rem, (max-width: 1200px) 5rem, 6rem"
            />
          </Link>
        </div>

        <Link
          className="text-lightColor transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
          href="/"
        >
          Retour à l'accueil
        </Link>

        <div className="flex items-center gap-4 sm:flex">
          <a
            className="rounded-lg bg-secondaryColor px-6 py-3 text-sm font-semibold text-darkColor shadow duration-300 hover:bg-secondaryLight hover:text-lightColor 2xl:text-base"
            href="/"
          >
            Déconnexion
          </a>

          <div className="block md:hidden">
            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
