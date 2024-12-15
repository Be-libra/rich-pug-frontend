import { FunctionComponent } from "react";
import styles from "./about.module.scss";

import title from "../../../../public/home/aboutUs/title.png";
import character from "../../../../public/home/aboutUs/character.png";
import mobileCharacter from "../../../../public/home/aboutUs/mobileCharacter.png";
import shadow from "../../../../public/home/aboutUs/shadow.png";
import Image from "next/image";

const AboutUs: FunctionComponent = () => {
  return (
    <>
      <div
        className="mt-20 w-full flex justify-center overflow-x-clip"
        id="about-us"
      >
        <div className="container flex justify-between items-center flex-wrap flex-row mx-3">
          <div className="basis-2/2 lg:basis-1/2 w-full">
            <div className="w-full my-3 px-3 xl:px-0 lg:pe-3">
              <Image
                src={title}
                alt="about us"
                width={200}
                className="mx-auto md:mx-0"
              />
              <p className="mt-3 text-center md:text-start">
                In the shiny city of Glitzville, there lived a pug named Rich
                Pug😊. He was the boss🐶 of the biggest casino, Pug&apos;s
                Paradise🥰. He had lots of money, fancy clothes, and a perfect
                life. But💸 one day💸, he noticed many people in the city were
                poor😷 and struggling. This made him feel sad.
                <p className="mt-5">
                  Rich Pug had an idea.💡 “What if everyone💡 had a chance to
                  win💰, not just the rich?” he thought.🤑 So, he created the
                  Rich Pug Ecosystem.🤑 Soon, people from all over started
                  becoming a part of this ecosystem. Rich or poor,💸 everyone
                  was part of the same community, working and growing
                  together.🤝{" "}
                </p>
                <p className="mt-5">
                  With a happy smile,😁 Rich Pug said, “A real boss isn&apos;t
                  the one who wins alone, but the one who helps others win too.”
                  And just like that 👉the Rich Pug became a symbol of
                  hope,👈 showing that life is better when everyone wins
                  together.🤝
                </p>
              </p>
            </div>
          </div>
          <div className="basis-2/2 lg:basis-1/2 w-full lg:ps-3">
            <div
              className={`w-full my-3 flex justify-center items-center relative ${styles.imageContainer}`}
            >
              <Image
                src={character}
                alt="About Us Img"
                className="hidden md:block scale-[1.15] md:scale-[1]"
              />
              <Image
                src={mobileCharacter}
                alt="About Us Img"
                className="block mt-5 md:hidden"
              />
              <div className="absolute w-[100%] h-[100%] top-0 left-[20%] md:left-[45%]">
                <Image src={shadow} alt="shadow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
