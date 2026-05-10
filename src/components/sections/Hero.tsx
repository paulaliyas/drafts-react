import styles from "./Hero.module.css";

const {
  section, eyebrow, heading, accent, sub,
  actions, btnPrimary, btnSecondary, badge, dot
} = styles;

export function Hero() {
  return (
    <section className={section}>
      <span className={eyebrow}>Now in Public Beta</span>
      <h1 className={heading}>
        Build something <span className={accent}>remarkable</span>
      </h1>
      <p className={sub}>
        A Next.js 15 starter with TypeScript, Tailwind v4, and CSS Modules —
        crafted for developers who care about the details.
      </p>
      <div className={actions}>
        <a href="#" className={btnPrimary}>Start Building</a>
        <a href="#features" className={btnSecondary}>See Features</a>
      </div>
      <div className={badge}>
        <span className={dot} />
        <span>v0.1.0 — Next.js 15 · React 19 · Tailwind v4</span>
      </div>
    </section>
  );
}
