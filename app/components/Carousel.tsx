"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export interface CarouselSlide {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface CarouselProps {
  slides: CarouselSlide[];
  index: number;
  onIndexChange: (index: number) => void;
  fit?: "contain" | "cover";
}

export default function Carousel({
  slides,
  index,
  onIndexChange,
  fit = "contain",
}: CarouselProps) {
  const total = slides.length;

  const [vi, setVi] = useState(index + 1);
  const [animate, setAnimate] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);

  const viewportRef = useRef<HTMLDivElement>(null);
  const [vw, setVw] = useState(0);

  const internalNav = useRef(false);

  useEffect(() => {
    if (internalNav.current) {
      internalNav.current = false;
      return;
    }
    setAnimate(true);
    setVi(index + 1);
  }, [index]);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const update = () => setVw(el.clientWidth);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const fraction = vw >= 768 ? 0.47 : 0.84;
  const slideW = vw * fraction;
  const peek = (vw - slideW) / 2;

  const ratios = slides.map((s) => s.height / s.width);
  const ratio = fit === "cover" ? Math.min(...ratios) : Math.max(...ratios);
  const trackH = slideW * ratio;

  const ext = [slides[total - 1], ...slides, slides[0]];
  const offset = peek - vi * slideW;

  const handleTransitionEnd = useCallback(
    (e: React.TransitionEvent) => {
      if (e.target !== trackRef.current) return;
      if (vi === 0) {
        setAnimate(false);
        setVi(total);
      } else if (vi === total + 1) {
        setAnimate(false);
        setVi(1);
      }
    },
    [vi, total]
  );

  const goTo = useCallback(
    (next: number) => {
      const wrapped = (next + total) % total;
      internalNav.current = true;
      onIndexChange(wrapped);

      setAnimate(true);
      if (next < 0) {
        setVi(0);
      } else if (next >= total) {
        setVi(total + 1);
      } else {
        setVi(wrapped + 1);
      }
    },
    [total, onIndexChange]
  );

  const dragStartX = useRef(0);
  const dragStartY = useRef(0);
  const dragging = useRef(false);
  const [dragX, setDragX] = useState(0);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if (e.button !== 0 && e.pointerType === "mouse") return;
    dragging.current = true;
    dragStartX.current = e.clientX;
    dragStartY.current = e.clientY;
    setAnimate(false);
    setDragX(0);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - dragStartX.current;
    const dy = e.clientY - dragStartY.current;
    if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 10) {
      dragging.current = false;
      setAnimate(true);
      setDragX(0);
      return;
    }
    setDragX(dx);
  }, []);

  const endDrag = useCallback(() => {
    if (!dragging.current) return;
    dragging.current = false;
    const dx = dragX;
    setDragX(0);
    const threshold = Math.min(slideW * 0.25, 50);
    if (dx <= -threshold) {
      goTo(index + 1);
    } else if (dx >= threshold) {
      goTo(index - 1);
    } else {
      setAnimate(true);
    }
  }, [dragX, slideW, goTo, index]);

  return (
    <div className="relative">
      <div
        ref={viewportRef}
        className="overflow-hidden touch-pan-y"
        style={{ cursor: dragging.current ? "grabbing" : "grab" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
      >
        <div
          ref={trackRef}
          className="flex"
          style={{
            height: trackH || undefined,
            transform: `translateX(${offset + dragX}px)`,
            transition: animate ? "transform 500ms ease-out" : "none",
            willChange: "transform",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {ext.map((slide, i) => {
            const isActive = i === vi;
            return (
              <div
                key={i}
                className="relative shrink-0 flex items-center justify-center"
                style={{
                  width: slideW,
                  zIndex: isActive ? 20 : 10,
                }}
              >
                <div
                  className={`relative w-full h-full overflow-hidden ${
                    isActive ? "shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]" : ""
                  }`}
                  style={{
                    transform: isActive
                      ? "scale(1.0, 1)"
                      : "scale(1, 0.78)",
                    transition: animate ? "transform 500ms ease-out" : "none",
                    willChange: "transform",
                  }}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    draggable={false}
                    className={`select-none ${
                      fit === "cover" ? "object-cover" : "object-contain"
                    }`}
                    sizes="(max-width: 768px) 84vw, 56vw"
                  />
                  <div
                    className="absolute inset-0 bg-black transition-opacity duration-500 ease-out"
                    style={{ opacity: isActive ? 0 : 0.55 }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {vw > 0 && (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Anterior"
            className="absolute top-1/2 -translate-y-1/2 z-10 text-white cursor-pointer select-none"
            style={{ left: peek / 1.2 }}
          >
            <svg
              width="36"
              height="20"
              viewBox="0 0 36 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="square"
            >
              <path d="M35 10H1M1 10l8-8M1 10l8 8" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Siguiente"
            className="absolute top-1/2 -translate-y-1/2 z-10 text-white cursor-pointer select-none"
            style={{ right: peek / 1.2 }}
          >
            <svg
              width="36"
              height="20"
              viewBox="0 0 36 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="square"
            >
              <path d="M1 10h34M35 10l-8-8M35 10l-8 8" />
            </svg>
          </button>
        </>
      )}

      <ul className="flex justify-center gap-2 mt-4" role="tablist">
        {slides.map((_, i) => (
          <li key={i} role="presentation">
            <button
              type="button"
              role="tab"
              onClick={() => goTo(i)}
              aria-label={`${i + 1} de ${total}`}
              aria-selected={i === index}
              className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                i === index ? "bg-hp-leon-dorado" : "bg-gray-300"
              }`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
