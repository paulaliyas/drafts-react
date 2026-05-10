import styles from "./Footer.module.css";

const { footer, brand, copy } = styles;

export function Footer() {
  return (
    <footer className={footer}>
      <span className={brand}>Meridian</span>
      <p className={copy}>© {new Date().getFullYear()} Meridian. Built with Next.js 15.</p>
    </footer>
  );
}
