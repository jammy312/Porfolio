// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importation des fichiers de traduction
import translationEN from './i18n/en/translation.json';
import translationFR from './i18n/fr/translation.json';

// Les ressources de traduction
const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr', // Langue par défaut
    fallbackLng: 'en', // Langue de secours

    interpolation: {
      escapeValue: false, // React s'occupe déjà de l'échappement
    },
  });

export default i18n;
