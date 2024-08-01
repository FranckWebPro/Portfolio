"use client";
import { useSession } from "next-auth/react";

import { signIn, signOut } from "@/app/auth/helpers";

export default function AuthButton() {
  const { data: session } = useSession();

  return session?.user ? (
    <button
      className="z-20 h-auto min-w-[13ch] rounded-lg bg-secondaryColor from-green-300 via-blue-500 to-purple-600 px-6
        py-3 text-center text-sm font-semibold text-darkColor shadow duration-300 hover:bg-secondaryLight
        hover:bg-gradient-to-r hover:text-lightColor 2xl:text-base"
      onClick={() => {
        signOut()
          .then(() => {
            signIn();
          })
          .catch((error) => {
            console.error("Sign out or sign in failed", error);
          });
      }}
    >
      Se déconnecter
    </button>
  ) : (
    <button
      className="z-20 h-auto min-w-[13ch] rounded-lg bg-secondaryColor from-green-300 via-blue-500 to-purple-600 px-6
        py-3 text-center text-sm font-semibold text-darkColor shadow duration-300 hover:bg-secondaryLight
        hover:bg-gradient-to-r hover:text-lightColor 2xl:text-base"
      onClick={() =>
        signIn().catch((error) => {
          console.error("Sign in failed", error);
        })
      }
    >
      Connexion
    </button>
  );
}
