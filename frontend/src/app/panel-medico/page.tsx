import React from "react";
import AppLayout from "@/app/applayout";
import PanelMedico from "@/components/panel-medico";

export default function Page() {
  return (
    <AppLayout>
      <section className="flex justify-center items-center h-full">
        <h1 className="text-xl  text-center">
          <PanelMedico />
        </h1>
      </section>
    </AppLayout>
  );
}
