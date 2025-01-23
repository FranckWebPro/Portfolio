import React from "react";
import Header from "../ui/header";
import { Articles, User } from "@/lib/definitions";
import Link from "next/link";
import { browseArticles, fetchUser } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import ContactForm from "../ui/home/contactForm";
import Footer from "../ui/footer";

export default async function page() {
  const user: User[] = await fetchUser();
  const articles: Array<Articles> = await browseArticles();

  return (
    <>
      <Header />
      <main className="flex w-full flex-col items-center justify-center gap-6">
        <section className="bg-base-200 min-h-[calc(100vh-6rem)]">
          <div className="py-8 pt-24 px-4 mx-auto max-w-screen-xl lg:py-16 lg:pt-32 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center my-20 mb-8 lg:mb-16">
              <h1 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold">
                Bienvenue sur mon blog de développeur web / entrepreneur
              </h1>
              <p className="font-light text-gray-500 sm:text-xl">
                Le développement web au service de l'entrepreneuriat, c'est ce que je vous propose de découvrir à
                travers mon blog.
                <br />
                Technos web, Saas, réalité augmenté, actus, tutoriels, retours d'expérience...
              </p>
            </div>
            <div className="grid gap-8 mb-8 md:mb-12 lg:mb-16 lg:grid-cols-2">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  href={`/blog/${article.slug}`}
                  className="p-6 rounded-lg border shadow-md bg-gray-800 border-gray-700 text-base-100 duration-300 hover:opacity-95 hover:shadow-2xl"
                >
                  <article className="size-full">
                    <div className="flex justify-between items-center mb-5 text-base-300">
                      <span className="text-sm">{formatDate(article.created_at)}</span>
                    </div>
                    <h2 className="mb-2 text-2xl font-bold tracking-tight">{article.title}</h2>
                    <p className="mb-5 font-light text-base-300">{article.metadescription}</p>
                    <div className="flex justify-between items-center">
                      <p className="flex items-center font-medium space-x-4 text-base-300">Author : {article.author}</p>
                      <span className="inline-flex items-center font-medium hover:underline text-base-300">
                        Read more
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
              ))}
            </div>
          </div>
        </section>
        <ContactForm />
      </main>
      <Footer user={user[0]} />
    </>
  );
}
