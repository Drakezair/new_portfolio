import { SearchingSpinner } from '@/modules/Common/UI';
export default function LoadingSection() {
  return (
    <div className='flex h-full items-center justify-center max-lg:h-96'>
      <SearchingSpinner />
    </div>
  );
}
