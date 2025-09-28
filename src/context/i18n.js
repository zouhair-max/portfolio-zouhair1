// src/context/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import ar from './locales/ar.json';
import fr from './locales/fr.json';

// Détection de la langue du navigateur
const getBrowserLanguage = () => {
  if (typeof window === 'undefined') return 'en';
  
  const browserLang = navigator.language || navigator.userLanguage || 'en';
  return browserLang.split('-')[0];
};

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    lng: getBrowserLanguage() || 'en', // Langue du navigateur
    fallbackLng: 'en',
    resources: {
      en: { translation: en },
      ar: { translation: ar },
      fr: { translation: fr },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;