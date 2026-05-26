# High Point Querétaro — Landing Page

Réplica de la landing page de [High Point Querétaro](https://highpointqueretaro.com), un desarrollo inmobiliario con el concepto **Live, Work & Play** en el sur de Querétaro. Construida como prueba técnica.

El sitio es una single-page con scroll vertical: hero promocional, razones de compra, amenidades, prototipos de departamentos con precios, acabados, plantas arquitectónicas y ubicación, con animaciones de aparición al hacer scroll y botón flotante de WhatsApp.

## Stack

| Tecnología | Versión |
|---|---|
| [Next.js](https://nextjs.org) (App Router) | 16.2 |
| [React](https://react.dev) | 19.2 |
| [TypeScript](https://www.typescriptlang.org) | 5 |
| [Tailwind CSS](https://tailwindcss.com) | 4 |

Tipografías: **Montserrat** (vía `next/font/google`) y **Cities Typeface** (fuente local `.otf` para títulos).

## Requisitos

- **Node.js** 20.9 o superior (requerido por Next.js 16)
- **pnpm** (el proyecto usa `pnpm-lock.yaml`)

## Cómo ejecutar

```bash
# Instalar dependencias
pnpm install

# Servidor de desarrollo (http://localhost:3000)
pnpm dev

# Compilar para producción
pnpm build

# Servir la build de producción
pnpm start

# Linter
pnpm lint
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Estructura del proyecto

```
app/
├── layout.tsx              # Layout raíz: fuentes, metadata, <html lang="es">
├── page.tsx                # Composición de la página (orden de las secciones)
├── globals.css             # Tailwind v4, theme tokens, @font-face, utilidades
├── components/
│   ├── Navbar.tsx          # Navegación
│   ├── HeroSection.tsx     # Hero / banner principal
│   ├── RazonesSection.tsx  # Razones para comprar
│   ├── LiveWorkPlaySection.tsx
│   ├── AmenidadesSection.tsx
│   ├── DepartamentosSection.tsx / DepartamentoCard.tsx
│   ├── AcabadosSection.tsx
│   ├── PlantasSection.tsx  # Plantas arquitectónicas
│   ├── UbicacionSection.tsx
│   ├── Footer.tsx
│   ├── Carousel.tsx        # Carrusel reutilizable
│   ├── FadeIn.tsx          # Wrapper de animación al hacer scroll
│   ├── WhatsAppButton.tsx  # Botón flotante de contacto
│   └── icons/              # Íconos SVG como componentes React
└── data/                   # Contenido desacoplado de la UI
    ├── departamentos.ts    # Prototipos y precios
    ├── amenidades.ts
    ├── acabados.ts
    ├── plantas.ts
    └── ubicacion.ts

public/
├── images/queretaro/       # Imágenes del desarrollo (renders, mapas, plantas)
├── svg/                    # Íconos de amenidades
└── fonts/                  # cities-typeface.otf
```

## Decisiones de implementación

- **Contenido separado de la presentación**: textos, precios e imágenes viven en `app/data/`, de modo que los componentes solo se encargan del renderizado.
- **Tailwind v4 con tokens de tema**: la paleta de marca y las fuentes se definen en `@theme` dentro de `globals.css` (`--color-green-highpoint`, `--font-cities-typeface`, etc.).
- **Tipografía fluida**: el `font-size` raíz usa `clamp()` para escalar entre móvil y pantallas grandes sin saltos.
- **Animaciones de scroll**: el componente `FadeIn` aplica entradas (`up`, `left`, `right`, `zoom`) a las secciones a medida que entran en viewport.