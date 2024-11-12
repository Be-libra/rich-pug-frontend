import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { FaInstagram, FaTelegram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

import title from "../../../public/staking/title.png";
import Navbar from "../Navbar";

const StakingHero: FunctionComponent = () => {
  return (
    <>
      <section className="staking-hero-section relative w-100 flex justify-center font-[family-name:var(--font-harngton-sans)]">
        <div className="absolute top-0 left-0 w-full ">
          <Navbar />
        </div>
        <div className="staking-hero-container container flex justify-center md:mt-28 mt-16">
          <div className="wrapper flex flex-col items-center justify-center p-4">
            <Image src={title} alt="staking" />
            <p className="tagline text-3xl mt-2 max-w-[650px] text-center font-medium">
              Stake $PUG Earn $PUG!
            </p>
            <div className="mt-4 flex items-center justify-center">
              <Link href="https://x.com/richpugtoken" target={"_blank"}>
                <div className="relative mx-1 my-2 flex h-10 w-10 items-center justify-center text-[22px]">
                  <FaTwitter />
                </div>
              </Link>
              <Link href="https://instagram.com/ruletgames">
                <div className="relative mx-1 my-2 flex h-10 w-10 items-center justify-center text-[22px]">
                  <FaInstagram />
                </div>
              </Link>
              <Link href="https://t.me/richpug" target="_blank">
                <div className="relative mx-1 my-2 flex h-10 w-10 items-center justify-center text-[22px]">
                  <FaTelegram />
                </div>
              </Link>
              <Link
                href="https://www.youtube.com/@richpugtoken"
                target="_blank"
              >
                <div className="relative mx-1 my-2 flex h-10 w-10 items-center justify-center text-[20px]">
                  <FaYoutube />
                </div>
              </Link>
              <Link href="https://medium.com/@richpugtoken" target="_blank">
                <div className="relative mx-1 my-2 flex h-10 w-10 items-center justify-center text-[20px]">
                  <FaMedium />
                </div>
              </Link>
            </div>
            <div className="w-100 mt-4 flex flex-wrap items-center justify-center">
              <Link href="#stake-now">
                <button className="mx-2 my-2 flex h-[50px] w-[200px] text-lg items-center justify-center rounded-md border-2 bg-transparent px-5">
                  Stake Now
                </button>
              </Link>
              <Link href="/how-to-start">
                <button className="mx-2 my-2 flex h-[50px]  w-[200px] text-lg items-center justify-center rounded-md border-0 bg-[#A43BE1] px-5 ">
                  How To Start
                </button>
              </Link>
              <button
                className="mx-2 my-2 flex h-[50px] w-[200px] text-lg items-center justify-center rounded-md border-2 bg-transparent px-5"
                // onClick={connectWallet}
                // disabled={user !== null && user !== undefined}
              >
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StakingHero;
