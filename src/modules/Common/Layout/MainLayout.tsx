import { ReactElement } from 'react';
import { usePanelbear } from '@panelbear/panelbear-nextjs';
import Head from 'next/head';

import Nav from './Nav';

type MainLayoutI = {
  children: ReactElement | ReactElement[];
  seo: {
    title: string;
    description: string;
    ogtitle?: string;
    ogtype?: string;
    ogurl?: string;
    ogimage?: string;
  };
};

export default function MainLayout({
  children,
  seo: { title, description, ogtitle, ogtype, ogurl, ogimage },
}: MainLayoutI) {
  usePanelbear(process.env.NEXT_PUBLIC_SITE_ID as string, {
    debug: process.env.NODE_ENV === 'development',
  });

  return (
    <main>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='robots' content='index' />
        <meta property='og:title' content={ogtitle} />
        <meta property='og:description' content={description} />
        <meta property='og:type' content={ogtype} />
        <meta property='og:url' content={ogurl} />
        <meta property='og:image' content={ogimage} />
        <meta name='robots' content='follow' />
      </Head>
      <Nav />
      <div className='bg-gray-800'>{children}</div>
    </main>
  );
}
