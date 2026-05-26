import Image from "next/image";

export default function QuienesSomosSection() {
  return (
    <div className="flex flex-col sm:flex-row bg-white sm:min-h-[640px] lg:min-h-[760px]">
      <div className="w-full sm:w-3/5 flex items-center justify-center px-4 sm:px-12 lg:px-10 py-12 sm:py-14">
        <div className="w-full max-w-[680px] 2xl:max-w-[960px]">
          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] 2xl:text-[3.75rem] leading-none uppercase font-cities-typeface text-hp-leon-dorado tracking-[0.08em]">
            ¿Quiénes Somos?
          </h2>
          <p className="font-montserrat font-normal text-lg 2xl:text-xl leading-[1.6] text-gray-600 mt-7 lg:mt-9 2xl:mt-10">
            Pertenecemos a la destacada familia de proyectos de OR-B, una
            desarrolladora con un historial de éxitos que incluye Mítikah, The
            St. Regis Mexico City y muchos más. Nuestra dedicación a los detalles,
            calidad y experiencia profesional, nos ha permitido colaborar con
            inversores de renombre como Prudential Real Estate Investors y LaSalle
            Investors México, forjando alianzas con múltiples grupos
            institucionales desde 2010.
          </p>
        </div>
      </div>

      <div className="relative w-full sm:w-2/5 bg-hp-leon-azul min-h-[360px] sm:min-h-0 self-stretch">
        <Image
          src="/images/queretaro/quienesomos.png"
          alt="High Point Querétaro - Live Work and Play"
          fill
          sizes="(max-width: 640px) 100vw, 40vw"
          className="object-contain p-5 sm:p-6 lg:p-8"
        />
      </div>
    </div>
  );
}
