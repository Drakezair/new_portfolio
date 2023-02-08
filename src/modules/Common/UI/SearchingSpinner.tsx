import Lottie from 'lottie-react';

import animationData from '@/modules/Common/libs/lottie/search_posts_dark.json';

export default function SearchingLoad() {
  return (
    <div data-testid='search-spinner' className='max-h-64 max-w-xl'>
      <Lottie animationData={animationData} />
    </div>
  );
}
