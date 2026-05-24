"use client";

import { useState } from "react";

import type { TabId, ServiceWorkflowData } from "../types";
import * as A from "../assets";

import ServiceTabs from "./ServiceTabs";
import ServiceSteps from "./ServiceSteps";
import ServiceExplanation from "./ServiceExplanation";
import RelatedServices from "./RelatedServices";
import AppStoreBanner from "./AppStoreBanner";
import ServiceWorkflow from "./ServiceWorkflow";

import styles from "./NineColSection.module.css";

const { column, mainCard } = styles;

const RELATED_SERVICE_ICONS = [
  A.imgIconCertificate,
  A.imgIconPencilSlash,
  A.imgIconCheckSquare,
];

interface NineColSectionProps {
  data?: ServiceWorkflowData | null;
}

export default function NineColSection({ data }: NineColSectionProps) {
  const tabs = data?.tabs ?? [
    { id: 1, order: 1, title: "Service Workflow", tabId: "workflow" as TabId },
    { id: 2, order: 2, title: "Service Details",  tabId: "details"  as TabId },
  ];

  const [activeTab, setActiveTab] = useState<TabId>(tabs[0]?.tabId ?? "workflow");

  const steps = data?.steps ?? undefined;
  const documents    = data?.documents?.map((text) => ({ text })) ?? [];
  const requirements = data?.requirements?.map((text) => ({ text })) ?? [];
  const relatedServices = data?.relatedServices?.map((rs, i) => ({
    iconSrc: RELATED_SERVICE_ICONS[i % RELATED_SERVICE_ICONS.length],
    title: rs.title,
  })) ?? [];

  const ad = data?.advertisement;
  const storeButtons = ad?.storeIcons.map((s) => ({ src: s.iconUrl, alt: "Download" }))
    ?? [{ src: A.imgGooglePlay, alt: "Google Play" }, { src: A.imgAppStore, alt: "App Store" }];

  return (
    <div className={column}>
      <div className={mainCard}>
        <ServiceTabs
          tabs={tabs.map((t) => ({ id: t.tabId, label: t.title }))}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {activeTab === "workflow" && (
          <>
            <ServiceSteps steps={steps} />

            <ServiceExplanation
              videoThumbnailSrc={A.imgRectangle34625447}
              playButtonSrc={A.imgPlayButton}
              docsIconSrc={A.imgIconPaperclip}
              documents={documents}
              requirementsIconSrc={A.imgIconPath}
              requirements={requirements}
              downloadBadgeSrc={A.imgIconDownloadBadge}
              downloadArrowSrc={A.imgIconDownloadArrow}
              faqIconSrc={A.imgIconQuestion}
              faqLinkIconSrc={A.imgIconExternalLink}
            />

            <RelatedServices services={relatedServices} />
          </>
        )}

        {activeTab === "details" && (
          <ServiceWorkflow serviceImages={data?.serviceImages} />
        )}
      </div>

      <AppStoreBanner
        heading={ad?.label}
        subheading={ad?.description}
        stores={storeButtons}
        phoneFrameSrc={A.imgPhoneFrame}
        phoneImageSrc={ad?.imageUrl || A.imgHandAndIPhone16Pro}
      />
    </div>
  );
}
