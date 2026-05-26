import Image from "next/image";
import QuienesSomosSection from "./QuienesSomosSection";
import { GOOGLE_MAPS_URL, puntosUbicacion } from "../data/ubicacion";

export default function UbicacionSection() {
  return (
    <>
    <div
      id="ubicacion"
      className="h-auto ubicacion-background text-white py-10 px-5 sm:px-16 sm:py-20 relative lg:pt-[60px] lg:pl-[60px]"
    >
      <div className="flex flex-col gap-2 pb-5 sm:pb-12 lg:max-w-[720px]">
        <div className="w-full text-hp-leon-dorado">
          <h2 className="text-3xl sm:text-[2.375rem] lg:text-[3rem] leading-none uppercase font-cities-typeface text-left text-white">
            Ubicación
          </h2>
        </div>
        <h3 className="font-montserrat text-base font-[400] capitalize">
          Centro Sur 76090 Santiago De Querétaro, Querétaro
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row full justify-between items-center font-montserrat">
        <div className="w-full lg:w-[40%]">
          <div className="flex flex-col gap-5">
            <div>
              <ol className="list-decimal list-inside font-base font-normal space-y-4 space-x-2.5">
                {puntosUbicacion.map((punto) => (
                  <li key={punto}>{punto}</li>
                ))}
              </ol>
            </div>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center sm:justify-start my-4 cursor-pointer"
            >
              <button
                type="button"
                className="bg-hp-leon-dorado text-white px-4 py-2 cursor-pointer"
              >
                Ver en Google maps
              </button>
            </a>
          </div>
        </div>

        <div className="w-full lg:w-[60%] h-full">
          <Image
            src="/images/queretaro/mapa.png"
            alt="Ubicacion"
            width={662}
            height={854}
            className="w-full h-auto lg:h-[723.74px] object-contain mx-auto"
          />
        </div>
      </div>
      </div>

      <QuienesSomosSection />
    </>
  );
}
