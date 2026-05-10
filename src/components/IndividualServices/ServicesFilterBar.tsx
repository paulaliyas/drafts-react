import styles from './ServicesFilterBar.module.css';

const imgSlidersHorizontal =
  'http://localhost:3845/assets/6c839e6f8ce31fe17d72575ebb7ad7fadfd66483.svg';
const imgCaretDown =
  'http://localhost:3845/assets/ab5180cd1c9040bac38d4fd1f187cda4dc7c8c25.svg';

const { filterBar, left, iconWrapper, sliderImg, caretImg, label } = styles;

interface ServicesFilterBarProps {
  onFilterClick?: () => void;
}

export default function ServicesFilterBar({ onFilterClick }: ServicesFilterBarProps) {
  return (
    <button type="button" className={filterBar} onClick={onFilterClick}>
      <div className={left}>
        <div className={iconWrapper}>
          <img alt="" src={imgSlidersHorizontal} className={sliderImg} />
        </div>
        <span className={label} dir="auto">
          Filter by
        </span>
      </div>
      <div className={iconWrapper}>
        <img alt="" src={imgCaretDown} className={caretImg} />
      </div>
    </button>
  );
}
