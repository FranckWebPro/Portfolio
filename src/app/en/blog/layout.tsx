import React from "react";
import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import { User } from "@/lib/supabase.type";
import { fetchUser } from "@/lib/supabase/data";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user: User[] = await fetchUser();

  return (
    <>
      <Header />
      {children}
      <Footer user={user[0]} />
    </>
  );
}
