import React from "react";
import Sidebar from "@/components/Sidebar/index";
import HeadBar from "@/components/Headbar/index";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <HeadBar />
        <div className="flex-grow p-4">{children}</div>
      </div>
    </div>
  );
};

export default AppLayout;
