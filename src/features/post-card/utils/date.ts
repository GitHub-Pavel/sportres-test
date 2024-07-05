import i18next from '@/shared/constants/i18n.const';

export const getPostDate = (str: string) => {
  const date = new Date(str);

  return `${date.getDay()} ${i18next.t(
    `months.${date.getMonth()}`,
  )}, ${date.getFullYear()} ${i18next.t(
    'at',
  )} ${date.getHours()}:${date.getMinutes()}`;
};
