import { proxy } from 'valtio';

import { BlogCardProps } from '@/modules/Common/UI/BlogCard';

export const home_state = proxy({
  newBlogs: [] as BlogCardProps[],
});
