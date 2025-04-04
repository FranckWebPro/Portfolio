import React from "react";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { Person, WithContext } from "schema-dts";
import "@/app/globals.css";
import { SanityLive } from "@/sanity/client";

const personStructuredData: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Franck GALLIOD",
  url: "https://www.franckwebpro.com/",
  image: "https://www.franckwebpro.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprprofil.1419460a.png&w=640&q=75",
  sameAs: [
    "https://www.linkedin.com/in/franck-galliod/",
    "https://github.com/FranckWebPro",
    "https://www.agencenocode.com/",
  ],
  jobTitle: "Next.js / Webflow Web Developer",
  worksFor: {
    "@type": "Organization",
    name: "Agence No Code",
  },
};

const bG = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Web Developer Next.js - FranckWebPro",
  description: "Web Developer Next.js / and Webflow, freelance and independent developer",
  metadataBase: new URL("https://www.franckwebpro.com/"),
  keywords: [
    "Web Developer",
    "Next.js developer",
    "Nextjs developer",
    "Next.js",
    "React",
    "web applications",
    "Webflow",
    "Freelance",
    "Entrepreneur",
  ],
  alternates: {
    canonical: `/en`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    url: "https://www.franckwebpro.com/",
    title: "Portfolio Web Developer - FranckWebPro",
    description:
      "Web Developer Next.js and Webflow, freelance and independent developer, I create with passion Saas and other applications for the Webflow marketplace",
    images: [
      {
        url: `https://www.franckwebpro.com/assets/images/opengraph-image.png`,
        width: 800,
        height: 600,
        alt: "Franck Portfolio",
      },
    ],
    siteName: "FranckWebPro",
  },
  twitter: {
    card: "summary_large_image",
    site: "@FranckWebPro",
    title: "Portfolio Web Developer - FranckWebPro",
    description:
      "Web Developer Next.js and Webflow, freelance and independent developer, I create with passion Saas and other applications for the Webflow marketplace",
    images: `https://www.franckwebpro.com/assets/images/twitter-image.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
      </head>
      <body className={`${bG.className} bg-darkColor text-lightColor`}>
        {children}
        <SanityLive />
      </body>
    </html>
  );
}
