"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeProvider";
import ServiceWorkflow from "../ServiceWorkflow/ServiceWorkflow";
import ServicesPage from "../IndividualServices/ServicesPage";
import type { ServiceCard } from "../IndividualServices/serviceCardsData";
import type { ServiceWorkflowData } from "../ServiceWorkflow/types";
import styles from "./Navbar.module.css";

const {
  wrapper,
  navbar,
  navLeft,
  logoMark,
  logoText,
  navCenter,
  navLink,
  navRight,
  langToggle,
  langOption,
  langActive,
  divider,
  themeToggle,
  themeIcon,
  ctaBtn,
  rtl,
  content,
} = styles;

type Lang = "en" | "ar";
type View = "workflow" | "profile";

interface NavbarProps {
  serviceCards?: ServiceCard[] | null;
  workflowData?: ServiceWorkflowData | null;
}

const navLinks: { label: { en: string; ar: string }; view: View }[] = [
  { label: { en: "Service Workflow", ar: "سير العمل" }, view: "workflow" },
  { label: { en: "Profile", ar: "الملف الشخصي" }, view: "profile" },
];

const copy = {
  en: {
    logoText: "Next JS",
    cta: "Get Started",
  },
  ar: {
    logoText: "نيكسس",
    cta: "ابدأ الآن",
  },
};

export function Navbar({ serviceCards, workflowData }: NavbarProps) {
  const [lang, setLang] = useState<Lang>("en");
  const [view, setView] = useState<View>("workflow");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  }, [lang]);

  const t = copy[lang];
  const isRtl = lang === "ar";

  return (
    <div className={wrapper}>
      {/* Navbar */}
      <nav className={`${navbar} ${isRtl ? rtl : ""}`}>
        {/* Logo */}
        <div className={navLeft}>
          <div className={logoMark}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path
                d="M14 2L26 8V20L14 26L2 20V8L14 2Z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M14 7L21 11V17L14 21L7 17V11L14 7Z"
                fill="currentColor"
                opacity="0.3"
              />
            </svg>
          </div>
          <span className={logoText}>{t.logoText}</span>
        </div>

        {/* Nav Links */}
        <div className={navCenter}>
          {navLinks.map((link) => (
            <button
              key={link.view}
              className={`${navLink} ${view === link.view ? styles.navLinkActive : ""}`}
              onClick={() => setView(link.view)}
            >
              {link.label[lang]}
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className={navRight}>
          {/* Language Toggle */}
          <div className={langToggle}>
            <button
              className={`${langOption} ${lang === "en" ? langActive : ""}`}
              onClick={() => setLang("en")}
              aria-label="Switch to English"
            >
              EN
            </button>
            <span className={divider} />
            <button
              className={`${langOption} ${lang === "ar" ? langActive : ""}`}
              onClick={() => setLang("ar")}
              aria-label="Switch to Arabic"
            >
              AR
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            className={themeToggle}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            <span className={themeIcon}>
              {theme === "light" ? (
                // Moon icon
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                </svg>
              ) : (
                // Sun icon
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </span>
          </button>

        </div>
      </nav>

      {/* Page Content */}
      <div className={content}>
        {view === "workflow" ? <ServiceWorkflow data={workflowData} /> : <ServicesPage serviceCards={serviceCards} />}
      </div>
    </div>
  );
}
