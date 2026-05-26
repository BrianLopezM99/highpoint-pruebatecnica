import Image from "next/image";

interface AmenityIconProps {
  src: string;
  className?: string;
}

export default function AmenityIcon({ src, className }: AmenityIconProps) {
  return (
    <Image
      src={src}
      width={40}
      height={40}
      alt=""
      aria-hidden="true"
      className={className}
    />
  );
}
