import Heading from "../_ui/Heading";
import Text from "../_ui/Text";
import Image from "next/image";
import { IoStatsChart, IoImageOutline } from "react-icons/io5";
import { CiCircleCheck } from "react-icons/ci";
import MiniComponentCard from "../_ui/miniComponetCard";
import { listData } from "@/app/_data/data";

export default function BenefitSection() {
  return (
    <div className="benefitSection px-8 lg:px-20 flex flex-col pb-16 md:flex-row lg:flex-row items-start justify-around gap-5 mt-10">
      <div className="left-one">
        <Heading className="text-4xl md:text-4xl lg:text-5xl font-bold">
          What Benefit Will You Get
        </Heading>
        <ul className="list mt-10">
          {listData.map((list, index) => (
            <li key={index} className="flex items-center gap-2 my-3">
              <span className="bg-orange text-white rounded-full text-center p-2">
                {list.icon}
              </span>
              <Text
                className="text-2xl font-semibold"
                textColor="text-darkHeading"
              >
                {list.text}
              </Text>
            </li>
          ))}
        </ul>
      </div>
      <div className="right-one">
        <div className="img relative w-4/5 mx-auto">
          <Image
            src="/laptop.png"
            width={450}
            height={640}
            alt="laptop"
            className="h-96 object-cover filter grayscale contrast-100 rounded-lg"
          />
          <MiniComponentCard
            icon={<CiCircleCheck color="#F96C3B" size={22} />}
            text="Money Transfer Successful"
            heading=""
            textColor="text-darkHeading"
            className="border w-3/4 absolute bottom-0 transform translate-y-5 -translate-x-1/4 py-3 px-4 bg-white shadow-md"
          />
          <MiniComponentCard
            icon={<IoStatsChart color="#F96C3B" size={22} />}
            text="$245.00"
            heading="Total Income"
            headingStyle="text-sm font-normal"
            textColor="text-darkHeading font-bold"
            className="border flex-row-reverse w-3/4 absolute top-0 right-0 transform -translate-y-5 translate-x-1/4 py-3 px-4 bg-white shadow-md"
          />
          <IoImageOutline
            color="#fff"
            size={26}
            className="absolute top-1/2 left-0 bg-orange w-10 h-10 shrink-0 px-2 rounded-lg transform -translate-y-1/2 -translate-x-1/2 -rotate-12"
          />
        </div>
      </div>
    </div>
  );
}
