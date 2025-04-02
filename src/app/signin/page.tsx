"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import PasswordSignInForm from "../ui/dashboard/PasswordSignInForm";

export default function Login() {
  const supabase = createClient();
  const router = useRouter();
  const params = useSearchParams();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://www.franckwebpro.com";

  const handleSignin = async (
    e: React.SyntheticEvent,
    options: {
      type: string;
    }
  ) => {
    e?.preventDefault();

    setIsLoading(true);

    try {
      const { type } = options;

      if (type === "password") {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) {
          toast.error(error.message);
        } else {
          router.push("/dashboard");
        }
        setIsDisabled(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (params.get("error") === "invalid_token") {
      toast.error("Invalid token");
    }
  }, [params]);

  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <div className="flex size-full flex-col items-center justify-center">
        <Link
          href={baseUrl}
          className="btn btn-ghost btn-sm mx-auto flex items-center gap-2 justify-center p-2 hover:bg-primaryLight duration-200 mb-4 rounded text-center xl:mb-5 xl:text-xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Home
        </Link>
        <h1 className="mb-12 text-center text-3xl font-semibold tracking-tight md:text-4xl 2xl:text-5xl">Sign-in</h1>

        <div className="mx-auto max-w-3xl">
          <PasswordSignInForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            isLoading={isLoading}
            isDisabled={isDisabled}
            handleSignin={handleSignin}
          />
        </div>
      </div>
    </main>
  );
}
