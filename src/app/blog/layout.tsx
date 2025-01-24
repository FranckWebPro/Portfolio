import React from "react";
import Header from "../ui/header";
import Footer from "../ui/footer";
import { User } from "@/lib/definitions";
import { fetchUser } from "@/lib/data";

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
