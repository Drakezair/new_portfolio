import FiltersBlogLayout from './Layout/FiltersBlogLayout/FiltersBlogLayout';
import GridBlogLayout from './Layout/GridBlogLayout/GridBlogLayout';

export default function BlogListSection() {
  return (
    <div>
      <section>
        <div className='grid gap-5 max-lg:grid-cols-1 lg:grid-cols-12 lg:p-7'>
          <div className='max-lg:p-7 lg:col-span-10'>
            <GridBlogLayout />
          </div>
          <div className='max-lg:order-first max-lg:col-start-auto lg:col-span-2'>
            <div className='sticky top-28 left-0'>
              <FiltersBlogLayout />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
