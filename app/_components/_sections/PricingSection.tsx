import React, { useState } from "react";
import Button from "../_ui/Button";
import Heading from "../_ui/Heading";
import Text from "../_ui/Text";
import PricingCard from "../_ui/PricingCard";

const PricingSection: React.FC = () => {

  return (
    <div className="pricingSection flex flex-col items-center gap-5 mt-12 px-6 md:px-20">
      <div className="top-content text-center">
        <Heading className="text-4xl lg:text-5xl font-bold capitalized pb-5">
          Choose Plan That’s Right For You
        </Heading>
        <Text className="font-semibold text-xl">
          Choose plan that works best for you, feel free to contact us
        </Text>
      </div>
     
      <PricingCard />
    </div>
  );
};

export default PricingSection;
