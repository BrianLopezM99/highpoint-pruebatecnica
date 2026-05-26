export interface Caracteristica {
  letra: string;
  nombre: string;
}

export interface PrototipoDepartamento {
  id: string;
  areaTotal: string;
  planoImage: string;
  nivelImage?: string;
  niveles?: string;
  areaDesglose?: string;
  caracteristicas?: Caracteristica[];
}

const BASE = "/images/queretaro/Departamentos";

export const prototipos: PrototipoDepartamento[] = [
  {
    id: "depa1",
    areaTotal: "48.50 m²",
    planoImage: `${BASE}/48/Recurso 1PROTOTIPO 1.png`,
    nivelImage: `${BASE}/48/Recurso 2PROTOTIPO2 2.png`,
    niveles: "Niveles N2 A N3",
    areaDesglose: "25.30m² PB + 23.20m² PA",
    caracteristicas: [
      { letra: "A", nombre: "ESCALERA" },
      { letra: "B", nombre: "SALA" },
      { letra: "C", nombre: "BARRA-COMEDOR" },
      { letra: "D", nombre: "COCINA" },
      { letra: "E", nombre: "CUARTO DE LAVADO" },
      { letra: "F", nombre: "1 RECÁMARA" },
      { letra: "G", nombre: "1 BAÑO" },
      { letra: "H", nombre: "ESCALERA" },
    ],
  },
  {
    id: "depa1_2",
    areaTotal: "43.30 m²",
    planoImage: `${BASE}/43/Container.png`,
    nivelImage: `${BASE}/43/Recurso 3PROTOTIPO2 1.png`,
    niveles: "Niveles 4 A 19",
    caracteristicas: [
      { letra: "A", nombre: "1 RECÁMARA" },
      { letra: "B", nombre: "SALA" },
      { letra: "C", nombre: "1 BAÑO" },
      { letra: "D", nombre: "COMEDOR" },
      { letra: "E", nombre: "COCINA" },
    ],
  },
  {
    id: "depa2",
    areaTotal: "50.90 m²",
    planoImage: `${BASE}/50/Container.png`,
    nivelImage: `${BASE}/50/Recurso 5PROTOTIPO2 1.png`,
    niveles: "Niveles 4 A 19",
    caracteristicas: [
      { letra: "A", nombre: "1 RECÁMARA" },
      { letra: "B", nombre: "FAMILY ROOM" },
      { letra: "C", nombre: "1 BAÑO" },
      { letra: "D", nombre: "COMEDOR" },
      { letra: "E", nombre: "COCINA" },
      { letra: "F", nombre: "WALK-IN CLOSET" },
      { letra: "G", nombre: "SALA" },
    ],
  },
  {
    id: "depa4",
    areaTotal: "65 m²",
    planoImage: `${BASE}/65/Container.png`,
    nivelImage: `${BASE}/65/Recurso 7PROTOTIPO2 1.png`,
    niveles: "Niveles 4 A 19",
    caracteristicas: [
      { letra: "A", nombre: "2 RECÁMARAS" },
      { letra: "B", nombre: "2 BAÑOS" },
      { letra: "C", nombre: "COMEDOR" },
      { letra: "D", nombre: "COCINA" },
      { letra: "E", nombre: "CUARTO DE LAVADO" },
      { letra: "F", nombre: "SALA" },
    ],
  },
  {
    id: "depa4_2",
    areaTotal: "68.40 m²",
    planoImage: `${BASE}/68/Container.png`,
    nivelImage: `${BASE}/68/Recurso 9PROTOTIPO2 1.png`,
    niveles: "Niveles 4 A 19",
    caracteristicas: [
      { letra: "A", nombre: "2 RECÁMARAS" },
      { letra: "B", nombre: "2 BAÑOS" },
      { letra: "C", nombre: "COMEDOR" },
      { letra: "D", nombre: "COCINA" },
      { letra: "E", nombre: "CUARTO DE LAVADO" },
      { letra: "F", nombre: "SALA" },
    ],
  },
  {
    id: "depa6",
    areaTotal: "80.40 m²",
    planoImage: `${BASE}/80/Recurso 12PROTOTIPO2 1.png`,
    nivelImage: `${BASE}/80/Recurso 11PROTOTIPO2 1.png`,
    niveles: "Niveles 4 A 19",
    caracteristicas: [
      { letra: "A", nombre: "3 RECÁMARAS" },
      { letra: "B", nombre: "2 BAÑOS" },
      { letra: "C", nombre: "COMEDOR" },
      { letra: "D", nombre: "COCINA" },
      { letra: "E", nombre: "CUARTO DE LAVADO" },
      { letra: "F", nombre: "SALA" },
    ],
  },
  {
    id: "depa6_2",
    areaTotal: "84.70 m²",
    planoImage: `${BASE}/84/Recurso 14PROTOTIPO2 1.png`,
    nivelImage: `${BASE}/84/Recurso 13PROTOTIPO2 1.png`,
    niveles: "Niveles PB, 1 y 4 al 19",
    caracteristicas: [
      { letra: "A", nombre: "3 RECÁMARAS" },
      { letra: "B", nombre: "2 BAÑOS" },
      { letra: "C", nombre: "COMEDOR" },
      { letra: "D", nombre: "COCINA" },
      { letra: "E", nombre: "CUARTO DE LAVADO" },
      { letra: "F", nombre: "SALA" },
    ],
  },
  {
    id: "depa8",
    areaTotal: "88.40 m²",
    planoImage: `${BASE}/88/Recurso 16PROTOTIPO2 1.png`,
    nivelImage: `${BASE}/88/Recurso 15PROTOTIPO2 1.png`,
    niveles: "Niveles N2 al N3",
    areaDesglose: "39.10m² PB + 49.30m² PA",
    caracteristicas: [
      { letra: "A", nombre: "ESCALERA" },
      { letra: "B", nombre: "SALA" },
      { letra: "C", nombre: "COMEDOR" },
      { letra: "D", nombre: "COCINA" },
      { letra: "E", nombre: "2 RECÁMARAS" },
      { letra: "F", nombre: "3 BAÑOS" },
      { letra: "G", nombre: "WALK-IN CLOSET" },
    ],
  },
];
