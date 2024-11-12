"use client";
import Image from "next/image";
import { FunctionComponent, useRef, useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import title from "../../../public/staking/pugTitle.png";

import styles from "./stakenow.module.scss";

const StakeNow: FunctionComponent = () => {
  const [stakeAmount, setStakeAmount] = useState<string>();
  const [stakeLoader] = useState<number>();

  const firstTierRef = useRef<HTMLInputElement>(null);
  const secondTierRef = useRef<HTMLInputElement>(null);
  const thirdTierRef = useRef<HTMLInputElement>(null);

  console.log(stakeAmount);

  return (
    <>
      <section
        className="stake-now-section w-100 mt-28 flex justify-center font-[family-name:var(--font-harngton-sans)]"
        id="stake-now"
      >
        <div className="stake-now-container container flex flex-col items-center">
          <Image src={title} alt="staking" />
          <div className="h-[3px] w-20 bg-[#A43BE1] mt-2"></div>
          <div className="wrapper flex w-full  flex-col flex-wrap rounded-xl px-2 pb-3 pt-2 lg:px-4">
            <h2 className="mb-2 text-center text-[35px] font-bold text-white">
              Plans
            </h2>
            <div className="mt-3 flex w-full flex-wrap items-center justify-center lg:justify-between">
              <div
                className={`mx-2 my-2 w-[300px] rounded-md ${styles.stakeNowPlan} md:w-[330px] lg:w-[290px] xl:w-[370px] pt-1 px-3 pb-6`}
              >
                <div className="flex h-full w-full flex-col justify-between px-4 py-3 text-white">
                  <div>
                    <p className="mt-2 text-[22px] font-bold">
                      Plan 1 (30 Days)
                    </p>
                    <p className="mt-0 text-[16px]">70% APR</p>
                  </div>
                  <div className="mt-4">
                    <input
                      className="w-full rounded-md bg-white p-2 text-[14px] text-gray-800 outline-none focus:border-0"
                      placeholder="Fund will be locked"
                      type="number"
                      ref={firstTierRef}
                      onChange={(e) => {
                        // if (
                        //   Number(e.target.value) > 111 &&
                        //   Number(e.target.value) <= 555
                        // ) {
                        //   setTier1Error('');
                        // }
                        setStakeAmount(e.target.value.toString());
                      }}
                    />
                    {/* {tier1Error && (
                      <p className='text-[12px] text-[red]'>{tier1Error}</p>
                    )} */}

                    <button
                      className="mt-4 flex h-[40px] w-[100px] items-center justify-center rounded-md border-0 bg-[#A43BE1]"
                      // onClick={() => stakeToken(1)}
                    >
                      {stakeLoader === 1 && (
                        <ImSpinner2 className="mx-2 h-5 w-5 animate-spin text-white" />
                      )}
                      Stake Now
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={`mx-2 my-2 w-[300px] rounded-md ${styles.stakeNowPlan} md:w-[330px] lg:w-[290px] xl:w-[370px] pt-1 px-3 pb-6`}
              >
                <div className="flex h-full w-full flex-col justify-between px-4 py-3 text-white">
                  <div>
                    <p className="mt-2 text-[22px] font-bold">
                      Plan 2 (60 Days)
                    </p>
                    <p className="mt-0 text-[16px]">90% APR</p>
                  </div>
                  <div className="mt-4">
                    <input
                      className="w-full rounded-md bg-white p-2 text-[14px] text-gray-800 outline-none focus:border-0"
                      placeholder="Fund will be locked"
                      type="number"
                      ref={secondTierRef}
                      onChange={(e) => {
                        // if (
                        //   Number(e.target.value) > 111 &&
                        //   Number(e.target.value) <= 555
                        // ) {
                        //   setTier1Error('');
                        // }
                        setStakeAmount(e.target.value.toString());
                      }}
                    />
                    {/* {tier1Error && (
                      <p className='text-[12px] text-[red]'>{tier1Error}</p>
                    )} */}

                    <button
                      className="mt-4 flex h-[40px] w-[100px] items-center justify-center rounded-md border-0 bg-[#A43BE1]"
                      // onClick={() => stakeToken(1)}
                    >
                      {stakeLoader === 1 && (
                        <ImSpinner2 className="mx-2 h-5 w-5 animate-spin text-white" />
                      )}
                      Stake Now
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={`mx-2 my-2 w-[300px] rounded-md ${styles.stakeNowPlan} md:w-[330px] lg:w-[290px] xl:w-[370px] pt-1 px-3 pb-6`}
              >
                <div className="flex h-full w-full flex-col justify-between px-4 py-3 text-white">
                  <div>
                    <p className="mt-2 text-[22px] font-bold">
                      Plan 3 (90 Days)
                    </p>
                    <p className="mt-0 text-[16px]">150% APR</p>
                  </div>
                  <div className="mt-4">
                    <input
                      className="w-full rounded-md bg-white p-2 text-[14px] text-gray-800 outline-none focus:border-0"
                      placeholder="Fund will be locked"
                      type="number"
                      ref={thirdTierRef}
                      onChange={(e) => {
                        // if (
                        //   Number(e.target.value) > 111 &&
                        //   Number(e.target.value) <= 555
                        // ) {
                        //   setTier1Error('');
                        // }
                        setStakeAmount(e.target.value.toString());
                      }}
                    />
                    {/* {tier1Error && (
                      <p className='text-[12px] text-[red]'>{tier1Error}</p>
                    )} */}

                    <button
                      className="mt-4 flex h-[40px] w-[100px] items-center justify-center rounded-md border-0 bg-[#A43BE1]"
                      // onClick={() => stakeToken(1)}
                    >
                      {stakeLoader === 1 && (
                        <ImSpinner2 className="mx-2 h-5 w-5 animate-spin text-white" />
                      )}
                      Stake Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default StakeNow;
