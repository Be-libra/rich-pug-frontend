"use client";
import Image from "next/image";
import React from "react";
import SwiperCore, {
  Autoplay,
  EffectCreative,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import "swiper/css/effect-creative";

import RoadmapSlider from "./RoadmapSlider";
import roadMap from "../../../../public/home/roadmap/roadmap.png";
import check from "../../../../public/home/roadmap/check.png";

const Roadmap = () => {
  SwiperCore.use([
    Autoplay,
    EffectCreative,
    EffectFade,
    Grid,
    Navigation,
    Pagination,
  ]);

  const roadmapStep = (
    mySwiper: SwiperType,
    step: Element,
    widthParts: number
  ) => {
    const breakpoint = mySwiper.width;
    let viewBox;
    // convert the switch case

    switch (breakpoint) {
      case 1400:
        viewBox = 4;
        break;
      case 1200:
        viewBox = 3;
        break;
      case 1040:
        viewBox = 4;
        break;
      case 768:
        viewBox = 1;
        break;
      case 425:
        viewBox = 1;
        break;
      case 378:
        viewBox = 1;
        break;

      default:
        viewBox = 1;
    }

    step.setAttribute(
      "style",
      `width: ${(mySwiper.activeIndex + viewBox) * widthParts}%;`
    );
  };

  const roadmapData = [
    {
      phase: "2023",
      title: "Q2",
      active: false,
      targets: {
        1: "Ideation Phase",
        2: "Team Building",
        3: "Whitepaper Creation",
        4: "Initial Fundraising",
        5: "Website Development",
        6: "Successful Angel Round",
      },
      completed: true,
      current: false,
    },
    {
      phase: "2023",
      title: "Q3",
      active: false,
      targets: {
        1: "Website Live",
        2: "Whitepaper Release",
        3: "Smart Contract Deployment",
        4: "Establish Social Media Handles",
        5: "Onboarding Advisors",
      },
      completed: true,
      current: false,
    },
    {
      phase: "2023",
      title: "Q4",
      active: true,
      targets: {
        1: "Official Press Release",
        2: "Strategic Partnership Acquisition",
        3: "Partner Up with Softswiss",
        4: "Smart contract Audit",
        5: "Pre Listing CMC & CG Listing",
        // 10: 'Community Events',
      },
      completed: false,
      current: true,
    },
    {
      phase: "2024",
      title: "Q1",
      active: false,
      targets: {
        1: "Fantasy Game Platform (Beta)",
        2: "Token sale on Launchpad",
        3: "Exchanges Listing",
        4: "$RULET Integration on Gaming Platform",
        5: "Affiliate Rewards Live",
      },
      completed: false,
      current: false,
    },
    {
      phase: "2024",
      title: "Q2",
      active: false,
      targets: {
        1: "Fantasy Game Platform (Final Release)",
        2: "Sponsorships & Collaborations",
        3: "Platform Upgradation",
        4: "Initiate Buyback and Burning",
        5: "Litepaper 2.0",
      },
      completed: false,
      current: false,
    },
  ];

  const roadProps = {
    loop: false,
    speed: 500,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: 4,
    spaceBetween: 40,
    direction: "horizontal",
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      375: {
        slidesPerView: 1,
      },
      425: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1040: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <div className="roadmap-container mt-5">
      <div className="w-full flex justify-center relative z-10">
        <Image src={roadMap} alt="title" width={310} />
      </div>
      <RoadmapSlider />
      <div className="slider_holder w-screen hidden">
        <Swiper
          className="swiper-container"
          loop={roadProps.loop}
          speed={roadProps.speed}
          autoplay={roadProps.autoplay}
          slidesPerView={roadProps.slidesPerView}
          spaceBetween={roadProps.spaceBetween}
          direction="horizontal"
          breakpoints={roadProps.breakpoints}
          onSwiper={(swiper: SwiperType) => {
            const sliderCount = swiper.params.loop
              ? swiper.slides.length - 2
              : swiper.slides.length;

            const stepWidth = 100 / sliderCount;
            const step = document.querySelector(".fn_cs_roadmap .step_in");
            if (step) {
              roadmapStep(swiper, step, stepWidth);
            }
          }}
          onSlideChange={(swiper: SwiperType) => {
            const sliderCount = swiper.params.loop
              ? swiper.slides.length - 2
              : swiper.slides.length;
            const stepWidth = 100 / sliderCount;
            const step = document.querySelector(".fn_cs_roadmap .step_in");
            if (step) {
              roadmapStep(swiper, step, stepWidth);
            }
          }}
        >
          <div className="swiper-wrapper ">
            {roadmapData.map((item, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <div className="item  bg-transparent">
                  {/* {item.active && (
                    <p className='icon text current'>Current Phase</p>
                  )} */}
                  <span className="icon text">
                    {item.title} {item.phase}
                  </span>
                  <span className="icon"></span>
                  {/* <span className='phase text-white'>{item.phase}</span> */}
                  <div className="item_in ">
                    {/* <h3 className='title text-xl md:text-2xl'>{item.title}</h3> */}
                    <ul className="list-disc">
                      {Object.values(item.targets).map((target, index) => {
                        return (
                          <li
                            className="desc my-3 text-lg opacity-80 md:text-xl"
                            key={index}
                          >
                            {target}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="flex-container w-full">
                    {item.completed && (
                      <div className="relative h-8 w-12">
                        <Image src={check} alt="check" fill />
                      </div>
                    )}
                  </div>
                  <div className="flex-container w-full">
                    {item.current && (
                      <p className="rounded-full bg-[#dd1b50] px-2 py-1 text-sm">
                        Current Phase
                      </p>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Roadmap;
