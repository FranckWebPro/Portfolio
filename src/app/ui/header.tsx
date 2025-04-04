"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header({ dictionnary, lang }: { dictionnary: Record<string, string>; lang: string }) {
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
    <header className="fixed z-50 flex h-16 w-full top-6 items-center justify-center md:h-20 ">
      <nav
        className="m-auto flex h-16 w-full max-w-screen-2xl items-center justify-between shadow-white/10 shadow-lg lg:top-6 
      lg:h-20 lg:max-w-screen-lg lg:mx-auto lg:bg-white/5 lg:backdrop-blur-lg lg:rounded-full"
      >
        <Link className="z-20 text-teal-600 dark:text-teal-600" href={lang === "fr" ? "/" : "/en"}>
          <span className="sr-only">Home</span>
          <Image
            src="/assets/images/logoLight.png"
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
          <li className="lg:hidden">
            <button
              onClick={() => {
                const newLangPath = lang === "fr" ? "/en" : "/";
                window.location.href = newLangPath;
              }}
              aria-label="Change Language"
              className="z-20 h-auto w-20 rounded-full bg-transparent px-4 py-2 shadow transition duration-200 hover:opacity-65"
            >
              <Image
                src={lang === "fr" ? "/assets/images/flag-en.png" : "/assets/images/flag-fr.png"}
                alt="flag"
                width={80}
                height={80}
              />
            </button>
          </li>
          <li>
            <Link
              className="p-2 text-lightColor transition hover:text-secondaryColor active:text-secondaryLight
                dark:text-lightColor dark:hover:text-primaryLight"
              href={lang === "fr" ? "/#services" : "/en/#services"}
              onClick={() => navIsOpen && handleMobileMenu()}
            >
              {dictionnary.services}
            </Link>
          </li>
          <li>
            <Link
              className="p-2 text-lightColor transition hover:text-secondaryColor target:text-secondaryLight
                dark:text-lightColor dark:hover:text-primaryLight"
              href={lang === "fr" ? "/#experiences" : "/en/#experiences"}
              onClick={() => navIsOpen && handleMobileMenu()}
            >
              {dictionnary.experiences}
            </Link>
          </li>

          <li>
            <Link
              className="p-2 text-lightColor transition hover:text-primaryLight active:text-secondaryLight
                dark:text-lightColor dark:hover:text-primaryLight"
              href={lang === "fr" ? "/#technos" : "/en/#technos"}
              onClick={() => navIsOpen && handleMobileMenu()}
            >
              {dictionnary.technologies}
            </Link>
          </li>

          <li>
            <Link
              className="p-2 text-lightColor transition hover:text-secondaryColor active:text-secondaryLight
                dark:text-lightColor dark:hover:text-primaryLight"
              href={lang === "fr" ? "/#projects" : "/en/#projects"}
              onClick={() => navIsOpen && handleMobileMenu()}
            >
              {dictionnary.projects}
            </Link>
          </li>
          <li>
            <Link
              className="p-2 text-lightColor transition hover:text-secondaryColor active:text-secondaryLight
                dark:text-lightColor dark:hover:text-primaryLight"
              href={lang === "fr" ? "/blog" : "/blog"}
              onClick={() => navIsOpen && handleMobileMenu()}
            >
              {dictionnary.blog}
            </Link>
          </li>
        </ul>

        <Link
          className="z-20 h-auto min-w-[13ch] rounded-full bg-secondaryColor from-green-300 via-blue-500 to-purple-600 px-6
            py-3 text-center text-sm font-semibold text-darkColor shadow-[0px_0px_15px_4px] shadow-blue-300/50 transition duration-200 hover:bg-secondaryLight
            hover:bg-gradient-to-r hover:text-lightColor xl:text-base"
          href={lang === "fr" ? "/#contact" : "/en/#contact"}
          onClick={() => navIsOpen && handleMobileMenu()}
        >
          {dictionnary.contact}
        </Link>

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

        <button
          onClick={() => {
            const newLangPath = lang === "fr" ? "/en" : "/";
            window.location.href = newLangPath;
          }}
          aria-label="Change Language"
          className="z-20 -mr-10 h-auto w-16 rounded-full bg-transparent px-4 py-2 shadow transition duration-200 hover:opacity-65 hidden lg:block"
        >
          <Image
            src={lang === "fr" ? "/assets/images/flag-en.png" : "/assets/images/flag-fr.png"}
            alt="flag"
            width={64}
            height={64}
          />
        </button>
      </nav>
    </header>
  );
}
