"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "./images/logoLight.png";

export default function Header() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const handleMobileMenu = () => {
    setNavIsOpen(!navIsOpen);
    if (typeof window != 'undefined' && !navIsOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
  };

  return (
    <header className="fixed z-50 mx-auto flex h-16 w-full animate-blur items-center justify-center md:h-20 lg:h-24">
      <nav className="m-auto flex h-16 w-full max-w-screen-2xl items-center justify-between">
        <Link className="text-teal-600 dark:text-teal-600 z-20" href="/">
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
          className={`absolute inset-0 w-full z-10 list-none before:backdrop-blur-lg flex flex-col h-screen justify-evenly bg-darkColor/90
          items-center transition-transform duration-300 ease-in-out lg:static lg:w-auto lg:flex-row lg:h-full lg:gap-8 lg:opacity-100
          lg:transform-none lg:justify-center lg:bg-[var(--secondaryColor)] 2xl:text-base ${navIsOpen ? " py-16 translate-x-0" : "translate-x-full"}`}
        >
          <li >
            <Link
              className="text-lightColor transition hover:text-secondaryColor active:text-secondaryLight dark:text-white 
              dark:hover:text-white/75 px-2"
              href="#experience"
              onClick={handleMobileMenu}
            >
              Expérience
            </Link>
          </li>

          <li>
            <Link
              className="text-lightColor transition hover:text-secondaryColor active:text-secondaryLight dark:text-white 
              dark:hover:text-white/75 px-2"
              href="#technos"
              onClick={handleMobileMenu}
            >
              Technos
            </Link>
          </li>

          <li>
            <Link
              className="text-lightColor transition hover:text-secondaryColor active:text-secondaryLight dark:text-white 
              dark:hover:text-white/75 px-2"
              href="#projects"
              onClick={handleMobileMenu}
            >
              Projets
            </Link>
          </li>
          <li>
            <Link
              className="text-lightColor transition hover:text-secondaryColor active:text-secondaryLight dark:text-white 
              dark:hover:text-white/75 px-2"
              href="/blog"
              onClick={handleMobileMenu}
            >
              Blog
            </Link>
          </li>
        </ul>

          <a
            className="rounded-lg h-auto bg-secondaryColor from-green-300 via-blue-500 to-purple-600 px-6 py-3 text-sm font-semibold
             text-darkColor shadow min-w-[13ch] text-center duration-300 hover:bg-secondaryLight hover:bg-gradient-to-r hover:text-lightColor
              2xl:text-base z-20"
            href="#contact"
            onClick={() => navIsOpen && handleMobileMenu()}
          >
            Contactez-moi
          </a>

          <button
            onClick={handleMobileMenu}
            aria-label="menu de navigation"
            className="block h-full rounded p-2 text-secondaryColor transition hover:text-primaryLight lg:hidden z-20"
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
