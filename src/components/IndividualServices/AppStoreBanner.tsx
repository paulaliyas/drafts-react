import styles from './AppStoreBanner.module.css';

/* ── Asset URLs from Figma ── */
const imgPhone =
  'http://localhost:3845/assets/ced611bce4a407bd4ceec51916ff2f329d8bc7a8.png';
const imgPhoneDecor =
  'http://localhost:3845/assets/570b11cf0530a623d0baf757260890a9fcd59b26.svg';
const imgGooglePlay =
  'http://localhost:3845/assets/20486cb616b51317b1ec3094de2771220bae082a.svg';
/* App Store is composed of 4 layered image groups from Figma */
const imgAppStoreGroup =
  'http://localhost:3845/assets/4132d919a4d1d1b4009bfee5ce644447b076400c.svg';
const imgHuawei =
  'http://localhost:3845/assets/5b549f36df01a3660b18c7eebbc68157ae5a4ba8.png';

const {
  card,
  phoneBg,
  phoneBgImg,
  phoneHero,
  phoneHeroImg,
  content,
  subtitle,
  heading,
  storeButtons,
  storeBtn,
} = styles;

interface AppStoreBannerProps {
  onGooglePlayClick?: () => void;
  onAppStoreClick?: () => void;
  onHuaweiClick?: () => void;
}

export default function AppStoreBanner({
  onGooglePlayClick,
  onAppStoreClick,
  onHuaweiClick,
}: AppStoreBannerProps) {
  return (
    <div className={card}>
      {/* ── Phone mockup — bottom of card ── */}
      {/* SVG frame decoration */}
      <div className={phoneBg} aria-hidden="true">
        <img alt="" src={imgPhoneDecor} className={phoneBgImg} />
      </div>
      {/* Phone photo */}
      <div className={phoneHero} aria-hidden="true">
        <img alt="GOSI mobile app" src={imgPhone} className={phoneHeroImg} />
      </div>

      {/* ── Text + store buttons — top of card ── */}
      <div className={content}>
        <p className={subtitle} dir="auto">
          Related applications
        </p>
        <p className={heading} dir="auto">
          Enjoy all the services you need now on the app.
        </p>

        <div className={storeButtons}>
          {/* Google Play — Figma renders it with -scaleY(-1) mirror */}
          <button
            type="button"
            className={storeBtn}
            onClick={onGooglePlayClick}
            aria-label="Get it on Google Play"
          >
            <img
              alt="Google Play"
              src={imgHuawei}
              style={{ height: '33px', width: 'auto', display: 'block' }}
            />
          </button>

          {/* App Store */}
          <button
            type="button"
            className={storeBtn}
            onClick={onAppStoreClick}
            aria-label="Download on the App Store"
          >
            <img
              alt="App Store"
              src={imgHuawei}
              style={{ height: '34px', width: 'auto', display: 'block' }}
            />
          </button>

          {/* Huawei AppGallery */}
          <button
            type="button"
            className={storeBtn}
            onClick={onHuaweiClick}
            aria-label="Explore it on Huawei AppGallery"
          >
            <img
              alt="Huawei AppGallery"
              src={imgHuawei}
              style={{ height: '34px', width: 'auto', display: 'block' }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
