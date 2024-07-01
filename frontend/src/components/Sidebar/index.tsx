"use client";
import React, { useState } from "react";
import {
  Calendar,
  Document,
  Profile2User,
  Home,
  ArrowDown2,
} from "iconsax-react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { useCentralStore } from "@/Store";

function Sidebar() {
  const pathname = usePathname();
  const { setIsSidebarOpen, isSidebarOpen } = useCentralStore();
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  return (
    <div className="w-60 shrink-0 md:block h-screen sticky top-0 overflow-hidden">
      <div className="w-full h-full bg-white border-r">
        <Link href="/inicio">
          <div className="p-3 md:p-6 flex cursor-pointer group items-center gap-2 h-1/8">
            <div>
              <h1 className="text-xl font-bold text-blue-800 text-center mx-5">
                DownIsUpApp
              </h1>
            </div>
          </div>
        </Link>

        <hr className="bg-gray-400 mx-4" />

        <div className="flex flex-col h-full justify-between">
          <div className="pt-6 text-gray-500 font-medium space-y-2 md:px-2 text-sm">
            <Link
              href="/inicio"
              className={`flex ${
                pathname === "/inicio" ? "text-blue-700" : ""
              } hover:text-blue-700 duration-200 px-6 py-2 items-center gap-2 transition-all ease-in-out`}
            >
              <Home variant="Outline" size={16} />
              Inicio
            </Link>

            <div>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex justify-between items-center ${
                  pathname === "/app/teams" ? "text-blue-700" : ""
                } hover:text-blue-700 duration-200 px-6 py-2 w-full transition-all ease-in-out`}
              >
                <div className="flex items-center gap-2">
                  <Profile2User size={16} />
                  Mis Hijos
                </div>
                <ArrowDown2 size={16} />
              </button>
              {isDropdownOpen && (
                <div className="pl-10 mt-2 space-y-2">
                  <Link
                    href="/panel-hijos"
                    className={`block ${
                      pathname === "/panel-hijos" ? "text-blue-700" : ""
                    } hover:text-blue-700 duration-200 py-1 transition-all ease-in-out`}
                  >
                    Ver Hijos
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="#"
              className={`flex ${
                pathname === "/app/calendar" ? "text-blue-700" : ""
              } hover:text-blue-700 duration-200 px-6 py-2 items-center gap-2 transition-all ease-in-out`}
            >
              <Calendar size={16} />
              Calendario Terapias
            </Link>
            <Link
              href="/chat"
              className={`flex ${
                pathname === "/app/documents" ? "text-blue-700" : ""
              } hover:text-blue-700 duration-200 px-6 py-2 items-center gap-2 transition-all ease-in-out`}
            >
              <Document size={16} />
              Chats
            </Link>
          </div>

          <div>
            <hr className="bg-gray-400 mx-4 my-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

const NavLink = React.forwardRef<
  HTMLAnchorElement,
  LinkProps & React.RefAttributes<HTMLAnchorElement>
>(({ href, ...props }, ref) => (
  <Link
    href={href!}
    {...props}
    ref={ref}
    className={`flex ${
      typeof window !== "undefined" && window.location.pathname === href
        ? "text-blue-700"
        : ""
    } hover:text-blue-700 duration-200 rounded-md w-full py-2 px-6 items-center gap-2 transition-all ease-in-out`}
  />
));
NavLink.displayName = "NavLink";

export default Sidebar;
