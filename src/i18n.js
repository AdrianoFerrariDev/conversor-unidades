import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import pt from './locales/pt/translation.json'
import en from './locales/en/translation.json'

const savedLang = localStorage.getItem('lang')

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: pt },
      en: { translation: en },
    },
    lng: savedLang || navigator.language.slice(0,2) || 'pt',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n