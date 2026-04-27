import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page introuvable | FranckWebPro",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-2">
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
