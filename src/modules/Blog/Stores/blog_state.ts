import { proxy } from 'valtio';

import { TagDatabaseNotion } from '@/modules/Common/libs/notion/api.types';
import { BlogCardProps } from '@/modules/Common/UI/BlogCard';

const blog_state = proxy({
  tags: undefined as TagDatabaseNotion | undefined,
  posts: [] as BlogCardProps[],
  loading: true,
});

export default blog_state;
