"use client"
import { FunctionComponent, useEffect, useState } from "react";
import title from "../../../public/airdrop/title.png";
import character from "../../../public/airdrop/character.png";
import Image from "next/image";

import styles from "./airdrop.module.scss";
// import Navbar from "@/components/Navbar";
import Link from "next/link";

import dynamic from "next/dynamic";
import Loader from "@/components/Loader";

// import { Footer } from 'components';
const Navbar = dynamic(() => import('../../components/Navbar'), { ssr: false });

const Airdrop: FunctionComponent = () => {
  const [loader, setLoader] = useState<boolean>(true)

  useEffect(()=>{
    setTimeout(()=>{
      setLoader(false)
    },5000)
  },[])
  return (
    <>
      {loader? <Loader /> :<div
        className={`w-full min-h-[100vh] flex flex-col justify-center items-center font-[family-name:var(--font-harngton-sans)] ${styles.airdropSection}`}
      >
        <div className="absolute top-0 left-0 w-full ">
          <Navbar/>
        </div>
        <Image
          src={title}
          alt="airdrop title"
          className="w-[320px] md:w-[450px] lg:w-[700px] z-10 mt-10 md:mt-16 relative"
        />
        <div
          className={`flex justify-center items-center relative z-10 ${styles.imageContainer}`}
        >
          <Image src={character} alt="airdrop char" className="w-[320px]" />
        </div>
        <div className="flex-container-between flex items-center relative z-10 mt-8 mb-10 w-full px-4 md:mt-20 lg:mt-16 lg:w-auto">
          <Link
            href="https://x.com/richpugtoken"
            target={"_blank"}
            className="decoration-transparent px-3 lg:px-5"
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_276_129)">
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
              <g clipPath="url(#clip0_276_135)">
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
                href="https://www.reddit.com/r/RichPug/"
                target="_blank"
                className="px-3 lg:px-4 decoration-transparent"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="30"
                  height="30"
                  className="scale-[1.2]"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm6.67-10a1.46 1.46 0 00-2.47-1 7.12 7.12 0 00-3.85-1.23L13 6.65l2.14.45a1 1 0 10.13-.61L12.82 6a.31.31 0 00-.37.24l-.74 3.47a7.14 7.14 0 00-3.9 1.23 1.46 1.46 0 10-1.61 2.39 2.87 2.87 0 000 .44c0 2.24 2.61 4.06 5.83 4.06s5.83-1.82 5.83-4.06a2.87 2.87 0 000-.44 1.46 1.46 0 00.81-1.33zm-10 1a1 1 0 112 0 1 1 0 01-2 0zm5.81 2.75a3.84 3.84 0 01-2.47.77 3.84 3.84 0 01-2.47-.77.27.27 0 01.38-.38A3.27 3.27 0 0012 16a3.28 3.28 0 002.09-.61.28.28 0 11.39.4v-.04zm-.18-1.71a1 1 0 111-1 1 1 0 01-1.01 1.04l.01-.04z" />
                </svg>
              </Link>
        </div>
      </div>}
    </>
  );
};
export default Airdrop;
