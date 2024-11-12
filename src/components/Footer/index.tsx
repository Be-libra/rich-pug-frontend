"use client";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, useState } from "react";

import title from "./../../../public/home/whitepaper/title.png";
import telegram from "./../../../public/home/footer/Telegram.svg";

const Footer: FunctionComponent = () => {
  const [subscribe, setSubscribe] = useState(false);
  const [mail, setMail] = useState("");
  return (
    <>
      <div className="footer-container mt-16" id="footer">
        <div className="flex flex-col items-start justify-start border-solid border-[#949494] lg:flex-row lg:justify-between lg:border-b lg:pb-8">
          <div className="mb-4 flex flex-col items-start justify-between">
            <div className="relative mb-0 h-[4rem] w-[8rem] lg:h-[5rem] lg:w-[10rem]">
              <Image src={title} alt="sensex" width={240} />
            </div>
            <p className="text-[12px] text-gray-300 lg:text-[16px] -mt-2 ms-3">
              Join us and embrace <br /> extraordinary excitement!
            </p>
          </div>
          <div className="">
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
                  <Image src={telegram} alt="send" fill />
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
          <div className="flex-container-between w-full flex flex-wrap items-center justify-between lg:mt-4">
            <div className="hidden lg:block">
              <p className=" lg:min-w-[250px]">@Rich Pug 2024</p>
            </div>
            <div className="flex-container-between flex items-center justify-between mt-8 md:mt-24 lg:mt-0 lg:w-auto">
              <Link
                href="https://x.com/richpugtoken"
                target={"_blank"}
                className="decoration-transparent pe-3 lg:pe-5"
              >
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_276_129)">
                    <path
                      d="M2.95102 0C2.88402 0.068 2.81701 0.068 2.68201 0H2.95102Z"
                      fill="#292929"
                    />
                    <path
                      d="M17.3921 0C17.3251 0.068 17.258 0.068 17.123 0H17.3921Z"
                      fill="#292929"
                    />
                    <path
                      d="M20.079 2.61572C20.064 2.25375 19.9724 1.89924 19.8104 1.5752C19.6484 1.25115 19.4196 0.965048 19.139 0.73584C18.7006 0.324467 18.1278 0.0861616 17.527 0.0649414H2.61499C2.41499 0.129941 2.21498 0.0648828 2.01498 0.129883C1.44022 0.331946 0.940111 0.703071 0.580444 1.19482C0.220777 1.68658 0.0184236 2.2758 0 2.88477V17.3247C0.00100498 17.7917 0.118163 18.2512 0.340912 18.6616C0.563661 19.072 0.885004 19.4205 1.276 19.6758C1.6633 19.9695 2.13304 20.1345 2.61899 20.147H17.532C17.8844 20.1316 18.2292 20.0396 18.5425 19.8774C18.8558 19.7153 19.13 19.4869 19.346 19.208C19.7509 18.7582 20.0087 18.1951 20.085 17.5947V2.61572H20.079Z"
                      fill="white"
                    />
                    <path
                      d="M4.02495 4.00195L8.69695 10.254L3.99695 15.335H5.05395L9.17295 10.886L12.5049 15.335H16.1049L11.1679 8.73495L15.5449 4.00195H14.4859L10.6919 8.10195L7.62795 4.00195H4.02495ZM5.58195 4.78195H7.23695L14.5459 14.556H12.8909L5.58195 4.78195Z"
                      fill="#292929"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_276_129">
                      <rect width="20.084" height="20.148" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link
                href="https://t.me/richpug"
                target="_blank"
                className="px-3 lg:px-5 decoration-transparent"
              >
                <svg
                  width="23"
                  height="20"
                  viewBox="0 0 23 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_276_135)">
                    <path
                      d="M23 0.817422C22.8812 1.38195 22.7558 1.94527 22.6436 2.51161C21.8983 6.28097 21.156 10.0509 20.4126 13.8209C20.0765 15.5253 19.7381 17.2286 19.4075 18.9343C19.2257 19.8725 18.1072 20.3211 17.3535 19.7421C14.6185 17.6398 11.8858 15.5332 9.15319 13.4278C9.11839 13.4007 9.08599 13.3699 8.99898 13.295C9.05538 13.266 9.10759 13.2509 9.14419 13.2183C12.4997 10.1813 15.8546 7.14316 19.2071 4.10316C19.3283 3.99327 19.4483 3.87372 19.5365 3.73727C19.5899 3.65455 19.6325 3.48429 19.5893 3.4378C19.5263 3.36897 19.3703 3.33154 19.2749 3.3581C19.0913 3.40942 18.9118 3.49757 18.7498 3.60082C16.8153 4.83131 14.8843 6.06723 12.9521 7.30195C10.6605 8.76671 8.36772 10.2303 6.07912 11.6992C5.93811 11.7898 5.8211 11.8037 5.66449 11.75C4.10135 11.215 2.53582 10.6873 0.97088 10.1566C0.653452 10.0491 0.367827 9.88852 0.16501 9.61078C-0.0804116 9.27327 -0.0600099 8.93637 0.255018 8.66769C0.434433 8.51493 0.646251 8.38391 0.864671 8.29757C6.68698 5.99357 12.5099 3.69803 18.3316 1.40006C19.3055 1.01606 20.2746 0.619988 21.2532 0.248667C21.5575 0.133346 21.8815 0.0439879 22.2037 0.00957283C22.6586 -0.0387291 22.8104 0.0808181 22.9994 0.500441V0.816818L23 0.817422Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_276_135">
                      <rect width="23" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link
                href="https://www.youtube.com/@richpugtoken"
                target="_blank"
                className="px-3 lg:px-5 decoration-transparent"
              >
                <svg
                  width="23"
                  height="16"
                  viewBox="0 0 23 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.82162 14.7547C5.60422 15.0048 8.39826 15.1049 11.1916 15.0547C13.985 15.1049 16.779 15.0048 19.5616 14.7547C20.1341 14.6936 20.6736 14.4569 21.1063 14.0772C21.539 13.6975 21.8437 13.1933 21.9786 12.6337C22.304 10.9543 22.4352 9.24302 22.3696 7.53365C22.4371 5.82447 22.3076 4.11322 21.9836 2.43366C21.8489 1.87389 21.5443 1.36951 21.1116 0.989753C20.6788 0.609999 20.1392 0.37348 19.5666 0.31266C16.784 0.0624052 13.99 -0.037743 11.1966 0.0126565C8.40259 -0.0377432 5.60788 0.0624049 2.82462 0.31266C2.25248 0.373642 1.71326 0.610265 1.28102 0.990043C0.848779 1.36982 0.54472 1.87413 0.410621 2.43366C0.0843224 4.11295 -0.0478757 5.82417 0.0166236 7.53365C-0.0494142 9.24298 0.0814458 10.9542 0.406623 12.6337C0.541108 13.1934 0.84554 13.6977 1.27812 14.0775C1.7107 14.4572 2.24923 14.6938 2.82162 14.7547ZM8.30862 3.74566L15.4146 7.32465L8.30862 10.8827V3.74566Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link
                href="https://medium.com/@richpugtoken"
                target="_blank"
                className="px-3 lg:px-5 decoration-transparent"
              >
                <svg
                  width="29"
                  height="16"
                  viewBox="0 0 29 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_276_139)">
                    <path
                      d="M0 7.33938C0.10724 6.82091 0.17974 6.29217 0.32776 5.7847C1.40318 2.09527 5.01987 -0.313748 8.9394 0.0331214C12.6822 0.364591 15.7408 3.20995 16.2679 6.84951C16.8638 10.9679 14.213 14.793 10.0813 15.7772C5.48659 16.8706 0.813359 13.825 0.10724 9.2776C0.0755208 9.07153 0.03625 8.86546 0 8.65939C0 8.21939 0 7.77939 0 7.33938Z"
                      fill="white"
                    />
                    <path
                      d="M29 9.3197C28.9441 9.92837 28.9244 10.5429 28.8225 11.1442C28.6684 12.0536 28.4713 12.9563 28.2598 13.8547C28.2032 14.0959 28.0567 14.3291 27.9057 14.5337C27.6882 14.8271 27.3755 14.8329 27.2003 14.5059C26.9594 14.0571 26.7487 13.5767 26.6301 13.0861C26.1558 11.12 26.0841 9.11583 26.1377 7.10648C26.1755 5.69553 26.2782 4.28752 26.6263 2.91178C26.7381 2.47177 26.8937 2.03177 27.1014 1.62696C27.3596 1.12463 27.7357 1.13196 28.0227 1.6189C28.3943 2.24884 28.5521 2.95138 28.6518 3.65758C28.7794 4.55446 28.8519 5.45793 28.9501 6.35847C28.9614 6.46554 28.9826 6.57187 28.9984 6.67894V9.31896L29 9.3197Z"
                      fill="white"
                    />
                    <path
                      d="M25.3275 8.00339C25.3124 9.81768 25.0435 11.5865 24.1728 13.2145C23.8858 13.7513 23.512 14.269 23.0785 14.7025C21.9645 15.8171 20.5425 15.7988 19.3976 14.7157C18.585 13.9471 18.0881 12.9923 17.7694 11.9561C16.8412 8.93254 16.8956 5.94198 18.1825 3.01302C18.4732 2.35155 18.8803 1.75681 19.4225 1.25667C20.5606 0.205796 21.9464 0.206529 23.0739 1.27207C24.0172 2.16308 24.5119 3.29682 24.86 4.4995C25.1915 5.64351 25.335 6.81392 25.3282 8.00266L25.3275 8.00339Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_276_139">
                      <rect width="29" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
            <div className="flex-container-between flex items-center justify-between mt-8 md:mt-24 lg:mt-0 lg:w-auto">
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
            <p className="mb-4 mt-10 text-start text-md lg:hidden">@Rich Pug 2024</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
