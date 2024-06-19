"use client";
import { heroSectionData } from "@/app/_data/data";
import Image from "next/image";
import Button from "../_ui/Button";
import { FaRegCirclePlay } from "react-icons/fa6";
import { BsDatabase } from "react-icons/bs";
import { CurvyLine } from "@/public/svg/svg";
import { inter } from "../_ui/fonts";
import manImage from "@/public/heroImages/man.jpg";
import cardImage from "@/public/heroImages/card.png";
import { FiMessageSquare } from "react-icons/fi";
import { IoStatsChart } from "react-icons/io5";
import MiniCard from "../_ui/miniCard";
import BrandSection from "./BrandSection";
import { ContentProps } from "@/app/_lib/defination";
import React, { useState } from "react";
import VideoModal from "../_ui/VideoModal";

const HeroSection: React.FC = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  const handleOpenModal = () => {
    setShowVideoModal(true);
  };

  const handleCloseModal = () => {
    setShowVideoModal(false);
  };

  return (
    <>
      <div className="heroSection w-full  flex flex-col md:flex-row lg:flex-row gap-10 p-5 lg:p-20 items-start justify-around ">
        <div className="contentBox flex flex-col gap-5 md:px-2 lg:px-5">
          {heroSectionData.map((data, index) => (
            <Content
              key={index}
              heading={data.heading}
              description={data.description}
            />
          ))}

          <ButtonGroup onViewDemoClick={handleOpenModal} />
        </div>
        <div className="assets">
          <div className="assetBox px-5 lg:px-0 md:px-0">
            <div className="imgBox relative ">
              <Image src={manImage} className="w-[70%]  mx-auto" alt="man" />
              <Image
                src={cardImage}
                width={130}
                className="absolute right-0 bottom-0 -mr-3 md:w-28 lg:w-36 "
                alt="credite card "
              />
              <MiniCard
                text={"Enter Amount"}
                amount={450}
                iconBtn={
                  <Button style={{ borderRadius: "40px" }} className="px-2">
                    <span className="text-sm">send</span>
                  </Button>
                }
                className={" absolute top-20"}
              />
              <MiniCard
                text={"Total Income"}
                amount={245}
                iconBtn={
                  <Button style={{ borderRadius: "40px" }} className="px-2">
                    <IoStatsChart />
                  </Button>
                }
                className={" absolute bottom-10"}
              />
              <Button
                className="w-10 h-10 absolute top-10 right-0 lg:right-[10%] rotate-12"
                bgColor="bg-[#FBC75E]"
              >
                <BsDatabase />
              </Button>

              <Button className="w-10 h-10 absolute -bottom-6 right-20 lg:right-[30%] transform rotate-12">
                <FiMessageSquare />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <BrandSection />
      <VideoModal show={showVideoModal} onClose={handleCloseModal} />
    </>
  );
};

// content component
const Content: React.FC<ContentProps> = ({ heading, description }) => (
  <div className="content text-center md:text-left flex-col flex gap-5 ">
    <h1
      className={`text-4xl md:text-5xl lg:text-7xl font-bold ${inter.className} antialiased`}
    >
      {heading}
    </h1>
    <CurvyLine
      className="mx-auto md:mx-0 lg:mx-0 md:w-[380px] lg:w-[450px]"
      width={280}
    />
    <p className="text-black text-md  font-medium lg:w-3/4">{description}</p>
  </div>
);

// btn group component
const ButtonGroup: React.FC<{ onViewDemoClick: () => void }> = ({
  onViewDemoClick,
}) => (
  <div className="btns flex items-center justify-center md:justify-start gap-4 pt-2 lg:pt-5">
    <Button
      style={{ borderRadius: "40px" }}
      className="py-4 px-5 border-2 border-transparent hover:border-darkHeading hover:bg-transparent hover:text-darkHeading transition duration-300 ease-in-out"
    >
      Try free trial
    </Button>

    <Button
      bgColor="bg-transparent"
      textColor="darkHeading"
      className="flex items-center gap-2"
      onClick={onViewDemoClick}
    >
      <FaRegCirclePlay size={26} />
      View Demo
    </Button>
  </div>
);

export default HeroSection;
