import Link from 'next/link';
import { useSnapshot } from 'valtio';

import { BlogCard, Button } from '@/modules/Common/UI';
import { home_state } from '@/modules/Home/Stores/home_state';

export default function BlogSection() {
  const { newBlogs } = useSnapshot(home_state);

  return (
    <div className='container my-24 mx-auto px-6'>
      <section className='mb-32 text-center text-gray-800 '>
        <h2 className='mb-12 text-center font-mono text-3xl font-bold'>
          Cursos, tutoriales y mucho más..
        </h2>

        <div className='grid gap-6 lg:grid-cols-3'>
          {newBlogs?.map((item, i) => (
            <BlogCard key={i} {...item} />
          ))}
        </div>
        <Button className='mt-12'>
          <Link href='/blog'>Ver más</Link>
        </Button>
      </section>
    </div>
  );
}
