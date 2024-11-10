import Image from "next/image";
import { FunctionComponent } from "react";

import title from "../../../../public/home/pugonomics/title.png";
import pieChart from "../../../../public/home/pugonomics/pieChart.png";
import dog from "../../../../public/home/pugonomics/dog.png";

import styles from "./pugonomics.module.scss";

const Pugonomics: FunctionComponent = () => {
  return (
    <>
      <div className="w-full flex justify-center mt-20 mb-20">
        <div className="container">
          <div className="w-full flex justify-between items-center flex-wrap flex-row">
            <div className="basis-2/2 lg:basis-1/2 w-full lg:pse-3">
              <div
                className={`w-full my-3 flex justify-center items-center relative`}
              >
                <Image
                  src={pieChart}
                  objectFit="contain"
                  alt="About Us Img"
                  className="scale-[0.85]"
                />
              </div>
            </div>
            <div className="basis-2/2 lg:basis-1/2 w-full">
              <div className="w-full my-3 px-3 md:px-0 lg:ps-3">
                <Image src={title} alt="about us" width={240} />
                <div
                  className={`${styles.tokenomicsContainer} rounded-3xl w-full pb-5`}
                >
                  <div className={`${styles.tokenomicsData} w-full px-5`}>
                    <div className="w-full flex justify-between border-b-2 py-4">
                      <div className="flex">
                        <Image
                          src={dog}
                          alt="dog"
                          width={30}
                          className="me-5 h-[30px] relative mt-2"
                        />
                        <p className="text-lg font-semibold">
                          Total Airdop 40% <br />
                          Other Rewards 20%
                        </p>
                      </div>
                      <div>
                        <p className="text-lg">Amount</p>
                        <p className="text-lg">60,00,00,000</p>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.tokenomicsData} w-full px-5`}>
                    <div className="w-full flex justify-between border-b-2 py-4">
                      <div className="flex">
                        <Image
                          src={dog}
                          alt="dog"
                          width={30}
                          className="me-5 h-[30px] relative mt-2"
                        />
                        <p className="text-lg font-semibold">
                          10% Presale
                          <br />
                          50% Unlocked
                          <br />
                          @TGE5% every week
                        </p>
                      </div>
                      <div>
                        <p className="text-lg">Amount</p>
                        <p className="text-lg">10,00,00,000</p>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.tokenomicsData} w-full px-5`}>
                    <div className="w-full flex justify-between border-b-2 py-4">
                      <div className="flex">
                        <Image
                          src={dog}
                          alt="dog"
                          width={30}
                          className="me-5 h-[30px] relative mt-2"
                        />
                        <p className="text-lg font-semibold">
                          5% Liquidity
                          <br />
                          Fully Unlocked @TGE
                        </p>
                      </div>
                      <div>
                        <p className="text-lg">Amount</p>
                        <p className="text-lg">5,00,00,000</p>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.tokenomicsData} w-full px-5`}>
                    <div className="w-full flex justify-between border-b-2 py-4">
                      <div className="flex">
                        <Image
                          src={dog}
                          alt="dog"
                          width={30}
                          className="me-5 h-[30px] relative mt-2"
                        />
                        <p className="text-lg font-semibold">
                          5% Marketing
                          <br />
                          Fully Unlocked @TGE
                        </p>
                      </div>
                      <div>
                        <p className="text-lg">Amount</p>
                        <p className="text-lg">5,00,00,000</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${styles.tokenomicsData} w-full px-5 rounded-3xl`}
                  >
                    <div className="w-full flex justify-between border-b-2 py-4">
                      <div className="flex">
                        <Image
                          src={dog}
                          alt="dog"
                          width={30}
                          className="me-5 h-[30px] relative mt-2"
                        />
                        <p className="text-lg font-semibold">
                          10% Team
                          <br />
                          6 months cliff,
                          <br />
                          48 months vesting
                        </p>
                      </div>
                      <div>
                        <p className="text-lg">Amount</p>
                        <p className="text-lg">10,00,00,000</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${styles.tokenomicsData} w-full px-5 rounded-3xl`}
                  >
                    <div className="w-full flex justify-between py-4">
                      <div className="flex">
                        <Image
                          src={dog}
                          alt="dog"
                          width={30}
                          className="me-5 h-[30px] relative mt-2"
                        />
                        <p className="text-lg font-semibold">
                          10% Treasury 6 months cliff,
                          <br />
                          48 months vesting
                        </p>
                      </div>
                      <div>
                        <p className="text-lg">Amount</p>
                        <p className="text-lg">10,00,00,000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pugonomics;
