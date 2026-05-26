interface BathIconProps {
  size?: number;
  className?: string;
  stroke?: string;
}

export default function BathIcon({
  size = 20,
  className,
  stroke = "currentColor",
}: BathIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M5.20199 17.4521L4.36865 18.2855M15.202 17.4521L16.0353 18.2855"
        stroke={stroke}
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M2.7019 10.7856V11.619C2.7019 14.3688 2.7019 15.7437 3.55618 16.5981C4.41045 17.4523 5.78538 17.4523 8.53524 17.4523H11.8686C14.6184 17.4523 15.9933 17.4523 16.8477 16.5981C17.7019 15.7437 17.7019 14.3688 17.7019 11.619V10.7856"
        stroke={stroke}
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.86865 10.7856H18.5353"
        stroke={stroke}
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M3.53516 10.7856V5.38848C3.53516 4.22712 4.47663 3.28564 5.63799 3.28564C6.56987 3.28564 7.39061 3.89896 7.65465 4.79265L7.70182 4.95231"
        stroke={stroke}
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M6.86865 5.78581L8.95199 4.11914"
        stroke={stroke}
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
