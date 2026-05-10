import styles from './ServicesSearchBar.module.css';

const imgMagnifyingGlass =
  'http://localhost:3845/assets/24f5b835d030df39c405fad7c762cbe524d81789.svg';

const { searchField, iconWrapper, iconImg, placeholder } = styles;

interface ServicesSearchBarProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholderText?: string;
}

export default function ServicesSearchBar({
  value,
  onChange,
  placeholderText = 'Search',
}: ServicesSearchBarProps) {
  return (
    <div className={searchField}>
      {onChange ? (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholderText}
          className="flex-1 bg-transparent outline-none min-w-0 text-right"
          style={{
            fontFamily: "'Ping AR + LT', sans-serif",
            fontSize: '15px',
            lineHeight: '22px',
            color: 'var(--text-primary)',
          }}
        />
      ) : (
        <p className={placeholder}>{placeholderText}</p>
      )}
      <div className={iconWrapper}>
        <img alt="" src={imgMagnifyingGlass} className={iconImg} />
      </div>
    </div>
  );
}
