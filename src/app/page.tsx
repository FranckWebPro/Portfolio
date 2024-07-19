import React from "react";
import Header from "./header";
import HeroSection from "./ui/home/heroSection";
import StackSection from "./ui/home/stackSection";
import ExperienceSection from "./ui/home/experienceSection";
import ProjectSection from "./ui/home/projectSection";
import { ProjectWithStacks, Stack } from "./lib/definitions";
import ContactForm from "./ui/home/contactForm";
import Footer from "./ui/footer";
import { fetchProjectsWithStacks, fetchStacks } from "./lib/data";

export default async function Home() {
  const projects: Array<ProjectWithStacks> = await fetchProjectsWithStacks();
  const stacks: Array<Stack> = await fetchStacks();

  return (
    <>
      <Header />
      <main className="bg-darkColor text-lightColor">
        <HeroSection />
        <ExperienceSection />
        <StackSection stacks={stacks} />
        <ProjectSection projects={projects} />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
