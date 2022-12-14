import Image from 'next/image';

import { TimelineExperiencia } from '../../UI';

export default function CVsection() {
  return (
    <div className='container mx-auto grid gap-28 px-4 lg:grid-cols-12'>
      <div className='lg:col-span-5'>
        <Image
          width={300}
          height={900}
          className='sticky top-24 w-full rounded-lg'
          src='/images/image_1.png'
          alt='image_stand'
        />
      </div>
      <div className='max-lg:order-first max-lg:flex max-lg:flex-col max-lg:items-center lg:col-span-6 '>
        <TimelineExperiencia />
      </div>
    </div>
  );
}
