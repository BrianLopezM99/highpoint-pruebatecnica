import Image from "next/image";

interface InfoImage {
  src: string;
  alt: string;
}

const INFO_IMAGES: Record<string, InfoImage> = {
  planta: { src: "/images/info1.png", alt: "Planta principal del edificio High Point Querétaro" },
  amenidad: { src: "/images/info2.png", alt: "Amenidad del proyecto High Point Querétaro" },
  departamento: { src: "/images/info3.png", alt: "Departamento modelo High Point Querétaro" },
  acabado: { src: "/images/info4.png", alt: "Acabado de lujo High Point Querétaro" },
};

export default function BienvenidoSection() {
  return (
    <section className="py-16 my-3 sm:my-5 relative sm:py-10 px-4 sm:px-10 md:px-[4%] lg:px-[10%] 2xl:px-[15%] mx-auto max-w-[1660] z-10">
      <div className="max-w-7xl mx-auto">
        <div className="w-full py-6 sm:py-8">
          <div className="mx-auto w-full text-center text-hp-leon-dorado">
            <h2 className="text-3xl sm:text-[2.375rem] lg:text-[3rem] leading-none uppercase font-cities-typeface">
              Bienvenido a High Point Querétaro
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-3 lg:gap-12 items-center font-montserrat">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <p className="text-base text-hp-leon-azul leading-relaxed">
                Pertenecemos a los destacados proyectos de grupo OR-B, una
                desarrolladora con un historial de éxitos que incluye Mítikah,
                The St. Regis Mexico City, the St. Regis Punta Mita y entre
                otros.
              </p>
              <p className="text-base text-hp-leon-azul leading-relaxed">
                Nuestra dedicación a los detalles, calidad y experiencia
                profesional, nos ha permitido colaborar con inversores de
                renombre como Prudential Real Estate Investors y La Salle
                Investors México, entre otros, forjando alianzas con múltiples
                grupos institucionales desde 2010.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4 h-auto md:h-auto items-center mb-6">
              <div>
                <div className="row-span-2 pb-3">
                  <div className="h-full rounded-2xl overflow-hidden shadow-2xl max-h-[450px] md:max-h-[500px] lg:max-h-[700px]">
                    <Image
                      src={INFO_IMAGES.planta.src}
                      alt={INFO_IMAGES.planta.alt}
                      width={500}
                      height={700}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={INFO_IMAGES.amenidad.src}
                    alt={INFO_IMAGES.amenidad.alt}
                    width={500}
                    height={350}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div>
                <div className="rounded-2xl overflow-hidden shadow-xl max-h-[225px] md:max-h-[250px] lg:max-h-[320px]">
                  <Image
                    src={INFO_IMAGES.departamento.src}
                    alt={INFO_IMAGES.departamento.alt}
                    width={500}
                    height={320}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="row-span-2 pt-3">
                  <div className="h-full rounded-2xl overflow-hidden shadow-2xl max-h-[450px] md:max-h-[500px] lg:max-h-[700px]">
                    <Image
                      src={INFO_IMAGES.acabado.src}
                      alt={INFO_IMAGES.acabado.alt}
                      width={500}
                      height={700}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
