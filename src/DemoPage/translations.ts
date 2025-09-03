import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../shared/Langauges/en.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  keySeparator: '.',
});

export default i18n;
