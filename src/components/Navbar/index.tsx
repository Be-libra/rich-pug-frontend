"use client";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import title from "../../../public/home/whitepaper/title.png";
import Image from "next/image";

import styles from "./navbar.module.scss";
import Link from "next/link";
import {
  useAppKit,
  useAppKitAccount,
  useAppKitProvider,
  useDisconnect,
} from "@reown/appkit/react";
import { FaUser } from "react-icons/fa";
import {
  Provider,
  useAppKitConnection,
} from "@reown/appkit-adapter-solana/react";
import { PublicKey } from "@solana/web3.js";
import { FaArrowRightFromBracket } from "react-icons/fa6";

let window: Window & typeof globalThis;

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (window) {
    // do nothing
  }

  const { open } = useAppKit();
  const { address, isConnected } = useAppKitAccount();
  const { connection } = useAppKitConnection();
  const { walletProvider } = useAppKitProvider<Provider>("solana");
  const { disconnect } = useDisconnect();

  const [userBalance, setUserBalance] = useState(0);

  const getUserBalance = async () => {
    const balance = await connection?.getBalance(
      walletProvider.publicKey as PublicKey
    );
    console.log(balance);
    setUserBalance(userBalance);
  };

  useEffect(() => {
    if (isConnected && address) {
      getUserBalance();
    }
  }, [address, isConnected]);
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
            <svg
              width="32"
              height="17"
              viewBox="0 0 32 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="h-6 w-6"
            >
              <path
                d="M7.11111 3.4V0H32V3.4H7.11111ZM7.11111 10.2V6.8H32V10.2H7.11111ZM7.11111 17V13.6H32V17H7.11111ZM1.77778 3.4C1.27407 3.4 0.851852 3.23708 0.511111 2.91125C0.17037 2.58542 0 2.18167 0 1.7C0 1.21833 0.17037 0.814583 0.511111 0.48875C0.851852 0.162917 1.27407 0 1.77778 0C2.28148 0 2.7037 0.162917 3.04444 0.48875C3.38519 0.814583 3.55556 1.21833 3.55556 1.7C3.55556 2.18167 3.38519 2.58542 3.04444 2.91125C2.7037 3.23708 2.28148 3.4 1.77778 3.4ZM1.77778 10.2C1.27407 10.2 0.851852 10.0371 0.511111 9.71125C0.17037 9.38542 0 8.98167 0 8.5C0 8.01833 0.17037 7.61458 0.511111 7.28875C0.851852 6.96292 1.27407 6.8 1.77778 6.8C2.28148 6.8 2.7037 6.96292 3.04444 7.28875C3.38519 7.61458 3.55556 8.01833 3.55556 8.5C3.55556 8.98167 3.38519 9.38542 3.04444 9.71125C2.7037 10.0371 2.28148 10.2 1.77778 10.2ZM1.77778 17C1.27407 17 0.851852 16.8371 0.511111 16.5113C0.17037 16.1854 0 15.7817 0 15.3C0 14.8183 0.17037 14.4146 0.511111 14.0888C0.851852 13.7629 1.27407 13.6 1.77778 13.6C2.28148 13.6 2.7037 13.7629 3.04444 14.0888C3.38519 14.4146 3.55556 14.8183 3.55556 15.3C3.55556 15.7817 3.38519 16.1854 3.04444 16.5113C2.7037 16.8371 2.28148 17 1.77778 17Z"
                fill="#A43BE1"
              />
            </svg>

            {/* <Bars3Icon  /> */}
          </button>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end">
          <div className="hidden lg:flex lg:gap-x-10 xl:gap-x-12">
            <Link href="/" className="text-md/6 font-semibold text-white">
              Home
            </Link>
            <Link href="https://rich-pug.gitbook.io/rich-pug-whitepaper" target="_blank" className="text-md/6 font-semibold text-white">
              Whitepaper
            </Link>
            <Link
              href="/airdrop"
              className="text-md/6 font-semibold text-white"
            >
              Airdrop
            </Link>
            <Link
              href="/#about-us"
              className="text-md/6 font-semibold text-white whitespace-nowrap"
            >
              About Us
            </Link>
            <Link
              href="/#footer"
              className="text-md/6 font-semibold text-white whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>
          <a
            href="#"
            className="text-md/6 font-semibold text-white ms-12  px-5 py-2 rounded-lg bg-[#A43BE1]"
          >
            MANIFESTO
          </a>
          {!address && (
            <a
              href="#"
              className="text-md/6 hidden font-semibold text-white ms-4  px-5 py-2 rounded-lg bg-[#A43BE1] whitespace-nowrap"
              onClick={() => open()}
            >
              Connect wallet
            </a>
          )}
          {address && (
            <Popover className="hidden">
              <PopoverButton className="text-md/6 flex items-center font-semibold text-white ms-4  px-5 py-2 rounded-lg bg-[#A43BE1] whitespace-nowrap focus:outline-none hover:outline-none">
                <FaUser className="text-md/6 text-white me-2" />
                <p className="text-md/6 text-white">
                  {address?.slice(0, 6)}...{address?.slice(-3)}
                </p>
              </PopoverButton>
              <PopoverPanel
                transition
                anchor="bottom"
                className="divide-y mt-3 divide-white/5 rounded-xl bg-[#3f0858c2] text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0 min-w-[200px]"
              >
                <div className="p-3">
                  <a
                    className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                    href="#"
                  >
                    <p className="font-semibold text-white">Address</p>
                    <p className="text-white/70 flex items-center justify-between">
                      <span>
                        {address?.slice(0, 6)}...{address?.slice(-3)}
                      </span>
                      <span>{userBalance} SOL</span>
                    </p>
                  </a>
                </div>
                <div className="p-3">
                  <a
                    className="flex text-md/6 items-center justify-between rounded-lg py-2 px-3 transition hover:bg-white/5"
                    href="#"
                    onClick={() => disconnect()}
                  >
                    <p className="text-red-500 text-lg">Disconnect</p>
                    <FaArrowRightFromBracket className="text-red-500 text-md" />
                  </a>
                </div>
              </PopoverPanel>
            </Popover>
          )}
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
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:text-[#A43BE1]"
                >
                  Home
                </Link>
                <a
                  href="https://rich-pug.gitbook.io/rich-pug-whitepaper"
                  target={"_blank"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:text-[#A43BE1]"
                >
                  Whitepaper
                </a>
                <Link
                  href="/airdrop"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:text-[#A43BE1]"
                >
                  Airdrop
                </Link>
                <Link
                  href="/#about-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:text-[#A43BE1]"
                >
                  About Us
                </Link>
                <Link
                  href="/#footer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:text-[#A43BE1]"
                >
                  Contact Us
                </Link>
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
