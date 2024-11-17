"use client";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import title from "../../../public/home/whitepaper/title.png";
import Image from "next/image";

import styles from "./navbar.module.scss";
import Link from "next/link";
import { useAppKit, useAppKitAccount, useAppKitProvider, useDisconnect } from "@reown/appkit/react";
import { FaUser } from "react-icons/fa";
import { Provider, useAppKitConnection } from "@reown/appkit-adapter-solana/react";
import { PublicKey } from "@solana/web3.js";
import { FaArrowRightFromBracket } from "react-icons/fa6";

let window: Window & typeof globalThis;

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if(window){
    // do nothing
}

  const { open } = useAppKit();
  const { address, isConnected } = useAppKitAccount();
  const { connection } = useAppKitConnection()
  const { walletProvider } = useAppKitProvider<Provider>('solana')
  const {disconnect} = useDisconnect()

  const [userBalance, setUserBalance] = useState(0)

  const getUserBalance  = async() =>{
    const balance = await connection?.getBalance(walletProvider.publicKey as PublicKey)
    console.log(balance);
    setUserBalance(userBalance)
  }

  useEffect(()=>{
    if(isConnected && address){
        getUserBalance();
    }
  },[address, isConnected])
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
            <Link href="/" className="text-md/6 font-semibold text-white">
              Home
            </Link>
            <a href="#" className="text-md/6 font-semibold text-white">
              Whitepaper
            </a>
            <Link href="/airdrop" className="text-md/6 font-semibold text-white">
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
          {!address && <a
            href="#"
            className="text-md/6 font-semibold text-white ms-4  px-5 py-2 rounded-lg bg-[#A43BE1] whitespace-nowrap"
            onClick={() => open()}
          >
            Connect wallet
          </a>}
          {address && <Popover>
            <PopoverButton className="text-md/6 flex items-center font-semibold text-white ms-4  px-5 py-2 rounded-lg bg-[#A43BE1] whitespace-nowrap focus:outline-none hover:outline-none">
              <FaUser className="text-md/6 text-white me-2" />
              <p className="text-md/6 text-white">{address?.slice(0,6)}...{address?.slice(-3)}</p>
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
                  <span>{address?.slice(0,6)}...{address?.slice(-3)}</span>
                    <span>{userBalance} SOL</span>
                  </p>
                </a>
                
              </div>
              <div className="p-3">
                <a
                  className="flex text-md/6 items-center justify-between rounded-lg py-2 px-3 transition hover:bg-white/5"
                  href="#"
                  onClick={()=> disconnect()}
                >
                  <p className="text-red-500 text-lg">Disconnect</p>
                  <FaArrowRightFromBracket className="text-red-500 text-md" />
                </a>
              </div>
            </PopoverPanel>
          </Popover>}
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
