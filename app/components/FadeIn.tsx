"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";

export type FadeDirection = "up" | "down" | "left" | "right" | "zoom";

interface FadeInProps {
  children: ReactNode;
  direction?: FadeDirection;
  delay?: number;
  className?: string;
}

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          requestAnimationFrame(() =>
            requestAnimationFrame(() => setVisible(true))
          );
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: FadeInProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-dir={direction}
      className={`hp-fade-in ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

interface StaggerProps {
  children: ReactNode;
  direction?: FadeDirection;
  step?: number;
  baseDelay?: number;
  className?: string;
}

export function Stagger({
  children,
  direction = "up",
  step = 90,
  baseDelay = 0,
  className = "",
}: StaggerProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const items = Children.toArray(children).filter(isValidElement);

  return (
    <div ref={ref} className={className}>
      {items.map((child, i) => {
        const el = child as ReactElement<{ key?: React.Key }>;
        return (
          <div
            key={el.key ?? i}
            data-dir={direction}
            className={`hp-fade-in ${visible ? "is-visible" : ""}`}
            style={{ transitionDelay: `${baseDelay + i * step}ms` }}
          >
            {cloneElement(el)}
          </div>
        );
      })}
    </div>
  );
}
