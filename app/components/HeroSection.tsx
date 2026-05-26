import DepartamentoCard from "./DepartamentoCard";
import { departamentos } from "../data/departamentos";

export default function HeroSection() {
  return (
    <section
      id="proyecto"
      className="flex relative md:h-[600px] lg:h-screen lg:min-h-[900px] w-full font-sans overflow-hidden"
      style={{ backgroundImage: "url('/images/queretaro/highpointheaderv.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
      aria-label="Banner principal de High Point Querétaro"
    >
      <div className="flex md:hidden flex-col w-full min-h-[560px] px-5 pt-8 pb-10">
        <div
          className="absolute inset-0 bg-black/45 pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col gap-6">
          <div className="text-center text-white">
            <h2 className="text-[2rem] leading-none uppercase font-cities-typeface m-0 tracking-[0.08em]">
              Live Work &amp; Play
            </h2>
            <p className="font-montserrat text-sm leading-[1.55] mt-4 text-white/90">
              OR-B Desarrolladora ha diseñado el único concepto en Querétaro
              &ldquo;Live, Work and Play&rdquo;, donde puedes hacer toda tu vida
              en el mismo lugar. Vivir en High Point Querétaro potencializará tu
              rendimiento, invierte en ti, invierte inteligente.
            </p>
            <a
              href="#contacto"
              className="inline-block mt-5 bg-[#2b2b25] hover:bg-[#3d3d34] transition-colors text-white font-montserrat text-base px-8 py-3"
            >
              Cotiza ahora
            </a>
          </div>

          <div
            className="flex flex-col gap-3 mt-2"
            role="region"
            aria-label="Opciones de departamentos disponibles"
          >
            {departamentos.map((depa) => (
              <DepartamentoCard
                key={`mobile-${depa.title}`}
                title={depa.title}
                price={depa.price}
                variant="compact"
              />
            ))}
          </div>

          <p className="text-center text-white/85 text-xs font-montserrat mt-2">
            Dirección: Centro Sur, 76090 Santiago de Querétaro, Qro
          </p>
        </div>
      </div>

      <div className="hidden md:flex flex-col justify-around ml-[25%] flex-1 p-1 lg:p-4 items-center relative h-full md:h-[600px] sm:min-h-[400px] lg:h-full lg:min-h-[800px]">
        <div className="h-fit bg-[#ffffffcb] px-4 lg:px-12 pt-2 lg:pt-6 pb-4 lg:pb-7 w-full max-w-[560px] lg:max-w-[920px]">
          <div className="w-full">
            <div className="mx-auto w-full text-center text-hp-leon-dorado">
              <h2 className="text-3xl sm:text-[2.375rem] lg:text-[2.5rem] leading-none uppercase font-cities-typeface m-0 text-center tracking-[0.1em] whitespace-nowrap">
                Live Work & Play
              </h2>
            </div>
            <div className="text-hp-leon-dorado mb-4 mt-3">
              <p className="font-montserrat text-base leading-[1.52] text-center text-black">
                OR-B Desarrolladora ha diseñado el único concepto en Querétaro
                &ldquo;Live, Work and Play&rdquo;, donde puedes hacer toda tu
                vida en el mismo lugar. El tiempo es lo más valioso en el mundo
                de hoy, vivir en High Point Querétaro potencializará tu
                rendimiento, invierte en ti, invierte inteligente.
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="#contacto"
                className="inline-block bg-[#2b2b25] hover:bg-[#3d3d34] transition-colors text-white font-montserrat text-base px-8 py-3"
              >
                Cotiza ahora
              </a>
            </div>
          </div>
        </div>

        <div
          className="flex sm:justify-center flex-col sm:flex-row flex-wrap gap-4 lg:px-2 pb-8 z-30 w-full max-w-[500px] lg:max-w-[1110px]"
          role="region"
          aria-label="Opciones de departamentos disponibles"
        >
          {departamentos.map((depa) => (
            <DepartamentoCard
              key={`featured-${depa.title}`}
              title={depa.title}
              price={depa.price}
              variant="featured"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
