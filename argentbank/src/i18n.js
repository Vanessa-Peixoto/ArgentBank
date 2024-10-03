import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './locales/en/translation.json';

// Les traductions pour chaque langue
const resources = {
  en: {
    translation: translationEN,
  },
};

i18n
  // Détecteur de langue (optionnel)
  .use(LanguageDetector)
  // Passer à initReactI18next pour lier avec React
  .use(initReactI18next)
  .init({
    resources, // Les ressources contenant les traductions
    fallbackLng: 'en', // Langue par défaut si la langue détectée n'est pas disponible
    debug: true, // Activer le mode debug (utile pour le développement)
    interpolation: {
      escapeValue: false, // React se charge déjà d'échapper les valeurs
    },
  });

export default i18n;
