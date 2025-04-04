import React from "react";
import Header from "../ui/header";
import Footer from "../ui/footer";
import { User } from "@/lib/supabase.type";
import { fetchUser } from "@/lib/supabase/data";
import { getDictionary } from "@/dictionaries/dictionary";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user: User[] = await fetchUser();
  const dictionnary = await getDictionary("fr");
  return (
    <>
      <Header dictionnary={dictionnary.home.navigation} lang="fr" />
      {children}
      <Footer user={user[0]} dictionnary={dictionnary.home.footer} />
    </>
  );
}
