'use client';

import { useState } from 'react';

import ServicesSubjectToTabs, { ServiceTab } from './ServicesSubjectToTabs';
import ServicesCardsGrid from './ServicesCardsGrid';
import ServicesClassificationSidebar from './ServicesClassificationSidebar';
import SearchFasterSidebar from './SearchFasterSidebar';
import AppStoreBanner from './AppStoreBanner';
import styles from './ServicesPage.module.css';

const {
  page,
  pageHeader,
  layout,
  sidebar,
  main,
  sidebarCards,
  belowCardsMobile,
} = styles;

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<ServiceTab>('social');
  const [activeClassification, setActiveClassification] = useState('all');

  return (
    <div className={page}>
      {/* 1. Full-width tab header */}
      <div className={pageHeader}>
        <ServicesSubjectToTabs activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* 3-col sidebar + 9-col main */}
      <div className={layout}>

        {/* ── Sidebar (3 col) ── */}
        <aside className={sidebar}>
          {/* Classification: visible on all screen sizes */}
          <ServicesClassificationSidebar
            activeId={activeClassification}
            onSelect={setActiveClassification}
          />

          {/* SearchFaster + AppStore: desktop sidebar only — hidden on mobile */}
          <div className={sidebarCards}>
            <SearchFasterSidebar />
            <AppStoreBanner />
          </div>
        </aside>

        {/* ── Main (9 col) ── */}
        <main className={main}>
          <ServicesCardsGrid activeTab={activeTab} />

          {/* SearchFaster + AppStore: mobile only — below cards */}
          <div className={belowCardsMobile}>
            <SearchFasterSidebar />
            <AppStoreBanner />
          </div>
        </main>

      </div>
    </div>
  );
}