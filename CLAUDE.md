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

## General Conventions

- Prefer named exports for utilities and hooks; default exports for page/component files
- Use `interface` over `type` for object shapes
- Keep components small and focused — extract sub-components when a component grows beyond ~100 lines
- Co-locate types with the file that owns them unless shared across multiple files