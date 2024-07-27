import React from "react";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import {Person, WithContext} from 'schema-dts';
import "./globals.css";
import ogImage from "../../public/opengraph-image.png";
import twitterImage from "../../public/twitter-image.png";

const personStructuredData: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Franck GALLIOD",
    "url": "https://www.franckwebpro.com/",
    "image": "https://www.franckwebpro.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprprofil.1419460a.png&w=640&q=75",
    "sameAs": [
      "https://www.linkedin.com/in/franck-galliod/",
      "https://github.com/FranckWebPro",
      "https://www.agencenocode.com/"
    ],
    "jobTitle": "Développeur Web Next / Webflow",
    "worksFor": {
      "@type": "Organization",
      "name": "Agence No Code"
    }  
  }


const bG = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio FranckWebPro",
  description:
    "Développeur Web Next / React / Node.js et Webflow, freelance et entrepreneur",
    openGraph: {
        type: 'website',
        url: 'https://www.franckwebpro.com/',
        title: 'Portfolio FranckWebPro',
        description: 'Développeur Web Next / React / Node.js et Webflow, freelance et entrepreneur',
        images: [
          {
            url: `https://www.franckwebpro.com${ogImage.src}`,
            width: 800,
            height: 600,
            alt: 'Portfolio de Franck'
          }
        ],
        siteName: 'FranckWebPro'
      },
      twitter: {
        card: 'summary_large_image',
        site: '@FranckWebPro',
        title: 'Portfolio FranckWebPro',
        description: 'Développeur Web Next / React / Node.js et Webflow, freelance et entrepreneur',
        images: `https://www.franckwebpro.com${twitterImage.src}`
      }
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
        <link rel="canonical" href="https://franckwebpro.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
      </head>
      <body className={`${bG.className} bg-darkColor text-lightColor`}>
        {children}
      </body>
    </html>
  );
}
