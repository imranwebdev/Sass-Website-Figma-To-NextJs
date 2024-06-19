import Image from "next/image";
import Heading from "./Heading";
import Text from "./Text";
import { cardData } from "@/app/_data/data";

export default function Card() {
  return (
    <>
      {cardData.map((card) => (
        <div className="cardDetails w-[280px] md:w-64 lg:w-72" key={card.id}>
          <Image
            src={card.img}
            alt="card image"
            width={280}
            height={0}
            className="md:w-64 lg:w-72 h-auto mb-5 rounded-lg"
          />
          <Heading className="pb-5">{card.heading}</Heading>
          <Text>{card.text}</Text>
        </div>
      ))}
    </>
  );
}
