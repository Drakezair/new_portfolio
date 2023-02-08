import Link from 'next/link';

import { Image } from '@/modules/Common/UI';

export interface BlogCardProps {
  image: string;
  title: string;
  id: string;
  description: string;
}

export default function BlogCard({
  image,
  title,
  id,
  description,
}: BlogCardProps) {
  return (
    <div data-testid='blog-card' className='mb-3 text-center lg:mb-0'>
      <div
        className='relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg'
        style={{ backgroundPosition: '50%' }}
        data-mdb-ripple='true'
        data-mdb-ripple-color='light'
      >
        <Image
          src={image}
          className='h-52 w-full'
          alt={title}
          width={394}
          height={394}
        />
        <Link href={`/blog/${id}`}>
          <div
            className='mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed font-primary opacity-0 transition duration-300 ease-in-out hover:opacity-100'
            style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
          ></div>
        </Link>
      </div>

      <h5 className='mb-3 font-mono text-lg font-bold text-white'>{title}</h5>
      <p className='mb-6 font-primary text-gray-500'>{description}</p>
    </div>
  );
}
