# Servexa — Frontend Developer Practical Assessment

A modern, responsive single-page information/service platform homepage built with
React, TypeScript, and Tailwind CSS. Servexa lets users discover and book trusted
professionals for everyday services.

> **Note:** This is a frontend-only assessment. There is no backend, database, or
> authentication — all content is static/mock data stored in `src/data/`.

## Tech stack

- **React 19** + **TypeScript**
- **Vite** (build tool and dev server)
- **Tailwind CSS v4** (utility-first styling via `@tailwindcss/vite`)
- **ESLint + typescript-eslint** (linting)
- **Lucide React** (icon library)

## Getting started

```bash
npm install   # install dependencies
npm run dev   # start the dev server (http://localhost:5173)
npm run build # type-check + production build
npm run lint  # run ESLint
```

## Build status

| Section                | Status      |
| ---------------------- | ----------- |
| Header & mega menu     | ✅ Built    |
| Hero + service search  | ✅ Built    |
| Categories / cards     | ⏳ Stub     |
| Featured services      | ⏳ Stub     |
| How it works           | ⏳ Stub     |
| FAQ accordion          | ⏳ Stub     |
| Call to action         | ⏳ Stub     |
| Footer                 | ⏳ Stub     |

## Project structure

```
src/
├── main.tsx                    # React entry point
├── index.css                   # Tailwind v4 + design tokens (brand colors, fonts)
├── App.tsx                     # Composes all page sections in order
├── components/
│   ├── ui/                     # Reusable, generic UI primitives
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── SearchBar.tsx       # search input + autocomplete dropdown
│   │   ├── Accordion.tsx       # functional, reused for the FAQ section later
│   │   └── index.ts            # barrel: re-exports primitives
│   └── sections/               # One component per page section
│       ├── Header.tsx          # responsive nav + interactive mega menu
│       ├── Hero.tsx            # headline + search bar + popular terms
│       ├── Categories.tsx      # stub — service/category cards
│       ├── FeaturedServices.tsx# stub — featured services
│       ├── HowItWorks.tsx      # stub — how it works
│       ├── Faq.tsx             # stub — FAQ (uses Accordion)
│       ├── Cta.tsx             # stub — call to action
│       ├── Footer.tsx          # stub — footer
│       └── index.ts            # barrel: re-exports all sections
├── data/                       # typed mock data per section
│   ├── navigation.ts           # nav items + services mega-menu columns
│   ├── search.ts               # popular searches + autocomplete terms
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
  (Button, Container, SectionHeading, SearchBar, Accordion). Use these anywhere.
- **`components/sections/`** — one component per section of the page. Sections are
  composed together in `App.tsx`, so the page order is defined in one place.
- **`data/`** — keeps mock content in one typed place so components stay clean and
  can swap to real data later.
- **`types/`** — shared interfaces (e.g. `FaqItem`, `Service`) used by both the
  data files and the components.

## Styling foundation

Tailwind is configured in `src/index.css` with the `@theme` block, which defines
Servexa's brand palette and font tokens. These utilities (e.g. `bg-primary`,
`text-muted`, `font-heading`) are used across all sections. A reusable `fade-up`
entrance animation is also defined there.