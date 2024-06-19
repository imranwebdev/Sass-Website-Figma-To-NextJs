import React, { ReactNode } from "react";

interface MiniCardProps {
  text?: string;
  amount: number;
  iconBtn: ReactNode;
  className?: string;
}

const MiniCard: React.FC<MiniCardProps> = ({
  text,
  amount,
  iconBtn,
  className,
}) => (
  <div
    className={`card flex items-center gap-3 px-2 py-1 rounded-lg border w-42 bg-white -left-5 ${className}`}
  >
    <div className="content">
      <span className="text-sm text-grayText">{text}</span>
      <h3 className="text-sm"><b>{amount.toFixed(2)}</b>$</h3>
    </div>
    {iconBtn}
  </div>
);

export default MiniCard;
