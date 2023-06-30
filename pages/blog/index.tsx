import { useEffect } from 'react';

import { BlogListSection } from '@/modules/Blog/Sections';
import MainLayout from '@/modules/Common/Layout/MainLayout';
import { getPropertiesDatabase } from '@/modules/Common/libs/notion/api';
import { TagDatabaseNotion } from '@/modules/Common/libs/notion/api.types';

import blog_state from '../../src/modules/Blog/Stores/blog_state';

const Seo = {
  title: 'Blog | Luisandrade.me',
  description:
    'Aprender y enseñar siempre me ha apasionado por lo que inicie este proyecto en el cual comparto mis conocimientos y experiencias como Fullstack Developer. Me alegra mucho que estes aqui.',
  ogtitle: 'Blog | Luisandrade.me',
  ogurl: 'https//luisandrade.me/blog',
  ogimage: 'https://luisandrade.me/images/profile.JPG',
};

export async function getServerSideProps() {
  const { tags } = await getPropertiesDatabase();

  return { props: { tags } };
}

export default function BlogPage({ tags }: { tags: TagDatabaseNotion }) {
  useEffect(() => {
    blog_state.tags = tags;
  }, [tags]);
  return (
    <MainLayout seo={Seo}>
      <BlogListSection />
    </MainLayout>
  );
}
