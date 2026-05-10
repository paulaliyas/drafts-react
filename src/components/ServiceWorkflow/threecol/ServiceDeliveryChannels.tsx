import styles from "./ServiceDeliveryChannels.module.css";

const { tile, icon, label, channelList, channelItem } = styles;

// ─── Props ────────────────────────────────────────────────────────────────────

interface ServiceDeliveryChannelsProps {
  iconSrc: string;
  label?: string;
  channels: string[];
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServiceDeliveryChannels({
  iconSrc,
  label: labelText = "Service delivery channels",
  channels,
}: ServiceDeliveryChannelsProps) {
  return (
    <div className={tile}>
      <div className={icon}>
        <img src={iconSrc} alt="" className="absolute inset-0 w-full h-full" />
      </div>
      <p className={label}>{labelText}</p>
      <ul className={channelList}>
        {channels.map((channel) => (
          <li key={channel} className={channelItem}>
            {channel}
          </li>
        ))}
      </ul>
    </div>
  );
}
