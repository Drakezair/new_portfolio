import { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import { Image } from '@/modules/Common/UI';
import { socialMedia } from '@/modules/Home/lib/configs/social_media';

export default function HeroSection(): ReactElement {
  return (
    <div className='bg-gray-900'>
      <div className='container mx-auto flex flex-col-reverse items-center justify-center  max-lg:py-20  md:flex-row md:justify-around lg:h-screen'>
        <span className='w-3/6 text-left'>
          <h1 className='mb-6 font-mono text-3xl text-white lg:text-7xl'>
            Luis Andrade
          </h1>
          <h2 className='mb-1  font-primary text-xl text-white lg:text-2xl'>
            FullStack Developer
          </h2>
          <p className='text-1xl font-primary text-white'>
            Desarrollador de software con más de 6 años de experienca.
            Hablidades de liderazgo, comunicativas y manejo de requerimentos. Me
            apasiona la arquitectura de software, patrones de diseño, buenas
            practicas y enseñar.
          </p>

          <span className='grid grid-cols-12 py-10 max-lg:grid-cols-5'>
            {socialMedia.length > 0 &&
              socialMedia.map(({ icon, url }, i) => (
                <Link href={url} key={i}>
                  <FontAwesomeIcon
                    icon={icon}
                    className='text-3xl text-white'
                  />
                </Link>
              ))}
          </span>
        </span>
        <Image
          className='rounded-full max-lg:mb-9 max-md:w-3/6'
          src='/images/profile.JPG'
          alt='profile'
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}
