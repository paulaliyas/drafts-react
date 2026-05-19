# CLAUDE.md

This file documents conventions and preferences for this project. Claude should follow these guidelines in every response.

---

## Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + CSS Modules

---

## React Component Conventions

### File structure

Each component lives in its own folder with two files:

```
components/
  MyComponent/
    MyComponent.tsx
    MyComponent.module.css
```

### `.module.css` file

- Always include `@reference "#tailwind-global.css"` at the top
- Use Tailwind v4 `@apply` directives for all styles

```css
@reference "#tailwind-global.css";

.container {
  @apply flex flex-col gap-4 p-6;
}

.title {
  @apply text-2xl font-bold text-gray-900;
}
```

### `.tsx` file

- Destructure the `styles` object at the top of the file, **before** the component function
- Use TypeScript with explicit prop interfaces

```tsx
import styles from "./MyComponent.module.css";

const { container, title } = styles;

interface MyComponentProps {
  title: string;
}

export default function MyComponent({ title }: MyComponentProps) {
  return (
    <div className={container}>
      <h1 className={title}>{title}</h1>
    </div>
  );
}
```

---

## Theme System

The project uses a `ThemeProvider` (in `'use client'` context) that toggles a `data-theme` attribute on `<html>` between `"light"` and `"dark"`, and persists the choice to `localStorage` under the key `gosi-theme`.

### Using the theme in components

Access the current theme or the toggle function via the `useTheme` hook:

```tsx
import { useTheme } from '@/context/ThemeProvider';

export default function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Switch to {theme === 'light' ? 'dark' : 'light'}</button>;
}
```

### Writing theme-aware styles in `.module.css`

Use CSS custom properties scoped to `[data-theme]` selectors. Define both light and dark values in the same `.module.css` file. Never hardcode color values directly in `@apply` — use variables instead so that toggling `data-theme` on `<html>` automatically re-styles the component.

```css
@reference "#tailwind-global.css";

/* Light theme tokens (default) */
:root[data-theme="light"] .card,
:root:not([data-theme]) .card {
  --card-bg: theme(colors.white);
  --card-text: theme(colors.gray.900);
  --card-border: theme(colors.gray.200);
}

/* Dark theme tokens */
:root[data-theme="dark"] .card {
  --card-bg: theme(colors.gray.900);
  --card-text: theme(colors.gray.100);
  --card-border: theme(colors.gray.700);
}

.card {
  @apply rounded-xl p-6 border;
  background-color: var(--card-bg);
  color: var(--card-text);
  border-color: var(--card-border);
}
```

### Rules

- Always provide both `[data-theme="light"]` and `[data-theme="dark"]` token blocks in any component that has theme-sensitive colors.
- Include a `:root:not([data-theme])` fallback alongside the light block so components render correctly before hydration.
- Prefer `theme()` over raw hex values when referencing the Tailwind palette inside CSS variable declarations.
- Use `@apply` for structural/layout utilities (spacing, flex, border-radius, typography scale); use `var(--…)` for anything color-related.

---

## General Conventions

- Prefer named exports for utilities and hooks; default exports for page/component files
- Use `interface` over `type` for object shapes
- Keep components small and focused — extract sub-components when a component grows beyond ~100 lines
- Co-locate types with the file that owns them unless shared across multiple files