"use client";

import { useState } from "react";
import Carousel from "./Carousel";
import AmenityIcon from "./icons/AmenityIcon";
import FadeIn, { Stagger } from "./FadeIn";
import { amenidades } from "../data/amenidades";

const withImage = amenidades.filter((a) => a.image !== "");

const slides = withImage.map((a) => ({
  src: a.image,
  alt: a.label,
  width: a.width ?? 677,
  height: a.height ?? 480,
}));

const slideIndexByLabel = new Map(withImage.map((a, i) => [a.label, i]));

export default function AmenidadesSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="amenidades" className="my-3 sm:my-4 lg:my-6">
      <div className="max-w-[2240px] mx-auto px-5 sm:px-5 py-4 sm:py-6">
        <FadeIn direction="up" className="py-4 sm:py-5">
          <div className="mx-auto w-full text-center text-hp-leon-dorado">
            <h2 className="text-2xl sm:text-[2rem] lg:text-[2.5rem] leading-none uppercase font-cities-typeface text-center">
              Amenidades
            </h2>
          </div>
        </FadeIn>

        <Stagger
          direction="up"
          step={55}
          className="flex flex-wrap justify-center gap-x-2 sm:gap-x-2 lg:gap-x-6 gap-y-1 lg:gap-y-2 mb-2 max-w-[1540px] mx-auto px-0 sm:px-10 lg:px-20 [&>*]:grow-0 [&>*]:shrink-0 [&>*]:basis-[28%] sm:[&>*]:basis-[20%] lg:[&>*]:basis-[180px]"
        >
          {amenidades.map((amenidad) => {
            const slideIndex = slideIndexByLabel.get(amenidad.label);
            const hasImage = slideIndex !== undefined;

            return (
              <button
                key={amenidad.label}
                type="button"
                onClick={hasImage ? () => setActive(slideIndex) : undefined}
                disabled={!hasImage}
                aria-label={hasImage ? `Ver ${amenidad.label}` : undefined}
                className={`flex flex-col items-center w-full font-montserrat px-1 sm:px-4 py-1 transition-colors ${
                  hasImage
                    ? "cursor-pointer text-gray-500 hover:text-hp-leon-dorado"
                    : "cursor-default text-gray-500"
                }`}
              >
                <div className="mb-1">
                  <AmenityIcon src={amenidad.icon} />
                </div>
                <span className="text-xs sm:text-sm font-medium uppercase text-center whitespace-pre-line">
                  {amenidad.label}
                </span>
              </button>
            );
          })}
        </Stagger>
      </div>

      <div className="max-w-[1440px] mx-auto">
        <Carousel slides={slides} index={active} onIndexChange={setActive} fit="cover" />
      </div>
    </section>
  );
}
