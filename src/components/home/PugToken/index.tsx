import Image from "next/image";
import { FunctionComponent } from "react";

import character from "../../../../public/home/pugToken/pugTokenChar.png";
import shadow from "../../../../public/home/pugToken/shadow.png";
import title from "../../../../public/home/pugToken/title.png";

const PugToken: FunctionComponent = () => {
  return (
    <>
      <div className="w-full flex justify-center mt-20 overflow-x-clip">
        <div className="container mx-3">
          <div className="w-full flex justify-between items-center flex-wrap flex-row">
            <div className="basis-2/2 lg:basis-1/2 w-full">
              <div className="w-full my-3 px-3 md:px-0 lg:pe-3">
                <Image src={title} alt="about us" width={240} className="mx-auto md:mx-0" />
                <p className="mt-3 text-center md:text-start">
                  Introducing the Rich Pug 🐶 Token (PUG), a revolutionary
                  cryptocurrency designed to enhance the gaming experience while
                  harnessing the power of meme culture. With $PUG, you can
                  unlock a world of benefits, including seamless in-game
                  transactions, exclusive rewards, daily passive income and a
                  vibrant community-driven ecosystem.🫰
                  <p className="mt-5">
                    Join us on this pawsome journey to financial success!
                    Together, let’s unleash the potential of meme coins and
                    gaming to create a brighter, richer future!
                  </p>
                  <p className="mt-5">
                    Rich Pug: Where Fun Meets Fortune! 🐶✨
                  </p>
                </p>
              </div>
            </div>
            <div className="basis-2/2 lg:basis-1/2 w-full lg:ps-3">
              <div
                className={`w-full my-3 flex justify-center items-center relative`}
              >
                <Image src={character} alt="About Us Img" className="mt-5 mt-md-0" />
                <div className="absolute w-[100%] h-[100%] top-0 left-[35%]">
                  <Image src={shadow} alt="shadow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PugToken;
