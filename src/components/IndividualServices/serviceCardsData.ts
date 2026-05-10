export type ServiceCard = {
  id: string;
  label: string;
  icon: string;
  iconInset?: string;
  isAvatar?: boolean;
};

const imgAvatar =
  'http://localhost:3845/assets/6c7b3d104b50d0362679eb38eadfeb4af7f10694.png';
const imgSealCheck =
  'http://localhost:3845/assets/295d139fc1235027e931c57c92a4cf5f9b2317be.svg';
const imgFileVideo =
  'http://localhost:3845/assets/37799d18aeb54fb8116c4fcefffbec24683e8e04.svg';
const imgUserCircle =
  'http://localhost:3845/assets/22513993e0d83d387a1da3b42146966338365ce3.svg';
const imgCertificate =
  'http://localhost:3845/assets/e117bd02f8f29659c3e94409db452f3bc6b2ed34.svg';
const imgCalendar =
  'http://localhost:3845/assets/a30a23ae6c0cc47027e24a61878191e1a6dfae46.svg';
const imgScroll =
  'http://localhost:3845/assets/91452ac9017ff3ad5b0eced0d95c23fa77df9020.svg';
const imgUserPlus =
  'http://localhost:3845/assets/e2defda6aaf1ccbb6ebc1eb921a0557f16d4cd95.svg';

// ─────────────────────────────────────────────
// Social Insurance cards
// ─────────────────────────────────────────────
export const socialInsuranceCards: ServiceCard[] = [
  {
    id: 'si-book-appointment',
    label: 'Book an appointment',
    icon: imgUserCircle,
    iconInset: '9.38% 9.38% 9.37% 9.37%',
  },
  {
    id: 'si-virtual-visit',
    label: 'Virtual visit',
    icon: imgFileVideo,
    iconInset: '9.37% 15.63% 9.38% 12.5%',
  },
  {
    id: 'si-ask-secretary',
    label: 'Ask the secretary',
    icon: imgAvatar,
    isAvatar: true,
  },
  {
    id: 'si-issue-subscription-cert',
    label: 'Issue subscription certificate',
    icon: imgCertificate,
    iconInset: '15.63% 3.12% 9.37% 9.38%',
  },
  {
    id: 'si-issue-wage-cert',
    label: 'Issue wage certificate',
    icon: imgCertificate,
    iconInset: '15.63% 3.12% 9.37% 9.38%',
  },
  {
    id: 'si-verify-employment',
    label: 'Verify employment status',
    icon: imgSealCheck,
    iconInset: '6.25%',
  },
  {
    id: 'si-register-subscriber',
    label: 'Register optional subscriber',
    icon: imgUserPlus,
    iconInset: '12.48% 0 18.75% 6.25%',
  },
  {
    id: 'si-withdraw-merger',
    label: 'Withdraw merger request',
    icon: imgScroll,
    iconInset: '12.5% 9.38% 12.5% 3.13%',
  },
  {
    id: 'si-add-subscription-period',
    label: 'Add subscription period retroactively',
    icon: imgCalendar,
    iconInset: '6.25% 12.5% 12.5% 12.5%',
  },
];

// ─────────────────────────────────────────────
// Civil & Military Retirement cards
// ─────────────────────────────────────────────
export const retirementCards: ServiceCard[] = [
  {
    id: 'ret-book-appointment',
    label: 'Book an appointment',
    icon: imgUserCircle,
    iconInset: '9.38% 9.38% 9.37% 9.37%',
  },
  {
    id: 'ret-virtual-visit',
    label: 'Virtual visit',
    icon: imgFileVideo,
    iconInset: '9.37% 15.63% 9.38% 12.5%',
  },
  {
    id: 'ret-ask-secretary',
    label: 'Ask the secretary',
    icon: imgAvatar,
    isAvatar: true,
  },
  {
    id: 'ret-issue-pension-cert',
    label: 'Issue pension certificate',
    icon: imgCertificate,
    iconInset: '15.63% 3.12% 9.37% 9.38%',
  },
  {
    id: 'ret-issue-service-cert',
    label: 'Issue service period certificate',
    icon: imgCertificate,
    iconInset: '15.63% 3.12% 9.37% 9.38%',
  },
  {
    id: 'ret-verify-retirement-status',
    label: 'Verify retirement status',
    icon: imgSealCheck,
    iconInset: '6.25%',
  },
  {
    id: 'ret-update-pension-beneficiary',
    label: 'Update pension beneficiary',
    icon: imgUserPlus,
    iconInset: '12.48% 0 18.75% 6.25%',
  },
  {
    id: 'ret-appeal-pension',
    label: 'Appeal pension decision',
    icon: imgScroll,
    iconInset: '12.5% 9.38% 12.5% 3.13%',
  },
  {
    id: 'ret-schedule-pension-review',
    label: 'Schedule pension review',
    icon: imgCalendar,
    iconInset: '6.25% 12.5% 12.5% 12.5%',
  },
];

// ─────────────────────────────────────────────
// Lookup map: tab key → cards
// ─────────────────────────────────────────────
export const cardsByTab = {
  social: socialInsuranceCards,
  retirement: retirementCards,
} as const;
