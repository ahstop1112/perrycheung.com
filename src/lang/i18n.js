import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import coreEn from './i18n/en/core.json';

const resources = {
  en: {
    core: coreEn,
  },
  // 'zh-CN': {
  //   translation: zhHans,
  // },
  // 'zh-TW': {
  //   translation: zhHant,
  // },
  // 'zh-HK': {
  //   translation: zhHant,
  // },
  // 'zh': {
  //   translation: zhHant,
  // },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',

    ns: ['core'],
    defaultNS: ['core'],
    // if fail to find in specific namespace, will lookup namespaces in order
    fallbackNS: ['core'],

    detection: {
      lookupQuerystring: 'lang',
      order: ['querystring', 'cookie', 'navigator', 'htmlTag'], // default lookup in localStorage which is not preferred
      caches: [], // default cached in localStorage which is not preferred
      checkWhitelist: false,
    },

    // interpolation: {
    //   escapeValue: false, // not needed for react as it escapes by default
    // }
  });

export default i18n;
