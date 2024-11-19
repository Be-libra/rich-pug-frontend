import Image from "next/image";
import { FunctionComponent } from "react";
import styles from "./whitepaper.module.scss";

import title from "../../../../public/home/whitepaper/title.png";

const Whitepaper: FunctionComponent = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className={`container ${styles.whitepaperContainer} mx-4 md:mx-0`}>
          <div className="w-full py-5 px-4 lg:py-12 lg:px-8 relative z-10">
            <div className="w-full flex md:flex-row flex-col  justify-between items-center">
              <div className="w-full flex flex-col justify-center md:p-10 p-5 pb-5 ps-0 md:ps-7 max-w-[320px]">
                <Image src={title} alt="" width={180} />
                <h1 className="text-4xl font-[family-name:var(--font-geist-sans)] font-bold -mt-2 ml-3">
                  Whitelist
                </h1>
              </div>
              <div className="flex flex-grow md:border-l-2">
                <div className="md:p-10 p-5 pb-5">
                  <p className="text-[#C9C4BD]">
                    We’re excited to invite you to apply for whitelisting in our
                    groundbreaking crypto project! By getting whitelisted,
                    you’ll gain early access to exclusive features, updates, and
                    potential rewards. Don’t miss your chance to be part of
                    something transformative—apply now and secure your spot in
                    our journey!
                  </p>
                  <button className="outline-none border-0 bg-[#A43BE1] px-6 py-3 rounded-md mt-6">
                    Coming Soon
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whitepaper;
