"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed z-50 mx-auto h-16 w-full animate-blur md:h-20">
      <nav className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between">
        <Link className="block text-teal-600 dark:text-teal-600" href="/">
          <span className="sr-only">Home</span>
          <Image
            src="/logo2.svg"
            alt="logo FranckWebPro"
            className="h-16 w-16"
          />
        </Link>

        <ul className="hidden items-center gap-6 text-sm md:flex 2xl:text-base">
          <li>
            <Link
              className="text-lightColor transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
              href="#experience"
            >
              Expérience
            </Link>
          </li>

          <li>
            <Link
              className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
              href="#technos"
            >
              Technos
            </Link>
          </li>

          <li>
            <Link
              className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
              href="#projects"
            >
              Projets
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
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
            Contactez moi
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
