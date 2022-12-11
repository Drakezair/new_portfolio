import Image from 'next/image';

export interface BlogCardProps {
  image: string;
  title: string;
  id: string;
}

export default function BlogCard({ image, title }: BlogCardProps) {
  return (
    <div className='mb-12 text-center lg:mb-0'>
      <div
        className='relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg'
        style={{ backgroundPosition: '50%' }}
        data-mdb-ripple='true'
        data-mdb-ripple-color='light'
      >
        <Image
          src={image}
          className='h-52 w-full'
          alt='BBBB'
          width={394}
          height={394}
        />
        <a href='#!'>
          <div
            className='mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed font-primary opacity-0 transition duration-300 ease-in-out hover:opacity-100'
            style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
          ></div>
        </a>
      </div>

      <h5 className='mb-3 text-lg font-bold'>{title}</h5>
      <p className='mb-6 font-primary text-gray-500'>
        <small>Published by Luis Andrade</small>
      </p>
    </div>
  );
}
