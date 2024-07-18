"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "./images/logoLight.png";

export default function Header() {
  return (
    <header className="fixed z-50 mx-auto flex h-16 w-full animate-blur items-center justify-center md:h-20 lg:h-24">
      <nav className="m-auto flex h-16 w-full max-w-screen-2xl items-center justify-between">
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

        <ul className="relative left-8 hidden text-sm md:flex md:items-center md:gap-8 lg:gap-10 2xl:text-base">
          <li>
            <Link
              className="text-lightColor transition hover:text-secondaryColor active:text-secondaryLight dark:text-white dark:hover:text-white/75"
              href="#experience"
            >
              Expérience
            </Link>
          </li>

          <li>
            <Link
              className="text-lightColor transition hover:text-secondaryColor active:text-secondaryLight dark:text-white dark:hover:text-white/75"
              href="#technos"
            >
              Technos
            </Link>
          </li>

          <li>
            <Link
              className="text-lightColor transition hover:text-secondaryColor active:text-secondaryLight dark:text-white dark:hover:text-white/75"
              href="#projects"
            >
              Projets
            </Link>
          </li>
          <li>
            <Link
              className="text-lightColor transition hover:text-secondaryColor active:text-secondaryLight dark:text-white dark:hover:text-white/75"
              href="/blog"
            >
              Blog
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4 sm:flex">
          <a
            className="rounded-lg bg-secondaryColor px-6 py-3 text-sm font-semibold text-darkColor shadow duration-300 hover:bg-secondaryLight hover:text-lightColor 2xl:text-base"
            href="#contact"
          >
            Contactez-moi
          </a>

          <button className="block h-full rounded p-2 text-secondaryColor transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
