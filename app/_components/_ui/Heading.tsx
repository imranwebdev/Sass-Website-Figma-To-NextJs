import { ReactNode } from "react";
import { inter } from "../_ui/fonts";
export default function Heading({
  children,
  textColor = "text-darkHeading",
  className,
}: {
  children: ReactNode;
  className?: string;
  textColor?: string;
}) {
  return (
    <>
      <h1
        className={` ${inter.className} ${textColor} antialiased ${className}`}
      >
        {children}
      </h1>
    </>
  );
}
