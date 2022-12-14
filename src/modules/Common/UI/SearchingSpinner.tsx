import Lottie from 'lottie-react';

import animationData from '@/modules/Common/libs/lottie/search_posts.json';

export default function SearchingLoad() {
  return (
    <div className='max-h-64 max-w-xl'>
      <Lottie animationData={animationData} />
    </div>
  );
}
