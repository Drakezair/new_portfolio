import Link from 'next/link';

import { Image } from '@/modules/Common/UI/Image';

export default function Nav() {
  return (
    <nav className='sticky top-0 z-50 flex w-screen items-center justify-between bg-gray-900 p-4 drop-shadow-lg'>
      <Link href='/'>
        <div className='flex items-center'>
          <Image
            src='/images/profile.JPG'
            className='rounded-full border  border-black'
            alt='profile'
            width={40}
            height={40}
          />
          <p className='m-1 font-primary font-bold text-yellow-300 max-lg:hidden'>
            luisandrade.me
          </p>
        </div>
      </Link>
      <div>
        <ul className='grid grid-cols-3 max-lg:gap-0 lg:gap-0'>
          <li className='text-center text-yellow-300 hover:underline'>
            <Link href='/'>Inicio</Link>
          </li>
          <li className='text-center text-yellow-300 hover:underline'>
            <Link href='/experiencia'>Experiencia</Link>
          </li>
          <li className='text-center text-yellow-300 hover:underline'>
            <Link href='/blog'>Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
