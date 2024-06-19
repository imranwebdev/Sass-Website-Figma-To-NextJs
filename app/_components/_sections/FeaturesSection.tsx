import Button from "../_ui/Button";
import Heading from "../_ui/Heading";
import Text from "../_ui/Text";
import Card from "../_ui/card";

export default function FeaturesSection() {
  return (
    <div className="ourFeatureSection p-6 md:p-8 lg:p-20  mt-10">
      <div className=" top-content flex flex-col md:flex-row lg:flex-row gap-7 items-center justify-evenly">
        <Heading className="text-4xl font-bold md:text-4xl lg:text-5xl">
          Our Features you cab get
        </Heading>
        <Text>
          We offer a variety of interesting features that you can help increase
          yor productivity at work and manage your projrct esaly
        </Text>
        <Button
          style={{ borderRadius: "40px" }}
          className=" py-4 shrink-0 px-5 border-2 border-transparent hover:border-darkHeading hover:bg-transparent hover:text-darkHeading transition duration-300 ease-in-out"
        >
          Get Started
        </Button>{" "}
      </div>
      <div className="cardSection flex flex-col md:flex-row lg:flex-row gap-10 py-5 mt-12 lg:mt-20 items-center justify-between mx-auto">
        <Card />
      </div>
    </div>
  );
}
