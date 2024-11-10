"use client";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, useState } from "react";

import title from "../../../../public/home/whitepaper/title.png";
import telegram from "../../../../public/home/footer/Telegram.svg";


const Footer: FunctionComponent = () => {
  const [subscribe, setSubscribe] = useState(false);
  const [mail, setMail] = useState("");
  return (
    <>
      <div className="footer-container mt-16" id="footer">
        <div className="flex flex-col items-start justify-start border-solid border-[#949494] lg:flex-row lg:justify-between lg:border-b lg:pb-8">
          <div className="mb-4 flex flex-col items-start justify-start xl:flex-1">
            <div className="relative mb-0 h-[4rem] w-[8rem] lg:h-[5rem] lg:w-[10rem]">
              <Image src={title} alt="sensex" width={240} />
            </div>
            <p className="text-[12px] text-gray-300 lg:text-[16px] -mt-2 ms-3">
              Join us and embrace <br /> extraordinary excitement!
            </p>
          </div>
          <div className="xl:flex-[1.5]">
            <h1 className="text-[20px]">Got Questions?</h1>
            <Link
              href="https://t.me/ruletsupport"
              className="flex-container-between flex items-center justify-between decoration-transparent my-4 h-10 w-[15rem] rounded-lg bg-white md:w-[25rem] lg:w-[14rem]"
            >
              <input
                type="text"
                placeholder="Drop Us A Text On"
                className="input-field h-10 rounded-lg"
                disabled
              />
              <div className="p-2">
                <div className="relative h-6 w-6">
                  <Image
                    src={telegram}
                    alt="send"
                    fill
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="">
            <h1 className="text-[18px] lg:text-[20px] font-[family-name:var(--font-geist-sans)]">
              Join us!
            </h1>
            <p className="w-[15rem] text-[12px] leading-[120%] text-gray-300 md:w-[25rem] lg:w-[15rem] lg:text-[16px] lg:leading-[150%]">
              Subscribe to our Monthly newsletter and be a part of our journey
              and global crypto updates.
            </p>
            <div className="flex-container-between flex items-center justify-between flex items-center justify-between my-2 h-9 w-[15rem] rounded-lg bg-[#fff] p-[0.1rem] md:w-[25rem] lg:mt-10 lg:w-[15rem]">
              <input
                type="text"
                className="light-input-field h-9 rounded-lg"
                placeholder="Your Email"
                onChange={(e) => {
                  setSubscribe(false);
                  setMail(e.target.value);
                }}
                value={mail}
              />
              <button
                className="h-full rounded-lg bg-[#B53EEC] px-5 text-white hover:scale-[0.95]"
                onClick={() => {
                  setSubscribe(true);
                }}
              >
                Subscribe
              </button>
            </div>
            {subscribe && mail && (
              <p className="text-[0.8rem]">Thank you for subscribing us!</p>
            )}
          </div>
        </div>
        <div>
          <div className="flex-container-between flex items-center justify-between lg:mt-4">
          <div>
              <p className="hidden lg:block">@Rich Pug 2024</p>
            </div>
            <div className="flex-container-between flex items-center justify-between mt-8 w-full md:mt-24 lg:mt-0 lg:w-auto">
              <Link
                href="https://ruletgames.gitbook.io/rulet.games-whitepaper/legal/privacy-policy"
                className="decoration-transparent pe-3 lg:pe-5 border-r-2"
              >
                <p>Privacy Policy</p>
              </Link>
              <Link
                href="https://ruletgames.gitbook.io/rulet.games-whitepaper/legal/terms-of-services"
                className="px-3 lg:px-5 decoration-transparent border-r-2"
              >
                <p>Terms of Use</p>
              </Link>
              <Link
                href="https://ruletgames.gitbook.io/rulet.games-whitepaper/support"
                className="px-3 lg:px-5 decoration-transparent"
              >
                <p>FAQ</p>
              </Link>
            </div>
            
          </div>
          
          <div>
            <p className="my-4 text-start text-xl lg:hidden">
            @Rich Pug 2024
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
