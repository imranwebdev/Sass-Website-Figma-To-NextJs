interface CurvyLineProps {
  height?: number;
  width?: number;
  className?: string;
}
export const CurvyLine = ({
  width = 200,
  height = 34,
  className,
}: CurvyLineProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 487 34"
    fill="none"
    className={`${className}`}
  >
    <path
      d="M4 30C73.6307 10.3798 266.914 -17.0885 483 30"
      stroke="#F96C3B"
      strokeWidth="8"
      strokeLinecap="round"
    />
  </svg>
);
