import Lottie from 'react-lottie';

import animationData from '@/modules/Common/libs/lottie/not_results.json';
export default function FailSearchSection() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
  };
  return (
    <div className='flex items-center justify-center max-lg:h-96'>
      <div className='lg:h-96 lg:w-96'>
        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
}
