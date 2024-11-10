import { FunctionComponent } from "react";
import styles from "./download.module.scss";

import downloadApp from "./../../../../public/home/download/downloadApp.png";
import title from "./../../../../public/home/download/title.png";
import ios from "../../../../public/home/download/ios.png";
import playstore from "../../../../public/home/download/playstore.png";
import Image from "next/image";

const Download: FunctionComponent = () => {
  return (
    <>
      <div
        className={`${styles.downloadSection} w-full flex justify-center relative`}
      >
        <div className={`${styles.overlay}`}></div>
        <div className="container">
          <div className="flex flex-row flex-wrap-reverse justify-between relative z-10">
            <div className="basis-2/2 lg:basis-1/2 w-full lg:pe-3">
              <Image src={downloadApp} alt="download-img" objectFit="contain" />
            </div>
            <div className="basis-2/2 lg:basis-1/2 w-full lg:ps-3 flex items-center">
              <div className="w-full">
                <Image src={title} alt="Download App" width={310} />
                <div className="px-3 md:px-0">
                  <p className="mt-3">
                    Download the Rich Pug Gaming App🤑 and dive into exciting
                    adventures! Enjoy dice, cards, roulette, and more—anytime,
                    anywhere. With exclusive rewards,💸 an easy-to-use
                    interface, and secure transactions, the fun never stops.
                    Join now and start winning with 🎰 the Pug Paradise !
                  </p>
                  <div className="flex mt-6 w-full">
                    <Image
                      src={ios}
                      alt="ios"
                      width={130}
                      className="my-3 me-2"
                    />
                    <Image
                      src={playstore}
                      alt="playstore"
                      width={130}
                      className="my-3 ms-2"
                    />
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

export default Download;
