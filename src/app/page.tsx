import React, { Suspense } from "react";
import Header from "./ui/header";
import HeroSection from "./ui/home/heroSection";
import StackSection from "./ui/home/stackSection";
import ExperienceSection from "./ui/home/experienceSection";
import ProjectSection from "./ui/home/projectSection";
import ContactForm from "./ui/home/contactForm";
import Footer from "./ui/footer";
import { browseProjectsWithStacks, fetchStacks, fetchUser } from "@/lib/supabase/data";
import ServiceSection from "./ui/home/serviceSection";
import { getDictionary } from "@/dictionaries/dictionary";

export default async function Home() {
  const dictionnary = await getDictionary("fr");
  const [projects, user, stacks] = await Promise.all([browseProjectsWithStacks(), fetchUser(), fetchStacks()]);

  return (
    <>
      <Suspense>
        <Header dictionnary={dictionnary?.home?.navigation} lang="fr" />
      </Suspense>
      <main className="w-full bg-darkColor text-lightColor">
        <HeroSection dictionnary={dictionnary?.home?.hero_section} lang="fr" />
        <ServiceSection dictionnary={dictionnary?.home?.services_section} />
        <ExperienceSection dictionnary={dictionnary?.home?.experience_section} />
        <StackSection stacks={stacks} dictionnary={dictionnary?.home?.technologies_section} />
        <ProjectSection projects={projects} dictionnary={dictionnary?.home?.projects_section} lang="fr" />
        <ContactForm dictionnary={dictionnary?.home?.contact} />
      </main>
      <Footer user={user[0]} dictionnary={dictionnary?.home?.footer} />
    </>
  );
}
