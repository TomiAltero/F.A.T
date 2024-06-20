"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
const routes = [
  {
    name: "Inicio",
    route: "/",
  },
  {
    name: "Quienes Somos",
    route: "/quienessomos",
  },
  {
    name: "Contáctanos",
    route: "/contactanos",
  },
  {
    name: "Club de Amigos",
    route: "/clubdeamigos",
  },
  {
    name: "Consultorios",
    route: "/consultorios",
  },
  {
    name: "Tienda",
    route: "/tienda",
  },
  {
    name: "Acciones",
    route: "/acciones",
  },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav className="bg-custom-blue">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-between sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Image
                width={50}
                height={50}
                src="/logo-du.png"
                alt="Your Company"
              />
            </div>
            <div className="hidden sm:ml-10 sm:block">
              <div className="flex items-center space-x-3">
                {routes.map((route) => (
                  <a
                    key={route.name}
                    href={route.route}
                    className={`${pathname === route.route ? "bg-gray-500" : ""} text-white rounded-md px-2 py-2 text-sm font-medium hover:bg-blue-800`}
                  >
                    {route.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-x-3 items-center">
            <Link href="/donar">
              <Button
                variant="destructive"
                className="rounded-full text-base px-4 py-2 font-semibold"
              >
                Donar Aquí
              </Button>
            </Link>
            <Link href="/login">
              <Button className="bg-custom-white text-black text-base px-4 py-2  font-semibold">
                Iniciar Sesión
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {routes.map((route) => (
            <a
              key={route.name}
              href={route.route}
              className={`${pathname === route.route ? "bg-gray-900" : ""} block rounded-md px-3 py-2 text-base font-medium`}
            >
              {route.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
