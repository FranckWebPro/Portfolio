import React from "react";
import { Stack } from "@/lib/definitions";
import StackCard from "./StackCard";

export default function StackSection({ stacks }: { stacks: Array<Stack> }) {
  return (
    <section
      id="projects"
      className="grid-row-auto mx-auto grid grid-cols-1 items-center justify-center p-0
        py-32 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-3
        xl:grid-cols-4"
    >
      {stacks.map((stack: Stack) => (
        <StackCard key={stack.id} stack={stack} />
      ))}
    </section>
  );
}
