"use server";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { sanityService } from "@/sanity/client";

export default async function page({ params }: { params: { category: string } }) {
  const category = await sanityService.getCategory(params.category);
  const articles = await sanityService.getLastPosts();

  return (
    <main className="flex w-full flex-col items-center justify-center gap-6">
      <section
        className="bg-base-200 min-h-[calc(100vh-6rem)] bg-hero
        bg-[center_top_4rem] bg-no-repeat py-8 pt-24 px-4 mx-auto w-full max-w-screen-xl lg:py-16
       lg:pt-32 lg:px-6"
      >
        <hgroup className="mx-auto max-w-screen-sm text-center my-16 mb-8 lg:mb-16">
          <h1 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold">{category.title} </h1>
          <p className="font-light text-gray-500 sm:text-xl">{category.description}</p>
        </hgroup>
        <div className="grid gap-6 mb-8 md:mb-12 lg:mb-16 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article._id}
              className="p-4 rounded-lg border shadow-md bg-white/5 backdrop-blur-[1px] text-base-100 duration-200
               hover:opacity-95 hover:bg-white/10 hover:border-primaryLight hover:shadow-2xl"
            >
              <Link href={`/blog/${article.slug.current}`} className="size-full">
                <article className="size-full">
                  {article.mainImage && (
                    <Image
                      src={article.mainImage}
                      alt={`${article.title} illustration`}
                      width={900}
                      height={600}
                      unoptimized
                      className="mb-2 w-full rounded"
                    />
                  )}
                  <p className="text-sm">{article.publishedAt}</p>
                  <h2 className="mb-2 text-xl font-semibold tracking-tight md:text-2xl">{article.title}</h2>
                  <div className="flex justify-between items-center">
                    <p className="flex items-center font-medium space-x-4 text-base-300">
                      Auteur : {article.author.name}
                    </p>
                    <span className="inline-flex items-center font-medium hover:underline text-base-300">
                      Voir l'article
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
