import { sanityService } from "@/sanity/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PortableText } from "@portabletext/react";
import type { Metadata } from "next";

// Revalidate blog posts every hour (3600 seconds)
export const revalidate = 3600;

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await sanityService.getPostBySlug(params.slug);

  return {
    title: `${article?.title || "Article"} | FranckWebPro Blog`,
    description: article?.title || "Article de blog sur le développement web",
    alternates: {
      canonical: `/blog/${params.slug}`,
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
      title: article?.title,
      images: article?.mainImage ? [article.mainImage] : undefined,
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const article = await sanityService.getPostBySlug(params.slug);

  return (
    <>
      <hgroup
        className="relative h-[45vh] pt-12 flex flex-col gap-2 text-center text-base-100 items-center justify-center md:h-[55vh]"
        id="hero"
      >
        {article.mainImage && (
          <Image
            src={article.mainImage}
            height={1200}
            width={1500}
            alt=""
            className=" absolute top-0 left-0 w-full h-full object-top opacity-40"
          />
        )}
        <Link
          href={`/blog`}
          className="absolute z-20 left-10 top-24 uppercase [text-shadow:_0_6px_4px_rgb(50_50_50_/_1)] duration-200 
            transition-all hover:opacity-65 font-medium md:text-lg md:left-20 md:top-28 lg:text-lg lg:top-32"
        >
          ⬅ Retour
        </Link>
        <h1
          className="z-10 text-2xl font-medium mb-4 px-8 [text-shadow:_0_4px_4px_rgb(50_50_50_/_0.9)] 
          md:mb-8 md:text-3xl lg:text-4xl xl:text-5xl"
        >
          {article.title}
        </h1>
      </hgroup>
      <section
        className="grid grid-cols-1 lg:grid-cols-[1fr_.25fr] min-h-[80vh] bg-base-300 
      p-10 md:pt-12 md:pb-28 md:flex-row md:text-lg lg:px-14 lg:pb-32 xl:text-xl xl:px-20"
      >
        <div className="richText flex flex-wrap flex-col gap-y-4 lg:col-[1/2] lg:row-[1/2]">
          <PortableText value={article.body} />
        </div>
      </section>
    </>
  );
}
