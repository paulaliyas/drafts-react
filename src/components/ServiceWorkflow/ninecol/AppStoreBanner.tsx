"use client";

import styles from "./AppStoreBanner.module.css";

const {
  banner,
  content,
  headings,
  heading: headingClass,
  subheading: subheadingClass,
  storeRow,
  storeItem,
  storeItemFlipped,
  phoneFrame,
  phoneImage,
} = styles;

// ─── Props ────────────────────────────────────────────────────────────────────

interface StoreButton {
  src: string;
  alt: string;
  flip?: boolean;
  href?: string;
}

interface AppStoreBannerProps {
  heading?: string;
  subheading?: string;
  stores: StoreButton[];
  phoneFrameSrc: string;
  phoneImageSrc: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function AppStoreBanner({
  heading = "Related applications",
  subheading = "Enjoy all the services you need on the app now",
  stores,
  phoneFrameSrc,
  phoneImageSrc,
}: AppStoreBannerProps) {
  return (
    <div className={banner}>
      {/* Left: text + store badges */}
      <div className={content}>
        <div className={headings}>
          <p className={headingClass} dir="auto">
            {heading}
          </p>
          <p className={subheadingClass} dir="auto">
            {subheading}
          </p>
        </div>

        <div className={storeRow}>
          {stores.map((store) => (
            <a
              key={store.alt}
              href={store.href ?? "#"}
              className={`${storeItem}`}
              aria-label={store.alt}
            >
              <img src={store.src} alt={store.alt} />
            </a>
          ))}
        </div>
      </div>

      {/* Right: decorative phone frame */}
      <div className={phoneFrame} aria-hidden="true">
        <img
          src={phoneFrameSrc}
          alt=""
          className="absolute inset-0 w-full h-full"
        />
      </div>

      {/* Phone image */}
      <div className={phoneImage} aria-hidden="true">
        <img
          src={phoneImageSrc}
          alt=""
          className="absolute max-w-none"
          style={{
            height: "143.24%",
            left: "-2.9%",
            top: "-7.34%",
            width: "102.9%",
          }}
        />
      </div>
    </div>
  );
}
