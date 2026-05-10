'use client';

import { useMemo } from 'react';
import ServicesSearchBar from './ServicesSearchBar';
import ServicesFilterBar from './ServicesFilterBar';
import { cardsByTab, type ServiceCard } from './serviceCardsData';
import type { ServiceTab } from './ServicesSubjectToTabs';
import styles from './ServicesCardsGrid.module.css';

const {
  toolbar,
  grid,
  card,
  iconWrapper,
  iconImg,
  cardLabel,
  avatarFrame,
  avatarImg,
} = styles;

interface ServicesCardsGridProps {
  activeTab?: ServiceTab;
  onCardClick?: (id: string) => void;
  onFilterClick?: () => void;
}

export default function ServicesCardsGrid({
  activeTab = 'social',
  onCardClick,
  onFilterClick,
}: ServicesCardsGridProps) {
  // Derive the correct card list whenever the active tab changes
  const cards: ServiceCard[] = useMemo(() => cardsByTab[activeTab], [activeTab]);

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Toolbar: search + filter */}
      <div className={toolbar}>
        <ServicesSearchBar />
        <ServicesFilterBar onFilterClick={onFilterClick} />
      </div>

      {/* Cards grid — re-renders with new cards when tab changes */}
      <div className={grid}>
        {cards.map((item) => (
          <button
            key={item.id}
            type="button"
            className={card}
            onClick={() => onCardClick?.(item.id)}
          >
            {item.isAvatar ? (
              <div className={avatarFrame}>
                <img alt="Secretary" src={item.icon} className={avatarImg} />
              </div>
            ) : (
              <div className={iconWrapper}>
                <img
                  alt=""
                  src={item.icon}
                  className={iconImg}
                  style={item.iconInset ? { inset: item.iconInset } : undefined}
                />
              </div>
            )}
            <p className={cardLabel} dir="auto">
              {item.label}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}