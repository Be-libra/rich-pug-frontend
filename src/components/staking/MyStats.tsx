import Image from "next/image";
import { FunctionComponent } from "react";
import title from "../../../public/staking/statsTitle.png";

import styles from "./mystats.module.scss";

const MyStats: FunctionComponent = () => {
  return (
    <>
      <section className="w-full mt-20 flex justify-center font-[family-name:var(--font-harngton-sans)]">
        <div
          className={`container ${styles.mystatsContainer} mx-3 lg:mx-0 py-16 px-5 flex flex-col items-center`}
        >
          <div className="wrapper relative z-10 flex flex-col items-center w-full">
            <Image src={title} alt="staking" />
            <div className="h-[3px] w-20 bg-[#A43BE1] mt-[-5px]"></div>
            <div className="flex md:flex-row flex-col w-full mt-8">
              <div className="md:basis-1/3 my-3 w-full flex items-center justify-center md:border-r border-[#D9D9D9] ps-4">
                <div>
                  <p className="text-xl">Total $PUG Staked:</p>
                  <p className="mt-2 text-center text-lg">0.00 PUG</p>
                </div>
              </div>
              <div className="md:basis-1/3 my-3 w-full flex items-center justify-center md:border-r border-[#D9D9D9]">
                <div>
                  <p className="text-xl">Total $PUG Earned:</p>
                  <p className="mt-2 text-center text-lg">0.00 PUG</p>
                </div>
              </div>
              <div className="md:basis-1/3 my-3 w-full flex items-center justify-center pe-4">
                <div>
                  <p className="text-xl">Unlocking in:</p>
                  <p className="mt-2 text-center text-lg">0.00 PUG</p>
                </div>
              </div>
            </div>
            <div className="w-full mt-8 flex flex-wrap justify-center items-center">
              <button
                className="mt-4 mx-3 flex h-[40px] w-[130px] items-center justify-center rounded-md border-0 bg-[#A43BE1]"
                // onClick={() => stakeToken(1)}
              >
                Withdraw
              </button>
              <button className="mx-3 mt-4 flex h-[40px] w-[130px] text-lg items-center justify-center rounded-md border bg-transparent px-5">
                  Re-Stake
                </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyStats;
