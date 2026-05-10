"use client"; 

import NineColSection from "./ninecol/NineColSection";
import ThreeColSection from "./threecol/ThreeColSection";
import styles from "./ServiceWorkflow.module.css";

const { layout } = styles;

export default function ServiceWorkflow() {
  return (
    <div className={layout}>
      <NineColSection />
      <ThreeColSection />
    </div>
  );
}
