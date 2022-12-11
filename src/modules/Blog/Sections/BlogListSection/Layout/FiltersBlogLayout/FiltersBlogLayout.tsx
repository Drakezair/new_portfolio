import { SearchInput } from '@/modules/Common/UI';

export default function FiltersBlogLayout() {
  return (
    <div className='grid gap-3 divide-y'>
      <div className=''>
        <SearchInput />
      </div>
      <div className='h-80'>
        <h1>njinu</h1>
      </div>
    </div>
  );
}
