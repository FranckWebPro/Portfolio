import React from "react";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bG = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="../favicon.ico" sizes="any" />
      </head>
      <body className={`${bG.className} bg-darkColor text-lightColor`}>
        {children}
      </body>
    </html>
  );
}
