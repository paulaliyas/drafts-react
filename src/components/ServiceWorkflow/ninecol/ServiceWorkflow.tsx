import styles from "./ServiceWorkflow.module.css";

const {
  wrapper,
  tabSection,
  tabBar,
  tabList,
  tabActive,
  tabActiveLabel,
  tabInactive,
  tabInactiveLabel,
  bannerGreen,
  bannerPurple,
  bannerLabel,
  flowchartContainer,
  flowchartImage,
} = styles;

const CONTRIBUTOR_WORKFLOW_IMG = "/assets/workflow-contributor.png";
const EMPLOYER_WORKFLOW_IMG = "/assets/workflow-employer.png";

export default function ServiceWorkflow() {
  return (
    <div className={wrapper}>
      {/* ── Tabs ── */}
      <div className={tabSection}>
        {/* Contributor banner */}
        <div className={bannerGreen}>
          <p className={bannerLabel} dir="auto">
            Workflow (Contributor )
          </p>
        </div>
      </div>

      {/* ── Contributor flowchart ── */}
      <div className={flowchartContainer}>
        <img
          src={CONTRIBUTOR_WORKFLOW_IMG}
          alt="Contributor service workflow diagram"
          className={flowchartImage}
        />
      </div>

      {/* ── Employer banner ── */}
      <div className={bannerPurple}>
        <p className={bannerLabel} dir="auto">
          Workflow (Employer)
        </p>
      </div>

      {/* ── Employer flowchart ── */}
      <div className={flowchartContainer}>
        <img
          src={EMPLOYER_WORKFLOW_IMG}
          alt="Employer service workflow diagram"
          className={flowchartImage}
        />
      </div>
    </div>
  );
}
