import React from "react";
import Header from "../ui/header";

export default function page() {
  return (
    <>
      <Header />
      <main className="flex h-screen w-full flex-col items-center justify-center gap-6">
        <h1 className="text-5xl">Blog</h1>
        <p className="text-xl">Bientôt disponible..! 😉</p>
      </main>
    </>
  );
}
