"use client";

import React, { useContext } from "react";
import { ResetStackButton } from "./buttons";
import { useEdgeStore } from "@/lib/edgestore";
import { StackContext } from "./stackContext";
import EditStackForm from "./editStackForm";
import AddStackForm from "./addStackForm";

export default function StackFormSection() {
  const { stackToModify } = useContext(StackContext);
  const { edgestore } = useEdgeStore();

  return (
    <section
      className="flex mx-auto w-full max-w-screen-2xl flex-col items-center justify-start
        gap-4 bg-[center_top_4rem] bg-no-repeat py-4 pt-8 *:mx-auto md:gap-6"
    >
      <h2 className="text-xl md:text-2xl lg:text-3xl">{stackToModify ? "Modifier la techno" : "Ajouter une techno"}</h2>
      {stackToModify && <ResetStackButton />}
      {stackToModify ? <EditStackForm edgestore={edgestore} /> : <AddStackForm edgestore={edgestore} />}
    </section>
  );
}
