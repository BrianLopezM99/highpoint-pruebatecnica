"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavLink {
  href: string;
  label: string;
}

const NAV_LINKS: NavLink[] = [
  { href: "#proyecto", label: "Proyecto" },
  { href: "#amenidades", label: "Amenidades" },
  { href: "#departamentos", label: "Departamentos" },
  { href: "#acabados", label: "Galería" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.querySelector(link.href)
    ).filter((el): el is Element => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // De las secciones visibles, marcar la más cercana al tope del nav.
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]?.target.id) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-90px 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    const target = document.querySelector(href);
    setActiveSection(href);
    setIsOpen(false);
    if (!(target instanceof HTMLElement)) return;

    // Destino recalculado en cada frame: el layout de arriba sigue
    // cambiando mientras bajamos (imágenes lazy + swap de la fuente),
    // así que un único cálculo inicial deja la sección detrás del nav.
    const nav = document.querySelector("nav");
    const offset = (nav?.offsetHeight ?? 90) + 12;
    const desiredTop = () =>
      Math.max(0, target.getBoundingClientRect().top + window.scrollY - offset);

    window.scrollTo({ top: desiredTop(), behavior: "smooth" });

    // Reapuntar hasta que la posición se estabilice (o se agote el tiempo).
    let lastY = Number.NaN;
    let stableFrames = 0;
    let frames = 0;
    const settle = () => {
      const y = window.scrollY;
      const goal = desiredTop();
      if (Math.abs(y - goal) > 1) {
        window.scrollTo({ top: goal, behavior: "smooth" });
      }
      stableFrames = Math.abs(y - lastY) < 1 ? stableFrames + 1 : 0;
      lastY = y;
      frames += 1;
      if (stableFrames < 8 && frames < 180) requestAnimationFrame(settle);
    };
    requestAnimationFrame(settle);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-hp-leon-azul/10">
      <div className="flex justify-between items-center py-4 px-2 sm:p-4 md:px-12 max-w-[1440px] mx-auto font-montserrat">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/queretaro/emblema-navbar-v2.png"
            alt="High Point Querétaro"
            width={512}
            height={512}
            quality={100}
            className="w-auto h-[60px]"
            priority
          />
        </Link>

        {/* Navegacion de escritorio */}
        <div className="hidden md:flex items-center gap-7 lg:gap-9">
          <ul className="flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(event) => handleNavClick(event, link.href)}
                    aria-current={isActive ? "page" : undefined}
                    className={`group relative cursor-pointer text-[0.8125rem] font-medium uppercase tracking-[0.12em] transition-colors duration-200 ${
                      isActive
                        ? "text-hp-leon-azul"
                        : "text-hp-leon-azul/80 hover:text-hp-leon-azul"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-[2px] bg-hp-leon-azul transition-all duration-300 ease-out ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="#contacto"
            onClick={(event) => handleNavClick(event, "#contacto")}
            className="inline-flex items-center rounded-full bg-hp-leon-azul px-6 py-2.5 text-[0.8125rem] font-semibold uppercase tracking-[0.1em] text-white shadow-sm transition-all duration-200 hover:bg-hp-leon-azul/90 hover:shadow-md"
          >
            Cotiza ahora
          </a>
        </div>

        {/* Botón hamburguesa (movil) */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden text-hp-leon-azul"
          aria-label="Abrir menú"
          aria-expanded={isOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Menu móvil desplegable */}
      <div
        className={`md:hidden overflow-hidden border-t border-hp-leon-azul/10 bg-white transition-[max-height,opacity] duration-300 ease-in-out ${
          isOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-2 font-montserrat">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <li
                key={link.href}
                className="border-b border-hp-leon-azul/5 last:border-0"
              >
                <a
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center gap-2 cursor-pointer py-3.5 text-sm font-medium uppercase tracking-[0.1em] transition-colors ${
                    isActive
                      ? "text-hp-leon-azul"
                      : "text-hp-leon-azul/80 hover:text-hp-leon-azul"
                  }`}
                >
                  <span
                    className={`h-4 w-[2px] rounded-full bg-hp-leon-azul transition-opacity ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="px-6 pb-5 pt-1">
          <a
            href="#contacto"
            onClick={(event) => handleNavClick(event, "#contacto")}
            className="block rounded-full bg-hp-leon-azul px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.1em] text-white"
          >
            Cotiza ahora
          </a>
        </div>
      </div>
    </nav>
  );
}
