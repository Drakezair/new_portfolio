import { useSnapshot } from 'valtio';

import blog_state from '@/modules/Blog/Stores/blog_state';
import { FailSearchSection, LoadingSection } from '@/modules/Common/Sections';
import { BlogCard } from '@/modules/Common/UI';

export default function GridBlogLayout() {
  const { posts, loading } = useSnapshot(blog_state);

  if (loading) return <LoadingSection />;

  if (posts.length === 0) return <FailSearchSection />;

  return (
    <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 '>
      {posts.length > 0 &&
        posts?.map((item, i) => <BlogCard key={i} {...item} />)}
    </div>
  );
}
