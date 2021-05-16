// ! This config file is shared accross both 'backend' and 'frontend'

// * i18n: The languages we support
export const languages = [
  { name: 'en_GB', title: 'English (UK)', lang: '', path: '/' },
  { name: 'no', title: 'Norwegian', lang: 'no', path: '/no/' },
];
export const baseLanguage = languages[0];

// * Date formatting
export const fullDateFormat = 'EEEE, LLLL dd, yyyy'; // Norway and UK
export const monthFormat = 'dd/MM/yyyy'; // Norway and UK
export const monthFormatUs = 'MM/dd/yyyy'; // US, for when that time comes
