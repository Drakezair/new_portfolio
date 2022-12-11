import { proxy } from 'valtio';

import { TagDatabaseNotion } from '@/modules/Common/libs/notion/api.types';

const blog_state = proxy({
  tags: [] as TagDatabaseNotion[],
});

export default blog_state;
