"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../images/logoLight.png";
import { createClient } from "@/lib/supabase/client";

export default function HeaderDashboard() {
  const supabase = createClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    const origin = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://www.franckwebpro.com";
    window.location.href = `${origin}/signin`;
  };

  return (
    <header className="fixed top-0 z-50 mx-auto h-16 w-full animate-blur md:h-20">
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
              priority
            />
          </Link>
        </div>

        <Link
          className="text-center text-lightColor transition duration-300 hover:text-secondaryColor dark:text-white
            dark:hover:text-white/75"
          href="/"
        >
          Retour à l'accueil
        </Link>
        <button
          className="flex w-full items-center gap-2 rounded px-4 py-1.5 duration-300 hover:bg-error/20 hover:text-error"
          onClick={handleSignOut}
        >
          Se déconnecter
        </button>
      </nav>
    </header>
  );
}
