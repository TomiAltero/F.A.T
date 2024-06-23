import React from "react";
import AppLayout from "@/app/applayout";
import { FormHijo } from "@/components/agregar-hijo";

const Page = () => {
  return (
    <AppLayout>
      <main className="flex justify-center items-center h-full">
        <FormHijo />
      </main>
    </AppLayout>
  );
};

export default Page;
