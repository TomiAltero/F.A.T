"use client";
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
import React, { useState } from "react";

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
              href={"/inicio"}
              className={`flex ${
                pathname === "/app/dashboard" ? "text-primary" : ""
              } hover:px-8 duration-200 px-6 py-2 items-center gap-2`}
            >
              <Home variant="Outline" size={16} />
              Inicio
            </Link>

            <div>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex justify-between items-center ${
                  pathname === "/app/teams" ? "text-primary" : ""
                } hover:px-8 duration-200 px-6 py-2 w-full`}
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
                    href={"/panel-hijos"}
                    className={`block ${
                      pathname === "/panel-hijos" ? "text-primary" : ""
                    } hover:text-primary duration-200 py-1`}
                  >
                    Ver Hijos
                  </Link>
                  <Link
                    href={"/agregar-hijo"}
                    className={`block ${
                      pathname === "/agregar-hijo" ? "text-primary" : ""
                    } hover:text-primary duration-200 py-2`}
                  >
                    Agregar Hijo
                  </Link>
                </div>
              )}
            </div>

            <Link
              href={"/app/calendar"}
              className={`flex ${
                pathname === "/app/calendar" ? "text-primary" : ""
              } hover:px-8 g:opacity-60 duration-200 px-6 py-2 items-center gap-2`}
            >
              <Calendar size={16} />
              Calendario Terapias
            </Link>
            <Link
              href={"/app/documents"}
              className={`flex ${
                pathname === "/app/documents" ? "text-primary" : ""
              } hover:px-8 g:opacity-60 duration-200 px-6 py-2 items-center gap-2`}
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
        ? "text-primary"
        : ""
    } hover:px-8 duration-200 rounded-md w-full py-2 px-6 items-center gap-2`}
  />
));
NavLink.displayName = "NavLink";

export default Sidebar;
