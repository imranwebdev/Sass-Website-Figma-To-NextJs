import React, { ReactNode } from "react";

interface MiniComponentCard {
  text?: string;
  textColor?: string;
  heading: string;
  icon: ReactNode;
  className?: string;
  headingStyle?: string;
}

const MiniComponentCard: React.FC<MiniComponentCard> = ({
  text,
  textColor = "text-grayText",
  heading,
  headingStyle = " text-xl",
  icon,
  className,
}) => (
  <div
    className={`card flex items-center gap-3 px-2 py-1 rounded-lg w-auto ${className}`}
  >
    {icon}
    <div className="content">
      <h3 className={` font-bold ${headingStyle}`}>{heading}</h3>
      <span className={`text-sm  ${textColor}`}>{text}</span>
    </div>
  </div>
);

export default MiniComponentCard;
