"use client";

import { useState } from "react";
import Carousel from "./Carousel";
import { plantas } from "../data/plantas";

export default function PlantasSection() {
  const [index, setIndex] = useState(0);

  return (
    <div className="max-w-[1440px] mx-auto px-5 sm:px-5 py-5 sm:py-10 my-5 sm:my-6 lg:my-10">
      <div className="py-8" id="plantas">
        <div className="mx-auto w-full text-center text-hp-leon-dorado">
          <h2 className="text-3xl sm:text-[2.375rem] lg:text-[3rem] leading-none uppercase font-cities-typeface text-center">
            Plantas
          </h2>
        </div>
      </div>

      <Carousel slides={plantas} index={index} onIndexChange={setIndex} />
    </div>
  );
}
