import Image from "next/image";

export default function LiveWorkPlaySection() {
  return (
    <div className="relative w-full h-auto">
      <Image
        src="/images/queretaro/promocional.png"
        alt="Promocional"
        width={1440}
        height={580}
        className="w-full h-[580px] sm:h-auto object-cover"
      />
      <div className="absolute top-1 sm:top-12 bg-hp-leon-azul text-white p-6 max-w-[800px] w-auto">
        <h2 className="text-2xl sm:text-2xl lg:text-[3rem] mb-2 font-cities-typeface">
          LIVE, WORK &amp; PLAY
        </h2>
      </div>
    </div>
  );
}
