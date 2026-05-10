"use client";

import { useState } from "react";

import type { TabId } from "../types";
import * as A from "../assets";

import ServiceTabs from "./ServiceTabs";
import ServiceSteps from "./ServiceSteps";
import ServiceExplanation from "./ServiceExplanation";
import RelatedServices from "./RelatedServices";
import AppStoreBanner from "./AppStoreBanner";

import styles from "./NineColSection.module.css";
import ServiceWorkflow from "./ServiceWorkflow";

const { column, mainCard } = styles;

// ─── Static data (move to props / API if needed) ──────────────────────────────

const TABS = [
  { id: "workflow" as TabId, label: "Service Workflow" },
  { id: "details" as TabId, label: "Service Details" },
];

const STEPS = [
  {
    label: "Step one",
    description: "Agree to the declaration and click Save and Continue.",
    color: "dark" as const,
  },
  {
    label: "Step two",
    description:
      "Specify the duration you wish to cancel, then click on options and select Cancel Subscription Duration.",
    color: "blue" as const,
  },
  {
    label: "Step three",
    description: "Select Contribution",
    color: "purple" as const,
  },
  {
    label: "Step four",
    description: `Click on "Start Service" and log in.`,
    color: "green" as const,
  },
];

const DOCUMENTS = [
  { text: "خطاب رسمي برد الرصيد الدائن" },
  { text: "كشف الحساب البنكي." },
];

const REQUIREMENTS = [
  { text: "أن يكون المتقدم بالطلب يمتلك رصيد قابل للاسترداد." },
  {
    text: "ان يكون المشترك لديه حساب آيبان مسجل ونشيط لدى التأمينات الاجتماعية.",
  },
  { text: "اختيار التعطل عن العمل (ساند) والنقر على استئناف الصرف." },
  {
    text: "ان يكون المشترك لديه حساب آيبان مسجل ونشيط لدى التأمينات الاجتماعية.",
  },
];

const RELATED_SERVICES = [
  {
    iconSrc: A.imgIconCertificate,
    title: "Issuance of Contirbution Duration Certificate",
  },
  {
    iconSrc: A.imgIconPencilSlash,
    title: "Modify Active Member Contirbution Duration",
  },
  { iconSrc: A.imgIconCheckSquare, title: "Verify Employment Status" },
];

const STORE_BUTTONS = [
  { src: A.imgGooglePlay, alt: "Google Play", flip: true },
  { src: A.imgAppStore, alt: "App Store" },
  { src: A.imgHuawei, alt: "Huawei AppGallery" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function NineColSection() {
  const [activeTab, setActiveTab] = useState<TabId>("workflow");

  return (
    <div className={column}>
      {/* ── Card: Tabs + Service Steps + Service Explanation + Related Services ── */}
      <div className={mainCard}>
        {/* Tab navigation */}
        <ServiceTabs
          tabs={TABS}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {activeTab === "workflow" && (
          <>
            {/* Service steps */}
            <ServiceSteps />

            {/* Service explanation, docs, requirements, CTAs */}
            <ServiceExplanation
              videoThumbnailSrc={A.imgRectangle34625447}
              playButtonSrc={A.imgPlayButton}
              docsIconSrc={A.imgIconPaperclip}
              documents={DOCUMENTS}
              requirementsIconSrc={A.imgIconPath}
              requirements={REQUIREMENTS}
              downloadBadgeSrc={A.imgIconDownloadBadge}
              downloadArrowSrc={A.imgIconDownloadArrow}
              faqIconSrc={A.imgIconQuestion}
              faqLinkIconSrc={A.imgIconExternalLink}
            />

            {/* Related services */}
            <RelatedServices services={RELATED_SERVICES} />
          </>
        )}

        {activeTab === "details" && (
          <div className="py-8 text-white text-center w-full">
            <ServiceWorkflow/>
          </div>
        )}
      </div>

      {/* ── App store banner (outside card) ── */}
      <AppStoreBanner
        stores={STORE_BUTTONS}
        phoneFrameSrc={A.imgPhoneFrame}
        phoneImageSrc={A.imgHandAndIPhone16Pro}
      />
    </div>
  );
}
