import React from "react";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { Person, WithContext } from "schema-dts";
import "./globals.css";
import ogImage from "../../public/opengraph-image.png";
import twitterImage from "../../public/twitter-image.png";
import { EdgeStoreProvider } from "@/lib/edgestore";
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
  jobTitle: "Développeur Web Next / Webflow",
  worksFor: {
    "@type": "Organization",
    name: "Agence No Code",
  },
};

const bG = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Développeur Web Next.js - FranckWebPro",
  description: "Développeur Web Next.js / et d'applications Webflow, freelance et entrepreneur indépendant",
  metadataBase: new URL("https://www.franckwebpro.com/"),
  keywords: [
    "Développeur Web",
    "Next.js",
    "React",
    "applications web",
    "Node.js",
    "Webflow",
    "Freelance",
    "Entrepreneur",
  ],
  alternates: {
    canonical: `/`,
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
    title: "Portfolio développeur web - FranckWebPro",
    description:
      "Développeur Web Next.js et d'application Webflow, freelance et développeur indépendant, je créé avec passions Saas et autres applications pour la marketplace Webflow",
    images: [
      {
        url: `https://www.franckwebpro.com${ogImage.src}`,
        width: 800,
        height: 600,
        alt: "Portfolio de Franck",
      },
    ],
    siteName: "FranckWebPro",
  },
  twitter: {
    card: "summary_large_image",
    site: "@FranckWebPro",
    title: "Portfolio Développeur Next.js - FranckWebPro",
    description:
      "Développeur Web Next.js et d'application Webflow, freelance et développeur indépendant, je créé avec passions Saas et autres applications pour la marketplace Webflow",
    images: `https://www.franckwebpro.com${twitterImage.src}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
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
        <EdgeStoreProvider>
          {children}
          <SanityLive />
        </EdgeStoreProvider>
      </body>
    </html>
  );
}
