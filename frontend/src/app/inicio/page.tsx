import React from "react";
import AppLayout from "@/app/applayout";
import Inicio from "@/components/inicio";

export default function Page() {
  return (
    <AppLayout>
      <section className="flex justify-center items-center h-full">
        <h1 className="text-xl  text-center">
          <Inicio />
        </h1>
      </section>
    </AppLayout>
  );
}
