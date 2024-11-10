"use client";
import Image from "next/image";
import { FunctionComponent, useEffect, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";

import title from "../../../../public/home/faq/title.png";

const Faq: FunctionComponent = () => {
  const data = {
    1: {
      question: "What is RULET.GAMES and $RULET?",
      answer:
        "RULET.GAMES is a Web 3 fantasy aggregator gaming platform and crypto wallet incorporating decentralized blockchain technology primed to disrupt the entire gaming industry with a transparent, secured, and provably fair crypto-licensed platform. The $RULET is the cross-functional token that empowers the RULET.GAMES ecosystem and offers a variety of benefits and use cases:",
    },
    2: {
      question: "Why should I choose RULET.GAMES?",
      answer:
        "RULET.GAMES stands out as a platform committed to providing experiences that transcend expectations and amplify enjoyment. The RULET.GAMES ecosystem is your one-stop platform for decentralized gaming, protecting, and growing your digital assets. With over 250+ games, live support, coded gaming logic for fair gameplay, instant funds withdrawal, and supports fiat & crypto deposits, there’s no shortage of thrilling options.",
    },
    3: {
      question: "How can I buy discounted $RULET tokens?",
      answer:
        "You can purchase discounted $RULET tokens only during the presale, where a limited number of tokens are sold at a lower price to people who want to get involved early. To purchase RULET.GAMES tokens (RULET), you can follow the designated process on our platform using the supported cryptocurrencies or fiat currency. The discounted tokens will be released through a small vesting period to ensure price stability and growth of $RULET tokens.",
    },
    4: {
      question: "What can I expect in the future for RULET.GAMES?",
      answer:
        "At RULET.GAMES, we continuously work on enhancing the platform and introducing new features to enrich your experience. We are dedicated to staying at the forefront of blockchain technology advancements, ensuring that our users always have access to the latest innovations and opportunities within the fantasy gaming industry.",
    },
    5: {
      question: "Does the $RULET token have a vesting plan?",
      answer: "Yes, please refer to our vesting plan below.",
    },
  };
  const newData = {
    ...data,
  };
  const [FAQ, setFAQ] = useState(0);

  const updateFaq = () => {
    if (window.location.pathname === "how-to-buy") {
      setFAQ(1);
    } else {
      setFAQ(0);
    }
  };
  useEffect(() => {
    updateFaq();
  }, []);
  return (
    <>
      <div className="w-full flex justify-center mt-10">
        <div className="container flex flex-col items-center faq-container">
          <Image src={title} alt="faq" width={200} />
          <p className="text-center max-w-[850px] mt-4 px-0 text-[#C9C4BD]">
            The frequently asked questions (FAQ) section aims to provide answers
            to common queries about RULET.GAMES and its services. If you have
            any questions that are not addressed here, please do not hesitate to
            reach out to our support team via the contact us.
          </p>
          <div className="card w-full">
            {Object.values(FAQ ? data : newData).map((item, index) => {
              return (
                <details key={index} className="details">
                  <summary className="summary">
                    <p className="font-bold">{item.question}</p>
                    <IoAddCircleOutline className="hidden lg:block" />
                  </summary>
                  <div className="answer text-[#C9C4BD]">
                    <span className="block">{item.answer}</span>
                    {index === 0 ? (
                      <div className="mt-4 block">
                        <ul>
                          <li>
                            Use as the main payment method for the RULET.GAMES
                            Ecosystem.
                          </li>
                          <li>Earn Passive Income for holding $RULET.</li>
                          <li>Receive monthly bonuses and free games.</li>
                          <li>Participate in our affiliate reward system.</li>
                          <li>Plus, many more exciting features.</li>
                        </ul>
                      </div>
                    ) : (
                      ""
                    )}
                    {index === 4 ? (
                      <div className="mt-4 overflow-x-scroll md:overflow-auto">
                        <div className="faq-grid spl">
                          <p>Category</p>
                          <p>% TGE Release</p>
                          {/* <p>Cliff</p> */}
                          <p>Vesting</p>
                          <p>Vesting Type</p>
                        </div>
                        <div className="faq-grid mt-4">
                          <div className="w-full border-r border-solid border-[#FFF]">
                            <p>Angel Round</p>
                            <p>Private Round</p>
                            <p>Presale</p>
                          </div>
                          <div className="w-full border-r border-solid border-[#FFF]">
                            <p>25%</p>
                            <p>25%</p>
                            <p>25%</p>
                          </div>
                          {/* <div className='w-full border-r border-solid border-[#FFF]'>
                        <p>2 months</p>
                        <p>2 months</p>
                        <p>1 month</p>
                      </div> */}
                          <div className="w-full border-r border-solid border-[#FFF]">
                            <p>3 months</p>
                            <p>3 months</p>
                            <p>3 months</p>
                          </div>
                          <div>
                            <p>Monthly</p>
                            <p>Monthly</p>
                            <p>Daily with Claims</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
