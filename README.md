# Servexa — Frontend Assessment Foundation

A modern, responsive information/service platform homepage. This is the **foundation only**:
project structure, styling setup, and reusable component/section folders. Each section will be
built step-by-step in later iterations.

## Tech stack

- **React** + **TypeScript**
- **Vite** (build tool and dev server)
- **Tailwind CSS** (utility-first styling)
- **ESLint + typescript-eslint** (linting)
- **Lucide React** (icon library)

## Getting started

```bash
npm install   # install dependencies
npm run dev   # start the dev server
npm run build # type-check + production build
npm run lint  # run ESLint
```

## Project structure

```
src/
├── main.tsx                    # React entry point
├── index.css                   # Tailwind + design tokens (brand colors, fonts)
├── App.tsx                     # Composes all page sections in order
├── components/
│   ├── ui/                     # Reusable, generic UI primitives
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   ├── SectionHeading.tsx
│   │   └── Accordion.tsx       # functional, reused for the FAQ section later
│   └── sections/               # One folder per page section
│       ├── Header.tsx          # stub — responsive nav + mega menu
│       ├── Hero.tsx            # stub — hero + search
│       ├── Categories.tsx      # stub — service/category cards
│       ├── FeaturedServices.tsx# stub — featured services
│       ├── HowItWorks.tsx      # stub — how it works
│       ├── Faq.tsx             # stub — FAQ (uses Accordion)
│       ├── Cta.tsx             # stub — call to action
│       ├── Footer.tsx          # stub — footer
│       └── index.ts            # barrel: re-exports all sections
├── data/                       # seed/stub data for each section
│   ├── navigation.ts
│   ├── serviceCategories.ts
│   ├── services.ts
│   ├── howItWorks.ts
│   ├── faq.ts
│   └── footer.ts
└── types/                      # shared TypeScript interfaces
    └── index.ts
```

## How the folders fit together

- **`components/ui/`** — small, reusable pieces with no page-specific knowledge
  (Button, Container, SectionHeading, Accordion). Use these anywhere.
- **`components/sections/`** — one component per section of the page. Sections are
  composed together in `App.tsx`.
- **`data/`** — keeps mock content in one typed place so components stay clean and
  easy to swap to real data later.
- **`types/`** — shared interfaces (e.g. `FaqItem`, `Service`) used by both the
  data files and the components.

## Styling foundation

Tailwind shadowing is configured in `src/index.css` with the `@theme` block, which
defines Servexa's brand palette and font tokens. These utilities (e.g. `bg-primary`,
`text-muted`, `font-heading`) are ready to use as each section is built.
