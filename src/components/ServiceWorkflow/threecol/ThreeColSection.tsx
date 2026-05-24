import type { ServiceWorkflowData } from "../types";
import * as A from "../assets";

import ServiceLevelEvaluation from "./ServiceLevelEvaluation";
import InfoCardTile from "./InfoCardTile";
import ServiceCustomizationCard from "./ServiceCustomizationCard";
import ServiceDeliveryChannels from "./ServiceDeliveryChannels";
import CustomerServiceCard from "./CustomerServiceCard";

import styles from "./ThreeColSection.module.css";

const { sidebar, tilesGrid, fullWidthCard } = styles;

interface ThreeColSectionProps {
  data?: ServiceWorkflowData | null;
}

export default function ThreeColSection({ data }: ThreeColSectionProps) {
  const rating       = data?.rating;
  const faq          = data?.faq;
  const delivery     = data?.deliveryChannels;
  const contact      = data?.customerService;
  const cardDetails  = data?.serviceCardDetails ?? [];

  return (
    <aside className={sidebar}>
      <div className={fullWidthCard}>
        <ServiceLevelEvaluation
          iconSrc={rating?.iconUrl || A.imgIconStar}
          starsSrc={rating?.ratingIconUrl || A.imgStarsRating}
          label={rating?.title}
          ratingCount={rating?.voteCount}
        />
      </div>

      <div className={tilesGrid}>
        {cardDetails.map((card) => (
          <InfoCardTile
            key={card.title}
            iconSrc={card.iconUrl}
            label={card.title}
            value={card.cardDescription}
          />
        ))}
      </div>

      <div className={fullWidthCard}>
        <ServiceCustomizationCard
          iconSrc={faq?.iconUrl || A.imgIconInfo}
          label={faq?.title}
          linkText={faq?.description}
          onLinkClick={() => console.log("FAQ customisation")}
        />
      </div>

      <div className={fullWidthCard}>
        <ServiceDeliveryChannels
          iconSrc={delivery?.iconUrl || A.imgIconShareNetwork}
          label={delivery?.title}
          channels={delivery?.channels ?? []}
        />
      </div>

      <div className={fullWidthCard}>
        <CustomerServiceCard
          iconSrc={A.imgIconChat}
          label={contact?.heading}
          contacts={contact?.contacts ?? []}
          workingHours={contact?.workingHours ?? []}
        />
      </div>
    </aside>
  );
}
