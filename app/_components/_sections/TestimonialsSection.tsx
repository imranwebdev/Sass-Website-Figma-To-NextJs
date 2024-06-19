"use client";
import Image from "next/image";
import Heading from "../_ui/Heading";
import Text from "../_ui/Text";
import { FiDatabase } from "react-icons/fi";
export default function TestimonialsSection() {
  return (
    <div className="testimonialSection bg-[#161C28] flex flex-col md:flex-row items-center justify-between gap-10 lg:flex-row mt-28  lg:py-32  pt-20 px-6 py-12 lg:px-20  ">
      <div className="leftColumn md:w-1/2">
        <Heading
          className="text-3xl lg:text-4xl pb-5 font-bold"
          textColor="text-white"
        >
          People are Saying About DoWhith
        </Heading>
        <Text className="pb-5">
          Everything you need to accept to payment and grow your money of manage
          anywhere on planet
        </Text>
        <div className="testimonial flex flex-col gap-5">
          <Text>
            I am very helped by this E-wallet application , my days are very
            easy to use this application and its very helpful in my life , even
            I can pay a short time 😍
          </Text>
          <Text>_ Aria Zinanrio</Text>
          <div className="iamges flex items-center gap-3">
            {Array.from({ length: 5 }, (_, i) => (
              <Image
                src={`/clientImages/img${i + 1}.png`}
                alt="review"
                width={50}
                height={50}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="rightColumn text-center bg-slate-800 md:w-2/5 p-10 rounded-lg">
        <form className="text-white capitalize flex flex-col items-start justify-center gap-3">
          <FiDatabase className="text-orange mx-auto" size={32} />
          <Heading className="text-xl text-white mx-auto">
            Get Started
          </Heading>

          <label htmlFor="email">Email</label>
          <input
            placeholder="enter your email"
            id="email"
            className="py-2 px-4 rounded-lg w-full"
            required
          />

          <label htmlFor="message">Message</label>
          <input
            placeholder="enter your message"
            id="message"
            className="py-2 px-4 rounded-lg w-full"
            required
          />
          <button className="w-full mt-1 bg-orange p-2 rounded-lg font-semibold text-sm border-2 border-transparent hover:border-2 hover:border-white h hover:bg-transparent">
            Request Demo
          </button>
        </form>
      </div>
    </div>
  );
}
