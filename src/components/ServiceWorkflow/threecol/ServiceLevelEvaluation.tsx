import styles from "./ServiceLevelEvaluation.module.css";

const { tile, icon, label, starsWrap, ratingCount } = styles;

// ─── Props ────────────────────────────────────────────────────────────────────

interface ServiceLevelEvaluationProps {
  iconSrc: string;
  starsSrc: string;
  label?: string;
  ratingCount?: number;
  ratingLabel?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServiceLevelEvaluation({
  iconSrc,
  starsSrc,
  label: labelText = "Service Level Evaluation",
  ratingCount: count = 392,
  ratingLabel = "number of votes",
}: ServiceLevelEvaluationProps) {
  return (
    <div className={tile}>
      <div className={icon}>
        <img src={iconSrc} alt="" className="absolute inset-0 w-full h-full" />
      </div>
      <p className={label}>{labelText}</p>
      <div className={starsWrap}>
        <img src={starsSrc} alt={`${count} star rating`} className="absolute inset-0 w-full h-full" />
      </div>
      <p className={ratingCount}>
        Rating: {count} ({ratingLabel})
      </p>
    </div>
  );
}
