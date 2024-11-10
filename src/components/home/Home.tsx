import Image from "next/image";
import { FunctionComponent } from "react";
import AboutUs from "./AboutUs/index"

import cover from "../../../public/home/cover.png";
import styles from "./home.module.scss";
import Download from "./download";
import PugToken from "./PugToken";
import Pugonomics from "./Pugonomics";
import Roadmap from "./Roadmap";
import Faq from "./Faq";
import Whitepaper from "./Whitepaper";
import Footer from "./Footer";
import Navbar from "../Navbar";

const Home: FunctionComponent = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-end relative">
        <div className="absolute top-0 left-0 w-full"><Navbar /></div>
        <div className="w-full">
          <Image src={cover} alt="cover" objectFit="cover" className="w-full" />
        </div>

        <div className="h-full -mt-20 relative">
          <div
            className={`relative mt-3 h-full rotate-[3deg] items-center justify-center overflow-hidden ${styles.marqueeBanner} py-1`}
          >
            <div className="relative flex h-full w-fit flex-row overflow-hidden ">
              {Array(10)
                .fill(true)
                .map((_, i) => (
                  <div
                    key={i}
                    className="marquee flex w-fit items-center justify-around leading-normal tracking-wider"
                  >
                    <span className="font-[family-name:var(--font-harngton-sans)] mx-4 flex items-center justify-center text-[20px] text-white">
                      Season’s Biggest Airdrop will be live soon!
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <AboutUs />
        <Download />
        <PugToken />
        <Pugonomics />
        <Roadmap />
        <Faq />
        <Whitepaper />
        <Footer/>
      </div>
    </>
  );
};

export default Home;
