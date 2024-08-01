import { SessionProvider } from "next-auth/react";
import { auth } from "@/app/auth";
import AuthButtonClient from "./authButton.client";

export default async function AuthButton() {
  const session = await auth();
  if (session && session.user) {
    session.user = {
      name: session.user.name,
      email: session.user.email,
    };
  }

  return (
    <SessionProvider basePath={process.env.BASE_PATH} session={session}>
      <AuthButtonClient />
    </SessionProvider>
  );
}
