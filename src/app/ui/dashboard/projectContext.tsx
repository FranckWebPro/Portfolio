"use client";
import { ProjectContextType, ProjectWithStacks } from "@/lib/definitions";
import { ReactNode, createContext, useState } from "react";

const defaultContextValue: ProjectContextType = {
  projectToModify: null,
  setProjectToModify: () => {},
};

export const ProjectContext = createContext<ProjectContextType>(defaultContextValue);

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [projectToModify, setProjectToModify] = useState<ProjectWithStacks | null>(null);

  return <ProjectContext.Provider value={{ projectToModify, setProjectToModify }}>{children}</ProjectContext.Provider>;
}
