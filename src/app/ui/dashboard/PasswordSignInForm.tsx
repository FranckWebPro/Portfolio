/* eslint-disable no-unused-vars */
"use client";

import { Provider } from "@supabase/supabase-js";
import React from "react";

export default function PasswordSignInForm({
  email,
  setEmail,
  password,
  setPassword,
  isLoading,
  isDisabled,
  handleSignin,
}: {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  isLoading: boolean;
  isDisabled: boolean;
  handleSignin: (e: React.SyntheticEvent, options: { type: string; provider?: Provider }) => void;
}) {
  return (
    <form
      className="form-control mb-4 w-full space-y-4 flex text-black flex-col gap-2 items-center justify-center"
      onSubmit={(e) => handleSignin(e, { type: "password" })}
    >
      <label htmlFor="email" className="size-0 text-[0px]">
        Email
      </label>
      <input
        name="email"
        required
        type="email"
        value={email}
        autoComplete="email"
        placeholder="Email"
        className="input input-bordered w-full p-2 rounded placeholder:opacity-60 xl:h-14 xl:text-lg"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label
        htmlFor="password"
        className="input input-bordered relative w-full rounded p-0 placeholder:opacity-60 xl:h-14 xl:text-lg"
      >
        <span className="size-0 text-[0px]">password</span>
        <input
          name="password"
          type="password"
          value={password}
          placeholder="Password"
          className="input input-bordered w-full p-2 rounded placeholder:opacity-60 xl:h-14 xl:text-lg"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button
        className="btn w-full btn-primary btn-block rounded text-base font-normal text-black bg-secondaryColor hover:bg-secondaryLight duration-200 px-3 xl:h-14 xl:text-xl"
        disabled={isLoading || isDisabled}
        type="submit"
      >
        {isLoading && <span className="loading loading-spinner loading-xs"></span>}
        Sign-in
      </button>
    </form>
  );
}
