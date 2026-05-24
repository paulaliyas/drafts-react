"use client";

import type { ServiceWorkflowData } from "./types";
import NineColSection from "./ninecol/NineColSection";
import ThreeColSection from "./threecol/ThreeColSection";
import styles from "./ServiceWorkflow.module.css";

const { layout } = styles;

interface ServiceWorkflowProps {
  data?: ServiceWorkflowData | null;
}

export default function ServiceWorkflow({ data }: ServiceWorkflowProps) {
  return (
    <div className={layout}>
      <NineColSection data={data} />
      <ThreeColSection data={data} />
    </div>
  );
}
