import Link from "next/link";
import { FaceFrownIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <Link
        href="/"
        className="mt-4 rounded-md bg-secondaryColor px-4 py-2 text-sm text-darkColor transition-colors
          hover:bg-secondaryLight hover:text-lightColor"
      >
        Retour à l'accueil
      </Link>
    </main>
  );
}
