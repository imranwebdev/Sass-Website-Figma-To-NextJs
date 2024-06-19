import { ReactNode } from "react";
import { inter } from "../_ui/fonts";

export default function Text({
  children,
  textColor = "text-gray-500",
  size = 16,
  className,
}: {
  children: ReactNode;
  className?: string;
  textColor?: string;
  size?: number;
}) {
  return (
    <p
      className={` ${inter.className} ${textColor} antialiased ${className}`}
      style={{ fontSize: `${size}px` }}
    >
      {children}
    </p>
  );
}
