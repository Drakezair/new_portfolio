import FiltersBlogLayout from './Layout/FiltersBlogLayout/FiltersBlogLayout';
import GridBlogLayout from './Layout/GridBlogLayout/GridBlogLayout';

export default function BlogListSection() {
  return (
    <div>
      <section>
        <div className='grid gap-5 max-lg:grid-cols-1 lg:min-h-screen lg:grid-cols-12 lg:p-7'>
          <div className='max-lg:p-7 lg:col-span-10'>
            <GridBlogLayout />
          </div>
          <div className='top-16 left-0 z-50 max-lg:sticky max-lg:order-first max-lg:col-start-auto max-lg:shadow-inner lg:col-span-2'>
            <FiltersBlogLayout />
          </div>
        </div>
      </section>
    </div>
  );
}
