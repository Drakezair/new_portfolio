import { ReactElement } from 'react';
import Image from 'next/image';

export default function HeroSection(): ReactElement {
  return (
    <div className='flex h-screen flex-col-reverse items-center justify-center bg-gray-900 max-sm:py-4  md:flex-row md:justify-around'>
      <span className='w-3/6'>
        <h1 className='text-center font-primary text-white lg:text-3xl'>
          FullStack Developer
        </h1>
        <h1 className='my-5 text-center font-mono text-3xl text-white lg:text-7xl'>
          Luis Andrade
        </h1>
        <p className='text-1xl w- text-center font-primary text-white'>
          Más de 6 años de experienca. Hablidades de liderazgo, comunicativas y
          manejo de requerimentos.
        </p>
      </span>
      <Image
        className='rounded-full max-lg:mb-9 max-md:w-9/12'
        src='/images/profile.JPG'
        alt='profile'
        width={400}
        height={400}
      />
    </div>
  );
}
