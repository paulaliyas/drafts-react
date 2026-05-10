'use client';

import { useState } from 'react';
import styles from './ServicesSubjectToTabs.module.css';

const { wrapper, title, tabBar, tab, tabInactive, tabActive } = styles;

export type ServiceTab = 'social' | 'retirement';

interface ServicesSubjectToTabsProps {
  activeTab?: ServiceTab;
  onTabChange?: (tab: ServiceTab) => void;
}

export default function ServicesSubjectToTabs({
  activeTab = 'social',
  onTabChange,
}: ServicesSubjectToTabsProps) {
  const [internalTab, setInternalTab] = useState<ServiceTab>(activeTab);

  const current = onTabChange ? activeTab : internalTab;

  const handleChange = (t: ServiceTab) => {
    setInternalTab(t);
    onTabChange?.(t);
  };

  return (
    <div className={wrapper}>
      <p className={title} dir="auto">
        Services subject to
      </p>

      <div className={tabBar}>
        <button
          type="button"
          className={`${tab} ${current === 'retirement' ? tabActive : tabInactive}`}
          onClick={() => handleChange('retirement')}
        >
          Civil and military retirement
        </button>
        <button
          type="button"
          className={`${tab} ${current === 'social' ? tabActive : tabInactive}`}
          onClick={() => handleChange('social')}
        >
          Social insurance
        </button>
      </div>
    </div>
  );
}
