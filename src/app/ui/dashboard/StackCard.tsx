import React from "react";
import { Stack } from "@/lib/definitions";
import Image from "next/image";
import { DeleteStackButton, UpdateStackButton } from "./buttons";

export default function StackCard({ stack }: { stack: Stack }) {
  return (
    <div
      className="w-full h-full flex items-center flex-col justify-center p-4 pt-0 transition-opacity duration-300 border
       border-primaryColor group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
    >
      <Image src={stack.logo ? stack.logo : ""} width={60} height={60} unoptimized draggable="false" alt={stack.name} />
      <h3 className="mt-4 text-center text-xl font-medium drop-shadow-[1px_2px_2px_rgba(0,0,0,0.75)] sm:text-2xl">
        {stack.name}
      </h3>
      <a
        href={stack.stack_link}
        target="_blank"
        rel="noreferrer"
        className="p-2 mt-4 mx-auto text-center text-sm sm:text-base"
      >
        Voir page
      </a>
      <div className="flex items-center gap-2 justify-evenly">
        <DeleteStackButton id={stack.id} logo={stack.logo} />
        <UpdateStackButton id={stack.id} />
      </div>
    </div>
  );
}
