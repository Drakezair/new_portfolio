import { useEffect } from 'react';

import MainLayout from '@/modules/Common/Layout/MainLayout';
import { getFilteredPages } from '@/modules/Common/libs/notion/api';
import { CTASection } from '@/modules/Common/Sections';
import { BlogCardProps } from '@/modules/Common/UI/BlogCard';
import {
  BlogSection,
  HeroSection,
  ResumeSection,
} from '@/modules/Home/Sections';
import { home_state } from '@/modules/Home/Stores/home_state';

const Seo = {
  title: 'Inicio | Luisandrade.me',
  description:
    'Desarrollador Fullstack con mas de 5 años de experienca. Hablidades de liderazgo, comunicativas y manejo de requerimentos',
  ogtitle: 'Inicio | Luisandrade.me',
  ogurl: 'https//luisandrade.me',
  ogimage: 'https://luisandrade.me/images/profile.JPG',
};

export async function getServerSideProps() {
  const newBlogs = await getFilteredPages({
    and: [
      {
        property: 'status',
        status: {
          equals: 'Public',
        },
      },
      {
        property: 'Tags',
        multi_select: {
          contains: 'New',
        },
      },
    ],
  });

  return { props: { newBlogs } };
}

export default function HomePage({ newBlogs }: { newBlogs: BlogCardProps[] }) {
  useEffect(() => {
    home_state.newBlogs = newBlogs;
  }, [newBlogs]);
  return (
    <MainLayout seo={Seo}>
      <HeroSection />
      <ResumeSection />
      <BlogSection />
      <CTASection />
    </MainLayout>
  );
}
