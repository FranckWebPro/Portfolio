"use server";

import BlogAds from "@/components/BlogAds";
import { renderArticleBreadcrumbSchema, renderArticleSchemaTags } from "@/libs/seo";
import { getArticleFromSlug } from "@/libs/supabase/read";
import { marked } from "marked";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// eslint-disable-next-line no-unused-vars
export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const slug = params.slug;
  const article = await getArticleFromSlug(slug);

  return {
    title: `${article.title} | Self-Service Car Wash Blog`,
    description: `${article.metadescription}`,
    keywords: ["Self Service car wash blog", "car wash self service blog"],
    alternates: {
      canonical: `/blog/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const article = await getArticleFromSlug(params.slug);
  const htmlContent = marked(article.markdown);

  return (
    <>
      <hgroup className="relative h-[45vh] pt-12 flex flex-col gap-2 text-center text-base-100 bg-neutral items-center justify-center md:h-[50vh]">
        <Image
          src={article.thumbnails}
          height={1200}
          width={1500}
          alt="a woman washing it's blue car in a self service car wash"
          title="Car wash picture"
          className=" absolute top-0 left-0 w-full h-full object-top opacity-40"
        />
        <Link
          href={`/blog`}
          className="absolute z-10 left-10 top-5 uppercase [text-shadow:_0_6px_4px_rgb(50_50_50_/_1)] duration-300 
            transition-all hover:opacity-65 font-medium md:text-lg md:left-14 md:top-8 lg:text-lg lg:top-12"
        >
          ⬅ Back to all articles
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
      p-10 md:pt-12 md:pb-28 md:flex-row md:text-lg lg:px-12 lg:pb-32 xl:text-xl xl:px-16"
      >
        <BlogAds />
        <div
          className="richText flex flex-wrap flex-col gap-y-4 lg:col-[1/2] lg:row-[1/2]"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        ></div>
      </section>
      {renderArticleSchemaTags(article)}
      {renderArticleBreadcrumbSchema(article)}
    </>
  );
}
