"use client";

import Image from "next/image";
import { Calendar, Document, Profile2User, Home } from "iconsax-react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { useCentralStore } from "@/Store";
import React, { useEffect } from "react";

function Sidebar() {
  const pathname = usePathname();
  const { setIsSidebarOpen, isSidebarOpen } = useCentralStore();

  return (
    <div className="w-60 shrink-0 md:block h-screen sticky top-0 overflow-hidden">
      <div className="w-full h-full bg-white border-r">
        <div className="p-4 md:p-6 flex cursor-pointer group items-center gap-2">
          <div>
            <h1 className="text-xl font-bold  text-blue-800">DownIsUpApp</h1>
          </div>
        </div>

        <hr className="bg-gray-400 mx-2" />

        <div className="flex flex-col h-full justify-between">
          <div className="pt-6 text-gray-500 font-medium space-y-2 md:px-2 text-sm">
            {" "}
            <Link
              href={"#"}
              className={`flex ${pathname === "/app/dashboard" ? "text-primary" : ""} hover:px-8 duration-200 px-6 py-2 items-center gap-2`}
            >
              <Home variant="Outline" size={16} />
              Inicio
            </Link>
            <Link
              href={"panel-hijos"}
              className={`flex ${pathname === "/app/teams" ? "text-primary" : ""} hover:px-8 duration-200 px-6 py-2 items-center gap-2`}
            >
              <Profile2User size={16} />
              Mis Hijos
            </Link>
            <button
              className={`flex ${pathname === "/app/calendar" ? "text-primary" : ""} hover:px-8 g:opacity-60 duration-200 px-6 py-2 items-center gap-2`}
            >
              <Calendar size={16} />
              Calendario Terapias
            </button>
            <button
              className={`flex ${pathname === "/app/documents" ? "text-primary" : ""} hover:px-8 g:opacity-60 duration-200 px-6 py-2 items-center gap-2`}
            >
              <Document size={16} />
              Chats
            </button>
          </div>

          <div>
            <hr className="bg-gray-400 mx-2 my-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

const NavbarLink = ({ href, active }: { href: string; active: boolean }) => {
  return <Link href={href}></Link>;
};

const NavLink = React.forwardRef<
  LinkProps,
  React.ComponentPropsWithoutRef<"a">
>(({ className, href, ...props }) => (
  <Link
    href={href!}
    className={`flex ${window.location.pathname === href! ? "text-primary" : ""} hover:px-8 duration-200 rounded-md w-full py-2 px-6 items-center gap-2`}
    {...props}
  />
));
NavLink.displayName = "NavLink";

export default Sidebar;
