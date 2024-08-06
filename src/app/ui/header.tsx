"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "./images/logoLight.png";

export default function Header() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const handleMobileMenu = () => {
    setNavIsOpen(!navIsOpen);
    if (typeof window != "undefined" && !navIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  return (
    <header className="fixed z-50 mx-auto flex h-16 w-full animate-blur items-center justify-center md:h-20 lg:h-24">
      <nav className="m-auto flex h-16 w-full max-w-screen-2xl items-center justify-between">
        <Link className="z-20 text-teal-600 dark:text-teal-600" href="/">
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
        <ul
          className={`absolute inset-0 z-10 flex h-screen w-full list-none flex-col items-center justify-evenly
            bg-darkColor/90 transition-transform duration-300 ease-in-out before:backdrop-blur-lg lg:static
            lg:h-full lg:w-auto lg:transform-none lg:flex-row lg:justify-center lg:gap-8
            lg:bg-[var(--secondaryColor)] lg:opacity-100 2xl:text-base
            ${navIsOpen ? "translate-x-0 py-16" : "translate-x-full"}`}
        >
          <li>
            <Link
              className="p-2 text-lightColor transition hover:text-secondaryColor active:text-secondaryLight
                dark:text-lightColor dark:hover:text-primaryLight"
              href="#services"
              onClick={handleMobileMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="p-2 text-lightColor transition hover:text-secondaryColor active:text-secondaryLight
                dark:text-lightColor dark:hover:text-primaryLight"
              href="#experiences"
              onClick={handleMobileMenu}
            >
              Expériences
            </Link>
          </li>

          <li>
            <Link
              className="p-2 text-lightColor transition hover:text-primaryLight active:text-secondaryLight
                dark:text-lightColor dark:hover:text-primaryLight"
              href="#technos"
              onClick={handleMobileMenu}
            >
              Technos
            </Link>
          </li>

          <li>
            <Link
              className="p-2 text-lightColor transition hover:text-secondaryColor active:text-secondaryLight
                dark:text-lightColor dark:hover:text-primaryLight"
              href="#projects"
              onClick={handleMobileMenu}
            >
              Projets
            </Link>
          </li>
          <li>
            <Link
              className="p-2 text-lightColor transition hover:text-secondaryColor active:text-secondaryLight
                dark:text-lightColor dark:hover:text-primaryLight"
              href="/blog"
              onClick={handleMobileMenu}
            >
              Blog
            </Link>
          </li>
        </ul>

        <a
          className="z-20 h-auto min-w-[13ch] rounded-lg bg-secondaryColor from-green-300 via-blue-500 to-purple-600 px-6
            py-3 text-center text-sm font-semibold text-darkColor shadow duration-300 hover:bg-secondaryLight
            hover:bg-gradient-to-r hover:text-lightColor 2xl:text-base"
          href="#contact"
          onClick={() => navIsOpen && handleMobileMenu()}
        >
          Me contacter
        </a>

        <button
          onClick={handleMobileMenu}
          aria-label="menu de navigation"
          className="z-20 block h-full rounded p-2 text-secondaryColor transition hover:text-primaryLight lg:hidden"
        >
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
      </nav>
    </header>
  );
}
