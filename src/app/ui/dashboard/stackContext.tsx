"use client";
import { Stack, StackContextType } from "@/lib/definitions";
import { ReactNode, createContext, useState } from "react";

const defaultContextValue: StackContextType = {
  stackToModify: null,
  setStackToModify: () => {},
};

export const StackContext = createContext<StackContextType>(defaultContextValue);

export function StackProvider({ children }: { children: ReactNode }) {
  const [stackToModify, setStackToModify] = useState<Stack | null>(null);

  return <StackContext.Provider value={{ stackToModify, setStackToModify }}>{children}</StackContext.Provider>;
}
