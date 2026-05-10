import styles from "./InfoCardTile.module.css";

const { tile, icon, label, value } = styles;

// ─── Props ────────────────────────────────────────────────────────────────────

interface InfoCardTileProps {
  iconSrc: string;
  label: string;
  value: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function InfoCardTile({ iconSrc, label: labelText, value: valueText }: InfoCardTileProps) {
  return (
    <div className={tile}>
      <div className={icon}>
        <img src={iconSrc} alt="" className="absolute inset-0 w-full h-full" />
      </div>
      <p className={label}>{labelText}</p>
      <p className={value}>{valueText}</p>
    </div>
  );
}
