'use client';

import { useState } from 'react';
import styles from './ServicesClassificationSidebar.module.css';

const { card, title, list, item, itemActive, itemInactive } = styles;

type ClassificationItem = {
  id: string;
  label: string;
};

const defaultItems: ClassificationItem[] = [
  { id: 'all', label: 'All services' },
  { id: 'contributor', label: 'Contributor' },
  { id: 'vsb-contributor', label: 'VSB Conitbutor' },
  { id: 'pensioner', label: 'Pensioner' },
  { id: 'sand', label: 'Sand' },
  { id: 'occupational-hazard', label: 'Occupational Hazard' },
  { id: 'heir', label: 'Heir' },
  { id: 'prisoners-family', label: "Prisoner's family" },
  { id: 'elderly', label: 'Elderly' },
  { id: 'disabilities', label: 'People with disabilities' },
  { id: 'women', label: 'Women or female' },
  { id: 'youth', label: 'Youth' },
];

interface ServicesClassificationSidebarProps {
  items?: ClassificationItem[];
  activeId?: string;
  onSelect?: (id: string) => void;
}

export default function ServicesClassificationSidebar({
  items = defaultItems,
  activeId,
  onSelect,
}: ServicesClassificationSidebarProps) {
  const [internalActive, setInternalActive] = useState(items[0]?.id ?? '');

  const current = onSelect ? (activeId ?? internalActive) : internalActive;

  const handleSelect = (id: string) => {
    setInternalActive(id);
    onSelect?.(id);
  };

  return (
    <div className={card}>
      <p className={title}>Services by classification</p>
      <ul className={list} role="listbox">
        {items.map((classification) => (
          <li
            key={classification.id}
            role="option"
            aria-selected={current === classification.id}
          >
            <button
              type="button"
              className={`${item} ${current === classification.id ? itemActive : itemInactive}`}
              onClick={() => handleSelect(classification.id)}
            >
              {classification.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}