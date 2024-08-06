"use server";

import { signIn } from "@/auth";

export async function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <button type="submit">Sign in</button>
    </form>
  );
}
