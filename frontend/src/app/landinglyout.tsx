import React from "react";
import { opensans } from "@/components/ui/fonts";
import NavBar from "@/components/nav-bar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body className={`${opensans.className} h-[100vh] text-2xl`}>
      <NavBar />
      {children}
    </body>
  );
};

export default LandingLayout;
