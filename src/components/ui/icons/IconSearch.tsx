type IconProps = {
  size?: number;
  className?: string;
};

export default function IconSearch({ size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 448 397"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="160"
        cy="160"
        r="145"
        fill="#A7B0B7"
        fillOpacity="0.1"
        stroke="#2F4E6B"
        strokeWidth="30"
      />
      <line
        x1="278.28"
        y1="259.215"
        x2="438.28"
        y2="385.215"
        stroke="#2F4E6B"
        strokeWidth="30"
      />
    </svg>
  );
}
