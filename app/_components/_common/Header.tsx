"use client";
import Link from "next/link";
import { inter } from "../_ui/fonts";
import Button from "../_ui/Button";
import ToggleButton from "../_ui/ToggleButton";
import { useState, useEffect } from "react";
import Logo from "../_ui/logo";
import { navlinks } from "@/app/_data/data";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Clean up the effect on component unmount
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <header className="border-b lg:border-b-0">
      <div
        className={`lg:w-[90%] z-50 mx-auto px-4 md:px-8 lg:px-10 py-4 h-20 lg:py-0 flex flex-col lg:flex-row justify-between items-start lg:items-center ${
          isOpen ? "fixed w-full bg-white" : ""
        }`}
      >
        <div className="w-full lg:w-auto flex justify-between items-center p-2 lg:p-0 lg:border-none">
          <Link href={"/"}>
            <Logo />
          </Link>
          <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <nav
          className={`fixed top-0 left-0 w-full text-black bg-white z-50 h-screen transform ${
            isOpen ? "translate-y-20 border-t" : "-translate-x-full"
          } lg:static lg:transform-none lg:bg-transparent lg:text-black lg:w-auto lg:h-auto lg:flex lg:items-center`}
        >
          <ul className="flex flex-col items-start p-4 space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
            {navlinks.map((link, index) => (
              <li key={link.id}>
                <Link
                  className={`block text-xl lg:text-base px-3 py-2 capitalize hover:text-darkHeading ${
                    inter.className
                  } antialiased ${
                    index === 0 ? "text-darkHeading" : "text-grayText"
                  }`}
                  href={link.url}
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden lg:flex items-center gap-5">
          <Button bgColor="bg-transparent" textColor="text-darkHeading">
            Sign up
          </Button>
          <Button className="border-2 border-transparent hover:border-darkHeading hover:bg-transparent hover:text-darkHeading transition duration-300 ease-in-out">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
}
