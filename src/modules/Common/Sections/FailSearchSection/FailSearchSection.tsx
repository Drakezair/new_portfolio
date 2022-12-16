import Lottie from 'lottie-react';

import animationData from '@/modules/Common/libs/lottie/not_results.json';

export default function FailSearchSection() {
  return (
    <div className='flex items-center justify-center max-lg:h-96'>
      <div className='lg:h-96 lg:w-96'>
        <Lottie animationData={animationData} loop={false} />
      </div>
    </div>
  );
}
