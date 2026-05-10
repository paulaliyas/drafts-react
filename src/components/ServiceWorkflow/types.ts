// ─── Shared prop types ────────────────────────────────────────────────────────

export type TabId = "workflow" | "details";

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
