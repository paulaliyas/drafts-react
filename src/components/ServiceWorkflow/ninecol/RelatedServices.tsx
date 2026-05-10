import type { RelatedServiceItem } from "../types";
import styles from "./RelatedServices.module.css";

const {
  section,
  sectionTitle,
  grid,
  card,
  cardIcon,
  cardTitle,
} = styles;

// ─── Props ────────────────────────────────────────────────────────────────────

interface RelatedServicesProps {
  title?: string;
  services: RelatedServiceItem[];
  onServiceClick?: (service: RelatedServiceItem) => void;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function RelatedServices({
  title = "Related Services",
  services,
  onServiceClick,
}: RelatedServicesProps) {
  return (
    <section className={section}>
      <h2 className={sectionTitle} dir="auto">
        {title}
      </h2>
      <div className={grid}>
        {services.map((service) => (
          <button
            key={service.title}
            className={card}
            onClick={() => onServiceClick?.(service)}
          >
            <div className={cardIcon}>
              <img src={service.iconSrc} alt="" className="absolute inset-0 w-full h-full" />
            </div>
            <p className={cardTitle} dir="auto">
              {service.title}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}
