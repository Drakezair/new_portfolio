import Lottie from 'react-lottie';

import animationData from '@/modules/Common/libs/lottie/search_posts.json';
export default function SearchingLoad() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  return (
    <div className='max-h-64 max-w-xl'>
      <Lottie options={defaultOptions} />
    </div>
  );
}
