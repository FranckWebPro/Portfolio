"use server";

import { signOut } from "@/auth";

export async function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button
        className="z-20 h-auto min-w-[13ch] rounded-lg bg-secondaryColor from-green-300 via-blue-500 to-purple-600 px-6
          py-3 text-center text-sm font-semibold text-darkColor shadow duration-300 hover:bg-secondaryLight
          hover:bg-gradient-to-r hover:text-lightColor 2xl:text-base"
        type="submit"
      >
        Déconnexion
      </button>
    </form>
  );
}
