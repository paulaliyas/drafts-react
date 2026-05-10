import styles from "./CustomerServiceCard.module.css";

const {
  tile,
  icon,
  label,
  contactList,
  contactRegion,
  contactPhone,
  hoursBox,
  hoursTitle,
  hoursRow,
} = styles;

// ─── Props ────────────────────────────────────────────────────────────────────

interface ContactEntry {
  region: string;
  phone: string;
}

interface WorkingHour {
  days: string;
  hours: string;
}

interface CustomerServiceCardProps {
  iconSrc: string;
  label?: string;
  contacts: ContactEntry[];
  workingHoursTitle?: string;
  workingHours: WorkingHour[];
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function CustomerServiceCard({
  iconSrc,
  label: labelText = "Customer service",
  contacts,
  workingHoursTitle = "Working hours:",
  workingHours,
}: CustomerServiceCardProps) {
  return (
    <div className={tile}>
      <div className={icon}>
        <img src={iconSrc} alt="" className="absolute inset-0 w-full h-full" />
      </div>
      <p className={label}>{labelText}</p>

      <div className={contactList}>
        {contacts.map((c) => (
          <div key={c.phone}>
            <p className={contactRegion} dir="auto">{c.region}:</p>
            <p className={contactPhone} dir="auto">{c.phone}</p>
          </div>
        ))}
      </div>

      <div className={hoursBox}>
        <p className={hoursTitle} dir="auto">{workingHoursTitle}</p>
        {workingHours.map((h, i) => (
          <p key={i} className={hoursRow} dir="auto">
            {h.days}: {h.hours}
          </p>
        ))}
      </div>
    </div>
  );
}
