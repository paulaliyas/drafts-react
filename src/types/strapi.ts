// ── Strapi v5 response envelope ───────────────────────────────────────────────

export interface StrapiListResponse<T> {
  data: T[];
  meta: {
    pagination: { page: number; pageSize: number; pageCount: number; total: number };
  };
}

// ── Shared media ──────────────────────────────────────────────────────────────

export interface StrapiImageFormat {
  url: string;
  width: number;
  height: number;
  ext: string;
  mime: string;
  size: number;
}

export interface StrapiImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  url: string;
  width: number;
  height: number;
  formats: Record<string, StrapiImageFormat> | null;
}

// ── Rich text ─────────────────────────────────────────────────────────────────

export interface StrapiRichTextChild {
  text: string;
  type: string;
}

export interface StrapiRichTextNode {
  type: string;
  children: StrapiRichTextChild[];
}

// ── Responsive image set (service_Image entries) ───────────────────────────────

export interface StrapiResponsiveImageSet {
  id: number;
  label: string;
  imageFit: string;
  lightDesktopImage: StrapiImage;
  lightMobileImage: StrapiImage;
  darkDesktopImage: StrapiImage;
  darkMobileImage: StrapiImage;
}

// ── Service card detail ───────────────────────────────────────────────────────

export interface StrapiServiceCardDetail {
  id: number;
  title: string;
  card_description: string;
  bg_color: string;
  title_color: string | null;
  description_color: string | null;
  icon: StrapiImage[];
}

// ── Tab ───────────────────────────────────────────────────────────────────────

export interface StrapiTabLink {
  id: number;
  label: string | null;
  url: string | null;
  target: string | null;
  isOpen_in_new_window: boolean | null;
}

export interface StrapiTab {
  id: number;
  order: number;
  title: string;
  content: string | null;
  isOpen: boolean;
  isActive: boolean;
  icon: StrapiImage | null;
  link: StrapiTabLink;
}

// ── Rating ────────────────────────────────────────────────────────────────────

export interface StrapiRatting {
  id: number;
  title: string;
  description: string;
  bg_color: string | null;
  Ratting: number;
  icon: StrapiImage;
  rattingIcon: StrapiImage[];
}

// ── FAQ / customisation ───────────────────────────────────────────────────────

export interface StrapiFaq {
  id: number;
  title: string;
  description: string;
  bg_color: string | null;
  target_link: string | null;
  icon: StrapiImage;
}

// ── Share (delivery channels) ─────────────────────────────────────────────────

export interface StrapiShare {
  id: number;
  title: string;
  description: string;
  bg_color: string | null;
  icon: StrapiImage;
}

// ── Contact ───────────────────────────────────────────────────────────────────

export interface StrapiPhoneNumber {
  id: number;
  label: string;
  number: string;
  iconBackground: string | null;
}

export interface StrapiContactLink {
  id: number;
  label: string | null;
  url: string | null;
  target: string | null;
  isOpen_in_new_window: boolean | null;
}

export interface StrapiContect {
  id: number;
  contactHeading: string;
  workingHours: string;
  icon: StrapiImage | null;
  phoneCard: string | null;
  contactUsLink: StrapiContactLink;
  phoneNumbers: StrapiPhoneNumber[];
}

// ── Advertisement ─────────────────────────────────────────────────────────────

export interface StrapiPromotionalBannerItem {
  id: number;
  target: string | null;
  icon: StrapiImage;
}

export interface StrapiAdvertisement {
  id: number;
  label: string;
  description: string;
  bg_color: string;
  lightDesktopImage: StrapiImage;
  lightMobileImage: StrapiImage;
  darkDesktopImage: StrapiImage;
  darkMobileImage: StrapiImage;
  promotionalBanner: StrapiPromotionalBannerItem[];
}

// ── Full page ─────────────────────────────────────────────────────────────────

export interface StrapiPage {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  title: string;
  service_description: StrapiRichTextNode[];
  service_card_details: StrapiServiceCardDetail[];
  service_Image: StrapiResponsiveImageSet[];
  tab: StrapiTab[];
  ratting: StrapiRatting;
  faq: StrapiFaq;
  share: StrapiShare;
  contect: StrapiContect;
  Advertisement: StrapiAdvertisement[];
}
