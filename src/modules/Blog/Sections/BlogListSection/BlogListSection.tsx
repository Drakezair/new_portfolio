import FiltersBlogLayout from './Layout/FiltersBlogLayout/FiltersBlogLayout';

export default function BlogListSection() {
  return (
    <div>
      <section>
        <div className='grid  grid-cols-12 gap-5 p-7'>
          <div className='col-span-10 h-96 bg-red-700'></div>
          <div className='col-span-2  '>
            <div className='sticky top-28'>
              <FiltersBlogLayout />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
