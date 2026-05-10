# Meridian — Next.js 15 Sample Project

A clean, opinionated Next.js starter with TypeScript, Tailwind v4, and CSS Modules.

## Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind v4 + CSS Modules with `@apply`
- **Fonts**: Google Fonts via `next/font`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with font setup
│   ├── page.tsx            # Home page
│   └── tailwind-global.css # Tailwind v4 config + custom theme
└── components/
    ├── ui/                 # Reusable primitives
    │   ├── Navbar.tsx
    │   ├── Navbar.module.css
    │   ├── Footer.tsx
    │   └── Footer.module.css
    └── sections/           # Page-level sections
        ├── Hero.tsx
        ├── Hero.module.css
        ├── Features.tsx
        └── Features.module.css
```

## CSS Modules Convention

Each component has a co-located `.module.css` file using Tailwind `@apply` directives:

```css
@reference "./tailwind-global.css";

.button {
  @apply px-4 py-2 rounded-full bg-ink text-cream;
}
```

And styles are destructured at the top of the component:

```tsx
import styles from "./Button.module.css";
const { button } = styles;
```
