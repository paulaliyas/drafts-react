import styles from "./Features.module.css";

const { section, inner, label, heading, grid, card, icon, cardTitle, cardDesc } = styles;

const features = [
  {
    emoji: "⚡",
    title: "Next.js 15 App Router",
    description:
      "Full support for React Server Components, streaming, and the latest App Router conventions.",
  },
  {
    emoji: "🎨",
    title: "Tailwind v4 + CSS Modules",
    description:
      "Utility-first styling with @apply directives in CSS Modules for scoped, maintainable styles.",
  },
  {
    emoji: "🔷",
    title: "TypeScript Strict Mode",
    description:
      "End-to-end type safety with strict TypeScript config and clean path aliases via @/*.",
  },
  {
    emoji: "🗂️",
    title: "Scalable File Structure",
    description:
      "Components organized by type and domain under src/components with co-located styles.",
  },
  {
    emoji: "🔤",
    title: "Google Fonts via next/font",
    description:
      "Zero-layout-shift font loading with Playfair Display and DM Sans — beautiful out of the box.",
  },
  {
    emoji: "🧩",
    title: "Ready to Extend",
    description:
      "Clean separation of UI primitives and page sections — easy to add shadcn/ui, Zustand, tRPC, and more.",
  },
];

export function Features() {
  return (
    <section className={section} id="features">
      <div className={inner}>
        <span className={label}>What&apos;s Included</span>
        <h2 className={heading}>Everything you need to ship</h2>
        <div className={grid}>
          {features.map((f) => (
            <div key={f.title} className={card}>
              <div className={icon}>{f.emoji}</div>
              <h3 className={cardTitle}>{f.title}</h3>
              <p className={cardDesc}>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
