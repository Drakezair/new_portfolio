import { useRouter } from 'next/router';

import { en, es } from './locales';

export default function useTranslation() {
  const { locale, pathname, asPath, query, ...router } = useRouter();
  const lng = locale === 'es' ? es : en;
  const trans: 'en' | 'es' = locale === 'es' ? 'es' : 'en';

  const changeLng = (nextLocale: string) =>
    router.push({ pathname, query }, asPath, { locale: nextLocale });

  const t = (value: string): string => lng[value];
  return { t, trans, changeLng };
}
