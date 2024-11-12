"use client";
import Image from "next/image";
import { FunctionComponent, useEffect, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";

import title from "../../../../public/home/faq/title.png";

const Faq: FunctionComponent = () => {
  const data = {
    1: {
      question: "Why should I choose Rich Pug?",
      answer:
        "Rich Pug stands out as a platform committed to provide experience that transcend expectations and amplify enjoyment. This is your one-stop platform for trendy fantasy games and earn multiple incomes. There's no shortage of thrilling options with in-house games, live support, coded gaming logic for fair gameplay, instant funds withdrawal, and supports multiple crypto deposits.",
    },
    2: {
      question: "How can I buy discounted $PUG tokens?",
      answer:
        "You can purchase discounted tokens only during the presale, whitelist sale (1 $PUG = $0.015) and launchpads (1 $PUG = $0.020) where a limited number of tokens are sold at a lower price. To participate in our presale, follow our social media channels for all the updates. The discounted tokens will be released through a small vesting period to ensure price stability and growth in value of $PUG tokens.",
    },
    3: {
      question: "How can I contact Rich Pug support?",
      answer:
        "If you have any questions, or concerns, or need assistance, you can contact our support team through the designated channels on our website. We have a dedicated support system in place to provide prompt and helpful responses to our users' inquiries.",
    },
    4: {
      question: "What are the benefits of participating in the $PUG presale?",
      answer:
        "Participating in our presale provides you an opportunity to acquire $PUG tokens at a lower price before they're listed on exchanges. Early supporters often have the potential for significant returns (10-100x +) if the project performs well.",
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
