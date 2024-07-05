import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export const LANG_RESOURCES = {
  en: {
    translation: {
      all_types: 'All',
      more_comments: 'Show more comments',
      at: 'at',
      months: {
        6: 'July',
      },
      posts: {
        404: 'Posts not found',
      },
    },
  },
  ru: {
    translation: {
      all_types: 'Все',
      more_comments: 'Смотреть все комментарии',
      at: 'в',
      months: {
        6: 'Июля',
      },
      posts: {
        404: 'Посты не найдены',
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'ru'],
    resources: LANG_RESOURCES,
    lng: 'ru',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
