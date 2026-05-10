"use client";

import React from "react";
import styles from "./ServiceSteps.module.css";

const {
  section,
  sectionHeader,
  slaBtn,
  slaIcon,
  stepsRow,
  stepCard,
  badge,
  badgeNavy,
  badgeBlue,
  badgePurple,
  badgeGreen,
  badgeText,
  cardBody,
  connector,
  connectorVertical,
  dividerRow,
  dividerLine,
  startBtn,
} = styles;

// ─── Types ────────────────────────────────────────────────────────────────────

type BadgeVariant = "navy" | "blue" | "purple" | "green";

interface Step {
  label: string;
  text: string;
  badgeVariant: BadgeVariant;
}

interface ServiceStepsProps {
  title?: string;
  steps?: Step[];
  slaIconSrc?: string;
  onStartService?: () => void;
  onSlaClick?: () => void;
}

// ─── Badge variant map ────────────────────────────────────────────────────────

const badgeVariantClass: Record<BadgeVariant, string> = {
  navy: badgeNavy,
  blue: badgeBlue,
  purple: badgePurple,
  green: badgeGreen,
};

// ─── Default steps ────────────────────────────────────────────────────────────

const defaultSteps: Step[] = [
  {
    label: "Step one",
    text: "Agree to the declaration and click Save and Continue.",
    badgeVariant: "navy",
  },
  {
    label: "Step two",
    text: "Specify the duration you wish to cancel, then click on options.",
    badgeVariant: "blue",
  },
  {
    label: "Step three",
    text: "Select Contribution",
    badgeVariant: "purple",
  },
  {
    label: "Step four",
    text: `Click on "Start Service" and log in.`,
    badgeVariant: "green",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServiceSteps({
  title = "Service Steps",
  steps = defaultSteps,
  slaIconSrc,
  onStartService,
  onSlaClick,
}: ServiceStepsProps) {
  return (
    <div className={section}>
      {/* Header */}
      <div className={sectionHeader}>
        <p dir="auto">{title}</p>
        <button className={slaBtn} onClick={onSlaClick} aria-label="View SLA">
          <span>SLA</span>
          {slaIconSrc && (
            <img src={slaIconSrc} alt="" className={slaIcon} />
          )}
        </button>
      </div>

      {/* Steps */}
      <div className={stepsRow}>
        {steps.map((step, index) => (
          <React.Fragment key={step.label}>
            <div className={stepCard}>
              <div className={`${badge} ${badgeVariantClass[step.badgeVariant]}`}>
                <span className={badgeText}>{step.label}</span>
              </div>
              <p className={cardBody}>{step.text}</p>
            </div>

            {index < steps.length - 1 && (
              <>
                {/* Desktop horizontal connector */}
                <div className={connector} aria-hidden="true" />
                {/* Mobile vertical connector */}
                <div className={connectorVertical} aria-hidden="true" />
              </>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Divider + CTA */}
      <div className={dividerRow}>
        <div className={dividerLine} aria-hidden="true" />
        <button className={startBtn} onClick={onStartService}>
          Start Service
        </button>
      </div>
    </div>
  );
}
