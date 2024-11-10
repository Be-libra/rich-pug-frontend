import { FunctionComponent } from "react";
import title from "../../../public/airdrop/title.png";
import character from "../../../public/airdrop/character.png";
import Image from "next/image";

import styles from "./airdrop.module.scss";
import Navbar from "@/components/Navbar";

const Airdrop: FunctionComponent = () => {
  return (
    <>
      <div
        className={`w-full min-h-[100vh] flex flex-col justify-center items-center font-[family-name:var(--font-harngton-sans)] ${styles.airdropSection}`}
      >
        <div className="absolute top-0 left-0 w-full ">
          <Navbar />
        </div>
        <Image
          src={title}
          alt="airdrop title"
          className="w-[320px] md:w-[450px] lg:w-[700px] z-10 relative"
        />
        <div className={`flex justify-center items-center relative z-10 ${styles.imageContainer}`}>
          <Image src={character} alt="airdrop char" className="w-[320px]" />
        </div>
      </div>
    </>
  );
};
export default Airdrop;
