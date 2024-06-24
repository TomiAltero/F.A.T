import React from "react";
import AppLayout from "@/app/applayout";
import Inicio from "@/components/inicio";

const Page = () => {
  return (
    <AppLayout>
      <main className="flex justify-center items-center h-full">
        <Inicio />
      </main>
    </AppLayout>
  );
};

export default Page;
