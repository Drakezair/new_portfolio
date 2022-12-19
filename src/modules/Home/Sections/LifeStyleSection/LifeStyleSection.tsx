import Lottie from 'lottie-react';

import animationData from '@/modules/Common/libs/lottie/app_dev_dark.json';

export default function LifeStyleSection() {
  return (
    <div className='bg-gray-900 py-14 shadow-sm'>
      <div className='container mx-auto px-6 '>
        <section className='background-radial-gradient text-white '>
          <div className='px-6 py-12 text-center md:px-12 lg:text-left'>
            <div className='container mx-auto'>
              <div className='grid items-center gap-12 lg:grid-cols-2'>
                <div className='mb-12 lg:mb-0'>
                  <Lottie animationData={animationData} />
                </div>
                <div className='mt-12 max-lg:order-first lg:mt-0'>
                  <h1 className='mb-12  font-mono text-5xl tracking-tight text-white md:text-6xl xl:text-7xl'>
                    Código como estilo de vida{' '}
                  </h1>
                  <p className='font-primary text-lg text-white '>
                    Nunca he dejado de dedicarme a mi pasión por ayudar a los
                    demás y resolver problemas. El software cambió mi vida.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
