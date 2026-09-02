# Servexa: Frontend Developer Assessment

A responsive service platform homepage built as part of the Frontend Developer practical assessment for Web InfoTech Nepal.

## Live Demo

https://web-infotech-frontend-assessment.vercel.app/

## Screenshots

![Screenshot 1](public/screenshot-1.png)
![Screenshot 2](public/screenshot-2.png)
![Screenshot 3](public/screenshot-3.png)
![Screenshot 4](public/screenshot-4.png)
![Screenshot 5](public/screenshot-5.png)
![Screenshot 6](public/screenshot-6.png)

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Lucide React

## Features

- Responsive header and navigation
- Services mega menu
- Mobile navigation
- Hero section with service search
- Search autocomplete
- Service categories
- Featured service cards
- How It Works section
- FAQ accordion
- Call-to-action section
- Responsive footer
- Desktop, tablet, and mobile layouts

## Project Structure

```
src/
├── components/
│   ├── sections/
│   │   ├── Header
│   │   ├── Hero
│   │   ├── Categories
│   │   ├── FeaturedServices
│   │   ├── HowItWorks
│   │   ├── Faq
│   │   ├── Cta
│   │   └── Footer
│   │
│   └── ui/
│       ├── Accordion
│       ├── Button
│       ├── Container
│       ├── SearchBar
│       └── SectionHeading
│
├── data/
└── App.tsx
```

## Technical Approach

The page is built using reusable React components, with shared UI elements separated from page-specific sections.

Content such as services, navigation items, FAQs, and footer links is kept in separate data files to make the components easier to maintain and update.

Tailwind CSS is used for responsive layouts and styling across desktop, tablet, and mobile breakpoints.

The page includes interactive functionality such as service search with autocomplete, mobile navigation, and an expandable FAQ accordion.

The assessment uses static/local data and does not require a backend or external API.

## Running Locally

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Assessment

Built for the Web InfoTech Nepal Frontend Developer practical assessment.
