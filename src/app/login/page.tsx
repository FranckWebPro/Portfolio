import React from "react";
import HeaderDashboard from "../ui/dashboard/headerDashboard";

export default function LoginPage() {
  return (
    <>
      <HeaderDashboard login />
      <main className="flex min-h-screen items-center justify-center">
        <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
          <div className="w-32 text-lightColor md:w-36"></div>
        </div>
      </main>
    </>
  );
}
