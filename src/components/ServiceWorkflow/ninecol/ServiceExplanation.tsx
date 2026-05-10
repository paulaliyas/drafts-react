import styles from "./ServiceExplanation.module.css";

const {
  section,
  videoBlock,
  videoOverlay,
  videoTitle,
  playBtn,
  infoCard,
  infoCardHeader,
  infoCardIcon,
  infoCardHeading,
  infoList,
  ctaRow,
  ctaDownloadCard,
  ctaDownloadTop,
  ctaDownloadBadge,
  ctaDownloadText,
  ctaLinkBtn,
  ctaLinkIcon,
  ctaFaqCard,
  ctaFaqTop,
  ctaFaqIcon,
  ctaFaqTextGroup,
  ctaFaqTitle,
  ctaFaqSubtitle,
} = styles;

// ─── Props ────────────────────────────────────────────────────────────────────

interface DocumentItem {
  text: string;
}

interface RequirementItem {
  text: string;
}

interface ServiceExplanationProps {
  videoThumbnailSrc: string;
  playButtonSrc: string;
  videoTitle?: string;

  docsHeading?: string;
  docsIconSrc: string;
  documents: DocumentItem[];

  requirementsHeading?: string;
  requirementsIconSrc: string;
  requirements: RequirementItem[];

  downloadBadgeSrc: string;
  downloadArrowSrc: string;
  downloadText?: string;
  downloadLinkLabel?: string;
  onDownload?: () => void;

  faqIconSrc: string;
  faqLinkIconSrc: string;
  faqTitle?: string;
  faqSubtitle?: string;
  faqLinkLabel?: string;
  onFaqClick?: () => void;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServiceExplanation({
  videoThumbnailSrc,
  playButtonSrc,
  videoTitle = "Service explanation",

  docsHeading = "Required documents for application:",
  docsIconSrc,
  documents,

  requirementsHeading = "Service requirements:",
  requirementsIconSrc,
  requirements,

  downloadBadgeSrc,
  downloadArrowSrc,
  downloadText = "Need more information? Download the user guide",
  downloadLinkLabel = "Download",
  onDownload,

  faqIconSrc,
  faqLinkIconSrc,
  faqTitle = "Need help?",
  faqSubtitle = "View frequently asked questions",
  faqLinkLabel = "View more",
  onFaqClick,
}: ServiceExplanationProps) {
  return (
    <div className={section}>
      {/* Video block */}
      <div className={videoBlock}>
        <img
          src={videoThumbnailSrc}
          alt={videoTitle}
          className="absolute inset-0 w-full h-full object-cover rounded-3xl pointer-events-none"
        />
        <div className={videoOverlay} />
        <p className={videoTitle_} dir="auto">
          {videoTitle}
        </p>
        <button className={playBtn} aria-label="Play video">
          <img src={playButtonSrc} alt="" className="w-full h-full" />
        </button>
      </div>

      {/* Required documents card */}
      <div className={infoCard}>
        <div className={infoCardHeader}>
          <div className={infoCardIcon}>
            <img
              src={docsIconSrc}
              alt=""
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <h3 className={infoCardHeading} dir="auto">
            {docsHeading}
          </h3>
        </div>
        <ul className={infoList}>
          {documents.map((doc, i) => (
            <li key={i}>{doc.text}</li>
          ))}
        </ul>
      </div>

      {/* Service requirements card */}
      <div className={infoCard}>
        <div className={infoCardHeader}>
          <div className={infoCardIcon}>
            <img
              src={requirementsIconSrc}
              alt=""
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <h3 className={infoCardHeading} dir="auto">
            {requirementsHeading}
          </h3>
        </div>
        <ul className={infoList}>
          {requirements.map((req, i) => (
            <li key={i}>{req.text}</li>
          ))}
        </ul>
      </div>

      {/* CTA row */}
      <div className={ctaRow}>
        {/* Download guide card */}
        <div className={ctaDownloadCard}>
          <div className={ctaDownloadTop}>
            <img src={downloadBadgeSrc} alt="" className={ctaDownloadBadge} />
            <p className={ctaDownloadText} dir="auto">
              {downloadText}
            </p>
          </div>
          <button className={ctaLinkBtn} onClick={onDownload}>
            <img src={downloadArrowSrc} alt="" className={ctaLinkIcon} />
            <span>{downloadLinkLabel}</span>
          </button>
        </div>

        {/* FAQ card */}
        <div className={ctaFaqCard}>
          <div className={ctaFaqTop}>
            <img src={faqIconSrc} alt="" className={ctaFaqIcon} />
            <div className={ctaFaqTextGroup}>
              <p className={ctaFaqTitle} dir="auto">
                {faqTitle}
              </p>
              <p className={ctaFaqSubtitle} dir="auto">
                {faqSubtitle}
              </p>
            </div>
          </div>
          <button className={ctaLinkBtn} onClick={onFaqClick}>
            <img src={faqLinkIconSrc} alt="" className={ctaLinkIcon} />
            <span className="text-[#00004e]">{faqLinkLabel}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// alias to avoid name collision with the prop
const videoTitle_ = styles.videoTitle;
