import useTranslation from '@/modules/Common/libs/i18n/useTranslation';

import TimelineItem, { TimelineItemProps } from './TimelineItem';
import { works } from '../lib/data/cv';

export default function TimelineExperiencia() {
  const { trans } = useTranslation();
  const experiencesTranslate = trans;
  return (
    <ol className='border-l-2 border-yellow-300'>
      {works[experiencesTranslate].map(
        (item: TimelineItemProps, index: number) => (
          <TimelineItem key={index} {...item} />
        )
      )}
    </ol>
  );
}
