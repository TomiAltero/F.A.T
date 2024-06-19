import React from "react";
import Sidebar from "@/components/Sidebar/index";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">{children}</div>
    </div>
  );
};

export default AppLayout;
