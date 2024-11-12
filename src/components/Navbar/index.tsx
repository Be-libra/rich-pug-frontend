"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import title from "../../../public/home/whitepaper/title.png";
import Image from "next/image";

import styles from "./navbar.module.scss"
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`${styles.navbar}`}>
      <nav
        aria-label="Global"
        className="mx-auto flex w-full items-center justify-between px-5 pt-0 pb-0 lg:px-12"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image alt="logo" src={title} className="h-16 lg:h-20 w-auto" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end">
          <div className="hidden lg:flex lg:gap-x-10 xl:gap-x-12">
            <a href="#" className="text-md/6 font-semibold text-white">
              Home
            </a>
            <a href="#" className="text-md/6 font-semibold text-white">
              Whitepaper
            </a>
            <a href="#" className="text-md/6 font-semibold text-white">
              Roadmap
            </a>
            <a href="#" className="text-md/6 font-semibold text-white whitespace-nowrap">
              About Us
            </a>
            <a href="#" className="text-md/6 font-semibold text-white whitespace-nowrap">
              Contact Us
            </a>
          </div>
          <a href="#" className="text-md/6 font-semibold text-white ms-12  px-5 py-2 rounded-lg bg-[#A43BE1]">
            MANIFESTO
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-3 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image alt="logo" src={title} className="h-16 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-50"
                >
                  Whitepaper
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-50"
                >
                  Roadmap
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-50"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-50"
                >
                  Contact Us
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="mx-0 block rounded-lg px-5 py-2.5 text-base/7 font-semibold text-white hover:bg-gray-50 bg-[#A43BE1] max-w-[135px]"
                >
                  MANIFESTO
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
