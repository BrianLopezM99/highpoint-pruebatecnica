"use client";

import { useState } from "react";
import Carousel from "./Carousel";
import { acabadosTodos, categoriasAcabados } from "../data/acabados";

export default function AcabadosSection() {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const [index, setIndex] = useState(0);

  const slides =
    activeTab === null ? acabadosTodos : categoriasAcabados[activeTab].slides;

  const selectTab = (tab: number) => {
    setActiveTab(tab);
    setIndex(0);
  };

  return (
    <div className="max-w-[1440px] mx-auto px-5 sm:px-5 py-5 sm:py-10 my-5 sm:my-6 lg:my-10">
      <div className="py-8" id="acabados">
        <div className="mx-auto w-full text-center text-hp-leon-dorado">
          <h2 className="text-3xl sm:text-[2.375rem] lg:text-[3rem] leading-none uppercase font-cities-typeface text-center">
            Acabados
          </h2>
        </div>
      </div>

      <div className="flex justify-center gap-2 md:gap-5 mb-0 sm:mb-4 md:mb-8 flex-wrap">
        {categoriasAcabados.map((categoria, i) => {
          const isActive = i === activeTab;
          return (
            <button
              key={categoria.label}
              type="button"
              onClick={() => selectTab(i)}
              className={`flex flex-col rounded-t-[4px] items-center font-montserrat px-2 sm:px-5 py-2 sm:py-4 cursor-pointer transition-all duration-300 ease-in-out min-w-[120px] ${
                isActive
                  ? "bg-green-highpoint text-white font-bold"
                  : "text-gray-700"
              }`}
            >
              <span className="text-sm font-medium">{categoria.label}</span>
            </button>
          );
        })}
      </div>

      <Carousel
        key={activeTab ?? "todos"}
        slides={slides}
        index={index}
        onIndexChange={setIndex}
      />
    </div>
  );
}
