'use client';

import { useState } from 'react';

import ServicesSubjectToTabs, { ServiceTab } from './ServicesSubjectToTabs';
import ServicesCardsGrid from './ServicesCardsGrid';
import ServicesClassificationSidebar from './ServicesClassificationSidebar';
import ServicesSearchBar from './ServicesSearchBar';
import ServicesFilterBar from './ServicesFilterBar';
import SearchFasterSidebar from './SearchFasterSidebar';
import AppStoreBanner from './AppStoreBanner';
import styles from './ServicesPage.module.css';

const {
  page,
  pageHeader,
  mobileToolbar,
  layout,
  sidebar,
  main,
  desktopToolbar,
  sidebarCards,
  belowCardsMobile,
} = styles;

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<ServiceTab>('social');
  const [activeClassification, setActiveClassification] = useState('all');

  return (
    <div className={page}>
      {/* 1. Tab header — all screen sizes */}
      <div className={pageHeader}>
        <ServicesSubjectToTabs activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* 2. Search + filter — mobile only, between tabs and classification */}
      <div className={mobileToolbar}>
        <ServicesSearchBar />
        <ServicesFilterBar />
      </div>

      {/* 3. Sidebar + main grid */}
      <div className={layout}>

        {/* ── Sidebar (3 col) ── */}
        <aside className={sidebar}>
          <ServicesClassificationSidebar
            activeId={activeClassification}
            onSelect={setActiveClassification}
          />
          <div className={sidebarCards}>
            <SearchFasterSidebar />
            <AppStoreBanner />
          </div>
        </aside>

        {/* ── Main (9 col) ── */}
        <main className={main}>
          {/* Search + filter — desktop only, above cards */}
          <div className={desktopToolbar}>
            <ServicesSearchBar />
            <ServicesFilterBar />
          </div>

          <ServicesCardsGrid activeTab={activeTab} />

          {/* SearchFaster + AppStore — mobile only, below cards */}
          <div className={belowCardsMobile}>
            <SearchFasterSidebar />
            <AppStoreBanner />
          </div>
        </main>

      </div>
    </div>
  );
}
