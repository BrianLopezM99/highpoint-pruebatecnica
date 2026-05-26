"use client";

import Image from "next/image";
import { useState } from "react";
import { prototipos } from "../data/departamentos-prototipos";

export default function DepartamentosSection() {
  const [activeId, setActiveId] = useState(prototipos[0].id);
  const active = prototipos.find((p) => p.id === activeId) ?? prototipos[0];

  return (
    <section
      className="departamentos-section bg-cover bg-center bg-no-repeat"
      aria-labelledby="departamentos-title"
      id="departamentos"
      style={{ backgroundImage: "url('/images/queretaro/bgdepa.png')" }}
    >
      <div className="pb-10 sm:py-10 w-full mx-auto">
        <div className="py-6 px-4 sm:px-5 md:px-10 lg:px-20">
          <div className="py-8">
            <div className="mx-auto w-full text-center text-hp-leon-dorado">
              <h2
                id="departamentos-title"
                className="text-3xl sm:text-[2.375rem] lg:text-[3rem] leading-none uppercase font-cities-typeface text-center"
              >
                Departamentos
              </h2>
            </div>
          </div>

          <div
            className="flex flex-wrap gap-2 mb-4 w-full mx-auto justify-center lg:px-[10%]"
            role="tablist"
            aria-label="Seleccionar tipo de departamento"
          >
            {prototipos.map((prototipo) => {
              const isActive = prototipo.id === activeId;
              return (
                <button
                  key={prototipo.id}
                  type="button"
                  onClick={() => setActiveId(prototipo.id)}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Departamento de ${prototipo.areaTotal}`}
                  className={`btn-imagen-depa flex flex-col rounded-t-[4px] items-center font-montserrat px-2 py-2 lg:px-5 lg:py-4 cursor-pointer transition duration-300 ease-in-out min-w-[120px] ${
                    isActive
                      ? "bg-hp-leon-azul text-white border border-hp-leon-dorado"
                      : ""
                  }`}
                >
                  {prototipo.areaTotal}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-3 font-montserrat px-5 sm:px-12 lg:px-20">
          <div className="w-full lg:w-[30%] text-center lg:text-left order-1 pb-6 lg:pb-0 pt-2 sm:pt-0 lg:max-w-[350px]">
            <div key={active.id} className="hp-swap">
              <p className="font-medium text-hp-leon-azul text-lg md:text-xl leading-0 mb-4">
                Prototipo
              </p>
              {active.niveles && (
                <p className="font-medium text-hp-leon-azul text-lg md:text-xl mb-2">
                  {active.niveles}
                </p>
              )}
              <div className="text-2xl md:text-3xl lg:text-[2.75rem] font-bold text-hp-leon-azul mb-4">
                {active.areaTotal}
              </div>
              {active.areaDesglose && (
                <p className="font-medium text-hp-leon-azul text-lg md:text-xl mb-4">
                  {active.areaDesglose}
                </p>
              )}
              {active.caracteristicas && (
                <div className="sm:border-l-6 text-left border-hp-leon-dorado pl-4 mb-4">
                  <div className="grid grid-cols-2 sm:grid-cols-1 text-hp-leon-azul text-sm md:text-base space-y-1">
                    {active.caracteristicas.map((c) => (
                      <p key={c.letra}>
                        <span className="font-semibold">{c.letra}</span>{" "}
                        {c.nombre}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="w-full lg:w-[70%] flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 lg:gap-8 order-2">
            {active.nivelImage && (
              <div className="flex flex-col items-center w-full lg:w-auto shrink-0">
                <Image
                  key={active.id}
                  src={active.nivelImage}
                  alt={`Vista de nivel del departamento de ${active.areaTotal}`}
                  width={200}
                  height={150}
                  className="w-auto h-[140px] sm:h-[200px] lg:h-[280px] object-contain hp-swap-img"
                />
              </div>
            )}
            <div className="flex flex-col items-center w-full lg:w-auto">
              <Image
                key={active.id}
                src={active.planoImage}
                alt={`Plano del departamento de ${active.areaTotal}`}
                width={400}
                height={550}
                className="w-full max-w-[420px] sm:max-w-[520px] h-auto lg:w-auto lg:h-[550px] object-contain hp-swap-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
