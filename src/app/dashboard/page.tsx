import React from "react";
import HeaderDashboard from "../ui/dashboard/headerDashboard";
import ProjectFormSection from "../ui/dashboard/projectFormSection";
import { Project } from "../lib/definitions";
import ProjectSection from "../ui/projectSection";

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
    published: true,
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
    published: true,
    status: "finished",
  },
  {
    id: 3,
    title: "finished",
    description: "finished",
    client_name: "finished",
    preview_picture_url: "finished",
    link: "finished",
    github_repo: "finished",
    date_created: new Date("2024-12-12"),
    published: true,
    status: "finished",
  },
  {
    id: 4,
    title: "finished",
    description: "finished",
    client_name: "finished",
    preview_picture_url: "finished",
    link: "finished",
    github_repo: "finished",
    date_created: new Date("2024-12-12"),
    published: true,
    status: "finished",
  },
];

export default function page() {
  return (
    <>
      <HeaderDashboard />
      <main className="w-full">
        <ProjectFormSection />
        <ProjectSection projects={projects} />
      </main>
    </>
  );
}
