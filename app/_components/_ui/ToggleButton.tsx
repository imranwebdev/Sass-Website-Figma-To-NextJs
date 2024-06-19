"use client";
import { ToggleButtonProps } from "@/app/_lib/defination";

export default function ToggleButton({ isOpen, setIsOpen }: ToggleButtonProps) {
  return (
    <div
      className="frame relative w-8 h-10 flex items-center justify-center lg:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`menu-icon relative w-20 h-12 cursor-pointer ${
          isOpen ? "active" : " "
        }`}
      >
        <div className="line-1 absolute w-full h-[1px] bg-black rounded transition-all duration-300 ease-in-out"></div>
        <div className="line-2 absolute w-full h-[1px] bg-black rounded transition-all duration-300 ease-in-out mt-3"></div>
        <div className="line-3 absolute w-full h-[1px] bg-black rounded transition-all duration-300 ease-in-out mt-6"></div>
      </div>
    </div>
  );
}
