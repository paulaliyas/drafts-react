import * as A from "../assets";

import ServiceLevelEvaluation from "./ServiceLevelEvaluation";
import InfoCardTile from "./InfoCardTile";
import ServiceCustomizationCard from "./ServiceCustomizationCard";
import ServiceDeliveryChannels from "./ServiceDeliveryChannels";
import CustomerServiceCard from "./CustomerServiceCard";

import styles from "./ThreeColSection.module.css";

const { sidebar, tilesGrid, fullWidthCard } = styles;

// ─── Static data ──────────────────────────────────────────────────────────────

const INFO_TILES = [
  { iconSrc: A.imgIconUserCircle, label: "Beneficiary category of the service", value: "Contributor" },
  { iconSrc: A.imgIconCalendar,   label: "Service launch date",                  value: "09/01/2024" },
  { iconSrc: A.imgIconGlobe,      label: "Available languages",                  value: "Arabic | English" },
  { iconSrc: A.imgIconMoney,      label: "Service cost",                         value: "Free of charge" },
  { iconSrc: A.imgIconTimer,      label: "Time required to complete the service", value: "Immediate" },
];

const CHANNELS = ["Electronic portal", "Virtual visit"];

const CONTACTS = [
  { region: "Within the Kingdom",  phone: "8001243344" },
  { region: "Outside the Kingdom", phone: "920014000" },
];

const WORKING_HOURS = [
  { days: "Saturday - Thursday", hours: "from 8 AM to 8 PM" },
  { days: "Friday",              hours: "from 2 PM to 8 PM" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ThreeColSection() {
  return (
    <aside className={sidebar}>
      {/* Service Level Evaluation — full width */}
      <div className={fullWidthCard}>
        <ServiceLevelEvaluation
          iconSrc={A.imgIconStar}
          starsSrc={A.imgStarsRating}
          ratingCount={392}
        />
      </div>

      {/* Info tiles — 2-column grid on mobile */}
      <div className={tilesGrid}>
        {INFO_TILES.map((tile) => (
          <InfoCardTile
            key={tile.label}
            iconSrc={tile.iconSrc}
            label={tile.label}
            value={tile.value}
          />
        ))}
      </div>

      {/* Service customisation — full width */}
      <div className={fullWidthCard}>
        <ServiceCustomizationCard
          iconSrc={A.imgIconInfo}
          onLinkClick={() => console.log("FAQ customisation")}
        />
      </div>

      {/* Delivery channels — full width */}
      <div className={fullWidthCard}>
        <ServiceDeliveryChannels
          iconSrc={A.imgIconShareNetwork}
          channels={CHANNELS}
        />
      </div>

      {/* Customer service — full width */}
      <div className={fullWidthCard}>
        <CustomerServiceCard
          iconSrc={A.imgIconChat}
          contacts={CONTACTS}
          workingHours={WORKING_HOURS}
        />
      </div>
    </aside>
  );
}
