"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../images/logoLight.png";

export default function HeaderDashboard() {
  return (
    <header className="fixed z-50 mx-auto h-16 w-full animate-blur md:h-20">
      <nav className="mx-auto grid h-16 w-full max-w-screen-2xl grid-cols-[0.25fr,2fr,0.25fr] items-center justify-between">
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
          className="text-center text-lightColor transition duration-300 hover:text-secondaryColor dark:text-white dark:hover:text-white/75"
          href="/"
        >
          Retour à l'accueil
        </Link>
      </nav>
    </header>
  );
}
