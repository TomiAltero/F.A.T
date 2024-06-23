import React from "react";
import AppLayout from "@/app/applayout";
import { PanelHijo } from "@/components/panel-hijos";

const Page = () => {
  return (
    <AppLayout>
      <main className="flex justify-center items-center h-full">
        <PanelHijo />
      </main>
    </AppLayout>
  );
};

export default Page;
