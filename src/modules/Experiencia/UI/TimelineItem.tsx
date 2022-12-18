import Image from 'next/image';

export interface TimelineItemProps {
  title: string;
  company: string;
  time: string;
  description: string;
  skills: string;
  image: string;
  order: number;
}

export default function TimelineItem({
  title,
  company,
  time,
  description,
  skills,
  image,
}: TimelineItemProps) {
  return (
    <li>
      <div className='flex-start '>
        <div className='-ml-3 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-300 shadow-inner'>
          <svg
            aria-hidden='true'
            focusable='false'
            data-prefix='fas'
            className='h-3 w-3 text-white'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
          >
            <path
              fill='currentColor'
              d='M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z'
            ></path>
          </svg>
        </div>
        <div className='ml-6 mb-10 block max-w-md rounded-lg bg-gray-700 p-6 shadow-lg'>
          <div className='mb-1 flex justify-between'>
            <p className='font-mono text-lg font-medium text-yellow-300 transition duration-300 ease-in-out '>
              {title}
            </p>
            <Image
              className='h-16 w-16 rounded-lg'
              src={image}
              width={60}
              height={60}
              alt={company}
            />
          </div>
          <p className='text-sm font-medium text-yellow-300 transition duration-300 ease-in-out '>
            {company}
          </p>
          <p className='mb-4 text-xs font-extralight text-yellow-300 transition duration-300 ease-in-out '>
            {time}
          </p>
          <p className=' mb-6 font-primary text-white'>{description}</p>
          <p className='font-primary  text-xs text-white'>
            <span className='font-bold'>Skills:</span> {skills}
          </p>
        </div>
      </div>
    </li>
  );
}
