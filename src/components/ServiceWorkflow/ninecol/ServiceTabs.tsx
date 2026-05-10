import type { TabId } from "../types";
import styles from "./ServiceTabs.module.css";

const { tabBar, tab, tabIsActive } = styles;

// ─── Props ────────────────────────────────────────────────────────────────────

interface Tab {
  id: TabId;
  label: string;
}

interface ServiceTabsProps {
  tabs: Tab[];
  activeTab: TabId;
  onTabChange: (id: TabId) => void;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServiceTabs({
  tabs,
  activeTab,
  onTabChange,
}: ServiceTabsProps) {
  return (
    <nav className={tabBar} role="tablist">
      {tabs.map((t) => (
        <button
          key={t.id}
          role="tab"
          aria-selected={activeTab === t.id}
          className={`${tab} ${activeTab === t.id ? tabIsActive : ""}`}
          onClick={() => onTabChange(t.id)}
        >
          {t.label}
        </button>
      ))}
    </nav>
  );
}
