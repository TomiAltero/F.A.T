"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

function HeadBar() {
  return (
    <div className="w-full bg-white shadow-md">
      <Disclosure as="nav" className="bg-white shadow-md">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:bg-blue-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <GiHamburgerMenu className="block h-6 w-6" aria-hidden="true" />
              </Disclosure.Button>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a
                  href="#"
                  className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-sm font-medium"
                >
                  Dashboard
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white"
                  >
                    <span className="sr-only">Open user menu</span>
                    <CgProfile className="h-8 w-8 text-gray-800" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default HeadBar;
