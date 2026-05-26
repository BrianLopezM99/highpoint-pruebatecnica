"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: "smooth" });
    }
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="flex justify-between items-center py-4 px-2 sm:p-4 md:px-12 max-w-[1440px] mx-auto text-hp-leon-dorado font-montserrat">
        <Link href="/">
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

        <div className={`${isOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row gap-4 lg:gap-6 text-hp-leon-dorado absolute md:relative left-30 right-0 top-[76px] md:top-0 bg-white md:bg-transparent p-4 md:p-0 shadow-lg md:shadow-none z-50">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className="hover:text-hp-leon-dorado/80 cursor-pointer transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </ul>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden"
          aria-label="Abrir menú"
          aria-expanded={isOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
