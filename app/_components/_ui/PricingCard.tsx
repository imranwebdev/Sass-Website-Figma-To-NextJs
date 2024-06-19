"use client";
import React, { useState } from "react";
import Heading from "./Heading";
import Text from "./Text";
import Button from "./Button";
import { MdDone } from "react-icons/md";
import { inter } from "./fonts";
import { PricingCardDetail } from "@/app/_lib/defination";
const PricingCard: React.FC = () => {
  const [isYearly, setIsYearly] = useState<boolean>(false);
  const pricingCardDetails: PricingCardDetail[] = [
    {
      category: "Free",
      description: "Have a go and test your superpowers",
      price: 0,
      discount: null,
      feature: [
        "2 users",
        "2 files",
        "Public share & comments",
        "Chat support",
        "New income apps",
      ],
      btnText: "Sign up for free",
    },
    {
      category: "Pro",
      description: "Experiment the power of infinite possibilities",
      price: isYearly ? 80 : 8,
      discount: isYearly ? "Save $50 a year" : null,
      feature: [
        "4 users",
        "All apps",
        "Unlimited editable exports",
        "Folders and collaboration",
        "All incoming apps",
      ],
      btnText: "Go to Pro",
    },
    {
      category: "Business",
      description: "Unveil new superpowers and join the Design League",
      price: isYearly ? 160 : 16,
      discount: null,
      feature: [
        "All the features of Pro plan",
        "Account success manager",
        "Single Sign-On (SSO)",
        "Co-conception program",
        "Collaboration-Soon",
      ],
      btnText: "Go to Pro",
    },
  ];

  return (
    <div className="px-2">
      <div className="subscriptionToggle flex items-center justify-center">
        <div className="group-btn px-5  flex items-center justify-center mb-6 gap-5 shadow-md py-3  bg-white max-w-50 border rounded-lg">
          <Button
            onClick={() => setIsYearly(false)}
            className={`px-5 py-3 font-semibold`}
            textColor={
              !isYearly ? "bg-orange text-white" : "bg-white text-darkHeading"
            }
          >
            Monthly
          </Button>
          <Button
            onClick={() => setIsYearly(true)}
            className={`px-5 py-3 font-semibold`}
            textColor={
              isYearly ? "bg-orange text-white" : "bg-white text-darkHeading"
            }
          >
            Yearly
          </Button>
        </div>
      </div>

      <div className="pricingCards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {pricingCardDetails.map((card, index) => {
          const whiteText = index === 1 ? "text-white" : "";
          return (
            <div
              key={index}
              className={`pricingCard border p-6 rounded-lg shadow-md ${
                index === 1 ? "bg-orange transform scale-105" : ""
              }`}
            >
              <div className="top text-center flex flex-col gap-2">
                <Heading className="text-3xl font-bold" textColor={whiteText}>
                  {card.category}
                </Heading>
                <Text className="text-2xl" textColor={whiteText}>
                  {card.description}
                </Text>
                <Text
                  className="font-bold"
                  size={36}
                  textColor={`text-darkHeading ${whiteText}`}
                >
                  <sup>
                    <small>$</small>
                  </sup>
                  {card.price}
                </Text>
                {card.discount && (
                  <Text className="text-green-500 pb-6" textColor={whiteText}>
                    {card.discount}
                  </Text>
                )}
              </div>
              <div className="innerCard flex flex-col gap-5 mx-auto bg-[#f9fafb] p-5 rounded-lg">
                <ul className="mb-4">
                  {card.feature.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`flex items-center gap-2 my-3 font-semibold ${inter.className} antialiased`}
                    >
                      <span className="bg-orange text-white rounded-full text-center p-1">
                        <MdDone size={16} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`py-4 font-semibold ${
                    index !== 1
                      ? "bg-white text-orange shadow-md border border-transparent hover:border hover:border-orange"
                      : "bg-orange text-white hover:bg-white  border-transparent hover:text-orange  hover:border hover:border-orange"
                  }`}
                  textColor={whiteText}
                >
                  {card.btnText}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingCard;
