import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  bgColor?: string;
  className?: string;
  textColor?: string;
  isPrimary?: boolean;
}

export default function Button({
  children,
  className = "",
  bgColor = "bg-orange",
  textColor = "text-white",
  isPrimary,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "rounded-xl px-3 py-2 capitalize",
        textColor,
        bgColor,
        className
      )}
    >
      {children}
    </button>
  );
}
