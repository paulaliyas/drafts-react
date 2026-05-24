import type { ServiceImageItem } from "../types";
import styles from "./ServiceWorkflow.module.css";

const {
  wrapper,
  bannerGreen,
  bannerPurple,
  bannerLabel,
  flowchartContainer,
  flowchartImage,
} = styles;

const BANNER_CLASSES = [bannerGreen, bannerPurple];

interface ServiceWorkflowProps {
  serviceImages?: ServiceImageItem[];
}

export default function ServiceWorkflow({ serviceImages }: ServiceWorkflowProps) {
  if (!serviceImages?.length) return null;

  return (
    <div className={wrapper}>
      {serviceImages.map((img, i) => (
        <div key={img.id}>
          <div className={BANNER_CLASSES[i % BANNER_CLASSES.length]}>
            <p className={bannerLabel} dir="auto">
              {img.label}
            </p>
          </div>

          <div className={flowchartContainer}>
            <img
              src={img.lightDesktopImageUrl}
              alt={img.label}
              className={flowchartImage}
              style={{ objectFit: img.imageFit === "fill" ? "fill" : "cover" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
