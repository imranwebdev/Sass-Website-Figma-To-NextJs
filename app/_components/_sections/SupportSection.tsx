import Heading from "../_ui/Heading";
import Text from "../_ui/Text";
import { FaStar } from "react-icons/fa";
import MiniComponentCard from "../_ui/miniComponetCard";
import { IoAnalytics } from "react-icons/io5";
import { AiOutlinePieChart } from "react-icons/ai";
import { BsCommand } from "react-icons/bs";

export default function SupportSection() {
  return (
    <div className="supportSection flex flex-col md:flex-row lg:flex-row gap-8 py-10 px-6 lg:px-20 mt-10 lg:mt-20">
      <div className="left-one flex flex-col gap-8 md:gap-10 items-start">
        <SupportSectionContent />
        <ReviewSection />
      </div>
      <div className="right-one flex flex-col gap-6">
        <MiniComponentCard
          icon={
            <IoAnalytics
              color="#F96C3B"
              className="text-7xl md:text-6xl lg:text-4xl h-8 w-8 shrink-0"
            />
          }
          heading="Publishing"
          text="Plan, collaborate, and publish your content that drives meaningful engagement and growth for your brand"
        />
        <MiniComponentCard
          icon={
            <AiOutlinePieChart
              color="#F96C3B"
              className="text-3xl md:text-4xl lg:text-4xl h-8 w-8 shrink-0"
            />
          }
          heading="Analytics"
          text="Analyze your performance and create gorgeous reports"
        />
        <MiniComponentCard
          icon={
            <BsCommand
              color="#F96C3B"
              className="text-3xl md:text-4xl lg:text-4xl h-8 w-8 shrink-0"
            />
          }
          heading="Engagement"
          text="Quickly navigate and engage with your audience"
        />
      </div>
    </div>
  );
}

function SupportSectionContent() {
  return (
    <>
      <Heading className="font-bold text-4xl md:text-4xl lg:text-5xl text-center lg:text-left">
        How we support our partners all over the world
      </Heading>
      <Text>
        SaaS has become a common delivery model for many business applications,
        including office software, messaging software, payroll processing
        software, DBMS software, management software
      </Text>
    </>
  );
}

function ReviewSection() {
  return (
    <div className="reviewSection flex gap-6 md:gap-7 lg:gap-12 items-center justify-evenly">
      <StarReview subjectText={"Databricks"} rating={4.9} starClassName={""} />
      <StarReview
        subjectText={"Chainalysis"}
        rating={4.8}
        starClassName={"text-gray-400"}
      />
    </div>
  );
}

function StarReview({
  subjectText,
  rating,
  starClassName = "",
}: {
  subjectText?: string;
  rating: number;
  starClassName?: string;
}) {
  return (
    <div className="ReviewBox flex flex-col gap-2">
      <div className={`stars flex items-center gap-1 ${starClassName}`}>
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className="text-[#FFC728]">
            <FaStar size={22} />
          </span>
        ))}
      </div>
      <span className="text-lg">
        <b>{rating} </b>/ 5 rating
      </span>
      {subjectText && (
        <h3 className="text-xl text-gray-400 font-bold">{subjectText}</h3>
      )}
    </div>
  );
}
