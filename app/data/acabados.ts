import type { CarouselSlide } from "../components/Carousel";

export interface AcabadoCategoria {
  label: string;
  slides: CarouselSlide[];
}

const BASE = "/images/queretaro/Acabados";

export const categoriasAcabados: AcabadoCategoria[] = [
  {
    label: "Generales",
    slides: [
      { src: `${BASE}/Recurso 21PROTOTIPO2 1.png`, alt: "Acabados Generales", width: 840, height: 422 },
      { src: `${BASE}/Recurso 22PROTOTIPO2 1.png`, alt: "Acabados Generales", width: 840, height: 504 },
    ],
  },
  {
    label: "Cocina",
    slides: [
      { src: `${BASE}/Recurso 25PROTOTIPO2 1.png`, alt: "Acabados en Cocina", width: 840, height: 495 },
      { src: `${BASE}/Recurso 26PROTOTIPO2 1.png`, alt: "Accesorios en Cocina", width: 840, height: 427 },
    ],
  },
  {
    label: "Baño",
    slides: [
      { src: `${BASE}/Recurso 23PROTOTIPO2 1.png`, alt: "Acabados en Baño", width: 840, height: 496 },
      { src: `${BASE}/Recurso 24PROTOTIPO2 1.png`, alt: "Accesorios en Baño", width: 840, height: 443 },
    ],
  },
];

export const acabadosTodos: CarouselSlide[] = [
  { src: `${BASE}/Recurso 21PROTOTIPO2 1.png`, alt: "Acabados Generales", width: 840, height: 422 },
  { src: `${BASE}/Recurso 22PROTOTIPO2 1.png`, alt: "Acabados Generales", width: 840, height: 504 },
  { src: `${BASE}/Recurso 25PROTOTIPO2 1.png`, alt: "Acabados en Cocina", width: 840, height: 495 },
  { src: `${BASE}/Recurso 26PROTOTIPO2 1.png`, alt: "Accesorios en Cocina", width: 840, height: 427 },
  { src: `${BASE}/Recurso 23PROTOTIPO2 1.png`, alt: "Acabados en Baño", width: 840, height: 496 },
  { src: `${BASE}/Recurso 24PROTOTIPO2 1.png`, alt: "Accesorios en Baño", width: 840, height: 443 },
];
