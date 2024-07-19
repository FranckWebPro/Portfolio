import Header from "../header";
import React from "react";
import LoginForm from "../ui/login/loginForm";

export default function LoginPage() {
  return (
    <>
      <Header />
      <main className="flex items-center justify-center md:h-screen">
        <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
          <div className="flex h-20 w-full items-end rounded-lg bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-3 md:h-36">
            <div className="w-32 text-lightColor md:w-36"></div>
          </div>
          <LoginForm />
        </div>
      </main>
    </>
  );
}
