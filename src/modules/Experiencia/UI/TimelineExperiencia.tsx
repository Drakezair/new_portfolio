import TimelineItem, { TimelineItemProps } from './TimelineItem';
import works from '../lib/data/cv.json';

export default function TimelineExperiencia() {
  return (
    <ol className='border-l-2 border-yellow-300'>
      {works.map((item: TimelineItemProps, index: number) => (
        <TimelineItem key={index} {...item} />
      ))}
    </ol>
  );
}
