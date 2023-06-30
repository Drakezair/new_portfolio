import { useRouter } from 'next/router';

import { en, es } from './locales';

export default function useTranslation() {
  const { locale } = useRouter();
  const lng = locale === 'es' ? es : en;

  const t = (value: string): string => lng[value];
  return { t };
}
