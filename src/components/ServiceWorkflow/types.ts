// ─── Shared ───────────────────────────────────────────────────────────────────

export type TabId = "workflow" | "details";

// ─── Sub-shapes used inside ServiceWorkflowData ───────────────────────────────

export interface ServiceWorkflowStep {
  label: string;
  text: string;
  badgeVariant: 'navy' | 'blue' | 'purple' | 'green';
}

export interface ServiceCardDetail {
  title: string;
  cardDescription: string;
  bgColor: string;
  iconUrl: string;
}

export interface ServiceImageItem {
  id: number;
  label: string;
  imageFit: string;
  lightDesktopImageUrl: string;
  lightMobileImageUrl: string;
  darkDesktopImageUrl: string;
  darkMobileImageUrl: string;
}

export interface ServiceTabItem {
  id: number;
  order: number;
  title: string;
  tabId: TabId;
}

export interface RatingData {
  title: string;
  voteCount: number;
  value: number;
  iconUrl: string;
  ratingIconUrl: string;
}

export interface FaqData {
  title: string;
  description: string;
  iconUrl: string;
}

export interface DeliveryChannelData {
  title: string;
  channels: string[];
  iconUrl: string;
}

export interface CustomerServiceData {
  heading: string;
  contacts: { region: string; phone: string }[];
  workingHours: { days: string; hours: string }[];
}

export interface AdvertisementData {
  label: string;
  description: string;
  bgColor: string;
  imageUrl: string;
  storeIcons: { iconUrl: string }[];
}

// ─── API-sourced data shape (mapped from Strapi before passing to components) ──

export interface ServiceWorkflowData {
  title: string;
  serviceDescription: string;
  serviceCardDetails: ServiceCardDetail[];
  serviceImages: ServiceImageItem[];
  tabs: ServiceTabItem[];
  rating: RatingData;
  faq: FaqData;
  deliveryChannels: DeliveryChannelData;
  customerService: CustomerServiceData;
  advertisement: AdvertisementData | null;
  // Not in current JSON — ServiceSteps/ServiceExplanation use their built-in defaults
  steps?: ServiceWorkflowStep[];
  documents?: string[];
  requirements?: string[];
  relatedServices?: { title: string }[];
}

// ─── Component-internal types (not sourced from API) ─────────────────────────

export interface StepItem {
  label: string;
  description: string;
  color: "green" | "purple" | "blue" | "dark";
}

export interface RelatedServiceItem {
  iconSrc: string;
  title: string;
}

export interface SidebarInfoItem {
  iconSrc: string;
  label: string;
  value: string;
}

export interface DeliveryChannel {
  label: string;
}

export interface CustomerServiceContact {
  region: string;
  phone: string;
}

export interface WorkingHour {
  days: string;
  hours: string;
}
