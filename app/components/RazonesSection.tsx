import Image from "next/image";
import FadeIn, { Stagger } from "./FadeIn";

interface Razon {
  label: string;
  text: string;
}

const RAZONES: Razon[] = [
  {
    label: "Estilo de vida exclusiva:",
    text: " Sé parte del nuevo ícono en Querétaro en una zona estratégica con ubicación clave, cerca de todo.",
  },
  {
    label: "Preventa:",
    text: " Al invertir en etapa de preventa, serás de los primeros en elegir tu departamento para que te quedes con la mejor opción.",
  },
  {
    label: "Formas de pago:",
    text: " Nos adaptamos a tus posibilidades, pues aceptamos cofinanciamientos, Infonavit, Instituciones Bancarias, etc.",
  },
  {
    label: "Alta plusvalía:",
    text: " No es lo mismo comprar en obra que al finalizar la misma. Tenemos para ti precios desde lista cero, ¡Eso quiere decir que cada porcentaje avanzado en venta incrementará tú inversión!",
  },
  {
    label: "Rendimiento de inversión:",
    text: " Disfruta los rendimientos de tu renta o disfruta viviéndolo.",
  },
  {
    label: "Seguridad:",
    text: " Ya tenemos un gran avance en la obra, pues ya está construida toda la estructura.",
  },
  {
    label: "Experiencia:",
    text: " OR-B Desarrolladora tiene más de 15 años en el mercado, ha construido edificios icónicos en todo México como: Mitikah, St.Regis Reforma, St. Regis Punta Mita, etc.",
  },
];

const TITLE = "Razones para elegir comprar en High Point Querétaro";

export default function RazonesSection() {
  return (
    <div className="relative mx-auto overflow-hidden">
      <FadeIn direction="up" className="mx-auto w-full text-center text-hp-leon-dorado">
        <h2 className="text-3xl sm:text-[2.375rem] leading-none uppercase font-cities-typeface block lg:hidden pt-10 pb-8 px-4 sm:px-8">
          {TITLE}
        </h2>
      </FadeIn>

      <div className="relative flex flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-3/4 relative py-10 min-[2000px]:py-28! px-4 sm:px-8 lg:pl-10 lg:pr-8 z-10">
          <FadeIn direction="up" className="mx-auto w-full text-hp-leon-dorado lg:mb-4 hidden lg:block">
            <h2 className="lg:text-[3.5rem] min-[2000px]:text-[3rem]! leading-none uppercase font-cities-typeface text-left lg:max-w-[1380px] min-[2000px]:max-w-[3000px]!">
              {TITLE}
            </h2>
          </FadeIn>
          <Stagger
            direction="left"
            step={70}
            className="py-3 font-montserrat text-base lg:text-[1.25rem] min-[2000px]:text-base! max-w-[1340px] lg:max-w-[1140px] min-[2000px]:max-w-[1810px]! leading-[1.6] sm:leading-[1.9] lg:leading-[2.5] min-[2000px]:leading-[3]! min-[2000px]:pr-24!"
          >
            {RAZONES.map((razon) => (
              <p key={razon.label} className="mb-4 lg:mb-0">
                <b>{razon.label}</b>
                {razon.text}
              </p>
            ))}
          </Stagger>
        </div>

        <div className="hidden lg:block w-full lg:w-1/4 relative">
          <div className="absolute inset-0 bg-hp-leon-azul" />
        </div>

        <div className="hidden lg:flex absolute top-[55%] left-[62%] min-[2000px]:left-[69%]! -translate-y-1/2 z-20">
          <FadeIn direction="right" delay={150}>
            <Image
              src="/images/queretaro/razones.png"
              alt="High Point Querétaro"
              width={1500}
              height={1000}
              className="w-[600px] min-[2000px]:w-[660px]! h-[560px] min-[2000px]:h-[700px]! object-cover object-[80%_center] shadow-2xl"
            />
          </FadeIn>
        </div>

        <FadeIn direction="zoom" className="lg:hidden w-full">
          <Image
            src="/images/queretaro/razones.png"
            alt="High Point Querétaro"
            width={1500}
            height={1000}
            className="w-full h-[320px] object-cover object-[80%_center] shadow-2xl"
          />
        </FadeIn>
      </div>
    </div>
  );
}
