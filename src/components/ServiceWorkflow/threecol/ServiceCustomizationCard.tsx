import styles from "./ServiceCustomizationCard.module.css";

const { tile, icon, label, linkText } = styles;

// ─── Props ────────────────────────────────────────────────────────────────────

interface ServiceCustomizationCardProps {
  iconSrc: string;
  label?: string;
  linkText?: string;
  onLinkClick?: () => void;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServiceCustomizationCard({
  iconSrc,
  label: labelText = "Service customisation and preferences",
  linkText: linkContent = "Frequently asked questions about service customisation and preferences",
  onLinkClick,
}: ServiceCustomizationCardProps) {
  return (
    <div className={tile}>
      <div className={icon}>
        <img src={iconSrc} alt="" className="absolute inset-0 w-full h-full" />
      </div>
      <p className={label}>{labelText}</p>
      <button className={linkText} onClick={onLinkClick} dir="auto">
        {linkContent}
      </button>
    </div>
  );
}
