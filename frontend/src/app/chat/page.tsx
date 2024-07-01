import React from "react";
import AppLayout from "@/app/applayout";
import Chat from "@/components/chat";

export default function Page() {
  return (
    <AppLayout>
      <section className="flex justify-center items-center h-full">
        <h1 className="text-xl  text-center">
          <Chat />
        </h1>
      </section>
    </AppLayout>
  );
}
