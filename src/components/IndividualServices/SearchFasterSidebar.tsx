import styles from './SearchFasterSidebar.module.css';

const imgBgDecor =
  'http://localhost:3845/assets/adb58c982195257914d6226865d8cfbd2d93cb41.svg';
const imgEllipse =
  'http://localhost:3845/assets/6a8704ff8d23b3bff9aa835ddf5820f0b79bee72.svg';
const imgMagnifyingGlass =
  'http://localhost:3845/assets/c455f0b3f549ab181e7d26821ad8ae1340640802.svg';
const imgArrowLeft =
  'http://localhost:3845/assets/84c4dccc2e2046c036c620a61df1104c5ac1a3ce.svg';

const {
  card,
  bgDecor,
  inner,
  iconStack,
  ellipseImg,
  magnifyWrapper,
  magnifyImg,
  textBlock,
  textSmall,
  textLarge,
  btn,
  btnIconWrapper,
  btnIconImg,
  btnLabel,
} = styles;

interface SearchFasterSidebarProps {
  onSearchClick?: () => void;
}

export default function SearchFasterSidebar({
  onSearchClick,
}: SearchFasterSidebarProps) {
  return (
    <div className={card}>
      {/* SVG background decoration */}
      <img alt="" src={imgBgDecor} className={bgDecor} aria-hidden="true" />

      <div className={inner}>
        {/* Icon: ellipse circle + centred magnifying glass */}
        <div className={iconStack}>
          <img alt="" src={imgEllipse} className={ellipseImg} aria-hidden="true" />
          <div className={magnifyWrapper}>
            <img
              alt=""
              src={imgMagnifyingGlass}
              className={magnifyImg}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Heading */}
        <div className={textBlock}>
          <p className={textSmall} dir="auto">
            Search for a service
          </p>
          <p className={textLarge} dir="auto">
            Looking for a specific service?
          </p>
        </div>

        {/* CTA */}
        <button type="button" className={btn} onClick={onSearchClick}>
          <div className={btnIconWrapper}>
            <img alt="" src={imgArrowLeft} className={btnIconImg} aria-hidden="true" />
          </div>
          <span className={btnLabel}>Search for a service faster</span>
        </button>
      </div>
    </div>
  );
}
