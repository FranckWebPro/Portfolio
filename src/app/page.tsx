import React from "react";
import Header from "./ui/header";
import HeroSection from "./ui/home/heroSection";
import StackSection from "./ui/home/stackSection";
import ExperienceSection from "./ui/home/experienceSection";
import ProjectSection from "./ui/home/projectSection";
import { ProjectWithStacks, Stack, User } from "../lib/definitions";
import ContactForm from "./ui/home/contactForm";
import Footer from "./ui/footer";
import { browseProjectsWithStacks, fetchStacks, fetchUser } from "../lib/data";
import ServiceSection from "./ui/home/serviceSection";

export default async function Home() {
  const projects: Array<ProjectWithStacks> = await browseProjectsWithStacks();
  const user: User[] = await fetchUser();
  const stacks: Array<Stack> = await fetchStacks();

  return (
    <>
      <Header />
      <main className="w-full bg-darkColor text-lightColor">
        <HeroSection />
        <ServiceSection />
        <ExperienceSection />
        <StackSection stacks={stacks} />
        <ProjectSection projects={projects} />
        <ContactForm />
      </main>
      <Footer user={user[0]} />
    </>
  );
}
