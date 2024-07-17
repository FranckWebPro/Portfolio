import React from "react";
import Header from "./ui/header";
import HeroSection from "./ui/home/heroSection";
import StackSection from "./ui/home/stackSection";
import ExperienceSection from "./ui/home/experienceSection";
import ProjectSection from "./ui/home/projectSection";
import { Project } from "./lib/definitions";
import ContactForm from "./ui/home/contactForm";
import Footer from "./ui/footer";

const projects: Array<Project> = [
  {
    id: 1,
    title: "finished",
    description: "finished",
    client_name: "finished",
    preview_picture_url: "finished",
    link: "finished",
    github_repo: "finished",
    date_created: new Date("2024-12-12"),
    status: "finished",
  },
  {
    id: 2,
    title: "finished",
    description: "finished",
    client_name: "finished",
    preview_picture_url: "finished",
    link: "finished",
    github_repo: "finished",
    date_created: new Date("2024-12-12"),
    status: "finished",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-darkColor text-lightColor">
        <HeroSection />
        <ExperienceSection />
        <StackSection />
        <ProjectSection projects={projects} />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
